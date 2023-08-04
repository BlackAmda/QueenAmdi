/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.8
* @file  downloadSocialMedia.js - QueenAmdi Social Media downloaders

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, blackamda_API, _default, igDownloader, Language, tiktok, web_scrapers } = require('queen_amdi_core/dist/scripts')
const { fblogo } = _default
const { fbDownloader } = web_scrapers
const axios = require("axios")
const Lang = Language.getString('downloadSocialMedia');

AMDI({ cmd: ["fb", "facebook"], desc: Lang.fbDesc, example: Lang.fbEXA, type: "download", react: "🎥" }, (async (amdiWA) => {
    let { input, isFBurl, reply, sendButtonsMsg } = amdiWA.msgLayout;

    if (!isFBurl(input)) return reply(Lang.needlink, '❓');

    const fbdl_data = await fbDownloader(amdiWA);

    if (!fbdl_data.hd && !fbdl_data.sd) return await reply(Lang.notfound, "❌");
    const thumb = fbdl_data.thumbnail ? fbdl_data.thumbnail : fblogo
    return await sendButtonsMsg([fbdl_data.hd, fbdl_data.sd], { text: `🎥 *Facebook video downloader*\n\n\`\`\`${fbdl_data.title}\`\`\``, image: { url: thumb }, tagMsg: true, noTemplate: 1 });
}));


AMDI({ cmd: ["ig", "insta", "instagram"], desc: Lang.igDesc, example: Lang.igEXA, type: "download", react: "🌀" }, (async (amdiWA) => {
    let { footerTXT, input, isLINK, isIGurl, react, reply, sendImage, sendVideo } = amdiWA.msgLayout;

    if (!isLINK(input)) return reply(Lang.needlink, '❓');
    if (!isIGurl(input)) return reply(Lang.needvalidIG);

    await react("⬇️");
    try {
        var igPost = await igDownloader(input);
        if (!igPost.length) return await reply(Lang.notfound, "❌");
        if (!igPost[0].url) return await reply("Error".fetchError(igPost.type), "❌", 1);

        await react("⬆️");
        igPost.forEach(async (data) => {
            if (data.type === 'image') { await sendImage({ url: data.url }, { caption: footerTXT, quoted: true }); }
            else if (data.type === 'video') { await sendVideo({ url: data.url }, { caption: footerTXT, quoted: true }); }
        });
        return await react("✔️");
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    }
}));


AMDI({ cmd: ["tk", "tiktok"], desc: Lang.TKDESC, example: Lang.tkEXA, type: "download", react: "🏳️‍🌈" }, (async (amdiWA) => {
    let { input, prefix, reply, sendListMsg } = amdiWA.msgLayout;

    if (!input) return await reply(Lang.needlink, '❓');
    if (!input.includes('tiktok.com/')) return await reply(Lang.needlink, '❓');

    const tkData = await tiktok({ url: input });

    const TKText = `\`\`\`${tkData.video.signature}\`\`\`\n\n🎵 Music: ${tkData.audio.name}\n\n👨🏻‍🎤 Author: ${tkData.owner.name}\n\n👤 Username: ${tkData.owner.username}`

    const sections = [
        {
            title: "Tiktok Information",
            rows: [
                { title: "ℹ️ Tiktok Information", rowId: `${prefix}tkinfo ${input}` }
            ]
        },
        {
            title: "Tiktok Video",
            rows: [
                { title: "🔖 With Watermark", rowId: `${prefix}tkdl mark ${input}` },
                { title: "📼 No-Watermark", rowId: `${prefix}tkdl nomark ${input}` }
            ]
        },
        {
            title: "Tiktok Audio",
            rows: [
                { title: "🎶 Audio File", rowId: `${prefix}tkdl audio ${input}` },
                { title: "📁 Document File", rowId: `${prefix}tkdl doc ${input}` }
            ]
        }
    ]

    var listInfo = {}
    listInfo.title = "🎞️ Tiktok Downloader"
    listInfo.text = TKText
    listInfo.buttonTXT = "Download now"

    return await sendListMsg(listInfo, sections);
}));


AMDI({ cmd: ["mediafire", "mf", "mfire"], desc: Lang.MEDIAFIRE_DESC, type: "download", react: "🔥" }, (async (amdiWA) => {
    let { footerTXT, input, react, reply, sendDocument } = amdiWA.msgLayout;

    if (!input || !input.startsWith('https://www.mediafire.com/')) return await reply(Lang.NEED_MEDIAFIRE, "❓");

    try {
        await react("⬇️");
        const mfAPI = await blackamda_API("mediafire", `url=${input}`, amdiWA.botNumberJid);
        const response = await axios.get(mfAPI);
        const json = response.data

        if (json.status.error) return await reply("Error".fetchError([{ message: json.status.message }]), "❌", 1);
        if (json.size.isLarge) return await reply(Lang.OVER_WA_FILE);

        const caption = `${Lang.MF_TITLE}

    📁 File name: ${json.name}
    🎚️ Size: ${json.size}
    🆙 Uploaded At: ${json.uploadedAt}
    
${footerTXT}`

        await react("⬆️");
        await sendDocument({ url: json.dl_link }, { mimetype: json.mime, fileName: json.name, caption: caption, quoted: true })
            .then(async () => {
                return await react("✔️");
            });
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    }
}));