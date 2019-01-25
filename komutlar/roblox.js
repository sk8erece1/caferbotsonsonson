const Discord = require('discord.js');
const jsroblox = require('js-robloxapi');

exports.run = (client, message, args) => {
    let isim = args[0]
    if (!isim) return message.reply('Lütfen Roblox Kullanıcı Adı Yazınız')
    jsroblox.getInfo(isim, (data) => {
        if (!data) return message.reply(`**${isim}** Adlı Kullanıcı Bulunamadı`)
        let durum = {
            "No": "Offline",
            "undefined": "Bilinmiyor"
        };
        const embed = new Discord.RichEmbed()
        .setThumbnail(data.Avatar)
        .setColor("GREEN")
        .setTitle("Kullanıcı adı: " + isim)
        .addField('ID', `**${data.Id}**`, true)
        .addField('Durumu', `**${durum[data.Online]}**`, true)
        .addField('Arkadaşlar', `Arkadaş Sayısı: **${data.TotalFriends}**
Arkadaş Listesi: **${data.ListFriends}**`, true)
        .addField('Grup Listesi', `**${data.ListGroup}**`, true)
        .addField('Rozetleri', `**${data.ListBadges}**`, true)
        return message.channel.send(embed)
    })
};

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'roblox',
   description: 'roblox',
   usage: 'roblox'
 };
//MeliL