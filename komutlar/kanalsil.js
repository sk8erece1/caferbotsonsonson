exports.run = (client, message, params, perms) => {
  const channel = message.mentions.channels.first();
  if (!channel) return message.channel.send("Silmek için bir kanaldan bahsetmelisin **Örnek: +ksil #test**");
  if (channel.deletable === false) return message.channel.send("Yetkiniz dışı kanal `" + `${channel.name}` + "` Yetkiniz olmayan kanalı silemezsiniz.!").catch(console.error);  

  message.guild.channels.get(channel.id).delete()
  .then(c => message.channel.send(`Silinen Kanal ` + "`{ #" + c.name + " }` :wastebasket: "))
  .catch(console.error)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ksil","kanalsil"],
  permLevel: 2
};

exports.help = {
  name: "kanalsil",
  description: "Seçtiğiniz kanalı siler",
  usage: "`kanalsil`"
};
//XiR