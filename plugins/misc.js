/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.0
* @file  misc.js - QueenAmdi miscellaneous commands

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, currency, Language, Lyrics } = require('../assets/scripts')
const { downloadContentFromMessage } = require("@adiwajshing/baileys");
const axios = require("axios")
let { img2url } = require('@blackamda/telegram-image-url')
const { writeFile } = require('fs/promises');
const fs = require('fs');
const got = require('got');
const FormData = require('form-data');
const stream = require('stream');
const {promisify} = require('util');
const pipeline = promisify(stream.pipeline);
const Lang = Language.getString('misc');

const getFileName = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}` };


AMDI({ cmd: "currency", desc: Lang.currencyDesc, example: Lang.currencyEx, type: "primary", react: "💱" }, (async (amdiWA) => {
    let { input, prefix , reply, sendListMsg } = amdiWA.msgLayout

    if (!input) return reply(Lang.giveValidAmount, "❓")
    const isValid = await currency.isValidCurrency(input);
    if (!isValid) return reply(Lang.giveValidAmount, "❓")

    var arrayLength = currency.currenciesList.length;
    var currenciesList = ''
    for (var i = 0; i < arrayLength; i++) {
        currenciesList += '▪️ ' + currency.currenciesList[i] + '\n'
    }

    var listInfo = {}
    listInfo.title = Lang.currencyTITLE
    listInfo.text = Lang.currencyTXT + currenciesList
    listInfo.buttonTXT = 'Select currency code'  

    const currencyINPUT = await currency.currencyDATA(input)
    var rows = await currency.currencyMENU(prefix, currencyINPUT)
    const sections = [{ title: "Currency Code List", rows: rows }]
    return await sendListMsg(listInfo, sections);
}));


AMDI({ cmd: "img2url", desc: Lang.img2urlDesc, type: "primary", react: "🔗" }, (async (amdiWA) => {
    let { isMedia, isTaggedImage, reply, reply_message, react } = amdiWA.msgLayout;

    if (isMedia && isTaggedImage) {
        let downloadFilePath;
        if (amdiWA.msg.message.imageMessage) {
            downloadFilePath = amdiWA.msg.message.imageMessage;
        } else {
            downloadFilePath = reply_message.imageMessage;
        }

        await react("⬇️", amdiWA.msg)
        const stream = await downloadContentFromMessage(downloadFilePath, 'image');
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        const filename = getFileName('.png');
        await writeFile(filename, buffer);
        const imgURL = await img2url(filename)
        await react("✔️", amdiWA.msg)
        return await reply(`\n${imgURL}\n`);
    } else {
        return await reply(Lang.needimage);
    }
}));


AMDI({ cmd: "lyrics", desc: Lang.LY_DESC, type: "primary", react: "🎼" }, (async (amdiWA) => {
    let { footerTXT, input, reply, sendImage } = amdiWA.msgLayout

    if (!input) return reply(Lang.NEED_TITLE, "❓")

    try {
        const lyricdata = await Lyrics(input);
        var media = await axios.get(lyricdata.thumb, {responseType: 'arraybuffer'})
        var PIC = Buffer.from(media.data)
        return await sendImage(PIC, {quoted: true, caption: lyricdata.lirik + '\n\n' + footerTXT})
    } catch {
        return reply(Lang.NO_RESULT, "❌");
    }
}));


AMDI({ cmd: "removebg", desc: Lang.REMOVEBG_DESC, type: "primary", react: "✂️" }, (async (amdiWA) => {
    let { deleteKEY, isMedia, isTaggedImage, react, reply, reply_message, sendDocument } = amdiWA.msgLayout

    if (!process.env.REMOVE_BG_API) return reply(Lang.NO_API_KEY, "🗝️");

    if (isMedia && isTaggedImage) {
        let downloadFilePath;
        if (amdiWA.msg.message.imageMessage) {
            downloadFilePath = amdiWA.msg.message.imageMessage;
        } else {
            downloadFilePath = reply_message.imageMessage;
        }
    
        var load = await reply(Lang.RBGING);
        const stream = await downloadContentFromMessage(downloadFilePath, 'image');
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        const filename = getFileName('.png');
        await writeFile(filename, buffer);
    
        var form = new FormData();
        form.append('image_file', fs.createReadStream(filename));
        form.append('size', 'auto');
    
        var rbg = await got.stream.post('https://api.remove.bg/v1.0/removebg', {
            body: form,
            headers: {
                'X-Api-Key': process.env.REMOVE_BG_API
            }
        }); 
        await pipeline(rbg, fs.createWriteStream('rbg.png'));
        await sendDocument(fs.readFileSync('rbg.png'), { quoted: true, fileName: 'QueenAmdi.png', mimetype: 'image/png' })
        react("✔️", amdiWA.msg)
        return await deleteKEY(load.key);
    } else {
        return reply(Lang.NEED_PHOTO, "❓");
    }
}));