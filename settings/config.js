const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
'https://zenzapis.xyz': '2c2a76df7d',
}

//gw benci apikey, maka dari itu gwejh bikin ini.
global.audio =[
"https://a.uguu.se/mbcawbZV.mp3",
"https://a.uguu.se/kpLlUxmb.mp3",
"https://a.uguu.se/PayhXmdU.mp3",
"https://a.uguu.se/JZyClUth.mp3",
"https://a.uguu.se/YsdROKcS.mp3",
"https://a.uguu.se/pteAZyiV.mp3",
"https://a.uguu.se/mmLHtoyn.mp3",
"https://a.uguu.se/ZvHWhxtO.mp3",
"https://a.uguu.se/PexxWyts.mp3",
"https://a.uguu.se/VAAbCCpy.mp3",
"https://a.uguu.se/tgweEeYx.mp3",
"https://a.uguu.se/WValBgCl.mp3",
"https://a.uguu.se/XBqeijNm.mp3",
"https://a.uguu.se/Epkifjlu.mp3",
"https://a.uguu.se/BBzNdRMn.mp3",
"https://a.uguu.se/PUWhuRzH.mp3",
"https://a.uguu.se/QcaeYUZf.m4a",
"https://a.uguu.se/YUoeJvPZ.mp3",
"https://a.uguu.se/ufyWCmFC.mp3",
"https://a.uguu.se/ENopgwBL.mp3",
"https://a.uguu.se/JaMbwugv.mp3",
"https://a.uguu.se/YsdROKcS.mp3",
"https://a.uguu.se/cJSiMNwb.mp3",
"https://a.uguu.se/pPEWDDVn.aac",
"https://a.uguu.se/pPEWDDVn.aac",
"https://a.uguu.se/EjcTkTbi.mp3",
"https://a.uguu.se/LBuQYreu.mp3"
]
global.gambar =[
"https://telegra.ph/file/74a73f50e97b2c29a1915.jpg",
"https://telegra.ph/file/a4250101c9059351b4c2a.jpg",
"https://telegra.ph/file/edcde3b17573c0b4ad8b1.jpg",
"https://telegra.ph/file/be50ada7f42556ecf9b62.jpg",
"https://telegra.ph/file/207c47dc216620473867f.jpg",
"https://telegra.ph/file/d4b79d46fde189a209e26.jpg",
"https://telegra.ph/file/33b46f8df0fe399909ec5.jpg",
"https://telegra.ph/file/74e4a4985333f2200cd13.jpg",
"https://telegra.ph/file/a3091ce936d62ea76777f.jpg",
"https://telegra.ph/file/a4d8267969c17fbda65b2.jpg",
"https://telegra.ph/file/592cdbee867e1071b3470.jpg",
"https://telegra.ph/file/52cff7d080473d41e4f31.jpg",
"https://telegra.ph/file/73030742eebd3a081beac.jpg",
"https://telegra.ph/file/adf8660e77ee40ad3afc6.jpg",
"https://telegra.ph/file/6dcf0f3aacefec6ebcf1a.jpg",
"https://telegra.ph/file/6260249b574a96b70c529.jpg",
"https://telegra.ph/file/6b1cf58706f891603d311.jpg",
"https://telegra.ph/file/e6c0aa8328cc20275fac1.jpg",
"https://telegra.ph/file/965d1d547b813b9c3caa0.jpg",
"https://telegra.ph/file/20275fad1c2550d620c42.jpg",
"https://telegra.ph/file/d4b79d46fde189a209e26.jpg",
"https://telegra.ph/file/e3b245089226158cfe311.jpg",
"https://telegra.ph/file/73fea62cd1ecfa36ef000.jpg",
"https://telegra.ph/file/86964a140cd68d898a474.jpg",
"https://telegra.ph/file/b20f6ebaffb8a5ee3ee50.jpg",
"https://telegra.ph/file/105175e45624e34c5d2b6.jpg",
"https://telegra.ph/file/56cd28524bc2cc7bb27a6.jpg",
"https://telegra.ph/file/ed674135fed56a1b88290.jpg"]
global.waifu = [
"https://a.uguu.se/OszyjYxE.mp4",
"https://a.uguu.se/cpKxfXbJ.mp4",
"https://a.uguu.se/DAKfUvmT.mp4",
"https://a.uguu.se/uPPAGccH.mp4",
"https://a.uguu.se/cWFRGTg.mp4",
"https://a.uguu.se/iNUeUxj.mp4",
"https://a.uguu.se/AYnCNQn.mp4",
"https://a.uguu.se/tNGVeQU.mp4",
"https://a.uguu.se/HrBsrGud.mp3",
"https://a.uguu.se/nivAzGtP.mp4",
"https://a.uguu.se/icYOkUNS.mp4",
"https://a.uguu.se/qUBlyENX.mp4",
"https://a.uguu.se/NhXjej.mp4",
"https://a.uguu.se/VpMtaTCs.mp4",
"https://a.uguu.se/mCwFxeoP.mp4",
"https://a.uguu.se/VzSvpkAL.mp4",
"https://a.uguu.se/vXuByxXz.mp4",
"https://a.uguu.se/ozLQmveP.mp4",
"https://a.uguu.se/Rjpxrpsf.mp4",
"https://a.uguu.se/cHOtFbgp.mp4",
"https://a.uguu.se/MPwJUTSe.mp4"]
// Other
global.owner = ['6281316701742']
global.premium = ['6281316701742']
global.botname = 'Satganz Devs'
global.ownername = 'Satganz Devs'
global.packname = 'Satganz Devs'
global.author = 'WhatsApp Bot'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
success: '✓ Success',
admin: 'Group Admin Special Features!',
botAdmin: 'Bots Should Be Admins First! ',
owner: 'Special owner bot features!',
group: 'Feature Used For Group Only! ',
private: 'Features Used Only For Private Chat! ',
bot: 'Bot Number User Special Features ',
wait: 'Loading...',
endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours ',
}
global.limitawal = {
premium: "Infinity",
free: 20
}
global.visoka = fs.readFileSync('./media/SatganzDevs.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
