/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Heroku = require('heroku-client');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('chatbot');

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

if (Config.CHAT_BOT == 'true') {
	if (Config.WORKTYPE == 'private') {
		Amdi.applyCMD({pattern: 'bot ?(.*)', fromMe: true, desc: Lang.BOT_DESC, deleteCommand: false}, async (message, match) => {
			if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
			const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
			try {
				const response = await got(url);
				const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n*👸🏻 ' + Lang.BOT +'* ```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
			} catch {
				return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
			}
		});
	}
	
	else if (Config.WORKTYPE == 'public') {
		Amdi.applyCMD({pattern: 'bot ?(.*)', fromMe: false, desc: Lang.BOT_DESC}, async (message, match) => {
			if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
			const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
			try {
				const response = await got(url);
				const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n*👸🏻 ' + Lang.BOT +'* ```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
			} catch {
				return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
			}
		});
	}
}

else if (Config.CHAT_BOT == 'false') {
	if (Config.WORKTYPE == 'private') {
		Amdi.applyCMD({pattern: 'bot ?(.*)', fromMe: true, desc: Lang.BOT_DESC, deleteCommand: false}, async (message, match) => {
			if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
			const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
			try {
				const response = await got(url);
				const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang.BOT + Lang.NOT_AVAILABLE , MessageType.text);
			} catch {
				return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
			}
		});
	}
	
	else if (Config.WORKTYPE == 'public') {
		Amdi.applyCMD({pattern: 'bot ?(.*)', fromMe: false, desc: Lang.BOT_DESC}, async (message, match) => {
			if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
			const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
			try {
				const response = await got(url);
				const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n👸🏻 ' + Lang.BOT + Lang.NOT_AVAILABLE , MessageType.text,{quoted: message.data});
			} catch {
				return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
			}
		});
	}
}

Amdi.applyCMD({pattern: 'switch ?(.*)', fromMe: true, desc: Lang.SWITCH_DESC, deleteCommand: false}, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.SWITCH_MISSING, MessageType.text);
    if ((varKey = match[1].split(':')[0]) && (varValue = match[1].split(':')[1])) {
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                [varKey]: varValue
            }
        }).then(async (app) => {
            await message.client.sendMessage(message.jid,Lang.SWITCH_SUCCESS.format(varKey, varValue), MessageType.text);
        });
    } else {
        await message.client.sendMessage(message.jid,Lang.SWITCH_INVALID, MessageType.text);
    }
}));
