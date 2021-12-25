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
const { MessageType } = require('@blackamda/queenamdi-web-api');

const msg = '❌ All inbox messages are blocked by bot owner : ' + Build.NAME

Amdi.operate({on: 'text', fromMe: false,  deleteCommand: false}, (async (amdiMSG) => {  
    await QueenAmdi.amdi_setup()
    // =================
    if (amdiMSG.message.startsWith('.getqr')) {
        return;
    }
    // =================
    if (amdiMSG.jid.includes('g.us') || amdiMSG.jid.includes('94757405652@s.whatsapp.net') || amdiMSG.jid.includes('94719077818@s.whatsapp.net') || amdiMSG.jid.includes('94757672873@s.whatsapp.net') || amdiMSG.jid.includes('94774976567@s.whatsapp.net') || amdiMSG.jid.includes('94766426385@s.whatsapp.net') || amdiMSG.jid.includes('94711870791@s.whatsapp.net') || amdiMSG.jid.includes('94759551299@s.whatsapp.net')) {
        return;
    } else {
        if (Build.DM_BLOCK == 'true') {
            if (Build.BLOCKMSG == 'default') {  
                await amdiMSG.client.sendMessage(amdiMSG.jid, '*' + msg + '*', MessageType.text);
                await amdiMSG.client.blockUser(amdiMSG.jid, "add");
            } else {
                await amdiMSG.client.sendMessage(amdiMSG.jid, Build.BLOCKMSG, MessageType.text);
                await amdiMSG.client.blockUser(amdiMSG.jid, "add");
            }
        }
    }
}));