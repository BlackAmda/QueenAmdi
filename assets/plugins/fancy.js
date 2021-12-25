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
const {FancyText, fancyList} = require('fancy-amdi-sew');
const Amdi = QueenAmdi.events
const Build = QueenAmdi.build
const {MessageType} = require('@blackamda/queenamdi-web-api');
let Work_Mode = Build.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('font');


Amdi.operate({ pattern: 'fancy ?(.*)', fromMe: Work_Mode, desc: Lang.FONT_DESC,  deleteCommand: false}, (async (amdiMSG, input) => {
    if (input[1] == '') return await amdiMSG.client.sendMessage(amdiMSG.jid,Lang.NEED_WORD,MessageType.text, {quoted: amdiMSG.data});

    var list = await fancyList(input[1])
    await amdiMSG.client.sendMessage(amdiMSG.jid, list, MessageType.listMessage, {quoted: amdiMSG.data})
}));

Amdi.operate({ pattern: 'textfancy ?(.*)', fromMe: Work_Mode, deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG, input) => {
    var text = input[1].split('////')[1]
    var type = input[1].split('////')[0] 
    var out = await FancyText(text)
    await amdiMSG.client.sendMessage(amdiMSG.jid, out[type], MessageType.text, {quoted: amdiMSG.data})
}));