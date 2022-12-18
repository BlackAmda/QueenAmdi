/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.3
* @file  misc.js - QueenAmdi miscellaneous commands

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, amdiDB, currency, CurrencyConverter, _default, Language, Lyrics, news } = require('queen_amdi_core/dist/scripts')
const axios = require("axios")
let { img2url } = require('@blackamda/telegram-image-url')
let currencyConverter = new CurrencyConverter()
const { writeFile } = require('fs/promises');
const fs = require('fs');
const got = require('got');
const FormData = require('form-data');
const stream = require('stream');
const translatte = require('translatte');
const {promisify} = require('util');
const { getSettings } = amdiDB.settingsDB;
const pipeline = promisify(stream.pipeline);
const Lang = Language.getString('misc');


AMDI({ cmd: "currency", desc: Lang.currencyDesc, example: Lang.currencyEx, type: "primary", react: "💱" }, (async (amdiWA) => {
    let { input, inputObj, prefix , reply, sendListMsg } = amdiWA.msgLayout

    if (!input) return reply(Lang.giveValidAmount, "❓")
    const isValid = await currency.isValidCurrency(input);
    if (!isValid && inputObj[0] !== 'convert') return reply(Lang.giveValidAmount, "❓")

    var arrayLength = currency.currenciesList.length;
    var currenciesList = ''
    for (var i = 0; i < arrayLength; i++) {
        currenciesList += '▪️ ' + currency.currenciesList[i] + '\n'
    }

    var listInfo = {}
    listInfo.title = Lang.currencyTITLE
    listInfo.text = Lang.currencyTXT + currenciesList
    listInfo.buttonTXT = 'Select currency code'  

    if (inputObj[0] === 'convert') {
        const amount = Number(inputObj[1])
        const from = inputObj[2]
        const to = inputObj[3]
        const converted = await currencyConverter.from(from).to(to).amount(amount).convert()
        return await reply('*' + to.toUpperCase() + ' ' + converted + '*', "✅")
    } else {
        const currencyINPUT = await currency.currencyDATA(input)
        var rows = await currency.currencyMENU(prefix, currencyINPUT)
        const sections = [{ title: "Currency Code List", rows: rows }]
        return await sendListMsg(listInfo, sections);
    }
}));


AMDI({ cmd: "img2url", desc: Lang.img2urlDesc, type: "primary", react: "🔗" }, (async (amdiWA) => {
    let { clearMedia, downloadMedia, isMedia, isTaggedImage, reply, react } = amdiWA.msgLayout;

    const filename = await downloadMedia();
    if ((isMedia && (amdiWA.msg.message.imageMessage || filename.ext == 'png')) || isTaggedImage) {
        await react("⬇️", amdiWA.msg)
        const imgURL = await img2url(filename.file)
        await react("✔️", amdiWA.msg)
        await reply(`\n${imgURL}\n`);
    } else {
        await reply(Lang.needimage);
    }
    return clearMedia(filename.file);
}));


AMDI({ cmd: "lyrics", desc: Lang.LY_DESC, type: "primary", react: "🎼" }, (async (amdiWA) => {
    let { footerTXT, input, reply, sendImage } = amdiWA.msgLayout

    if (!input) return reply(Lang.NEED_TITLE, "❓")

    try {
        const lyricdata = await Lyrics(input);
        var media = await axios.get(lyricdata.thumb, {responseType: 'arraybuffer'})
        var PIC = Buffer.from(media.data)
        return await sendImage(PIC, {quoted: true, caption: lyricdata.lirik + '\n\n' + footerTXT})
    } catch (e) {
        console.log(e);
        return reply(Lang.NO_RESULT, "❌");
    }
}));


AMDI({ cmd: "removebg", desc: Lang.REMOVEBG_DESC, type: "primary", react: "✂️" }, (async (amdiWA) => {
    let { clearMedia, downloadMedia, isMedia, isTaggedImage, react, reply, sendDocument } = amdiWA.msgLayout

    const RBG_API = await getSettings('RBG_API');
    if (!RBG_API.input) return reply(Lang.NO_API_KEY, "🗝️");

    if (!isMedia && !isTaggedImage) return reply(Lang.NEED_PHOTO, "❓");

    await react("✂️");
    const filename = await downloadMedia();

    var form = new FormData();
    form.append('image_file', fs.createReadStream(filename.file));
    form.append('size', 'auto');

    var rbg = await got.stream.post('https://api.remove.bg/v1.0/removebg', {
        body: form,
        headers: {
            'X-Api-Key': RBG_API.input
        }
    }); 
    await pipeline(rbg, fs.createWriteStream('rbg.png'));
    await sendDocument(fs.readFileSync('rbg.png'), { quoted: true, fileName: 'QueenAmdi.png', mimetype: 'image/png' })
    await react("✔️");
    fs.unlinkSync('rbg.png');
    return clearMedia(filename.file);
}));


/**
 * ! temporary removed from the bot
AMDI({ cmd: "news", desc: Lang.NEWSDESC, type: "primary", react: "📰" }, (async (amdiWA) => {
    let { input, prefix, sendImage, sendListMsg, todayDATE } = amdiWA.msgLayout

    if (input) {
        const getnews = await news.getnews(input);
        return await sendImage({url: getnews.thumb }, {quoted: true, caption: `*${getnews.title}*\n[${getnews.data}]\n\n${getnews.description}`, reactEmoji: "🗞️"})
    }

    var listInfo = {}
    listInfo.title = Lang.NEWSLISTTITLE.format(todayDATE())
    listInfo.text = Lang.NEWSTEXT
    listInfo.buttonTXT = 'default'  

    const newsSection = await news.newslist(prefix, Lang);
    return await sendListMsg(listInfo, newsSection);
}));*/


AMDI({ cmd: ["trt", "translate"], desc: Lang.TRTDESC, example: '.trt from_code/to_code', type: "primary", react: "🔠" }, (async (amdiWA) => {
    let { input, isReply, reply, replied_text } = amdiWA.msgLayout

    if (!isReply) return await reply(Lang.NEED_WORD, "❓");

    if (input && input.includes('/')) {
        try {
            const code = input.split('/');
            const translated = await translatte(replied_text, {from: code[0], to: code[1]});
            return await reply(translated.text);
        } catch (e) {
            console.log(e);
            return await reply("Error".fetchError(e), "❌", 1);
        }
    } else {
        return await reply(Lang.NEED_LANG.format(_default.langCodes), "❓");
    }
}));

AMDI({ cmd: "tkinfo", desc: "Scarp tk info", react: "💃🏻", type: "primary" }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout

    return await reply("Coming soon..\n\nඕම ඉන්ඩ ඒක හදලා නෑ තාම");
}));


AMDI({ cmd: "script", desc: "Queen Amdi deploy site info", react: "💃🏻", type: "primary" }, (async (amdiWA) => {
    let { sendText } = amdiWA.msgLayout

    const text = 
    `*🌐 Queen Amdi v4 Official Website💃🏻♥️*

    ✅ Deploy Website:
    https://amdaniwasa.com

    👥 Official beta test group: 
    https://chat.whatsapp.com/Kk9FcrtGYzX1xzky4b1aCJ

    🧰 Github:
    https://github.com/BlackAmda/QueenAmdi

    👨🏻‍💻 Developer:
    https://github.com/BlackAmda

    ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀ.ɴ.ᴛᴇᴄʜ 🐝
    `
    return await sendText(text, {ExAdReply: "Default", quoted: "WhatsApp"})
}));


AMDI({ cmd: "device", desc: Lang.DEVICEDESC, type: "profile", react: "📟"}, (async (amdiWA) => {
    let { checkDevice, isReply, reply, sendText, taggedJid } = amdiWA.msgLayout;

    if (!isReply) return reply(Lang.NEED_REPLY);

    const msgDevice = checkDevice(amdiWA.msg);
    return await sendText(`*@${taggedJid.split('@')[0]} is using :* ${msgDevice} Whatsapp`, {mentionJIDS: [taggedJid], quoted: true});
}));