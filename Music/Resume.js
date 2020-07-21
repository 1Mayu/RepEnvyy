module.exports = {
  name: "resume",
  description: "Resume the paused Song",
  aliases: "res",
  execute(client, message, args) {
    const { channel } = message.member.voice;
    if (!channel) {
      const Discord = require("discord.js");
      const sing = new Discord.MessageEmbed()
        .setDescription(
          "<a:Warn:657996732654813214>| You Need To Be In A Voice Channel :/"
        )
        .setColor("#461a9b")
            .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
      return message.channel.send(sing);
    }
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      const Discord = require("discord.js");
      const sing = new Discord.MessageEmbed()
        .setDescription(
          `<a:Cool2:731619397566988379>| Resumed **${serverQueue.songs[0].title}**`
        )
        .setColor("#461a9b");
      return message.channel.send(sing);
    }
    const Discord = require("discord.js");
    const sing = new Discord.MessageEmbed()
      .setDescription(
        "<a:false:658743450107117568>| There Is Nothing Playing That I Could Resume"
      )
      .setColor("#461a9b")
          .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
    return message.channel.send(sing);
  }
};
