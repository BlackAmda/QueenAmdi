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

const { AMDI, amdiDB, Language, sticker } = require('../assets/scripts')
const { getSettings } = amdiDB.settingsDB
const axios = require('axios');
require('dotenv').config();
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const { stringify } = require('querystring');
const Lang = Language.getString('stickers');


AMDI({ cmd: "sticker", desc: Lang.stickerDesc, example: Lang.stickEx, type: "primary", react: "🖼️" }, (async (amdiWA) => {
    const { clearMedia, react, reply, downloadMedia, reply_message, isMedia, isTaggedDocument, isTaggedImage, isTaggedOneTimeImage, isTaggedOneTimeVideo, isTaggedVideo, isTaggedSticker } = amdiWA.msgLayout;

    var packName = await sticker.packNAME(amdiWA);
    var authorName = await sticker.authorNAME(amdiWA);

    const media = await downloadMedia();
    if (!media.file) return await reply(Lang.errStic);

    try {
        await react("🔄️");
        if ((isMedia && !amdiWA.msg.message.videoMessage) || isTaggedImage || isTaggedDocument || isTaggedOneTimeImage) {
            await sticker.makeSticker(amdiWA, media.file, packName, authorName);
        } else if ((isTaggedOneTimeVideo) || (isMedia && amdiWA.msg.message.videoMessage.seconds < 11) || (isTaggedVideo && reply_message.videoMessage.seconds < 11)) {
            await sticker.animateSticker(amdiWA, media.file, packName, authorName);
        }
        if (isTaggedSticker) {
            await react("✏️");
            await sticker.changeINFO(amdiWA, media.file, packName, authorName, media.isAnimated);
        }
        return await react("✔️");
    } catch (e) { 
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    }
}));


AMDI({ cmd: "imagestic", desc: Lang.imgStic, type: "primary", react: "🔁" }, (async (amdiWA) => {
    let { downloadMedia, footerTXT, isTaggedSticker, react, reply, reply_message } = amdiWA.msgLayout;

    if (!isTaggedSticker) return reply(Lang.giveSTICKER, "❓");

    const captionDB = await getSettings('CAPTION')
    let caption = captionDB.input == undefined ? footerTXT : captionDB.input

    if (!reply_message.stickerMessage.isAnimated && isTaggedSticker) {
        await react("🔄️");
        const media = await downloadMedia();
        ffmpeg(`./${media.file}`)
            .fromFormat("webp_pipe")
            .save("result.png")
            .on("error", (err) => {
                console.log(err);
                return reply(`*Error:*\n${err.message}`);
            })
            .on("end", async () => {
                await amdiWA.web.sendMessage(amdiWA.clientJID, { image: fs.readFileSync("result.png"), caption: caption }, {  mimetype: 'image/png', quoted: (amdiWA.fromMe === false ? amdiWA.msg : '') });
                try {
                    fs.unlinkSync(media.file)
                    fs.unlinkSync("result.png");
                } catch { }
                return await react("✔️");
            });
    } else {
        return await reply(Lang.nonAnim);
    }
}));