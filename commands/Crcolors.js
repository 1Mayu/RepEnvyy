const Discord = require("discord.js");
module.exports = {
  name: "cc",
  execute(client, message, args) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel
        .send("**You Dont Have** `ADMINISTRATOR` **premission**")
        .then(msg => msg.delete(6000));
    message.guild.roles.create({
      data: { name: "1", color: "#000001", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "2", color: "#0a0a0a", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "3", color: "#131313", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "4", color: "#1f1f1f", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "5", color: "#242424", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "6", color: "#333333", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "7", color: "#5c5c5c", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "8", color: "#797979 ", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "9", color: "#a0a0a0", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "10", color: "#cecece", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "11", color: "#ffffff", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "12", color: "#110000", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "13", color: "#2c0000", permissions: [] }
    }); //master killer

    message.guild.roles.create({
      data: { name: "14", color: "#380401", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "15", color: "#4b0101", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "16", color: "#520000", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "17", color: "#580000", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "18", color: "#810000", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "19", color: "#a00000", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "20", color: "#c90000", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "21", color: "#f10000", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "22", color: "#ff0000", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "23", color: "#310d00", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "24", color: "#471d00", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "25", color: "#632500", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "26", color: "#702900", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "27", color: "#743300", permissions: [] }
    }); //master killer

    message.guild.roles.create({
      data: { name: "28", color: "#793600", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "29", color: "#8a4600", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "30", color: "#b34700", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "31", color: "#d86300", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "32", color: "#ee6900", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "33", color: "#ff8100", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "34", color: "#02001a", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "35", color: "#040027", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "36", color: "#000250", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "37", color: "#00006b", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "38", color: "#09008b ", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "39", color: "#020094", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "40", color: "#0005b9", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "41", color: "#0f00db", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "42", color: "#0300f7", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "43", color: "#002bff", permissions: [] }
    });
    message.guild.roles.create({
      data: { name: "44", color: "#0047ff", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "45", color: "#001601", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "46", color: "#002501", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "47", color: "#052900", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "48", color: "#003b03", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "49", color: "#005802", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "50", color: "#007715", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "51", color: "#179600", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "52", color: "#00a50e", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "53", color: "#00ad06", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "54", color: "#00be00", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "55", color: "#00ff0f", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "56", color: "#292800", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "57", color: "#3a3601", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "58", color: "#474500", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "59", color: "#5e5c00", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "60", color: "#818100", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "61", color: "#999800", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "62", color: "#aca600", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "63", color: "#bcc500", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "64", color: "#d1d100", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "65", color: "#c9d800", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "66", color: "#ffee00", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "67", color: "#1b0030", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "68", color: "#1e003a", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "69", color: "#2c004b", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "70", color: "#3e005e", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "71", color: "#5d0097", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "72", color: "#6b009c", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "73", color: "#8c00b8", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "74", color: "#a200c7", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "75", color: "#aa00e0", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "76", color: "#cc00db", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "77", color: "#e200ff", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "78", color: "#4d0037", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "79", color: "#660041", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "80", color: "#91005c", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "81", color: "#b4006a", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "82", color: "#ca0076", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "83", color: "#cc008e", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "84", color: "#d60089", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "85", color: "#e900a3", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "86", color: "#ff00b3", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "87", color: "#ff2dbe", permissions: [] }
    });

    message.guild.roles.create({
      data: { name: "88", color: "#ff73d4", permissions: [] }
    });

    message.channel.send({
      embed: new Discord.MessageEmbed()
        .setColor("#502faf")
        .setAuthor(`${message.author.username}'`, message.author.avatarURL)
        .setDescription("``Colors Has Been Created ``")
    });
  }
}