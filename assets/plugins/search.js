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
const {MessageType,Mimetype} = require('@blackamda/queenamdi-web-api');
const axios = require('axios')
const gplay = require('google-play-scraper');
const yts = require( 'yt-search' )

const Language = require('../language');
const Lang = Language.getString('search');

let LOL = Build.WORKTYPE == 'public' ? false : true


Amdi.operate({pattern: 'getyt ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.YT_DESC}, (async (message, match) => { 
    await QueenAmdi.amdi_setup()
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
    var searching = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text, {quoted: message.data});

    try {
        var arama = await yts(match[1]);
    } catch {
        return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
    }
    var ytgot = '';
    arama.all.map((video) => {
        ytgot += '▶️ *' + video.title + '* - ' + video.url + '\n\n'
    });

    await message.client.sendMessage(message.jid, '*❖ Queen Amdi Search Engine ❖*\n' + Lang.YTS + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ytgot,MessageType.text, {quoted: message.data});
    return await message.client.deleteMessage(message.jid, {id: searching.key.id, remoteJid: message.jid, fromMe: true})
}));

Amdi.operate({pattern: 'getpack ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.APK_DESC}, (async (message, match) => { 
    await QueenAmdi.amdi_setup()
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);

    var searching = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

    const play = await gplay.search({term: match[1], num: 10})
    ini_txt = ""
        for (var x of play) {
        ini_txt += `📚 *Name* : ${x.title}\n`
        ini_txt += `💵 *Price* : ${x.priceText}\n`
        ini_txt += `👨🏻‍💻 *Developer* : ${x.developer}\n`
        ini_txt += `⚙️ *Playstore Link* : ${x.url}\n`
        ini_txt += `📁 *Package name* : ${x.appId}\n\n────────────────\n\n`
        }

    await message.client.sendMessage(message.jid, '*❖ Queen Amdi Search Engine ❖*\n' + Lang.PSTORE + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt,MessageType.text, {quoted: message.data});
    return await message.client.deleteMessage(message.jid, {id: searching.key.id, remoteJid: message.jid, fromMe: true})
}));