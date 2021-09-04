/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const memeMaker = require('meme-maker')
const fs = require('fs')
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('memes');
let LOL = Config.WORKTYPE == 'public' ? false : true


Amdi.applyCMD({pattern: 'meme ?(.*)', fromMe: LOL, desc: Lang.MEMES_DESC,  deleteCommand: false}, (async (message, match) => {   

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text, {quoted: message.data});
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            bottomText = split[1];
            topText = split[0];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }
    
        var downloading = await message.client.sendMessage(message.jid,Lang.DOWNLOADING,MessageType.text, {quoted: message.data});
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'ammo-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('ammo-meme.png'), MessageType.image, {filename: 'ammo-meme.png', mimetype: Mimetype.png, caption: Config.CAP, quoted: message.data});
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})   
        });
}));
