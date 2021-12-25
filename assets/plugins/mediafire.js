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
const download = QueenAmdi.mediafire
const axios = require('axios')
const {MessageType} = require('@blackamda/queenamdi-web-api');
let Work_Mode = Build.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('mediafire');

Amdi.operate({ pattern: 'mediafire ?(.*)', fromMe: Work_Mode, desc: Lang.MF_DESC,  deleteCommand: false}, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const mflink = input[1]
    if (mflink === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.NEEDURL, {quoted: amdiMSG.data});

    try {
        var downloading = await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.DOWNLOAD,MessageType.text, {quoted: amdiMSG.data});
        const dl = await download.mediafireDl(mflink)
        const file = await axios.get(dl[0].link, {responseType: 'arraybuffer'})
        await amdiMSG.client.deleteMessage(amdiMSG.jid, {id: downloading.key.id, remoteJid: amdiMSG.jid, fromMe: true});
        var uploading = await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.UPLOAD,MessageType.text, {quoted: amdiMSG.data});
        await amdiMSG.client.sendMessage(amdiMSG.jid, Buffer.from(file.data), MessageType.document, {filename: dl[0].nama, mimetype: dl[0].mime, quoted: amdiMSG.data});
        return await amdiMSG.client.deleteMessage(amdiMSG.jid, {id: uploading.key.id, remoteJid: amdiMSG.jid, fromMe: true})
    } catch {
        return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.INVALID,MessageType.text, {quoted: amdiMSG.data});
    }
}));