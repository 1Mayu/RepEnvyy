const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "pat",
  execute(client, message, args) {
    let user = message.mentions.users.first();
    let mentions = message.mentions.users.first();
    let pat = [
      "https://media1.tenor.com/images/8c1a53522a74129607b870910ac288f9/tenor.gif?itemid=7220650",
      "https://media1.tenor.com/images/e01e09d8e27c7247314b3dd611f47007/tenor.gif?itemid=13912621",
      "https://media1.tenor.com/images/88ff65d668f92f6d953dbffcbed2be5f/tenor.gif?itemid=4953911",
      "https://media1.tenor.com/images/63ccd3a45ec323ac5b199317b7cb3128/tenor.gif?itemid=12290276",
      "https://media1.tenor.com/images/3fc9d04c3aab73f5ce1ffdca2b87d894/tenor.gif?itemid=11573062",
      "https://media1.tenor.com/images/a661b668b4757d1ccfde34feb6deb188/tenor.gif?itemid=5709072",
      "https://media1.tenor.com/images/88ff65d668f92f6d953dbffcbed2be5f/tenor.gif?itemid=4953911"
    ];
    if (!user)
      return message.channel.send(
        "<a:stop0:715231769359548468>| Mention User !"
      );
    if (user.id == message.author.id)
      return message.channel.send(
        `**<a:7agebfo2:654069086329765888>| You Can't Pat Yourself ${message.author.username}**`
      );
    if (user.bot)
      return message.channel.send(
        `<a:7agebfo2:654069086329765888>**| You Can't Pat A Bot Idiot** ${message.author.username}`
      );
    message.channel
      .send({
        embed: {
          description: `${message.author.username} Patted ${user.username}!`,
          image: {
            url: pat[Math.floor(Math.random() * pat.length)],
            color: "850FFA"
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
}