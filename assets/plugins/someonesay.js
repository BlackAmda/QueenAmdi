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
const _amdi = QueenAmdi.misc
const { MessageType } = require('@blackamda/queenamdi-web-api');
let Work_Mode = Build.WORKTYPE == 'public' ? false : true

var NEED_WORD = ''
if (Build.LANG == 'SI') NEED_WORD = '*ඔබ වචන ඇතුළත් කළ යුතුය!*'
if (Build.LANG == 'EN') NEED_WORD = '*Please enter words!*'

var DESC = ''
if (Build.LANG == 'SI') DESC = 'කවුරුහරි කියන පරිදි ඔබේ පෙළ සකසන්න.'
if (Build.LANG == 'EN') DESC = 'Make your text as someone says.'
Amdi.operate({pattern: 'someonesay ?(.*)', fromMe: Work_Mode, desc: DESC, dontAddCommandList: false, deleteCommand: true}, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const txt = input[1]
    
    if (txt === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,NEED_WORD, MessageType.text, {quoted: amdiMSG.data});

    await _amdi.someoneSay( amdiMSG, txt )
}));