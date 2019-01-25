const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const embed = new Discord.RichEmbed()

    .setAuthor(message.author.username, message.author.avatarURL)

    .addField(message.author.username,"***Taze Lahmacunununun Tadına Bakıyor ***")

    .setImage("http://adilusta.net/Images/urun/15a9c59bf0.png")

        .setColor(0x97ffff)

    return message.channel.sendEmbed(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'lahmacun',
    description: 'Taze Lahmacun Yersin.',
    usage: 'Lahmacun'
  };
  