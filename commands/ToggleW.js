const Discord = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "tw",
  execute(client, message, args) {
    const welcome = JSON.parse(
      fs.readFileSync("./Database/Welcomer.json", "utf8")
    );
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        onoff: "Off"
      };
    if (welcome[message.guild.id].onff === "Off")
      return [
        message.channel.send(
          `**<a:on:642500266985259018> The Welcome Is __𝐎𝐍__ ! <a:on:642500266985259018>**`
        ),
        (welcome[message.guild.id].onoff = "On")
      ];
    if (welcome[message.guild.id].onoff === "On")
      return [
        message.channel.send(
          `**<a:off:642500290171502602> The Welcome Is __𝐎𝐅𝐅__ ! <a:off:642500290171502602>**`
        ),
        (welcome[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./Database/Welcomer.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
}