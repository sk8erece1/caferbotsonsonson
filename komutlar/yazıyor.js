module.exports.run = async (bot, message, args) => {
const { RichEmbed } = require('discord.js')
  if (message.author.id != '409238673528324097') return message.channel("Şuan Yazıyorum Geldi Mi?")
let embed = new RichEmbed()
  .setDescription("Yazıyor Başlatıldı!. Durdurmak İçin /yazıyordurdur")
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setColor(0x1D82B6)
message.channel.send(embed)
      message.channel.startTyping();
  
}
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazıyor', 
  description: 'Yazıyor Yazıyor...',
  usage: 'yazıyor'
};