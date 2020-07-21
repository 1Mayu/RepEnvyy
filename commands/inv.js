const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "inv",
  async execute(client, message, args) {
    if (message.author.bot) return;
    var invite = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`;
    const embed = new Discord.MessageEmbed()
      .setTitle(`Bot Invitation Step`)
      .setDescription(`[Click To Invite Me Into Your Server](${invite})`)
      .setImage(
        "https://media.discordapp.net/attachments/731188720325361704/732962601201303612/Untitled-1.png"
      )
      .setColor("#7f00ff")
      .setTimestamp()
      .setFooter(
        `By ` + message.author.username,
        message.author.displayAvatarURL()
      );
    message.channel.send(embed);
  }
};
