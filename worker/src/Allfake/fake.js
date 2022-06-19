const fs = require("fs")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const chalk = require("chalk")
require("../../../connect/config")

exports.ftoko = () => {
return {
key: {
fromMe: false,
 participant : '0@s.whatsapp.net'

},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": global.log0 //Gambarnye
},
"title": global.fake, //Kasih namalu 
"description": "SELF BOT", 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": global.fake,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
}
exports.ftroli = () => {
return {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: global.fake, //Kasih namalu
orderTitle: 'Whatsapp Bot',
thumbnail: global.log0, //Gambarnye
sellerJid: '#0@s.whatsapp.net'

}
}
}
}
exports.flokasi = () => {
return {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'Russia',
jpegThumbnail: global.log0
}
}
}
}
exports.fdocs = () => {
return {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: 'Halo bang', 
jpegThumbnail: global.log0
}
}
}
}
exports.fvideo = () => {
return {
key: { 
fromMe: false,
 participant : '0@s.whatsapp.net'

},
message: { 
"videoMessage": { 
"title":"hallo bang",
"h": `Hmm`,
'seconds': '30', 
'caption': 'Halo bang',
'jpegThumbnail': global.log0
}
}
}
}
exports.fgclink = () => {
return {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P", 
"caption": "Halo bang jagoo", 
'jpegThumbnail': global.log0
}
}
}
}
exports.fgif = () => {
return {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title": global.namebot,
 "h": `Hmm`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': global.footer,
 'jpegThumbnail': global.log0
}
}
} 
}
exports.ftextt = () => {
return {
key: { 
fromMe: false,
"participant" : '0@s.whatsapp.net'

},
message: { 
"extendedTextMessage": {
 "text":"hallo bang",
"title": `Hmm`,
 'jpegThumbnail': global.log0
}
} 
}
}
exports.fvn = () => {
return {
key: { 
fromMe: false,
" participant" : '0@s.whatsapp.net'
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
}
exports.pek = () => { // Fake Bug
return { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": global.log0
            } 
        } 
    }
    }
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})