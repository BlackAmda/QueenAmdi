/*
░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗
██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║
██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║
╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║
░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║
░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝
░█████╗░███╗░░░███╗██████╗░██╗
██╔══██╗████╗░████║██╔══██╗██║
███████║██╔████╔██║██║░░██║██║
██╔══██║██║╚██╔╝██║██║░░██║██║ █▀█ █▀▀█ █▀█ ▄█─ 
██║░░██║██║░╚═╝░██║██████╔╝██║ ─▄▀ █▄▀█ ─▄▀ ─█─ 
╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═════╝░╚═╝ █▄▄ █▄▄█ █▄▄ ▄█▄
Copyright (C) 2021 Black Amda.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const QueenAmdi = require('queenamdi-public');
const Amdi = QueenAmdi.events
const Build = QueenAmdi.build
const {MessageType, Mimetype} = require('@blackamda/queenamdi-web-api');
const axios = require("axios")

const Language = require('../language');
const Lang = Language.getString('lyric');
let Work_Mode = Build.WORKTYPE == 'public' ? false : true


Amdi.operate({ pattern: 'lyric ?(.*)', fromMe: Work_Mode, desc: Lang.LY_DESC,  deleteCommand: false}, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    if (input[1] == '') return await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.NEED_WORD, MessageType.text, { quoted: amdiMSG.data });

    try {
        const title = input[1]
        const lyricdata = await QueenAmdi.lyric(title)

        var media = await axios.get(lyricdata.thumb, {responseType: 'arraybuffer'})
        var PIC = Buffer.from(media.data)

        await amdiMSG.client.sendMessage(amdiMSG.jid, PIC, MessageType.image, {mimetype: Mimetype.png, caption: lyricdata.lirik, quoted: amdiMSG.data, thumbnail: PIC});
    } catch {
        return await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.NO_RESULT, MessageType.text, { quoted: amdiMSG.data });
    }
}));