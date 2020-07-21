const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "unban",
  async execute(client, message, args) {
    var user =
      message.mentions.members.first() ||
      client.users.cache.get(
        message.content
          .split(" ")
          .slice(1)
          .join(" ")
      );
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "<a:stop0:715231769359548468>**| You Dont't Have Permission To Use This Command**"
      );
    await message.guild.fetchBans();
    if (!user)
      return message.channel.send(
        `<a:stop0:715231769359548468>**| Insert ID or Mention User**`
      );
    message.guild.members.unban(user);
    message.channel.send(
      `<a:Cool2:731619397566988379>| ${user} **Unbanned !**`
    );
  }
}