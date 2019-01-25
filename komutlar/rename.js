const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

if(message.member.hasPermission("ADMINISTRATOR")) {

  if(!args){
    return message.channel.send(":x: " + "| Lütfen Botun Yeni İsminin Ne Olacağını Yazın!");
  }
  message.guild.member(bot.user).setNickname(args.join(" ")).then(user => message.channel.send("Benim Yeni İsmim " + args.join(" ") + "!")).catch(console.error);
} else {
  return message.reply(":x: Bunun İçin Gerekli Yetkiye Sahip Değilsin!")
  }
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0 ,
};

exports.help = {
 name: 'rename',
 description: 'Botun İsmini Değiştir',
 usage: 'rename'
};