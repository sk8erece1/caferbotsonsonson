const Discord = require('discord.js');
exports.run = function(client, message) {
  message.channel.send(`<:rpg1:514219521955856386> <:rpg2:514219538393595964> <a:rpg3:514219553337638944> <a:rpg4:514219567980085269> <a:rpg5:514219580684632095> <a:rpg6:514219598992900097>`).then(msg => msg.delete(30000));
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['party', 'part', 'partı', 'prty'],
  permLevel: 0
};

exports.help = {
  name: 'parti',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'parti'
};
