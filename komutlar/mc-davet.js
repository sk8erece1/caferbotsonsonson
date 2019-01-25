const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
		let embedz = new Discord.RichEmbed()
			.setAuthor(" ")
			.setColor("RANDOM")
			.setDescription(`@here\n${message.author.tag} isimli oyuncu, birileriyle **Minecraft** oynamak istiyor!\nOnunla oynamak istersen ${message.author.tag}a mesaj at!`)

		message.channel.send(embedz)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfüret', 'küfür'],
  permLevel: 0
};

exports.help = {
  name: 'minecraft-davet',
  description: 'Etiketlediğin kişiye söversin',
  usage: 'söv <@Oyuncu>'
};