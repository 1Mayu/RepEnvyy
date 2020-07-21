const prefix = "-";
const Discord = require("discord.js");
const moment = require("moment");
module.exports = {
  name: "user",
  execute(client, message, args) {
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    moment.locale("en-us");
    var id = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setColor("#707070")
      .addField(
        "Joined Discord Since :",
        `${moment(heg.createdTimestamp).format(
          "YYYY/M/D HH:mm:ss"
        )} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``,
        true
      )
      .addField(
        "Joined Server Since :",
        `${moment(h.joinedAt).format("YYYY/M/D HH:mm:ss")} \n \`${moment(
          h.joinedAt
        ).fromNow()}\``,
        true
      )
      .setTimestamp()
      .setFooter(`${client.user.tag}`, `${message.author.avatarURL()}`)
      .setThumbnail(heg.avatarURL());
    message.channel.send(id);
  }
}