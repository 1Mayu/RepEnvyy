const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "unmc",
  execute(client, message, args) {
    if (!message.channel.guild)
      return message.reply(
        "<a:stop0:715231769359548468>| This Command Is Only For Servers !"
      );
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "<a:stop0:715231769359548468>| You Dont Have Permission"
      );
    message.channel
      .createOverwrite(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.channel.send(
          "<a:Done:662430350705950754>| Chat Opned successfully !"
        );
      });
  }
}