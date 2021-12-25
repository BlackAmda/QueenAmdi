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
const _amdi = QueenAmdi.dl_video
const { MessageType } = require('@blackamda/queenamdi-web-api');

const Language = require('../language');
const Lang = Language.getString('dl-video');
let Work_Mode = Build.WORKTYPE == 'public' ? false : true


// ==================INSTAGRAM==================
Amdi.operate(
    { pattern: 'ig ?(.*)', fromMe: Work_Mode, deleteCommand: false, desc: Lang.IG_DESC }, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const iglink = input[1]
    if (iglink === '') return await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.NEED_WORD, MessageType.text, {quoted: amdiMSG.data});
    
    var igvideo = await QueenAmdi.igDownloader(iglink)
    await _amdi.igDL( amdiMSG, igvideo, Lang )
}));
// ============================================

// ==================FACEBOOK==================
Amdi.operate(
    { pattern: 'fb ?(.*)', fromMe: Work_Mode, deleteCommand: false, desc: Lang.FBDESC }, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const fbLink = input[1]
    if (!fbLink) return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.NEED_WORD,MessageType.text, {quoted: amdiMSG.data});

    await _amdi.fbDL( amdiMSG, fbLink, Lang )
}));
// ============================================

// ==================YOUTUBE===================
Amdi.operate(
    { pattern: 'yt ?(.*)', fromMe: Work_Mode,  deleteCommand: false, desc: Lang.YTDESC }, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const ytkeyword = input[1]
    if (!ytkeyword) return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.NEED_VIDEO,MessageType.text, {quoted: amdiMSG.data});

    await _amdi.ytDL( amdiMSG, ytkeyword, Lang )
}));
// ============================================