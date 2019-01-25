const Discord = require('discord.js');


exports.run = (client, message, args) => {
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "Evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'Evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
        message.guild.createChannel(`🔥sohbet🔥`);
        message.guild.createChannel(`🚨kurallar🚨`);
        message.guild.createChannel(`👻duyurular👻`);
          message.guild.createChannel(`🚪giriş-çıkış🚪`);
          message.guild.createChannel(`🚨şikayet🚨`);
          message.guild.createChannel(`💎yetklilendirme💎`);
          message.guild.createChannel(`💫sınırsız-link💫`);
          message.guild.createChannel(`🎶🎵müzi̇k-kanali🎶🎵`);
          message.guild.createChannel(`l📊bot-komutlarıl📊`);
          message.guild.createChannel('🎼Müzik Odası🎼', 'voice')
          message.guild.createChannel('👈👉Sohbet Odaları👈👉', 'category') 
          message.guild.createChannel('💀🍁#Sohbet  1🍁💀', 'voice')
          message.guild.createChannel('💀🍁#Sohbet  2🍁💀', 'voice')
          message.guild.createChannel('💀🍁#Sohbet  3🍁💀 !', 'voice')
          message.guild.createChannel('🎮Rekabet 🎮', 'category') 
          message.guild.createChannel('👑🔥Rekabet -1 🔥👑', 'voice')
          message.guild.createChannel('👑🔥Rekabet -2 🔥👑 !', 'voice')
          message.guild.createChannel('👑🔥Rekabet -3 🔥👑', 'voice')
          message.guild.createChannel('🏰1v1 Odaları🏰', 'category')  
          message.guild.createChannel('🔪⛧1v1 Odası - 1⛧🔪', 'voice')
          message.guild.createChannel('🔪⛧1v1 Odası - 2⛧🔪 !', 'voice')
          message.guild.createChannel('🔪⛧1v1 Odası - 3⛧🔪', 'voice')
          message.guild.createChannel('🍷League of Legend Odaları🍷', 'category')  
          message.guild.createChannel('⚡League of Legends ⚡!', 'voice')
          message.guild.createChannel('⚡League of Legends ⚡', 'voice')
          message.guild.createChannel('⚡League of Legends ⚡', 'voice')
          message.guild.createChannel('👻Away From Keyboard-1👻 !', 'voice')

  
  

        message.channel.send(`Gerekli Kanalları Oluşturdum.`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucukur'],
  permLevel: 3
};

exports.help = {
  name: 'sunucukurulum',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: 'sunucukurulum'
};