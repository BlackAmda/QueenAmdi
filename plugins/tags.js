const { AMDI, allParticipants, isGroup, Language } = require('queen_amdi_core/dist/scripts')
const Lang = Language.getString('tags');

AMDI({ cmd: "tagwa", desc: "Tag official whatsapp.", type: "primary", react: "💃🏻" }, (async (amdiWA) => {
    let { sendText } = amdiWA.msgLayout;
    return await sendText(`Whatsapp : @0`, {mentionJIDS: ['0@s.whatsapp.net'], quoted: true, reactEmoji: "✅"});
}));

AMDI({ cmd: "dialog", cmdHideInMenu: true, type: "primary" }, (async (amdiWA) => {
    let { sendText } = amdiWA.msgLayout;
    return await sendText(`Dialog Axiata : @94777678678`, {mentionJIDS: ['94777678678@s.whatsapp.net'], quoted: true, reactEmoji: "✅"});
}));

AMDI({ cmd: "mobitel", cmdHideInMenu: true, type: "primary" }, (async (amdiWA) => {
    let { sendText } = amdiWA.msgLayout;
    return await sendText(`Mobitel : @94711755777`, {mentionJIDS: ['94711755777@s.whatsapp.net'], quoted: true, reactEmoji: "✅"});
}));

AMDI({ cmd: "hutch", cmdHideInMenu: true, type: "primary" }, (async (amdiWA) => {
    let { sendText } = amdiWA.msgLayout;
    return await sendText(`Hutch : @94788777111`, {mentionJIDS: ['94788777111@s.whatsapp.net'], quoted: true, reactEmoji: "✅"});
}));

AMDI({ cmd: "tagall", desc: Lang.tagallDESC, example: Lang.tagallEX, type: "primary", react: "🏷️" }, (async (amdiWA) => {
    let { allGroupMembers, allGroupParticipants, isAllowedNumb, footerTXT, groupAdmins, input, isReply, isGroupAdmin, replied_text, sendText } = amdiWA.msgLayout;

    if (isGroupAdmin || isAllowedNumb || amdiWA.fromMe) {
        if (!input && !isReply && !replied_text) {
            adminMSG = '';
            groupAdmins.forEach(data => {
                adminMSG += '║ 👑 @' + data.split('@')[0] + '\n'; 
            });
    
            memberMSG = '';
            allGroupMembers.forEach(data => {
                memberMSG += '║ 👤 @' + data.split('@')[0] + '\n'; 
            });
            const allTAGMSG = `╔════════════════\n║ *📧 Group Participants 📧*\n║ \n${adminMSG}${memberMSG}╚════════════════\n${footerTXT}`
            return await sendText(allTAGMSG, { mentionJIDS: allGroupParticipants, reactEmoji: "✅" });
        };
    
        let textMSG;
        if (!input) { textMSG = replied_text }
        else { textMSG = input };
        return await sendText(textMSG, { mentionJIDS: allGroupParticipants });
    }
}));


AMDI({ cmd: "taggrp", desc: Lang.TAGGRPDESC, example: Lang.TAGGRPEX, type: "profile", react: "🏷️" }, (async (amdiWA) => {
    let { input, isReply, react, reply, replied_text, sendText } = amdiWA.msgLayout;

    if (!input && !isGroup(input)) return await reply(Lang.GIVEMEJID, "❓");
    if (!isReply && !replied_text) return await reply(Lang.GIVEMETEXT, "❓");

    try {
        const groupMetaData = await amdiWA.web.groupMetadata(input);
        const groupMembers = allParticipants(groupMetaData.participants);
        await sendText(replied_text, { jid: input, mentionJIDS: groupMembers });
        return await react("✔️");
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    }
}));