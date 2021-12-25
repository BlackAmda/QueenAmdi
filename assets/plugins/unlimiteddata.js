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
const _amdi = QueenAmdi.EhiDL

const Language = require('../language');
const Lang = Language.getString('unlimiteddata');
let Work_Mode = Build.WORKTYPE == 'public' ? false : true


Amdi.operate({pattern: 'ehi', fromMe: Work_Mode, desc: Lang.ehi_desc,  deleteCommand: false}, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    await _amdi.ehiMenu( amdiMSG, Lang )
}));


// ==============EHI FUNCTIONS======================
Amdi.operate({pattern: 'qaehiinfo', fromMe: Work_Mode, deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    await _amdi.ehiInfo( amdiMSG, Lang )
}));

Amdi.operate({pattern: 'qaehihelp', fromMe: Work_Mode, deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    await _amdi.ehiHelp( amdiMSG, Lang )
}));

Amdi.operate({pattern: 'qaehidown', fromMe: Work_Mode, deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    await _amdi.ehiFiles( amdiMSG )
}));

Amdi.operate({pattern: 'qahttpapp', fromMe: Work_Mode, deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    await _amdi.ehiApp( amdiMSG )
}));

Amdi.operate({pattern: 'qaallehi', fromMe: Work_Mode, deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    await _amdi.ehiPages( amdiMSG )
}));

Amdi.operate({pattern: 'qaehipgone', fromMe: Work_Mode, deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    await _amdi.ehiPage01( amdiMSG )
}));

Amdi.operate({pattern: 'qaehipgtwo', fromMe: Work_Mode, deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    await _amdi.ehiPage02( amdiMSG )
}));

Amdi.operate({pattern: 'qaehipgthree', fromMe: Work_Mode, deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    await _amdi.ehiPage03( amdiMSG )
}));