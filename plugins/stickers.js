/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.0
* @file  stickers.js - QueenAmdi sticker maker

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { downloadContentFromMessage } = require("@adiwajshing/baileys");
const { AMDI, amdiDB, Language, sticker } = require('../assets/scripts')
const { getSettings } = amdiDB.settingsDB
require('dotenv').config();
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const { writeFile } = require('fs/promises');
const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}` };
const Lang = Language.getString('stickers');

AMDI({ cmd: "sticker", desc: Lang.stickerDesc, example: Lang.stickEx, type: "primary", react: "🖼️" }, (async (amdiWA) => {
    const { reply, deleteKEY, reply_message, isMedia, isTaggedImage, isTaggedVideo, isTaggedSticker } = amdiWA.msgLayout;

    var packName = await sticker.packNAME(amdiWA);
    var authorName = await sticker.authorNAME(amdiWA);

    if ((isMedia && !amdiWA.msg.message.videoMessage || isTaggedImage)) {
        let downloadFilePath;
        if (amdiWA.msg.message.imageMessage) {
            downloadFilePath = amdiWA.msg.message.imageMessage;
        } else {
            downloadFilePath = reply_message.imageMessage;
        }
        const stream = await downloadContentFromMessage(downloadFilePath, 'image');
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        const media = getRandom('.png');
        await writeFile(media, buffer);
        var process = await reply(Lang.makingStic);
        await sticker.makeSticker(amdiWA, media, packName, authorName);
        return await deleteKEY(process.key);
    } else if ((isMedia && amdiWA.msg.message.videoMessage.seconds < 11 || isTaggedVideo && reply_message.videoMessage.seconds < 11)) {
        let downloadFilePath;
        if (amdiWA.msg.message.videoMessage) {
            downloadFilePath = amdiWA.msg.message.videoMessage;
        } else {
            downloadFilePath = reply_message.videoMessage;
        }
        const stream = await downloadContentFromMessage(downloadFilePath, 'video');
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        const media = getRandom('.mp4');
        await writeFile(media, buffer);
        var process = await reply(Lang.makingStic);
        await sticker.animateSticker(amdiWA, media, packName, authorName);
        return await deleteKEY(process.key);
    } else if (isTaggedSticker) {
        try {
            let downloadFilePath;
            downloadFilePath = reply_message.stickerMessage;
            let isAnimated = downloadFilePath.isAnimated;
            const stream = await downloadContentFromMessage(downloadFilePath, 'sticker');
            let buffer = Buffer.from([])
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }
            const media = getRandom('.webp');
            await writeFile(media, buffer);
            var process = await reply(Lang.changPack);
            await sticker.changeINFO(amdiWA, media, packName, authorName, isAnimated)
            return await deleteKEY(process.key);
        } catch (err) {
            console.log(err);
        }
    }
}));

AMDI({ cmd: "imagestic", desc: Lang.imgStic, type: "primary", react: "🔁" }, (async (amdiWA) => {
    let { footerTXT, isMedia, isTaggedSticker, reply } = amdiWA.msgLayout;

    const captionDB = await getSettings('CAPTION')
    let caption = captionDB.input == undefined ? footerTXT : captionDB.input

    if ((isMedia && !amdiWA.msg.message.stickerMessage.isAnimated || isTaggedSticker)) {
        let downloadFilePath;
        if (amdiWA.msg.message.stickerMessage) {
            downloadFilePath = amdiWA.msg.message.stickerMessage;
        } else {
            downloadFilePath = amdiWA.msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage;
        }
        const stream = await downloadContentFromMessage(downloadFilePath, 'image');
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        const media = getRandom('.jpeg');
        await writeFile(media, buffer)
        ffmpeg(`./${media}`)
            .fromFormat("webp_pipe")
            .save("result.png")
            .on("error", (err) => {
                return reply(Lang.nonAnim);
            })
            .on("end", () => {
                (async () => {
                    var process = await amdiWA.web.sendMessage(amdiWA.clientJID, { text: Lang.imgsticProc }, { quoted: (amdiWA.fromMe === false ? amdiWA.msg : '') });
                    await amdiWA.web.sendMessage(amdiWA.clientJID, { image: fs.readFileSync("result.png"), caption: caption }, {  mimetype: 'image/png', quoted: (amdiWA.fromMe === false ? amdiWA.msg : '') });
                    try {
                        fs.unlinkSync(media)
                        fs.unlinkSync("result.png");
                    } catch { }
                    await amdiWA.web.sendMessage(amdiWA.clientJID, { delete: process.key })
                    //return await react("✅", amdiWA.msg)
                })();
            });
    } else {
        return await reply(Lang.nonAnim);
    }
}));