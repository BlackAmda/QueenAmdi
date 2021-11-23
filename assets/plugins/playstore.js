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
const axios = require("axios")
const {MessageType, Mimetype} = require('@blackamda/queenamdi-web-api');
let LOL = Build.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('playstore');

function calc_file_size(bytes) {
    if (bytes >= 1073741824) {	// 1024 * 1024 * 1024
      bytes = ((bytes / 1073741824) * 1024);
  
    } else if (bytes >= 1048576) { // 1024 * 1024
      bytes = (bytes / 1048576);
  
    } else if (bytes >= 1024) {	// 1024 * 1
      bytes = ((bytes / 1024) / 1024);
  
    } else if (bytes > 1) {
      bytes = bytes + ' bytes';
  
    } else if (bytes == 1) {
      bytes = bytes + ' byte';
  
    } else {
      bytes = '0 bytes';
    }
  
    return bytes
  }

Amdi.operate({ pattern: 'apk ?(.*)', fromMe: LOL, desc: Lang.APK_DESC,  deleteCommand: false}, (async (message, match) => {

    const pack = match[1]
          
    if (!pack) return await message.client.sendMessage(message.jid,Lang.APK_NEED,MessageType.text, {quoted: message.data})

    if (pack.includes('=')) {
        var split = pack.split('=');
        link = split[1];
        nothing = split[0];
    }
    
    var apk = await QueenAmdi.apk(link)
    var apkinfo = await QueenAmdi.apk_info(link)

    const app = await axios.get(apkinfo.ic, {responseType: 'arraybuffer'})
    await message.client.sendMessage (message.jid, Buffer.from (app.data), MessageType.image, {mimetype: Mimetype.png, caption: Lang.APK_D + Lang.APK_N + apk.name + Lang.APK_DEV + apk.auth + Lang.APK_V + apk.vers + Lang.APK_SUM + apkinfo.summ })

    const profileBuffer = await axios.get(apk.link, {responseType: 'arraybuffer'})
    const load = Buffer.from(profileBuffer.data)
    const calc = Buffer.byteLength(load);
    const size = calc_file_size(calc);
    if (Build.MAX_SIZE < size) {
        return await message.client.sendMessage(message.jid,Lang.LIMIT + Build.NAME + '_',MessageType.text, {quoted: message.data});
    } else {
        var downloading = await message.client.sendMessage(message.jid,Lang.APK_DW,MessageType.text, {quoted: message.data});
        var uploading = await message.client.sendMessage(message.jid,Lang.APK_UP,MessageType.text, {quoted: message.data});
        await message.client.sendMessage(message.jid,Buffer.from(profileBuffer.data), MessageType.document, {filename: apk.name + '.apk', mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
    }
}));