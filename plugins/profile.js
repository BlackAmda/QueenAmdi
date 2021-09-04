/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const Heroku = require('heroku-client');
const queenamdiUploader = require("queenamdi-img");
const fs = require('fs');
const Language = require('../language');
const Lang = Language.getString('profile');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

Amdi.applyCMD({pattern: 'kickme', fromMe: true, desc: Lang.KICKME_DESC, onlyGroup: true, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    if (Config.KICKMEMSG == 'default') { 
        await message.client.sendMessage(message.jid,Lang.KICKME,MessageType.text);
        await message.client.groupLeave(message.jid);
    }
    else {
        await message.client.sendMessage(message.jid,Config.KICKMEMSG,MessageType.text);
        await message.client.groupLeave(message.jid);
    }
}));

Amdi.applyCMD({pattern: 'pp', fromMe: true, desc: Lang.PP_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {    
    if (message.reply_message === false || message.reply_message.image === false) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO);
    
    var load = await message.client.sendMessage(message.jid,Lang.PPING,MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    await message.client.updateProfilePicture(message.client.user.jid, fs.readFileSync(location));
    await load.delete();
}));

Amdi.applyCMD({pattern: 'block ?(.*)', fromMe: true, desc: Lang.BLOCK_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {   
    if (Config.BLOCKMSG == 'default') {  
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```, ' + Lang.BLOCKED + '!```', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
            await message.client.blockUser(message.reply_message.jid, "add");
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + '```, ' + Lang.BLOCKED + '!```', MessageType.text, {
                    previewType: 0, contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });
                await message.client.blockUser(user, "add");
            });
        } else if (!message.jid.includes('-')) {
            await message.client.sendMessage(message.jid, '*' + Lang.BLOCKED_UPPER + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text);
        }
    }
    else {  
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + Config.BLOCKMSG, MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
            await message.client.blockUser(message.reply_message.jid, "add");
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + Config.BLOCKMSG, MessageType.text, {
                    previewType: 0, contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });
                await message.client.blockUser(user, "add");
            });
        } else if (!message.jid.includes('-')) {
            await message.client.sendMessage(message.jid, '*' + Lang.BLOCKED_UPPER + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text);
        }
    }
}));

Amdi.applyCMD({pattern: 'unblock ?(.*)', fromMe: true, desc: Lang.UNBLOCK_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {    
    if (message.reply_message !== false) {
        await message.client.blockUser(message.reply_message.jid, "remove");
        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```, ' + Lang.UNBLOCKED + '!```', MessageType.text, {
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
        });
    } else if (message.mention !== false) {
        message.mention.map(async user => {
            await message.client.blockUser(user, "remove");
            await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + '```, ' + Lang.UNBLOCKED + '!```', MessageType.text, {
                contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
            });    
        });
    } else if (!message.jid.includes('-')) {
        await message.client.blockUser(message.jid, "remove");
        await message.client.sendMessage(message.jid, '*' + Lang.UNBLOCKED_UPPER + '*', MessageType.text,);
    } else {
        await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text,);
    }
}));

if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({pattern: 'jid ?(.*)', fromMe: true, desc: Lang.JID_DESC,  deleteCommand: false}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, Lang.JID.format(message.reply_message.jid.split('@')[0], message.reply_message.jid), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, Lang.JID.format(user.split('@')[0], user), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else {
            await message.client.sendMessage(message.jid, Lang.JID_CHAT.format(message.jid), MessageType.text);
        }
    }));
}
else if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'jid ?(.*)', fromMe: true, desc: Lang.JID_DESC, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, Lang.JID.format(message.reply_message.jid.split('@')[0], message.reply_message.jid), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, Lang.JID.format(user.split('@')[0], user), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else {
            await message.client.sendMessage(message.jid, Lang.JID_CHAT.format(message.jid), MessageType.text);
        }
    }));
}

Amdi.applyCMD({pattern: 'setalive', fromMe: true, desc: Lang.ALIVE_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {    
    if (message.reply_message === false || message.reply_message.image === false) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO);
    
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
    const anu = await queenamdiUploader(Config.IMGBB, location)
    const varKey = "ALIVE_LOGO"
    const varValue = anu.display_url
    await heroku.patch(baseURI + '/config-vars', {
        body: {
            [varKey]: varValue
        }
    }).then(async (app) => {
        await message.client.sendMessage(message.jid,Lang.SET_ALIVE, MessageType.text);
    });
}));

Amdi.applyCMD({pattern: 'setwelcome', fromMe: true, desc: Lang.WEL_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {    
    if (message.reply_message === false || message.reply_message.image === false) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO);
    
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
    const anu = await queenamdiUploader(Config.IMGBB, location)
    const varKey = "WELCOME_LOGO"
    const varValue = anu.display_url
    await heroku.patch(baseURI + '/config-vars', {
        body: {
            [varKey]: varValue
        }
    }).then(async (app) => {
        await message.client.sendMessage(message.jid,Lang.SET_WEL, MessageType.text);
    });
}));

Amdi.applyCMD({pattern: 'setbye', fromMe: true, desc: Lang.BYE_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {    
    if (message.reply_message === false || message.reply_message.image === false) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO);
    
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
    const anu = await queenamdiUploader(Config.IMGBB, location)
    const varKey = "BYE_LOGO"
    const varValue = anu.display_url
    await heroku.patch(baseURI + '/config-vars', {
        body: {
            [varKey]: varValue
        }
    }).then(async (app) => {
        await message.client.sendMessage(message.jid,Lang.SET_BYE, MessageType.text);
    });
}));