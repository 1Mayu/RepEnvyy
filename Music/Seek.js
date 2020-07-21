module.exports = {
  name: "seek",
  async execute(client, message, args) {
  const { channel } = message.member.voice;
  const serverQueue = client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("No songs to seek");
  try {
    const curDuration = (serverQueue.songs[0].msDur * 60000) + ((serverQueue.songs[0].duration % 60000) * 1000);
    const choiceDur = args.join(" ").split(":");
    if (choiceDur.length < 2) return message.channel.send("No duration provided or invalid ?");
    const optDurr = (parseInt(choiceDur[0], 10) * 60000) + ((parseInt(choiceDur[1], 10) % 60000) * 1000);
    if (optDurr > curDuration) return message.channel.send("Your duration is too big");
    serverQueue.songs.splice(1, 0, serverQueue.songs[0]);
    return serverQueue.connection.dispatcher.end()
  } catch (e) {
    return message.channel.send(`Oh no an error occured :( \`${e.message}\` try again later`);
  }
}
}