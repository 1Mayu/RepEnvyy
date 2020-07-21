const Discord = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "pr",
  execute(client, message, args) {
    var config = JSON.parse(
      fs.readFileSync("./Database/AntiHackConfig.json", "UTF8")
    );
    var anti = JSON.parse(fs.readFileSync("./Database/AntiHack.json", "UTF8"));

    if (!message.channel.guild) return;

    let user = anti[message.guild.id + message.author.id];
    if (!anti[message.guild.id + message.author.id])
      anti[message.guild.id + message.author.id] = {
        actions: 0
      };
    if (!config[message.guild.id])
      config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        chaCrLimit: 3,
        time: 30
      };
    let op = args[0];
    let num = args[1];
    if (op == "lb") {
      if (!message.member.hasPermission("MANAGE_GUILD")) return;
      if (!num)
        return message.channel.send(
          "**<a:stop0:715231769359548468>| Send A Number !**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**<a:stop0:715231769359548468>| Numbers Only !**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**<a:Cool2:731619397566988379>| Ban Limit Has Changed To ${config[message.guild.id].banLimit} !**`
      );
    }
    if (op == "lk") {
      if (!message.member.hasPermission("MANAGE_GUILD")) return;
      if (!num)
        return message.channel.send(
          "**<a:stop0:715231769359548468>| Send A Number !**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**<a:stop0:715231769359548468>| Numbers Only !**"
        );
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**<a:Cool2:731619397566988379>| Kick Limit Has Changed To ${config[message.guild.id].kickLimits} !**`
      );
    }
    if (op == "lrd") {
      if (!message.member.hasPermission("MANAGE_GUILD")) return;
      if (!num)
        return message.channel.send(
          "**<a:stop0:715231769359548468>| Send A Number !**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**<a:stop0:715231769359548468>| Numbers Only !**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**<a:Cool2:731619397566988379>| Role Delete Limit Has Changed To ${config[message.guild.id].roleDelLimit} !**`
      );
    }
    if (op == "lrc") {
      if (!message.member.hasPermission("MANAGE_GUILD")) return;
      if (!num)
        return message.channel.send(
          "**<a:stop0:715231769359548468>| Send A Number !**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**<a:stop0:715231769359548468>| Numbers Only !**"
        );
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**<a:Cool2:731619397566988379>| Role Create Limit Has Changed To ${config[message.guild.id].roleCrLimits} !**`
      );
    }
    if (op == "lcd") {
      if (!message.member.hasPermission("MANAGE_GUILD")) return;
      if (!num)
        return message.channel.send(
          "**<a:stop0:715231769359548468>| Send A Number !**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**<a:stop0:715231769359548468>| Numbers Only !**"
        );
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**<a:Cool2:731619397566988379>| Channel Delete Limit Has Changed To ${config[message.guild.id].chaDelLimit} !**`
      );
    }
    if (op == "lcc") {
      if (!message.member.hasPermission("MANAGE_GUILD")) return;
      if (!num)
        return message.channel.send(
          "**<a:stop0:715231769359548468>| Send A Number !**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**<a:stop0:715231769359548468>| Numbers Only !**"
        );
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**<a:Cool2:731619397566988379>| Channel Create Limit Has Changed To ${config[message.guild.id].chaCrLimit} !**`
      );
    }
    fs.writeFile(
      "./Database/AntiHackConfig.json",
      JSON.stringify(config, null, 2),
      function(e) {
        if (e) throw e;
      }
    );
    fs.writeFile(
      "./Database/AntiHack.json",
      JSON.stringify(anti, null, 2),
      function(e) {
        if (e) throw e;
      }
    );
  }
}