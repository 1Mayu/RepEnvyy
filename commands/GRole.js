const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "role",
  execute(client, message, args) {
    var args = message.content.split(" ").slice(1);
    var msg = message.content.toLowerCase();
    if (!message.guild) return;
    if (!msg.startsWith(prefix + "role")) {
      return;
      if (!message.member.hasPermission("MANAGE_ROLES"))
        return message.channel.send(
          "**<a:Cool2:731619397566988379>| You Dont Have Permission**"
        );
      var role = msg
        .split(" ")
        .slice(2)
        .join(" ")
        .toLowerCase();
      var role1 = message.guild.roles
        .filter(r => r.name.toLowerCase().indexOf(role) > -1)
        .first();
      if (!role1)
        return message.channel.send(
          "**<a:Cool2:731619397566988379>| You Have To Put The Rank Name That You Want To Give It To The User !**"
        );
      if (message.mentions.members.first()) {
        message.mentions.members.first().roles.add(role1);
        return message.channel.send(
          `**<a:Cool2:731619397566988379>| ${args[0]}** Has Got **${
            role1.name
          }** Rank !`
        );
      }
      if (args[0].toLowerCase() == "all") {
        message.guild.members.forEach(m => m.roles.add(role1));
        return message.channel.send(
          `<a:Cool2:731619397566988379>| Everyone Took **${role1.name}** Rank !`
        );
      } else if (args[0].toLowerCase() == "bots") {
        message.guild.members
          .filter(m => m.user.bot)
          .forEach(m => m.roles.add(role1));
        return message.channel.send(
          `<a:Cool2:731619397566988379>| All Bots Took **${role1.name}** Rank !`
        );
      } else if (args[0].toLowerCase() == "users") {
        message.guild.members
          .filter(m => !m.user.bot)
          .forEach(m => m.roles.add(role1));
        return message.channel.send(
          `<a:Cool2:731619397566988379>| All Users Took **${role1.name}** Rank !`
        );
      }
    } else {
      if (!args[0])
        return message.channel.send(
          "**<a:Cool2:731619397566988379>| You Have To Mention Tha User That You Want To Give Him The Rank !**"
        );
      if (!args[1])
        return message.channel.send(
          "**<a:Cool2:731619397566988379>| You Have To Put The Rank Name That You Want To Give It To The User !**"
        );
      var role = msg
        .split(" ")
        .slice(2)
        .join(" ")
        .toLowerCase();
      var role1 = message.guild.roles.cache
        .filter(r => r.name.toLowerCase().indexOf(role) > -1)
        .first();
      if (!role1)
        return message.channel.send(
          "**<a:Cool2:731619397566988379>| You Have To Put The Rank Name That You Want To Give It To The User !**"
        );
      if (message.mentions.members.first()) {
        message.mentions.members.first().roles.add(role1);
        return message.channel.send(
          `**<a:Cool2:731619397566988379>| ${args[0]}** Has Got **${
            role1.name
          }** Rank !`
        );
      }
      if (args[0].toLowerCase() == "all") {
        message.guild.members.cache.forEach(m => m.roles.add(role1));
        return message.channel.send(
          `<a:Cool2:731619397566988379>| Everyone Took **${role1.name}** Rank !`
        );
      } else if (args[0].toLowerCase() == "bots") {
        message.guild.members.cache
          .filter(m => m.user.bot)
          .forEach(m => m.roles.add(role1));
        return message.channel.send(
          `<a:Cool2:731619397566988379>| All Bots Took **${role1.name}** Rank !`
        );
      } else if (args[0].toLowerCase() == "users") {
        message.guild.members.cache
          .filter(m => !m.user.bot)
          .forEach(m => m.roles.add(role1));
        return message.channel.send(
          `<a:Cool2:731619397566988379>| All Users Took **${role1.name}** Rank !`
        );
      }
    }
  }
}