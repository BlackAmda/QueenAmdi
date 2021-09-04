/*
Copyright (C) 2021 Queen Amdi.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Queen Amdi - Black Amda
මේක copy කරන උබේ අම්මා වේස බඩුවක්. මකබැවියන් copy ගහන හුට්ටිගේ පුතා.
මේක උස්සන් ගියොත් උබ රෙනකොට වැටිච්ච අවජාතකයෙක් - COnfirmed!!
*/


//Basic requirements
const Amdi = require('../events');
const QueenAmdi = require('queenamdi-public-1');
const {MessageType} = require('@adiwajshing/baileys');
const got = require("got");

// Config Checker
const Config = require('../config');
let LOL = Config.WORKTYPE == 'public' ? false : true

//Language
const Language = require('../language');
const Lang = Language.getString('font');

Amdi.applyCMD({ pattern: 'fancy ?(.*)', fromMe: LOL, desc: Lang.FONT_DESC,  deleteCommand: false}, async (message, match) => {
    const name = match[1]

    if (name === 'xx') return await message.reply(Lang.NEED_WORD);
    var payload = await QueenAmdi.fancy(name)
   
    await message.client.sendMessage(message.jid, '*✨ Queen Amdi Fancy Text ✨*' + '\n\n' + payload.cool, MessageType.text, {quoted: message.data});
})

