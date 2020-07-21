const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "unmute",
  async execute(client, message, args) {
   if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "<a:stop0:715231769359548468>| Sorry But You Do Not Have Permission To Unmute Anyone !"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }
      const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "<a:stop0:715231769359548468>| Please Mention The Member Who You Want To Unmute !"
      );
    }
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send("<a:stop0:715231769359548468>| Given User Don't Have Mute Role So What I'm Suppose To Take ?")
    }
          if (
        message.guild.member(message.author).roles.highest ===
        message.guild.member(user).roles.highest
      )
        return message.channel.send(
          `<a:stop0:715231769359548468>**| You Have The Same Role You Can't Ban Him Idiot**`
        );
       user.roles.remove(muterole)
    
    await message.channel.send(`**<a:Cool2:731619397566988379>| **${message.author.username}** Unmuted **${message.mentions.users.first().username}** Successfully**`)
    
    user.send(`You are now unmuted from **${message.guild.name}**`)
  }
}