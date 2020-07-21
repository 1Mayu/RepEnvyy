const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "slap",
  execute(client, message, args) {
    let user = message.mentions.users.first();
    let slaps = [
      "https://cdn.weeb.sh/images/HkHCm1twZ.gif",
      "https://cdn.weeb.sh/images/H16aQJFvb.gif",
      "https://cdn.weeb.sh/images/Byjqm1tDW.gif",
      "https://cdn.weeb.sh/images/S1ylxxc1M.gif",
      "https://cdn.weeb.sh/images/B1jk41KD-.gif",
      "https://cdn.weeb.sh/images/HkskD56OG.gif"
    ];
    if (!user)
      return message.channel.send(
        "<a:stop0:715231769359548468>| Mention User !"
      );
    if (user.id == message.author.id)
      return message.channel.send(
        `**${message.author.username} You Cant Slap Yourself**`
      );
    if (user.bot)
      return message.channel.send(
        `${message.author.username} ` +
          "<a:7agebfo2:654069086329765888>| You Cant Slap A Bot Idiot"
      );
    message.channel
      .send({
        embed: {
          description: `${message.author.username} Slapped ${user.username}!`,
          image: {
            url: slaps[Math.floor(Math.random() * slaps.length)],
            color: "850FFA"
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
};
