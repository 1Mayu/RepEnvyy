const fs = require("fs");
const prefix = "-";
const path = require("path");
module.exports = {
  name: "credits",
  async execute(client, message, args) {
    const credits = JSON.parse(
      fs.readFileSync("./Database/Credits.json", "utf8")
    ); // سوي ملف باسم credits.json
    const pretty = require("pretty-ms");
    var time = require("../Database/Time.json");
    const mention =
      message.mentions.users.first() ||
      client.users.cache.get(args[1]) ||
      message.author;
    const author = message.author.id;
    if (!credits[author])
      credits[author] = {
        credits: 0,
      };
    credits[message.author.id].credits = Math.floor(
      credits[message.author.id].credits + 1
    );
    const balance = args[1];
    const daily = Math.floor(Math.random() * 350) + 10;

    if (!credits[author]) credits[author] = { credits: 50 };
    if (!credits[mention.id]) credits[mention.id] = { credits: 50 };
    fs.writeFile(
      "./Database/Credits.json",
      JSON.stringify(credits, null, 5),
      function(err) {
        if (err) console.log(err);
      }
    );
    args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`;

    if (args[1]) {
      if (isNaN(args[1]) || args[1] < 0)
        return message.channel.send(
          `<a:Loading:657996792264392705>| **${message.author.username}** Type The Number Of Credits That You Want To Transfer !`
        );
      if (mention.bot)
        return message.channel.send(
          `<a:stop0:715231769359548468>| **${message.author.username}** Bot's Don't Take Money !`
        );
      if (mention.id === message.author.id)
        return message.channel.send(
          `<a:stop0:715231769359548468>| **${message.author.username}** You Cant Transfer Credits To Yourself`
        );
      if (credits[author].credits < balance)
        return message.channel.send(
          `<a:stop0:715231769359548468>| **${message.author.username}** You Don't Have Enough Credits`
        );
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;

      var number = `${one}${two}${three}${four}`;
      let tbalance = Math.floor(balance - (balance * 5) / 100);
      message.channel
        .send(`**<a:Loading:657996792264392705>| ${message.author.username}** Write \`${number}\` To Continue`)
        .then(m => {
          message.channel
            .awaitMessages(m => m.author.id === message.author.id, {
              max: 1,
              time: 10000
            })
            .then(c => {
              if (c.first().content === number) {
                m.delete();
                message.channel.send(
                  `${message.author.username} **Transferred \`${tbalance}\` To ${mention}**`
                );
                credits[author].credits += parseInt(-tbalance);
                credits[mention.id].credits += parseInt(+tbalance);
                mention.send(
                  "Transfer Receipt\n" +
                    "```" +
                    "You have received $" +
                    `${tbalance}` +
                    " from user " +
                    `${message.author.username}` +
                    " (ID: " +
                    `${message.author.id}` +
                    ")" +
                    "```"
                );
                fs.writeFile( "./Database/Credits.json", JSON.stringify(credits, null, 5), function(
                  err
                ) {
                  if (err) console.log(err);
                });
              } else if (c.first().content !== number) {
                m.delete();
                message.channel.send(
                  `<a:stop0:715231769359548468>| **${message.author.username}** Transfer Has Been Canceld`
                );
              }
            });
        });
    }

    if (!args[1]) {
      if (mention.bot)
        return message.channel.send(
          `<a:stop0:715231769359548468>| **${message.author.username}** Bot's Don't Take Money !`
        );
      message.channel.send(
        `<a:Bank:730387498093772850>| **${mention.username}** Account Balance Is \`$${credits[mention.id].credits}\`.`
      );
    }
  }
};
