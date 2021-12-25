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
const voteDB = QueenAmdi.voteDB
const _amdi = QueenAmdi.voteSystem
const {MessageType} = require('@blackamda/queenamdi-web-api');

const Language = require('../language');
const Lang = Language.getString('vote_poll');

Amdi.operate({pattern: 'setvote ?(.*)', fromMe: true,  deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const vCreate = input[1]
    await _amdi.setVotePoll( amdiMSG, vCreate, Lang )
}));

Amdi.operate({pattern: 'getvote', fromMe: true,  deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    await _amdi.getVotePoll( amdiMSG, Lang )
}));

Amdi.operate({pattern: 'addVote ?(.*)', fromMe: false,  deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()
    const voteAdd = input[1]
    await _amdi.addVotes( amdiMSG, voteAdd, Lang )
}));

Amdi.operate({pattern: 'vote ?(.*)', fromMe: true,  deleteCommand: false, dontAddCommandList: true}, (async (amdiMSG, input) => {
    const CMD = input[1]
    await _amdi.voteCMD( amdiMSG, CMD, Lang )
}));