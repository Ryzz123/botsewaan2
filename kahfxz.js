/**
   * Gunakan Dengan Bijak dan jangan jual !!! 
   
   Copas Kasih Kredit Yaaaa !!!
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Gempa, Cuaca} = require("./scrape/bmkg")
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')

let btn = [{
                                quickReplyButton: {
                                    displayText: `O W N E R`,
                                    id: `owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'M E N U',
                                    id: 'list'
                                }
                            }]
let button = [{
                                quickReplyButton: {
                                    displayText: ' O R D E R',
                                    id: 'owner'
                                }
                            },{
                                quickReplyButton: {
                                    displayText: ' L I S T',
                                    id: 'idrlist'
                                }
                            }]                            

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
let vote = db.data.others.vote = []

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
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
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
        // Replay !!! Sorry Gua enc !!!
        function _0x46fd(_0x108c62,_0x33a7f2){const _0x3a675b=_0x3a67();return _0x46fd=function(_0x46fdb5,_0x4d3d09){_0x46fdb5=_0x46fdb5-0x9b;let _0x282685=_0x3a675b[_0x46fdb5];return _0x282685;},_0x46fd(_0x108c62,_0x33a7f2);}(function(_0x16af3b,_0x19e44d){const _0x5124a3=_0x46fd,_0x42b9f1=_0x16af3b();while(!![]){try{const _0x36b7ba=-parseInt(_0x5124a3(0xa4))/0x1+-parseInt(_0x5124a3(0x9c))/0x2*(-parseInt(_0x5124a3(0x9d))/0x3)+parseInt(_0x5124a3(0xa8))/0x4+parseInt(_0x5124a3(0xa3))/0x5+-parseInt(_0x5124a3(0xa2))/0x6+parseInt(_0x5124a3(0x9b))/0x7+-parseInt(_0x5124a3(0x9e))/0x8;if(_0x36b7ba===_0x19e44d)break;else _0x42b9f1['push'](_0x42b9f1['shift']());}catch(_0x2d33ac){_0x42b9f1['push'](_0x42b9f1['shift']());}}}(_0x3a67,0xbae22));function _0x3a67(){const _0x348b7b=['3076130BebWuL','784398DWLASo','PHOTO','KLICK\x20!!!','sendMessage','3287660qiDPEk','bot','5223666zfLsoq','2374KrugEL','3054NaSEjI','5475752RcUThS','readFileSync','Hi\x20Saya\x20','./media/kahfz.jpg','6944424pgyNcx'];_0x3a67=function(){return _0x348b7b;};return _0x3a67();}const reply=_0x1be3a3=>{const _0x99d38c=_0x46fd;hisoka[_0x99d38c(0xa7)](m['chat'],{'text':_0x1be3a3,'contextInfo':{'externalAdReply':{'title':_0x99d38c(0xa0)+global[_0x99d38c(0xa9)],'body':_0x99d38c(0xa6),'previewType':_0x99d38c(0xa5),'thumbnailUrl':'','thumbnail':fs[_0x99d38c(0x9f)](_0x99d38c(0xa1)),'sourceUrl':''+global['web']}}},{'quoted':m});};
        
        //SORRY GW ENC !!!
        //TEXT BUMTON
       // TextTeplate 
        function _0x1ba7(_0xdcad63,_0x2897d1){const _0x161840=_0x1618();return _0x1ba7=function(_0x1ba7bb,_0x5b545b){_0x1ba7bb=_0x1ba7bb-0x138;let _0x5e09cd=_0x161840[_0x1ba7bb];return _0x5e09cd;},_0x1ba7(_0xdcad63,_0x2897d1);}(function(_0x1d48df,_0x24c5bb){const _0x3e03ce=_0x1ba7,_0x4b8b25=_0x1d48df();while(!![]){try{const _0x14cbc3=-parseInt(_0x3e03ce(0x13a))/0x1*(parseInt(_0x3e03ce(0x139))/0x2)+parseInt(_0x3e03ce(0x13f))/0x3*(parseInt(_0x3e03ce(0x140))/0x4)+-parseInt(_0x3e03ce(0x142))/0x5+parseInt(_0x3e03ce(0x143))/0x6*(-parseInt(_0x3e03ce(0x138))/0x7)+parseInt(_0x3e03ce(0x13e))/0x8*(-parseInt(_0x3e03ce(0x13c))/0x9)+parseInt(_0x3e03ce(0x13b))/0xa+parseInt(_0x3e03ce(0x13d))/0xb;if(_0x14cbc3===_0x24c5bb)break;else _0x4b8b25['push'](_0x4b8b25['shift']());}catch(_0x1792a0){_0x4b8b25['push'](_0x4b8b25['shift']());}}}(_0x1618,0xc0487));const textTemplateButtons=(_0x412c0c,_0x3af778,_0x1daaf5,_0x10603d)=>{const _0x25f1be=_0x1ba7;return hisoka[_0x25f1be(0x141)](_0x412c0c,{'text':_0x3af778,'footer':_0x1daaf5,'templateButtons':_0x10603d});};function _0x1618(){const _0x377d64=['18pjwzVA','3234644qxnyco','6TNsQrB','457922ZeLXQk','15644000pimAtB','36QViUrR','30851337iUPrUO','714944IpAsme','1648077hlHRNV','8GTwKFE','sendMessage','7813400KELHmA'];_0x1618=function(){return _0x377d64;};return _0x1618();}

	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.setStatus(`${hisoka.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
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
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
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
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
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
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
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
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
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
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

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
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
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
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
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
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                hisoka.sendMessage(m.chat, { image: { url: 'https://i.postimg.cc/6QccLSH6/qris.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n *Bot Rental Prices*\n• 13k Per Group via E-Walet 1 Month\n• 18k via pulsa 1 Month\n\n *Premium Price Bot*\n• 10k per User 1 bulan\n\nPayment *can be via //gopay*\n\n• Gopay : 081906412862 more details, you can chat with the owner\nhttps://wa.me/6281906412862 (Owner)` }, { quoted: m })
            }
            break
            case 'sc': {
                m.reply('https://github.com/Ryzz123')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
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
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: menst})
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}

 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}

 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            hisoka.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            hisoka.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            hisoka.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${hisoka.user.id}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, hisoka.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink`, hisoka.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${hisoka.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${hisoka.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mute Bot`, hisoka.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'MY GITHUB',
                                    url: 'https://github.com/Ryzz123'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '0819-0641-2862'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'S E W A',
                                    id: 'sewa'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'M E N U',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(i, txt, hisoka.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
case 'bcimg': case 'bcvidio': case 'bcaudio': {
                if (!isCreator) throw mess.owner
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                    displayText: `TES`,
                                    url: `TES`
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: 'COMMAND',
                                    id: 'menu'
                                }
                            }]
                    let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    hisoka.sendMessage(i, { sticker: { url: media } }, { quoted: fkontak })
                    } else if (/image/.test(mime)) {
                    let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
                    hisoka.send5ButImg(i, junn, `Kahfxxz`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
                    hisoka.send5Vid(i, junn, `Kahfxxz`, buffer, butoon)
                    } else if (/audio/.test(mime)) {
                    hisoka.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : fvn })
                    } else {
                    m.reply(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Chats`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/Ryzz123'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 819-0641-2862'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(yoi, txt, hisoka.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await hisoka.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
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
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
case 'yts2': case 'ytsearch2':
if (args.length < 1) return m.reply(`Contoh:\n${command} bukti Virgoun`)
let list_rows = [];
let yts = require("yt-search")
            const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `Channel: ${a.author.name} | Durasi: ${a.duration}`, rowId: `${prefix}play ${a.url}`
})
}
    const button = {
        title: `Hasil Pencarian Dari ${q}`,
        description: "Silahkan Tap Tombol Dibawah!",
        footerText: `Create by RyzzBotz`,
        buttonText: 'Tap Disini!',
        listType: 'SINGLE_SELECT',
        sections: [
            {
                title: "Hasil Pencarian", 
                rows: list_rows
            }
        ]
        }
        const templateList = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ "listMessage": button }), {});
        hisoka.relayMessage(m.chat, templateList.message, { messageId: templateList.key.id });
break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break

// COPAS KASIH KREDIT DEK !!!!!
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    kahfs = `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   hisoka.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: kahfs,
                            hydratedFooterText: `Playing To ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Source Code Vidio',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Audio',
                                    id: `ytmp3 ${anu.url} 128kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: 'VIdeo',
                                    id: `ytmp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
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
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    hisoka.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	                    case 'mediafire': case 'mediafiredl': {
                if (!text) throw `Example : ${prefix + command} http://www.mediafire.com/file/naqy6ofoqkb6poi/Anime_MUGEN_300_Characters_by_Makoto_Itou_%2526_Kizuma_Gaming.apk/file`
                let anu = await mediafireDownloader(isUrl(text)[0])
                if (Number(anu.filesize.split("MB")[0]) >= 40.00) return m.reply('File Melebihi Batas '+util.format(result))
		hisoka.sendText(m.chat, util.format(anu), m)
                hisoka.sendMedia(m.chat, anu.link, '', m)
            }
            break
	        
case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply('loading......')
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=HanBotzApi&url=${text}`)
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.link },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) hisoka.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    hisoka.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
		/** Backup misal yg atas ga keluar video **/
		case 'igeh': case 'instagram2': case 'ig2': case 'igdl2': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
                case 'darkjoke': {
                m.reply('loading ngab sabar')
                let anu = (`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=HanBotzApi`)
                hisoka.sendMessage(m.chat, { image: { url: anu }, caption: `DarkJoke` }, { quoted: m })
            }
	    break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: hisoka.user.name,
			buttons,
			headerType: 4
		    }
		    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        hisoka.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
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
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, hisoka.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, hisoka.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
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
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break

case 'infogempa':
mono = '*'
Gempa().then( v => 
hisoka.sendMessage(m.chat, { image: { url: v.map }, caption: `${mono}Info Gempa${mono}\n• Waktu: *${v.waktu}*\n• Lintang: *${v.lintang}*\n• Bujur: *${v.bujur}*\n• Magnitudo: *${v.magnitudo}*\n• Kedalaman: *${v.kedalaman}*\n• Wilayah: *${v.wilayah}*\n` }, { quoted: m})
)
break
case 'translate':
if (args.length < 1) return replay(`Text Nya Mana Kak?\nContoh\n${prefix + command} Who am I`)
reply('process')
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${q}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`👷Translate : ${Detek}\n🔎Hasil : ${Infoo}`)
  break
            case 'owner': case 'creator': {
                hisoka.sendContact(m.chat, global.owner, m)
            }
            break
case 'donasi':
tekssa = `Halo @${m.sender.split("@s.whatsapp.net")[0]} 👋
Berikut adalah list harga untuk sewa bot ini
*💸Payment💰*
*•Gopay:* 081906412862
*•Dana:* 081906412862
*•Ovo:* 081906412862
*•Pulsa:* 081906412862 (Up +5)

*Note:
=>Untuk Sewa/Memasukkan Bot Kedalam Group, cukup membayar Rp20.000
=>Pembayaran menggunakan payment diatas
=>Hitungan sewa bot atau user premium adalah bulanan/1bulan (Tidak Ada Permanent, kecuali jika ada perpanjangan harga sewa)
=>Bot Otomatis keluar jika sudah mencapai masa aktif*`
hisoka.sendMessage(m.chat, { text: tekssa, contextInfo: { mentionedJid: [m.sender]} }, { quoted: m })
break
            case 'list': case 'menu': case 'help': case '?': {
            	pref = 1
            	m.reply('Lah Lu Siapa Njing!!!')
                anu = `
┌───❑ *Bot Info* ❑──      
│🖥️LibrayLibray : *Baileys Multi Device*
│🤖Name Bot : *RyzBotz_0*
│👤Creator : *RyzzBotz*
│☠️AuthorAuthor : *RyzBotz_0*
│🌍User Total : *${Object.keys(global.db.data.users).length}*
╰─────────❑

┌───❑ *Group Menu*
│
│✓ *${pref++} ${prefix}linkgroup*
│✓ *${pref++} ${prefix}ephemeral [option]*
│✓ *${pref++} ${prefix}setppgc [image]*
│✓ *${pref++} ${prefix}setname _<Text>_*
│✓ *${pref++} ${prefix}setdesc _<Text>_*
│✓ *${pref++} ${prefix}group [option]*
│✓ *${pref++} ${prefix}editinfo [option]*
│✓ *${pref++} ${prefix}add @user*
│✓ *${pref++} ${prefix}kick @user*
│✓ *${pref++} ${prefix}hidetag _<Text>_*
│✓ *${pref++} ${prefix}tagall _<Text>_*
│✓ *${pref++} ${prefix}antilink _<On/Off>_*
│✓ *${pref++} ${prefix}mute _<On/Off>_*
│✓ *${pref++} ${prefix}promote @user*
│✓ *${pref++} ${prefix}demote @user*
│✓ *${pref++} ${prefix}vote _<Text>_*
│✓ *${pref++} ${prefix}devote*
│✓ *${pref++} ${prefix}upvote*
│✓ *${pref++} ${prefix}cekvote*
│✓ *${pref++} ${prefix}hapusvote*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Downloader Menu*
│
│✓ *${pref++} ${prefix}tiktoknowm _<url>_*
│✓ *${pref++} ${prefix}tiktokwm _<url>_*
│✓ *${pref++} ${prefix}tiktokmp3 _<url>_*
│✓ *${pref++} ${prefix}instagram _<url>_*
│✓ *${pref++} ${prefix}twitter _<url>_*
│✓ *${pref++} ${prefix}twittermp3 _<url>_*
│✓ *${pref++} ${prefix}facebook _<url>_*
│✓ *${pref++} ${prefix}pinterestdl _<url>_*
│✓ *${pref++} ${prefix}ytmp3 _<url>_*
│✓ *${pref++} ${prefix}ytmp4 _<url>_*
│✓ *${pref++} ${prefix}getmusic _<Query>_*
│✓ *${pref++} ${prefix}getvideo _<Query>_*
│✓ *${pref++} ${prefix}umma _<url>_*
│✓ *${pref++} ${prefix}joox _<Query>_*
│✓ *${pref++} ${prefix}soundcloud _<url>_*
│✓ *${pref++} ${prefix}ytsearch2*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Search Menu*
│
│✓ *${pref++} ${prefix}play _<Query>_*
│✓ *${pref++} ${prefix}yts _<Query>_*
│✓ *${pref++} ${prefix}google _<Query>_*
│✓ *${pref++} ${prefix}gimage _<Query>_*
│✓ *${pref++} ${prefix}pinterest _<Query>_*
│✓ *${pref++} ${prefix}wallpaper _<Query>_*
│✓ *${pref++} ${prefix}wikimedia _<Query>_*
│✓ *${pref++} ${prefix}ytsearch _<Query>_*
│✓ *${pref++} ${prefix}ringtone _<Query>_*
│✓ *${pref++} ${prefix}stalk [option] _<Query>_*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Random Menu*
│
│✓ *${pref++} ${prefix}coffe*
│✓ *${pref++} ${prefix}quotesanime*
│✓ *${pref++} ${prefix}motivasi*
│✓ *${pref++} ${prefix}dilanquote*
│✓ *${pref++} ${prefix}bucinquote*
│✓ *${pref++} ${prefix}katasenja*
│✓ *${pref++} ${prefix}puisi*
│✓ *${pref++} ${prefix}couple*
│✓ *${pref++} ${prefix}anime*
│✓ *${pref++} ${prefix}waifu*
│✓ *${pref++} ${prefix}husbu*
│✓ *${pref++} ${prefix}neko*
│✓ *${pref++} ${prefix}shinobu*
│✓ *${pref++} ${prefix}waifus (nsfw)*
│✓ *${pref++} ${prefix}nekos (nsfw)*
│✓ *${pref++} ${prefix}trap (nsfw)*
│✓ *${pref++} ${prefix}blowjob (nsfw)*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Text Pro Menu*
│
│✓ *${pref++} ${prefix}3dchristmas*
│✓ *${pref++} ${prefix}3ddeepsea*
│✓ *${pref++} ${prefix}americanflag*
│✓ *${pref++} ${prefix}3dscifi*
│✓ *${pref++} ${prefix}3drainbow*
│✓ *${pref++} ${prefix}3dwaterpipe*
│✓ *${pref++} ${prefix}halloweenskeleton*
│✓ *${pref++} ${prefix}sketch*
│✓ *${pref++} ${prefix}bluecircuit*
│✓ *${pref++} ${prefix}space*
│✓ *${pref++} ${prefix}metallic*
│✓ *${pref++} ${prefix}fiction*
│✓ *${pref++} ${prefix}greenhorror*
│✓ *${pref++} ${prefix}transformer*
│✓ *${pref++} ${prefix}berry*
│✓ *${pref++} ${prefix}thunder*
│✓ *${pref++} ${prefix}magma*
│✓ *${pref++} ${prefix}3dcrackedstone*
│✓ *${pref++} ${prefix}3dneonlight*
│✓ *${pref++} ${prefix}impressiveglitch*
│✓ *${pref++} ${prefix}naturalleaves*
│✓ *${pref++} ${prefix}fireworksparkle*
│✓ *${pref++} ${prefix}matrix*
│✓ *${pref++} ${prefix}dropwater*
│✓ *${pref++} ${prefix}harrypotter*
│✓ *{pref++} ${prefix}foggywindow*
│✓ *${pref++} ${prefix}neondevils*
│✓ *${pref++} ${prefix}christmasholiday*
│✓ *${pref++} ${prefix}3dgradient*
│✓ *${pref++} ${prefix}blackpink*
│✓ *${pref++} ${prefix}gluetext*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Photo Oxy Menu*
│
│✓ *${pref++} ${prefix}shadow*
│✓ *${pref++} ${prefix}romantic*
│✓ *${pref++} ${prefix}smoke*
│✓ *${pref++} ${prefix}burnpapper*
│✓ *${pref++} ${prefix}naruto*
│✓ *${pref++} ${prefix}lovemsg*
│✓ *${pref++} ${prefix}grassmsg*
│✓ *${pref++} ${prefix}lovetext*
│✓ *${pref++} ${prefix}coffecup*
│✓ *${pref++} ${prefix}butterfly*
│✓ *${pref++} ${prefix}harrypotter*
│✓ *${pref++} ${prefix}retrolol*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Ephoto Menu*
│
│✓ *${pref++} ${prefix}ffcover*
│✓ *${pref++} ${prefix}crossfire*
│✓ *${pref++} ${prefix}galaxy*
│✓ *${pref++} ${prefix}glass*
│✓ *${pref++} ${prefix}neon*
│✓ *${pref++} ${prefix}beach*
│✓ *${pref++} ${prefix}blackpink*
│✓ *${pref++} ${prefix}igcertificate*
│✓ *${pref++} ${prefix}ytcertificate*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Tolls Menu*
│
│✓ *${pref++} ${prefix}infogempa*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Fun Menu*
│
│✓ *${pref++} ${prefix}halah*
│✓ *${pref++} ${prefix}hilih*
│✓ *${pref++} ${prefix}huluh*
│✓ *${pref++} ${prefix}heleh*
│✓ *${pref++} ${prefix}holoh*
│✓ *${pref++} ${prefix}jadian*
│✓ *${pref++} ${prefix}jodohku*
│✓ *${pref++} ${prefix}delttt*
│✓ *${pref++} ${prefix}tictactoe*
│✓ *${pref++} ${prefix}family100*
│✓ *${pref++} ${prefix}tebak [option]*
│✓ *${pref++} ${prefix}math [mode]*
│✓ *${pref++} ${prefix}suitpvp [@tag]*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Primbon Menu*
│
│✓ *${pref++} ${prefix}nomorhoki*
│✓ *${pref++} ${prefix}artimimpi*
│✓ *${pref++} ${prefix}artinama*
│✓ *${pref++} ${prefix}ramaljodoh*
│✓ *${pref++} ${prefix}ramaljodohbali*
│✓ *${pref++} ${prefix}suamiistri*
│✓ *${pref++} ${prefix}ramalcinta*
│✓ *${pref++} ${prefix}cocoknama*
│✓ *${pref++} ${prefix}pasangan*
│✓ *${pref++} ${prefix}jadiannikah*
│✓ *${pref++} ${prefix}sifatusaha*
│✓ *${pref++} ${prefix}rezeki*
│✓ *${pref++} ${prefix}pekerjaan*
│✓ *${pref++} ${prefix}nasib*
│✓ *${pref++} ${prefix}penyakit*
│✓ *${pref++} ${prefix}tarot*
│✓ *${pref++} ${prefix}fengshui*
│✓ *${pref++} ${prefix}haribaik*
│✓ *${pref++} ${prefix}harisangar*
│✓ *${pref++} ${prefix}harisial*
│✓ *${pref++} ${prefix}nagahari*
│✓ *${pref++} ${prefix}arahrezeki*
│✓ *${pref++} ${prefix}peruntungan*
│✓ *${pref++} ${prefix}weton*
│✓ *${pref++} ${prefix}karakter*
│✓ *${pref++} ${prefix}keberuntungan*
│✓ *${pref++} ${prefix}memancing*
│✓ *${pref++} ${prefix}masasubur*
│✓ *${pref++} ${prefix}zodiak*
│✓ *${pref++} ${prefix}shio*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Convert Menu*
│
│✓ *${pref++} ${prefix}toimage*
│✓ *${pref++} ${prefix}removebg*
│✓ *${pref++} ${prefix}sticker*
│✓ *${pref++} ${prefix}emojimix*
│✓ *${pref++} ${prefix}tovideo*
│✓ *${pref++} ${prefix}togif*
│✓ *${pref++} ${prefix}tourl*
│✓ *${pref++} ${prefix}tovn*
│✓ *${pref++} ${prefix}tomp3*
│✓ *${pref++} ${prefix}toaudio*
│✓ *${pref++} ${prefix}ebinary*
│✓ *${pref++} ${prefix}dbinary*
│✓ *${pref++} ${prefix}styletext*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Main Menu*
│
│✓ *${pref++} ${prefix}ping*
│✓ *${pref++} ${prefix}owner*
│✓ *${pref++} ${prefix}menu*
│✓ *${pref++} ${prefix}delete*
│✓ *${pref++} ${prefix}infochat*
│✓ *${pref++} ${prefix}quoted*
│✓ *${pref++} ${prefix}listpc*
│✓ *${pref++} ${prefix}listgc*
│✓ *${pref++} ${prefix}listonline*
│✓ *${pref++} ${prefix}donasi*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Database Menu*
│
│✓ *${pref++} ${prefix}setcmd*
│✓ *${pref++} ${prefix}listcmd*
│✓ *${pref++} ${prefix}delcmd*
│✓ *${pref++} ${prefix}lockcmd*
│✓ *${pref++} ${prefix}addmsg*
│✓ *${pref++} ${prefix}listmsg*
│✓ *${pref++} ${prefix}getmsg*
│✓ *${pref++} ${prefix}delmsg*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Anonymous Menu*
│
│✓ *${pref++} ${prefix}anonymous*
│✓ *${pref++} ${prefix}start*
│✓ *${pref++} ${prefix}next*
│✓ *${pref++} ${prefix}keluar*
│✓ *${pref++} ${prefix}sendkontak*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Islamic Menu*
│
│✓ *${pref++} ${prefix}iqra*
│✓ *${pref++} ${prefix}hadist*
│✓ *${pref++} ${prefix}alquran*
│✓ *${pref++} ${prefix}juzamma*
│✓ *${pref++} ${prefix}tafsirsurah*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Voice Changer*
│
│✓ *${pref++} ${prefix}bass*
│✓ *${pref++} ${prefix}blown*
│✓ *${pref++} ${prefix}deep*
│✓ *${pref++} ${prefix}earrape*
│✓ *${pref++} ${prefix}fast*
│✓ *${pref++} ${prefix}fat*
│✓ *${pref++} ${prefix}nightcore*
│✓ *${pref++} ${prefix}reverse*
│✓ *${pref++} ${prefix}robot*
│✓ *${pref++} ${prefix}slow*
│✓ *${pref++} ${prefix}tupai*
│
│*_RyzzBotz_*
└───❑

┌───❑ *Owner Menu*
│
│✓ *${pref++} ${prefix}chat [option]*
│✓ *${pref++} ${prefix}join [link]*
│✓ *${pref++} ${prefix}leave*
│✓ *${pref++} ${prefix}block @user*
│✓ *${pref++} ${prefix}unblock @user*
│✓ *${pref++} ${prefix}bcgroup _<Text>_*
│✓ *${pref++} ${prefix}bcall _<Text>_*
│✓ *${pref++} ${prefix}bcimg  _<Image & Text>_*
│✓ *${pref++} ${prefix}bcvid  _<Vidio & Text>_*
│✓ *${pref++} ${prefix}bcaudio _<Audio>_*
│✓ *${pref++} ${prefix}setppbot [image]*
│✓ *${pref++} ${prefix}setexif*
│
│*_RyzzBotz_*
└───❑`
                let btn = [{
                                urlButton: {
                                    displayText: ' O W N E R',
                                    url: 'http://Wa.me/6281906412862'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'S E W A',
                                    id: 'sewabot'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'T O P  U P',
                                    id: 'topup'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'M E N U',
                                    id: 'command'
                                }  
                            }]
                            kahfs = fs.readFileSync('media/KahfzXzy.mp4')
                        hisoka.send5Gif(m.chat, anu, hisoka.user.name, kahfs, btn)
                     }
            break

// RAKIT SENDIRI YAK🗿🗿🗿
case 'command':
let sectionnya= [{
								"title": "Fitur Grup",
								"rows": [
									{
										"title": "Grup Fitur",
										"description": "Menampilkan Fitur Grup",
										"rowId": `${prefix}grupmenu`
									}
								]
							},
							{
								"title": "Bot Menu",
								"rows": [
									{
										"title": "ALL Fitur",
										"description": "Menampilkan Semua Fitur!",
										"rowId": `${prefix}menu`
									},
									{
										"title": "Download Fitur",
										"description": "Menampilkan Download Menu",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Fitur",
										"description": "Menampilkan Search Fitur",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "Random Fitur",
										"description": "Menampilkan random Fitur",
										"rowId": `${prefix}randommenu`
										},
										{
											"title": "Image Fitur",
										"description": "Menampilkan image Fitur",
										"rowId": `${prefix}imagemenu`
										},
										{
											"title": "Fun",
										"description": "Menampilkan Fun Fitur",
										"rowId": `${prefix}funmenu`
										},
										{
										"title": "primbon Fitur",
										"description": "Menampilkan Primbon Fitur",
										"rowId": `${prefix}primbonmenu`
										},
										{
											"title": "Convert Fitur",
										"description": "Menampilkan Convert Fitur",
										"rowId": `${prefix}convertmenu`
										},
										{
										"title": "No Category",
										"description": "Menampilkan NoCategory Fitur",
										"rowId": `${prefix}nocategorymenu`
										},
										{
											"title": "Ephoto Fitur",
										"description": "Menampilkan Ephoto Fitur",
										"rowId": `${prefix}ephotomenu`
										},
										{
											"title": "TextPro Fitur",
										"description": "Menampilkan TextPro Fitur",
										"rowId": `textpromenu`
										},
										{
											"title": "Database Fitur",
										"description": "Menampilkan Database Fitur",
										"rowId": `${prefix}databasemenu`
										},
										{
										"title": "Image Hiburan",
										"description": "menampilkan Image Hiburan",
										"rowId": `${prefix}immageemenu`
										},
										{
										"title": "Tolls Fitur",
										"description": "menampilkan Tolls Fitur",
										"rowId": `${prefix}tollsmenu`
										},
										{
											"title": "Voice Changer Fitur",
										"description": "Menampilkan Voice Changer Fitur",
										"rowId": `${prefix}voicemenu`
										},
								        {
										"title": "Religion Fitur",
										"description": "menampilkan Fitur Agama - Agama",
										"rowId": `${prefix}religionmenu`
										}
								]
							},
							{
								"title": "Chating Sesama User📞",
								"rows": [
									{
										"title": "Anonymous Chat",
										"description": "menampilkan Fitur Anonymous Chat",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "System Group👮",
								"rows": [
									{
										"title": "Group Sistem Fitur",
										"description": "menampilkan Fitur System Grup",
										"rowId": `${prefix}sistemmenu`
									}
								]
							},
							{
								"title": "Owner Command",
								"rows": [
									{
										"title": "Owner Fitur",
										"description": "menampilkan Owner Fitur ( Khusus Owner )",
										"rowId": `${prefix}ownermenu`
									}
								]
							},
							{
								"title": "Thanks To",
								"rows": [
									{
										"title": "Contributor",
										"description": "menampilkan Nama Teman - Teman Saya Yang Sudah Membantu Merakit Bot Ini !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						]
hisoka.sendList(m.chat, `Halo ${pushname}`, `
┌───❑ *Bot Info* ❑──      
│🖥️LibrayLibray : *Baileys Multi Device*
│🤖Name Bot : *RyzBotz_0*
│👤Creator : *RyzzBotz*
│☠️AuthorAuthor : *RyzBotz_0*
│🌍User Total : *${Object.keys(global.db.data.users).length}*
╰─────────❑

┌───❑ *Link Grub Bot* 
│➢ https://chat.whatsapp.com/ErKKKBueuvTLU6US1YMfwl
╰─────────❑
┌───❑ *Link Grub Store* 
│➢ https://chat.whatsapp.com/DclQjv92w1jDR1iPEg45wM
╰─────────❑
┌───❑ *Link Youtube* 
│➢ https://youtube.com/channel/UCDsOg1EiXBMMCsKI85QzrOQ
╰─────────❑
`, "RyzBotz_0", " L I S T ",  sectionnya, { quoted: m})
break
case 'grupmenu': {
	            anu = `
┌───❑ *Group Menu*
│ 
│➢ ${prefix}linkgroup
│➢ ${prefix}ephemeral [option]
│➢ ${prefix}setpp
│➢ ${prefix}setname _<text>_
│➢ ${prefix}group [option]
│➢ ${prefix}editinfo [option]
│➢ ${prefix}grupinfo
│➢ ${prefix}add @user
│➢ ${prefix}kick @user
│➢ ${prefix}promote @user
│➢ ${prefix}demote @user
╰─────────❑ 
  `
  textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'downloadmenu': {
	anu = `
┌───❑ *Downloader Menu*
│  
│➢ ${prefix}tiktoknowm _<url>_
│➢ ${prefix}tiktokwm _<url>_
│➢ ${prefix}tiktokmp3 _<url>_
│➢ ${prefix}instagram _<url>_
│➢ ${prefix}ig2 _<url>_
│➢ ${prefix}igreels _<url>_
│➢ ${prefix}igtv _<url>_
│➢ ${prefix}twitter _<url>_
│➢ ${prefix}twittermp3 _<url>_
│➢ ${prefix}facebook _<url>_
│➢ ${prefix}pinterestdl _<url>_
│➢ ${prefix}ytmp3 _<url>_
│➢ ${prefix}ytmp4 _<url>_
│➢ ${prefix}getmusic _<query>_
│➢ ${prefix}getvideo _<query>_ 
╰─────────❑ 
  `
  textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
            break 
        case 'searchmenu': {
            	anu = `
┌───❑ *Search Menu*
│  
│➢ ${prefix}play _<query>_
│➢ ${prefix}yts _<query>_
│➢ ${prefix}google _<query>_
│➢ ${prefix}gimage _<query>_
│➢ ${prefix}pinterest _<query>_
│➢ ${prefix}wallpaper _<query>_
│➢ ${prefix}wikimedia _<query>_
│➢ ${prefix}ytsearch _<query>_
╰─────────❑
  `
  textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'randommenu': {
	anu = `
┌───❑ *Random Menu*
│  
│➢ ${prefix}coffe
│➢ ${prefix}porno
│➢ ${prefix}hentai
│➢ ${prefix}quotesanime
│➢ ${prefix}motivasi
│➢ ${prefix}dilanquote
│➢ ${prefix}bucinquote
│➢ ${prefix}katasenja
│➢ ${prefix}puisi
╰─────────❑
  `
  textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'imagemenu': {
	anu = `
┌───❑ *Image Menu*
│  
│➢ ${prefix}anime
│➢ ${prefix}waifu
│➢ ${prefix}husbu
│➢ ${prefix}neko
│➢ ${prefix}shinobu
│➢ ${prefix}megumin
╰─────────❑
  `
  textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'funmenu': {
	anu = `
┌───❑ *Fun Menu*
│  
│➢ ${prefix}halah
│➢ ${prefix}hilih
│➢ ${prefix}huluh
│➢ ${prefix}heleh
│➢ ${prefix}holoh
│➢ ${prefix}jadian
│➢ ${prefix}jodohku
│➢ ${prefix}family100
│➢ ${prefix}tebak [option]
│➢ ${prefix}math [mode]  
╰─────────❑
  `
  textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'voicemenu': {
	anu = `
┌───❑ *Voice Changer*
│
│➢ ${prefix}bass
│➢ ${prefix}blown
│➢ ${prefix}deep
│➢ ${prefix}earrape
│➢ ${prefix}fast
│➢ ${prefix}fat
│➢ ${prefix}nightcore
│➢ ${prefix}reverse
│➢ ${prefix}robot
│➢ ${prefix}slow
│➢ ${prefix}tupai
╰─────────❑
`
textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'religionmenu': {
	anu = `
┌───❑ *Religion islamic*
│	
│➢ ${prefix}iqra
│➢ ${prefix}hadist
│➢ ${prefix}alquran
│➢ ${prefix}juzamma
│➢ ${prefix}tafsirsurah
╰─────────❑
`
textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'immageemenu':  {
	anu = `
┌───❑ *Image Hiburan*
│
│➢ ${prefix}meme
│➢ ${prefix}ppcouple
│➢ ${prefix}darkjoke
╰─────────❑
`
textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'tollsmenu': {
	anu = `
┌───❑ *Tolls Menu*
│
│➢ ${prefix}ssweb-hp
│➢ ${prefix}ssweb-pc
│➢ ${prefix}translate
╰─────────❑
`
textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break

case 'primbonmenu': {
	anu = `
┌───❑ *Primbon Menu*
│  
│➢ ${prefix}nomorhoki
│➢ ${prefix}artimimpi
│➢ ${prefix}artinama
│➢ ${prefix}ramaljodoh
│➢ ${prefix}ramaljodohbali
│➢ ${prefix}suamiistri
│➢ ${prefix}ramalcinta
│➢ ${prefix}cocoknama
│➢ ${prefix}pasangan
│➢ ${prefix}jadiannikah
│➢ ${prefix}sifatusaha
│➢ ${prefix}rezeki
│➢ ${prefix}pekerjaan
│➢ ${prefix}nasib
│➢ ${prefix}penyakit
│➢ ${prefix}tarot
│➢ ${prefix}fengshui
│➢ ${prefix}haribaik
│➢ ${prefix}harisangar
│➢ ${prefix}harisial
│➢ ${prefix}nagahari
│➢ ${prefix}arahrezeki
│➢ ${prefix}peruntungan
│➢ ${prefix}weton
│➢ ${prefix}karakter
│➢ ${prefix}keberuntungan
│➢ ${prefix}memancing
│➢ ${prefix}masasubur
│➢ ${prefix}zodiak
│➢ ${prefix}shio
╰─────────❑
  `
  textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'convertmenu': {
	anu = `
┌───❑ *Convert Menu*
│  
│➢ ${prefix}toimage
│➢ ${prefix}removebg
│➢ ${prefix}sticker
│➢ ${prefix}emojimix
│➢ ${prefix}tovideo
│➢ ${prefix}togif
│➢ ${prefix}tourl
│➢ ${prefix}tovn
│➢ ${prefix}tomp3
│➢ ${prefix}toaudio
│➢ ${prefix}ebinary
│➢ ${prefix}dbinary
│➢ ${prefix}styletext
│➢ ${prefix}ttp
╰─────────❑
  `
  textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'nocategorymenu': {
	anu = `
┌───❑ *Main Menu*
│  
│➢ ${prefix}ping
│➢ ${prefix}owner
│➢ ${prefix}menu / ${prefix}help / ${prefix}?
│➢ ${prefix}delete
│➢ ${prefix}infochat
│➢ ${prefix}quoted
│➢ ${prefix}listpc
│➢ ${prefix}listgc
│➢ ${prefix}listonline
╰─────────❑
  `
  textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'ephotomenu': {
	anu = `
┌───❑ *Ephoto Menu*
│
│➢ ${prefix}ffcover
│➢ ${prefix}crossfire
│➢ ${prefix}galaxy
│➢ ${prefix}glass
│➢ ${prefix}neon
│➢ ${prefix}beach
│➢ ${prefix}blackpink
│➢ ${prefix}igcertificate
│➢ ${prefix}ytcertificate
╰─────────❑
`
textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'textpromenu': {
	anu = `
┌───❑ *Text Pro Menu*
│
│➢ ${prefix}3dchristmas
│➢ ${prefix}3ddeepsea
│➢ ${prefix}americanflag
│➢ ${prefix}3dscifi
│➢ ${prefix}3drainbow
│➢ ${prefix}3dwaterpipe
│➢ ${prefix}halloweenskeleton
│➢ ${prefix}sketch
│➢ ${prefix}bluecircuit
│➢ ${prefix}space
│➢ ${prefix}metallic
│➢ ${prefix}fiction
│➢ ${prefix}greenhorror
│➢ ${prefix}transformer
│➢ ${prefix}berry
│➢ ${prefix}thunder
│➢ ${prefix}magma
│➢ ${prefix}3dcrackedstone
│➢ ${prefix}3dneonlight
│➢ ${prefix}impressiveglitch
│➢ ${prefix}naturalleaves
│➢ ${prefix}fireworksparkle
│➢ ${prefix}matrix
│➢ ${prefix}dropwater
│➢ ${prefix}harrypotter
│➢ ${prefix}foggywindow
│➢ ${prefix}neondevils
│➢ ${prefix}christmasholiday
│➢ ${prefix}3dgradient
│➢ ${prefix}blackpink
│➢ ${prefix}gluetext
╰─────────❑
`
textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'databasemenu': {
	anu = `
┌───❑ *Database Menu*
│  
│➢ ${prefix}setcmd
│➢ ${prefix}listcmd
│➢ ${prefix}delcmd
│➢ ${prefix}lockcmd
│➢ ${prefix}addmsg
│➢ ${prefix}listmsg
│➢ ${prefix}getmsg
│➢ ${prefix}delmsg
╰─────────❑
  `
  textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'anonymouschatmenu': {
	anu = `
┌───❑ *Anonymous Chat*
│➢ ${prefix}start ( Memulai Chating )
│➢ ${prefix}next ( Next user )
│➢ ${prefix}stop ( stop anonymous chat )
│➢ ${prefix}sendkontak ( Khusus Di Dalam Room Anonymous chat )
╰─────────❑
	`
	  textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
case 'sistemmenu': {
	anu = `
┌───❑	
│➢ ${prefix}antilink On/Off
│➢ ${prefix}mute On/Off
│➢ ${prefix}antiwame On/Off
╰─────────❑
`
textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break
  case 'ownermenu': {
  	anu = `
┌───❑ *Owner Menu*
│  
│➢ ${prefix}chat [option]
│➢ ${prefix}join [link]
│➢ ${prefix}leave
│➢ ${prefix}block @user
│➢ ${prefix}unblock @user
│➢ ${prefix}bcgroup
│➢ ${prefix}bcall
│➢ ${prefix}restart
│➢ ${prefix}autobio On/Off
│➢ ${prefix}autoread On/Off
│➢ ${prefix}autoketik On/Off
╰─────────❑
  `
    textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break

case 'topup': 
let sectionn= [{
								"title": "LIST TOP UP BY RYZZ",
								"rows": [
									{
										"title": "List Daftar Menu Top Up",
										"description": "Menampilkan List Menu Top Up",
										"rowId": `${prefix}menutopup`
									}
								]
							},
							{
								"title": "Menu Game",
								"rows": [
									{
										"title": "Free Fire",
										"description": "Menampilkan List Dm Free fire!",
										"rowId": `${prefix}dmff`
									},
									{
										"title": "Mobile legends",
										"description": "Menampilkan List Dm Ml",
										"rowId": `${prefix}dmml`
									},
									{
										"title": "Call of duty mobile",
										"description": "Menampilkan List Cp Codm",
										"rowId": `${prefix}dmcodm`
									},
									{
										"title": "Pubg Mobile",
										"description": "Menampilkan List Uc Pubg",
										"rowId": `${prefix}dmpubg`
										},
										{
											"title": "Jasa Nokos",
										"description": "Menampilkan List Nokos",
										"rowId": `${prefix}dmjs`
										},												
										{
											"title": "Payment",
										"description": "Menampilkan Payment Pembayaran",
										"rowId": `${prefix}dmpay`
										}
								]
							}
						]
hisoka.sendList(m.chat, `Halo ${pushname}`, `
┌───❑ *Bot Info* ❑──      
│🖥️LibrayLibray : *Baileys Multi Device*
│🤖Name Bot : *RyzBotz_0*
│👤Creator : *RyzzBotz*
│☠️AuthorAuthor : *RyzBotz_0*
│🌍User Total : *${Object.keys(global.db.data.users).length}*
╰─────────❑
HARAP ISI ID YA KAK 
_ID =_
_NICK =_
_NOMINAL =_
_HARGA =_
_PAYMENT =_

SETELAH DI ISI TEKAN TOMBOL ORDER, DAN PILIH GAME NYA.
`, "RyzBotz_0", " O R D E R ",  sectionn, { quoted: m})
break


case 'menutopup':
m.reply(`
*LIST GAME TOP UP*
1.FREE FIRE
2.MOBILE LEGENDS
3.CODM
4.PUBG MOBILE`)
break

case 'dmff': {
anu = `
*LIST DIAMOND FREE FIRE*

50     💎   = Rp. 7.500
70     💎   = Rp. 9.500
100   💎   = Rp. 14.000
140   💎   = Rp. 19.000
210   💎   = Rp. 28.000
280   💎   = Rp. 37.000
355   💎   = Rp. 46.000
500   💎   = Rp. 66.000
720   💎   = Rp. 95.000
1000 💎   = Rp. 135.000
1440 💎   = Rp. 180.000
2000 💎   = Rp. 255.000

M.Mingguan  = 28.000
M.Bulanan     = 135.000

TEKAN TOMBOL *O W N E R* UNTUK MENGIRIM ID GAME LENGKAP, DAN BUKTI TRANSAKSI PEMBAYARAN `
                textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break

case 'dmml': {
anu = `
*LIST DIAMOND MOBILE LEGENDS*

42     💎   =Rp. 12.000
70     💎   =Rp. 20.000
140   💎   =Rp. 36.000
284   💎   =Rp. 70.000
355   💎   =Rp. 88.000
425   💎   =Rp. 110.000
716   💎   =Rp. 180.000
1446 💎   =Rp. 350.000
2976 💎   =Rp. 690.000
7502 💎   =Rp. 1.900.000

Starlight 💫   =Rp. 145.000
Twilight  💫   =Rp. 145.000

TEKAN TOMBOL *O W N E R* UNTUK MENGIRIM ID GAME LENGKAP, DAN BUKTI TRANSAKSI PEMBAYARAN `
                textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break

case 'dmcodm': {
anu = `
*LIST CP CALL OF DUTY MOBILE*

63     *CP*   =Rp. 9.500
126   *CP*   =Rp. 18.500
318   *CP*   =Rp. 46.500
381   *CP*   =Rp. 55.000
446   *CP*   =Rp. 64.500
634   *CP*   =Rp. 92.500
952   *CP*   =Rp. 138.500
1373 *CP*   =Rp. 185.000
1691 *CP*   =Rp. 231.000
2060 *CP*   =Rp. 277.500

TEKAN TOMBOL *O W N E R* UNTUK MENGIRIM ID GAME LENGKAP, DAN BUKTI TRANSAKSI PEMBAYARAN `
                 textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break

case 'dmpubg': {
anu = `
*LIST DIAMOND PUBG MOBILE*

⚔️ *PUBG REGION INDO*
16 💵 =Rp. 7.000
26 💵 =Rp. 9.000
52 💵 =Rp. 11.000
105 💵 =Rp. 20.000
131 💵 =Rp. 27.500
263 💵 =Rp. 48.000
530 💵 =Rp. 95.000
825 💵 =Rp. 160.000
1.100 💵 =Rp. 200.000

TEKAN TOMBOL *O W N E R* UNTUK MENGIRIM ID GAME LENGKAP, DAN BUKTI TRANSAKSI PEMBAYARAN `
                textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break

case 'dmjs': {
anu = `
*LIST NO KOSONG LUAR NEGERI*

NO BANYAK MULAI DARI +1 - +100 ( HARGA BERVARIASI SESUAI KODE NEGARA )

TEKAN TOMBOL *O W N E R* UNTUK MENGIRIM BUKTI TRANSAKSI PEMBAYARAN `
                 textTemplateButtons(m.chat, anu, `RyzBotz`, btn)
            }
break

case 'dmpay':
m.reply(`*LIST PAYMENT*
_GOPAY =_ 0819 0641 2862
_DANA =_
_OVO =_
_PULSA =_`)
break

break

case 'tqtt': 
m.reply(`Thanks To 
DikaArdnt.
Fatih Arridho.
Deff
Ryzz
Juna Bot
KurrXd
Dan All Friend Yang Membantu Merakit Sc ini !!!`)
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
