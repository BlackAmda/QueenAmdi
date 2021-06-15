/* Copyright (C) 2020 TOXIC DEVIL

CODDED BY TOXIC DEVIL

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.
WhatsAsenaPublic - TOXIC DEVIL
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```👸💎 Hey There! I'm Online now. 😙```\n\n*Version:* ```v1.4 - Stable```\n\n*Developer:* ```Black Amda```\n\n*WhatsApp Support Group :* https://chat.whatsapp.com/Hkm79J2sapyLGD0rvRTfkq\n\n```Thank You For Using Queen Amdi💞```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright © 2021 | Queen Amdi*' })
     }
    }));
    
    Asena.addCommand({pattern: 'patch', fromMe: true, desc: Lang.PATCH_DESC}, (async (message, match) => {

        if (Config.PATCHNOTE == 'default') {
       
            await message.client.sendMessage(message.jid, '🇱🇰 ⬆️ ```Queen Amdi Patch Note – 1.4V``` ⬆️🇱🇰\n\n🆕 *New features :*\n╠◪ .barcode : *Added* text to barcode.\n╠◪ .pemoji : *Added* emoji to picture.\n╠◪ .lionlogo : *Added* lion logo maker.\n╠◪ .jokerlogo : *Added* joker logo maker.\n˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭\n⚙️ *Fixes :*\n╠◪ .ig <url> : Instagram downloader *fixed.*\n╠◪ .fb <url> : Facebook downloader *fixed.*\n╠◪ .sandwriting : Text to sand writing image *fixed.*\n╠◪ .cloud : Text to cloud writing image *fixed.*\n˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭\nCheck github : https://github.com/BlackAmda/QueenAmdi', MessageType.text);
    }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```👸💎 Hey There! I'm Online now. 😙```\n\n*Version:* ```v1.4 - Stable```\n\n*Developer:* ```Black Amda```\n\n*WhatsApp Support Group :* https://chat.whatsapp.com/Hkm79J2sapyLGD0rvRTfkq\n\n```Thank You For Using Queen Amdi💞```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright © 2021 | Queen Amdi*' })
     }
    }));
    
     Asena.addCommand({pattern: 'patch', fromMe: true, desc: Lang.PATCH_DESC}, (async (message, match) => {

        if (Config.PATCHNOTE == 'default') {
       
            await message.client.sendMessage(message.jid, '🇱🇰 ⬆️ ```Queen Amdi Patch Note – 1.4V``` ⬆️🇱🇰\n\n🆕 *New features :*\n╠◪ .barcode : *Added* text to barcode.\n╠◪ .pemoji : *Added* emoji to picture.\n╠◪ .lionlogo : *Added* lion logo maker.\n╠◪ .jokerlogo : *Added* joker logo maker.\n˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭\n⚙️ *Fixes :*\n╠◪ .ig <url> : Instagram downloader *fixed.*\n╠◪ .fb <url> : Facebook downloader *fixed.*\n╠◪ .sandwriting : Text to sand writing image *fixed.*\n╠◪ .cloud : Text to cloud writing image *fixed.*\n˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭ ˭\nCheck github : https://github.com/BlackAmda/QueenAmdi', MessageType.text);
    }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
