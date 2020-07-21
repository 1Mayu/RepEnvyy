module.exports = async (client, member) => {
  const fs = require("fs");
  const discord = require("discord.js");
  const { get } = require('snekfetch');
  const welcome = JSON.parse(fs.readFileSync("./Database/Welcomer.json", "utf8"));
  const invites = {};
  if (!welcome[member.guild.id]) welcome[member.guild.id] = { onoff: "Off" };
  if (welcome[member.guild.id].onoff === "Off") return;
  const Canvas = require("canvas");
  const jimp = require("jimp");
  const Welcome = ["./Images/Welcome.png"];
  let Image = Canvas.Image,
    canvas = Canvas.createCanvas(400, 205),
    ctx = canvas.getContext("2d");
  ctx.patternQuality = "bilinear";
  ctx.filter = "bilinear";
  ctx.antialias = "subpixel";
  ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.stroke();
  ctx.beginPath();
  fs.readFile(`${Welcome}`, function(err, Background) {
    if (err) return console.log(err);
    let BG = Canvas.Image;
    let ground = new Image();
    ground.src = Background;
    ctx.drawImage(ground, 0, 0, 400, 205);
  });

  let url = member.user.displayAvatarURL({
    format: "webp",
    dynamic: true,
    size: 1024
  })
    ? member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 })
    : member.user.displayAvatarURL({
        format: "png",
        dynamic: true,
        size: 1024
      });
  jimp.read(url, (err, ava) => {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
      if (err) return console.log(err);

      ctx.font = "17px Arial";
      ctx.fontSize = "72px";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(member.user.username, 260, 145);

      let Avatar = Canvas.Image;
      let ava = new Avatar();
      ava.src = buf;
      ctx.beginPath();
      ctx.arc(130, 92, 71, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(ava, 60, 22, 145, 145);
      let c = member.guild.channels.cache.find(channel => channel.name === `${welcome[member.guild.id].channel}`);
      if (!c) return;
      const filename = `${member.guild.name}.jpg`;
      const attachment = new discord.MessageAttachment(
      canvas.toBuffer(),filename);
      c.send(attachment);
      c.send("<a:partydiscord:657997130904109081>You Have Reached " +`**${member.guild.name}** ` +"Server");
      c.send(`<a:crownb:683267382315450388>User ${member}`);
      fs.writeFile("./Database/Welcomer.json", JSON.stringify(welcome), err => {
        if (err)
          console.error(err).catch(err => {
            console.error(err);
});
});
});
});
};