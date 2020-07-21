const Discord = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "colors",
  async execute(client, message, args) {
    var fsn = require("fs-nextra");
    var { Canvas } = require("canvas-constructor");
    var x = 0;
    var y = 0;
    if (message.guild.roles.cache.filter(role => !isNaN(role.name)).size <= 0)
      return message.reply("can't find any colors");
    message.guild.roles.cache
      .filter(role => !isNaN(role.name))
      .sort((b1, b2) => b1.name - b2.name)
      .forEach(() => {
        x += 100;
        if (x > 100 * 12) {
          x = 100;
          y += 80;
        }
      });
    var image = await fs.readFileSync("./Images/Colors.jpg");
    var mado = new Canvas(100 * 11, y + 250)
      .addBeveledImage(image, 0, 0, 100 * 11, y + 250, 50)
      .setTextBaseline("middle")
      .setColor("white")
      .setTextSize(60)
      .addText(`${message.guild.name}'s Colors`, 265, 50);
    x = 0;
    y = 150;
    message.guild.roles.cache
      .filter(role => !isNaN(role.name))
      .sort((b1, b2) => b1.name - b2.name)
      .forEach(role => {
        x += 75;
        if (x > 100 * 10) {
          x = 75;
          y += 80;
        }
        mado
          .setTextBaseline("middle")
          .setTextAlign("center")
          .setColor(role.hexColor)
          .addBeveledRect(x, y, 60, 60, 15)
          .setColor("white");
        if (`${role.name}`.length > 2) {
          mado.setTextSize(30);
        } else if (`${role.name}`.length > 1) {
          mado.setTextSize(40);
        } else {
          mado.setTextSize(50);
        }
        mado.addText(role.name, x + 30, y + 30);
      });
    const buffer = mado.toBuffer();
    const filename = `${message.guild.name}-colors.jpg`;
    const attachment = new Discord.MessageAttachment(buffer, filename);
    message.channel.send(attachment);
  }
}