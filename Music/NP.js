const Discord = require("discord.js");
module.exports = {
  name: "np",
  aliases: "np",
  description: "what music that playing right now",
  execute(client, message, args) {
    let active = new Map();
    let queue = active.get(message.guild.id);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) {
      const sing2 = new Discord.MessageEmbed()
        .setDescription(`<a:7agebfo2:654069086329765888>| No Music Playing`)
        .setColor("#461a9b")
            .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
      return message.channel.send(sing2);
    }
    let duration = playbackBar(message, serverQueue.songs[0]);
    const sing = new Discord.MessageEmbed()
      .setTitle("Now playing:")
      .setDescription(
        `<a:public33:731881017572458616>| ${serverQueue.songs[0].title} \`(${duration}|${serverQueue.songs[0].duration})\``
      )
      .setColor("#461a9b")
          .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
    return message.channel.send(sing).then(me => {
      setInterval(() => {
        let durationnn = playbackBar(message, serverQueue.songs[0]);
        const song = new Discord.MessageEmbed()
          .setTitle("Now playing:")
          .setDescription(
            `<a:public33:731881017572458616>| ${serverQueue.songs[0].title} \`(${durationnn}|${serverQueue.songs[0].duration})\``
          )
              .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
          .setColor("#461a9b");
        return me.edit(song);
      }, 5000);
    });
    function playbackBar(message, video) {
      const passedTimeInMS = serverQueue.connection.dispatcher.streamTime;
      const passedTimeInMSObj = {
        seconds: Math.floor((passedTimeInMS / 1000) % 60),
        minutes: Math.floor((passedTimeInMS / (1000 * 60)) % 60),
        hours: Math.floor((passedTimeInMS / (1000 * 60 * 60)) % 24)
      };
      const passedTimeFormatted = formatDuration(passedTimeInMSObj);
      return passedTimeFormatted;
    }

    function formatDuration(durationObj) {
      const duration = `${durationObj.hours ? durationObj.hours + ":" : ""}${
        durationObj.minutes ? durationObj.minutes : "00"
      }:${ 
        durationObj.seconds < 10
          ? "0" + durationObj.seconds
          : durationObj.seconds
          ? durationObj.seconds
          : "00"
      }`;
      return duration;
    }
  }
};
