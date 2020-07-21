const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "savatar",
  execute(client, message, args) {
    let copyright = message.mentions.users.first();
    if (!message.guild.iconURL())
      return message.channel.send(
        "**<a:stop0:715231769359548468>**|** There's Server Icon xD**"
      );
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("#51545b")
      .setTitle(`${message.guild.name} ` + "Avatar Link")
      .setURL(message.guild.iconURL())
      .setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
      .setTimestamp()
      .setColor("7f00ff")
      .setFooter("By " + message.author.tag, message.author.displayAvatarURL());
    message.channel.send(embed);
  }
}