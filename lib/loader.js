/*
⚠️ PERINGATAN ⚠️  
Script bot WhatsApp Mora AI ini dibuat oleh Khalid untuk keperluan pribadi dan pembelajaran.  
Dilarang keras untuk memperjualbelikan, mendistribusikan ulang, atau mengklaim sebagai milik sendiri.  

Hak Cipta © 2024 Khalid & Mora AI  
*/

const fs = require('fs')
const { color } = require('./color')

async function uncache(module = '.') {
	return new Promise((resolve, reject) => {
		try {
			delete require.cache[require.resolve(module)]
			resolve()
		} catch (e) {
			reject(e)
		}
	})
}

async function nocache(module, cb = () => { }) {
	console.log(color('Module', 'blue'), color(`'${module} is up to date!'`, 'cyan'))
	fs.watchFile(require.resolve(module), async () => {
		await uncache(require.resolve(module))
		cb(module)
	})
}

module.exports = {
	uncache,
	nocache
}
