const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "info",
  execute(client, message, args) {
    message.channel.send({
      embed: new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor("RANDOM")
        .setTitle(
          `<a:Done2:713864466957074552>| ${client.user.username} Status`
        )
        .addField(
          "<a:Done2:713864466957074552>| My Ping",
          `<a:Dokht:688558835375538205>| ${Date.now() -
            message.createdTimestamp}` + "MS",
          true
        )
        .addField(
          "<a:Done2:713864466957074552>| RAM Usage",
          `<a:Dokht:688558835375538205>| ${(
            process.memoryUsage().rss / 1048576
          ).toFixed()}MB`,
          true
        )
        .addField(
          "<a:Done2:713864466957074552>| servers",
          `<a:Dokht:688558835375538205>| ${client.guilds.cache.size}`,
          true
        )
        .addField(
          "<a:Done2:713864466957074552>| channels",
          `<a:Dokht:688558835375538205>| ${client.channels.cache.size} `,
          true
        )
        .addField(
          "<a:Done2:713864466957074552>| Users",
          `<a:Dokht:688558835375538205>| ${client.users.cache.size} `,
          true
        )
        .addField(
          "<a:Done2:713864466957074552>| My Name",
          `<a:Dokht:688558835375538205>| ${client.user.tag} `,
          true
        )
        .addField(
          "<a:Done2:713864466957074552>| My ID",
          `<a:Dokht:688558835375538205>| ${client.user.id} `,
          true
        )
        .addField(
          "<a:Done2:713864466957074552>| My Prefix",
          `<a:Dokht:688558835375538205>| ${prefix} `,
          true
        )
        .addField(
          "<a:Done2:713864466957074552>| My Language",
          `<a:Dokht:688558835375538205>| JS `,
          true
        )
        .addField(
          "<a:Done2:713864466957074552>| Developed By",
          `<a:Dokht:688558835375538205>| <@672817734500745275> `,
          true
        )
    });
  }
}