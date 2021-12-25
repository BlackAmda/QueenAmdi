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
const {MessageType, Mimetype} = require('@blackamda/queenamdi-web-api');
const sql = require('./sql/rules');
let Work_Mode = Build.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('rules');

Amdi.operate({pattern: 'rules$', fromMe: Work_Mode,  deleteCommand: false, desc: Lang.RULE_DESC}, (async (message, match) => {
    var hg = await sql.getMessage(message.jid);
    if (hg === false) {
        await message.client.sendMessage(message.jid,Lang.NOT_SET_RULES,MessageType.text, {quoted: message.data});
    } else {
        await message.client.sendMessage(message.jid,'```⚖️' + Lang.TITLE + '⚖️```\n\n' + hg.message,MessageType.text, {quoted: message.data});
    }
}));

Amdi.operate({pattern: 'qawelrules$', fromMe: false,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    var hg = await sql.getMessage(message.jid);
    if (hg === false) {
        await message.client.sendMessage(message.jid,Lang.NOT_SET_RULES,MessageType.text, {quoted: message.data});
    } else {
        await message.client.sendMessage(message.jid,'```⚖️' + Lang.TITLE + '⚖️```\n\n' + hg.message,MessageType.text, {quoted: message.data});
    }
}));

Amdi.operate({pattern: 'setrules ?(.*)', fromMe: true,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') {
        return await message.client.sendMessage(message.jid,Lang.NEED_RULE_TEXT,MessageType.text, {quoted: message.data});
    } else {
        if (match[1] === 'delete') { await message.client.sendMessage(message.jid,Lang.RULES_DELETED,MessageType.text, {quoted: message.data}); return await sql.deleteMessage(message.jid, 'rules'); }
        await sql.setMessage(message.jid, 'rules', match[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid,Lang.RULES_SETTED,MessageType.text, {quoted: message.data})
    }
}));