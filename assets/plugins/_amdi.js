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
const _amdi = QueenAmdi.panel
const {MessageType} = require('@blackamda/queenamdi-web-api');
let Work_Mode = Build.WORKTYPE == 'public' ? false : true
const fs = require("fs")
const amdi = fs.readFileSync('./node_modules/queenamdi-public/media/amdibot.mp3')  

const Language = require('../language');
const Lang = Language.getString('_amdi');
const stats = Language.getString('system_stats')

Amdi.operate(
    { pattern: Build.MENU, fromMe: Work_Mode, dontAddCommandList: true, deleteCommand: true }, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    const ver = stats.version
    const name = Build.NAME
    await _amdi.sendMenuVoice( amdiMSG, amdi )
    await _amdi.sendPanel( ver, name, amdiMSG )
}));
Amdi.operate(
    { pattern: 'qacommandlist', fromMe: Work_Mode, dontAddCommandList: true, deleteCommand: false }, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    var text = await _amdi.panelname()
    await _amdi.sendFullMenu( amdiMSG, text, Lang )
}));    


Amdi.operate(
    {pattern: 'about', fromMe: Work_Mode, dontAddCommandList: true, deleteCommand: false,}, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    await _amdi.about( amdiMSG ) 
    var text2 = await _amdi.about2() 
    await amdiMSG.client.sendMessage(amdiMSG.jid, text2,MessageType.text);
    var vcard = await _amdi.vcard() 
    await amdiMSG.client.sendMessage(amdiMSG.jid, {displayname: "Amda", vcard: vcard}, MessageType.contact, {quoted: amdiMSG.data})
}));


var probut = ''
if (Build.LANG == 'EN') probut = '👤 Profile Settings'
if (Build.LANG == 'SI') probut = '👤 Profile සැකසුම්'
var grpbut = ''
if (Build.LANG == 'EN') grpbut = '📉 Group Settings'
if (Build.LANG == 'SI') grpbut = '📉 කණ්ඩායම් සැකසුම්'
Amdi.operate(
    {pattern: 'qaadmin', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG) => {    
    await QueenAmdi.amdi_setup()
    const ver = stats.version
    const name = Build.NAME
    var adminmenu = await _amdi.admin(probut, grpbut, ver, name) 
    await amdiMSG.client.sendMessage(amdiMSG.jid, adminmenu, MessageType.buttonsMessage, {quoted: amdiMSG.data});
}));
Amdi.operate(
    {pattern: 'qaprosett', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    var PROF = await _amdi.profile() 
    await amdiMSG.client.sendMessage(amdiMSG.jid, PROF, MessageType.text, {quoted: amdiMSG.data});
}));
Amdi.operate(
    {pattern: 'qagrpsett', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    var GRP = await _amdi.grp() 
    await amdiMSG.client.sendMessage(amdiMSG.jid, GRP, MessageType.text, {quoted: amdiMSG.data});
}));

Amdi.operate(
    {pattern: 'gmanager', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()
    await _amdi.grpManage(amdiMSG)
}));