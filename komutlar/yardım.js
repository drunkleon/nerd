 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`DLive Bot Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:hypesquad1:763723597863714857> DLive Bot  botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<:partner:763724082474254338> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`⛏ \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:hypesquad1:763723597863714857> \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<:partner:763724082474254338> \`${prefix}müzik\` `,true)
.addField(`__Prefix Değiştir__`,`<a:hypesquad1:763723597863714857> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:763723597863714857> \`${prefix}davet\` | DLive'yi Sunucunuza Davet Edersiniz\n<a:hypesquad1:763723597863714857> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:763723597863714857> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(``)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}