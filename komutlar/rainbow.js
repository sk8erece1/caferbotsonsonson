const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://cdn.discordapp.com/attachments/523151347529285632/523153088815824916/GIF_Alt_Cizgi.gif"];


    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Rainbow:")
        .setColor('RANDOM')
        .setFooter(`${message.author.username} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rainbow'],
    permLevel: 0
};

exports.help = {
    name: 'rainbow',
    description: 'Rastgele dans görüntüleri atar.',
    usage: 'rainbow'
};