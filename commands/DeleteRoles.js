const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "dr",
  execute(client, message, args) {
    if (!message.channel.guild) return;
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return message.reply("**You Don't Have `MANAGE_ROLES` Permission**");
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
      return message.reply("**I Don't Have `MANAGE_ROLES` Permission**");
    message.guild.roles.cache.forEach(message => {
      message.delete({ timeout: 0 });
    });
    message.reply(
      "<a:Done:662430350705950754> `Success Deleted All Roles - Ranks`"
    );
  }
}