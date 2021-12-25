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
const _amdi = QueenAmdi.misc
// const tk = require('tiktok-scraper');
const {MessageType,Mimetype} = require('@blackamda/queenamdi-web-api');

const Language = require('../language');
const Lang = Language.getString('tiktok');
let Work_Mode = Build.WORKTYPE == 'public' ? false : true


Amdi.operate({ pattern: 'tiktok ?(.*)', fromMe: Work_Mode, desc: Lang.TIKTOK_DESC,  deleteCommand: false}, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const tkurl = input[1]

    if (tkurl === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.INVALID_TK, {quoted: amdiMSG.data});

    await _amdi.tiktokDL( amdiMSG, tkurl, Lang )
}));

/*
Amdi.operate({ pattern: 'tk ?(.*)', fromMe: Work_Mode, desc: Lang.TK_DESC,  deleteCommand: false}, (async (amdiMSG, match) => {
    await QueenAmdi.amdi_setup()
    const username = match[1]
    if (username === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.REPLY, {quoted: amdiMSG.data});

    const { user, stats } = await tk.getUserProfileInfo(username)
    
    const pic = await axios.get(user.avatarLarger, {responseType: 'arraybuffer'})

    const msg = Lang.TKID + user.id + Lang.USERNAME + user.uniqueId + Lang.NAME + user.nickname + Lang.FOLLOWERS + stats.followerCount + Lang.FOLLOWING + stats.followerCount + Lang.VIDEOS + stats.videoCount + Lang.LIKES + stats.heart
  
    await amdiMSG.client.sendMessage(amdiMSG.jid,Buffer.from(pic.data), MessageType.image, {mimetype: Mimetype.jpg, caption: msg, quoted: amdiMSG.data, thumbnail: pic});
}));*/