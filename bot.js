const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);




const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const db = require('quick.db')
const moment = require('moment');
const Jimp = require('jimp');
let kufurEngel = JSON.parse(fs.readFileSync("./jsonlar/kufurEngelle.json", "utf8"));
let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};
////////////////////////////////////////////////Sunucuya katıldığında log atar
client.on('guildCreate', guild => {
    let channel = client.channels.get("523547356197814284")
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`?? | Sunucuya katıldım.`)
        .setThumbnail(guild.iconURL)
        .addField("Sunucu", guild.name)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });

client.on('guildDelete', guild => {
    let channel = client.channels.get("523547356197814284")
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`?? | Sunucudan Atıldım.`)
        .setThumbnail(guild.iconURL)
        .addField("Sunucu", guild.name)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });
///////////////////////////////////////Bot İçin Gerekli Kısım Dokunma Bozacan
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
/////////////////////////sa.as, izmirmarşı ve istiklal marşı 2 kıtası
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
        setTimeout(() => {
    }, 1000);//bekle
    msg.react('🇦')
    msg.react('🇸')
            setTimeout(() => {
    }, 1500);
    msg.reply('Aleyküm Selam!');
  }
    if (msg.content.toLowerCase() === prefix + 'izmirmarşı') {
	msg.channel.sendMessage('-------------------------------------');
    msg.channel.sendMessage('İzmirin dağlarında çiçekler açar. ');
	msg.channel.sendMessage('Altın güneş orda sırmalar saçar. ');
	    msg.channel.sendMessage('Bozulmuş düşmanlar yel gibi kaçar. ');
		    msg.channel.sendMessage('Yaşa Mustafa Kemal Paşa,yaşa ');
			    msg.channel.sendMessage('Adın yazılacak mücevher taşa. ');
				    msg.channel.sendMessage('-------------------------------------');
					    msg.channel.sendMessage('İzmir dağlarına bomba koydular ');
						    msg.channel.sendMessage('Türkün sancağını öne koydular ');
							    msg.channel.sendMessage('Şanlı zaferlerle düşmanı boğdular. ');
								    msg.channel.sendMessage('Kader böyle imiş ey garip ana ');
									    msg.channel.sendMessage('Kanım feda olsun güzel vatana. ');
										    msg.channel.sendMessage('-------------------------------------');
											    msg.channel.sendMessage('İzmirin dağlarında oturdum kaldım ');
												    msg.channel.sendMessage('Şehit olanları deftere yazdim. ');
													    msg.channel.sendMessage('Öksüz yavruları bağrıma bastım ');
														    msg.channel.sendMessage('Kader böyle imiş ey garip ana ');
															    msg.channel.sendMessage('Kanim feda olsun güzel vatana ');
																    msg.channel.sendMessage('-------------------------------------');
																	    msg.channel.sendMessage('Türk oğluyum ben ölmek isterim. ');
																		    msg.channel.sendMessage('Toprak diken olsa yatağım yerim ');
																			    msg.channel.sendMessage('Allahından utansın dönenler geri ');
																				    msg.channel.sendMessage('Yaşa Mustafa Kemal Paşa,yaşa ');
																					    msg.channel.sendMessage('Adın yazılacak mücevher taşa.');
																						    msg.channel.sendMessage('-------------------------------------');						
																							}


	if (msg.content.toLowerCase() === prefix + 'istiklalmarşı') {
	msg.channel.sendMessage('-------------------------------------');
    msg.channel.sendMessage('Korkma, sönmez bu şafaklarda yüzen al sancak;');
	msg.channel.sendMessage('Sönmeden yurdumun üstünde tüten en son ocak.');
	    msg.channel.sendMessage('O benim milletimin yıldızıdır, parlayacak;');
		    msg.channel.sendMessage('O benimdir, o benim milletimindir ancak.');
				    msg.channel.sendMessage('-------------------------------------');
					    msg.channel.sendMessage('Çatma, kurban olayım, çehrene ey nazlı hilal!');
						    msg.channel.sendMessage('Kahraman ırkıma bir gül... Ne bu şiddet, bu celal?');
							    msg.channel.sendMessage('Sana olmaz dökülen kanlarımız sonra helal;');
								    msg.channel.sendMessage('Hakkıdır, Hakka tapan, milletimin istiklal.');
										    msg.channel.sendMessage('-------------------------------------');
                           }
});
////////////////////////////kasaç
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'kasaaç') {
    var sans = ["Hiçbirşey :cry:", "Stattrak AWP | Asiimov", "Karambit | Doopler :dagger:", "Hatıra USP-S | Leş Onaylandı", "Kancalı Bıçak | Fade :dagger:", "Desert Eagle | Kızıl Ağ", "Hatıra Dragon Lore", "Stattrak M4A1 | Uluma", "SGG 07 | Sudaki Kan", "Hatıra Glock 18 | Fade", "AWP | Medusa", "Desert Eagle | Alev", "Stattrak AK-47 | Vulkan",  "M4A1-S | Hiper Canavar",  "Hatıra M4A1-S | Altın Bobin", "Statrak AWP | Elektrikli Kovan", "P90 | Ecel Kedisi", "AWP | Yıldırım Çarpması", "Karambit | Mazi :dagger:", "Hatıra Faction Bicaği :dagger:"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    msg.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Sana **${sonuc}** Çıktı.`).setTitle('Başarıyla Kasa Açıldı').setThumbnail('https://cdn.discordapp.com/avatars/492743235555426334/36dca918a5851eb12f3947f78a07944c.png?size=2048').setColor('RANDOM'));
  }
});
//////////////////////////
    client.on('guildCreate', guild => {
      const owner = guild.owner
      const mrb = guild.systemChannel
      if (!mrb) return;
      let merhaba = new Discord.RichEmbed()
      .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
      .setAuthor(guild.name, guild.iconURL)
      .addField('Beni Eklediğiniz İçin Teşekkürler :wink: ', `${owner}`)
      .addField('Cafer e destek olduğun için teşekkürler. Bir sorununuz varsa', `**${prefix}öneri** komutuyla hatalarınızı ve önerilerinizi ulaştırın!`)
      .addField('Cafer artık Discord zevkinizi 2 kat arttıracak şekilde düzenlendi!', `**${prefix}help** yazarak komutlara ulaşabilirsiniz!`)
      mrb.send(merhaba);
    });
/////////////////////davetler
const table = require('table');
const arraySort = require('array-sort');

client.on("message", async message => {
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "davetler") {
        let invites = await message.guild.fetchInvites().catch(error => {
            return message.channel.send(`Davetleri görüntülemek için yetkim bulunmuyor.`);
        })
        invites = invites.array();
        arraySort(invites, 'uses', {
            reverse: true
        }); 
        let possibleInvites = [
            ['Kullanıcı', 'Kullanım']
        ]; 
        invites.forEach(function(invite) {
            possibleInvites.push([invite.inviter.username, invite.uses]);
        })
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField('Oluşturulma Sıralaması', `\`\`\`${table.table(possibleInvites)}\`\`\``);
        message.channel.send(embed)
    }
});
/////////////////////
    client.on('guildCreate', guild => {
      const owner = guild.owner
      const mrb = guild.systemChannel
      if (!mrb) return;
      let merhaba = new Discord.RichEmbed()
      .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
      .setAuthor(guild.name, guild.iconURL)
      .addField('Beni Eklediğiniz İçin Teşekkürler :wink: ', `${owner}`)
      .addField('Cafer`e destek Olduğun İçin Teşekkürler. Bir Sorununuz Varsa', `**${prefix}öneri** Komutuyla Hatalarınızı ve Önerilerinizi Bize Ulaştırın!`)
      .addField('Cafer Artık Discord Zevkinizi 2 Kat Arttıracak Şekilde Düzenlendi!', `**${prefix}yardım** Yazarak Komutlarımın Yarısına Ulaşabilirsiniz.!Neden Yarısı Diye Sorararsanız Çok Falza Komut var Yardıma Eklemeyi Üşeniyom`)
      mrb.send(merhaba);
    });
////////////////////
exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
   
    message.channel.send(`⏲ | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://avatanplus.com/files/resources/original/5a0f28bea614115fcb3728d8.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./img/snip/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/snip/${client.user.id}-${user.id}.png`));
        }, 1000);
    });

});
}
/////////////////////Gelen-giden Mesajları
client.on("guildMemberAdd", async member => {
   const fs = require('fs');
    let gkanal = JSON.parse(fs.readFileSync("././sunucuyaözelayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
     let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {
            const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184528148725780/guildAdd.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })

client.on("guildMemberRemove", async member => {
   const fs = require('fs');
    let gkanal = JSON.parse(fs.readFileSync("././sunucuyaözelayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
        let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {            
                        const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184546477572107/guildRemove.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })
/////////////////////////////////
client.on ('message', message => {
if (message.content === prefix + "tkm") {
    var cumleler= ['Taş.', 'Kağıt.', 'Makas.'];
    var cumle = cumleler[Math.floor(Math.random() * cumleler.length)];
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Taş-kağıt-makas;')
    .setDescription(cumle)
    .setFooter('Cafer', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
        }; 
});
///////////////////////////////////////eggsy espiri2
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if (command === "espri") {
    
    var request = require('request');
    request('https://api.eggsybot.xyz/espri', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        message.channel.send('**Espri**: ' + info.soz); // ve konsola çıktıyı versin.
    }
});    
}
}); 
/////////////////////////////////////Zarat Kısmı
client.on ('message', message => {
          if (message.content.toLowerCase() === prefix + 'zarat') {
  	message.delete();
      if (Math.floor((Math.random() * 13) + 1) === 1) {
   		message.channel.sendMessage('```🎲1```');
   	}else if (Math.floor((Math.random() * 13) + 1) === 2) {
   		message.channel.sendMessage('```🎲2```');
   	}else if (Math.floor((Math.random() * 13) + 1) === 3) {
   		message.channel.sendMessage('```🎲3```');
   	}else if (Math.floor((Math.random() * 13) + 1) === 4) {
   		message.channel.sendMessage('```🎲4```');
   	}else if (Math.floor((Math.random() * 13) + 1) === 5) {
   		message.channel.sendMessage('```🎲5```');
   	}else if (Math.floor((Math.random() * 13) + 1) === 6) {
   		message.channel.sendMessage('```🎲6```');
   	}else if (Math.floor((Math.random() * 13) + 1) === 7) {
   		message.channel.sendMessage('```🎲6```');
   	}else if (Math.floor((Math.random() * 13) + 1) === 8) {
   		message.channel.sendMessage('```🎲5```');
   	}else if (Math.floor((Math.random() * 13) + 1) === 9) {
   		message.channel.sendMessage('```🎲4```');
   	}else if (Math.floor((Math.random() * 13) + 1) === 10) {
   		message.channel.sendMessage('```🎲3```');
   }else if (Math.floor((Math.random() * 13) + 1) === 11) {
   		message.channel.sendMessage('```🎲2```');
	}else if (Math.floor((Math.random() * 13) + 1) === 12) {
   		message.channel.sendMessage('```🎲1```');
	}else if (Math.floor((Math.random() * 13) + 1) === 13) {
   		message.channel.sendMessage('```🎲1```');
   }
  }
});
//////////////////////////////////////////////////////////Sayaç Kısmı
client.on("guildMemberRemove", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("RED")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: :outbox_tray: Kullanıcı Ayrıldı. \`${sayac[member.guild.id].sayi}\` Kişi Olmamıza \`${sayac[member.guild.id].sayi - member.guild.memberCount}\` Kişi Kaldı \`${member.guild.memberCount}\` Kişiyiz! :x: **${member.user.tag}**`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("GREEN")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: :inbox_tray: Kullanıcı Katıldı! **${sayac[member.guild.id].sayi}** Kişi Olmamıza **${sayac[member.guild.id].sayi - member.guild.memberCount}** Kişi Kaldı **${member.guild.memberCount}** Kişiyiz! ${process.env.basarili} Hoşgeldin! **${member.user.tag}**` );
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});


///////////////////////////////////////////////////////
client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler ${message.guild.name}! Başarıyla ${sayac[message.guild.id].sayi} kullanıcıya ulaştık! Sayaç sıfırlandı!`)
                .setColor("RANDOM")
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})
//////////////////////////////////////////////////////
client.on("message", msg => {
  if (!msg.guild) return;
  if (!kufurEngel[msg.guild.id]) return;
  if (kufurEngel[msg.guild.id].küfürEngel === 'kapali') return;
    if (kufurEngel[msg.guild.id].küfürEngel=== 'acik') {
      const kufur = ["mk", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git", "meme", "o ç", "mal", "a m", "yarrağım", "velet"];
  if (kufur.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.reply("Bu Sunucuda Küfürler **Cafer** Tarafından Engellenmektedir! Küfür Etmene İzin Vermeyeceğim!").then(message => message.delete(3000));
    }
}
    }
});
/////////////////////////////////////////////////////////Sunucu İstatistik Kısmı
client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "stattemizle") {
  if (!message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")) return message.channel.send("❌İstatistik ayarlanmamış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
      const a = message.guild.channels.find(channel => channel.name === "Sunucu İstatistik").delete()
      if(!a) return console.log("guildStats")
      const b = message.guild.channels.find(channel => channel.name === `Üye sayısı: ${message.guild.memberCount}`).delete()
      if(!b) return console.log("guildStatsMember")
      const c = message.guild.channels.find(channel => channel.name === `Bot sayısı: ${message.guild.members.filter(m => m.user.bot).size}`).delete()
      if(!c) return console.log("guildStatsBot")
      const d = message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size}`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!d) return console.log("guildStatsChannel")
      message.channel.send(" Kanallar temizlendi.")
    }
  if (command === "statayarla") {
  if (message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")) return message.channel.send(" Zaten istatistik ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send("❌**Yetkin bulunmuyor.**");
  message.channel.send(`Kategori ve kanal kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('Sunucu İstatistik', 'category', [{
  id: message.guild.id,
  deny: ['CONNECT'],
  deny: ['VIEW_CHANNEL']
}]);

 message.guild.createChannel(`Üye sayısı: ${message.guild.memberCount}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")));
 message.guild.createChannel(`Bot sayısı: ${message.guild.members.filter(m => m.user.bot).size}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")));
message.guild.createChannel(`Kanal sayısı: ${message.guild.channels.size}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")));
  message.channel.send("✔Sunucu paneli ayarlandı!")
        })
}
});
/////////////////////////////////////////////////////
///////////////////////////////////////////////////Pokemon Kısmı
        client.on("message", message => {
        if (message.content.toLowerCase() === prefix + 'pokemon') {
  	if (Math.floor((Math.random() * 13) + 1) === 1) {
   		message.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0100.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 2) {
   		message.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0095.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 3) {
   		message.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0007.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 4) {
   		message.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0102.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 5) {
   		message.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0092.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 6) {
   		message.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0081.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 7) {
   		message.reply('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0082.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 8) {
   		message.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0073.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 9) {
   		message.reply('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0039.gif');
   	}else if (Math.floor((Math.random() * 13) + 1) === 10) {
   		message.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0017.gif');
   }else if (Math.floor((Math.random() * 13) + 1) === 11) {
   		message.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0040.gif');
	}else if (Math.floor((Math.random() * 13) + 1) === 12) {
   		message.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0021.gif');
	}else if (Math.floor((Math.random() * 13) + 1) === 13) {
   		message.channel.sendMessage('http://www.hareketligifler.net/data/media/1446/pokemon-hareketli-resim-0009.gif');
   }
  }
});

///////////////////////////////////////////////////////////////////////Kralol Kısmı
client.on("message", async message => {
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "kralol") {
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        message.channel.send(":loudspeaker: | **Kralol** Çerçevesi Uygulanıyor!").then(m => m.delete(1000));
        await message.channel.send(`**${message.author.tag}** artık kral oldun!`)
        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(310, 325)
            Jimp.read("https://cdn.discordapp.com/attachments/501247440054124550/508237135178891264/kral.png", (err, avatar) => {
                avatar.resize(310, 325)
                image.composite(avatar, 2, 0).write(`./img/snip/${client.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/snip/${client.user.id}-${user.id}.png`));
                }, 1000);
            });

        });
    }
});
///////////////////////////////////////////////////////////////////////Bot Sunucuya Girince Kurucuya Meaj Atması
client.on('guildCreate', async guild => {
  const girismesaj = [
    'Bot sunucunuza eklendi :white_check_mark: .',
    'Bu bot **<@409238673528324097>** tarafından geliştirilmektedir.',
    'Botun Gelen - Giden Mesajlarını Göndermesi İçin gelen-giden Adında Bir Kanal Açmanız Gerekmektedir :point_left: ',
    'Beni Eklediğin İçin Sağol :blush: ',
    'Yardım Bölümüme /yardım Yazarak Ulaşabilirsin :blush: ',
    'Prefixim(Ön Ek) `/` ',

  ]
  guild.owner.send(girismesaj)
  console.log(`LOG: ${guild.name}. sunucuya katıldım!`);
})

client.on("guildCreate", async guild => {
  const invite = await guild.channels.first().createInvite({
    maxAge: 0
  });
  console.log(`${guild.name} with invite: Link Eklemedim`)
});
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
////////////////////////////////
//////////////////////////sigaraiç kısmı

client.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "sigaraiç") {
  msg.react('🚬');
  msg.react('☁');
msg.channel.send('🚬☁☁☁')
.then(nmsg => nmsg.edit('🚬☁☁☁☁'))
.then(nmsg => nmsg.edit('🚬☁☁☁☁'))
.then(nmsg => nmsg.edit('🚬☁☁☁'))
.then(nmsg => nmsg.edit('🚬☁☁☁'))
.then(nmsg => nmsg.edit('🚬☁☁'))
.then(nmsg => nmsg.edit('🚬☁☁'))
.then(nmsg => nmsg.edit('🚬☁'))
.then(nmsg => nmsg.edit('🚬☁'))
.then(nmsg => nmsg.edit('**Sigaran bitti :(** | **Sigara İçmeyiniz.** :no_smoking: **Sigara Sağlığa Zararlıdır!**'));
   msg.react('🚬')
  msg.react('☁')
}
});
/////////////////////////////Zekam Kısmı
client.on('message', message => {
if (message.content.toLowerCase() === prefix + "zekam") {
    var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "Albert Einstein mısın?"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Zekan___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});
/////////////////////////////trigger Kısmı
const GIFEncoder = require('gifencoder');

client.on("message", async message => {
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "trigger") {
        const options = {
            size: 256,
          
            frames: 16
        }

        message.channel.send("İşleniyor.. Lütfen bekleyiniz. ⏲").then(m => m.delete(1000));

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const args = message.content.split(' ').slice(1);
        let member = message.mentions.users.first()
        if (args[0] === undefined) member = message.author;
        let avatarurl = member.avatarURL;
        if (['jpg', 'jpeg', 'gif', 'png', 'webp'].some(x => args.join(' ').includes(x))) {
            avatarurl = args.join(' ').replace(/gif|webp/g, 'png');
        }
        const base = new Jimp(options.size, options.size);
        const avatar = await Jimp.read(avatarurl);
        const text = await Jimp.read('https://cdn.glitch.com/a7d3b6b8-9b7a-4aab-9ee4-1db0c07ef1eb%2Ftriggered.png?1526842782410');
        const tint = await Jimp.read('https://cdn.glitch.com/5fed2789-b430-43c5-bf1b-a8dd32d46b97%2Fred.png?1527082445373');
        avatar.resize(320, 320);
        tint.scaleToFit(base.bitmap.width, base.bitmap.height);
        tint.opacity(0.2);
        text.scaleToFit(280, 60);
        const frames = [];
        const buffers = [];
        const encoder = new GIFEncoder(options.size, options.size);
        const stream = encoder.createReadStream();
        let temp;

        stream.on('data', async buffer => await buffers.push(buffer));
        stream.on('end', async () => {
            return await message.channel.send({
                files: [{
                    name: 'notechtriggered.gif',
                    attachment: Buffer.concat(buffers)
                }]
            });
        });
        for (let i = 0; i < options.frames; i++) {
            temp = base.clone();
            if (i === 0) {
                temp.composite(avatar, -16, -16);
            } else {
                temp.composite(avatar, -32 + getRandomInt(-16, 16), -32 + getRandomInt(-16, 16));
            }
            temp.composite(tint, 0, 0);
            if (i === 0) temp.composite(text, -10, 200);
            else temp.composite(text, -12 + getRandomInt(-8, 8), 200 + getRandomInt(-0, 12));
            frames.push(temp.bitmap.data);
        }
        encoder.start();
        encoder.setRepeat(0);
        encoder.setDelay(20);
        for (const frame of frames) {
            encoder.addFrame(frame);
        }
        encoder.finish();
    }
})

/////////////////////////////inflames kısmı
    client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'ınflames') {
    if (msg.author.id !== ayarlar.sahip) {
        msg.channel.send('Kimliğin doğrulanıyor..')
        .then(nmsg => nmsg.edit('Sen InFlames değilsin.'));
    }else{
    msg.channel.send('InFlames yazılıyor....')
      .then(nmsg => nmsg.edit(':regional_indicator_i:'))
      .then(nmsg => nmsg.edit(':regional_indicator_i: :regional_indicator_n:'))
      .then(nmsg => nmsg.edit(':regional_indicator_i: :regional_indicator_n: :regional_indicator_f:'))
      .then(nmsg => nmsg.edit(':regional_indicator_i: :regional_indicator_n: :regional_indicator_f: :regional_indicator_l:'))
      .then(nmsg => nmsg.edit(':regional_indicator_i: :regional_indicator_n: :regional_indicator_f: :regional_indicator_l: :regional_indicator_a: :regional_indicator_m: :regional_indicator_e:'))
      .then(nmsg => nmsg.edit(':regional_indicator_i: :regional_indicator_n: :regional_indicator_f: :regional_indicator_l: :regional_indicator_a: :regional_indicator_m: :regional_indicator_e:'))
      .then(nmsg => nmsg.edit(':regional_indicator_i: :regional_indicator_n: :regional_indicator_f: :regional_indicator_l: :regional_indicator_a:  :regional_indicator_m: :regional_indicator_e: :regional_indicator_s:'));
  }
  }
});
//////////////////////////prefixayarla kısmı
let cooldown = new Set();
let cdseconds = 0;

client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./sunucuyaözelayarlar/prefix.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: ayarlar.prefix
    };
  }
 let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("Komutlar arasında 5 saniye beklemelisin.")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

if (message.content === `<@${client.user.id}>`) {
  message.channel.send(`Beni kullanmak için ${prefix}yardım dan komutlara bakabilirisin <@${message.author.id}>!`)
}
});
/////////////////////////////Söz Kısmı
client.on(`message`, msg => {
  if (msg.content.toLowerCase() === prefix + 'söz') {
    msg.delete();
    var Random = [
      'Herkes kendi kaderinin demircisidir',
      'Belki hiç bir şey yolunda gitmedi ama hiçbir şey de beni yolumdan etmedi!',
      'Gül biraz; bunca keder, bunca gözyaşı dinsin, gül biraz; şu gök kubbe kahkahanı işitsin. Her gidenin ardından koşmaya değmez hayat, gelecekleri bekle, gidecek varsın gitsin.',
      'Aşk davaya benzer, cefa çekmek de şahide. Şahidin yoksa davayı kazanamazsın ki!',
      'İnsan geride bıraktıklarını özler, sahip olduğundan sıkılır, ulaşamadığına tutulur. Genelde ulaşılmaz olan hep aşk olur.',
      'Salatalığın kabuğunu soymak, onun hıyar olduğu gerçeğini değiştirmez.',
      'Bu kadar yürekten çağırma beni. Bir gece ansızın gelebilirim. Beni bekliyorsan, uyumamışsan, sevinçten kapında ölebilirim.',
      'Nankör insan her şeyin fiyatını bilen hiçbir şeyin değerini bilmeyen kimsedir.',
      'Biz birbirimize dönmüş iki ayna gibiyiz. İçimizde binlerce olsa da görüntümüz bir biz sadece birbirimizi görürüz…',
      'Gittiğin yerde boşluk dolduran değil, gittiğin zaman boşluğu doldurulamayan ol.',
      'Eğer aç ve kimsesiz bir köpeği alıp bakar ve rahata kavuşturursanız sizi ısırmaz. İnsan ve köpek arasındaki temel fark budur.',
      'Bir ilişkiyi kadın başlatır, kadın bitirir. Ama başlatan ve bitiren aynı kadın olmayabilir.',
      'Bir tohum verdin çiçeğini al. Bir çekirdek verdin ağacını al. Bir dal verdin ormanını al. Dünyamı verdim sana bende kal.',
      'Yalnızca kültürlü insanlar öğrenmeyi sever cahiller ders vermeyi tercih eder.',
    ];
    var Sözver = Math.floor(Math.random()*Random.length);
    const söz = new Discord.RichEmbed()
    .setDescription(`${Random[Sözver]}`)
    .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
    return msg.channel.sendEmbed(söz);
  }
});
////////////////////////////Şans Kısmı
client.on('message', message => {
  if (message.content.toLowerCase() === prefix + "şans") {
      var sans = ["💎|💳|⌛ - Malesef Kaybettin", "⌛|⌛|💎 - Tüh Be Tekrar Dene", "💳|💎|💳 - Hadi Be Az Kaldı", "💎|💎|💎 - Helal Sana Hepsini Tutturdun", "💎|⌛|⌛ - Az Kaldı Merak Etme", "💳|💳|💳 - Profesyonelsin Dostum", "💎|💳|⌛ - Birdaki Sefere", "⌛|⌛|⌛ - Bu İşte Ustasın Dostum"];
       var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Şans___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

///////////////////////////Beşiktaş Kısmı
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'beşiktaş') {
    msg.delete();
    msg.channel.send({embed: {
        color:  0x000000,
        author: {
        },
        description: 'BEŞİKTAŞ :heart: :yellow_heart: :purple_heart:  :blue_heart: :yellow_heart: :purple_heart:',
        footer: {
        }
      }
    });
  }});
///////////////////////////adamsın tepkili

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'adamsın') {
    await msg.react('🇦');
    await msg.react('🇩');
    await msg.react('🅰');
    await msg.react('🇲');
  }
});
/////////////////////////
client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`tag_${member.guild.id}`);
  let tagyazi;
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`)
  else tagyazi = member.setNickname(`${tag} | ${member.user.username}`)
});
////////////////////////////hacker Kısmı
client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'hacker') {
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
        message.channel.send("İşleniyor.. Lütfen bekleyiniz. ⏲").then(m => m.delete(3000));
        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/468845638688440323/468848900829085716/neblm.png", (err, avatar) => {
                avatar.resize(295, 295)
                              image.composite(avatar, 2, 0).write(`./img/hemckır/${client.user.id}-${user.id}.png`);

                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/hemckır/${client.user.id}-${user.id}.png`));
                }, 1000);
            });
        });
  }
});
////////////////////////
client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('|▬▬|ÖNEMLİ KANALLAR|▬▬|', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])



        
 message.guild.createChannel('「📃」kurallar', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
 message.guild.createChannel('「🚪」gelen-giden', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
       message.guild.createChannel('「✅」sayaç', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
             message.guild.createChannel('「💾」log-kanalı', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
            message.guild.createChannel('「📢」duyuru-odası', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));

       }) 
       .then((collected) => {
        message.guild.createChannel('|▬▬|GENEL KANALLAR|▬▬|', 'category', [{
       id: message.guild.id,
     }]);
             
      message.guild.createChannel(`「💡」şikayet-ve-öneri`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「👥」pre-arama-odası`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「📷」görsel-içerik`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「🤖」bot-komutları`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「💬」sohbet`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));

      message.guild.createChannel(`🏆》Kurucu Odası`, "voice")
      .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
      .then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "Kurucu");
        
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
            
        });
    })

    message.guild.createChannel('|▬▬|SES KANALLARI|▬▬|', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🏆》Yönetici Odası`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "Kurucu");
      let role3 = message.guild.roles.find("name", "Yönetici");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

  message.guild.createChannel(`💬》Sohbet Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})

message.guild.createChannel('|▬▬|OYUN ODALARI|▬▬|', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🎮》LOL`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》ZULA`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》COUNTER STRİKE`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》PUBG`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
  message.guild.createChannel(`🎮》FORTNİTE`, 'voice')
  .then(channel =>
   channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
   message.guild.createChannel(`🎮》MİNECRAFT`, 'voice')
   .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
    message.guild.createChannel(`🎮》ROBLOX`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
     message.guild.createChannel(`🎮》WOLFTEAM`, 'voice')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))



      message.guild.createRole({
        name: 'Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: 'Yönetici',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: 'Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: 'V.I.P',
        color: '00ffff',
      })

      message.guild.createRole({
        name: 'Üye',
        color: 'WHITE',
      })

      message.guild.createRole({
        name: 'Bot',
        color: 'ORANGE',
      })

       message.channel.send("Gerekli Odalar Kuruldu!")
     
            })   
    
}
});
////////////////////////////////////////////////////////////////////////Otorol Kısmı
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('Otorol Sistemi')
    .setDescription(`:loudspeaker: :inbox_tray:  @${member.user.tag}'a Otorol Verildi `)
.setColor("GREEN")
    .setFooter("Cafer", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: :white_check_mark: Hoşgeldin **${member.user.tag}** Rolün Başarıyla Verildi.`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});

client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.addRole(role)

});
/////////////////////////////////////////////////////////////
///////////////////////Takımlar Kısmı
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'beşiktaş')
    if (msg.author.type !== "group") {
      const beşiktaş = new Discord.RichEmbed()
      .setImage("https://goo.gl/KRfm45")
      .setColor("#36393F");
      return msg.channel.sendEmbed(beşiktaş);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'fenerbahçe')
    if (msg.author.type !== "group") {
      const fenerbahçe = new Discord.RichEmbed()
      .setImage("https://goo.gl/uX2Sqa")
      .setColor("#36393F");
      return msg.channel.sendEmbed(fenerbahçe);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'galatasaray')
    if (msg.author.type !== "group") {
      const galatasaray = new Discord.RichEmbed()
      .setImage("https://goo.gl/7TLZ8H")
      .setColor("#36393F");
      return msg.channel.sendEmbed(galatasaray);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '41kocaeli')
    if (msg.author.type !== "group") {
      const kocaelispor = new Discord.RichEmbed()
      .setImage("https://goo.gl/iXizxf")
      .setColor("#36393F");
      return msg.channel.sendEmbed(kocaelispor);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'trabzonspor')
    if (msg.author.type !== "group") {
      const trabzon = new Discord.RichEmbed()
      .setImage("https://goo.gl/q9AFbP")
      .setColor("#36393F");
      return msg.channel.sendEmbed(trabzon);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'başakşehir')
    if (msg.author.type !== "group") {
      const başakşehir = new Discord.RichEmbed()
      .setImage("https://goo.gl/3hC3wu")
      .setColor("#36393F");
      return msg.channel.sendEmbed(başakşehir);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bursaspor')
    if (msg.author.type !== "group") {
      const bursaspor = new Discord.RichEmbed()
      .setImage("https://goo.gl/j5GC5E")
      .setColor("#36393F");
      return msg.channel.sendEmbed(bursaspor);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'karsspor')
    if (msg.author.type !== "group") {
      const karsspor = new Discord.RichEmbed()
      .setImage("https://cdn.discordapp.com/attachments/415626545538007073/442456119957389322/kars.jpg")
      .setColor("#36393F");
      return msg.channel.sendEmbed(karsspor);
  }
});
/////////////////////////

client.on("message", message => {
  if (message.author.bot) return;
 if (message.content.toLowerCase() === prefix + 'türkkahvesi')
    if (message.author.type !== "group") {
			 message.channel.send('Bağlanılıyor....').then(msg => {
            msg.react("☕").then((msgreaction) => msgreaction.message.edit(kahve))
        });
			message.delete()
      const kahve = new Discord.RichEmbed()
      .setImage("https://goo.gl/36DtWR")
      .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  };
});

////////////////////////////Panel Kısmı
client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let afkChannelFetched = 'message.guild.afkChannel'
  
  let command = message.content.split(' ')[0];
  command = command.slice(prefix.length);

  let args = message.content.split(' ').slice(1);

    if (command === "panel") {
        let memberIDFetched = await db.fetch(`memberChannel_${message.guild.id}`);
        if (memberIDFetched == null) memberIDFetched = 'Belirlenmemiş'
        let memberIDFetched2 = await db.fetch(`membermodChannel_${message.guild.id}`);
    if (memberIDFetched2 == null) memberIDFetched2 = 'Belirlenmemiş'
      let sKanalFetched = await db.fetch(`sKanal_${message.guild.id}`);
      if (sKanalFetched == null) sKanalFetched = 'Ayarlanmamış'
      let afkChannelFetched = await db.fetch(`afkChannel_${message.guild.id}`)
      if (afkChannelFetched == null) afkChannelFetched = "Ayarlanmamış"
      let premiumFetched = await db.fetch(`premium_${message.guild.id}`);
      if (premiumFetched == null) premiumFetched = 'Aktif Değil'
            let kufurFetched = await db.fetch(`kufurEngelle_${message.guild.id}`);
      if (kufurFetched == null) kufurFetched = 'Kapalı'
      let reklamFetched = await db.fetch(`reklam_${message.guild.id}`)
      if (reklamFetched == null) reklamFetched = 'Kapalı'
        let prefixFetched = await db.fetch(`prefix_${message.guild.id}`);
        if (prefixFetched == null) prefixFetched = '/'
        let autoRoleFetched = await db.fetch(`otorol_${message.guild.id}`);
        if (autoRoleFetched == null) autoRoleFetched = 'Belirlenmemiş'
        let prefüx = await db.fetch(`prefix_${message.guild.id}`);
        if (!prefüx) prefüx = "/"
        const ayarlar = new Discord.RichEmbed().setTitle("Sunucu Paneli").setColor(0x36393f).setDescription(`**Prefix:** ${prefixFetched}\n**Log:** <#${memberIDFetched}> \n**Sayaç Kanalı:** <#${sKanalFetched}> \n**AFK Kanalı:** <#${afkChannelFetched}> \n**Premium:** ${premiumFetched} \n**Küfür Engel:** ${kufurFetched} \n**Reklam Engel:** ${reklamFetched} \n**Mod-Log:** <#${memberIDFetched2}>\n**Oto rol:** ${autoRoleFetched}`).setFooter(`Yardım almak için ${prefüx}panelyardım`).setThumbnail(message.guild.iconURL)
        message.channel.send(ayarlar)
    }
});
//////////////////////////havalıyazı Kısmı
client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "havalıyazı") {
        const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ[/]^_`ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ{|}~';
        const OFFSET = '!'.charCodeAt(0);
        if (args.length < 1) {
            message.channel.send('Boşluğu HAVALI YA-ZA-MAM! Bir KELİME YAZMALISIN!!!');
        }

        message.channel.send(
            args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .join('')
        )
    }
});
/////////////////////////////beniseviyormusun Kısöı

client.on('message', message => {
if (message.content === 'beniseviyormusun') {
       if (Math.floor((Math.random() * 15) + 1) === 1) {
           message.reply('%90😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 2) {
           message.reply('%0😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 3) {
           message.reply('%20😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 4) {
           message.reply('%50😍 :)');
       }else if (Math.floor((Math.random() * 15) + 1) === 5) {
           message.reply('%70😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 6) {
           message.reply('%80😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 7) {
           message.reply('%95😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 8) {
           message.reply('%81😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 9) {
           message.reply('%50😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 10) {
           message.reply('%35😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 11) {
           message.reply('Kanka Durya Sonra Seversin Yoruldum.');
       }else if (Math.floor((Math.random() * 15) + 1) === 12) {
           message.reply('%100😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 13) {
           message.reply('%1😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 14) {
           message.reply('%99😍');
      }else if (Math.floor((Math.random() * 15) + 1) === 15) {
           message.reply('%3😍');
       }
  }
});

/////////////////////////////özlüsöz Kısmı
client.on('message', message => {
if (message.content.toLowerCase() === prefix + "özlüsöz") {
    var sans = ["Affetmek geçmişi değiştirmez ama geIeceğin önünü açar","İnsanIar seninIe konuşmayı bıraktığında, arkandan konuşmaya başIarIar","Hayattan korkmayın çocuklar;iyi ve doğru bir şeyler yaptığınız zaman hayat öyle güzel ki","Mutluluğu tatmanın tek çaresi, onu paylaşmaktır.","Küçük şeylere gereğinden çok önem verenler, elinden büyük iş gelmeyenlerdir.","Bize yeni düşmanlar lazım. Eskileri hayranımız oldular.","Asla vazgeçmeyin, kaybedenler yalnızca vazgeçenlerdir.","10 kilitli kapıdan daha güvenlidir babanın evde oluşu.","Sevmek için “yürek” sürdürmek için “emek” gerek.","Bir insanın, bir insana verebileceği en güzel hediye; ona ayırabileceği zamandır."," Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.","Kendini Ne Kadar Büyük Görürsen Gör. Bende Sadece Gözümün Gördüğü Kadarsın. Ötesi yok.","Mutlu olmayı yarına bırakmak, karşıya geçmek için nehrin durmasını beklemeye benzer ve bilirsin, o nehir asla durmaz.– Grange"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
      .addField(`¡ ¡ ¡ ¡ ¡ `, `${sonuc}`)
      .setColor("RANDOM");
    return message.channel.sendEmbed(embed);
}
});

////////////////////////////////futboloyna kısmıı
client.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "futboloyna") {
msg.channel.send(':soccer :soccer: :goal: :soccer')
.then(nmsg => nmsg.edit(':soccer: :goal: :soccer:'))
.then(nmsg => nmsg.edit(':soccer: :goal: :goal:'))
.then(nmsg => nmsg.edit(':soccer: :goal: :soccer:'))
.then(nmsg => nmsg.edit(':soccer: :goal:'))
.then(nmsg => nmsg.edit('**Güzel Maçtı Bro Bidaha Oynayalım :)**'));
}
});

///////////////////////////////bilardo Kısmı

client.on('message', message => {
if (message.content === '/bilardo') {
       if (Math.floor((Math.random() * 10) + 1) === 1) {
           message.reply('Vurduuu,ve Siyah Topu Deliğe Attı.🎱!');
       }else if (Math.floor((Math.random() * 15) + 1) === 2) {
           message.reply('Vurduuu,Ve Tüm Topları Deliğe Soktu🎱 ');
       }else if (Math.floor((Math.random() * 15) + 1) === 3) {
           message.reply('Hadi Son 1 Topun Kaldı Atarsın Bu Topu🎱');
       }else if (Math.floor((Math.random() * 15) + 1) === 4) {
           message.reply('Hadi Son 5 Topun Kaldı Atarsın Bu Topu Sen🎱');
       }else if (Math.floor((Math.random() * 15) + 1) === 5) {
           message.reply('Hadi Son 4 Topun Kaldı Atarsın Bu Topu Sen🎱');
       }else if (Math.floor((Math.random() * 15) + 1) === 6) {
           message.reply('Ehbe Kardeşim Biraz Dikkatli Olsana Beyaz Topu Attın🎱');
       }else if (Math.floor((Math.random() * 15) + 1) === 7) {
           message.reply('Helal Lan Sana Tüm Topları Deliğe Soktun🎱👏');
       }else if (Math.floor((Math.random() * 15) + 1) === 8) {
           message.reply('Ben Pes Ediyorum Oynamaya Korkuyorum🎱');
       }else if (Math.floor((Math.random() * 15) + 1) === 9) {
           message.reply('Eh be Kardeşim Biraz Dikkatli Olsana Rakibinin Topunu Attın Deliğe🎱');
       }else if (Math.floor((Math.random() * 15) + 1) === 10) {
           message.reply('Ve Sen Kazandın Bu Maçı Tebrikler👏');
       }
  }
});
/////////////////////////////

///////////////////////////////mod-log denetim kaydı Kısmı
client.on('messageUpdate', async (oldMessage, newMessage) => {
      if (oldMessage.author.bot) {
        return false;
    }
    if (!oldMessage.guild) {
        return false;
    }

    if (oldMessage.content == newMessage.content) {
        return false;
    }

    if (!oldMessage || !oldMessage.id || !oldMessage.content || !oldMessage.guild) return;
  let embedds4 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Mesaj Güncellendi!`)
        .setThumbnail(oldMessage.author.avatarURL)
        .addField("Gönderen", oldMessage.author.tag, true)
        .addField("Önceki Mesaj", oldMessage.content, true)
        .addField("Şimdiki Mesaj", newMessage.content, true)
        .addField("Kanal", newMessage.channel.name, true)
    let membermodChannel = await db.fetch(`membermodChannel_${oldMessage.guild.id}`)
    if (!oldMessage.guild.channels.get(membermodChannel)) return console.log('Denetim Kaydı Logu')
    else oldMessage.guild.channels.get(membermodChannel).send(embedds4)
})

client.on('channelDelete', async channel => {
  let embedds3 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Kanal Silindi!`)
        .setThumbnail(channel.guild.iconURL)
        .setDescription(`'${channel.name}' adlı kanal silindi!`, true)
    let membermodChannel = await db.fetch(`membermodChannel_${channel.guild.id}`)
    if (!channel.guild.channels.get(membermodChannel)) return console.log('Denetim Kaydı Logu')
    else channel.guild.channels.get(membermodChannel).send(embedds3)
})

client.on('channelCreate', async channel => {
  let embedds2 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Kanal Oluşturuldu!`)
        .setThumbnail(channel.guild.iconURL)
        .setDescription(`'${channel.name}' adlı kanal oluşturuldu!`, true)
    let membermodChannel = await db.fetch(`membermodChannel_${channel.guild.id}`)
    if (!channel.guild.channels.get(membermodChannel)) return console.log('Denetim Kaydı Logu')
    else channel.guild.channels.get(membermodChannel).send(embedds2)
})

client.on('emojiCreate', async emoji => {
  let embedds9 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Emoji Oluşturuldu!`)
        .setThumbnail(emoji.guild.iconURL)
        .setDescription(`<:${emoji.name}:${emoji.id}> - ${emoji.name} adlı emoji oluşturuldu!`, true)
    let membermodChannel = await db.fetch(`membermodChannel_${emoji.guild.id}`)
    if (!emoji.guild.channels.get(membermodChannel)) return console.log('Denetim Kaydı Logu')
    else emoji.guild.channels.get(membermodChannel).send(embedds9)
})

client.on('emojiDelete', async emoji => {
  let embedds0 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Emoji Silindi!`)
        .setThumbnail(emoji.guild.iconURL)
        .setDescription(`':${emoji.name}:' adlı emoji silindi!`, true)
    let membermodChannel = await db.fetch(`membermodChannel_${emoji.guild.id}`)
    if (!emoji.guild.channels.get(membermodChannel)) return console.log('Denetim Kaydı Logu')
    else emoji.guild.channels.get(membermodChannel).send(embedds0)
})

client.on('roleCreate', async role => {
  let embedds0 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Rol Oluşturuldu!`)
        .setThumbnail(role.guild.iconURL)
        .setDescription(`'${role.name}' adlı rol oluşturuldu.`, true)
    let membermodChannel = await db.fetch(`membermodChannel_${role.guild.id}`)
    if (!role.guild.channels.get(membermodChannel)) return console.log('Denetim Kaydı Logu')
    else role.guild.channels.get(membermodChannel).send(embedds0)
})



 client.on('roleUpdate', async (oldRole, newRole) => {
          var embed = new Discord.RichEmbed()
          .setColor("#36393E")
          .setTitle(`Rol Güncellendi.`)
          .addField("Önceki Rol", oldRole.name, true)
          .addField("Şimdiki Rol", newRole.name, true)
          .setFooter(`Eski Rol ID: ${oldRole.id} | Yeni Rol ID: ${newRole.id}`)
 let membermodChannel = await db.fetch(`membermodChannel_${oldRole.guild.id}`)
    if (!oldRole.guild.channels.get(membermodChannel)) return console.log('Denetim Kaydı Logu')
    else oldRole.guild.channels.get(membermodChannel).send({embed})
 });


client.on('roleDelete', async role => {
  let embedds0 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Rol Silindi!`)
        .setThumbnail(role.guild.iconURL)
        .setDescription(`'${role.name}' adlı rol silindi.`, true)
    let membermodChannel = await db.fetch(`membermodChannel_${role.guild.id}`)
    if (!role.guild.channels.get(membermodChannel)) return console.log('Denetim Kaydı Logu')
    else role.guild.channels.get(membermodChannel).send(embedds0)
})






client.on('messageDelete', async message => {
      if (message.author.bot) {
        return false;
    }

    if (!message.guild) {
        return false;
    }

  let embedds7 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Mesaj Silindi!`)
        .setThumbnail(message.author.avatarURL)
        .addField("Gönderen", message.author.tag, true)
        .addField("Mesaj", message.content, true)
        .addField("Kanal", message.channel.name, true)
    let membermodChannel = await db.fetch(`membermodChannel_${message.guild.id}`)
    if (!message.guild.channels.get(membermodChannel)) return console.log('membermodChannel')
    else message.guild.channels.get(membermodChannel).send(embedds7)
})

client.on('guildBanRemove', async (guild, member) => {
  let embedds6 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Yasak Kaldırıldı!`)
        .setThumbnail(member.avatarURL)
        .setDescription(`'${member.tag}' adlı kişinin yasağı kaldırıldı.`, true)
    let membermodChannel = await db.fetch(`membermodChannel_${guild.id}`)
    if (!guild.channels.get(membermodChannel)) return console.log('membermodChannel')
    else guild.channels.get(membermodChannel).send(embedds6)
})

client.on('guildBanAdd', async (guild, member) => {
  let embedds5 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Üye Yasaklandı!`)
        .setThumbnail(member.avatarURL)
        .setDescription(`'${member.tag}' adlı kişi sunucudan yasaklandı.`, true)
    let membermodChannel = await db.fetch(`membermodChannel_${guild.id}`)
    if (!guild.channels.get(membermodChannel)) return console.log('membermodChannel')
    else guild.channels.get(membermodChannel).send(embedds5)
})
////////////////////////
client.on("message", async message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if (command === "mod-log-ayarla" || command === "modlogayarla" || command === "mod-logayarla" || command === "modlog") {
        if (!message.member.hasPermission("MANAGE_GUILD"))
            return message.channel.send(`${process.env.basarisiz} Bu komutu kullanmak için yetkin bulunmuyor.`)
        if (!message.mentions.channels.first() && args.join(" ").toLowerCase() === `none`)
            return message.channel.send("Geçerli bir kanal etiketlemelisin.\nDoğru kullanım: ${prefix}mod-log-ayarla [#kanal]")
        let newChannel;
        if (args.join(" ").toLowerCase() === `none`) newChannel = '';
        else newChannel = message.mentions.channels.first().id;
        db.set(`membermodChannel_${message.guild.id}`, newChannel).then(i => {
            const ayarlar2 = new Discord.RichEmbed().setFooter(`${process.env.basarili} Mod-Log kanalı ${message.mentions.channels.first()} olarak seçilmiştir.`)
            return message.channel.send(`${process.env.basarili} Mod-Log kanalı ${message.mentions.channels.first()} olarak seçilmiştir.`)
        })
    }
});
//////////////////tersyazı Kısmı
 client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "ters") {
        const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
        // Start with the character '!'
        const OFFSET = '!'.charCodeAt(0);
        if (args.length < 1) {
            message.channel.send('Ters yazılacak yazıyı yazmalısın.');
        }

        message.channel.send(
            args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .reverse().join('')
        )
    }
});
/////////////////Ping Kısmı
//client.on("message", message => {
//if (message.content === prefix + "ping") {
  // message.channel.send('**Geçikme Süresi Hesaplandı :**').then(message => message.delete(3000));
    //const pingozel = new Discord.RichEmbed()
    //.setColor('RANDOM')
    //.setAuthor(`Gecikme Süreleri`, client.user.avatarURL)
    //.setDescription(`⏳ **| Normal Gecikme** : [${client.ping}]  \n📨 **| Mesaj Gecikmesi** : [${new Date().getTime() - message.createdTimestamp}]`)
    //return message.channel.sendEmbed(pingozel);
//}
//});

/////////////////////
 
client.on('message', message => {
    if (message.content.toLowerCase() === '/kedi') {
var request = require('request');

request('http://aws.random.cat/meow', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) { 
        var info = JSON.parse(body);
  const foto = new Discord.RichEmbed()
  .setImage(info.file)
      message.channel.send(foto)
    }
})
    }
});
///////////////
client.on('message', msg => {
  if (msg.content === '/yapımcın') {
    msg.reply('Yapımcım ! 《EVĪ̇ИÐÂR─ßЦÐÂҚĈĪ》 #0137 Dir.');
  }
});
///////////////
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
  
client.login(ayarlar.token);

const { Client, Util } = require('discord.js');
const { PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready!'));

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(PREFIX)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(PREFIX.length)

	if (command === 'play') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('Önce Sesli Bir Kanala Katılmanız Gerekmektedir.');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**:arrow_down:Şarkı Seçimi:arrow_down:**__

${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}

1 İle 10 Arasında Bir Değer Seçin Lütfen.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('Şarkı Seçimi İptal Ediliyor veya Yanlış Değer!');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('🆘 Herhangi Bir Sonuç Bulunamadı.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip') {
		if (!msg.member.voiceChannel) return msg.channel.send('Bir Ses Kanalına Girmeniz Gerekir!');
		if (!serverQueue) return msg.channel.send('Geçebileceğim Bir Şarkı Yok!');
		serverQueue.connection.dispatcher.end('Şarkı Geçildi!');
		return undefined;
	} else if (command === 'stop') {
		if (!msg.member.voiceChannel) return msg.channel.send('Bir Ses Kanalına Girmeniz Gerekir!');
		if (!serverQueue) return msg.channel.send('Durdurabileceğim Bir Şarkı Yok!');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Şarkı Geçildi!');
		return undefined;
	} else if (command === 'volume') {
		if (!msg.member.voiceChannel) return msg.channel.send('Bir Ses Kanalına Girmeniz Gerekir!');
		if (!serverQueue) return msg.channel.send('Sırada Şarkı Yok!');
		if (!args[1]) return msg.channel.send(`Şuanki Ses Düzeyi **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`Ses Düzeyi **${args[1]}** Olarak Ayarlandı.`);
	} else if (command === 'np') {
		if (!serverQueue) return msg.channel.send('Sırada Şarkı Yok!');
		return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
	} else if (command === 'queue') {
		if (!serverQueue) return msg.channel.send('Sırada Şarkı Yok!');
		return msg.channel.send(`
__**:arrow_down:Şarkı Seçimi:arrow_down:**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

**Now playing:** ${serverQueue.songs[0].title}
		`);
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸​ Şarkı Durduruldu!');
		}
		return msg.channel.send('Sırada Şarkı Yok!');
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Şarkı Devam Ettirildi!');
		}
		return msg.channel.send('Sırada Şarkı Yok!');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`✅**${song.title}** Sıraya Eklendi!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Şarkı Başlatıldı: **${song.title}**`);
}
