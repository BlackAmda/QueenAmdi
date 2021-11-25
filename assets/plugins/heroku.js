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
    (function(_0x11f20f,_0x580e22){function _0x48ae09(_0x122fa4,_0x215e90){return _0x202c(_0x122fa4- -0x34c,_0x215e90);}function _0x4b28d8(_0xaff6b3,_0x32b756){return _0x202c(_0x32b756-0x285,_0xaff6b3);}const _0x8d057c=_0x11f20f();while(!![]){try{const _0x2ee213=-parseInt(_0x4b28d8(0x3aa,0x3bd))/0x1+parseInt(_0x4b28d8(0x3f6,0x3de))/0x2*(parseInt(_0x4b28d8(0x3df,0x3c6))/0x3)+-parseInt(_0x4b28d8(0x3de,0x3e5))/0x4+-parseInt(_0x4b28d8(0x3d6,0x3e1))/0x5*(parseInt(_0x48ae09(-0x1f4,-0x20a))/0x6)+-parseInt(_0x48ae09(-0x210,-0x209))/0x7+parseInt(_0x4b28d8(0x3af,0x3c8))/0x8*(-parseInt(_0x4b28d8(0x3e2,0x3d4))/0x9)+parseInt(_0x48ae09(-0x211,-0x227))/0xa;if(_0x2ee213===_0x580e22)break;else _0x8d057c['push'](_0x8d057c['shift']());}catch(_0x49eacb){_0x8d057c['push'](_0x8d057c['shift']());}}}(_0x183e,0x82e9c));const ADDMSG=_0x7fc816(-0xcc,-0xe0)+'\x45',AFK=_0x7fc816(-0xd5,-0xbe)+'\x45',ALIVLOG=_0x7fc816(-0xdc,-0xc3),ALIMSG=_0x7fc816(-0xfb,-0xf3)+'\x41\x47\x45',CHAT=_0x7fc816(-0xce,-0xd5),SESSION=_0x7fc816(-0xe1,-0xf6)+'\x4f\x4e',ANBA=_0x7fc816(-0xf1,-0xde),BUG='\x41\x4e\x54\x49\x42\x55\x47',LINK='\x41\x4e\x54\x49\x4c\x49\x4e\x4b',BANMSG='\x42\x41\x4e\x5f\x4d\x45\x53\x53\x41\x47'+'\x45',BLOCK=_0x4094c9(0xf6,0xed);function _0x4094c9(_0x5e8691,_0x5422ec){return _0x202c(_0x5422ec- -0x5d,_0x5e8691);}function _0x183e(){const _0x2f8afc=['\x74\x65\x66\x6f\x72\x31\x76\x62\x72\x30\x75','\x6e\x4a\x75\x30\x42\x32\x58\x5a\x45\x4d\x31\x6e','\x6d\x74\x75\x34\x6f\x64\x4b\x59\x77\x4e\x6a\x41\x43\x78\x4c\x4d','\x71\x75\x7a\x6c\x78\x30\x31\x66\x75\x31\x6e\x62\x72\x57','\x75\x30\x66\x68\x72\x71','\x6d\x74\x71\x57\x6f\x74\x76\x33\x76\x78\x4c\x5a\x79\x31\x79','\x75\x31\x76\x65\x74\x57','\x71\x30\x66\x71','\x6c\x32\x6e\x56\x42\x4d\x7a\x50\x7a\x59\x31\x32\x79\x71','\x6d\x5a\x4b\x35\x6d\x4a\x43\x59\x72\x65\x66\x65\x7a\x68\x76\x75','\x71\x75\x31\x65\x73\x76\x39\x64\x73\x65\x66\x75','\x73\x75\x31\x68\x71\x4b\x69','\x71\x75\x72\x65\x78\x30\x31\x66\x75\x31\x6e\x62\x72\x57','\x44\x67\x76\x34\x44\x61','\x7a\x4d\x39\x59\x42\x77\x66\x30','\x71\x75\x58\x6a\x76\x4b\x76\x46\x74\x75\x76\x74\x75\x57','\x72\x65\x76\x6e\x74\x31\x72\x66\x78\x30\x31\x66\x75\x57','\x73\x30\x4c\x64\x73\x30\x31\x66\x78\x30\x31\x66\x75\x57','\x74\x75\x76\x6f\x76\x71','\x6f\x64\x61\x33\x6e\x74\x6d\x31\x72\x78\x48\x72\x79\x78\x62\x51','\x75\x31\x6e\x62\x72\x30\x75','\x74\x4b\x66\x6e\x72\x71','\x6d\x4a\x43\x57\x6f\x74\x75\x32\x6e\x5a\x62\x31\x79\x4d\x35\x65\x75\x30\x57','\x6d\x74\x6d\x32\x6e\x4a\x47\x34\x6d\x33\x76\x71\x72\x65\x6a\x4e\x76\x71','\x71\x4c\x4c\x66\x78\x30\x58\x70\x72\x30\x38','\x71\x75\x35\x75\x73\x75\x6a\x62\x72\x61','\x79\x67\x62\x47\x38\x6a\x2b\x73\x56\x49\x62\x37\x46\x73\x61\x36\x79\x61','\x76\x30\x39\x73\x73\x31\x39\x75\x77\x76\x62\x66','\x6d\x30\x39\x6f\x43\x4c\x76\x74\x41\x71','\x74\x76\x76\x75\x72\x76\x39\x6e\x72\x76\x6e\x74\x71\x71','\x6d\x74\x6d\x30\x6f\x64\x79\x30\x44\x68\x72\x67\x77\x78\x76\x55','\x76\x4d\x66\x59\x43\x59\x62\x6d\x41\x78\x6e\x30\x6b\x47','\x79\x67\x61\x47\x63\x4e\x54\x39\x63\x47\x4f','\x44\x68\x6a\x50\x42\x71','\x79\x32\x66\x30\x79\x32\x47','\x71\x75\x44\x66','\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71','\x71\x4b\x58\x70\x71\x30\x54\x46\x71\x30\x48\x62\x76\x61','\x75\x65\x66\x6f\x72\x75\x58\x46\x72\x75\x31\x70\x73\x47','\x71\x4b\x58\x70\x71\x30\x54\x46\x74\x75\x76\x74\x75\x57','\x42\x77\x72\x50\x69\x65\x6a\x31\x41\x77\x58\x4b\x69\x61','\x71\x75\x31\x65\x73\x76\x39\x74\x72\x76\x6e\x74\x73\x71','\x6e\x64\x75\x57\x44\x4b\x4c\x6d\x44\x75\x66\x51','\x41\x4d\x4c\x4b','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x75\x30\x76\x6f\x72\x66\x39\x73\x72\x75\x66\x65','\x71\x75\x58\x6a\x76\x4b\x76\x46\x74\x65\x39\x68\x74\x57','\x75\x66\x6a\x70\x74\x75\x39\x75\x72\x76\x39\x6e\x72\x71','\x7a\x32\x76\x30','\x79\x32\x58\x50\x7a\x77\x35\x30'];_0x183e=function(){return _0x2f8afc;};return _0x183e();}const BLOMSG=_0x4094c9(0xed,0xef)+_0x7fc816(-0xe7,-0xf7),BYELOG=_0x7fc816(-0xf2,-0xfd),CA=_0x7fc816(-0xd1,-0xc2),DEMMSG=_0x7fc816(-0xfa,-0xf6)+'\x53\x41\x47\x45',HAND='\x48\x41\x4e\x44\x4c\x45\x52\x53',IMAP=_0x4094c9(0xfb,0x105),KIKMSG=_0x7fc816(-0xf9,-0xeb)+_0x4094c9(0x100,0xfe),LANG=_0x4094c9(0x112,0xfa);function _0x7fc816(_0x3b0ed8,_0x487314){return _0x202c(_0x3b0ed8- -0x22f,_0x487314);}const MEN=_0x4094c9(0xe8,0xda),MUMSG=_0x4094c9(0xdd,0xe5)+'\x47\x45',PANEMO=_0x7fc816(-0xe4,-0xe5)+'\x49',PROMSG=_0x7fc816(-0xdb,-0xed)+_0x4094c9(0xdf,0xdc),NAME=_0x4094c9(0xe9,0xdd),SENREA=_0x4094c9(0xff,0xf5),SIZE='\x4d\x41\x58\x5f\x53\x49\x5a\x45',SU=_0x7fc816(-0xd2,-0xd7),UNMU='\x55\x4e\x4d\x55\x54\x45\x5f\x4d\x45\x53'+_0x4094c9(0xfb,0xfe),WELLOG='\x57\x45\x4c\x43\x4f\x4d\x45\x5f\x4c\x4f'+'\x47\x4f',WKTY=_0x4094c9(0xce,0xe3);function _0x202c(_0x59c6e3,_0x43e66e){const _0x183e07=_0x183e();return _0x202c=function(_0x202c0e,_0x8d95d0){_0x202c0e=_0x202c0e-0x132;let _0x512a24=_0x183e07[_0x202c0e];if(_0x202c['\x76\x76\x6c\x6b\x51\x51']===undefined){var _0x58dd48=function(_0x379a78){const _0x8beb6e='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0x2b026e='',_0x22fea8='';for(let _0x470395=0x0,_0x33b0b1,_0x1eb5c1,_0x20c5c4=0x0;_0x1eb5c1=_0x379a78['\x63\x68\x61\x72\x41\x74'](_0x20c5c4++);~_0x1eb5c1&&(_0x33b0b1=_0x470395%0x4?_0x33b0b1*0x40+_0x1eb5c1:_0x1eb5c1,_0x470395++%0x4)?_0x2b026e+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x33b0b1>>(-0x2*_0x470395&0x6)):0x0){_0x1eb5c1=_0x8beb6e['\x69\x6e\x64\x65\x78\x4f\x66'](_0x1eb5c1);}for(let _0xb90ff5=0x0,_0x46efaf=_0x2b026e['\x6c\x65\x6e\x67\x74\x68'];_0xb90ff5<_0x46efaf;_0xb90ff5++){_0x22fea8+='\x25'+('\x30\x30'+_0x2b026e['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0xb90ff5)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x22fea8);};_0x202c['\x6f\x71\x59\x71\x70\x6b']=_0x58dd48,_0x59c6e3=arguments,_0x202c['\x76\x76\x6c\x6b\x51\x51']=!![];}const _0xdbef6a=_0x183e07[0x0],_0x106af0=_0x202c0e+_0xdbef6a,_0x3661ee=_0x59c6e3[_0x106af0];return!_0x3661ee?(_0x512a24=_0x202c['\x6f\x71\x59\x71\x70\x6b'](_0x512a24),_0x59c6e3[_0x106af0]=_0x512a24):_0x512a24=_0x3661ee,_0x512a24;},_0x202c(_0x59c6e3,_0x43e66e);}await heroku[_0x7fc816(-0xda,-0xd1)](baseURI+(_0x4094c9(0xfe,0x102)+'\x72\x73'))['\x74\x68\x65\x6e'](async _0x379a78=>{for(vr in _0x379a78){if(ADDMSG['\x74\x72\x69\x6d']()==vr)var _0x8beb6e=('\x60\x60\x60\ud83d\udcbe\x20\x7b\x7d\x20\x3a\x60'+'\x60\x60\x20\x0a\x7b\x7d\x0a\x0a')[_0xbe5b88(0x491,0x48e)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(AFK['\x74\x72\x69\x6d']()==vr)var _0x2b026e=(_0xbe5b88(0x49d,0x4b2)+_0x203673(-0x1d7,-0x1d4))[_0x203673(-0x1f2,-0x1e6)](vr,_0x379a78[vr]);}function _0x203673(_0x5f2522,_0x2500ed){return _0x7fc816(_0x2500ed- -0xea,_0x5f2522);}for(vr in _0x379a78){if(ALIVLOG[_0x203673(-0x1e7,-0x1d3)]()==vr)var _0x22fea8=(_0x203673(-0x1dd,-0x1da)+_0xbe5b88(0x4a3,0x49f))[_0xbe5b88(0x491,0x487)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(ALIMSG[_0xbe5b88(0x4a4,0x4a4)]()==vr)var _0x470395=('\x60\x60\x60\ud83d\udcbe\x20\x7b\x7d\x20\x3a\x60'+'\x60\x60\x20\x0a\x7b\x7d\x0a\x0a')['\x66\x6f\x72\x6d\x61\x74'](vr,_0x379a78[vr]);}function _0xbe5b88(_0x4f0969,_0x5dcf16){return _0x4094c9(_0x5dcf16,_0x4f0969-0x3bb);}for(vr in _0x379a78){if(CHAT['\x74\x72\x69\x6d']()==vr)var _0x33b0b1=(_0xbe5b88(0x49d,0x490)+'\x60\x60\x20\x0a\x7b\x7d\x0a\x0a')['\x66\x6f\x72\x6d\x61\x74'](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(SESSION[_0x203673(-0x1ea,-0x1d3)]()==vr)var _0x1eb5c1=(_0x203673(-0x1ef,-0x1da)+_0x203673(-0x1e5,-0x1d4))[_0x203673(-0x1d8,-0x1e6)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(ANBA[_0xbe5b88(0x4a4,0x4b7)]()==vr)var _0x20c5c4=(_0x203673(-0x1f1,-0x1da)+_0x203673(-0x1e1,-0x1d4))[_0x203673(-0x1dc,-0x1e6)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(BANMSG['\x74\x72\x69\x6d']()==vr)var _0xb90ff5=(_0x203673(-0x1f0,-0x1da)+'\x60\x60\x20\x0a\x7b\x7d\x0a\x0a')[_0x203673(-0x1d3,-0x1e6)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(BLOCK[_0xbe5b88(0x4a4,0x4a0)]()==vr)var _0x46efaf=('\x60\x60\x60\ud83d\udcbe\x20\x7b\x7d\x20\x3a\x60'+_0xbe5b88(0x4a3,0x495))[_0x203673(-0x1fe,-0x1e6)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(BLOMSG[_0xbe5b88(0x4a4,0x4af)]()==vr)var _0x5680d2=(_0xbe5b88(0x49d,0x4a9)+'\x60\x60\x20\x0a\x7b\x7d\x0a\x0a')[_0xbe5b88(0x491,0x486)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(BYELOG[_0xbe5b88(0x4a4,0x4a0)]()==vr)var _0x59e263=(_0x203673(-0x1d9,-0x1da)+_0xbe5b88(0x4a3,0x492))[_0xbe5b88(0x491,0x483)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(CA['\x74\x72\x69\x6d']()==vr)var _0x328209=(_0xbe5b88(0x49d,0x491)+_0xbe5b88(0x4a3,0x4a7))[_0x203673(-0x1d2,-0x1e6)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(DEMMSG[_0x203673(-0x1ca,-0x1d3)]()==vr)var _0x3023f1=('\x60\x60\x60\ud83d\udcbe\x20\x7b\x7d\x20\x3a\x60'+'\x60\x60\x20\x0a\x7b\x7d\x0a\x0a')['\x66\x6f\x72\x6d\x61\x74'](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(HAND[_0x203673(-0x1e0,-0x1d3)]()==vr)var _0x10f5b4=('\x60\x60\x60\ud83d\udcbe\x20\x7b\x7d\x20\x3a\x60'+'\x60\x60\x20\x0a\x7b\x7d\x0a\x0a')[_0xbe5b88(0x491,0x48e)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(IMAP['\x74\x72\x69\x6d']()==vr)var _0x2af324=(_0x203673(-0x1ec,-0x1da)+_0x203673(-0x1d6,-0x1d4))[_0x203673(-0x1ed,-0x1e6)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(KIKMSG[_0xbe5b88(0x4a4,0x4b2)]()==vr)var _0x48e5bc=(_0xbe5b88(0x49d,0x48e)+_0xbe5b88(0x4a3,0x4b4))[_0x203673(-0x1f7,-0x1e6)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(LANG[_0xbe5b88(0x4a4,0x49f)]()==vr)var _0x4918f6=(_0x203673(-0x1f1,-0x1da)+_0xbe5b88(0x4a3,0x490))[_0xbe5b88(0x491,0x47e)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(MEN['\x74\x72\x69\x6d']()==vr)var _0x2e4708=(_0xbe5b88(0x49d,0x484)+_0x203673(-0x1e1,-0x1d4))['\x66\x6f\x72\x6d\x61\x74'](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(MUMSG[_0x203673(-0x1de,-0x1d3)]()==vr)var _0x74cc8f=(_0x203673(-0x1d2,-0x1da)+'\x60\x60\x20\x0a\x7b\x7d\x0a\x0a')[_0xbe5b88(0x491,0x493)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(NAME[_0x203673(-0x1c2,-0x1d3)]()==vr)var _0x39bbb4=(_0x203673(-0x1c8,-0x1da)+'\x60\x60\x20\x0a\x7b\x7d\x0a\x0a')[_0xbe5b88(0x491,0x4a5)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(PANEMO[_0xbe5b88(0x4a4,0x4aa)]()==vr)var _0x41f1ff=(_0x203673(-0x1e2,-0x1da)+_0x203673(-0x1e1,-0x1d4))[_0xbe5b88(0x491,0x49a)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(PROMSG['\x74\x72\x69\x6d']()==vr)var _0x3b4f77=(_0xbe5b88(0x49d,0x490)+_0xbe5b88(0x4a3,0x494))['\x66\x6f\x72\x6d\x61\x74'](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(SENREA['\x74\x72\x69\x6d']()==vr)var _0x3b2bed=(_0x203673(-0x1db,-0x1da)+_0xbe5b88(0x4a3,0x4b8))[_0xbe5b88(0x491,0x49f)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(SIZE['\x74\x72\x69\x6d']()==vr)var _0x505b37=(_0x203673(-0x1cb,-0x1da)+_0xbe5b88(0x4a3,0x4a0))[_0xbe5b88(0x491,0x4a0)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(SU[_0xbe5b88(0x4a4,0x4ac)]()==vr)var _0x40b201=('\x60\x60\x60\ud83d\udcbe\x20\x7b\x7d\x20\x3a\x60'+_0xbe5b88(0x4a3,0x4b6))[_0x203673(-0x1df,-0x1e6)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(UNMU[_0x203673(-0x1ca,-0x1d3)]()==vr)var _0x136240=(_0x203673(-0x1ef,-0x1da)+'\x60\x60\x20\x0a\x7b\x7d\x0a\x0a')[_0x203673(-0x1f2,-0x1e6)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(WELLOG[_0x203673(-0x1d8,-0x1d3)]()==vr)var _0x2be5c0=(_0xbe5b88(0x49d,0x489)+_0xbe5b88(0x4a3,0x498))[_0xbe5b88(0x491,0x481)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(WKTY[_0x203673(-0x1da,-0x1d3)]()==vr)var _0x5664e4=(_0x203673(-0x1c4,-0x1da)+_0xbe5b88(0x4a3,0x4a0))[_0x203673(-0x1eb,-0x1e6)](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(BUG['\x74\x72\x69\x6d']()==vr)var _0x5cb975=(_0xbe5b88(0x49d,0x492)+_0xbe5b88(0x4a3,0x49d))['\x66\x6f\x72\x6d\x61\x74'](vr,_0x379a78[vr]);}for(vr in _0x379a78){if(LINK[_0x203673(-0x1d5,-0x1d3)]()==vr)var _0x45f193=(_0x203673(-0x1e2,-0x1da)+'\x60\x60\x20\x0a\x7b\x7d\x0a\x0a')[_0x203673(-0x1cf,-0x1e6)](vr,_0x379a78[vr]);}await message['\x63\x6c\x69\x65\x6e\x74'][_0x203673(-0x1cd,-0x1c8)+'\x65'](message[_0xbe5b88(0x4ae,0x4c7)],'\x2a\ud83d\udd10\x20\x51\x75\x65\x65\x6e\x20\x41'+_0xbe5b88(0x4ab,0x4bb)+_0x203673(-0x1e4,-0x1d5)+'\x0a\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac'+'\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\x0a\x0a'+_0x8beb6e+_0x2b026e+_0x22fea8+_0x470395+_0x33b0b1+_0x1eb5c1+_0x20c5c4+_0x5cb975+_0xb90ff5+_0x46efaf+_0x5680d2+_0x59e263+_0x328209+_0x3023f1+_0x10f5b4+_0x2af324+_0x48e5bc+_0x4918f6+_0x2e4708+_0x74cc8f+_0x39bbb4+_0x41f1ff+_0x3b4f77+_0x3b2bed+_0x505b37+_0x45f193+_0x40b201+_0x136240+_0x2be5c0+_0x5664e4,MessageType[_0xbe5b88(0x490,0x47a)]);})[_0x4094c9(0xfc,0xea)](async _0x12e5d5=>{function _0x2e16c8(_0x50833e,_0x42625b){return _0x7fc816(_0x42625b- -0x189,_0x50833e);}function _0x2e87c7(_0x32e733,_0x3460d8){return _0x4094c9(_0x3460d8,_0x32e733- -0x7f);}await message[_0x2e87c7(0x7a,0x65)][_0x2e16c8(-0x267,-0x267)+'\x65'](message[_0x2e87c7(0x74,0x5d)],_0x12e5d5[_0x2e16c8(-0x25a,-0x26f)],MessageType[_0x2e16c8(-0x291,-0x286)]);});    
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
