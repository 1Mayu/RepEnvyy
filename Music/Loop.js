module.exports = {
  name: "loop",
  aliases: "lp",
  description: "LOOP THE QUEUE",
  execute(client, message, args) {
    if (!message.member.voice.channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL

      const Discord = require("discord.js");
      const sing = new Discord.MessageEmbed()
        .setDescription(
          "<a:Warn:657996732654813214>| You Need To Be In A Voice Channel"
        )
        .setColor("#461a9b");
      return message.channel.send(sing);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      const Discord = require("discord.js");
      const sing = new Discord.MessageEmbed()
        .setDescription(
          "<a:false:658743450107117568>| There Is Nothing Playing That I Could Loop"
        )
            .setTimestamp()
      .setFooter("By " + message.author.tag,message.author.displayAvatarURL())
        .setColor("#461a9b");
      return message.channel.send(sing);
    }

    //OOOOF
    serverQueue.loop = !serverQueue.loop;

    if (serverQueue) {
      const Discord = require("discord.js");
      const sing = new Discord.MessageEmbed()
        .setDescription(
          `<a:Done1:688509182634360948>Loop is now **${
            serverQueue.loop ? "Enabled" : "Disabled"
          }**`
        )
        .setColor("#461a9b");
      message.channel.send(sing);
    }
  }
};
