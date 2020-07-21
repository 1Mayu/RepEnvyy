const Discord = require("discord.js");
module.exports = {
  name: "volume",
  aliases: "vol",
  description: "Change volume of currently playing voiceConnection",
  execute(client, message, args) {
    let active = new Map();
    let queue = active.get(message.guild.id);
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voice.channel) {
      const sing3 = new Discord.MessageEmbed()
        .setDescription(
          "<a:false:658743450107117568>| You Need To Join A Voice Channel First!"
        )
        .setColor("#461a9b")
            .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
      return message.channel.send(sing3);
    }
    if (!serverQueue) {
      const sing4 = new Discord.MessageEmbed()
        .setDescription(
          "<a:false:658743450107117568>| There Is Nothing Playing !"
        )
        .setColor("#461a9b")
            .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
      return message.channel.send(sing4);
    }

    if (!args[0]) {
      const sing = new Discord.MessageEmbed()
        .setDescription(
          `<a:Up:720625241671467068>Volume Has Been Changed From **${oldVolume}%** To **${
            args[0]
          }%**`
        )
        .setColor("#461a9b")
            .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
      return message.channel.send(sing);
    }
    if (isNaN(args[0]) || parseInt(args[0]) > 100 || parseInt(args[0]) < 0) {
      const sing = new Discord.MessageEmbed()
        .setDescription(
          "<a:false:658743450107117568>| You Can't Set The Volume Greater Than 100%"
        )
        .setColor("#461a9b")
            .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
      return message.channel.send(sing);
    }

    let oldVolume = serverQueue.volume;
    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    const sing = new Discord.MessageEmbed()
      .setDescription(
        `<a:Up:720625241671467068>| Volume Has Been Changed From **${oldVolume}%** To **${
          args[0]
        }%**`
      )
      .setColor("#461a9b")
          .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
    return serverQueue.textChannel.send(sing);
  }
};
