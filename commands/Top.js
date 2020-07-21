const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "top",
  execute(client, message, args) {
    const fs = require("fs");
    const top = JSON.parse(fs.readFileSync("./Database/Top.json", "UTF8"));
    function save() {
      fs.writeFileSync("./Database/Top.json", JSON.stringify(top, null, 4));
    }
    client.on("voiceStateUpdate", async function(oldMember, newMember) {
      if (newMember.user.bot) return;
      if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
      if (!top[newMember.guild.id][newMember.user.id])
        top[newMember.guild.id][newMember.user.id] = {
          text: 0,
          voice: parseInt(Math.random() * 10),
          msgs: 0,
          id: newMember.user.id
        };
      save();
      if (!oldMember.voiceChannel && newMember.voiceChannel) {
        var addXP = setInterval(async function() {
          top[newMember.guild.id][newMember.user.id].voice += parseInt(
            Math.random() * 4
          );
          save();
          if (!newMember.voiceChannel) {
            clearInterval(addXP);
          }
        }, 60000);
      }
    });

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!top[message.guild.id]) top[message.guild.id] = {};
    if (!top[message.guild.id][message.author.id])
      top[message.guild.id][message.author.id] = {
        text: parseInt(Math.random() * 10),
        voice: 1,
        msgs: 0,
        id: message.author.id
      };
    if (top[message.guild.id][message.author.id].msgs > 10) {
      top[message.guild.id][message.author.id].text += parseInt(
        Math.random() * 4
      );
      top[message.guild.id][message.author.id].msgs = 0;
    }
    save();
    var args = message.content.split(" ");
    var cmd = args[0].toLowerCase();
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(prefix + "top text")) {
      var topArray = Object.values(top[message.guild.id]);
      var num = 0;
      var textStr = `${topArray
        .sort((a, b) => b.text - a.text)
        .slice(0, 10)
        .filter(
          user => user.text > 0 && message.guild.members.cache.get(user.id)
        )
        .map(function(user) {
          if (user.text > 0) {
            return `**#${++num} | <@${user.id}> XP: ${user.text} **`;
          }
        })
        .join("\n")}`;
      var embed = new Discord.MessageEmbed()
        .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
        .setColor("13B813")
        .addField(
          `**:speech_balloon: | TEXT LEADERBOARD**`,
          `${textStr} \n**✨ | For More: ${prefix}top text**`,
          true
        )
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp();
      message.channel.send({
        embed: embed
      });
    } else {
      if (message.content.startsWith(prefix + "top voice")) {
        var topArray = Object.values(top[message.guild.id]);
        var num = 0;
        var voiceStr = `${topArray
          .sort((a, b) => b.voice - a.voice)
          .slice(0, 10)
          .filter(
            user => user.voice > 0 && message.guild.members.cache.get(user.id)
          )
          .map(function(user) {
            if (user.voice > 0) {
              return `**#${++num} | <@${user.id}> XP: ${user.voice}**`;
            }
          })
          .join("\n")}`;
        var embed = new Discord.MessageEmbed()
          .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
          .setColor("13B813")
          .addField(
            `**:microphone2: | VOICE LEADERBOARD**`,
            `${voiceStr} \n**:sparkles: More?** ${prefix}top voice`,
            true
          )

          .setFooter(message.author.tag, message.author.displayAvatarURL)
          .setTimestamp();
        message.channel.send({
          embed: embed
        });
      } else {
        if (message.content.startsWith(prefix + "top")) {
          var topArray = Object.values(top[message.guild.id]);
          var num = 0;
          var textStr = `${topArray
            .sort((a, b) => b.text - a.text)
            .slice(0, 5)
            .filter(
              user => user.text > 0 && message.guild.members.cache.get(user.id)
            )
            .map(function(user) {
              if (user.text > 0) {
                return `**#${++num} | <@${user.id}> XP: ${user.text} **`;
              }
            })
            .join("\n")}`;
          num = 0;
          var voiceStr = `${topArray
            .sort((a, b) => b.voice - a.voice)
            .slice(0, 5)
            .filter(
              user => user.voice > 0 && message.guild.members.cache.get(user.id)
            )
            .map(function(user) {
              if (user.voice > 0) {
                return `**#${++num} | <@${user.id}> XP: ${user.voice} **`;
              }
            })
            .join("\n")}`;
          var embed = new Discord.MessageEmbed()
            .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
            .addField(
              "**TOP 5 TEXT :speech_balloon:**",
              `${textStr} \n**:sparkles: More?** ${prefix}top text`,
              true
            )
            .addField(
              "**TOP 5 VOICE :microphone2:**",
              `${voiceStr} \n**:sparkles: More?** ${prefix}top voice`,
              true
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()
            .setColor("13B813");
          message.channel.send({
            embed: embed
          });
        }
      }
    }
  }
};
