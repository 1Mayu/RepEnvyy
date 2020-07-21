const Discord = require("discord.js");
module.exports = {
  name: "restart",
  execute(client, message, args) {
    if (message.author.id !== "672817734500745275")
      return message.reply("You aren't the bot owner.");
    message.channel
      .send(`<a:Tenor:659119222701424650>| Don't Forget About Me`)
      .then(message => {
        setTimeout(() => {
          message.edit(
            "**<a:hello:657537636461707274>| i Am Back SweetHeart**"
          );
        }, 5000);
      });
    console.log(
      `${message.author.tag} [ ${message.author.id} ] has restarted the bot.`
    );
    console.log(`<a:647115773537419270:651858365278060574>| Restarting`);
    setTimeout(() => {
      client.destroy();
      client.login(process.env.Tk);
    }, 3000);
  }
}