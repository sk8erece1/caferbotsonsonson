const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
    let game = args[0]
    let steampng = "https://i.postimg.cc/90HnQpS0/steam.png"
    if (!game) return message.reply('Lütfen Steamde Olan Bir Oyunun Adını Yazın. Örnek: ' + ayarlar.prefix + `steamoyun gta 5`)
    provider.search(game).then(result => {
    provider.detail(result[0].id, "turkey", "tr").then(results => {
        console.log(results)
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Oyun', steampng)
    .setTitle(result[0].name)
    .addField(`Oyun ID`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Türleri', results.genres , true)
    .addField('Fiyatı', `Normal Fiyat **${results.priceData.initialPrice}** TL
İndirimli Fiyat **${results.priceData.finalPrice}** TL`, true)
    .addField('Platformlar', results.otherData.platforms, true)
    .addField('Metacritic Puanı', results.otherData.metacriticScore, true)
    .addField('Etiketleri', results.otherData.features, true)
    .addField('Geliştiricileri', results.otherData.developer, true)
    .addField('Yayımcıları', results.otherData.publisher)
    .setColor(0x36393F)
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply('`' + game + '` Adlı Oyun Bulunamadı')
    })
})
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['steamoyun', 'steam-oyun', 'stiimoyun'],
  permLevel: 0
};

exports.help = {
  name: 'steam-oyun',
  description: 'steamoyun bilgilerini gösterir.',
  usage: 'steamoyun'
};