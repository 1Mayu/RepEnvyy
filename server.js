const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://envves.glitch.me`);
}, 280000);
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: true,
  disabledEvents: ["TYPING_START"]
});
let xp = require("./Database/Xp.json");
const fs = require("fs");
const { readdirSync } = require("fs");
const { join } = require("path");
const PREFIX = "-";

client.commands = new discord.Collection();
client.prefix = PREFIX;
client.queue = new Map();
client.vote = new Map();

const Music = readdirSync(join(__dirname, "Music")).filter(file =>
  file.endsWith(".js")
);
for (const file of Music) {
  const command = require(join(__dirname, "Music", file));
  client.commands.set(command.name, command);
}
const commands = readdirSync(join(__dirname, "commands")).filter(file =>
  file.endsWith(".js")
);
for (const file of commands) {
  const command = require(join(__dirname, "commands", file));
  client.commands.set(command.name, command);
}
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (message.content.startsWith(PREFIX)) {
    const args = message.content
      .slice(PREFIX.length)
      .trim()
      .split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
      return;
    }
    try {
      client.commands.get(command).execute(client, message, args);
      console.log(
        `${message.guild.name}: ${message.author.tag} Used ${
          client.commands.get(command).name
        } in #${message.channel.name}`
      );
    } catch (err) {
      console.log(err);
      message.reply("I am getting error on using this command");
    }
  }
});


fs.readdir("./events/", (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const evt = require(`./events/${file}`);
    let evtName = file.split(".")[0];
    console.log(`Loaded event '${evtName}'`);
    client.on(evtName, evt.bind(null, client));
  });
});




client.login(process.env.Tk);