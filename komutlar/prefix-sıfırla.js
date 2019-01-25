const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  db.fetch(`guildPrefix_${message.guild.id}`).then(i => {

  let prefix;

  if (i) {
    prefix = i
  } else {
    prefix = '/';

  }
if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '355993240354160640') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Yetkin yok!').setColor("RED"));

  db.set(`guildPrefix_${message.guild.id}`, 'c!'.trim()).then(i => {
    message.channel.sendEmbed(new Discord.RichEmbed().addField(`Prefix başarıyla sıfırlandı! Tekrardan prefixi değiştirmek isterseniz`, `/prefix [istediğiniz prefix]`).setColor("RANDOM"));
})})};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["önek-sıfırla", "ön-ek-sıfırla"],
  permLevel: 0
};

exports.help = {
  name: 'prefix-sıfırla',
  description: '',
  usage: ''
};