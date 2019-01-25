const Discord = require('discord.js')
const sa = require('superagent')
exports.run = (client, message, args) => {
    var result = Math.floor(Math.random() * 162)
    var bunny = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage(`https://bunnies.media/poster/${result}.png`)
    message.channel.send(bunny)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'tavşan',
  description: 'Rastgele tavşan resmi gönderir.',
  usage: 'tavşan'
};
//MeliL