module.exports = {
  name: "ping",
  aliases: "pg",
  description: "Pinging the bot",
  execute(client, message) {
    if (!message.guild || message.author.bot) return false;
    message.channel.send(
      `\`\`\`javascript\nDiscord API: ${Math.round(
        client.ws.ping
      )} ms\nTime taken: ${Date.now() - message.createdTimestamp} ms \n\`\`\` `
    );
  }
};
