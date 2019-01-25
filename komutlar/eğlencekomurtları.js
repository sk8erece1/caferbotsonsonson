const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**:bowling: Eğlence Komut **", `- **/asci [yazı]** = Yazı Fontu Değiştirerek Geri Atar. \n- **/söv @kullanıcı= Söversiniz.** \n- **/kaçcm @kullanıcı** = Kaçcm :D \n- **/yazı-tura** = Yazıtura Atarsınız. \n- **/avatarım** = Avatarınızı Atar. \n- **/balıktut** = Balık Tutarsınız. \n- **/emojiyazı [yazı]** = Emoji Yazı Atar.`)
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
  aliases: ['eğlence-komutları', 'eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'help [komut]'
};