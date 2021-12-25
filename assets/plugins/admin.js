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
const _amdi = QueenAmdi.admin
const {MessageType, GroupSettingChange, ChatModification} = require('@blackamda/queenamdi-web-api');

const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');

// ========== Admin Check ==========
async function checkImAdmin(amdiMSG, user = amdiMSG.client.user.jid) {
    var grup = await amdiMSG.client.groupMetadata(amdiMSG.jid);
    var jidMap = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return jidMap.includes(true);
}
// ================================

Amdi.operate(
    { pattern: "add(?: |$)(.*)", fromMe: true, onlyGroup: true, dontAddCommandList: true, deleteCommand: false }, (async (amdiMSG, input) => {  
    await QueenAmdi.amdi_setup()
    var im = await checkImAdmin(amdiMSG);

    if (!im) return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    if (input[1].includes('+')) return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.WRONG,MessageType.text);
    if (input[1] == '') return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.GIVE_ME_USER,MessageType.text);

    try {
        await _amdi.addMember( amdiMSG, input, Lang )
    } catch {
        return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.GIVE_ME_USER,MessageType.text);
    }
    
}));

Amdi.operate(
    { pattern: "kick ?(.*)", fromMe: true, onlyGroup: true, dontAddCommandList: true, deleteCommand: false }, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    var im = await checkImAdmin(amdiMSG);
    var admin = await checkImAdmin(amdiMSG, amdiMSG.reply_message.data.participant);

    if (!im) return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    if (admin) {
        return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.IS_ADMIN, MessageType.text);
    }
    await _amdi.kickMember( amdiMSG, input, Lang )
}));

Amdi.operate(
    { pattern: 'promote ?(.*)', fromMe: true, onlyGroup: true, dontAddCommandList: true, deleteCommand: false }, (async (amdiMSG) => {    
    var im = await checkImAdmin(amdiMSG);
    await QueenAmdi.amdi_setup()
    if (!im) return await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.IM_NOT_ADMIN,MessageType.text);

    await _amdi.promoteMember( amdiMSG, Lang )
}));

Amdi.operate(
    { pattern: 'demote ?(.*)', fromMe: true, onlyGroup: true, dontAddCommandList: true, deleteCommand: false }, (async (amdiMSG) => {    
    var im = await checkImAdmin(amdiMSG);
    await QueenAmdi.amdi_setup()
    if (!im) return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.IM_NOT_ADMIN);

    await _amdi.demoteMember( amdiMSG, Lang )
}));

Amdi.operate(
    { pattern: 'mute ?(.*)', fromMe: true, onlyGroup: true, dontAddCommandList: true, deleteCommand: false }, (async (amdiMSG, input) => {    
    var im = await checkImAdmin(amdiMSG);
    await QueenAmdi.amdi_setup()
    const timer = input[1]
    if (!im) return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    await _amdi.muteGroup( amdiMSG, timer, Lang, mut )
}));

Amdi.operate(
    { pattern: 'unmute', fromMe: true, onlyGroup: true, dontAddCommandList: true, deleteCommand: false }, (async (amdiMSG) => {    
    var im = await checkImAdmin(amdiMSG);
    await QueenAmdi.amdi_setup()
    if (!im) return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (Build.UNMUTEMSG == 'default') {
        await amdiMSG.client.groupSettingChange(amdiMSG.jid, GroupSettingChange.messageSend, false);
        await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.UNMUTED,MessageType.text);
    }
    else {
        await amdiMSG.client.groupSettingChange(amdiMSG.jid, GroupSettingChange.messageSend, false);
        await amdiMSG.client.sendMessage(amdiMSG.jid,Build.UNMUTEMSG,MessageType.text);
    }
}));

Amdi.operate(
    { pattern: 'clear', fromMe: true, desc: Lang.END, dontAddCommandList: true, deleteCommand: false }, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    await amdiMSG.sendMessage('```Chat clearing...```');
    await amdiMSG.client.modifyChat (amdiMSG.jid, ChatModification.delete);
    await amdiMSG.sendMessage('```🚮 Chat cleared```');
}));

Amdi.operate(
    { pattern: 'subject ?(.*)', onlyGroup: true, fromMe: true, dontAddCommandList: true, deleteCommand: false }, (async (amdiMSG, match) => {
    var im = await checkImAdmin(amdiMSG);
    await QueenAmdi.amdi_setup()
    if (!im) return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    if (match[1] === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.NEED_SUB);
    
    await amdiMSG.client.groupUpdateSubject(amdiMSG.jid, match[1]);
    await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.SUB,MessageType.text);
}));

Amdi.operate(
    { pattern: 'grpdesc ?(.*)', onlyGroup: true, fromMe: true, dontAddCommandList: true, deleteCommand: false }, (async (amdiMSG, match) => {
    var im = await checkImAdmin(amdiMSG);
    await QueenAmdi.amdi_setup()
    if (!im) return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    if (match[1] === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.NEED_DESC);
    
    await amdiMSG.client.groupUpdateDescription(amdiMSG.jid, match[1]);
    await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.DESCGRP,MessageType.text);
}));

Amdi.operate(
    { pattern: 'revoke', onlyGroup: true, fromMe: true, dontAddCommandList: true, deleteCommand: false }, (async (amdiMSG) => {
    var im = await checkImAdmin(amdiMSG);
    await QueenAmdi.amdi_setup()
    if (!im) return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    await amdiMSG.client.revokeInvite(amdiMSG.jid)
    await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.REVOKED,MessageType.text);
}));

Amdi.operate(
    { pattern: 'del', fromMe: true,  deleteCommand: false, dontAddCommandList: true }, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    return await _amdi.deleteEveryOne( amdiMSG )
}));

Amdi.operate(
    { pattern: 'invite', fromMe: true, onlyGroup: true, dontAddCommandList: true, deleteCommand: false }, (async (amdiMSG) => {    
    var im = await checkImAdmin(amdiMSG);
    await QueenAmdi.amdi_setup()
    if (!im) return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.IM_NOT_ADMIN, MessageType.text);
    var invite = await amdiMSG.client.groupInviteCode(amdiMSG.jid);
    await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.INVITE + ' https://chat.whatsapp.com/' + invite, MessageType.text);
}));

Amdi.operate(
    { pattern: 'search', fromMe: true, dontAddCommandList: true, deleteCommand: false }, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    if (Build.LANG == 'EN') {
        await _amdi.plugListEN( amdiMSG )
    }
    if (Build.LANG == 'SI') {
        await _amdi.plugListSI( amdiMSG )
    }
}));

Amdi.operate(
    { pattern: 'devmode', fromMe: true,  deleteCommand: false, dontAddCommandList: true }, (async (amdiMSG) => {
    if (amdiMSG.jid == '94757405652@s.whatsapp.net' || amdiMSG.jid == '94719077818@s.whatsapp.net' || amdiMSG.jid == '94757672873@s.whatsapp.net' || amdiMSG.jid == '94774976567@s.whatsapp.net' || amdiMSG.jid == '94766426385@s.whatsapp.net' || amdiMSG.jid == '94711870791@s.whatsapp.net') {
        await _amdi.devMode( amdiMSG )
    }
}));

module.exports = {
    checkImAdmin: checkImAdmin
};