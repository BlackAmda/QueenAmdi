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
const _amdi = QueenAmdi.tagJIDS
const fs = require('fs');
const {MessageType, Mimetype} = require('@blackamda/queenamdi-web-api');

const Language = require('../language');
const Lang = Language.getString('tagall');

if (Build.WORKTYPE == 'private') {
    Amdi.operate({pattern: 'tagadmin$', fromMe: true, desc: Lang.TAGADMİN,  deleteCommand: false}, (async (amdiMSG) => {
        await QueenAmdi.amdi_setup()
        await _amdi.tagAdmin( amdiMSG )
    }));
}
else if (Build.WORKTYPE == 'public') {
    Amdi.operate({pattern: 'tagadmin$', fromMe: false, desc: Lang.TAGADMİN}, (async (amdiMSG) => {
        await QueenAmdi.amdi_setup()
        await _amdi.tagAdmin( amdiMSG )
    }));
}

Amdi.operate({pattern: 'tagall ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.TAGALL_DESC, dontAddCommandList: true}, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const msg = input[1]
    await _amdi.tagAll( amdiMSG, msg )
}));

Amdi.operate({pattern: 'taggrp ?(.*)', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG, input) => {    
    const text = amdiMSG.reply_message.text
    const address = input[1]
    await _amdi.tagGrp( amdiMSG, address, text )
}));

Amdi.operate({pattern: 'tagimage$', fromMe: true, dontAddCommandList: true,  deleteCommand: true}, (async (amdiMSG) => {  
    await QueenAmdi.amdi_setup()
    let NEED_IMAGE = Build.LANG == 'EN' ? '*Please reply to an image*' : '*කරුණාකර රූපයකට පිළිතුරු දෙන්න*'
    if (amdiMSG.reply_message === false) return await amdiMSG.client.sendMessage(amdiMSG.jid, NEED_IMAGE, MessageType.text, {quoted: amdiMSG.data});

    if (amdiMSG.reply_message.image) {
        await _amdi.tagImage( amdiMSG )
    } else {
        return await amdiMSG.client.sendMessage(amdiMSG.jid, NEED_IMAGE, MessageType.text, {quoted: amdiMSG.data});
    }
}));

Amdi.operate({pattern: 'tagvideo$', fromMe: true, dontAddCommandList: true,  deleteCommand: true}, (async (amdiMSG) => {  
    await QueenAmdi.amdi_setup()
    let NEED_VID = Build.LANG == 'EN' ? '*Please reply to a video*' : '*කරුණාකර වීඩියෝවකට පිළිතුරු දෙන්න*'
    if (amdiMSG.reply_message === false) return await amdiMSG.client.sendMessage(amdiMSG.jid, NEED_VID, MessageType.text, {quoted: amdiMSG.data});

    if (amdiMSG.reply_message.video) {
        await _amdi.tagVideo( amdiMSG )
    } else {
        return await amdiMSG.client.sendMessage(amdiMSG.jid, NEED_VID, MessageType.text, {quoted: amdiMSG.data});
    }
}));

Amdi.operate({pattern: 'tagstic$', fromMe: true, dontAddCommandList: true,  deleteCommand: true}, (async (amdiMSG) => {  
    await QueenAmdi.amdi_setup()
    let NEED_STIC = Build.LANG == 'EN' ? '*Please reply to a sticker*' : '*කරුණාකර ස්ටිකරයකට පිළිතුරු දෙන්න*'
    if (amdiMSG.reply_message === false) return await amdiMSG.client.sendMessage(amdiMSG.jid, NEED_STIC, MessageType.text, {quoted: amdiMSG.data});

    if (amdiMSG.reply_message.data.quotedMessage.stickerMessage) {
        await _amdi.tagStic( amdiMSG )
    } else {
        return await amdiMSG.client.sendMessage(amdiMSG.jid, NEED_STIC, MessageType.text, {quoted: amdiMSG.data});
    }
}));

Amdi.operate({pattern: 'tagvoice$', fromMe: true, dontAddCommandList: true,  deleteCommand: true}, (async (amdiMSG) => {  
    await QueenAmdi.amdi_setup()
    let NEED_AUDIO = Build.LANG == 'EN' ? '*Please reply to a voice amdiMSG*' : '*කරුණාකර හඬ පණිවිඩයකට පිළිතුරු දෙන්න*'
    if (amdiMSG.reply_message === false) return await amdiMSG.client.sendMessage(amdiMSG.jid, NEED_AUDIO, MessageType.text, {quoted: amdiMSG.data});

    if (amdiMSG.reply_message.data.quotedMessage.audioMessage) {
        await _amdi.tagVoice( amdiMSG )
    } else {
        return await amdiMSG.client.sendMessage(amdiMSG.jid, NEED_AUDIO, MessageType.text, {quoted: amdiMSG.data});
    }
}));

Amdi.operate({pattern: 'tagdoc$', fromMe: true, dontAddCommandList: true,  deleteCommand: true}, (async (amdiMSG) => {  
    await QueenAmdi.amdi_setup()
    let NEED_DOC = Build.LANG == 'EN' ? '*Please reply to a document*' : '*කරුණාකර හඬ document එකට පිළිතුරු දෙන්න*'
    if (amdiMSG.reply_message === false) return await amdiMSG.client.sendMessage(amdiMSG.jid, NEED_DOC, MessageType.text, {quoted: amdiMSG.data});

    if (amdiMSG.reply_message.data.quotedMessage.documentMessage) {
        await _amdi.tagDoc( amdiMSG )
    } else {
        return await amdiMSG.client.sendMessage(amdiMSG.jid, NEED_DOC, MessageType.text, {quoted: amdiMSG.data});
    }
}));