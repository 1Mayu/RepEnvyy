const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "mute",
  async execute(client, message, args) {
 if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "<a:stop0:715231769359548468>| Sorry But You Do Not Have Permission To Mute Anyone !"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("<a:stop0:715231769359548468>| I Don't Have Permission !");
    }
       const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "<a:stop0:715231769359548468>| Please Mention The Member Who You Want To Mute !"
      );
    }
 
    if(user.id === message.author.id) {
      return message.channel.send("<a:stop0:715231769359548468>| I Won't Mute You -_-");
    }
     
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("<a:stop0:715231769359548468>| Reason ?")
    }
      
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send("<a:stop0:715231769359548468>| This Server Don't Have Role With Name `Muted`")
    }
     if(user.roles.cache.has(muterole)) {
      return message.channel.send("<a:stop0:715231769359548468>| Given User Is Already Muted...")
    }
           if (
        message.guild.member(message.author).roles.highest === message.guild.member(user).roles.highest)
        return message.channel.send(`<a:stop0:715231769359548468>**| You Have The Same Role You Can't Mute Him Idiot**`
);
    user.roles.add(muterole)
    
await message.channel.send(`<a:Cool2:731619397566988379>| **${message.author.username}** Muted **${message.mentions.users.first().username}** Because **${reason}**`)
    
    user.send(`<a:Warn:657996732654813214>| You Got Muted In **${message.guild.name}** Because ${reason} !`)
  }
}