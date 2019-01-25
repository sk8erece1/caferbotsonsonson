const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
		let embedz = new Discord.RichEmbed()
			.setAuthor(" ")
			.setColor("RANDOM")
			.setDescription(`@here\n${message.author.tag} isimli sihirdar, **League of Legends** isimli oyun için kendine takım arkadaşı arıyor!\nOnunla birlikte sihirdar vadisine katılmak için, @${message.author.tag}a mesaj at!`)
		message.channel.send(embedz)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfüret', 'küfür'],
  permLevel: 0
};

exports.help = {
  name: 'lol-davet',
  description: 'Etiketlediğin kişiye söversin',
  usage: 'söv <@Oyuncu>'
};