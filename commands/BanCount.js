const Discord = require("discord.js");
module.exports = {
  name: "bans",
  execute(client, message, args) {
    message.guild
      .fetchBans()
      .then(bans =>
        message.channel.send(
          `<a:Done:662430350705950754>| The Number Of People Banned From The Server Is : \`${bans.size}\``
        )
      )
      .catch(console.error);
  }
}