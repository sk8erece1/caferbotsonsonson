const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let replies = [`https://cdn1.imggmi.com/uploads/2018/12/11/b02c9cfee2cb9d593bb7f003198b5995-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/b02c9cfee2cb9d593bb7f003198b5995-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/b02c9cfee2cb9d593bb7f003198b5995-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/b02c9cfee2cb9d593bb7f003198b5995-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/b02c9cfee2cb9d593bb7f003198b5995-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/b02c9cfee2cb9d593bb7f003198b5995-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/b02c9cfee2cb9d593bb7f003198b5995-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/80b6552fdabb5c3fa8b713964d4bbbfe-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a1bb86d3e22f4842099a8ea4acdf6fa4-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/d492c93d2f8dfa853810dfbc774bcdfd-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/d492c93d2f8dfa853810dfbc774bcdfd-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/17383d152f246456d441d0d35980f696-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a14d8c01495dddc191a3865dd92b9a83-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/a14d8c01495dddc191a3865dd92b9a83-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/de141c6fd0e07c650ee6ceb29909f636-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/b02c9cfee2cb9d593bb7f003198b5995-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/b02c9cfee2cb9d593bb7f003198b5995-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/b02c9cfee2cb9d593bb7f003198b5995-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/b02c9cfee2cb9d593bb7f003198b5995-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/b02c9cfee2cb9d593bb7f003198b5995-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/b02c9cfee2cb9d593bb7f003198b5995-full.png` , `https://cdn1.imggmi.com/uploads/2018/12/11/b02c9cfee2cb9d593bb7f003198b5995-full.png`];

  	let result = Math.floor((Math.random() * replies.length))

  	const ball = new Discord.RichEmbed()
  	.setAuthor(message.author.tag, message.author.avatarURL)
  	.setColor('RANDOM')
  	.setImage(replies[result]);
  	message.channel.sendEmbed(ball)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çark',
  description: 'Rastgele çark gönderir.',
  usage: 'çark'
};
