/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.3
* @file  grpManager.js - QueenAmdi group managing basic options

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, amdiDB, _default_list_sections, grpManage, Language } = require('queen_amdi_core/dist/scripts')
const { getSettings } = amdiDB.settingsDB
const { grpSettings } = _default_list_sections
const Lang = Language.getString('grpManager')


AMDI({ cmd: "group", desc: Lang.grpDESC, type: "admin", react: "🕹️" }, (async (amdiWA) => {
    let { prefix, sendListMsg, groupName } = amdiWA.msgLayout;

    var listInfo = {}
    listInfo.title = Lang.grpSetTitle.format(groupName)
    listInfo.text = Lang.grpSetText
    listInfo.buttonTXT = 'default'  

    const sections = grpSettings(prefix, amdiWA.clientJID);
    return await sendListMsg(listInfo, sections);
}));


AMDI({ cmd: "add", desc: Lang.addDESC, example: Lang.addEX, type: "admin", react: "➕" }, (async (amdiWA) => {
    let { botNumberJid, input, isUSERExists, reply, sendText } = amdiWA.msgLayout

    return await reply('This is command is not functioning correctly.\n\nWill fix this soon!');
    /*if (!input || isNaN(input)) return await reply(Lang.needADDUSER, "❓");
    if (isNaN(input)) return await reply(Lang.needADDUSER, "❓");
    const isUSERExist = await isUSERExists(`${input}@s.whatsapp.net`);
    if (isUSERExist) return await reply(Lang.alreadyIN.format(input), "❗");
    if (input == botNumberJid) return;
    const [result] = await amdiWA.web.onWhatsApp(input)
    if (!result) return await reply(Lang.noWhatsApp, "❗");
    const addMSGSet = await getSettings('ADDMSG')
    let addMSG = !addMSGSet.input ? Lang.added : addMSGSet.input
    try {
        return await grpManage.addUSER(amdiWA, Lang, addMSG);
    } catch {
        return await reply(Lang.failADD.format(input));
    }*/
}));


AMDI({ cmd: "kick", desc: Lang.kickDESC, example: Lang.kickEXA, type: "admin", react: "🚫" }, (async (amdiWA) => {
    let { allowedNumbs, botNumberJid, groupMetadata, input, inputObj, isReply, isUSERExists, reply, sendText, taggedJid } = amdiWA.msgLayout

    if (!isReply && !input) return reply(Lang.needUSER, "❓")
    
    const isUSERExist = await isUSERExists(taggedJid);
    if (!isUSERExist) return reply(Lang.cantfinduser, "❓");
    if (taggedJid == groupMetadata.owner) return reply(Lang.ISOWNER, "❌");
    if (taggedJid == botNumberJid) return reply(Lang.noBanMe);
    if (allowedNumbs.includes(taggedJid.split('@')[0])) return reply(Lang.noBanOwners);

    let reason;
    if (inputObj[1]) {
        reason = input.split(`${inputObj[0]} `)[1]
    } else {
        const kickMSG = await getSettings('KICKMSG')
        reason = !kickMSG.input ? Lang.kicked : kickMSG.input
    }
    try {
        await sendText(`@${taggedJid.split('@')[0]}, ${reason}`, {mentionJIDS: [taggedJid]});
        return await amdiWA.web.groupParticipantsUpdate(amdiWA.clientJID, [taggedJid], "remove");
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    }
}));


AMDI({ cmd: "promote", desc: Lang.PROMOTE_DESC, example: Lang.PromoEX,type: "admin", react: "🔝" }, (async (amdiWA) => {
    let { input, isReply, checkAdmin, reply, sendText, taggedJid } = amdiWA.msgLayout

    if (!isReply && !input) return reply(Lang.needUSER, "❓")
    
    const isUserAdmin = await checkAdmin(taggedJid);
    if (isUserAdmin) return reply(Lang.ALREADY_PROMOTED, "❓");

    const promoteMSG = await getSettings('PROMMSG')
    const PROMOTED = !promoteMSG.input ? Lang.PROMOTED : promoteMSG.input
    try {
        await sendText(`@${taggedJid.split('@')[0]}, ${PROMOTED}`, {mentionJIDS: [taggedJid]});
        return await amdiWA.web.groupParticipantsUpdate(amdiWA.clientJID, [taggedJid], "promote");
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    }
}));


AMDI({ cmd: "demote", desc: Lang.DEMOTE_DESC, example: Lang.DemoEX, type: "admin", react: "🔙" }, (async (amdiWA) => {
    let { groupMetadata, input, isReply, checkAdmin, reply, sendText, taggedJid } = amdiWA.msgLayout

    if (!isReply && !input) return reply(Lang.needUSER, "❓")
    
    const isUserAdmin = await checkAdmin(taggedJid);
    if (taggedJid == groupMetadata.owner) return;
    if (!isUserAdmin) return reply(Lang.ALREADY_NOT_ADMIN, "❓");

    const demoteMSG = await getSettings('DEMOMSG')
    const DEMOTED = !demoteMSG.input ? Lang.DEMOTED : demoteMSG.input
    try {
        await sendText(`@${taggedJid.split('@')[0]}, ${DEMOTED}`, {mentionJIDS: [taggedJid]});
        return await amdiWA.web.groupParticipantsUpdate(amdiWA.clientJID, [taggedJid], "demote");
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    }
}));


AMDI({ cmd: "mute", desc: Lang.MUTE_DESC, type: "admin", react: "🔇" }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout

    await amdiWA.web.groupSettingUpdate(amdiWA.clientJID, 'announcement');
    const muteMSG = await getSettings('muteMSG')
    const MUTED = !muteMSG.input ? Lang.MUTED : muteMSG.input
    return await reply(MUTED);
}));


AMDI({ cmd: "unmute", desc: Lang.UNMUTE_DESC, type: "admin", react: "🔊" }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout

    await amdiWA.web.groupSettingUpdate(amdiWA.clientJID, 'not_announcement')
    const unmuteMSG = await getSettings('unmuteMSG')
    const UNMUTED = !unmuteMSG.input ? Lang.UNMUTED : unmuteMSG.input
    return await reply(UNMUTED);
}));


AMDI({ cmd: "lock", desc: Lang.LOCKGRP_DESC, type: "admin", react: "🔒" }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout

    await amdiWA.web.groupSettingUpdate(amdiWA.clientJID, 'locked');
    const lockMSG = await getSettings('lockMSG')
    const LOCKED = !lockMSG.input ? Lang.LOCKED : lockMSG.input
    return await reply(LOCKED);
}));


AMDI({ cmd: "unlock", desc: Lang.UNLOCKGRP_DESC, type: "admin", react: "🔒" }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout

    await amdiWA.web.groupSettingUpdate(amdiWA.clientJID, 'unlocked');
    const unlockMSG = await getSettings('unlockMSG')
    const UNLOCKED = !unlockMSG.input ? Lang.UNLOCKED : unlockMSG.input
    return await reply(UNLOCKED);
}));


AMDI({ cmd: "invite", desc: Lang.inviteDESC, type: "admin", react: "🫱🏻‍🫲🏻" }, (async (amdiWA) => {
    let { groupName, sendClipboard } = amdiWA.msgLayout;
    const invite_code = await amdiWA.web.groupInviteCode(amdiWA.clientJID);
    return await sendClipboard({text: `*${groupName}*\n\nhttps://chat.whatsapp.com/${invite_code}\n`, clip: `https://chat.whatsapp.com/${invite_code}`});
}));


AMDI({ cmd: "revoke", desc: Lang.revokeDESC, type: "admin", react: "🔁" }, (async (amdiWA) => {
    let { reply, groupName } = amdiWA.msgLayout;
    await amdiWA.web.groupRevokeInvite(amdiWA.clientJID);
    return await reply(Lang.REVOKED.format(groupName));
}));


AMDI({ cmd: "subject", desc: Lang.SUBJECTDESC, example: Lang.subEX, type: "admin", react: "✏️" }, (async (amdiWA) => {
    let { groupName, input, reply } = amdiWA.msgLayout;

    if (!input) return reply(`${Lang.NEED_SUB}\n\n${Lang.subEX}`);

    await amdiWA.web.groupUpdateSubject(amdiWA.clientJID, input);
    return await reply(`${Lang.SUB}\n\n${groupName}\n   > to >\n${input}`, "✔️");
}));


AMDI({ cmd: "grpdesc", desc: Lang.GRPDESCdesc, example: Lang.grpDESCEX, type: "admin", react: "✏️" }, (async (amdiWA) => {
    let { input, reply } = amdiWA.msgLayout;

    if (!input) return reply(`${Lang.NEED_DESC}\n\n${Lang.grpDESCEX}`);

    await amdiWA.web.groupUpdateDescription(amdiWA.clientJID, input);
    return await reply(Lang.DESCGRP, "✔️");
}));