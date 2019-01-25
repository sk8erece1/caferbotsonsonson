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
    .setAuthor('Kardeşim Yılan Yap Kendini Tıss Sokuysun Milleti Kardeşim')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`http://store.donanimhaber.com/10/8d/51/108d5155aef63da0e76963159f9fb7e0.gif`)
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
  name: 'yılanyap',
  description: 'Çay İsçer.',
  usage: 'yılanyap'
};