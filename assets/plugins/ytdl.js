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
const _amdi = QueenAmdi.youtube
const Language = require('../language');
const Lang = Language.getString('dl-video');
let Work_Mode = Build.WORKTYPE == 'public' ? false : true


//===================SONG===================
Amdi.operate({ pattern: 'qaytsong ?(.*)', fromMe: Work_Mode,  deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const ytLink = input[1]
    await _amdi.songType( amdiMSG, ytLink )
}));

Amdi.operate({ pattern: 'qasongdoc ?(.*)', fromMe: Work_Mode,  deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const ytLink = input[1]
    await _amdi.songDOC( amdiMSG, ytLink, Lang )
}));

Amdi.operate({ pattern: 'qasongaudio ?(.*)', fromMe: Work_Mode,  deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const ytLink = input[1]
    await _amdi.songAUDIO( amdiMSG, ytLink, Lang )
}));
//==========================================

//===================VIDEO===================
Amdi.operate({ pattern: 'qaytvideo ?(.*)', fromMe: Work_Mode,  deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const ytLink = input[1]
    await _amdi.videoType( amdiMSG, ytLink )
}));

Amdi.operate({ pattern: 'qavideohd ?(.*)', fromMe: Work_Mode,  deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const ytLink = input[1]
    await _amdi.video720( amdiMSG, ytLink, Lang )
}));

Amdi.operate({ pattern: 'qavideosd ?(.*)', fromMe: Work_Mode,  deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const ytLink = input[1]
    await _amdi.video360( amdiMSG, ytLink, Lang )
}));
//==========================================