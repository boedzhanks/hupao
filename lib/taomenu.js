const fs = require('fs')

global.menu = `
╓╼━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆
║   𝐋𝐢𝐬𝐭 𝐌𝐞𝐧𝐮
╙╥━━━━━━━━━━━━━━━❆
  ║
  ║ [</>] ➭ .allmenu
  ║ [</>] ➭ .downloadmenu
  ║ [</>] ➭ .tools
  ║ [</>] ➭ .gamemenu
  ║ [</>] ➭ .groupmenu
  ║ [</>] ➭ .funmenu
  ║ [</>] ➭ .ownermenu
  ║ [</>] ➭ .addmenu
  ║ [</>] ➭ .randommenu
  ║ [</>] ➭ .textmaker
  ║
  ╙━━━━━━❲ 𝓱𝓾𝓹𝓪𝓸 ᵇᵒᵗ ❳━━━━━━━❆`

global.taall = `
∘₊✧──────『𝗔𝗹𝗹 𝗠𝗲𝗻𝘂』──────

┌  ◦ *Info Menu*
│  ◦ sc
│  ◦ tqto
│  ◦ donasi
│  ◦ owner
│  ◦ bot
│  ◦ sosmed
┗─────────────────⬣ 
┌  ◦ *Download Menu*
│  ◦  igdl (linknya)
│  ◦  reddit (linknya)
│  ◦  fbdl (linknya)
│  ◦  twitdl (linknya)
│  ◦  tiktokdl (linknya)
│  ◦  tiktoknowm (linknya)
│  ◦  tiktokaudio (linknya)
│  ◦  ytmp3 (linknya)
│  ◦  ytmp4 (linknya)
│  ◦  ytsearch (linknya)
│  ◦  play (query)
│  ◦  gitclone
┗─────────────────⬣
┌  ◦ *Tools*
│  ◦  ai
│  ◦  igstalk (belum work)
│  ◦  tomp4
│  ◦  tomp3
│  ◦  tovn
│  ◦  togif
│  ◦  tourl
│  ◦  smeme
│  ◦  tiktokstalk (belum work)
│  ◦  hd
│  ◦  myip
│  ◦  menfes
│  ◦  createqr
│  ◦  sticker
│  ◦  kalkulator
┗─────────────────⬣  
┌  ◦ *Random Menu*
│  ◦  lirik (judul)
│  ◦  nope
│  ◦  wm
│  ◦  jodoh
│  ◦  wmvideo
│  ◦  emojimix
│  ◦  emojimix2
│  ◦  attp (textnya)
│  ◦  ttp (textnya)
│  ◦  afk (textnya)
│  ◦  gambar (textnya)
│  ◦  quotesanime
│  ◦  faktaunik
│  ◦  katabijak
│  ◦  pantun
│  ◦  bucin
│  ◦  quotes
│  ◦  darkjokes
│  ◦  google
│  ◦  couple
│  ◦  coffe
│  ◦  getname
│  ◦  getpic
│  ◦  setppgroup
│  ◦  lirik
│  ◦  cerpen
│  ◦  qcimg
│  ◦  ceritahoror
│  ◦  cuaca
┗─────────────────⬣  
┌  ◦ *ᴀᴅᴠᴀɴᴄᴇᴅ*
│  ◦ >
│  ◦ =>
│  ◦ $
┗─────────────────⬣  
┌  ◦ *Anime Menu*
│  ◦  character (nama character)
│  ◦  wait (reply gambar)
│  ◦  saucenao (reply gambar)
│  ◦  waifu
│  ◦  waifu2
│  ◦  neko
│  ◦  loli
│  ◦  kill
│  ◦  pat
│  ◦  lick
│  ◦  bite
│  ◦  yeet
│  ◦  bonk
│  ◦  wink
│  ◦  poke
│  ◦  nom
│  ◦  slap
│  ◦  smile
│  ◦  wave
│  ◦  blush
│  ◦  smug
│  ◦  glomp
│  ◦  happy
│  ◦  dance
│  ◦  cringe
│  ◦  highfive
│  ◦  handhold
┗─────────────────⬣  
┌  ◦ *Group Menu*
│  ◦. welcome on / off
│  ◦. antilink on / off
│  ◦. antitoxic on / off
│  ◦. pushkontak (textnya)
│  ◦. pushcontid (id group)
│  ◦. bcgc (textnya)
│  ◦. hidetag (textnya)
│  ◦. kick (628xx)
│  ◦. add (628xx)
│  ◦. promote (628xx)
│  ◦. demote (628xx)
│  ◦. sendlinkgc (628xx)
│  ◦. editgroup close / open
│  ◦. editinfo on / off
│  ◦. join (linknya)
│  ◦. editsubjek (textnya)
│  ◦. editdesk (textnya)
│  ◦. tagall (textnya)
│  ◦. inspect (linknya)
│  ◦. linkgroup
│  ◦. resetlinkgc
│  ◦. promoteall
│  ◦. demoteall
│  ◦. larangan
│  ◦. buatsw
│  ◦. buatswimage
│  ◦. buatswvideo
│  ◦. swin
│  ◦. vnsw
│  ◦. buatswptv
│  ◦. toptv
│  ◦. buatsws
┗─────────────────⬣  
┌  ◦ *Menu Game*
│  ◦.ᴛᴛᴄ
│  ◦.ᴅᴇʟᴛᴄ
│  ◦.ꜱᴜɪᴛᴘᴠᴘ
│  ◦.ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ
│  ◦.ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ
│  ◦.ᴛᴇʙᴀᴋ ʟɪʀɪᴋ
│  ◦.ᴛᴇʙᴀᴋ ᴋᴀʟɪᴍᴀᴛ
│  ◦.ᴛᴇʙᴀᴋ ʟᴀɢᴜ
│  ◦.ᴛᴇʙᴀᴋ ʟᴏɴᴛᴏɴɢ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ɴᴏᴏʙ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ᴇᴀꜱʏ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ᴍᴇᴅɪᴜᴍ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ʜᴀʀᴅ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ᴇxᴛʀᴇᴍᴇ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ2
┗─────────────────⬣    
┌  ◦ *Menu Owner*
│  ◦. setppbot
│  ◦. addprem (628xx)
│  ◦. delprem (628xx)
│  ◦. listprem
│  ◦. pengguna add (628xx)
│  ◦. pengguna del (628xx)
│  ◦. listban
│  ◦. hapusdb (628xx@s.whatsapp.net)
│  ◦. listdb
│  ◦. block
│  ◦. pppanjang
│  ◦. unblock
┗─────────────────⬣  
┌  ◦ *Fun Menu*
│  ◦.artinama (textnya)
│  ◦.cekkhodam
│  ◦.artimimpi (textnya)
│  ◦.kecocokanpasangan (textnya)
│  ◦.kecocokannama (textnya)
│  ◦.jadipernikahan (textnya)
│  ◦.rejeki (textnya)
│  ◦.sifatusaha (textnya)
│  ◦.pekerjaan (textnya)
│  ◦.artitarot (textnya)
│  ◦.potensipenyakit (textnya)
│  ◦.ramalannasib (textnya)
│  ◦.harisangar (textnya)
│  ◦.haribai (textnya)
│  ◦.fengshui (textnya)
│  ◦.nagahari (textnya)
│  ◦.harinaas (textnya)
│  ◦.weton (textnya)
│  ◦.peruntungan (textnya)
│  ◦.arahrejeki (textnya)
│  ◦.sifat (textnya)
│  ◦.keberuntungan (textnya)
│  ◦.memancing (textnya)
│  ◦.masasubur (textnya)
│  ◦.zodiak (textnya)
│  ◦.shio (textnya)
┗─────────────────⬣   
┌  ◦ *Add Menu*
│  ◦  setcmd
│  ◦  delcmd
│  ◦  listcmd
│  ◦  setppbot
│  ◦  addpdf
│  ◦  delpdf
│  ◦  listpdf
│  ◦  yopdf
│  ◦  sendpdf
│  ◦  addzip
│  ◦  delzip
│  ◦  listzip
│  ◦  yozip
│  ◦  sendzip
│  ◦  addapk
│  ◦  delapk
│  ◦  listapk
│  ◦  yoapk
│  ◦  sendapk
│  ◦  addvn
│  ◦  delvn
│  ◦  listvn
│  ◦  addmsg
│  ◦  sendlist
│  ◦  listmsg
│  ◦  delmsg
│  ◦  getmsg
┗─────────────────⬣
┌  ◦ *Text Maker*
│  ◦. blackpink
│  ◦. rainbow2
│  ◦. water_pipe
│  ◦. halloween
│  ◦. sketch
│  ◦. sircuit
│  ◦. discovery
│  ◦. metallic2
│  ◦. fiction
│  ◦. demon
│  ◦. transformer
│  ◦. berry
│  ◦. thunder
│  ◦. magma
│  ◦. 3dstone
│  ◦. neon
│  ◦. glitch
│  ◦. harry_potter
│  ◦. embossed
│  ◦. broken
│  ◦. papercut
│  ◦. gradient
│  ◦. glossy
│  ◦. watercolor
│  ◦. multicolor
│  ◦. neon_devil
│  ◦. underwater
│  ◦. bear
│  ◦. wonderfulg
│  ◦. christmas
│  ◦. neon_light
│  ◦. snow
│  ◦. cloudsky
│  ◦. luxury2
│  ◦. gradient2
│  ◦. summer
│  ◦. writing
│  ◦. engraved
│  ◦. summery
│  ◦. 3dglue
│  ◦. metaldark
│  ◦. neonlight
│  ◦. oscar
│  ◦. minion
│  ◦. holographic
│  ◦. purple
│  ◦. glossyb
│  ◦. deluxe2
│  ◦. glossyc
│  ◦. fabric
│  ◦. neonc
│  ◦. newyear
│  ◦. newyear2
│  ◦. metals
│  ◦. xmas
│  ◦. blood
│  ◦. darkg
│  ◦. joker
│  ◦. wicker
│  ◦. natural
│  ◦. firework
│  ◦. skeleton
│  ◦. balloon
│  ◦. balloon2
│  ◦. balloon3
│  ◦. balloon4
│  ◦. balloon5
│  ◦. balloon6
│  ◦. balloon7
│  ◦. steel
│  ◦. gloss
│  ◦. denim
│  ◦. decorate
│  ◦. decorate2
│  ◦. peridot
│  ◦. rock
│  ◦. glass
│  ◦. glass2
│  ◦. glass3
│  ◦. glass4
│  ◦. captain_as2
│  ◦. robot
│  ◦. equalizer
│  ◦. toxic
│  ◦. sparkling
│  ◦. sparkling2
│  ◦. sparkling3
│  ◦. decorative
│  ◦. chocolate
│  ◦. strawberry
│  ◦. koifish
│  ◦. bread
│  ◦. matrix
│  ◦. blood2
│  ◦. neonligth2
│  ◦. thunder2
│  ◦. 3dbox
│  ◦. neon2
│  ◦. roadw
│  ◦. bokeh
│  ◦. gneon
│  ◦. advanced
│  ◦. dropwater
│  ◦. wall
│  ◦. chrismast
│  ◦. honey
│  ◦. drug
│  ◦. marble
│  ◦. marble2
│  ◦. ice
│  ◦. juice
│  ◦. rusty
│  ◦. abstra
│  ◦. biscuit
│  ◦. wood
│  ◦. scifi
│  ◦. metalr
│  ◦. purpleg
│  ◦. shiny
│  ◦. jewelry
│  ◦. jewelry2
│  ◦. metalh
│  ◦. golden
│  ◦. glitter
│  ◦. metale
│  ◦. carbon
│  ◦. candy
│  ◦. metalb
│  ◦. gemb
│  ◦. 3dchrome
│  ◦. metalb2
│  ◦. metalg
┗─────────────────⬣`

global.downloadmenu = `
┌  ◦ *Menu Download*
│  ◦  igdl (linknya)
│  ◦  reddit (linknya)
│  ◦  fbdl (linknya)
│  ◦  twitdl (linknya)
│  ◦  tiktokdl (linknya)
│  ◦  tiktoknowm (linknya)
│  ◦  tiktokaudio (linknya)
│  ◦  ytmp3 (linknya)
│  ◦  ytmp4 (linknya)
│  ◦  ytsearch (linknya)
│  ◦  play (query)
│  ◦  gitclone
└ `
global.ownermenu = `
┌  ◦ *Menu Owner*
│  ◦. setppbot
│  ◦. pppanjang
│  ◦. addprem (628xx)
│  ◦. delprem (628xx)
│  ◦. listprem
│  ◦. pengguna add (628xx)
│  ◦. pengguna del (628xx)
│  ◦. listban
│  ◦. hapusdb (628xx@s.whatsapp.net)
│  ◦. listdb
│  ◦. block
│  ◦. unblock
│  ◦. >
│  ◦. =>
│  ◦. $
└ `

global.animemenu = `
┌  ◦ *Anime Menu*
│  ◦  character (nama character)
│  ◦  wait (reply gambar)
│  ◦  saucenao (reply gambar)
│  ◦  waifu
│  ◦  waifu2
│  ◦  neko
│  ◦  loli
│  ◦  kill
│  ◦  pat
│  ◦  lick
│  ◦  bite
│  ◦  yeet
│  ◦  bonk
│  ◦  wink
│  ◦  poke
│  ◦  nom
│  ◦  slap
│  ◦  smile
│  ◦  wave
│  ◦  blush
│  ◦  smug
│  ◦  glomp
│  ◦  happy
│  ◦  dance
│  ◦  cringe
│  ◦  highfive
│  ◦  handhold
└  `

global.groupmenu = `
┌  ◦ *Group Menu*
│  ◦. welcome on / off
│  ◦. antilink on / off
│  ◦. antitoxic on / off
│  ◦. pushkontak (textnya)
│  ◦. pushcontid (id group)
│  ◦. bcgc (textnya)
│  ◦. hidetag (textnya)
│  ◦. kick (628xx)
│  ◦. add (628xx)
│  ◦. promote (628xx)
│  ◦. demote (628xx)
│  ◦. sendlinkgc (628xx)
│  ◦. editgroup close / open
│  ◦. editinfo on / off
│  ◦. join (linknya)
│  ◦. editsubjek (textnya)
│  ◦. editdesk (textnya)
│  ◦. tagall (textnya)
│  ◦. inspect (linknya)
│  ◦. linkgroup
│  ◦. resetlinkgc
│  ◦. promoteall
│  ◦. demoteall
│  ◦. larangan
│  ◦. buatsw
│  ◦. buatswimage
│  ◦. buatswvideo
│  ◦. swin
│  ◦. vnsw
│  ◦. buatswptv
│  ◦. toptv
│  ◦. buatsws
└  `

global.tools = `
┌  ◦ *Tools*
│  ◦  ai
│  ◦  igstalk (belum work)
│  ◦  tomp4
│  ◦  tomp3
│  ◦  tovn
│  ◦  togif
│  ◦  tourl
│  ◦  smeme
│  ◦  tiktokstalk (belum work)
│  ◦  hd
│  ◦  myip
│  ◦  menfes
│  ◦  createqr
│  ◦  sticker
│  ◦  kalkulator
└ `

global.randommenu = `
┌  ◦ *Random Menu*
│  ◦  lirik (judul)
│  ◦  nope
│  ◦  wm (teks)
│  ◦  jodoh
│  ◦  wmvideo
│  ◦  emojimix
│  ◦  emojimix2
│  ◦  afk (textnya)
│  ◦  quotes
│  ◦  darkjokes
│  ◦  google
│  ◦  ppcp
│  ◦  coffe
│  ◦  getname
│  ◦  getpic
│  ◦  setppgroup
│  ◦  lirik (belum work)
│  ◦  qcimg (teks)
│  ◦  cuaca
└  `

global.textmaker = `
┌  ◦ *Text Maker*
│  ◦. blackpink
│  ◦. rainbow2
│  ◦. water_pipe
│  ◦. halloween
│  ◦. sketch
│  ◦. sircuit
│  ◦. discovery
│  ◦. metallic2
│  ◦. fiction
│  ◦. demon
│  ◦. transformer
│  ◦. berry
│  ◦. thunder
│  ◦. magma
│  ◦. 3dstone
│  ◦. neon
│  ◦. glitch
│  ◦. harry_potter
│  ◦. embossed
│  ◦. broken
│  ◦. papercut
│  ◦. gradient
│  ◦. glossy
│  ◦. watercolor
│  ◦. multicolor
│  ◦. neon_devil
│  ◦. underwater
│  ◦. bear
│  ◦. wonderfulg
│  ◦. christmas
│  ◦. neon_light
│  ◦. snow
│  ◦. cloudsky
│  ◦. luxury2
│  ◦. gradient2
│  ◦. summer
│  ◦. writing
│  ◦. engraved
│  ◦. summery
│  ◦. 3dglue
│  ◦. metaldark
│  ◦. neonlight
│  ◦. oscar
│  ◦. minion
│  ◦. holographic
│  ◦. purple
│  ◦. glossyb
│  ◦. deluxe2
│  ◦. glossyc
│  ◦. fabric
│  ◦. neonc
│  ◦. newyear
│  ◦. newyear2
│  ◦. metals
│  ◦. xmas
│  ◦. blood
│  ◦. darkg
│  ◦. joker
│  ◦. wicker
│  ◦. natural
│  ◦. firework
│  ◦. skeleton
│  ◦. balloon
│  ◦. balloon2
│  ◦. balloon3
│  ◦. balloon4
│  ◦. balloon5
│  ◦. balloon6
│  ◦. balloon7
│  ◦. steel
│  ◦. gloss
│  ◦. denim
│  ◦. decorate
│  ◦. decorate2
│  ◦. peridot
│  ◦. rock
│  ◦. glass
│  ◦. glass2
│  ◦. glass3
│  ◦. glass4
│  ◦. captain_as2
│  ◦. robot
│  ◦. equalizer
│  ◦. toxic
│  ◦. sparkling
│  ◦. sparkling2
│  ◦. sparkling3
│  ◦. decorative
│  ◦. chocolate
│  ◦. strawberry
│  ◦. koifish
│  ◦. bread
│  ◦. matrix
│  ◦. blood2
│  ◦. neonligth2
│  ◦. thunder2
│  ◦. 3dbox
│  ◦. neon2
│  ◦. roadw
│  ◦. bokeh
│  ◦. gneon
│  ◦. advanced
│  ◦. dropwater
│  ◦. wall
│  ◦. chrismast
│  ◦. honey
│  ◦. drug
│  ◦. marble
│  ◦. marble2
│  ◦. ice
│  ◦. juice
│  ◦. rusty
│  ◦. abstra
│  ◦. biscuit
│  ◦. wood
│  ◦. scifi
│  ◦. metalr
│  ◦. purpleg
│  ◦. shiny
│  ◦. jewelry
│  ◦. jewelry2
│  ◦. metalh
│  ◦. golden
│  ◦. glitter
│  ◦. metale
│  ◦. carbon
│  ◦. candy
│  ◦. metalb
│  ◦. gemb
│  ◦. 3dchrome
│  ◦. metalb2
│  ◦. metalg
└  `

global.infomenu = `
┌  ◦ *Info Menu*
│  ◦ sc
│  ◦ tqto
│  ◦ donasi
│  ◦ owner
│  ◦ bot
│  ◦ sosmed
│  ◦ panel
│  ◦ daftar
└  `

global.addmenu = `
┌  ◦ *Add Menu*
│  ◦  setcmd
│  ◦  delcmd
│  ◦  listcmd
│  ◦  setppbot
│  ◦  addpdf
│  ◦  delpdf
│  ◦  listpdf
│  ◦  yopdf
│  ◦  sendpdf
│  ◦  addzip
│  ◦  delzip
│  ◦  listzip
│  ◦  yozip
│  ◦  sendzip
│  ◦  addapk
│  ◦  delapk
│  ◦  listapk
│  ◦  yoapk
│  ◦  sendapk
│  ◦  addvn
│  ◦  delvn
│  ◦  listvn
│  ◦  addmsg
│  ◦  sendlist
│  ◦  listmsg
│  ◦  delmsg
│  ◦  getmsg
└ `
 
global.funmenu = `
┌  ◦ *Fun Menu*
│  ◦.artinama (textnya)
│  ◦.cekkhodam
│  ◦.artimimpi (textnya)
│  ◦.kecocokanpasangan (textnya)
│  ◦.kecocokannama (textnya)
│  ◦.jadipernikahan (textnya)
│  ◦.rejeki (textnya)
│  ◦.sifatusaha (textnya)
│  ◦.pekerjaan (textnya)
│  ◦.artitarot (textnya)
│  ◦.potensipenyakit (textnya)
│  ◦.ramalannasib (textnya)
│  ◦.harisangar (textnya)
│  ◦.haribai (textnya)
│  ◦.fengshui (textnya)
│  ◦.nagahari (textnya)
│  ◦.harinaas (textnya)
│  ◦.weton (textnya)
│  ◦.peruntungan (textnya)
│  ◦.arahrejeki (textnya)
│  ◦.sifat (textnya)
│  ◦.keberuntungan (textnya)
│  ◦.memancing (textnya)
│  ◦.masasubur (textnya)
│  ◦.zodiak (textnya)
│  ◦.shio (textnya)
└  
`

global.gamemenu = `
┌  ◦ *Menu Game*
│  ◦.ttc
│  ◦.deltc
│  ◦.suitpvp
│  ◦.tebak kata
│  ◦.tebak gambar
│  ◦.tebak lirik
│  ◦.tebak kalimat
│  ◦.tebak lagu
│  ◦.tebak lontong
│  ◦.kuismath noob
│  ◦.kuismath easy
│  ◦.kuismath medium
│  ◦.kuismath hard
│  ◦.kuismath extreme
│  ◦.kuismath impossible
│  ◦.kuismath impossible2
└  
`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
