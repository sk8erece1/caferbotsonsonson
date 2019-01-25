const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**:fearful: Kullanıcı Komutları**", `- **/canlıdestek** = Bot Canlı Desteğe Bağlanırsınız.\n- **/sor [sorunuz]** = Sorunuzu Bot Cevaplar.  \n- **/şifre [sayı]** = Şifre Atar Random \n- **/atasözü** = Atasözü Atar. \n- **/hastebin [yazınız]** = Hastebine Kod Ekler. \n- **/rainbow** = Rainbow atar. \n- **/radyo [kanal]** = Radyo Açarsınız. \n- **/havadurumu [İl/ilçe]** = Yazdığınız Yerin Havadurumunu Atar. \n- **/gif-ara** = Gif aratırsınız. \n- **/bjk** = Fotonuza BJK Fotorafı Ekler. \n- **/fb** = Fotonuza FB Resmi Ekler. \n- **/gs** = Fotonuza GS Fotorafı Ekler. \n- **/wasted** = Fotonuza WASTED Ekler. \n- **/tersrenk** = Fotonuzun Renklerini Terse Çevir. \n- **/atam** = Fotonuzu Atatürk Ekler. \n- **/aze** = Fotonuza Azerbaycan Bayrak Ekler. \n- **/tr*** = Fotonuza Türkiye Bayrak Ekler. \n- **/dcnitro** = Fotonuza Nitro Ekler. \n- **/partner** = Fotonuza Partner Logo Ekler. \n- **/piksel** = Fotonuzu Pixel Yapar.`)
   .addField("**DEVAMI /kullanıcı-komutları-2(Yakında..) **")
  .setFooter('Cafer §')
  .addField(":chart_with_upwards_trend: Davet Linkleri:","[Bot Websitesi](http://www.cafer.tk/)")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı-komutları', 'yardımkullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları gösterir.',
  usage: 'help [komut]'
};