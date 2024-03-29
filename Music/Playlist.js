const { MessageEmbed } = require("discord.js");
const { play } = require("../Loader/Music.js");
const { YOUTUBE_API_KEY, MAX_PLAYLIST_SIZE } = require("../config.json");
const Discord = require("discord.js");
module.exports = {
  name: "playlist",
  aliases: ["pl"],
  description: "Play a playlist from youtube",
  async execute(client, message, args) {
    const { PRUNING } = require("../config.json");
    const { channel } = message.member.voice;
const YouTubeAPI = require("simple-youtube-api");
    const youtube = new YouTubeAPI(YOUTUBE_API_KEY);
    if (!args.length) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      const sing = new Discord.MessageEmbed()
        .setDescription(
          "<a:false:658743450107117568>| You Need To Be In A Voice Channel"
        )
        .setColor("#461a9b");
      return message.channel.send(sing);
    }
    if (!channel)
      return message
        .reply("<a:false:658743450107117568>| You need to join a voice channel first!")
        .catch(console.error);

    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return message.reply(
        "<a:false:658743450107117568>| Cannot connect to voice channel, missing permissions"
      );
    if (!permissions.has("SPEAK"))
      return message.reply(
        "<a:false:658743450107117568>| I cannot speak in this voice channel, make sure I have the proper permissions!"
      );

    const search = args.join(" ");
    const pattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
    const url = args[0];
    const urlValid = pattern.test(args[0]);

    const serverQueue = message.client.queue.get(message.guild.id);
    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };

    let song = null;
    let playlist = null;
    let videos = [];

    if (urlValid) {
      try {
        playlist = await youtube.getPlaylist(url, { part: "snippet" });
        videos = await playlist.getVideos(MAX_PLAYLIST_SIZE || 10, {
          part: "snippet"
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const results = await youtube.searchPlaylists(search, 1, {
          part: "snippet"
        });
        playlist = results[0];
        videos = await playlist.getVideos(MAX_PLAYLIST_SIZE || 10, {
          part: "snippet"
        });
      } catch (error) {
        console.error(error);
      }
    }

    videos.forEach(video => {
      song = {
        title: video.title,
        url: video.url,
        duration: video.durationSeconds
      };

      if (serverQueue) {
        serverQueue.songs.push(song);
        if (!PRUNING) {
          const sing = new Discord.MessageEmbed()
            .setDescription(`<a:hib:714223517633347605>| ${song.title}  **Added To Queue** \`(${serverQueue.songs.length})\``)
            .setTimestamp()
            .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
            .setColor("#461a9b");
        }
      } else {
        queueConstruct.songs.push(song);
      }
    });
    if (!serverQueue)
      message.client.queue.set(message.guild.id, queueConstruct);
    if (!serverQueue) {
      try {
        const connection = await channel.join();
        queueConstruct.connection = connection;
        play(queueConstruct.songs[0], message);
      } catch (error) {
        console.error(`Could not join voice channel: ${error}`);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel
          .send(`Could not join the channel: ${error}`)
          .catch(console.error);
      }
    }
  }
};
