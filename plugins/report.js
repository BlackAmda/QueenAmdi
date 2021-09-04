/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('report');

if (Config.WORKTYPE == 'private') {
    Amdi.applyCMD({pattern: 'report ?(.*)', fromMe: true, desc: Lang.REPORT,  deleteCommand: false}, (async (message, match) => {
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
}

else if (Config.WORKTYPE == 'public') {
    Amdi.applyCMD({pattern: 'report ?(.*)', fromMe: false, desc: Lang.REPORT}, (async (message, match) => {
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
}