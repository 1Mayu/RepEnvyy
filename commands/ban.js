const prefix = "-";
module.exports = {
  name: "ban",
  async execute(client, message, args) {
    if (message.author.x5bz) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    var mention =
      message.mentions.members.first() ||
      client.users.cache.get(
        message.content
          .split(" ")
          .slice(1)
          .join(" ")
      );
    var user =
      message.mentions.members.first() ||
      client.users.cache.get(
        message.content
          .split(" ")
          .slice(1)
          .join(" ")
      );
    await client.users.fetch().catch(error => {
      console.log(error);
      if (!message.channel.guild)
        return message.channel.send(
          "**<a:stop0:715231769359548468>| This Command Only For Servers !**"
        );
      if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
        return message.channel.send(
          "**<a:stop0:715231769359548468>| You Don't Have ` BAN_MEMBERS ` Permission !**"
        );
      if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
        return message.channel.send(
          "**<a:stop0:715231769359548468>| I Don't Have ` BAN_MEMBERS ` Permission !**"
        );
      if (!user)
        return message.channel.send(
          "**<a:stop0:715231769359548468>| Mention User !**"
        );
      if (!message.guild.member(mention).bannable)
        return message.channel.send(
          "**<a:stop0:715231769359548468>| I Can't Ban A Member Higher Than My Role !**"
        );
    if (message.guild.member(user).hasPermission("BAN_MEMBERS"))
   return message.channel.send("<a:stop0:715231769359548468>| You Can't Ban Mod's");
      if (user.id == message.author.id)
        return message.channel.send(
          `<a:stop0:715231769359548468>| **${message.author.username} You Cant Ban Yourself**`
        );
      if (
        message.guild.member(message.author).roles.highest ===
        message.guild.member(user).roles.highest
      )
        return message.channel.send(
          `<a:stop0:715231769359548468>**| You Have The Same Role You Can't Ban Him Idiot**`
        );
      let reason =
        message.content
          .split(" ")
          .slice(2)
          .join(" ") || "No Reason";
      message.guild.member(user).ban({ reason: reason });
      message.channel.send(
        `**<a:Cool2:731619397566988379>| Bye Bye <@${user.id}> !**`
      );
    })
}
}
  
