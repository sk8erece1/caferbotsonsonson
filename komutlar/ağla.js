const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let aglayan = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!aglayan) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Birini etiketlemelisin.').setColor('RANDOM'));
	const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setDescription(":heart: AĞLA KUDUR ÇILDIR ZIRLA :heart:")
	.setImage("https://i.hizliresim.com/j6BNXg.png")
	.setFooter(`AĞLA **${aglayan.user.tag}**`)
   	message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kudur', 'zırla', 'agla', 'zirla'],
  permLevel: 0
};

exports.help = {
  name: 'ağla',
  description: 'Birini delirtmek için ideal :)',
  usage: 'ağla <ağlattırılacak kişinin ismi> NOT: ETİKETLEMEYİN SADECE İSMİNİ GİRİN. Doğrusu: rb!ağla AHMET Yanlışı: rb!ağla @Ahmet'
};
