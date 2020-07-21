const Discord = require("discord.js");
let xp = require("../Database/Xp.json");
module.exports = {
  name: "level",
  execute(client, message, args) {
    if (message.channel.type == "dm") return;
    if (!xp[message.author.id]) {
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nextlvlxp = curlvl * 300;
    let difference = nextlvlxp - curxp;
    if (!xp[message.author.id]) {
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
    var embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username}`)
      .setColor("9400D3")
      .setTitle("<a:partydiscord:657997130904109081>Your Profile")
      .setDescription(
        "<a:HyperBlobOnDrug:657997202597216266>XP:" +
          ` ${curxp}` +
          "\n<a:crownb:683267382315450388>Level:" +
          ` ${curlvl}`
      )
      .setFooter(
        `${difference} XP Till Level ${curlvl + 1}`,
        message.author.displayAvatarURL
      );
    message.channel.send(embed);
  }
}