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
const Heroku = require('heroku-client');
const {secondsToHms} = require('./afk');
const got = require('got');
const {MessageType} = require('@blackamda/queenamdi-web-api');
const sql = require('./sql/greetings');

const Language = require('../language');
const Lang = Language.getString('heroku');

const heroku = new Heroku({
    token: Build.HEROKU.API_KEY
});


let baseURI = '/apps/' + Build.HEROKU.APP_NAME;

Amdi.operate({pattern: 'restart', fromMe: true, desc: Lang.RESTART_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

    await message.client.sendMessage(message.jid,Lang.RESTART_MSG, MessageType.text);
    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text);
    });
}));

Amdi.operate({pattern: 'shutdown', fromMe: true, desc: Lang.SHUTDOWN_DESC, dontAddCommandList: true, deleteCommand: false}, (async(message, match) => {

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


if (Build.WORKTYPE == 'private') {

    Amdi.operate({pattern: 'dyno', fromMe: true, desc: Lang.DYNO_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

        heroku.get('/account').then(async (account) => {
            // have encountered some issues while calling this API via heroku-client
            // so let's do it manually
            url = "https://api.heroku.com/accounts/" + account.id + "/actions/get-quota"
            headers = {
                "User-Agent": "Chrome/80.0.3987.149 Mobile Safari/537.36",
                "Authorization": "Bearer " + Build.HEROKU.API_KEY,
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
else if (Build.WORKTYPE == 'public') {

    Amdi.operate({pattern: 'dyno', fromMe: true, desc: Lang.DYNO_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

        heroku.get('/account').then(async (account) => {
            // have encountered some issues while calling this API via heroku-client
            // so let's do it manually
            url = "https://api.heroku.com/accounts/" + account.id + "/actions/get-quota"
            headers = {
                "User-Agent": "Chrome/80.0.3987.149 Mobile Safari/537.36",
                "Authorization": "Bearer " + Build.HEROKU.API_KEY,
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

Amdi.operate({pattern: 'setvar ?(.*)', fromMe: true, desc: Lang.SETVAR_DESC, dontAddCommandList: true, deleteCommand: false}, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.KEY_VAL_MISSING, MessageType.text);
    if (match[1] === 'ANTIBAD' || match[1] === 'ANTIBUG' || match[1] === 'ANTILINK' || match[1] === 'LANGUAGE' || match[1] === 'WORK_TYPE') return await message.client.sendMessage(message.jid,'```Use``` *.settings* command to change.', MessageType.text);

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


Amdi.operate({pattern: 'delvar ?(.*)', fromMe: true, desc: Lang.DELVAR_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

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

Amdi.operate({pattern: 'getvar ?(.*)', fromMe: true, desc: Lang.GETVAR_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

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

Amdi.operate({pattern: 'allconfig', fromMe: true, desc: Lang.GETVAR_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

    const ADDMSG = "ADD_MESSAGE"
    const AFK = "AFK_MESSAGE"
    const ALIVLOG = "ALIVE_LOGO"
    const ALIMSG = "ALIVE_MESSAGE"
    const CHAT = "AMDI_CHAT"
    const SESSION = "AMDI_SESSION"
    const ANBA = "ANTIBAD"
    const BUG = "ANTIBUG"
    const LINK = "ANTILINK"
    const BANMSG = "BAN_MESSAGE"
    const BLOCK = "BLOCK_CHAT"
    const BLOMSG = "BLOCK_MESSAGE"
    const BYELOG = "BYE_LOGO"
    const CA = "CAP"
    const DEMMSG = "DEMOTE_MESSAGE"
    const HAND = "HANDLERS"
    const IMAP = "IMGBB"
    const KIKMSG = "KICKME_MESSAGE"
    const LANG = "LANGUAGE"
    const MEN = "MENU"
    const MUMSG = "MUTE_MESSAGE"
    const PANEMO = "PANEL_EMOJI"
    const PROMSG = "PROMOTE_MESSAGE"
    const NAME = "NAME"
    const SENREA = "SEND_READ"
    const SIZE = "MAX_SIZE"
    const SU = "SUDO"
    const UNMU = "UNMUTE_MESSAGE"
    const WELLOG = "WELCOME_LOGO"
    const WKTY = "WORK_TYPE"

    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        for (vr in vars) {
            if (ADDMSG.trim() == vr) var var1 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (AFK.trim() == vr) var var2 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (ALIVLOG.trim() == vr) var var3 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (ALIMSG.trim() == vr) var var4 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (CHAT.trim() == vr) var var13 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (SESSION.trim() == vr) var var5 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (ANBA.trim() == vr) var var6 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (BANMSG.trim() == vr) var var8 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (BLOCK.trim() == vr) var var9 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (BLOMSG.trim() == vr) var var10 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (BYELOG.trim() == vr) var var11 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (CA.trim() == vr) var var12 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (DEMMSG.trim() == vr) var var14 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (HAND.trim() == vr) var var15 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (IMAP.trim() == vr) var var16 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (KIKMSG.trim() == vr) var var17 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (LANG.trim() == vr) var var18 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (MEN.trim() == vr) var var19 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (MUMSG.trim() == vr) var var20 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (NAME.trim() == vr) var var23 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (PANEMO.trim() == vr) var var21 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (PROMSG.trim() == vr) var var22 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (SENREA.trim() == vr) var var24 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (SIZE.trim() == vr) var var32 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (SU.trim() == vr) var var30 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (UNMU.trim() == vr) var var26 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (WELLOG.trim() == vr) var var27 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (WKTY.trim() == vr) var var28 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (BUG.trim() == vr) var var29 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        for (vr in vars) {
            if (LINK.trim() == vr) var var25 = ("```💾 {} :``` \n{}\n\n".format(vr, vars[vr]));
        }
        await message.client.sendMessage(message.jid,
            `*🔐 Queen Amdi Build Vars List*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n` + 
            var1 +
            var2 +
            var3 +
            var4 +
            var13 +
            var5 +
            var6 +
            var29 +
            var8 +
            var9 +
            var10 +
            var11 +
            var12 +
            var14 +
            var15 +
            var16 +
            var17 +
            var18 +
            var19 +
            var20 +
            var23 +
            var21 +
            var22 +
            var24 +
            var32 +
            var25 +
            var30 +
            var26 +
            var27 +
            var28
        , MessageType.text);
    }).catch(async (error) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text);
    });
}));


Amdi.operate({pattern: 'setup ?(.*)', fromMe: true, desc: Lang.SETUP_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

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
