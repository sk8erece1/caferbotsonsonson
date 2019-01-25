const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  client.user.setStatus("online");
   var oyun = [

        `💪 7/24 Aktif!`,  
        `💡  /botdavet | Botumuzu Ekleyin Lütfen!`,
        `🎶 Müzik Komutları Eklendi!!`,
        `🤖 Hep Daha İleriye!`,
        `🔥  Otorol Eklendi!`,
        `💥 Öneri Yazmayı Unutmayın!`,
        `🤗 200+ Komut!!`,
        `💡  Prefixim /`,
        `💥 Yeni Site Geliyor!!`,
        `📢 Küfür Koruması Aktif ve Ayarlanabilir!`,
        `👨 Yeni Komutlar!`,
        `👏 3538 | Kullanıcı İçin Teşşekürler!`,
        `🌍 ${client.guilds.size} | Sunucu İçin Teşşekürler!`,
        `/yardım 🔥 + /bilgi 🔥 + /radyo`
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/evindar123321234");
        }, 2 * 2500);
}