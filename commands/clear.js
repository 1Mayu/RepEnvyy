const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "clear",
  execute(client, message) {
    if (message.channel.type === "dm" || message.author.type === "bot") return;
    let admin = message.guild
      .member(message.author)
      .hasPermission("MANAGE_MESSAGES");
    if (!admin) return;
    let num = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!num) {
      message.channel.messages.fetch().then(messages => {
        message.channel.bulkDelete(messages);
        var messagesDeleted = messages.array().length;
        message.channel
          .send(
            `\`\`\`js
${messagesDeleted} Messages Has Been Deleted !
\`\`\``
          )
          .then(m => m.delete({ timeout: 3000, reason: "Clearing the chat" }));
      });
    } else {
      let messagecount = parseInt(num);
      message.channel.messages
        .fetch({ limit: messagecount })
        .then(messages => message.channel.bulkDelete(messages));
      message.channel
        .send(
          `\`\`\`js
${num} Messages Has Been Deleted !
\`\`\``
        )
        .then(m => m.delete({ timeout: 3000, reason: "Clearing the chat" }));
    }
  }
}