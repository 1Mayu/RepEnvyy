const prefix = "-";
const fs = require("fs");
const pretty = require("pretty-ms");
const credits = JSON.parse(fs.readFileSync("./Database/Credits.json", "utf8"));
const Discord = require("discord.js");
module.exports = {
  name: "daily",
  execute(client, message, args) {
    var time = require("../Database/Time.json");
    const mention =
      message.mentions.users.first() ||
      client.users.cache.get(args[1]) ||
      message.author;
    let cooldown = 8.64e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send(
        `<a:Loading:657996792264392705>| **${
          message.author.username
        }** Your Daily Credits Refreshes In ${pretty(times, {
          verbose: true
        })} !`
      );
      fs.writeFile("./Database/Time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
          const author = message.author.id;
      let ammount = (300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
      credits[author].credits += parseInt(ammount);
      time[message.author.id] = Date.now();
      message.channel.send(
        `<a:Cool2:731619397566988379>**| ${message.author.username}** You Got ${ammount} Daily Credits !`
      );
      fs.writeFile("./Database/Credits.json", JSON.stringify(credits), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
}