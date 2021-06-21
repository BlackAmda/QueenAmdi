/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');


if (Config.WORKTYPE == 'private') {
    Asena.addCommand({ pattern: 'ttp ?(.*)', fromMe: true, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://lolhuman.herokuapp.com/api/ttp2?apikey=e1ee2b3d3b00e58f2511ad95&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi' })
    }));
    Asena.addCommand({ pattern: 'attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://lolhuman.herokuapp.com/api/attp2?apikey=e1ee2b3d3b00e58f2511ad95&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
    Asena.addCommand({ pattern: 'glowttp ?(.*)', fromMe: true, desc: Lang.GLOW_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://lolhuman.herokuapp.com/api/textprome/neon?apikey=e1ee2b3d3b00e58f2511ad95&text=' + uri, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi' })
    }));
}
else if (Config.WORKTYPE == 'public') {
    Asena.addCommand({ pattern: 'ttp ?(.*)', fromMe: false, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://lolhuman.herokuapp.com/api/ttp2?apikey=e1ee2b3d3b00e58f2511ad95&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi' })
    }));
    Asena.addCommand({ pattern: 'attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://lolhuman.herokuapp.com/api/attp2?apikey=e1ee2b3d3b00e58f2511ad95&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
    Asena.addCommand({ pattern: 'glowttp ?(.*)', fromMe: false, desc: Lang.GLOW_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://lolhuman.herokuapp.com/api/textprome/neon?apikey=e1ee2b3d3b00e58f2511ad95&text=' + uri, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi' })
    }));
}
