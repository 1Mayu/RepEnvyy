const ytdl = require("ytdl-core");
const Discord = require("discord.js");
module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);

    if (!song) {
      message.client.queue.delete(message.guild.id);
    }

    try {
      var stream = await ytdl(song.url, {
        quality: "highestaudio",
        filter: "audioonly"
      });
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }
      console.error(error);
    }

    const dispatcher = queue.connection
      .play(stream)
      .on("finish", () => {
        if (queue.loop) {
          let lastsong = queue.songs.shift();
          queue.songs.push(lastsong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
      })
      .on("error", console.error);
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //VOLUME

    const sing = new Discord.MessageEmbed()
      .setDescription(`<a:hib:714223517633347605>| ${song.title}  **Added To Queue** \`(${queue.songs.length})\``)
      .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
      .setColor("#461a9b");
    queue.textChannel.send(sing);
  }
};
 