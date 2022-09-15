/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.0
* @file  deleteMsg.js - QueenAmdi bot/group/user message remover

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, amdiDB, ban, deleteMsg, Language } = require('../assets/scripts')
const { getSettings } = amdiDB.settingsDB
const { setDelAllJids, getlistDelAllJids } = amdiDB.ban_jidDB
const { GRP_deleteMsg } = deleteMsg
const Lang = Language.getString('deleteMsg');


AMDI({ cmd: "del", desc: Lang.delDesc, type: "profile" }, (async (amdiWA) => {
    let { botNumberJid, isGroup, isReply, reply, allowedNumbs, deleteKEY } = amdiWA.msgLayout;

    if (!isReply) return reply(Lang.needReplymsg)
    if (allowedNumbs.includes(amdiWA.msg.message.extendedTextMessage.contextInfo.participant.split('@')[0])) return reply(Lang.noBanOwners);

    if (isGroup) {
        return await GRP_deleteMsg(amdiWA);
    } else if (!isGroup) {
        if (!amdiWA.msg.message.extendedTextMessage.contextInfo.participant.includes(botNumberJid)) return;
        const options = {
            remoteJid: botNumberJid,
            fromMe: true,
            id: amdiWA.msg.message.extendedTextMessage.contextInfo.stanzaId
        }
        return await deleteKEY(options.key);
    }
}));


AMDI({ cmd: "delall", desc: Lang.delAllDesc, type: "admin" }, (async (amdiWA) => {
    let { botNumberJid, input, isGroup, reply, isReply, allowedNumbs, react, sendText } = amdiWA.msgLayout;

    if (!isGroup) return reply(Lang.notGRP, "❌");
    if (!amdiWA.msg.message.extendedTextMessage) return reply(Lang.giveUSER, "❌");

    let taggedJid;
    if (taggedJid = amdiWA.msg.message.extendedTextMessage.contextInfo.participant) {
        taggedJid = amdiWA.msg.message.extendedTextMessage.contextInfo.participant;                
    } else {
        taggedJid = amdiWA.msg.message.extendedTextMessage.contextInfo.mentionedJid[0];
    }

    const setMODS = await getSettings('MODERATOR')
    const MOD = setMODS.input
    if (taggedJid == botNumberJid) return reply(Lang.noBanMe);
    if (allowedNumbs.includes(taggedJid.split('@')[0])) return reply(Lang.noDelAllOwners);
    if (MOD.includes(taggedJid.split('@')[0])) return reply(Lang.noBanAllMod);

    let num_split = taggedJid.split("@s.whatsapp.net")[0];
    let warnMsg = `*@${num_split} ,${Lang.banMsg}*`;
    await amdiWA.web.sendMessage(amdiWA.clientJID, { sticker: {url: 'https://i.ibb.co/8m0sGwz/lolwennayanne.webp'} });
    await sendText(warnMsg, {mentions: taggedJid, quoted: true, reactEmoji: "☠️"});
    return await setDelAllJids(taggedJid, 'User: +' + taggedJid.split('@')[0], amdiWA.clientJID);
}));


AMDI({ cmd: "listdel", desc: Lang.listdelAllDesc, type: "admin" }, (async (amdiWA) => {
    let { prefix, reply } = amdiWA.msgLayout;

    var listInfo = {}
    listInfo.title = Lang.delListTitle
    listInfo.text = Lang.delListText
    listInfo.buttonTXT = 'default'

    var delList = await getlistDelAllJids(amdiWA.clientJID)
    const rows = await ban.delRows(prefix, delList)
    if (rows == '') return reply('*No delete all messags JIDs for this group*')
    const sections = [{ title: "Delete All Messages JIDs list", rows: rows }];
    return await sendListMsg(listInfo, sections);
}));