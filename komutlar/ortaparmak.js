const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['https://giphy.com/gifs/QGzPdYCcBbbZm',
   'https://giphy.com/gifs/ninkoldo-EgrHsIyIXmjba','https://giphy.com/gifs/noahcyrus-noah-cyrus-l2QEdb842amJxuqU8'
   ,'https://giphy.com/gifs/1LnQKc4eh8BP2','https://giphy.com/gifs/1LnQKc4eh8BP2','https://giphy.com/gifs/1LnQKc4eh8BP2' ];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ortaparmak'],
 permLevel: 0 ,
};

exports.help = {
 name: 'ortaparmak',
 description: 'ortaparmak gösterir',
 usage: 'ortaparmak'
};
