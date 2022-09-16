/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.0
* @file  grpManager.js - QueenAmdi group managing basic options

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, amdiDB, _default_list_sections, grpManage, Language } = require('../assets/scripts')
const { getSettings } = amdiDB.settingsDB
const { grpSettings } = _default_list_sections
const Lang = Language.getString('grpManager')


AMDI({ cmd: "group", desc: Lang.grpDESC, type: "admin", react: "🕹️" }, (async (amdiWA) => {
    let { prefix, sendListMsg, groupMetadata } = amdiWA.msgLayout;

    var listInfo = {}
    listInfo.title = Lang.grpSetTitle.format(groupMetadata.subject)
    listInfo.text = Lang.grpSetText
    listInfo.buttonTXT = 'default'  

    const sections = await grpSettings(prefix, amdiWA.clientJID);
    return await sendListMsg(listInfo, sections);
}));


AMDI({ cmd: "add", desc: Lang.addDESC, example: Lang.addEX, type: "admin", react: "➕" }, (async (amdiWA) => {
    let { botNumberJid, input, isUSERExists, reply, sendText } = amdiWA.msgLayout

    if (!input || isNaN(input)) return await reply(Lang.needADDUSER, "❓");
    if (isNaN(input)) return await reply(Lang.needADDUSER, "❓");
    const isUSERExist = await isUSERExists(`${input}@s.whatsapp.net`);
    if (isUSERExist) return await reply(Lang.alreadyIN.format(input), "❗");
    if (input == botNumberJid) return;
    const [result] = await amdiWA.web.onWhatsApp(input)
    if (!result.exists) return await reply(Lang.noWhatsApp, "❗");
    const addMSGSet = await getSettings('ADDMSG')
    let addMSG = !addMSGSet.input ? Lang.added : addMSGSet.input
    try {
        return await grpManage.addUSER(amdiWA, Lang, addMSG);
    } catch {
        return await reply(Lang.failADD.format(input));
    }
}));


AMDI({ cmd: "kick", desc: Lang.kickDESC, example: Lang.kickEXA, type: "admin", react: "🚫" }, (async (amdiWA) => {
    let { allowedNumbs, botNumberJid, groupMetadata, input, inputObj, isReply, isUSERExists, reply, sendText } = amdiWA.msgLayout

    if (!isReply && !input) return reply(Lang.needUSER, "❓")
    
    let taggedJid;
    if (taggedJid = amdiWA.msg.message.extendedTextMessage.contextInfo.participant) {
        taggedJid = amdiWA.msg.message.extendedTextMessage.contextInfo.participant;                
    } else {
        taggedJid = amdiWA.msg.message.extendedTextMessage.contextInfo.mentionedJid[0];
    }
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
        await sendText(`*@${taggedJid.split('@')[0]}, ${reason}*`, {reactEmoji: '👋🏻', mentionJIDS: [taggedJid]});
        return await amdiWA.web.groupParticipantsUpdate(amdiWA.clientJID, [taggedJid], "remove");
    } catch {
        return reply('Failed! ❌')
    }
}));


AMDI({ cmd: "invite", desc: Lang.inviteDESC, type: "admin", react: "🫱🏻‍🫲🏻" }, (async (amdiWA) => {
    let { isBotGroupAdmin, reply } = amdiWA.msgLayout;
    if (!isBotGroupAdmin) return reply(Lang.notAdmin);
    const invite_code = await amdiWA.web.groupInviteCode(amdiWA.clientJID);
    return await reply(`\nhttps://chat.whatsapp.com/${invite_code}\n`);
}));