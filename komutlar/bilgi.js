const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.author.username, message.author.avatarURL)
	.addField("**❯ Yapımcı**", "<@409238673528324097>", )
    .addField("**❯ Sürüm**", " Tam Sürüm İşte Moruq ", )
    .addField("**❯ Yapım Tarihi**", " Ne Bileyim ", )
	.addField("**❯ Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=471373119613960192&scope=bot&permissions=2146958591)", )
	.addField("**❯ Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/frbns8r)", )
	.setThumbnail("https://forum.gamer.com.tr/attachments/bilgi-png.55209/");
    message.channel.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bilgii'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'kedileri gösterir.',
  usage: 'bilezik'
};
