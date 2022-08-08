const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
'https://zenzapis.xyz': 'satganzdevs',
}

// Other
global.web = 'https://bit.ly/SatganzDevs'
global.thumb = { url : "https://zenzapis.xyz/randomimage/kucing?apikey=satganzdevs" }
global.owner = ['6281316701742','6282268590641']
global.premium = ["6281266891985","6281266082412","6282182518286","6282232780320","6281369266141"]
global.botname = '𝘼𝙛𝙧𝙞 𝙂𝙖𝙣𝙯'
global.ownername = '𝗦𝗮𝘁𝗴𝗮𝗻𝘇 𝗗𝗲𝘃𝘀'
global.packname = '𝘼𝙛𝙧𝙞 𝙂𝙖𝙣𝙯'
global.author = 'Satganz Devs'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.ucapan = {
pagi: 'Good Morning',
siang: 'Good Afternoon',
sore: 'Good Evening',
malam: 'Good Night',
tmalam: 'Good Midnight'
}
global.mess = {
success: '✓ Success',
admin: 'Group Admin Special Features! o(´^｀)o',
botAdmin: 'Bots Should Be Admins First! ¯_ಠ_ಠ_/¯ ',
owner: 'Special owner bot features! (✖╭╮✖)',
group: 'Feature Used For Group Only! (º_º) ',
premium: 'Special Premium Users Features',
private: 'Features Used Only For Private Chat（Ω_Ω）! ',
bot: 'Bot Number User Special Features ( ・_・)ノ ',
wait: 'Loading...',
endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours ',
}
global.limitawal = {
premium: "Infinity",
free: 10
}
global.visoka = 'https://a.uguu.se/QorFgDAm.mp4'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
