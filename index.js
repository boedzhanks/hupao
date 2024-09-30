require('./tao.js')
const { default: WabotSocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const pino = require("pino");
const fs = require('fs')
const path = require('path')
const readline = require("readline");
const FileType = require('file-type')
const yargs = require('yargs')
const _ = require('lodash')
const PhoneNumber = require('awesome-phonenumber')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const calender = d.toLocaleDateString("id", {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
    })

const useCode = false;
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, sleep } = require('./lib/myfunc')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//
const { Low, JSONFile } = require('@commonify/lowdb')
const mongoDB = require('./lib/mongoDB.js')
//=================================================//
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()
//=================================================//
async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState("session");
    const tao = WabotSocket({
        logger: pino({ level: "silent" }),
        browser: ["Chrome (Linux)", "", ""],
        auth: state,
        printQRInTerminal: !useCode,
        defaultQueryTimeoutMs: undefined,
        syncFullHistory: false
    });
    if (useCode && !tao.user && !tao.authState.creds.registered) {
        async function terhubungMenggunakanCode() {
            const readline = require("readline").createInterface({
                input: process.stdin,
                output: process.stdout
            });
            const question = text =>
                new Promise(resolve => {
                    readline.question(text, answer => {
                        resolve(answer);
                        readline.close();
                    });
                });
            let phoneNumber = "";
            if (!phoneNumber) {
                phoneNumber = await question("Masukkan nomor whatsapp anda: +");
            }
            try {
                console.log(phoneNumber);
                setTimeout(async () => {
                    let code = await tao.requestPairingCode(phoneNumber);
                    code = code?.match(/.{1,4}/g).join("-") || code;
                    console.log(code);
                }, 5000);
            } catch (err) {
                console.log(err);
            }
        }
        await terhubungMenggunakanCode();
    }
    //=================================================//
    tao.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
    let decode = jidDecode(jid) || {}
    return decode.user && decode.server && decode.user + '@' + decode.server || jid
    } else return jid
    }
    //=================================================//
    tao.ev.on('messages.upsert', async chatUpdate => {
    try {
    mek = chatUpdate.messages[0]
    if (!mek.message) return
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    if (mek.key && mek.key.remoteJid === 'status@broadcast') return
    if (!tao.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
    if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
    m = smsg(tao, mek, store)
    require("./hupao.js")(tao, m, chatUpdate, store)
    } catch (err) {
    console.log(err)
    }
    })
    //================================================//
    tao.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
              try {
                let metadata = await tao.groupMetadata(anu.id);
                let participants = anu.participants;
                  for (let num of participants) {
                  var bg = `https://telegra.ph/file/98b2ad4f7193f8424c036.jpg`
                  let ppuser = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'
                  let nameUser = await tao.getName(num)
                  let pushname = num.pushName || nameUser
                  let membr = metadata.participants.length 
                  let wlc = `https://api.popcat.xyz/welcomecard?background=${bg}&text1=WELCOME&text2=+${pushname}&text3=Member+${membr}&avatar=${ppuser}`
                  let lefts = `https://api.popcat.xyz/welcomecard?background=${bg}&text1=GOODBYE&text2=+${pushname}&text3=Member+${membr}&avatar=${ppuser}`
                    if ( anu.action === 'add' ) {
                      await tao.sendMessage(anu.id, { image: { url: wlc }, caption: `✧━━━━━[ *WELCOME* ]━━━━━✧\n\nHello @${num.split("@")[0]} Welcome To *${metadata.subject}*`, mentions: [num] })
                    } else if ( anu.action === 'remove' ) {
                      await tao.sendMessage(anu.id, { image: { url: lefts }, caption: `✧━━━━━[ *GOOD BYE* ]━━━━━✧\n\nGoodbye @${num.split("@")[0]} I Hope You Don't Come Back`, mentions: [num]}) 
                    } else if ( anu.action === 'promote' ) {
                      tao.sendMessage(anu.id, { mentions: [num], text: `@${num.split("@")[0]} Congratulations, Now you are a Group Admin` })
                    } else if ( anu.action === 'demote' ) {
                      tao.sendMessage(anu.id, { mentions: [num], text: `@${num.split("@")[0]} Hahaha You are in demote` })
                    }
                  }
              } catch (err) {
              console.log(`ERROR DIBAGIAN ` + err)
            }
            })
            //==============================================//
            //=================================================//
tao.ev.on('contacts.update', update => {
    for (let contact of update) {
    let id = tao.decodeJid(contact.id)
    if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})
    //=================================================//
    tao.getName = (jid, withoutContact  = false) => {
    id = tao.decodeJid(jid)
    withoutContact = tao.withoutContact || withoutContact 
    let v
    if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
    v = store.contacts[id] || {}
    if (!(v.name || v.subject)) v = tao.groupMetadata(id) || {}
    resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
    })
    else v = id === '0@s.whatsapp.net' ? {
    id,
    name: 'WhatsApp'
    } : id === tao.decodeJid(tao.user.id) ?
    tao.user :
    (store.contacts[id] || {})
    return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}
    //=================================================//
    tao.sendContact = async (jid, kon, quoted = '', opts = {}) => {
    let list = []
    for (let i of kon) {
    list.push({
    displayName: await tao.getName(i + '@s.whatsapp.net'),
    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await tao.getName(i + '@s.whatsapp.net')}\nFN:${await tao.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:hardiansyahramadhani084@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.facebook.com/boedzhanks.store\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
    //=================================================//
    tao.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })}
    //=================================================//
    //Kalau Mau Self Lu Buat Jadi false
    tao.public = true
    //=================================================//
    //=================================================//
 tao.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(message, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])}
    return buffer} 
     //=================================================//
     tao.sendImage = async (jid, path, caption = '', quoted = '', options) => {
    let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await tao.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
    //=================================================//
    tao.sendText = (jid, text, quoted = '', options) => tao.sendMessage(jid, { text: text, ...options }, { quoted })
    //=================================================//
    tao.sendTextWithMentions = async (jid, text, quoted, options = {}) => tao.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
     //=================================================//
    tao.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
    buffer = await writeExifImg(buff, options)
    } else {
    buffer = await imageToWebp(buff)}
    await tao.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer}
     //=================================================//
    tao.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
    buffer = await writeExifVid(buff, options)
    } else {
    buffer = await videoToWebp(buff)}
    await tao.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer}
     //=================================================//
     tao.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
      let quoted = message.msg ? message.msg : message
      let mime = (message.msg || message).mimetype || ''
      let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
      const stream = await downloadContentFromMessage(quoted, messageType)
      let buffer = Buffer.from([])
      for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])}
      let type = await FileType.fromBuffer(buffer)
      trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
      // save to file
      await fs.writeFileSync(trueFileName, buffer)
      return trueFileName}
    //=================================================
     tao.cMod = (jid, copy, text = '', sender = tao.user.id, options = {}) => {
    //let copy = message.toJSON()
    let mtype = Object.keys(copy.message)[0]
    let isEphemeral = mtype === 'ephemeralMessage'
    if (isEphemeral) {
    mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
    let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
    let content = msg[mtype]
    if (typeof content === 'string') msg[mtype] = text || content
    else if (content.caption) content.caption = text || content.caption
    else if (content.text) content.text = text || content.text
    if (typeof content !== 'string') msg[mtype] = {
    ...content,
    ...options}
    if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
    else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
    if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
    else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
    copy.key.remoteJid = jid
    copy.key.fromMe = sender === tao.user.id
    return proto.WebMessageInfo.fromObject(copy)}
    tao.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
    let types = await tao.getFile(PATH, true)
    let { filename, size, ext, mime, data } = types
    let type = '', mimetype = mime, pathFile = filename
    if (options.asDocument) type = 'document'
    if (options.asSticker || /webp/.test(mime)) {
    let { writeExif } = require('./lib/sticker.js')
    let media = { mimetype: mime, data }
    pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
    await fs.promises.unlink(filename)
    type = 'sticker'
    mimetype = 'image/webp'}
    else if (/image/.test(mime)) type = 'image'
    else if (/video/.test(mime)) type = 'video'
    else if (/audio/.test(mime)) type = 'audio'
    else type = 'document'
    await tao.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
    return fs.promises.unlink(pathFile)}
    tao.parseMention = async(text) => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
    //=================================================//
    tao.copyNForward = async (jid, message, forceForward = false, options = {}) => {
    let vtype
    if (options.readViewOnce) {
    message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
    vtype = Object.keys(message.message.viewOnceMessage.message)[0]
    delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
    delete message.message.viewOnceMessage.message[vtype].viewOnce
    message.message = {
    ...message.message.viewOnceMessage.message}}
    let mtype = Object.keys(message.message)[0]
    let content = await generateForwardMessageContent(message, forceForward)
    let ctype = Object.keys(content)[0]
    let context = {}
    if (mtype != "conversation") context = message.message[mtype].contextInfo
    content[ctype].contextInfo = {
    ...context,
    ...content[ctype].contextInfo}
    const waMessage = await generateWAMessageFromContent(jid, content, options ? {
    ...content[ctype],
    ...options,
    ...(options.contextInfo ? {
    contextInfo: {
    ...content[ctype].contextInfo,
    ...options.contextInfo}} : {})} : {})
    await tao.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
    return waMessage}
    //=================================================//
    tao.getFile = async (PATH, save) => {
    let res
    let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
    let type = await FileType.fromBuffer(data) || {
    mime: 'application/octet-stream',
    ext: '.bin'
    }
    filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
    if (data && save) fs.promises.writeFile(filename, data)
    return {
    res,
    filename,
        size: await getSizeMedia(data),
    ...type,
    data
    }
    }
    //=============================================//
    tao.serializeM = (m) => smsg(tao, m, store)
    tao.ev.on("connection.update", c => {
        const { connection, lastDisconnect } = c;
        if (connection === "close") {
            console.log(lastDisconnect);
            connectToWhatsApp();
        }
        if (connection === "open") {
            console.log(tao.user.id.split(":")[0]);
        }
    });
    tao.ev.on("creds.update", saveCreds);
}
connectToWhatsApp();
