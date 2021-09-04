/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('info');
const adm = Language.getString('admin');

if (Config.WORKTYPE == 'private') {
    Amdi.applyCMD({ pattern: 'info', fromMe: true, desc: Lang.INFO_DESC, deleteCommand: false}, async (message, match) => { 

        if (message.jid.includes('-')) {

            var json = await message.client.groupMetadataMinimal(message.jid) 

            var code = await message.client.groupInviteCode(message.jid)

            var nwjson = await message.client.groupMetadata(message.jid) 

            const msg = Lang.GRP_NAME + `\n ${nwjson.subject} \n\n` + Lang.GRP_JID + `\n ${json.id} \n\n` + Lang.GRP_OWN + `\n ${json.owner} \n\n` + Lang.GRP_COD + `\n https://chat.whatsapp.com/${code} \n\n` + Lang.GRP_DES + `\n ${nwjson.desc}`

            var ppUrl = await message.client.getProfilePicture(message.jid) 

            const resim = await axios.get(ppUrl, {responseType: 'arraybuffer'})

            await message.sendMessage(
                Buffer(resim.data), 
                MessageType.image, 
                { caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = Lang.PRO_JID + `\n ${usexists.jid} \n\n` + Lang.PRO_DES + `\n ${status.status}`
            const resimnw = await axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer(resimnw.data), 
                MessageType.image, 
                { caption: nwmsg }
            );
        }
    });
}

else if (Config.WORKTYPE == 'public') {
    Amdi.applyCMD({ pattern: 'info', fromMe: false, desc: Lang.INFO_DESC}, async (message, match) => { 
        
        if (message.jid.includes('-')) {

            var json = await message.client.groupMetadataMinimal(message.jid) 

            var code = await message.client.groupInviteCode(message.jid)

            var nwjson = await message.client.groupMetadata(message.jid) 

            const msg = Lang.GRP_NAME + `\n ${nwjson.subject} \n\n` + Lang.GRP_JID + `\n ${json.id} \n\n` + Lang.GRP_OWN + `\n ${json.owner} \n\n` + Lang.GRP_COD + `\n https://chat.whatsapp.com/${code} \n\n` + Lang.GRP_DES + `\n ${nwjson.desc}`
            
            var ppUrl = await message.client.getProfilePicture(message.jid) 

            const resim = await axios.get(ppUrl, {responseType: 'arraybuffer'})

            await message.sendMessage(
                Buffer(resim.data), 
                MessageType.image, 
                { caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = Lang.PRO_JID + `\n ${usexists.jid} \n\n` + Lang.PRO_DES + `\n ${status.status}`
            const resimnw = await axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer(resimnw.data), 
                MessageType.image, 
                { caption: nwmsg }
            );
        }
    });
}