const Discord = require('discord.js');

exports.run = async (client, message, params) => {
  var channel = client.channels.find('id', '477879191036231710')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("Sunucu Tanıt")
  .setColor('RANDOM')
  .setTimestamp()
  .setDescription("Sunucunuz Tanıtılmıştır! Sunucun Burada Tanıtıldı: <https://discord.gg/3YkAc29>")
  .setFooter('Botunuzun İsmi', client.user.avatarURL)
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setThumbnail(message.guild.iconURL)
  .setAuthor(message.guild.name)
  .setColor('RANDOM')
  .setFooter('StarBot', client.user.avatarURL)
  .setTimestamp()
  .addField('**» Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'sunucu-tanıt',
  description: 'Sunucunuzu Tanıtır.',
  usage: 'sunucu-tanıt'
};