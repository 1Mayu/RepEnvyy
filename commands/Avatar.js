const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "avatar",
  execute(client, message) {
    let args = message.content.split(" ");
    let copyright = message.mentions.users.first();
    if (args[0] && !args[1]) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setColor("#51545b")
        .setTitle("Avatar Link")
        .setURL(message.author.avatarURL())
        .setImage(message.author.avatarURL({ dynamic: true, size: 1024 }))
        .setTimestamp()
        .setColor("7f00ff")
        .setFooter(
          "By " + message.author.tag,
          message.author.displayAvatarURL()
        );
      message.channel.send(embed);
    }
    if (copyright) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(copyright.tag, copyright.avatarURL())
        .setColor("#51545b")
        .setTitle("Avatar Link")
        .setURL(copyright.avatarURL())
        .setImage(copyright.avatarURL({ dynamic: true, size: 1024 }))
        .setTimestamp()
        .setColor("7f00ff")
        .setFooter("By " + message.author.tag,message.author.displayAvatarURL());
      message.channel.send(embed);
    } else if (args[1] || !copyright) {
      client.users.fetch(args[1]).then(user => {
        const embed = new Discord.MessageEmbed()
          .setAuthor(user.tag, user.displayAvatarURL())
          .setColor("#51545b")
          .setTitle("Avatar Link")
          .setURL(user.displayAvatarURL())
          .setImage(user.avatarURL({ dynamic: true, size: 1024 }))
          .setTimestamp()
          .setColor("7f00ff")
          .setFooter(
            "By " + message.author.tag,
            message.author.displayAvatarURL()
          );
        message.channel.send(embed);
      });
    }
  }
}