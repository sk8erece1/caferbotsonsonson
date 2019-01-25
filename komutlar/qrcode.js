const qrcode = require("qrcode");
const tempy = require("tempy");

module.exports.run = async (bot, message, args) => {
    const qrOutput = tempy.file({ extension: "png" });
    message.channel.startTyping();
    if (args.length > 0) {
        qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
            if (error) throw new Error(error);
            message.channel.stopTyping();
            message.channel.send({
                files: [{
                    attachment: qrOutput,
                    name: "cabbar-qr-kod.png"
                }]
            });
        });
    }else{
        message.channel.stopTyping();
        message.reply("QR kodu oluşturmak için bir metin vermeniz gerekiyor!");
    }
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['qr', 'kod-oluştur', 'kod'],
  permLevel: 0
};

exports.help = {
  name: 'qrkod',
  description: 'QR Kod oluşturur.',
  usage: 'qrkod'
};