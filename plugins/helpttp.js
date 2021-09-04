/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('scrapers');

const sin = `💠🧩 ● *විවිධ TTP ලැයිස්තුව* ● 🧩💠\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n` + 
`⚙️විධානය: *.attp*\nℹ️විස්තර: සජීවිකරණ දේදුනු text ස්ටිකරය.\n\n` + 
`⚙️විධානය: *.ttpwater*\nℹ️විස්තර: නිල් text ස්ටිකරය. _[Sinhala font supported]_\n\n` + 
`⚙️විධානය: *.ttppink*\nℹ️විස්තර: රෝස text ස්ටිකරය. _[Sinhala font supported]_\n\n` + 
`⚙️විධානය: *.ttpblack*\nℹ️විස්තර: කළු text ස්ටිකරය. _[Sinhala font supported]_\n\n` + 
`⚙️විධානය: *.ttpf*\nℹ️විස්තර: සිහින් හැඩැති text ස්ටිකරය. _[Sinhala font supported]_\n\n` + 
`⚙️විධානය: *.ttpsm*\nℹ️විස්තර: Smurfs style text ස්ටිකරය. _[Sinhala font supported]_\n\n` + 
`⚙️විධානය: *.ttpelec*\nℹ️විස්තර: විදුලි text ස්ටිකරය. _[Sinhala font supported]_\n\n` + 
`⚙️විධානය: *.ttphigh*\nℹ️විස්තර: සජීවිකරණය highlight කළ text ස්ටිකරය. _[Sinhala font supported]_\n\n` + 
`⚙️විධානය: *.ttpmem*\nℹ️විස්තර: සජීවිකරණය කළ රතු text ස්ටිකරය. _[Sinhala font supported]_\n\n` + 
`Check official website : https://www.amdaniwasa.com/`

const eng = `💠🧩 ● *Custom TTP List* ● 🧩💠\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n` + 
`⚙️Command: *.attp*\nℹ️Description: Animated rainbow text sticker.\n\n` + 
`⚙️Command: *.ttpwater*\nℹ️Description: Blue text sticker. _[Sinhala font supported]_\n\n` + 
`⚙️Command: *.ttppink*\nℹ️Description: Pink text sticker. _[Sinhala font supported]_\n\n` + 
`⚙️Command: *.ttpblack*\nℹ️Description: Black text sticker. _[Sinhala font supported]_\n\n` + 
`⚙️Command: *.ttpf*\nℹ️Description: Fluffy style text sticker. _[Sinhala font supported]_\n\n` + 
`⚙️Command: *.ttpsm*\nℹ️Description: Smurfs style text sticker. _[Sinhala font supported]_\n\n` + 
`⚙️Command: *.ttpelec*\nℹ️Description: Electrical text sticker. _[Sinhala font supported]_\n\n` + 
`⚙️Command: *.ttphigh*\nℹ️Description: Animated highlight text sticker. _[Sinhala font supported]_\n\n` + 
`⚙️Command: *.ttpmem*\nℹ️Description: Animated red text sticker. _[Sinhala font supported]_\n\n` + 
`Check official website : https://www.amdaniwasa.com/`

if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        Amdi.applyCMD({pattern: 'helpttp', fromMe: true,  deleteCommand: false, desc: Lang.ATTP_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        Amdi.applyCMD({pattern: 'helpttp', fromMe: false, desc: Lang.ATTP_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }
}

if (Config.LANG == 'SI') {
    if (Config.WORKTYPE == 'private') {
        Amdi.applyCMD({pattern: 'helpttp', fromMe: true,  deleteCommand: false, desc: Lang.ATTP_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,sin, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        Amdi.applyCMD({pattern: 'helpttp', fromMe: false, desc: Lang.ATTP_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,sin, MessageType.text,{quoted: message.data});
        }));
    }
}