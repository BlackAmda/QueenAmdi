/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.8
* @file  _onTEXT.js - QueenAmdi on text commands

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, amdiChat, Language } = require('queen_amdi_core/dist/scripts')
const { semiAIchat } = amdiChat
const Lang = Language.getString('botCTRL');

AMDI({ onText: "Amdi", desc: Lang.AI_USAGE, example: Lang.AI_EXAMPLE, type: "primary", react: "🤖" }, (async (amdiWA) => {
    let { input, reply } = amdiWA.msgLayout

    if (!input) return await reply(`${Lang.AI_USAGE}\n\nExample: ${Lang.AI_EXAMPLE}`);
    await semiAIchat( amdiWA );
}));

AMDI({ onText: "ඇම්ඩි", desc: "AI Chat bot", type: "primary", react: "🤖", cmdHideInMenu: true }, (async (amdiWA) => {
    let { input, reply } = amdiWA.msgLayout

    if (!input) return await reply(`${Lang.AI_USAGE}\n\nExample: ${Lang.AI_EXAMPLE}`);
    await semiAIchat( amdiWA );
}));