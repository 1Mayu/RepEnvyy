const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "bot",
  execute(client, message, args) {
    var args = message.content.split(" ");
    var command = args[0];
    if (command === prefix + "warn") {
      // Warn2 و Warn1  اصنع رتبة ب اسم
      var user = message.guild.member(message.mentions.users.first());
      var warn1 = message.guild.roles.cache.find(role => role.name === `⚠1`);
      var warn2 = message.guild.roles.cache.find(role => role.name === `⚠2`);
      if (!message.channel.guild) {
        message.channel.send(
          "<a:stop0:715231769359548468>| This Command Is Only For Servers"
        );
        if (!message.member.hasPermission("ADMINISTRATOR"))
          return message.reply(
            "**<a:stop0:715231769359548468>| You Dont Have ADMINISTRATOR Permission**"
          );
      } else if (!warn1) {
        message.channel.send(
          "<a:stop0:715231769359548468>| You Have To Create Role `⚠1`"
        );
      } else if (!warn2) {
        message.channel.send(
          "<a:stop0:715231769359548468>| You Have To Create Role `⚠2`"
        );
      } else if (!user) {
        message.channel.send("<a:stop0:715231769359548468>| Mention User !");
      } else if (!message.guild.member(user).roles.has(warn1.id)) {
        user.addRole(warn1);
        message.channel.send("Warned");
      } else if (!message.guild.member(user).roles.has(warn2.id)) {
        user.addRole(warn2);
        message.channel.send("Warned");
      } else {
        user.ban();
        message.channel.send(
          "<a:Cool2:731619397566988379>| That Was The Warn Number 3, Bye Bye" +
            `${user}`
        );
      }
    }
  }
}