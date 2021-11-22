/*
░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗
██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║
██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║
╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║
░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║
░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝
░█████╗░███╗░░░███╗██████╗░██╗
██╔══██╗████╗░████║██╔══██╗██║
███████║██╔████╔██║██║░░██║██║
██╔══██║██║╚██╔╝██║██║░░██║██║ █▀█ █▀▀█ █▀█ ▄█─ 
██║░░██║██║░╚═╝░██║██████╔╝██║ ─▄▀ █▄▀█ ─▄▀ ─█─ 
╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═════╝░╚═╝ █▄▄ █▄▄█ █▄▄ ▄█▄
Copyright (C) 2021 Black Amda.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const QueenAmdi = require('queenamdi-public');
const Amdi = QueenAmdi.events
const Build = QueenAmdi.build

const { MessageType, MessageOptions, Mimetype } = require('@blackamda/queenamdi-web-api');
const fs = require('fs');
const axios = require('axios');
let LOL = Build.WORKTYPE == 'public' ? false : true

var LISTDESC = ''
if (Build.LANG == 'SI') LISTDESC = '╔═══════❪💃🏻♥️❫\n▷ *💬 Someone says list* ◁\n╚═════≪ •❈• ≫═════'
if (Build.LANG == 'EN') LISTDESC = '╔═══════❪💃🏻♥️❫\n▷ *💬 Someone says list* ◁\n╚═════≪ •❈• ≫═════'

var SELECT = ''
if (Build.LANG == 'SI') SELECT = 'කවුරුහරි තෝරන්න'
if (Build.LANG == 'EN') SELECT = 'Select someone'

var DESC = ''
if (Build.LANG == 'SI') DESC = 'කවුරුහරි කියන පරිදි ඔබේ පෙළ සකසන්න.'
if (Build.LANG == 'EN') DESC = 'Make your text as someone says.'

var ANIME_DESC = ''
if (Build.LANG == 'SI') ANIME_DESC = 'එය anime girl රඳවාගෙන සිටින banner තුළ text ලියයි.'
if (Build.LANG == 'EN') ANIME_DESC = 'Write text on anime girl paper.'

var TRUMP_DESC = ''
if (Build.LANG == 'SI') TRUMP_DESC = 'Trumpගේ tweet එකට text පරිවර්තනය කරයි.'
if (Build.LANG == 'EN') TRUMP_DESC = 'Write text on Trump Twitter.'

var GOTA_DESC = ''
if (Build.LANG == 'SI') GOTA_DESC = 'ස`ගේ tweet එකට text පරිවර්තනය කරයි.'
if (Build.LANG == 'EN') GOTA_DESC = 'Write text on Gotabaya Twitter.'

var CHANGE_DESC = ''
if (Build.LANG == 'SI') CHANGE_DESC = 'Changed my mind meme පෝස්ටරය වෙනස් කිරීම සඳහා text හරවයි.'
if (Build.LANG == 'EN') CHANGE_DESC = 'Write changed my mind themed memes.'

var NEED_WORD = ''
if (Build.LANG == 'SI') NEED_WORD = '*ඔබ වචන ඇතුළත් කළ යුතුය!*'
if (Build.LANG == 'EN') NEED_WORD = '*Please enter words!*'


Amdi.operate({pattern: 'someonesay ?(.*)', fromMe: LOL, desc: DESC, dontAddCommandList: false, deleteCommand: true}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    const txt = match[1]
    
    if (txt === '') return await message.client.sendMessage(message.jid,NEED_WORD, MessageType.text, {quoted: message.data});

    var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(Build.HANDLERS)) {
        BUTTHANDLE = Build.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }

    const rows = [
        {title: 'Anime say', description: ANIME_DESC, rowId: BUTTHANDLE + "qaanimesay " + txt},
        {title: 'Change My Mind say', description: CHANGE_DESC, rowId: BUTTHANDLE + "qachangesay " + txt},
        {title: 'Trump say', description: TRUMP_DESC, rowId: BUTTHANDLE + "qatrumpsay " + txt},
        {title: 'Gotabaya say', description: GOTA_DESC, rowId: BUTTHANDLE + "qagotasay " + txt}
    ]

    const website = [
        {title: 'https://amdaniwasa.com/', description: "", rowId:"web"}]
       
    const sections = [{title: "Someone says List", rows: rows}, {title: "Check official website :", rows: website}]
       
    const button = {
        buttonText: SELECT,
        description: LISTDESC,
        sections: sections,
        listType: 1
    }

    await message.client.sendMessage(message.jid, button, MessageType.listMessage, {quoted: message.data});
}));


Amdi.operate({ pattern: 'qaanimesay ?(.*)', fromMe: LOL, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD,MessageType.text, {quoted: message.data});

    var ttinullimage = await axios.get(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: Build.CAP, thumbnail: qathmub, quoted: message.data})

}));


Amdi.operate({ pattern: 'qachangesay ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD,MessageType.text, {quoted: message.data});

    var ttinullimage = await axios.get(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: Build.CAP, thumbnail: qathmub, quoted: message.data})

}));


Amdi.operate({ pattern: 'qatrumpsay ?(.*)', fromMe: LOL, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD,MessageType.text, {quoted: message.data});

    var ttinullimage = await axios.get(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: Build.CAP, thumbnail: qathmub, quoted: message.data})

}));

Amdi.operate({ pattern: 'qagotasay ?(.*)', fromMe: LOL, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD,MessageType.text, {quoted: message.data});

    var ttinullimage = await axios.get(`https://nekobot.xyz/api/imagegen?type=tweet&username=Gotabaya%20Rajapaksha&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: Build.CAP, thumbnail: qathmub, quoted: message.data})

}));

const qathmub = "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"