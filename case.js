const { downloadContentFromMessage, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, InteractiveMessage, getContentType } = require('@whiskeysockets/baileys');
const axios = require('axios');
const chalk = require('chalk');
const colors = require('@colors/colors/safe');
const fetch = require('node-fetch');
const fs = require('fs');
const moment = require('moment-timezone');
const nou = require('node-os-utils');
const os = require('os');
const PhoneNumber = require('awesome-phonenumber');
const { performance } = require('perf_hooks');
const { randomBytes } = require('crypto');
const util = require('util');
const { exec, execSync, spawn } = require("child_process");

const readmore = String.fromCharCode(8206).repeat(4001);

const { toAudio, toPTT, toVideo } = require('./lib/converter');
const { smsg, await, clockString, delay, enumGetKey, fetchBuffer, fetchJson, format, formatDate, formatp, generateProfilePicture, getBuffer, getGroupAdmins, getRandom, isUrl, json, logic, msToDate, parseMention, sizeLimit, runtime, sleep, sort, toNumber } = require('./lib/myfunc');

const { listCase } = require('./lib/listcase.js');


const threshold = 0.72;
const ttdown = require('./lib/scrapers/ttdown');
const upscale = require('./lib/scrapers/upscale');


const timee = time = moment().tz('Asia/Makassar').format('HH:mm:ss')
const time2 = moment.tz('Asia/Jakarta').format('HH:mm:ss');

let ucapanWaktu = "Selamat Malam 🌌";

if (time2 < "05:00:00") {
	ucapanWaktu = "Selamat Pagi 🌄";
} else if (time2 < "11:00:00") {
	ucapanWaktu = "Selamat Pagi 🌄";
} else if (time2 < "15:00:00") {
	ucapanWaktu = "Selamat Siang 🌅";
} else if (time2 < "18:00:00") {
	ucapanWaktu = "Selamat Sore 🌇";
} else if (time2 < "19:00:00") {
	ucapanWaktu = "Selamat Petang 🌆";
}

module.exports = sock = async (sock, m, msg, chatUpdate, store) => {
	try {
		const { quotedMsg, mentioned, now, fromMe } = m
		const content = JSON.stringify(m.message);
		const type = m.message ? Object.keys(m.message)[0] : null;
		const from = m.key.remoteJid
		var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
		const budy = (typeof m.text === 'string') ? m.text : '';

		const isGroupp = m.key.remoteJid.endsWith('@g.us');
		if (!isGroupp && m.key.fromMe == false || m.key.fromMe == false && m.quoted && m.quoted.fromMe == true) {
			// Jika `fromMe` bernilai true, jalankan pengecekan prefix dari regex
			var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
		} else {
			// Jika `fromMe` bernilai false atau `m.quoted` adalah null, lanjutkan dengan pengecekan prefix yang diizinkan
			const allowedNumber = "@6287722854496";
			const tagNumberRegex = new RegExp(`^${allowedNumber}`);

			// Jika body dimulai dengan tag @nomor yang valid
			if (tagNumberRegex.test(body)) {
				prefix = allowedNumber; // Hanya izinkan @6287722854496 sebagai prefix
			} else if (body.startsWith("@") && !tagNumberRegex.test(body)) {
				// Jika prefix berupa @nomor tetapi bukan nomor yang diizinkan
				return;
			}
		}
		// Cek apakah teks adalah sebuah perintah
		const isCmd = body.startsWith(prefix);
		const command = body.replace(prefix, '').trim().split(/ +/).shift()
		const args = body.replace(prefix, '').trim().split(/ +/).slice(1);
		const text = q = args.join(" ")
		const botNumber = await sock.decodeJid(sock.user.id);
		const pushname = m.pushName || "No Name"
		const getQuoted = (m.quoted || m);
		const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || '';

		const isMedia = /image|video|sticker|audio/.test(mime);
		const isImage = (type == 'imageMessage');
		const isVideo = (type == 'videoMessage');
		const isAudio = (type == 'audioMessage');
		const isDocument = (type == 'documentMessage');
		const isLocation = (type == 'locationMessage');
		const isContact = (type == 'contactMessage');
		const isSticker = (type == 'stickerMessage');
		const isText = (type == 'textMessage');
		const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage');
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
		const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage');
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
		const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage');
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage');

		const isGroup = m.key.remoteJid.endsWith('@g.us');
		const groupMetadata = m.isGroup ? await sock.groupMetadata(m.chat).catch(e => { }) : ''
		const groupName = m.isGroup ? groupMetadata.subject : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
		const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const groupOwner = m.isGroup ? groupMetadata.owner : ''
		const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
		const clientId = sock.user.id.split(':')[0];
		const senderbot = m.key.fromMe ? sock.user.id.split(':')[0] + "@s.whatsapp.net" || sock.user.id : m.key.participant || m.key.remoteJid;
		const senderId = senderbot.split('@')[0];
		const isBot = clientId.includes(senderId);
		const isCreator = [botNumber, global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const isPremium = [botNumber, global.premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

		let usernomor = await PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international');
		let ownnomor = await PhoneNumber('+' + ownerNumber.replace('@s.whatsapp.net', '')).getNumber('international');
		const fmen = newReply = reply = m.reply


		async function loading() {
			const lod = [
				"█▒▒▒▒▒▒▒▒▒▒▒ 10%",
				"████▒▒▒▒▒▒▒▒ 30%",
				"███████▒▒▒▒▒ 50%",
				"██████████▒▒ 80%",
				"████████████ 100%"
			];
			const { key } = await sock.sendMessage(m.chat, {
				text: mess.wait
			}, {
				quoted: m
			});

			for (let i = 0; i < lod.length; i++) {
				await sleep(600);
				await sock.sendMessage(m.chat, {
					text: lod[i],
					edit: key
				});
			}
		};

		async function generateRandomHexName(length) {
			return randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
		};

		async function react(jid) {
			await sock.sendMessage(m.chat, { react: { text: jid, key: m.key } });
		};

		if (!sock.public) {
			if (!isCreator && !isPremium && !m.key.fromMe) return;
		};


		// if (m.message) {
		// 	console.log(chalk.black.bgWhite('[ MESSAGE ]:'), chalk.black.bgGreen(new Date), chalk.black.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.black(chalk.bgCyanBright('[ FROM ] :'), chalk.bgYellow(m.pushName), chalk.bgHex('#FF449F')(m.sender), chalk.bgBlue('(' + (m.isGroup ? m.pushName : 'Private Chat', m.chat) + ')')));
		// };

		if (isGroup && m.message) {
			console.log(colors.red.bold("Bot WhatsApp") + " || " + colors.green.bold("Group") + " " + colors.brightCyan(timee,) + " " + colors.black.bgYellow(budy || m.type) + " " + colors.green("from") + " " + colors.blue(`${groupName}, ${pushname}`) + " " + colors.red.bold("Id") + " " + colors.cyan(`${m.sender}, ${groupMetadata.id}`));
			sock.readMessages([m.key])
		}

		if (!isGroup && m.message) {
			console.log(colors.red.bold("Bot WhatsApp") + " || " + colors.green.bold("Private") + " " + colors.brightCyan(timee,) + " " + colors.black.bgYellow(budy || m.type) + " " + colors.green("from") + " " + colors.blue(pushname) + " " + colors.red.bold("Id") + " " + colors.cyan(m.sender));
			sock.readMessages([m.key])
		}

		if (!isCmd) return
		switch (command.toLowerCase()) {
			case 'testek':{
				sock.sendMessage(m.chat, {text:`1 ${args[0]}, 2 ${args[1]}, 3 ${args[2]}, 4 ${args[3]}`})
				break
			}
			case 'persetujuan': {
					reply(mess.wait)
				let response = await fetch("https://rkyproject.my.id/persetujuanadmin", {
					"method": "POST",
					"headers": {
						'Content-Type': 'application/json',
						'X-CSRF-TOKEN': args[0] // Gantilah csrf_token dengan nilai token yang valid
					},
					"body": JSON.stringify({
						"izin": args[1],
						"jenis": args[2],
						"user": args[3],
						"item": args[4]
					})
				});

				let responseData = await response.json();

				if (responseData.status === 'error') {
					return m.reply(JSON.stringify(responseData.message, null, 2)); // Display error message if any
				}

				sock.sendMessage(m.chat, { text: `Success: ${responseData.message}` }, { quoted: m });
				break;
			}

			case 'del': {
				if (!m.quoted) return reply('Kak, kamu perlu mengirim pesan yang mau dihapus ya! 🤔')
				await sock.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						id: m.quoted.id,
						participant: m.quoted.sender
					}
				})
				break
			}
			case 'menu': {
				// await sock.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.id, participant: m.sender } })
				sock.sendMessage(m.chat, { text: listCase() })
				break
			}
			case 'h':
			case 'hidetag': {
				if (!m.isGroup) return newReply(mess.group);
				if (m.quoted) {
					sock.sendMessage(m.chat, {
						forward: m.quoted.fakeObj,
						mentions: participants.map(a => a.id)
					})
				}
				if (!m.quoted) {
					sock.sendMessage(m.chat, {
						text: q ? q : '',
						mentions: participants.map(a => a.id)
					}, {
						quoted: m
					})
				}
				break
			}
			case 'test': {
				const caption = `tes persetujuan`;

				sock.sendMessage(m.chat, {
					image: imageBuffer,
					caption: caption,
					footer: `${botName} • Mora siap sedia buat Kakak! 💬`,
					buttons: [
						{
							buttonId: `tesbutton`,
							buttonText: { displayText: "🚀 Start" }
						},
						{
							buttonId: `tesbutton`,
							buttonText: { displayText: "📶 Cek Status" }
						}
					],
					viewOnce: true,
					headerType: 4
				}, { quoted: m });
				break;
			}
			case 'tesbutton': {
				sock.sendMessage(m.chat, { text: "halo" }, { quoted: m })
				break
			}

			//=====Maker
			case 's': case 'sticker': case 'stiker': {
				if (!quoted) return reply(`Mana gambar/video(1-9 detik)/gif lee`);
				if (!mime) return reply(`Mana gambar/video(1-9 detik)/gif lee`);

				if (/image/.test(mime)) {
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					await sock.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 9) return reply(`Durasi video terlalu panjang! 🕒 Kirim video dengan durasi 1-9 detik ya!`);
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					await sock.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
				} else {
					reply(`Mana gambar/video(1-9 detik)/gif lee`);
				}
				break
			}
			case 'swm': {
				if (!quoted) return reply(`Mana gambar/video(1-9 detik)/gif lee`);
				if (!mime) return reply(`Mana gambar/video(1-9 detik)/gif lee`);

				const swn = args.join(" ");
				const pcknm = swn.split("|")[0];
				const atnm = swn.split("|")[1];

				if (m.quoted.isAnimated === true) {
					sock.downloadAndSaveMediaMessage(quoted, "gifee");
					sock.sendMessage(m.chat, {
						sticker: fs.readFileSync("gifee.webp")
					}, m, {
						packname: pcknm,
						author: atnm
					});
				} else if (/image/.test(mime)) {
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					await sock.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 9) return reply('Video terlalu panjang, maksimal 9 detik ya! ⏳');
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					await sock.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
				} else {
					reply(`Mana gambar/video(1-9 detik)/gif lee`);
				}
				break
			}
			case 'smeme': {
				if (!/webp/.test(mime) && /image/.test(mime)) {
					if (!text) return reply(`mana teksnya lee.. gini ${prefix + command} teks_atas|teks_bawah`);

					atas = text.split('|')[0] ? text.split('|')[0] : '';
					bawah = text.split('|')[1] ? text.split('|')[1] : '';

					let mee = await sock.downloadAndSaveMediaMessage(quoted);
					let mem = await CatBox(mee);
					let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`;

					await sock.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author });
				} else {
					reply(`mana teksnya lee.. gini ${prefix + command} teks_atas|teks_bawah`);
				}
				break
			}
			case 'hd': {
				sock.enhancer = sock.enhancer ? sock.enhancer : {};
				if (m.sender in sock.enhancer) return m.reply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`)
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime) return m.reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
				if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Media tidak support!`)
				sock.enhancer[m.sender] = true;
				try {
					const availableScales = [2, 4, 6];
					await react('⏱️');
					let media = await quoted.download();
					let scale = availableScales.includes(parseInt(text)) ? parseInt(text) : 2;
					let tag = `@${m.sender.split("@")[0]}`;
					let result = await upscale(media, scale);

					let caption = "🌟 *Effect*: HD\n";
					caption += `📩 *Requested by*: ${tag}\n`;
					caption += `✨ *Source*: imageupscaler.com\n`;
					caption += `🔍 *Skala*: ${scale}\n`;
					caption += `📏 *Available Scales*: ${availableScales.join(", ")}\n\n`;
					caption += "Terima kasih sudah menggunakan fitur ini ya, Kak! 😊";

					await react('✅');
					await sock.sendMessage(m.chat, {
						image: { url: result },
						caption: caption,
						mentions: [m.sender]
					}, {
						quoted: m
					});
				} catch (error) {
					console.error(error);
					m.reply("❌ Ups, terjadi kesalahan saat memproses gambar. Coba lagi nanti ya, Kak!");
				}
				delete sock.enhancer[m.sender];
				break
			}

			//====Tools
			case 'tomp3': {
				if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
				if (!quoted) return reply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
				try {
					await react('⏱️');
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					let audioBuffer = await toAudio(media, 'mp4');
					await sock.sendMessage(m.chat, {
						audio: audioBuffer,
						mimetype: 'audio/mpeg'
					}, { quoted: m });
					reply(`✅ Berhasil mengonversi ke MP3! 🎵`);
				} catch (err) {
					console.error('❌ Error:', err);
					reply(`❌ Gagal mengonversi ke MP3. Cek konsol untuk detailnya.`);
				}
				break
			}
			case 'tourl': {
				if (!mime) return reply(`Kirim/Reply Video/Gambar Dengan Caption ${prefix + command}`);
				await react('⏱️');
				try {
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					if (/image|video/.test(mime)) {
						let response = await CatBox(media);
						let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
						let uploadDate = new Date().toLocaleString();
						let uploader = m.pushName;
						let caption = `🔗 *Link Media* : ${response}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
						reply(caption);
					} else if (!/image/.test(mime)) {
						let response = await CatBox(media);
						await reply(response);
					} else {
						reply(`Jenis media tidak didukung!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					reply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
				}
				break
			}
			case 'toimg': {
				if (!quoted) return reply('Reply Image')
				if (!/webp/.test(mime)) return reply(`Reply sticker dengan caption *${prefix + command}*`)
				await react('⏱️');
				let media = await sock.downloadAndSaveMediaMessage(quoted)
				let ran = await getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) throw err
					let buffer = fs.readFileSync(ran)
					sock.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
				break
			}

			//====Owner
			case 'upsaluran': {
				if (!isCreator) return reply(mess.owner)
				try {
					if (!mime && !text) {
						return reply(`Uh-oh, kak! Kakak belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "✨ Media ini dikirim melalui sistem otomatis Mora! ✨"
					if (/image/.test(mime)) {
						sock.sendMessage(saluran, {
							image: media,
							caption: text ? text : defaultCaption,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: botName,
									body: ownerName,
									thumbnail: imageBuffer,
									sourceUrl: website,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						})
						reply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/video/.test(mime)) {
						sock.sendMessage(saluran, {
							video: media,
							caption: text ? text : defaultCaption,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: botName,
									body: ownerName,
									thumbnail: imageBuffer,
									sourceUrl: website,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						})
						reply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/audio/.test(mime)) {
						sock.sendMessage(saluran, {
							audio: media,
							mimetype: mime,
							ptt: true,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: botName,
									body: ownerName,
									thumbnail: imageBuffer,
									sourceUrl: website,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						})
						reply(`🎵 Audio berhasil diunggah ke saluran, kak!`)
					} else if (/text/.test(mime) || text) {
						sock.sendMessage(saluran, {
							text: text ? text : defaultCaption,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: botName,
									body: ownerName,
									thumbnail: imageBuffer,
									sourceUrl: website,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						})
						reply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
					} else {
						reply(`Hmm... Mora gak tau ini jenis media apa. Coba dicek lagi ya, kak! 🧐`)
					}
				} catch (error) {
					console.error(error)
					reply(`Aduh, kak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
				}
				break
			}
			case 'clearsesi': {
				if (!isCreator) return m.reply(mess.owner);
				fs.readdir("./sesinya", async function (err, files) {
					if (err) {
						console.log('Gak bisa scan direktori: ' + err);
						return m.reply('Gak bisa scan direktori nih: ' + err);
					}
					let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
						item.startsWith("m.sender-key") || item.startsWith("session-") || item.startsWith("app-state")
					);
					console.log(filteredArray.length);
					let teks = `Ditemukan ${filteredArray.length} file sampah nih\n\n`;
					if (filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function (e, i) {
						teks += (i + 1) + `. ${e}\n`;
					});
					m.reply(teks);
					await sleep(1000);
					m.reply("Mau hapus file sampahnya... Tunggu yaa...");
					await filteredArray.forEach(function (file) {
						fs.unlinkSync(`./sesinya/${file}`);
					});
					await sleep(1000);
					m.reply("Berhasil hapus semua file sampah di folder session! 🎉");
				});
				break
			}
			case 'ipbot': {
				if (!isCreator) return reply(mess.owner);
				var http = require('http');
				http.get({
					'host': 'api.ipify.org',
					'port': 80,
					'path': '/'
				}, function (resp) {
					resp.on('data', function (ip) {
						reply("🔎 Oii, alamat IP publik aku nih: " + ip);
					})
				});
				break;
			}
			case 'restart': {
				if (!isCreator) return m.reply(mess.owner); // Cek apakah yang mengirim adalah creator
				m.reply("Bot sedang di-restart... ⏳");
				// Log untuk menandakan restart
				console.log("Bot restarting...");
				// Keluar dari proses bot, yang akan menyebabkan sistem (seperti PM2 atau lainnya) untuk restart otomatis
				process.exit();
				break
			}
			case 'kill': {
				if (!isCreator) return m.reply(mess.owner); // Cek apakah yang mengirim adalah creator
				m.reply("Bot sedang dimatikan secara paksa... ⚠️");
				// Log untuk menandakan kill
				console.log("Bot killed by owner!");
				// Keluar dari proses bot secara paksa
				process.exit(1); // Kode 1 menandakan proses dihentikan secara paksa
				break
			}
			case 'shutdown': {
				if (!isCreator) return m.reply(mess.owner); // Cek apakah yang mengirim adalah creator
				m.reply("Bot sedang dimatikan dan aplikasi akan shutdown... 💀");
				// Log untuk menandakan shutdown
				console.log("Bot shutting down...");
				// Menutup bot dan mematikan server atau aplikasi
				process.exit(0); // Kode 0 menandakan proses keluar dengan normal
				break
			}
			case 'self': {
				if (!isCreator) return reply(mess.owner);
				sock.public = false;
				reply(`Bot sekarang dalam mode *Self Usage* aja, gak bisa dipakai oleh orang lain ya!`);
				break;
			}
			case 'public': {
				if (!isCreator) return reply(mess.owner);
				sock.public = true;
				reply(`Bot sekarang kembali ke mode *Public Usage*, jadi bisa dipakai semua orang!`);
				break;
			}
			case 'block': {
				if (!isCreator) return reply(mess.owner);
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await sock.updateBlockStatus(users, 'block')
				await m.reply(mess.done);
				break
			}
			case 'unblock': {
				if (!isCreator) return reply(mess.owner);
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await sock.updateBlockStatus(users, 'unblock')
				await m.reply(mess.done);
				break
			}
			case 'backup': {
				if (!isCreator) return reply(mess.owner);
				let sender = m.mentionedJid[0] || m.sender || slimecode.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
				let date = new Date();
				let filename = await generateRandomHexName(32);
				const { execSync } = require('child_process');
				const ls = (await execSync('ls')).toString().split('\n').filter((cek) => cek !== 'node_modules' && cek !== 'package-lock.json' && cek !== 'yarn.lock' && cek !== '');
				await reply('Hasil backup akan dikirim lewat chat pribadi ya!');
				await execSync(`zip -r ${filename}.zip ${ls.join(' ')}`);
				const sentMessage = await sock.sendMessage(sender, {
					document: await fs.readFileSync(`./${filename}.zip`),
					mimetype: 'application/zip',
					fileName: `${filename}.zip`,
					caption: 'Berhasil! Silakan download dan simpan file backup-nya ya.'
				});
				await execSync(`rm -rf ${filename}.zip`);
				console.log(`${filename}.zip telah dihapus dari file lokal.`);
				break
			}

			//====Public
			case 'ping': {
				try {
					const used = process.memoryUsage();
					const cpus = os.cpus().map(cpu => {
						cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
						return cpu;
					});
					const cpu = cpus.reduce((last, cpu, _, { length }) => {
						last.total += cpu.total;
						last.speed += cpu.speed / length;
						last.times.user += cpu.times.user;
						last.times.nice += cpu.times.nice;
						last.times.sys += cpu.times.sys;
						last.times.idle += cpu.times.idle;
						last.times.irq += cpu.times.irq;
						return last;
					}, {
						speed: 0,
						total: 0,
						times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
					});
					let start = performance.now();
					let end = performance.now();
					let latensi = end - start;
					let osInfo = await nou.os.oos();
					let storage = await nou.drive.info();
					let respon = `✨ *Informasi Bot WhatsApp* ✨\n\n📡 *Jaringan Server*\n · *Ping:* ${latensi.toFixed(4)} Detik\n\n🖥️ *Informasi Server*\n · *OS:* ${osInfo}\n · *IP Address:* ${nou.os.ip()}\n · *Tipe OS:* ${nou.os.type()}\n\n💾 *RAM:*\n · *Total:* ${formatp(os.totalmem())}\n · *Digunakan:* ${formatp(os.totalmem() - os.freemem())}\n\n📂 *Penyimpanan:*\n · *Total:* ${storage.totalGb} GB\n · *Digunakan:* ${storage.usedGb} GB (${storage.usedPercentage}%)\n · *Tersedia:* ${storage.freeGb} GB (${storage.freePercentage}%)\n\n⏳ *Waktu Aktif Server:*\n${runtime(process.uptime())}\n\n⚙️ *CPU (${cpus.length} Core)*\n · *Model:* ${cpus[0].model.trim()}\n · *Kecepatan:* ${cpu.speed} MHz\n${Object.keys(cpu.times).map(type => ` · *${type}*: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n\nTetap semangat ya kak! Mora selalu siap membantu 🥰`;
					await sock.sendMessage(m.chat, {
						text: respon,
						contextInfo: {
							mentionedJid: [m.sender],
						}
					}, { quoted: m });
				} catch (err) {
					console.error(err);
				}
				break
			}
			case 'speedtest': {
				if (!isCreator) return reply(mess.owner);
				let cp = require('child_process');
				let { promisify } = require('util');
				let exec = promisify(cp.exec).bind(cp);
				let o
				try {
					o = await exec('python3 speed.py');
				} catch (e) {
					o = e
				} finally {
					let { stdout, stderr } = o
					if (stdout.trim()) reply(stdout);
					if (stderr.trim()) reply(stderr);
				}
				break
			}

			//====Download
			case 'tt': {
				if (!text) return reply(`linknya mana lee`);
				const tiktokRegex = /(?:https?:\/\/)?(?:www\.)?(tiktok\.com|vm\.tiktok\.com)/;
				if (!tiktokRegex.test(text)) return reply('Url Tidak Mengandung Result Dari TikTok!');
				try {
					console.log(text)
					const hasil = await ttdown(text);
					console.log('Hasil dari ttdown:', JSON.stringify(hasil, null, 2));
					if (hasil && hasil.data && hasil.data.length > 0) {
						if (hasil.size_nowm_hd) {
							await sock.sendMessage(m.chat, {
								video: { url: hasil.data[1].url },
							}, {
								quoted: m
							});
						} else {
							for (let i = 0; i < hasil.data.length; i++) {
								await sock.sendMessage(m.chat, { image: { url: hasil.data[i].url }, }, { quoted: m });
							}
							sock.sendMessage(m.chat, { audio: { url: hasil.music_info.url }, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
						}
					} else {
						reply('Data TikTok tidak ditemukan atau tidak valid!');
					}
				} catch (e) {
					console.error('Error saat memproses URL TikTok:', e);
					reply('Gagal memproses URL! Detail error: ' + e.message);
				}
				break
			}


			default:
				if (budy.startsWith('=>')) {
					if (!isCreator) return
					function Return(sul) {
						sat = JSON.stringify(sul, null, 2)
						bang = util.format(sat)
						if (sat == undefined) {
							bang = util.format(sul)
						}
						return m.reply(bang)
					}
					try {
						reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
					} catch (e) {
						reply(String(e))
					}
				};

				if (budy.startsWith('>')) {
					if (!isCreator) return
					try {
						let evaled = await eval(budy.slice(2))
						if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
						await reply(evaled)
					} catch (err) {
						await reply(String(err))
					}
				};

				if (budy.startsWith('$')) {
					if (!isCreator) return
					exec(budy.slice(2), (err, stdout) => {
						if (err) return m.reply(err)
						if (stdout) return m.reply(stdout)
					})
				};

			// if (isCmd && budy.toLowerCase() != undefined) {
			// 	if (m.chat.endsWith('broadcast')) return
			// 	if (m.isBaileys) return
			// 	let msgs = db.data.database
			// 	if (!(budy.toLowerCase() in msgs)) return
			// 	sock.copyNForward(m.chat, msgs[budy.toLowerCase()], true, { quoted: m })
			// }

		}
	} catch (err) {
		console.log(chalk.yellow.bold("[ ERROR ] case.js :\n") + chalk.redBright(util.format(err)));
	}
};

process.on("uncaughtException", function (error) {
	let errorMessage = String(error);
	if (errorMessage.includes("conflict")) {
		return;
	}
	if (errorMessage.includes("Cannot derive from empty media key")) {
		return;
	}
	if (errorMessage.includes("Socket connection timeout")) {
		return;
	}
	if (errorMessage.includes("not-authorized")) {
		return;
	}
	if (errorMessage.includes("already-exists")) {
		return;
	}
	if (errorMessage.includes("rate-overlimit")) {
		return;
	}
	if (errorMessage.includes("Connection Closed")) {
		return;
	}
	if (errorMessage.includes("Timed Out")) {
		return;
	}
	if (errorMessage.includes("Value not found")) {
		return;
	}
	console.log("Caught exception: ", error);
});

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});