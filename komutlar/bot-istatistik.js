


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(``)
.addField("__**Bot Verileri**__", `<a:hypesquad1:763723597863714857> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:hypesquad1:763723597863714857> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:hypesquad1:763723597863714857> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:hypesquad1:763723597863714857> **Bot Sahibi**  <@338657065645899778> \n **Yunus Emre#5697** \n\n <a:hypesquad1:763723597863714857>\ **Bot Geliştiricisi**  <@402412592859185156> \n **Magolor#8225** \n\n \n`)
.addField("__**Sürümler**__", `<a:hypesquad1:763723597863714857> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:hypesquad1:763723597863714857> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:hypesquad1:763723597863714857> **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<a:hypesquad1:763723597863714857> " +client.voice.connections.size + " Sunucu", true)
    .setImage(``)
.setColor("#ffd100")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}