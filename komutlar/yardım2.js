const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setDescription('**Cafer | Yardım**')
      .setAuthor(`Cafer`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`**Ping:**`, `⏳ **| Normal Gecikme** : [${client.ping}]`)
      .addField(`Cafer™`, `\n:spy:  | **/yetkili**: Sunucuyu Yönetmek İçin Gerekli Olan Komutlar!\n:rage:  | **/kullanıcı**: Kullanıcılar İçin Komutlar!\n:smile:  | **/eğlence**: Eğlenmek İçin Bulunan Komutlar!\n:musical_note:  | **/müzik**: Müzik Ruhun Gıdasıdır.\n:incoming_envelope:   | **/öneri**: Bot yapımcısına Tavsiye Gönderirsiniz.! \n:crown:   | **/ping**: Botun Ping Değerini Gösterir!`)
      .addField(`Bot Davet Link`, `:chart_with_upwards_trend: **Davet Linkleri**:[Bot Davet Linki](https://is.gd/C3xQYH)`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
         message.react("🤣")
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut2', 'komutlar2', 'command2', 'yardım2', 'help2', 'halp2', 'y2', 'h2', 'commands2'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım2',
    description: 'yardım',
    usage: 'yardım2'
  };