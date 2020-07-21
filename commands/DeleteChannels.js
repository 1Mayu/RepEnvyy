const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "dc",
  execute(client, message, args) {
    if (!message.channel.guild) return;
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
    message.guild.channels.cache.forEach(message => {
      message.delete({ timeout: 0 });
    });
  }
}