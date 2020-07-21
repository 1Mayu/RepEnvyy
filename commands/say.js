const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "say",
  execute(client, message) {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (message.content.startsWith(prefix + "say")) {
      message.delete({ timeout: 0 });
      if (!args) return;
      message.channel.send(`${args}`);
    }
  }
}