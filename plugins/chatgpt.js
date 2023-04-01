/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.7
* @file  chatgpt.js - ChatGPT 3.5 - From QueenAmdi

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, gpt_model } = require('queen_amdi_core/dist/scripts')

AMDI({ cmd: ["gpt", "chatgpt", "openai"], desc: "Chat-GPT 3.5 turbo text model.", type: "profile", react: "💬" }, (async (amdiWA) => {
    let { footerTXT, input, reply } = amdiWA.msgLayout;

    try {
        if (!input) return await reply("*Ask something!*");
        const data = gpt_model()

        const text = `${data.ai_response}`
        return await reply(text);
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    }
}));