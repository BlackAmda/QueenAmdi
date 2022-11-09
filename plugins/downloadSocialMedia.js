/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.0
* @file  downloadSocialMedia.js - QueenAmdi Social Media downloaders

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, amdiDB, downloaders, igDownloader, Language, tiktok } = require('../assets/scripts')
const { Facebook } = downloaders
const { getSettings } = amdiDB.settingsDB
const axios = require('axios');
const Lang = Language.getString('downloadSocialMedia');

AMDI({ cmd: "fb", desc: Lang.fbDesc, example: Lang.fbEXA, type: "download", react: "🎥" }, (async (amdiWA) => {
    let { footerTXT, input, isLINK, react, reply, sendVideo } = amdiWA.msgLayout;

    if (!isLINK(input)) return reply(Lang.needlink, '❓');

    let fbURL;
    await axios(input).then((response) => { fbURL = response.request._redirectable._currentUrl })
    .then(async () => {
        const res = await Facebook.getVideo(`${fbURL}`);
        if (res.data.hasError == false) {
            const captionDB = await getSettings('CAPTION')
            let caption = captionDB.input == undefined ? footerTXT : captionDB.input
            await react("⬇️");
            if (res.data.body.videoHD) {
                await react("⬆️");
                await sendVideo({ url: res.data.body.videoHD }, {caption: `Quality: *HD*\n${caption}`, quoted: true});
                return await react("✔️");
            } else {
                await react("⬆️");
                await sendVideo({ url: res.data.body.video }, {caption: `Quality: *SD*\n${caption}`, quoted: true});
                return await react("✔️");
            }
        } else if (res.data.hasError == true) {
            return reply(res.data.errorMessage, "❌")
        }
    })
    .catch((error) => { return reply("Error".fetchError(error), "❌", 1); });
}));


AMDI({ cmd: "ig", desc: Lang.igDesc, example: Lang.igEXA, type: "download", react: "🌀" }, (async (amdiWA) => {
    let { footerTXT, input, isLINK, react, reply, sendImage, sendVideo } = amdiWA.msgLayout;

    if (!isLINK(input)) return reply(Lang.needlink, '❓');
    if (!/^((https|http)?:\/\/(?:www\.)?instagram\.com\/(p|tv|reel|stories)\/([^/?#&]+)).*/i.test(input)) return reply(Lang.needvalidIG);
    
    await react("⬇️");
    try {
        var igPost = await igDownloader(input);
        if (!igPost.length) return await reply(Lang.notfound, "❌");

        await react("⬆️");
        igPost.forEach(async (data) => {
            if (data.type === 'image') {await sendImage({url: data.url}, {caption: footerTXT, quoted: true});}
            else if (data.type === 'video') {await sendVideo({url: data.url}, {caption: footerTXT, quoted: true});}
        });
        return await react("✔️");
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    }
}));