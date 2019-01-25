const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("**↓-------------------------Komutlar-------------------------↓**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**》Eğlence Komutları《**", `• /kp = Komik Paylaşımlar Atar. \n• /beşiktaş = Sen Anladın. \n• /kaçcm [@kullanıcı]= ( ͡° ͜ʖ ͡°) Anladın Sen. \n• /zarat = Zaratarsınız. \n• /herkesebendençay = Herkeze Çay Ismarlarsınız. \n• /ilginçbilgi = İlginç Bilgiler Atar. \n• /stresçarkı = Stresçarkı Çevirirsiniz. \n• /asci [Kelimeniz] = Deneyin Ve Görün. \n• /atasözü = Atasözü Atar. \n• /dcnitro = Fotonuza DCNitro Ekler. \n• /slots = Slots oynarsınız. \n• /yazıtura = Yazıtura Atarsınız. \n• /çekiç[@kullanıcı] = İstedğiniz Kişiye Çekiç Atar. \n• /emojiyazı = Emoji İle Yazı Yazarsınız. \n• /espri = Random Espri Atar. \n• /kahkaha = Kahkaha Atarsınız. \n• /kedi = KediFotorafları Atar. \n• /efkarölçer [@kullanıcı] = Eflar Ölçerınızı Ölçer. \n• /zekaölçer [@kullanıcı](Yakında..) = Zekanızı Ölçer. \n• /ilginçbilgi = İlginç Bilgiler Atar.  \n• /sigaraiç = Sigara İçersiniz.  \n• /1vs1 [@kullanıcı] [@kullanıcı]= 1vs1 Atarsınız. \n• /balıktut = Balık Tutarsınız. \n• rasgeleyazı =Bedava Sunucu Para Kazandırır. \n• /avatarım = Avatarınınızı Gösterir.  `)
  .addField("• /tkm = Taş Kağıt Makas Oynar.", `\n• /wwegif = Rasgele Wwe Gif Atar \n• /trampet = Trampet Oyea. \n• /tersrenk =  Avatarınızı Ters Renk Atar. \n• /öp [isim] = İstediğiniz Kişiyi Öpersiniz. \n• /partner = Fotorafınıza Partner Logosu Ekler. \n• /fdans = Fortnite Dans Atar.  \n• /wasted = Fotonuza Wasted Efekti Ekler. \n• /tr = Fotonuza Türk Bayrağı Ekler. \n• /aze = Fotunuza Azerbaycan Bayrak Ekler. \n• /atatürkçerçeve = Fotonuza Atatürk Çerçeve Ekler.  \n• /izmirmarşı = İzmir Marşını Atar. \n• /mesajküçült = Mesajınız Küçültülür. \n• /kralol = Kral Olursunuz. \n• /kahve = Kahve İçersiniz.   \n• /gif  = Bot Gif Yollar. \n• /pokemon = Bot Pokemon Yollar.     \n• /türkbayrak =  Türk Bayrağı Emojisini Atar. \n• /sor [sorunuz] = Sorunuzu Cevaplar. \n• /türkkahvesi = Türkkhvesi Fotoğrafı Gösterir. \n• /hacker = Hacker Gifi Gösterir. \n• /zekam = Zekanızı Gösterir. \n• /şans = Şansınızı Gösterir.`)
  .addField("**》Kullanıcı Komutları《**", `• /kayıtüye = Üye Rolü Verir \n• /google = Google Da Arama Yapar. \n• /hastebin [kod/cümle] = Hastebine Kod Yüklersiniz. \n• /kayıtgamer = Gamer Rolü Verir. \n• /ailemiz = Botun Olduğu Sunucuları Gösterir. \n• /havadurumu [Bulununduğunuz Yerin ADI] = Bulunduğunuz Yerin Hava Durumunu Atar. \n• /çeviri [dilin kısaltması] [Çevirelecek Kelime] = Bottan Çeviri Yapar. \n• /sunucu = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \n• /sunucuicon = Bulunduğunuz Sunucunun Resmin Gösterir. \n• /kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \n• /öneri [Önericeğiniz Kelime] = Önerinizi Kurucuya İletir. \n• /yaz [Yazılacak Kelime] = Bota İsediğinizi Yazdırırsınız. \n• /kullanıcıbilgim = Kullanıcı Bilginizi Gösterir. \n• /radyo [Radyo ADI] = Radyoyu Dinlersiniz. \n•geldim = Afk Modundan Çıkarsınız. `)
  .addField("• /rol-bilgi [rol] = Etiketlediğiniz rol hakkında bilgi alırsınız.", `   \n• /trigger = Triggered !!!!  \n• /kralol = Kral Olursunuzuz.   \n• /sniper = Avatarınızıa Sniper Ekler.   \n• /twich [kanaladı] = Twich Kanalını Gösterir. \n• /kredikartı = Paranızı Gösterir.  \n• /mesajdöndür [Mesajınız] = Mesajınızı Ters Döndürür.  \n• /sunucunutanıt = Sunucunuzu Tanıtır. \n• /canlıdestek =  Canlı Desteğe Bağlanırsınız. \n• /speedtest = SpeeTest Yaparsınız. \n• /kısalt [link] = Link Kısaltır.  \n• /mcödül = Mc Başarımı Atar. \n• /steamfiyat [OyunAdı] = Aradağınız Oyunun Steamdaki Fiyatına Bakmanızı Sağlar. \n• /şifre [rakam] = Random Şifre Verir. \n• /kayıtvatandaş = Vatandaş Rolü Verir. \n• /yetkilerim = Sunucudaki Yetkilerinizi Gösterir. \n• /afk = AFK Olursunuz. `)
  .addField("**》Oyun Komutları《**", `• /lolrehber = LOL Karakterlerin BUİLD Kodlarını Atar. \n• /mcskin [isim] = Minecraft Skinini atar. \n• /roblox [isim] = Roblox Avatar Göterir. \n• /fortnite pc [kullanıcıadı] = Fortnite Oyun Proilini Atar.`)
  .addField("**》Müzik Komutları《**", `• /play [şarkıismi] = Şarkı Açmanıza Yararak. \n• /skip = Sıradaki Şarkıya Geçmenizi Sağlar. \n• /stop = Şarkıyı Duraklatır. \n• /volume = Sesi Ayarlamanıza Yarar. \n• /queue = Sıradaki Şarkıları Gösterir.`)
  .addField("**》Yetkili Komutları《**", `• /ban = İstediğiniz Kişiyi Sunucudan Banlar. \n• /yetkililer = Yetkilileri Gösterir. \n• /oylama [Ne Olacağı] = Oylama Başlatırsınız. \n• /duyur = Bot Herkeze Duyuru ATAR. \n• /mesajküçült <mesaj> = Mesajınızı küçültür. \n• /ses-kanal-aç [açmak istediğiniz kanalın adı] = Bir ses kanalı açar  \n• /yazı-kanal-aç [açmak istediğiniz kanalın adı] = Metin Kanalı Açar.  \n• /rolver = Sunucunuzda Olan Bir Kişiye ROL Verir. \n• /kur = Bot Gerekli Şeyleri Kurar /sustur [@kullanıcı] [neden] = Kodu Kullandığınız Kişi Hiçbir Kanala Yazı Yazamaz. \n• /reklamengelleme = Otomatik Olarak Aktifdir. \n• /küfürengelleme = Çoğu Küfürlü Kelimeleri Otomatik Olarak Siler. \n• /duyuru [Yazınız] = Sunucunuzda Duyuru Yaparsınız. \n• /kilit[istediğiniz süre] = Yazdığınız Odayı Kitler. \n• /otorol = OtoRol Ayarlar.  \n• /rtarama = ReklamTaraması. \n• /sustur = İstediğiniz Kişiyi Susturur. \n• /sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \n• /oylama = Oylama Açar. \n• /duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**》Ana Komutlar《**", "• /yardım = BOT Komutlarını Atar. \n• /kur = Kurulum Yapar.   \n• /ping = BOT Gecikme Süresini Söyler. \n• /botdavet = Bot Discord Link Atar. \n• /istatistik = BOT İstatistiklerini Gösterir. \n• /öneri = Önerilerinizi Bot Sahibine Gönderir.")
  .addField("**》Otorol Sayaç vb.《**", "• /sayaç-ayarla [Sayı] = Sayacın Hedefini Belirler. \n• /sayaç-kanal-ayarla [#Deneme] = Sayacın Hangi Kanalda Uygulamasını Belirler.")
  .setFooter('Cafer ● ( ͡° ͜ʖ ͡°)')
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
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'help [komut]'
};