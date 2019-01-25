const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`unban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = args[0]
  if (reason.length < 1) return message.reply('Kimin yasağını kaldırmak istersin?');
  if (message.mentions.users.size < 1) return message.reply('Sebebini yazmalısın?').catch(console.error);

  message.guild.unban(user);

 message.channel.send(`**${user}** IDli kullanıcı **${message.author.tag}** tarafından **${reason}** sebebi ile sunucudan yasağı kaldırıldı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin yasağını kaldırır.',
  usage: '!unban [kullanıcı] [sebep]'
};
