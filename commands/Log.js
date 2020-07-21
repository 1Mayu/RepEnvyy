const prefix = "-";
const Discord = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "setlog",
  execute(client, message, args) {
    let log = JSON.parse(fs.readFileSync("./Database/Log.json", "utf8"));
    if (!message.channel.guild) return;
    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.cache.find(
      channel => channel.name === `${room}`
    );
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.MessageEmbed()
      .setTitle(
        "<a:dance:654069077593292830>| **Done The Log Code Has Been Setup**"
      )
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.send(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./Database/Log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
      if (message.content.startsWith(prefix + "togglelog")) {
        if (!message.channel.guild)
          if (!message.member.hasPermission("MANAGE_GUILD"))
            message.channel.send(
              "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
            );
        if (!log[message.guild.id]) log[message.guild.id] = { onoff: "Off" };
        if (log[message.guild.id].onoff === "Off")
          [
            message.channel.send(`**The log Is __On__ !**`),
            (log[message.guild.id].onoff = "On")
          ];
        if (log[message.guild.id].onoff === "On")
          [
            message.channel.send(`**The log Is __Off__ !**`),
            (log[message.guild.id].onoff = "Off")
          ];
        fs.writeFile("./Database/Log.json", JSON.stringify(log), err => {
          if (err)
            console.error(err).catch(err => {
              console.error(err);
            });
        });
      }
    });
  }
}