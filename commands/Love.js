const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "love",
  execute(client, message, args) {
    let user = message.mentions.users.first();
    let mentions = message.mentions.users.first();
    let loves = [
      "https://media.giphy.com/media/YDB4EF3U6i6IM/giphy.gif",
      "https://media.giphy.com/media/l41JWw65TcBGjPpRK/giphy.gif",
      "https://media.giphy.com/media/3o6gDZ9unSrDk3EuR2/giphy.gif",
      "https://media.giphy.com/media/ymkLJAxVz2la/giphy.gif",
      "https://media.giphy.com/media/ZOln4JxCoZay4/giphy.gif",
      "https://media.giphy.com/media/l0K4kWJir91VEoa1W/giphy.gif",
      "https://media.giphy.com/media/X3FmqQ7ehoCBy/giphy.gif",
      "https://media.giphy.com/media/VlzUkJJzvz0UU/giphy.gif",
      "https://media.giphy.com/media/NbPJFUS6Vkx7q/giphy.gif",
      "https://media.giphy.com/media/wDEWXcisSjrQQ/giphy.gif",
      "https://media.giphy.com/media/xT8qBuhwq0OyL7UkdW/giphy.gif",
      "https://media.giphy.com/media/gfvxlwRKH1y5q/giphy.gif",
      "https://media.giphy.com/media/PuTSgeacS3Z7i/giphy.gif",
      "https://media.giphy.com/media/l49JBwneyflgjm5zO/giphy.gif",
      "https://media.giphy.com/media/QKUA2bIAgjFgk/giphy.gif",
      "https://media.giphy.com/media/T3Uzzre7Ap0mk/giphy.gif",
      "https://media.giphy.com/media/3oeSB6pawq6G99xCXS/giphy.gif",
      "https://media.giphy.com/media/iKIgD5j0I3hMQ/giphy.gif",
      "https://media.giphy.com/media/hhHcFH0xAduCs/giphy.gif",
      "https://media.giphy.com/media/3o7qDJKIO5rSeyHhvO/giphy.gif",
      "https://media.giphy.com/media/92bGINsmjAuUE/giphy.gif",
      "https://media.giphy.com/media/bErElGdAHUmoE/giphy.gif",
      "https://media.giphy.com/media/jQqU9dCKUOdri/giphy.gif",
      "https://media.giphy.com/media/10uJ0IFxlCA06I/giphy.gif",
      "https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif",
      "https://media.giphy.com/media/3osxYcry2fDfqyhOQ8/giphy.gif",
      "https://media.giphy.com/media/3ohs84a6AyArTscVsk/giphy.gif",
      "https://media.giphy.com/media/3o6Zt6D0wctP0kpuwg/giphy.gif",
      "https://media.giphy.com/media/4zmFt0xpke8AU/giphy.gif",
      "https://media.giphy.com/media/l3vR9O3vpOCDRo8rC/giphy.gif",
      "https://media.giphy.com/media/13sgibUDaaaEU0/giphy.gif"
    ];
    if (!user)
      return message.channel.send(
        "<a:stop0:715231769359548468>| Mention User !"
      );
    if (user.bot)
      return message.channel.send(
        `<a:7agebfo2:654069086329765888>**| You Can't Love A Bot Idiot** ${message.author.username}`
      );
    if (user.id == message.author.id)
      return message.channel.send(
        `**${message.author.username} You Can't Love Yourself**`
      );
    message.channel
      .send({
        embed: {
          description: `${message.author.username} Loves You ${user.username}!`,
          image: {
            url: loves[Math.floor(Math.random() * loves.length)],
            color: "850FFA"
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
}