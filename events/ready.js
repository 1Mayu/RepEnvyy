module.exports = async client => {
client.user.setPresence({status: 'idle'});
client.user.setActivity({type:"LISTENING", name:`Maintenace | ${client.guilds.cache.size} Server`}); 
console.log("╔[═════════════════════════════════════════════════════════════════]╗");
console.log(`Successfully Linked To 《 ${client.user.username} 》`);
console.log("╚[═════════════════════════════════════════════════════════════════]╝");
const fs = require("fs");
const invites = JSON.parse(fs.readFileSync("./Database/Invites.json", "UTF8"));
const wait = require("util").promisify(setTimeout);
wait(1000);
client.guilds.cache.forEach(Mado => {
Mado.fetchInvites().then(guildInvites => {
invites[Mado.id] = guildInvites;
})
})
}