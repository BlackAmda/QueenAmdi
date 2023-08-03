/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.8
* @file  downloadYT.js - QueenAmdi YouTube downloader

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, Language, youtubeDL } = require('queen_amdi_core/dist/scripts')
const { songList, videoList, sendYTaudio, sendYTdocument, sendYT720, sendYT480, sendYT360 } = youtubeDL
const yts = require('yt-search');
const Lang = Language.getString('downloadYT');

const findYT = async (name) => {
    const search = await yts(name)
    return search.all;
}

AMDI({ cmd: ["song", "yta", "mp3"], desc: Lang.songDesc, example: Lang.songExa, type: "download", react: "🎵" }, (async (amdiWA) => {
    let { input, prefix, reply, sendButtonsMsg, sendListMsg, urlRegexYT } = amdiWA.msgLayout;

    if (!input) return reply(Lang.needYTLink, '❓');
    if (input.includes('playlist')) return reply(Lang.noPL);

    let execYT = urlRegexYT(input);
    if (execYT.isYT === "LINK_!YT") return reply(Lang.needYTLink, '❓');
    const ytVidList = await findYT(input);

    if (!execYT.isYT) {
        var listInfo = {}
        listInfo.title = Lang.songListTitle
        listInfo.text = Lang.songListTXT
        listInfo.buttonTXT = 'Choose a song'

        try {
            let isFoundYTS = false;
            if (!isFoundYTS) { // First try in YTS package
                const sections = await songList(prefix, ytVidList);
                isFoundYTS = true;
                return await sendListMsg(listInfo, sections);
            }
            if (!isFoundYTS) { // Second try in YTS package
                const sections = await songList(prefix, ytVidList);
                isFoundYTS = true;
                return await sendListMsg(listInfo, sections);
            }
            if (!isFoundYTS) throw Error(Lang.noSearch)
        } catch (e) {
            console.log(e);
            return await reply(Lang.noSearch);
        }
    } else if (execYT.isYT) {
        const title = ytVidList[0] ? ytVidList[0].title : ''
        const ytDlTXT = `*🎶 Queen Amdi YT Downloader*\n\n📄 ${Lang.Title} ${title}`
        const buttons = [
            { type: "url", displayText: "Watch on YouTube", url: input },
            { type: "click", displayText: "🎶 Audio File", buttonCMD: `${prefix}ytdownload audio ${input}` },
            { type: "click", displayText: "📁 Document File", buttonCMD: `${prefix}ytdownload document ${input}` },
            { type: "click", displayText: "ℹ️ Video Info", buttonCMD: `${prefix}ytinfo ${input}` }
        ]
        return await sendButtonsMsg(buttons, { text: ytDlTXT, tagMsg: true, showURL: true });
    }
}));


AMDI({ cmd: ["video", "ytv", "mp4"], desc: Lang.videoDesc, example: Lang.videoExa, type: "download", react: "🎞️" }, (async (amdiWA) => {
    let { input, prefix, reply, sendButtonsMsg, sendListMsg, urlRegexYT } = amdiWA.msgLayout;

    if (!input) return reply(Lang.needYTLink, '❓');
    if (input.includes('playlist')) return reply(Lang.noPL);

    let execYT = urlRegexYT(input);
    if (execYT.isYT === "LINK_!YT") return reply(Lang.needYTLink, '❓');
    const ytVidList = await findYT(input);

    if (!execYT.isYT) {
        var listInfo = {}
        listInfo.title = Lang.videoListTitle
        listInfo.text = Lang.videoListTXT
        listInfo.buttonTXT = 'Choose a video'

        try {
            let isFoundYTS = false;
            if (!isFoundYTS) { // First try in YTS package
                const sections = await videoList(prefix, ytVidList);
                isFoundYTS = true;
                return await sendListMsg(listInfo, sections);
            }
            if (!isFoundYTS) { // Second try in YTS package
                const sections = await videoList(prefix, ytVidList);
                isFoundYTS = true;
                return await sendListMsg(listInfo, sections);
            }
            if (!isFoundYTS) throw Error(Lang.noSearch)
        } catch (e) {
            console.log(e);
            return await reply(Lang.noSearch);
        }
    } else if (execYT.isYT) {
        const title = ytVidList[0] ? ytVidList[0].title : ''
        const ytDlTXT = `*🎞️ Queen Amdi YT Downloader*\n\n📄 ${Lang.Title} ${title}`
        const buttons = [
            { type: "url", displayText: "Watch on YouTube", url: input },
            { type: "click", displayText: "360p Quality", buttonCMD: `${prefix}ytdownload 360 ${input}` },
            { type: "click", displayText: "480p Quality", buttonCMD: `${prefix}ytdownload 480 ${input}` },
            { type: "click", displayText: "720p Quality", buttonCMD: `${prefix}ytdownload 720 ${input}` }
        ]
        return await sendButtonsMsg(buttons, { text: ytDlTXT, tagMsg: true, showURL: true });
    }
}));


AMDI({ cmd: "ytinfo", desc: Lang.YTINFO, type: "primary", react: "ℹ️" }, (async (amdiWA) => {
    let { input, reply, sendImage, urlRegexYT } = amdiWA.msgLayout;

    if (!input) return reply(Lang.needYTLink, '❓')
    if (input.includes('playlist')) return reply(Lang.noPL)

    let execYT = urlRegexYT(input);
    if (execYT.isYT === "LINK_!YT") return reply(Lang.needYTLink, '❓');

    const ytdlInfo = {};
    try {
        let ytVidInfo = await yts({ videoId: execYT.id[1] })
        try { like = ytVidInfo.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") } catch { like = '_Unable to get likes count_' }
        ytdlInfo.ytDlTXT = `📄 ${Lang.Title} ${ytVidInfo.title}\n\n` +
            `👁️ ${Lang.Views} ${ytVidInfo.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\n\n` +
            `👍🏻 ${Lang.Likes} ${like}\n\n` +
            `🎛️ ${Lang.Channel} ${ytVidInfo.author.name}\n\n` +
            `ℹ️ ${Lang.Category} ${ytVidInfo.genre}\n\n` +
            `📖 ${Lang.Description}\n${ytVidInfo.description}`
        try { ytdlInfo.thumb = ytVidInfo.image } catch { ytdlInfo.thumb = ytVidInfo.thumbnail }
    } catch (e) {
        console.log(e)
        const ytVidList = await findYT(input);
        ytdlInfo.ytDlTXT = `📄 ${Lang.Title} ${ytVidList[0].title}\n\n`
    }

    const image = ytdlInfo.thumb ? { url: ytdlInfo.thumb } : undefined;
    return await sendImage(image, { quoted: true, caption: ytdlInfo.ytDlTXT });
}));


AMDI({ cmd: "ytdownload", cmdHideInMenu: true, type: "download" }, (async (amdiWA) => {
    let { inputObj } = amdiWA.msgLayout;

    if (inputObj[0] === "audio") {
        return await sendYTaudio(amdiWA, inputObj[1])
    }

    if (inputObj[0] === "document") {
        return await sendYTdocument(amdiWA, inputObj[1])
    }

    if (inputObj[0] === "720") {
        return await sendYT720(amdiWA, inputObj[1])
    }

    if (inputObj[0] === "480") {
        return await sendYT480(amdiWA, inputObj[1])
    }

    if (inputObj[0] === "360") {
        return await sendYT360(amdiWA, inputObj[1])
    }
}));