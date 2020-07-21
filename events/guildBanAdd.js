module.exports = async (client,guild) => {   
const entry1 = await guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "BAN_MEMBER") {
    const entry2 = await guild
      .fetchAuditLogs({
        type: "BAN_MEMBER",
        limit: 1
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
  const fs = require("fs");
  var anti = JSON.parse(fs.readFileSync("./Database/AntiHack.json", "UTF8"));
    var config = JSON.parse(fs.readFileSync("./Database/AntiHackConfig.json", "UTF8"));
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./Database/AntiHackConfig.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./Database/AntiHack.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./Database/AntiHackConfig.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./Database/AntiHack.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
}
}