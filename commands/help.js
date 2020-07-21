const prefix = "-";
const Discord = require("discord.js");
module.exports = {
  name: "help",
  execute(client, message, args) {
    var user = message.author;
    if (!message.channel.guild)
      return message.channel
        .send("**This Command Is Only For Servers**")
        .then(m => m.delete(5000));
    message.channel
      .send({
        embed: new Discord.MessageEmbed()
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setThumbnail(message.author.displayAvatarURL())
          .setTitle(`Welcome To ${message.guild.name}`)
          .setFooter(
            `By: ${message.author.tag}`,
            message.author.displayAvatarURL()
          )
          .setURL("")
          .setColor("8A2BE2")
          .setDescription(
            `**<a:Right:657996403490160650>| ~~HelpMenu~~ |<a:Left:657995629552992278>**

> ««▬▬▬▬▬▬▬▬▬<a:crownb:683267382315450388>▬▬▬▬▬▬▬▬▬»»
> 
> <a:admin:731877741309329429>| **Public** | Public Commands                                                                                                                   
> 
> ☠▬▬▬▬▬▬▬▬✦<a:crownb:683267382315450388>✧▬▬▬▬▬▬▬▬☠
> 
> <a:public33:731881017572458616>| **Admin** | Admin Commands                                                                                                                            
> 
> ☠▬▬▬▬▬▬▬▬✦<a:crownb:683267382315450388>✧▬▬▬▬▬▬▬▬☠                                                                                             
> 
> <a:protection:731877731582607472>| **Protection** | Protection Commands                                                                                                             
> 
> ☠▬▬▬▬▬▬▬▬✦<a:crownb:683267382315450388>✧▬▬▬▬▬▬▬▬☠                                                                                            
> 
> <a:hib:714223517633347605>| **Music** | Music Commands                                                                                                               
> 
> ☠▬▬▬▬▬▬▬▬✦<a:crownb:683267382315450388>✧▬▬▬▬▬▬▬▬☠                                                                                              
> 
> <a:partydiscord:657997130904109081>| **Games** | Games Commands
> 
> ««▬▬▬▬▬▬▬▬▬<a:crownb:683267382315450388>▬▬▬▬▬▬▬▬▬»»`
          )
          .setTimestamp()
      })
      .then(zg => {
        zg.react("731877741309329429").then(r => {
          zg.react("731881017572458616").then(r => {
            zg.react("731877731582607472").then(r => {
              zg.react("714223517633347605").then(r => {
                zg.react("657997130904109081").then(r => {
                  zg.react("658743450107117568").then(r => {
                    var one = (reaction, user) =>
                      reaction.emoji.id === "731877741309329429" &&
                      user.id === message.author.id;
                    var two = (reaction, user) =>
                      reaction.emoji.id === "731881017572458616" &&
                      user.id === message.author.id;
                    var three = (reaction, user) =>
                      reaction.emoji.id === "731877731582607472" &&
                      user.id === message.author.id;
                    var four = (reaction, user) =>
                      reaction.emoji.id === "714223517633347605" &&
                      user.id === message.author.id;
                    var five = (reaction, user) =>
                      reaction.emoji.id === "657997130904109081" &&
                      user.id === message.author.id;
                    var eight = (reaction, user) =>
                      reaction.emoji.id === "658743450107117568" &&
                      user.id === message.author.id;
                    var one = zg.createReactionCollector(one, {
                      maxMatches: 1,
                      time: 60000
                    });
                    var two = zg.createReactionCollector(two, {
                      maxMatches: 1,
                      time: 60000
                    });
                    var three = zg.createReactionCollector(three, {
                      maxMatches: 1,
                      time: 60000
                    });
                    var four = zg.createReactionCollector(four, {
                      maxMatches: 1,
                      time: 60000
                    });
                    var five = zg.createReactionCollector(five, {
                      maxMatches: 1,
                      time: 60000
                    });
                    var eight = zg.createReactionCollector(eight, {
                      maxMatches: 1,
                      time: 60000
                    });
                    one.on("collect", r => {
                      zg.edit({
                        embed: new Discord.MessageEmbed()
                          .setAuthor(
                            client.user.username,
                            client.user.avatarURL()
                          )
                          .setThumbnail(message.author.avatarURL())
                          .setTitle(
                            `<a:crownb:683267382315450388>Welcome To ${message.guild.name}`
                          )
                          .setFooter(
                            `By: ${message.author.tag}`,
                            message.author.avatarURL()
                          )
                          .setURL("")
                          .setColor("8A2BE2")
                          .setDescription(
                            `✧▬▬▬▬▬▬✦<a:admin:731877741309329429>✧▬▬▬▬▬▬✦
> <a:admin:731877741309329429>${prefix}Avatar **|** Shows You Current Avatar
> <a:admin:731877741309329429>${prefix}Love **|** Send A Love For Your SweetHeart
> <a:admin:731877741309329429>${prefix}User **|** Shows Your Discord Info
> <a:admin:731877741309329429>${prefix}Hug **|** Give Your Friend A Hug
> <a:admin:731877741309329429>${prefix}Kiss **|** To Kiss Your Girl Friend
> <a:admin:731877741309329429>${prefix}Pat **|** To Pat Your Friend
> <a:admin:731877741309329429>${prefix}Slap **|** Slap Your Friend About His Fault
> <a:admin:731877741309329429>${prefix}Bot **|** Shows Bot Info
> <a:admin:731877741309329429>${prefix}Server **|** Shows Server Info
> <a:admin:731877741309329429>${prefix}Color **|** To Chaneg Your Color
> <a:admin:731877741309329429>${prefix}Colors **|** To See Color List
> <a:admin:731877741309329429>${prefix}credits **|** Shows How Many Credits Do You Have
> <a:admin:731877741309329429>${prefix}daily **|** Take Daily Credits
✧▬▬▬▬▬▬✦<a:admin:731877741309329429>✧▬▬▬▬▬▬✦`
                          )
                          .setTimestamp()
                      });
                    });
                    two.on("collect", r => {
                      zg.edit({
                        embed: new Discord.MessageEmbed()
                          .setAuthor(
                            client.user.username,
                            client.user.avatarURL()
                          )
                          .setThumbnail(message.author.avatarURL())
                          .setFooter(
                            `By: ${message.author.tag}`,
                            message.author.avatarURL()
                          )
                          .setURL("")
                          .setColor("8A2BE2")
                          .setDescription(
                            `✧▬▬▬▬▬▬✦<a:public33:731881017572458616>✧▬▬▬▬▬▬✦
> <a:public33:731881017572458616>${prefix}Ping **|** Shows The Bot Crunntly Ping
> <a:public33:731881017572458616>${prefix}Mc **|** Mute The Selected Channel
> <a:public33:731881017572458616>${prefix}Unmc **|** Unmute The Selected Channel
> <a:public33:731881017572458616>${prefix}Savatar **|** Shows Server Avatar
> <a:public33:731881017572458616>${prefix}Unban **|** Unban Selected Member
> <a:public33:731881017572458616>${prefix}Unbanall **|** Unban All Members
> <a:public33:731881017572458616>${prefix}Clear **|** Clearing The Chat
> <a:public33:731881017572458616>${prefix}Obc **|** Sent A BroadCast For All Server Members
> <a:public33:731881017572458616>${prefix}Bans **|** Shows All Server Bans
> <a:public33:731881017572458616>${prefix}Kick **|** Ready To Kick Member
> <a:public33:731881017572458616>${prefix}Ban **|** Ready To Ban Member
> <a:public33:731881017572458616>${prefix}Mute **|** Mute The Specified Member
> <a:public33:731881017572458616>${prefix}Unmute **|** Unmute The Specified Member
> <a:public33:731881017572458616>${prefix}mc **|** Mute The Chat
> <a:public33:731881017572458616>${prefix}unmc **|** UnMute Chat
✧▬▬▬▬▬▬✦<a:public33:731881017572458616>✧▬▬▬▬▬▬✦`
                          )
                          .setTimestamp()
                      });
                    });
                    three.on("collect", r => {
                      zg.edit({
                        embed: new Discord.MessageEmbed()
                          .setAuthor(
                            client.user.username,
                            client.user.avatarURL()
                          )
                          .setThumbnail(message.author.avatarURL())
                          .setFooter(
                            `By: ${message.author.tag}`,
                            message.author.avatarURL()
                          )
                          .setURL("")
                          .setColor("8A2BE2")
                          .setDescription(
                            `✧▬▬▬▬▬▬✦<a:protection:731877731582607472>✧▬▬▬▬▬▬✦
> <a:protection:731877731582607472>${prefix}pr lb **|** Setting Ban Limit
> <a:protection:731877731582607472>${prefix}pr lk **|** Setting Kick Limit
> <a:protection:731877731582607472>${prefix}pr lrd **|** Setting Role Delete Limit
> <a:protection:731877731582607472>${prefix}pr lrc **|** Setting Role Create Limit
> <a:protection:731877731582607472>${prefix}pr lcd **|** Setting Channel Delete Limit
> <a:protection:731877731582607472>${prefix}pr lcc **|** Setting Channel Create Limit
> <a:protection:731877731582607472>${prefix}
✧▬▬▬▬▬▬✦<a:protection:731877731582607472>✧▬▬▬▬▬▬✦
`
                          )
                          .setTimestamp()
                      });
                    });
                    four.on("collect", r => {
                      zg.edit({
                        embed: new Discord.MessageEmbed()
                          .setAuthor(
                            client.user.username,
                            client.user.avatarURL()
                          )
                          .setThumbnail(message.author.avatarURL())
                          .setFooter(
                            `By: ${message.author.tag}`,
                            message.author.avatarURL()
                          )
                          .setURL("")
                          .setColor("8A2BE2")
                          .setDescription(
                            `✧▬▬▬▬▬▬✦<a:hib:714223517633347605>✧▬▬▬▬▬▬✦
<a:hib:714223517633347605>${prefix}play **|** Start Playing Music
<a:hib:714223517633347605>${prefix}stop **|** Stop Playing Music
<a:hib:714223517633347605>${prefix}loop **|** Repeating The Current Playing Song
<a:hib:714223517633347605>${prefix}pause **|** Pause The Playing Song
<a:hib:714223517633347605>${prefix}resume **|** Resume Paused Song
<a:hib:714223517633347605>${prefix}skip **|** Skipping To The Next Song
<a:hib:714223517633347605>${prefix}skipto **|** Skip To a Certain Song in The Queue
<a:hib:714223517633347605>${prefix}queue **|** To Show The Queue Pages
<a:hib:714223517633347605>${prefix}volume **|** To Set The Song Volume 
<a:hib:714223517633347605>${prefix}np **|** Shows Nowplaying Music
✧▬▬▬▬▬▬✦<a:hib:714223517633347605>✧▬▬▬▬▬▬✦`
                          )
                          .setTimestamp()
                      });
                    });
                    five.on("collect", r => {
                      zg.edit({
                        embed: new Discord.MessageEmbed()
                          .setAuthor(
                            client.user.username,
                            client.user.avatarURL()
                          )
                          .setThumbnail(message.author.avatarURL())
                          .setFooter(
                            `By: ${message.author.tag}`,
                            message.author.avatarURL()
                          )
                          .setURL("")
                          .setColor("8A2BE2")
                          .setDescription(
                            `✧▬▬▬▬▬▬✦<a:partydiscord:657997130904109081>✧▬▬▬▬▬▬✦
> <a:partydiscord:657997130904109081>Soon...
✧▬▬▬▬▬▬✦<a:partydiscord:657997130904109081>✧▬▬▬▬▬▬✦`
                          )
                          .setTimestamp()
                      });
                    });
                    eight
                      .on("collect", r => {
                        zg.delete();
                        message.delete();
                      })
                      .then(message => message.delete(15000));
                  });
                });
              });
            });
          });
        });
      });
  }
};
