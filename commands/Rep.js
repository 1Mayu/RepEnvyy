module.exports = {
  name: "rep",
  execute(client, message, args) { 
        const fs = require('fs');
    const moment = require("moment");
const Rep = JSON.parse(fs.readFileSync("./Database/Rep.json", "utf8"));
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username} The User Couldn't Found**`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(Rep[message.author.id] != moment().format('L')) {
           Rep[message.author.id] = moment().format('L');
            Rep[getvalueof.id] = Math.floor(Rep[getvalueof.id] +1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**<a:loading:680460872275198009> | ${message.author.username} You Can Reward More Reputation ${moment().endOf('day').fromNow()}**`)
        }
       fs.writeFile('rep.json', JSON.stringify(Rep), (err) => {
if (err) console.error(err);
})

  }
}