const prefix = "-";
const moment = require("moment");
const Discord = require("discord.js");
module.exports = {
  name: "server",
  execute(client, message, args) {
    let embed = new Discord.MessageEmbed();

    embed.addField(
      ` <a:Warn:657996732654813214>| Server ID :`,
      ` **~~${message.guild.id}~~**`,
      true
    );

    embed.addField(
      ` <a:Loading:657996792264392705>| Created on :`,
      ` **~~${moment(message.guild.createdAt).format(
        `D/M/YYYY h:mm`
      )} \n ${moment(message.guild.createdAt)
        .locale("EN-us")
        .fromNow()}~~**`,
      true
    );

    embed.addField(
      ` <a:blackheart:661523838718312448>| OwnedBy :`,
      ` **~~${message.guild.owner.user.tag}~~**`,
      true
    );

    embed.addField(
      ` <a:Right:657996403490160650>| Members : **~~${message.guild.members.cache.size}~~**`,
      ` **~~${
        message.guild.members.cache.filter(c => c.presence.status !== "offline")
          .size
      }~~** Online`,
      true
    );

    embed.addField(
      ` <a:Left:657995629552992278>| Channels : **~~${message.guild.channels.cache.size}~~**`,
      ` **~~${
        message.guild.channels.cache.filter(f => f.type === "text").size
      }~~** Text | **~~${
        message.guild.channels.cache.filter(f => f.type === "voice").size
      }~~** Voice`,
      true
    );

    embed.addField(
      ` <a:HyperBlobOnDrug:657997202597216266>| Others : `,
      ` Region: **~~${message.guild.region}~~**`,
      true
    );

    embed.addField(
      ` <a:RainbowHeart:657996847125757972>| Roles : `,
      `**~~${message.guild.roles.cache.size}~~**`
    );

    embed.addField(`Bot Creator |`, `<@672817734500745275>`, true);

    embed.setFooter(`${client.user.tage}`);

    embed.setThumbnail(`${message.author.avatarURL()}`);
    embed.setTimestamp();
    embed.setFooter(`By ${message.author.tag}`);
    message.channel.send(embed);
  }
}