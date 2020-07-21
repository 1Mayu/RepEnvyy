const Discord = require("discord.js");
module.exports = {
  name: "kick",
  execute(client, message) {
    if (message.author.x5bz) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    var user =
      message.mentions.users.first() ||
      client.users.cache.get(
        message.content
          .split(" ")
          .slice(1)
          .join(" ")
      );
    if (!message.channel.guild)
      return message.channel.send(
        "**<a:stop0:715231769359548468>| This Command Only For Servers !**"
      );
    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        "**<a:stop0:715231769359548468>| You Don't Have ` KICK_MEMBERS ` Permission !**"
      );
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        "**<a:stop0:715231769359548468>| I Don't Have ` KICK_MEMBERS ` Permission !**"
      );
    if (!user)
      return message.channel.send(
        "**<a:stop0:715231769359548468>| Mention User !**"
      );
    if (!message.guild.member(user).kickable)
      return message.channel.send(
        "**<a:stop0:715231769359548468>| I Can't Kick A Member Higher Than My Role !**"
      );
    if (user.id == message.author.id)
      return message.channel.send(
        `<a:stop0:715231769359548468>| **${message.author.username} You Cant Kick Yourself**`
      );
    if (
      message.guild.member(message.author).roles.highest ===
      message.guild.member(user).roles.highest
    )
      return message.channel.send(
        `<a:stop0:715231769359548468>**| You Have The Same Role You Can't Kick Him Idiot**`
      );
    if (message.guild.member(user).hasPermission("KICK_MEMBERS"))
    return message.channel.send("<a:stop0:715231769359548468>| You Can't Kick Mod's");
    let reason =
      message.content
        .split(" ")
        .slice(2)
        .join(" ") || "No Reason";
    message.guild.member(user).kick({ reason: reason });
    message.channel.send(
      `**<a:Cool2:731619397566988379>| Bye Bye <@${user.id}> !**`
    );
  }
}
