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
const {MessageType, MessageOptions, Mimetype} = require('@blackamda/queenamdi-web-api');
const Heroku = require('heroku-client');

const Language = require('../language');
const Lang = Language.getString('spammer');

const heroku = new Heroku({
    token: Build.HEROKU.API_KEY
});


let baseURI = '/apps/' + Build.HEROKU.APP_NAME;


Amdi.operate({pattern: 'spam ?(.*)', fromMe: true, desc: Lang.SPAM_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

    if (message.jid === '94757405652@g.us') {

        return;
    }


    if (match[1] === '') {

        return await message.client.sendMessage(message.jid, Lang.NEED_WORD);

    }

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

}));

Amdi.operate({pattern: 'killspam', fromMe: true, desc: Lang.STOP_SPAMDESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

    await message.client.sendMessage(message.jid, Lang.STOP_SPAM, MessageType.text);

    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.client.sendMessage(message.jid, error.message, MessageType.text);

    });
}));
