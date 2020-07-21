module.exports = {
  name: "title",
  execute(client, message, args) {
    const fs = require('fs');
 const Title = JSON.parse(fs.readFileSync("./Database/Title.json", "utf8"));
let tit = message.content.split(" ").slice(1).join(" ");
    if (!Title[message.author.id]) Title[message.author.id] = "Type Title ";
    if (!tit) {
      message.channel.send(`<a:Warn:657996732654813214> | **-title [msg]**`);
    } else {
      Title[message.author.id] = tit;
      message.channel.send(`**Done** <a:RainbowHeart:657996847125757972>`);
    }
  fs.writeFile("./Database/Title.json", JSON.stringify(Title), err => {
    if (err) console.error(err);
  });
}
}