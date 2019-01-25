const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let replies = ["Seni görünce; \ngözlerim dolar, \nkulaklarım euro.", "Bizim CD sürücümüz ehliyeti nereden almış acaba?", "Cem Uzan, üstünü örteyim.", "Bu Ericsson, başka erik yok.", "Tebrikler kazandınız, şimdi tencere oldunuz!", "Adamın biri gülmüş, saksıya koymuşlar.", "Adamın biri kızmış istemeye gelmişler.", "DesertHawk saz çaldı; polis tutukladı.", "Sen kamyonu al, Leonardo Da Vinci.", "Dünya dönermiş ay da köfte.", "Kaba kuvvet uyguluma, kap kırılabilir.", "Aklımı kaçırdım, 100.000 TL fidye istiyorum.", "İngilizce seviyen ne kadar iyi olursa olsun '11 years' kelimelerini içinden 'on bir years' diye okumaya mahkumsun.", "Senden was geçtim ya da boşver ya were geçeyim.", "Ben Yedigün içiyorum, sen Onbeşgün iç.", "İzne çıkacam ama çok yüksek merdiven lazım.", "Son gülen en geç anlayandır.Yaş olmuş 35 babam sende göz var oğlum dedi. Bunu 35 yıl sonra mı fark ettin babacım. Çok şaşırdım.", "Aykut gol atamayınca ne demiş? I couldnt.", "Tenyalar bağırsakta yaşar, bağırmasakta.", "Dondurmayı ben yalamam, himalayalar.", "Adamın birisi televizyona çıkmış bir daha indirememişler", "Seni görünce; \ngözlerim dolar, \nkulaklarım euro.", "Kar üzerinde yürüyen adama ne denir. Karabasan.", "Yıkanan Ton’a ne denir? Washington!", "Gidenin arkasına bakmayın yoksa geleni göremezsiniz.", "Oğlum canlılara örnek ver. \n-Kedi, köpek. \n+Cansızlara örnek ver. \n-Ölü kedi, ölü köpek.", "Kanka ben banyoya 3 kişi giriyom. \n-Oha nasıl? \n+Hacı, Şakir ve ben. \n-Defol lan!", "Kocanızla ortak özelliğiniz ne? \n-Aynı gün evlendik.", "+Evladım ödevini neden yapmadın? \n-Bilgisayarım uyku modundaydı, uyandırmaya kıyamadım.", "Bizim arkadaş ortamında paranın lafı bile olmaz. \n-Niye ki? \n+Çünkü hiç birimizin parası yok.", "Annemin bahsettiği elalem diye bir örgüt var illuminatiden daha tehlikeli yemin ederim.", "+Acıkan var mı ya? \n-Yok bizde tatlı kan var.", "Yılanlardan korkma, yılmayanlardan kork.", "Baykuşlar vedalaşırken ne der? \n-Bay bay baykuş.", "Beni Ayda bir sinemaya götürme, Marsta bir sinemaya götür.", "Aaa siz çok terlemişsiniz durun size terlik getireyim.","Geçen gün geçmiş günlerimi aradım ama meşguldü.", "Yağmur yağmış kar peynir", "Hadi oyun oynayalım. Vazgeçtim oymadan oynayalım!", "Geçen gün kamyonu sürdüm Leonardo da Vinci.", "Doğumdan sonra çok kilo aldım. Doğduğumda 2 kiloydum şimdi 62.", "Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek le olayım demiş.", "Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.", " Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.", "Osmanlıda kimseye borç takamıyordun mesela sikke sikke ödüyodun…", "Tatlı yiyip, tatlı konuşuluyorsa bundan sonra mantı yiyip mantıklı konuşacağız.", "Babamı sahura kaldırmayı unuttuk anneme masada ne eksik diyorum tuzluk mu diyor.", "+Okeyde kıza elin nasıl dedim. Ojeli dedi. Ben Şoka girdim. O Migrosa.", "Canım sıkkın kanka sonra gel"];

  	let result = Math.floor((Math.random() * replies.length))

  	const ball = new Discord.RichEmbed()
  	.setAuthor(message.author.tag, message.author.avatarURL)
  	.setColor('RANDOM')
  	.setDescription(replies[result]);
  	message.channel.sendEmbed(ball)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['espiri'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Rastgele espri gönderir.',
  usage: 'espri'
};