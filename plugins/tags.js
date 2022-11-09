const { text } = require('express');
const { AMDI, Language } = require('../assets/scripts')
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
    return await sendText(`Dialog Axiata : @94711755777`, {mentionJIDS: ['94711755777@s.whatsapp.net'], quoted: true, reactEmoji: "✅"});
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