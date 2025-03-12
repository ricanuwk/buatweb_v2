const fs = require('fs');
const chalk = require('chalk');

global.prefa = ['!', '.', ',', '🐤', '🗿']
global.xprefix = '.'
global.themeemoji = '🪀'

global.location = '11 Naitōmachi, Shinjuku City, Tokyo 160-0014, Jepang'; // Lokasi Kamu

global.botName = 'Verif'; // Nama Bot Kamu
global.ownerNumbers = ['6281248249833', '6287722854496']; // Nomor Kamu
global.ownerNumber = Array.isArray(global.ownerNumbers) ? global.ownerNumbers[0] : [global.ownerNumbers];
global.ownerName = 'NoName'; // Nama Kamu
global.packname = botName; // Nama Pack
global.author = ownerName; // Nama Author
global.creator = '6281248249833@s.whatsapp.net'; // Nomor Creator
global.premium = ['6281248249833'] // User Premium
global.hituet = 0 // Hit Command
global.prefa = '.'; // Prefix

global.public = true // Bot Public
global.welcome = true // Auto Welcome Msg
global.anticall = true // Anti Call
global.autoswview = true // Auto View Status
global.adminevent = true // Admin Event Msg
global.groupevent = true // Group Event Msg

global.mess = {
	admin: "Fitur ini khusus buat admin aja ya, Kak! 🫢",
	botAdmin: "Mora harus jadi admin dulu biar bisa jalanin ini! 😭",
	done: "Done Kak! ✨",
	error: "Eh, ada yang salah nih... coba lagi ya, Kak! 😖",
	group: "Eits, fitur ini cuma bisa dipakai di grup~ 🫡",
	noCmd: "Hmm... perintahnya gak ada di daftar Mora nih. Coba cek lagi ya, Kak! 🤔",
	nsfw: "Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣",
	owner: "Hanya pemilik yang bisa akses fitur ini, Kak! 👑",
	premium: "Fitur ini cuma buat pengguna premium, Kak! 🌟",
	private: "Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌",
	success: "Yeay, berhasil! 🎉",
	wait: "Tunggu sebentar ya, Kak... Mora lagi proses nih! ⏳🤗"
};

global.imageDonasi = 'https://i.ibb.co.com/p2nKgqP/image.png'; // Url Image Donasi (dana, qris etc..)
global.imageUrl = 'https://i.ibb.co.com/p2nKgqP/image.png'; // Url Image
global.imageBuffer = fs.readFileSync('./media/image.png'); // Buffer Image

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})