const prefix = "-";
const Discord = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "set",
  execute(client, message, args) {
    const welcome = JSON.parse(
      fs.readFileSync("./Database/Welcomer.json", "utf8")
    );
    if (!message.channel.guild) return;
    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.cache.find(r => r.name === `${room}`);
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** ``MANAGE_GUILD``"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom) return message.channel.send(" Cant Find This Channel");
    let embed = new Discord.MessageEmbed()
      .setTitle("**Done The Welcome Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${client.user.username}`);
    message.channel.send(embed);
    welcome[message.guild.id] = {
      channel: room,
      onoff: "On",
      by: "On",
      dm: "Off",
      leave: "Off"
    };
    fs.writeFile("./Database/Welcomer.json", JSON.stringify(welcome), err => {
      if (err) console.error(err);
    });
  }
}