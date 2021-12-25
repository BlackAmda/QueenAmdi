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
const {MessageType} = require('@blackamda/queenamdi-web-api');
let Work_Mode = Build.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('report');


Amdi.operate({pattern: 'report ?(.*)', fromMe: Work_Mode, desc: Lang.REPORT}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    if (message.reply_message.jid == '94757405652@s.whatsapp.net') return await message.client.sendMessage(message.jid, '*👑 You can not report Queen Amdi Bot owner!*', MessageType.text, {quoted: message.data});
    if (match[1] == '' && message.reply_message) {
        let grp = await message.client.groupMetadata(message.jid);
        var jids = [];
        msg = '';
        grp['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                msg += '@' + uye.id.split('@')[0] + ' ';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });

        var ID = Math.random().toString(36).slice(2);

        await message.client.sendMessage(message.jid,Lang.R_WORD + Lang.ID_WORD + ID + '\n' + Lang.BR + '\n' + Lang.USER + '@' + message.reply_message.jid.split('@')[0] + '\n' + Lang.BR + '\n' + Lang.END , MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    
    }
    else if (match[1] !== '' && message.reply_message) {
        let grp = await message.client.groupMetadata(message.jid);
        var jids = [];
        msg = '';
        grp['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                msg += '@' + uye.id.split('@')[0] + ' ';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });

        var ID = Math.random().toString(36).slice(2);

        await message.client.sendMessage(message.jid,Lang.R_WORD + Lang.ID_WORD + ID + '\n' + Lang.BR + '\n' + Lang.USER + '@' + message.reply_message.jid.split('@')[0] + '\n' + Lang.BR + '\n' + Lang.REASON + `${match[1]}` + '\n' + Lang.BR + '\n' + Lang.END , MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
    else if (!message.reply_message) {
        return message.client.sendMessage(message.jid,Lang.REPLY, MessageType.text);
    }
}));