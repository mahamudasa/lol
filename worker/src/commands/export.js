const fs = require("fs")
const chalk = require("chalk")
require("../../../connect/config")


var body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
let head = `*╭───╼[ _${global.namebot}_ ]╾──➲*`
let left = "*│*"
let branch = "*├*"
let bracketmenu = "*┞─╼「"
let F = "」*"
let A = "*┟*"
let B = "*┞*"
let stick = "*╿*"
let borderlist = "*╭╾───────────────╼╮*"
let borderlistend = "*╰╾───────────────╼╯*"
let opener = "*╭─────────────────╮*"
let closing = "*╰─────────────────╯*"
let headtqto = "*╭╾─「 _Thanks To✨_ 」╾───╮*"
let endbordertqto = "*╰╾───────────────╾╯*"
let end = "*╰╾────────────────╼*"
exports.xpMenu = () => {
return `
${head}
${branch} ${prefix}register
${branch} ${prefix}profile 
${branch} ${prefix}transfer
${branch} ${prefix}buylimit
${end}
`
}
exports.imageeditMenu = () => {
return `
${head}
${branch} ${prefix}wanted
${branch} ${prefix}utatoo
${branch} ${prefix}unsharpen
${branch} ${prefix}thanos
${branch} ${prefix}sniper
${branch} ${prefix}sharpen
${branch} ${prefix}sepia
${branch} ${prefix}scary
${branch} ${prefix}rip
${branch} ${prefix}redple
${branch} ${prefix}rejected
${branch} ${prefix}posterize
${branch} ${prefix}ps4
${branch} ${prefix}pixelize
${branch} ${prefix}missionpassed
${branch} ${prefix}moustache
${branch} ${prefix}lookwhatkarenhave
${branch} ${prefix}jail
${branch} ${prefix}invert
${branch} ${prefix}greyscale
${branch} ${prefix}glitch
${branch} ${prefix}gay
${branch} ${prefix}frame
${branch} ${prefix}fire
${branch} ${prefix}distort
${branch} ${prefix}dictator
${branch} ${prefix}deepfry
${branch} ${prefix}ddungeon
${branch} ${prefix}circle
${branch} ${prefix}challenger
${branch} ${prefix}burn
${branch} ${prefix}brazzers
${branch} ${prefix}beautiful
${end}`
}
exports.storeMenu = () => {
return `
${head}
${branch} ${prefix}topup
${branch} ${prefix}convert-ovo
${branch} ${prefix}convert-gopay
${branch} ${prefix}convert-dana
${branch} ${prefix}kalkulator 
${branch} ${prefix}addlist 
${branch} ${prefix}dellist 
${branch} ${prefix}updatelist 
${branch} ${prefix}list 
${end}
*Store Featured*`
}
exports.stalkMenu = () => {
return `
${head}
${branch} ${prefix}mlstalk
${branch} ${prefix}ffstalk
${branch} ${prefix}supersusstalk
${branch} ${prefix}githubstalk
${branch} ${prefix}igstalk
${end}
*Stalk Feature*`
}
exports.tqto = () => {
return `
𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨
› Dika Ardnt
› ZackMans
› Rifza
› Deff
› Rizki 
› Irpan
› vynn
› Dittaz
› Ridho
› All Friends`
}
exports.animeMenu = () => {
return `
${head}
${branch} ${prefix}waifu
${branch} ${prefix}awoo
${branch} ${prefix}megumin
${branch} ${prefix}neko
${branch} ${prefix}shinobu
${branch} ${prefix}bully
${branch} ${prefix}hug
${branch} ${prefix}cuddle
${branch} ${prefix}cry
${branch} ${prefix}kiss
${branch} ${prefix}lick
${branch} ${prefix}pat
${branch} ${prefix}bonk
${branch} ${prefix}yeet
${end}
*Anime Featured*`
}
exports.randomtextMenu = () => {
return `
${head}
${branch} ${prefix}cerpen <query in the list>
${branch} ${prefix}quotes 
${end}
*Random Text Featured*
`
}
exports.convertMenu = () => {
return `
${head}
${branch} ${prefix}sticker 
${branch} ${prefix}smeme 
${branch} ${prefix}stickerwm 
${branch} ${prefix}tomp3 
${branch} ${prefix}tovn 
${branch} ${prefix}toaudio 
${branch} ${prefix}togif 
${branch} ${prefix}tourl 
${branch} ${prefix}tomp4 
${branch} ${prefix}toimage 
${end}
*Convert Featured*
`
}
exports.searchMenu = () => {
return `
${head}
${branch} ${prefix}gimage 
${branch} ${prefix}ytsearch 
${branch} ${prefix}searchgc 
${branch} ${prefix}play 
${branch} ${prefix}happymod 
${branch} ${prefix}servermc 
${branch} ${prefix}mcpedl 
${branch} ${prefix}google 
${branch} ${prefix}pinterest 
${branch} ${prefix}layarkaca-search 
${branch} ${prefix}jadwaltv
${end}
*Search Featured*
`
}
exports.downloadMenu = () => {
return `
${head}
${branch} ${prefix}instagram 
${branch} ${prefix}tiktok 
${branch} ${prefix}twitter 
${branch} ${prefix}facebook 
${branch} ${prefix}youtube 
${branch} ${prefix}igstory 
${branch} ${prefix}jpeg 
${branch} ${prefix}mp4 
${end}
*Download Featured*
`
}
exports.grupMenu = () => {
return `
${head}
${branch} ${prefix}linkgroup 
${branch} ${prefix}setppgc 
${branch} ${prefix}setname 
${branch} ${prefix}setdesc 
${branch} ${prefix}ephemeral 
${branch} ${prefix}hidetag 
${branch} ${prefix}tagall 
${branch} ${prefix}promote 
${branch} ${prefix}demote 
${branch} ${prefix}vote 
${branch} ${prefix}devote 
${branch} ${prefix}upvote 
${branch} ${prefix}cekvote 
${branch} ${prefix}hapusvote 
${branch} ${prefix}antilink <on/off>
${branch} ${prefix}welcome <on/off>
${branch} ${prefix}autorevoke <on/off>
${branch} ${prefix}autodl <on/off>
${branch} ${prefix}antidelete <on/off>
${branch} ${prefix}antireact <on/off>
${branch} ${prefix}antiviewonce <on/off>
${branch} ${prefix}add 
${branch} ${prefix}kick 
${branch} ${prefix}revoke 
${branch} ${prefix}group <open/close>
${branch} ${prefix}editinfo <open/close>
${branch} ${prefix}mute
${branch} ${prefix}checksewa
${end}
*Grup Featured*
`
}
exports.toolsMenu = () => {
return `
${head}
${branch} ${prefix}inspect 
${branch} ${prefix}getname 
${branch} ${prefix}getpic 
${branch} ${prefix}nulis 
${branch} ${prefix}quoted 
${branch} ${prefix}join 
${branch} ${prefix}fliptext 
${branch} ${prefix}tohuruf 
${branch} ${prefix}volume 
${branch} ${prefix}bass
${branch} ${prefix}blown
${branch} ${prefix}deep
${branch} ${prefix}earrape
${branch} ${prefix}fast
${branch} ${prefix}fat
${branch} ${prefix}nightcore
${branch} ${prefix}reverse
${branch} ${prefix}robot
${branch} ${prefix}slow
${branch} ${prefix}tupai
${branch} ${prefix}translate 
${branch} ${prefix}tinyurl
${branch} ${prefix}expand
${branch} ${prefix}getidgc
${branch} ${prefix}latintoaksara
${branch} ${prefix}aksaratolatin
${end}
*Tools Featured*
`
}
exports.funMenu = () => {
return `
${head}
${branch} ${prefix}halah 
${branch} ${prefix}hilih 
${branch} ${prefix}huluh 
${branch} ${prefix}heleh 
${branch} ${prefix}holoh 
${branch} ${prefix}math 
${branch} ${prefix}tictactoe 
${branch} ${prefix}delttt 
${branch} ${prefix}kuismath
${branch} ${prefix}tebakkimia
${branch} ${prefix}asahotak
${branch} ${prefix}tebakkalimat
${branch} ${prefix}susunkata
${branch} ${prefix}caklontong
${branch} ${prefix}tekateki
${branch} ${prefix}tebakkabupaten
${branch} ${prefix}tebakanime
${branch} ${prefix}tebakbendera
${branch} ${prefix}family100 
${branch} ${prefix}suitpvp 
${end}
*Fun Featured*
`
}
exports.stickerTelegramMenu = () => {
return `
${head}
${branch} ${prefix}emoji 
${branch} ${prefix}emojimix 
${branch} ${prefix}emojimix2
${branch} ${prefix}attp 
${branch} ${prefix}doge unde
${branch} ${prefix}patrick
${branch} ${prefix}bucinsticker
${end}
*Sticker Telegram Featured*
`
}
exports.textproMenu = () => {
return `
${head}
${branch} ${prefix}candy 
${branch} ${prefix}christmas 
${branch} ${prefix}3dchristmas 
${branch} ${prefix}sparklechristmas
${branch} ${prefix}deepsea 
${branch} ${prefix}scifi 
${branch} ${prefix}rainbow 
${branch} ${prefix}waterpipe 
${branch} ${prefix}spooky 
${branch} ${prefix}pencil 
${branch} ${prefix}circuit 
${branch} ${prefix}discovery 
${branch} ${prefix}metalic 
${branch} ${prefix}fiction 
${branch} ${prefix}demon 
${branch} ${prefix}transformer 
${branch} ${prefix}berry 
${branch} ${prefix}thunder 
${branch} ${prefix}magma 
${branch} ${prefix}3dstone 
${branch} ${prefix}neonlight 
${branch} ${prefix}glitch 
${branch} ${prefix}harrypotter 
${branch} ${prefix}brokenglass 
${branch} ${prefix}papercut 
${branch} ${prefix}watercolor 
${branch} ${prefix}multicolor 
${branch} ${prefix}neondevil 
${branch} ${prefix}underwater 
${branch} ${prefix}graffitibike
${branch} ${prefix}snow 
${branch} ${prefix}cloud
${branch} ${prefix}honey
${branch} ${prefix}ice 
${branch} ${prefix}fruitjuice 
${branch} ${prefix}biscuit 
${branch} ${prefix}wood 
${branch} ${prefix}chocolate 
${branch} ${prefix}strawberry
${branch} ${prefix}matrix
${branch} ${prefix}blood 
${branch} ${prefix}dropwater 
${branch} ${prefix}toxic 
${branch} ${prefix}lava 
${branch} ${prefix}rock 
${branch} ${prefix}bloodglas 
${branch} ${prefix}hallowen 
${branch} ${prefix}darkgold 
${branch} ${prefix}joker
${branch} ${prefix}wicker
${branch} ${prefix}firework
${branch} ${prefix}skeleton 
${branch} ${prefix}blackpink 
${branch} ${prefix}sand 
${branch} ${prefix}glue 
${branch} ${prefix}1917 
${branch} ${prefix}leaves 
${branch} ${prefix}glitch3
${branch} ${prefix}drapwater
${branch} ${prefix}3dbox
${branch} ${prefix}pornhub
${branch} ${prefix}lion2
${end}
*Textpro Featured*
`
}
exports.infoMenu = () => {
return `
${head}
${branch} ${prefix}merdeka-news 
${branch} ${prefix}kontan-news 
${branch} ${prefix}cnbc-news 
${branch} ${prefix}tribun-news 
${branch} ${prefix}indozone-news 
${branch} ${prefix}kompas-news 
${branch} ${prefix}detik-news 
${branch} ${prefix}daily-news 
${branch} ${prefix}inews-news 
${branch} ${prefix}okezone-news 
${branch} ${prefix}sindo-news 
${branch} ${prefix}tempo-news 
${branch} ${prefix}antara-news 
${branch} ${prefix}cnn-news 
${branch} ${prefix}fajar-news 
${branch} ${prefix}gempa
${branch} ${prefix}gempanow
${end}
*Information Featured*
`
}
exports.storageMenu = () => {
return `
${head}
${branch} ${prefix}setcmd 
${branch} ${prefix}listcmd 
${branch} ${prefix}delcmd 
${branch} ${prefix}lockcmd 
${branch} ${prefix}addmsg 
${branch} ${prefix}listmsg 
${branch} ${prefix}getmsg 
${branch} ${prefix}delmsg 
${end}
*Storage Featured*
`
}
exports.otherMenu = () => {
return `
${head}
${branch} ${prefix}whatmusic
${branch} ${prefix}owner 
${branch} ${prefix}catalog
${branch} ${prefix}listpc 
${branch} ${prefix}listgc 
${branch} ${prefix}mcserver 
${branch} ${prefix}sc 
${branch} ${prefix}ping 
${branch} ${prefix}afk 
${branch} ${prefix}cekupdate [UpdateBot]
${branch} ${prefix}getscmd [GetSticker]
${branch} ${prefix}delete 
${branch} ${prefix}infochat 
${branch} ${prefix}request 
${branch} ${prefix}report 
${branch} ${prefix}donate 
${branch} ${prefix}listonline
${end}
*Other Featured*
`
}
exports.ownerMenu = () => {
return `
${head}
${branch} ${prefix}sendsession
${branch} ${prefix}modeprefix
${branch} ${prefix}setprefix
${branch} ${prefix}self 
${branch} ${prefix}public 
${branch} ${prefix}bcall 
${branch} ${prefix}bcgroup 
${branch} ${prefix}chat 
${branch} ${prefix}addsewa
${branch} ${prefix}listsewa
${branch} ${prefix}ban <add/del>
${branch} ${prefix}cowner <add/del>
${branch}> / => / $
${end}
*Owner Featured*
`
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})