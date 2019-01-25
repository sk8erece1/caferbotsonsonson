const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**:musical_note: Müzik Komutları **", `- **/play [url veya şarkı ismi]** = Şarkıyı Başlatır. \n- **/skip = Bi Sonraki Şarkıya Geçersiniz** \n- **/queue ** = Sıradaki Şarkıları Gösterir. \n- **/stop** = Şarkıyı Durdurur. `)
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
  aliases: ['müzik-komutları', 'yardımmüzik'],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları gösterir.',
  usage: 'help [komut]'
};