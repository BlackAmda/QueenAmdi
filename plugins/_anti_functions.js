/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.2
* @file  _anti_functions.js - QueenAmdi anti-bad words, anti-links

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, amdiDB, antifunctions, Language  } = require('queen_amdi_core/dist/scripts')
const { getSettings } = amdiDB.settingsDB
const { getGrpSettings } = amdiDB.grpSetDB
const Lang = Language.getString('anti_functions')

AMDI({ onText: "all_words" }, (async (amdiWA, textMSG) => {
    let { isAllowedNumb, deleteKEY, isGroup, isGroupAdmin, isBotGroupAdmin, senderjid, sendText } = amdiWA.msgLayout;

    if (amdiWA.fromMe || !isGroup || !isBotGroupAdmin || isGroupAdmin || isAllowedNumb) return;

    const antibad = await getGrpSettings('ANTI_BAD_WORDS', amdiWA.clientJID);
    
    const ANTIBADMSG = await getSettings('ANTIBADMSG');
    let antiBADMSG = !ANTIBADMSG.input ? Lang.badwordkick : ANTIBADMSG.input

    if (antibad.input !== "false") {
        const isBadWord = await antifunctions.antiBad(amdiWA, textMSG);
        if (isBadWord && antibad.input == "kick") {
            await sendText(`@${senderjid.split('@')[0]}, ${antiBADMSG}`, {mentionJIDS: [senderjid]});
            return await amdiWA.web.groupParticipantsUpdate(amdiWA.clientJID, [senderjid], "remove");
        }
        else if (isBadWord && antibad.input == "deletemsg") {
            await sendText(`@${senderjid.split('@')[0]}, ${antiBADMSG}`, {mentionJIDS: [senderjid]});
            return await deleteKEY(amdiWA.msg.key);
        }
        else if (isBadWord && antibad.input == "deletekick") {
            await sendText(`@${senderjid.split('@')[0]}, ${antiBADMSG}`, {mentionJIDS: [senderjid]});
            await deleteKEY(amdiWA.msg.key);
            return await amdiWA.web.groupParticipantsUpdate(amdiWA.clientJID, [senderjid], "remove");
        }
    }
}));

