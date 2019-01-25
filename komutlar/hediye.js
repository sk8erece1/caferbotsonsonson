const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let replies = [];

  	let result = Math.floor((Math.random() * replies.length))

  	const ball = new Discord.RichEmbed()
  	.setAuthor('Yeni Yıl Hediyeni Almayı Unutma!' , message.author.avatarURL)
  	.setColor('RANDOM')
  	.setImage(replies[result])
    .setFooter('Yeni Yıl Hediyeni Almayı Unutma!')
  	message.channel.sendEmbed(ball)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hediye',
  description: 'Rastgele Hediye gönderir.',
  usage: 'hediye'
};
