module.exports = async (client, message) => {
  let prefix = '-'
  const fs = require("fs");
  const discord = require("discord.js");
  let xp = require("../Database/Xp.json");
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  let Addxp = Math.floor(Math.random() * 1) + 1;
  if (!xp[message.author.id]) {
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }
  xp[message.author.id].xp = xp[message.author.id].xp + Addxp;
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nextLvL = xp[message.author.id].level * 300;
  if (nextLvL <= xp[message.author.id].xp) {
    xp[message.author.id].level = curlvl + 1;
    fs.writeFileSync("./Database/Xp.json", JSON.stringify(xp), err => {
      if (err) console.log(err);
    });
    let lvlup = new discord.MessageEmbed()
      .setTitle("<a:hib:714223517633347605>Level up")
      .setColor("9400D3")
      .setDescription(
        `<@${message.author.id}> ` + `You Have Reached Level : ` + curlvl
      )
      .setTimestamp();
    client.channels.cache.get("727544519448592384").send(lvlup);
  }
    if (message.content === "باك") {
    message.channel.send("Welcome Back");
    message.channel.send(
      "https://tenor.com/view/yo-welcome-pohler-amy-pohler-gif-13849146"
    );
  }
  if (message.author.bot) return;
  if (message.content === "السلام عليكم") {
    message.channel.send("<a:hello:657537636461707274>عليكم السلام يلا بره ");
    message.channel.send({
      files: [
        "https://cdn.discordapp.com/attachments/659816483760635934/663820140659474443/images.jpg"
      ]
    });
  }
  const developers = ["672817734500745275"];
  const adminprefix = "#";
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + "sa")) {
    client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
  }
  if (message.content.startsWith(adminprefix + "sn")) {
    client.user.setUsername(argresult).then;
    message.channel.send(`Changing The Name To ..**${argresult}** `);
  }

}