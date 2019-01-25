const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Wuhuuuu! Güzel Yumruktu!')
    .setColor(3447003)
    .setFooter('Cafer', bot.user.avatarURL)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://media.tenor.com/images/7bd895a572947cf17996b84b9a51cc02/tenor.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yumruk"],
  permLevel: 0
};

exports.help = {
  name: 'yumruk',
  description: "Seçtiğiniz Kişiye Yumruk Atar",
  usage: 'yumruk <Kullanıcı>'
};
