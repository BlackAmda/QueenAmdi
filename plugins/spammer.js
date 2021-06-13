/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Heroku = require('heroku-client');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('spammer');

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


Asena.addCommand({pattern: 'spam ?(.*)', fromMe: true, desc: Lang.SPAM_DESC}, (async (message, match) => {

    if (message.jid === '905524317852-1612300121@g.us') {

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
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

}));

Asena.addCommand({pattern: 'killspam', fromMe: true, desc: Lang.STOP_SPAMDESC}, (async (message, match) => {

    await message.client.sendMessage(message.jid, Lang.STOP_SPAM, MessageType.text);

    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.client.sendMessage(message.jid, error.message, MessageType.text);

    });
}));
