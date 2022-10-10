/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.0
* @file  downloadYT.js - QueenAmdi YouTube downloader

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, Language, youtubeDL } = require('../assets/scripts')
const { songList, videoList, sendYTaudio, sendYTdocument, sendYT720, sendYT480, sendYT360, shortVID, shortAUD } = youtubeDL
const ytdl = require('ytdl-core');
const yts = require('yt-search');
const Lang = Language.getString('downloadYT');

AMDI({ cmd: "song", desc: Lang.songDesc, example: Lang.songExa, type: "download", react: "🎵" }, (async (amdiWA) => {
    let { input, prefix, reply, sendButtonsMsg, sendListMsg } = amdiWA.msgLayout;

    if (!input) return reply(Lang.needYTLink, '❓')
    if (input.includes('playlist')) return reply(Lang.noPL)

    if (input.includes('shorts')) {
        const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
        const isYT = ytIdRegex.exec(input)
        if (!isYT) return reply(Lang.needYTLink, '❓')
        return await shortAUD(amdiWA, input);
    }

    if (!input.includes('https://')) {
        const findYT = async (name) => {
            const search = await yts(`${name}`)
            return search.all;
        }
        const ytVidList = await findYT(input)
        var listInfo = {}
        listInfo.title = Lang.songListTitle
        listInfo.text = Lang.songListTXT
        listInfo.buttonTXT = 'default'
        
        try {
            const sections = await songList(prefix, ytVidList);
            return await sendListMsg(listInfo, sections)
        } catch {
            await reply(Lang.noSearch)
        }
    }

    if (input.includes('https://')) {
        const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
        const isYT = ytIdRegex.exec(input)
        if (!isYT) return reply(Lang.needYTLink, '❓')

        let ytVidInfo = (await ytdl.getInfo(input)).videoDetails

        try {
            like = ytVidInfo.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        } catch {
            like = '_Like count hidden_'
        }

        const ytDlTXT = `📄 ${Lang.Title} ${ytVidInfo.title}\n\n` +
                        `👁️ ${Lang.Views} ${ytVidInfo.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\n\n` +
                        `👍🏻 ${Lang.Likes} ${like}\n\n` +
                        `🎛️ ${Lang.Channel} ${ytVidInfo.author.name}\n\n` +
                        `ℹ️ ${Lang.Category} ${ytVidInfo.category}\n\n` +
                        `📖 ${Lang.Description}\n${ytVidInfo.description}`

        try {
            var thumb = ytVidInfo.thumbnails[4].url
        } catch {
            var thumb = ytVidInfo.thumbnails[2].url
        }

        const buttons = [
            {type: "url", displayText: "Watch on YouTube", url: ytVidInfo.video_url},
            {type: "click", displayText: "🎶 Audio File", buttonCMD: `${prefix}ytdl audio ${ytVidInfo.video_url}`},
            {type: "click", displayText: "📁 Document File", buttonCMD: `${prefix}ytdl document ${ytVidInfo.video_url}`}
        ]
        return await sendButtonsMsg(buttons, {text: ytDlTXT, image: {url: thumb}, tagMsg: true, showURL: true});
    }
}));


AMDI({ cmd: "video", desc: Lang.videoDesc, example: Lang.videoExa, type: "download", react: "🎞️" }, (async (amdiWA) => {
    let { input, prefix, reply, sendButtonsMsg, sendListMsg } = amdiWA.msgLayout;

    if (!input) return reply(Lang.needYTLink, '❓')
    if (input.includes('playlist')) return reply(Lang.noPL)

    if (input.includes('shorts')) {
        const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
        const isYT = ytIdRegex.exec(input)
        if (!isYT) return reply(Lang.needYTLink, '❓')
        return await shortVID(amdiWA, input);
    }

    if (!input.includes('https://')) {
        const findYT = async (name) => {
            const search = await yts(`${name}`)
            return search.all;
        }
        const ytVidList = await findYT(input)
        var listInfo = {}
        listInfo.title = Lang.videoListTitle
        listInfo.text = Lang.videoListTXT
        listInfo.buttonTXT = 'default'
        
        try {
            const sections = await videoList(prefix, ytVidList);
            return await sendListMsg(listInfo, sections)
        } catch {
            await reply(Lang.noSearch)
        }
    }

    if (input.includes('https://')) {
        const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
        const isYT = ytIdRegex.exec(input)
        if (!isYT) return reply(Lang.needYTLink, '❓')
        
        let ytVidInfo = (await ytdl.getInfo(input)).videoDetails

        try {
            like = ytVidInfo.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        } catch {
            like = '_Like count hidden_'
        }

        const ytDlTXT = `📄 ${Lang.Title} ${ytVidInfo.title}\n\n` +
                        `👁️ ${Lang.Views} ${ytVidInfo.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\n\n` +
                        `👍🏻 ${Lang.Likes} ${like}\n\n` +
                        `🎛️ ${Lang.Channel} ${ytVidInfo.author.name}\n\n` +
                        `ℹ️ ${Lang.Category} ${ytVidInfo.category}\n\n` +
                        `📖 ${Lang.Description}\n${ytVidInfo.description}`

        try {
            var thumb = ytVidInfo.thumbnails[4].url
        } catch {
            var thumb = ytVidInfo.thumbnails[2].url
        }

        const buttons = [
            {type: "url", displayText: "Watch on YouTube", url: ytVidInfo.video_url},
            {type: "click", displayText: "360p Quality", buttonCMD: `${prefix}ytdl 360 ${ytVidInfo.video_url}`},
            {type: "click", displayText: "480p Quality", buttonCMD: `${prefix}ytdl 480 ${ytVidInfo.video_url}`},
            {type: "click", displayText: "720p Quality", buttonCMD: `${prefix}ytdl 720 ${ytVidInfo.video_url}`}
        ]
        return await sendButtonsMsg(buttons, {text: ytDlTXT, image: {url: thumb}, tagMsg: true, showURL: true});
    }
}));


AMDI({ cmd: "ytdl", cmdHideInMenu: true, type: "download" }, (async (amdiWA) => {
    let { input } = amdiWA.msgLayout;

    if (input.includes('audio')) {
        const ytURL = input.split('audio ')[1]
        return await sendYTaudio(amdiWA, ytURL)
    }

    if (input.includes('document')) {
        const ytURL = input.split('document ')[1]
        return await sendYTdocument(amdiWA, ytURL)
    }

    if (input.includes('720')) {
        const ytURL = input.split('720 ')[1]
        return await sendYT720(amdiWA, ytURL)
    }

    if (input.includes('480')) {
        const ytURL = input.split('480 ')[1]
        return await sendYT480(amdiWA, ytURL)
    }

    if (input.includes('360')) {
        const ytURL = input.split('360 ')[1]
        return await sendYT360(amdiWA, ytURL)
    }
}));