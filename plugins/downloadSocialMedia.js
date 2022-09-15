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

const { AMDI, amdiDB, downloaders, igDownloader, Language } = require('../assets/scripts')
const { Facebook } = downloaders
const { getSettings } = amdiDB.settingsDB
const axios = require('axios');
const Lang = Language.getString('downloadSocialMedia');

AMDI({ cmd: "fb", desc: Lang.fbDesc, example: Lang.fbEXA, type: "download", react: "🎥" }, (async (amdiWA) => {
    let { deleteKEY, footerTXT, input, isLINK, reply, sendVideo } = amdiWA.msgLayout;

    if (!isLINK(input)) return reply(Lang.needlink, '❓');

    let fbURL;
    await axios(input).then((response) => {
        fbURL = response.request._redirectable._currentUrl
    }).then(() => {
        (async () => {
            const res = await Facebook.getVideo(`${fbURL}`);
            if (res.data.hasError == false) {
                var FB_DL_SET = await getSettings("FB_DL");
                var FB_UP_SET = await getSettings("FB_UP");
                const captionDB = await getSettings('CAPTION')
                let caption = captionDB.input == undefined ? footerTXT : captionDB.input
                let down_fb = FB_DL_SET.input == undefined ? Lang.fb_DL : FB_DL_SET.input
                let up_fb = FB_UP_SET.input == undefined ? Lang.fb_UP : FB_UP_SET.input
                const dl = await reply(down_fb)
                if (res.data.body.videoHD) {
                    await deleteKEY(dl.key);
                    const up = await reply(up_fb)
                    await sendVideo({ url: res.data.body.videoHD }, {caption: `Quality: *HD*\n${caption}`, quoted: true});
                    return await deleteKEY(up.key);
                } else {
                    await deleteKEY(dl.key);
                    const up = await reply(up_fb)
                    await sendVideo({ url: res.data.body.video }, {caption: `Quality: *SD*\n${caption}`, quoted: true});
                    return await deleteKEY(up.key);
                }
            } else if (res.data.hasError == true) {
                return reply(res.data.errorMessage, "❌")
            }
        })();
    });
}));


AMDI({ cmd: "ig", desc: Lang.igDesc, example: Lang.igEXA, type: "download", react: "🌀" }, (async (amdiWA) => {
    let { deleteKEY, footerTXT, input, isLINK, reply, sendVideo } = amdiWA.msgLayout;

    if (!isLINK(input)) return reply(Lang.needlink, '❓');

    if (!/^((https|http)?:\/\/(?:www\.)?instagram\.com\/(p|tv|reel|stories)\/([^/?#&]+)).*/i.test(input)) return reply(Lang.needvalidIG);

    var ig_DL_SET = await getSettings("IG_DL");
    var ig_UP_SET = await getSettings("IG_UP");
    let down_ig = ig_DL_SET.input == undefined ? Lang.ig_DL : ig_DL_SET.input
    let up_ig = ig_UP_SET.input == undefined ? Lang.ig_UP : ig_UP_SET.input
    var igvideo = await igDownloader(input)
    console.log(igvideo)
    if (!igvideo.length) return await reply(Lang.notfound, "❌");
    const dl = await reply(down_ig);
    await deleteKEY(dl.key);
    for (let ress of igvideo) {
        const up = await reply(up_ig)
        await sendVideo(ress.result, {caption: footerTXT, quoted: true});
        return await deleteKEY(up.key);
    }
}));