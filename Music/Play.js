module.exports = {
  name: "play",
  description: "PLAY THE SOFTNESS OF THE SOUND",
  async execute(client, message, args) {
    //FIRST OF ALL WE WILL ADD ERROR MESSAGE AND PERMISSION MESSSAGE
const Discord = require("discord.js");
const { Util } = require("discord.js");
const { YOUTUBE_API_KEY } = require("../config.json");
const ytdl = require("ytdl-core");
const YoutubeAPI = require("simple-youtube-api");
const youtube = new YoutubeAPI(YOUTUBE_API_KEY);
const { play } = require("../Loader/Music.js");
    if (!args.length) {
      const sing = new Discord.MessageEmbed().setColor("#461a9b")
        .setDescription(`<a:hib:714223517633347605>Play Commands: 

\`\`${client.prefix}play <song title>\`\` -Plays The First Result From Youtube
\`\`${client.prefix}play <URL>\`\` -Plays The Provided Song Playlist Or Stream`);
      return message.channel.send(sing);
    }
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("<a:false:658743450107117568>| You Have To Join A Voice Channel !");
    }

    //WE WILL ADD PERMS ERROR LATER :(

    const targetsong = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(list=)([^#\&\?]*).*/gi;
    const url = args[0];
    const urlcheck = videoPattern.test(args[0]);

    if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
      return message.client.commands
        .get("playlist")
        .execute(client, message, args);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    var videos = await youtube.searchVideos(args, 1);
    var video = await youtube.getVideoByID(videos[0].id);
    let hrs =
      video.duration.hours > 0
        ? video.duration.hours > 9
          ? `${video.duration.hours}:`
          : `0${video.duration.hours}:`
        : "";
    let min =
      video.duration.minutes > 9
        ? `${video.duration.minutes}:`
        : `0${video.duration.minutes}:`;
    let sec =
      video.duration.seconds > 9
        ? `${video.duration.seconds}`
        : `0${video.duration.seconds}`;
    let dur = `${hrs}${min}${sec}`;

    let ms = video.durationSeconds * 1000;

    const song = {
      id: video.id,
      title: video.title,
      duration: dur,
      msDur: ms,
      url: `https://www.youtube.com/watch?v=${video.id}`
    };
    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };

    let songData = null;

    if (urlcheck) {
      try {
        songData = await ytdl.getInfo(args[0]);
        song = {
          title: songData.videoDetails.title,
          url: songData.videoDetails.video_url,
          duration: songData.videoDetails.lengthSeconds
        };
      } catch (error) {
        if (message.include === "copyright") {
          return message
            .reply("<a:false:658743450107117568>| Copyrighted ;-;")
            .catch(console.error);
        } else {
          console.error(error);
        }
      }
    } else {
      try {
        const result = await youtube.searchVideos(targetsong, 1);
        songData = await youtube.getVideo(result[0].url);
        song = {
          title: songData.videoDetails.title,
          url: songData.videoDetails.video_url,
          duration: songData.videoDetails.lengthSeconds,
        };
      } catch (error) {
        console.error(error);
      }
    }

    if (serverQueue) {
      serverQueue.songs.push(song);
      const sing = new Discord.MessageEmbed()
        .setDescription(`<a:hib:714223517633347605>| ${song.title}  **Added To Queue** \`(${serverQueue.songs.length})\``)
        .setTimestamp()
        .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
        .setColor("#461a9b");
      return serverQueue.textChannel.send(sing).catch(console.error);
    } else {
      queueConstruct.songs.push(song);
    }

    if (!serverQueue)
      message.client.queue.set(message.guild.id, queueConstruct);

    if (!serverQueue) {
      try {
        queueConstruct.connection = await channel.join();
        play(queueConstruct.songs[0], message);
      } catch (error) {
        console.error(`Could not join voice channel: ${error}`);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel
          .send({
            embed: {
              description: `😭 | Could not join the channel: ${error}`,
              color: "#ff2050"
            }
          })
          .catch(console.error);
      }
    }
  }
};
