const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**:warning: Yetkili Komutları 2**", `- **/unmute** = Mutelediğiniz Kişinin Mutesini Kaldırırsınız. \n- **/sil** = İstediğiniz Kadar Mesaj Siler (Max 100) \n- **/slowmode [sayı]** = Kanalda Slowmode Başlatır. \n- **/rolver @kullanıcı @rol** = Rol verir. \n- **sayaç [Miktar] [#kanal]** = Sayacı Belirler. \n- **disco-rol-ayarla <@rol>** = Disco Rolünü Ayarlar. \n- **disco** = Disco Başlatır. \n- **emojiyükle <link> - <isim>** = Belirttiğiniz link ve isimde emoji yükler. \n- **geçici-sustur [Kullanıcı] [Süre]** = Sureli Susturur. \n- **herkesten-rol-al [Rol] = Herkesten İstediğiniz Rolü Alır.** \n- **herkese-rol-ver [Rol]** = Herkesten İstediğiniz Rolü Alır. \n- **gkanal <#kanal>** = Resimli Hoşgeldin Görüşürüz Kanalını Ayarlar. \n-  **kanalismideğiş [#Kaal]** = İstediğiniz Kanalın İsmini Değiştirirsiniz. \n- **kanalsil [#Kanal]** = Seçtiğiniz Kanalı Siler. \n- **kilit <süre>** = Bulunduğunuz Kanalı Kilitler ve Kimse Yazı Yazamaz.`)                                                                   
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
  aliases: ['yetkili-komutları2', 'yetkilikomutları2'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili2',
  description: 'Tüm komutları gösterir.',
  usage: 'help [komut]'
};