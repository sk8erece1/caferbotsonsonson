const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Anıyoruz.')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://66.media.tumblr.com/1eee41af5851f5e58844d8eb30e0cadb/tumblr_nxkg7a3IMi1r1u0b3o1_500.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'Atatürk.',
  usage: 'atatürk'
};