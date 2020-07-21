const discord = require("discord.js");
module.exports = {
  name: "stop",
  description: "Stop the music",
  aliases: "sp",
  execute(client, message, args) {
    const { channel } = message.member.voice;
    if (!channel) {
      const Discord = require("discord.js");

      const sing = new Discord.MessageEmbed()
        .setDescription(
          "<a:false:658743450107117568>| You Need To Be In Vice Channel"
        )
        .setColor("#461a9b")
            .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
      return message.channel.send(sing);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      const Discord = require("discord.js");
      const sing = new Discord.MessageEmbed()
        .setDescription(
          "<a:false:658743450107117568>| There Is Nothing Playing That I Could Stop"
        )
        .setColor("#461a9b")
            .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
      return message.channel.send(sing);
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();

    const Discord = require("discord.js");
    const sing = new Discord.MessageEmbed()
      .setDescription(
        "**<a:Cool2:731619397566988379>| Music Has Been Stoped And The Queue Has Been Cleard**"
      )
      .setColor("#461a9b")
          .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
    serverQueue.textChannel.send(sing);
  }
};