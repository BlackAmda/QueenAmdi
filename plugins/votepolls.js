/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.8
* @file  votepolls.js - QueenAmdi vote poll messages

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, Language } = require('queen_amdi_core/dist/scripts')
const Lang = Language.getString('votepolls');

AMDI({ cmd: "vote", desc: Lang.voteDESC, example: Lang.voteEX, type: "admin", react: "📊" }, (async (amdiWA) => {
    let { input, reply, sendVotePoll, footerTXT } = amdiWA.msgLayout

    if (!input && !input.includes('{')) return await reply(Lang.noINPUT, "❗");

    const text = input.split('{')[0]
    const optINPUT = input.split('{')[1].split('}')[0]
    const isEMOJI = input.split('}')[1].replace(/ /g, "")
    //let reactEmoji = isEMOJI == '' ? "☑️" : isEMOJI     ----FUTURE UPDATES

    return await sendVotePoll(text, optINPUT);
}));