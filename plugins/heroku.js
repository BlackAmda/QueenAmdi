/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const Config = require('../config');
const Heroku = require('heroku-client');
const {secondsToHms} = require('./afk');
const got = require('got');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('heroku');

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

Amdi.applyCMD({pattern: 'restart', fromMe: true, desc: Lang.RESTART_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

    await message.client.sendMessage(message.jid,Lang.RESTART_MSG, MessageType.text);
    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text);
    });
}));

Amdi.applyCMD({pattern: 'shutdown', fromMe: true, desc: Lang.SHUTDOWN_DESC, dontAddCommandList: true, deleteCommand: false}, (async(message, match) => {

    await heroku.get(baseURI + '/formation').then(async (formation) => {
        forID = formation[0].id;
        await message.client.sendMessage(message.jid,Lang.SHUTDOWN_MSG, MessageType.text);
        await heroku.patch(baseURI + '/formation/' + forID, {
            body: {
                quantity: 0
            }
        });
    }).catch(async (err) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text);
    });
}));


if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({pattern: 'dyno', fromMe: true, desc: Lang.DYNO_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

        heroku.get('/account').then(async (account) => {
            // have encountered some issues while calling this API via heroku-client
            // so let's do it manually
            url = "https://api.heroku.com/accounts/" + account.id + "/actions/get-quota"
            headers = {
                "User-Agent": "Chrome/80.0.3987.149 Mobile Safari/537.36",
                "Authorization": "Bearer " + Config.HEROKU.API_KEY,
                "Accept": "application/vnd.heroku+json; version=3.account-quotas",
            }
            await got(url, {headers: headers}).then(async (res) => {
               const resp = JSON.parse(res.body);
               total_quota = Math.floor(resp.account_quota);
               quota_used = Math.floor(resp.quota_used);         
               percentage = Math.round((quota_used / total_quota) * 100);
               remaining = total_quota - quota_used;
               await message.client.sendMessage(
                    message.jid,
                    Lang.DYNO_TOTAL + ": ```{}```\n\n".format(secondsToHms(total_quota))  + 
                    Lang.DYNO_USED + ": ```{}```\n".format(secondsToHms(quota_used)) +  
                    Lang.PERCENTAGE + ": ```{}```\n\n".format(percentage) +
                    Lang.DYNO_LEFT + ": ```{}```\n".format(secondsToHms(remaining)),
                    MessageType.text
               );
            }).catch(async (err) => {
                await message.client.sendMessage(message.jid,err.message, MessageType.text);     
            });        
        });
    }));
}
else if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'dyno', fromMe: true, desc: Lang.DYNO_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

        heroku.get('/account').then(async (account) => {
            // have encountered some issues while calling this API via heroku-client
            // so let's do it manually
            url = "https://api.heroku.com/accounts/" + account.id + "/actions/get-quota"
            headers = {
                "User-Agent": "Chrome/80.0.3987.149 Mobile Safari/537.36",
                "Authorization": "Bearer " + Config.HEROKU.API_KEY,
                "Accept": "application/vnd.heroku+json; version=3.account-quotas",
            }
            await got(url, {headers: headers}).then(async (res) => {
               const resp = JSON.parse(res.body);
               total_quota = Math.floor(resp.account_quota);
               quota_used = Math.floor(resp.quota_used);         
               percentage = Math.round((quota_used / total_quota) * 100);
               remaining = total_quota - quota_used;
               await message.client.sendMessage(
                    message.jid,
                    Lang.DYNO_TOTAL + ": ```{}```\n\n".format(secondsToHms(total_quota))  + 
                    Lang.DYNO_USED + ": ```{}```\n".format(secondsToHms(quota_used)) +  
                    Lang.PERCENTAGE + ": ```{}```\n\n".format(percentage) +
                    Lang.DYNO_LEFT + ": ```{}```\n".format(secondsToHms(remaining)),
                    MessageType.text
               );
            }).catch(async (err) => {
                await message.client.sendMessage(message.jid,err.message, MessageType.text);     
            });        
        });
    }));
}

Amdi.applyCMD({pattern: 'setvar ?(.*)', fromMe: true, desc: Lang.SETVAR_DESC, dontAddCommandList: true, deleteCommand: false}, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.KEY_VAL_MISSING, MessageType.text);
    if ((varKey = match[1].split('=')[0]) && (varValue = match[1].split('=')[1])) {
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                [varKey]: varValue
            }
        }).then(async (app) => {
            await message.client.sendMessage(message.jid,Lang.SET_SUCCESS.format(varKey, varValue), MessageType.text);
        });
    } else {
        await message.client.sendMessage(message.jid,Lang.INVALID, MessageType.text);
    }
}));


Amdi.applyCMD({pattern: 'delvar ?(.*)', fromMe: true, desc: Lang.DELVAR_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.KEY_VAL_MISSING, MessageType.text);
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        key = match[1].trim();
        for (vr in vars) {
            if (key == vr) {
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        [key]: null
                    }
                });
                return await message.client.sendMessage(message.jid,Lang.DEL_SUCCESS.format(key), MessageType.text);
            }
        }
        await message.client.sendMessage(message.jid,Lang.NOT_FOUND, MessageType.text);
    }).catch(async (error) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text);
    });

}));

Amdi.applyCMD({pattern: 'getvar ?(.*)', fromMe: true, desc: Lang.GETVAR_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.KEY_VAL_MISSING, MessageType.text);
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        for (vr in vars) {
            if (match[1].trim() == vr) return await message.sendMessage("```{} - {}```".format(vr, vars[vr]));
        }
        await message.client.sendMessage(message.jid,Lang.NOT_FOUND, MessageType.text);
    }).catch(async (error) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text);
    });
}));


Amdi.applyCMD({pattern: 'setup ?(.*)', fromMe: true, desc: Lang.SETUP_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

    if (match[1] == '') {
        return await message.client.sendMessage(message.jid, Lang.NO_TYPE, MessageType.text); 
    }
    else if (!message.reply_message) {
        return await message.client.sendMessage(message.jid, Lang.NEED_TEXT, MessageType.text); 
    }
    else if (match[1] == 'ban' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['BAN_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'welcome' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await sql.setMessage(message.jid, 'welcome', message.reply_message.text)
        await message.client.sendMessage(message.jid, Lang.GR_DEL, MessageType.text);
    }
    else if (match[1] == 'goodbye' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await sql.setMessage(message.jid, 'goodbye', message.reply_message.text)
        await message.client.sendMessage(message.jid, Lang.GR_DEL, MessageType.text);
    }
    else if (match[1] == 'mute' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['MUTE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'unmute' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['UNMUTE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'add' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['ADD_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'kickme' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['KICKME_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'afk' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['AFK_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'alive' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['ALIVE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'demote' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['DEMOTE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'promote' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['PROMOTE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'block' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['BLOCK_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'unblock' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['UNBLOCK_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (!match[1] == 'unblock' || !match[1] == 'welcome' || !match[1] == 'goodbye' || !match[1] == 'add' || !match[1] == 'block' || !match[1] == 'mute' || !match[1] == 'unmute' || !match[1] == 'afk' || !match[1] == 'alive' || !match[1] == 'demote' || !match[1] == 'promote' || !match[1] == 'ban' || !match[1] == 'kickme' && message.reply_message) {
        return await message.client.sendMessage(message.jid, Lang.WHY, MessageType.text);
    }
}));