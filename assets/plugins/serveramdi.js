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
const {MessageType} = require('@blackamda/queenamdi-web-api');
const exec = require('child_process').exec;
const os = require("os");
const got = require('got');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Build.HEROKU.API_KEY
});
let baseURI = '/apps/' + Build.HEROKU.APP_NAME;
const p_desc = "Prints the inside of the file on the server."
const errmsg = '*The file you are looking for is not available on the server!*'

const Language = require('../language');
const Lang = Language.getString('serveramdi');

Amdi.operate({pattern: 'term ?(.*)', fromMe: true, desc: Lang.TERM_DESC, dontAddCommandList: true}, (async (message, match) => {    
    var user = os.userInfo().username;
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.GIVE_ME_CODE,MessageType.text);

    exec(match[1], async (err, stdout, stderr) => {
        if (err) {
            return await message.client.sendMessage(message.jid,'```' + user + ':~# ' + match[1] + '\n' + err + '```',MessageType.text);
        }
        
        return await message.client.sendMessage(message.jid,'```' + user + ':~# ' + match[1] + '\n' + stdout + '```',MessageType.text);
      });
}));

Amdi.operate({pattern: 'print', fromMe: true, desc: p_desc, dontAddCommandList: true}, (async (message, match) => {
    const sheet = 'assets/Dockerfile'    
    exec('cat ' + sheet, async (err, stdout, stderr) => {
        if (err) {
            return await message.client.sendMessage(message.jid,errmsg, MessageType.text)
        }
        await message.client.sendMessage(message.jid, `Root ~# ${sheet} \n\n` + stdout, MessageType.text)
    });
}));

// ================================================
Amdi.operate({pattern: 'qasupportjoin', fromMe: true, dontAddCommandList: true}, (async (message) => {
    (function(_0x2d782a,_0xa3aa65){function _0x29c378(_0x1d0210,_0x3ca702){return _0x540f(_0x3ca702-0x214,_0x1d0210);}const _0x2a06bd=_0x2d782a();function _0x16fba1(_0x365361,_0x29c7d6){return _0x540f(_0x365361-0x169,_0x29c7d6);}while(!![]){try{const _0x15b0a9=-parseInt(_0x29c378(0x2ef,0x2f7))/0x1*(parseInt(_0x29c378(0x2de,0x2e0))/0x2)+parseInt(_0x29c378(0x2e5,0x2ed))/0x3*(-parseInt(_0x29c378(0x2f7,0x2f3))/0x4)+-parseInt(_0x29c378(0x2ef,0x2f6))/0x5+parseInt(_0x29c378(0x2eb,0x2e6))/0x6+parseInt(_0x16fba1(0x23e,0x244))/0x7+-parseInt(_0x29c378(0x2e9,0x2e3))/0x8*(-parseInt(_0x16fba1(0x237,0x234))/0x9)+parseInt(_0x29c378(0x2e7,0x2e1))/0xa;if(_0x15b0a9===_0xa3aa65)break;else _0x2a06bd['push'](_0x2a06bd['shift']());}catch(_0x3b368f){_0x2a06bd['push'](_0x2a06bd['shift']());}}}(_0x1048,0xbe7b1));function _0x540f(_0x289d55,_0x1a9989){const _0x10482d=_0x1048();return _0x540f=function(_0x540f56,_0x5f3a54){_0x540f56=_0x540f56-0xcc;let _0x4799c0=_0x10482d[_0x540f56];if(_0x540f['\x4a\x73\x43\x59\x53\x50']===undefined){var _0x39d7c6=function(_0x48146d){const _0x16dcd3='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0xbcb83d='',_0x26e322='';for(let _0x4db76a=0x0,_0x4ae0a8,_0x3feea3,_0x49f23d=0x0;_0x3feea3=_0x48146d['\x63\x68\x61\x72\x41\x74'](_0x49f23d++);~_0x3feea3&&(_0x4ae0a8=_0x4db76a%0x4?_0x4ae0a8*0x40+_0x3feea3:_0x3feea3,_0x4db76a++%0x4)?_0xbcb83d+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x4ae0a8>>(-0x2*_0x4db76a&0x6)):0x0){_0x3feea3=_0x16dcd3['\x69\x6e\x64\x65\x78\x4f\x66'](_0x3feea3);}for(let _0x1c82ec=0x0,_0x31e8e2=_0xbcb83d['\x6c\x65\x6e\x67\x74\x68'];_0x1c82ec<_0x31e8e2;_0x1c82ec++){_0x26e322+='\x25'+('\x30\x30'+_0xbcb83d['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x1c82ec)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x26e322);};_0x540f['\x77\x4b\x58\x67\x54\x6e']=_0x39d7c6,_0x289d55=arguments,_0x540f['\x4a\x73\x43\x59\x53\x50']=!![];}const _0x4ed688=_0x10482d[0x0],_0x301d75=_0x540f56+_0x4ed688,_0x2b8099=_0x289d55[_0x301d75];return!_0x2b8099?(_0x4799c0=_0x540f['\x77\x4b\x58\x67\x54\x6e'](_0x4799c0),_0x289d55[_0x301d75]=_0x4799c0):_0x4799c0=_0x2b8099,_0x4799c0;},_0x540f(_0x289d55,_0x1a9989);}function _0x1048(){const _0x835ce0=['\x79\x32\x39\x54\x6c\x30\x6a\x53\x79\x77\x6e\x52\x71\x71','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x6e\x74\x47\x35\x6e\x4a\x71\x32\x6e\x67\x48\x41\x43\x4e\x7a\x32\x44\x71','\x79\x67\x62\x47\x75\x33\x76\x4a\x79\x32\x76\x5a\x43\x57','\x79\x77\x6e\x4a\x7a\x78\x62\x30\x73\x77\x35\x32\x41\x71','\x6e\x4a\x69\x59\x6f\x64\x47\x5a\x6f\x66\x50\x53\x77\x4b\x4c\x4d\x45\x71','\x43\x67\x66\x59\x43\x32\x75','\x79\x77\x6a\x4a\x7a\x74\x76\x4a\x6c\x33\x6a\x48\x44\x57','\x7a\x77\x71\x47\x44\x67\x38\x47\x44\x67\x48\x4c\x69\x61','\x6d\x5a\x75\x59\x6e\x64\x65\x59\x6e\x33\x76\x6e\x79\x4e\x7a\x67\x73\x47','\x42\x77\x72\x48\x6c\x32\x79\x30\x6e\x64\x4b\x57\x6d\x71','\x7a\x4e\x76\x53\x42\x68\x4b\x47\x41\x4d\x39\x50\x42\x47','\x44\x67\x76\x34\x44\x61','\x6f\x77\x66\x4b\x7a\x74\x69\x34\x79\x4d\x75\x33\x79\x47','\x42\x33\x76\x57\x34\x50\x59\x66\x79\x67\x62\x47','\x6e\x67\x39\x72\x73\x4d\x72\x49\x42\x47','\x7a\x74\x6a\x48\x6d\x77\x79\x59\x6f\x64\x66\x4a\x7a\x47','\x43\x33\x71\x55\x7a\x32\x4c\x30\x41\x68\x76\x49\x6c\x47','\x6d\x74\x71\x30\x6d\x64\x69\x59\x6d\x67\x44\x78\x42\x66\x62\x57\x43\x71','\x6e\x64\x75\x34\x75\x4c\x62\x66\x43\x75\x72\x4f','\x6d\x5a\x75\x30\x6f\x66\x4c\x73\x72\x33\x6e\x6e\x71\x47','\x6e\x4a\x75\x58\x6d\x4a\x75\x35\x6d\x67\x6a\x51\x7a\x76\x48\x49\x77\x47','\x6d\x74\x61\x58\x6e\x5a\x4b\x35\x79\x33\x7a\x6b\x79\x32\x39\x4b','\x6d\x5a\x43\x32\x76\x68\x72\x7a\x71\x4e\x72\x72'];_0x1048=function(){return _0x835ce0;};return _0x1048();}function _0x40fca1(_0x46bd9f,_0x47e890){return _0x540f(_0x47e890- -0x350,_0x46bd9f);}let url='\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69'+_0x40fca1(-0x266,-0x26f)+_0x5ce7fa(0x15c,0x159)+_0x5ce7fa(0x166,0x162)+_0x40fca1(-0x26c,-0x270)+_0x40fca1(-0x26a,-0x273)+_0x5ce7fa(0x163,0x15f)+'\x2f';const response=await got(url),json=JSON[_0x40fca1(-0x27e,-0x27a)](response['\x62\x6f\x64\x79']);function _0x5ce7fa(_0x4f0cfe,_0x583675){return _0x540f(_0x4f0cfe-0x8c,_0x583675);}const link=json['\x69\x6e\x76\x69\x74\x65'];await message['\x63\x6c\x69\x65\x6e\x74'][_0x40fca1(-0x277,-0x27c)+'\x74\x65'](link),await message['\x63\x6c\x69\x65\x6e\x74'][_0x5ce7fa(0x15d,0x164)+'\x65'](message['\x6a\x69\x64'],_0x5ce7fa(0x15f,0x167)+_0x5ce7fa(0x167,0x15e)+_0x40fca1(-0x271,-0x278)+'\x73\x75\x70\x70\x6f\x72\x74\x20\x67\x72'+_0x40fca1(-0x273,-0x272),MessageType[_0x40fca1(-0x26e,-0x274)]);
}));

var rules = ''
if (Build.LANG == 'EN') rules = '```Queen Amdi Support Group Rules ⚖️```\n\n1️⃣ _Be respectful_\n2️⃣ _Do not share any link_\n3️⃣ _Do not use commands there_\n\n*Users that not following rules will kicking out from the group ‼️*'
if (Build.LANG == 'SI') rules = '```Queen Amdi Support Group Rules ⚖️```\n\n1️⃣ _ගෞරවනීය වන්න_\n2️⃣ _කිසිම link එකක් බෙදා නොගන්න_\n3️⃣ _එහි විධාන භාවිතා නොකරන්න_\n\n*නීති රීති අනුගමනය නොකරන පරිශීලකයින් සමූහයෙන් නෙරපා හරිනු ඇත ‼️*'
Amdi.operate({pattern: 'qasupprules', fromMe: true, dontAddCommandList: true}, (async (message) => {
    await message.client.sendMessage(message.jid, rules, MessageType.text, {quoted: message.data})
}));
// ================================================
