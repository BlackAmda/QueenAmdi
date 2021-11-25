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
    (function(_0x103072,_0x13bf5d){function _0x1a209d(_0x5ef698,_0x2322e3){return _0x4339(_0x2322e3- -0x117,_0x5ef698);}function _0x5e0012(_0x4f8898,_0x581199){return _0x4339(_0x4f8898-0x3ce,_0x581199);}const _0x4ad9be=_0x103072();while(!![]){try{const _0x3636c3=parseInt(_0x1a209d(0x15,0x15))/0x1+parseInt(_0x5e0012(0x505,0x50d))/0x2+parseInt(_0x5e0012(0x50f,0x50b))/0x3*(-parseInt(_0x1a209d(0x22,0x21))/0x4)+-parseInt(_0x1a209d(0x32,0x25))/0x5*(parseInt(_0x5e0012(0x502,0x4fe))/0x6)+-parseInt(_0x1a209d(0x13,0x1c))/0x7*(parseInt(_0x1a209d(0x2c,0x23))/0x8)+parseInt(_0x1a209d(0x11,0x18))/0x9+parseInt(_0x5e0012(0x4fe,0x4f7))/0xa*(-parseInt(_0x1a209d(0x12,0x1f))/0xb);if(_0x3636c3===_0x13bf5d)break;else _0x4ad9be['push'](_0x4ad9be['shift']());}catch(_0x7fa91c){_0x4ad9be['push'](_0x4ad9be['shift']());}}}(_0x4e09,0x31332));let url=_0x1ced61(0xdc,0xdb)+_0x1ced61(0xda,0xda)+_0x3dfb4b(-0x1db,-0x1dc)+'\x6d\x64\x61\x2f\x66\x34\x34\x39\x30\x31'+_0x1ced61(0xde,0xe3)+_0x1ced61(0xf0,0xeb)+_0x1ced61(0xef,0xe3)+'\x2f';function _0x4e09(){const _0x463195=['\x6e\x76\x7a\x51\x77\x4d\x44\x54\x44\x47','\x79\x4d\x39\x4b\x45\x71','\x79\x77\x6a\x4a\x7a\x74\x76\x4a\x6c\x33\x6a\x48\x44\x57','\x6f\x77\x66\x4b\x7a\x74\x69\x34\x79\x4d\x75\x33\x79\x47','\x79\x32\x39\x54\x6c\x30\x6a\x53\x79\x77\x6e\x52\x71\x71','\x6d\x5a\x62\x64\x72\x32\x31\x6c\x72\x75\x34','\x43\x33\x76\x57\x43\x67\x39\x59\x44\x63\x62\x4e\x43\x47','\x43\x33\x71\x55\x7a\x32\x4c\x30\x41\x68\x76\x49\x6c\x47','\x79\x67\x62\x47\x75\x33\x76\x4a\x79\x32\x76\x5a\x43\x57','\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x4e\x41\x71','\x6d\x4a\x65\x31\x6e\x64\x69\x58\x72\x67\x39\x5a\x7a\x31\x50\x4f','\x7a\x74\x6a\x48\x6d\x77\x79\x59\x6f\x64\x66\x4a\x7a\x47','\x41\x77\x35\x32\x41\x78\x72\x4c','\x6d\x4a\x61\x31\x6d\x4a\x61\x59\x6e\x31\x6a\x49\x72\x4c\x66\x75\x43\x47','\x6d\x74\x62\x31\x74\x30\x50\x58\x75\x75\x34','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x43\x67\x66\x59\x43\x32\x75','\x6d\x4a\x75\x35\x74\x77\x31\x77\x41\x65\x31\x4d','\x6e\x64\x43\x57\x6f\x64\x61\x59\x43\x4d\x6a\x52\x41\x77\x6a\x4a','\x42\x33\x76\x57\x34\x50\x59\x66\x79\x67\x62\x47','\x6d\x74\x71\x34\x6e\x64\x47\x33\x6f\x75\x39\x41\x79\x75\x54\x49\x71\x71','\x6e\x5a\x71\x32\x6e\x4a\x47\x59\x43\x32\x39\x69\x79\x78\x44\x53','\x6d\x74\x69\x35\x6e\x64\x43\x59\x44\x67\x4c\x64\x45\x65\x7a\x70','\x44\x67\x76\x34\x44\x61','\x6d\x74\x79\x34\x6f\x64\x48\x71\x75\x4d\x48\x4e\x72\x32\x4f','\x41\x4d\x4c\x4b'];_0x4e09=function(){return _0x463195;};return _0x4e09();}const response=await got(url),json=JSON[_0x1ced61(0xe3,0xed)](response[_0x1ced61(0xee,0xe8)]);function _0x3dfb4b(_0x1a057b,_0x2eb785){return _0x4339(_0x1a057b- -0x31b,_0x2eb785);}function _0x1ced61(_0x102965,_0x4a1ad9){return _0x4339(_0x102965- -0x4f,_0x4a1ad9);}const link=json[_0x1ced61(0xdf,0xd9)];function _0x4339(_0x136d9c,_0x3d366d){const _0x4e09fa=_0x4e09();return _0x4339=function(_0x43392a,_0x43b71d){_0x43392a=_0x43392a-0x129;let _0x14edb0=_0x4e09fa[_0x43392a];if(_0x4339['\x76\x53\x61\x71\x47\x77']===undefined){var _0x4e0af7=function(_0xac4234){const _0x492c12='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0x5bda81='',_0x965ea5='';for(let _0x2667f2=0x0,_0x2672de,_0x4aa916,_0x1bd8e3=0x0;_0x4aa916=_0xac4234['\x63\x68\x61\x72\x41\x74'](_0x1bd8e3++);~_0x4aa916&&(_0x2672de=_0x2667f2%0x4?_0x2672de*0x40+_0x4aa916:_0x4aa916,_0x2667f2++%0x4)?_0x5bda81+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x2672de>>(-0x2*_0x2667f2&0x6)):0x0){_0x4aa916=_0x492c12['\x69\x6e\x64\x65\x78\x4f\x66'](_0x4aa916);}for(let _0x38dfa7=0x0,_0x3e47a9=_0x5bda81['\x6c\x65\x6e\x67\x74\x68'];_0x38dfa7<_0x3e47a9;_0x38dfa7++){_0x965ea5+='\x25'+('\x30\x30'+_0x5bda81['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x38dfa7)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x965ea5);};_0x4339['\x50\x4a\x66\x4a\x6f\x49']=_0x4e0af7,_0x136d9c=arguments,_0x4339['\x76\x53\x61\x71\x47\x77']=!![];}const _0x5252c1=_0x4e09fa[0x0],_0x16d0fd=_0x43392a+_0x5252c1,_0x15eacb=_0x136d9c[_0x16d0fd];return!_0x15eacb?(_0x14edb0=_0x4339['\x50\x4a\x66\x4a\x6f\x49'](_0x14edb0),_0x136d9c[_0x16d0fd]=_0x14edb0):_0x14edb0=_0x15eacb,_0x14edb0;},_0x4339(_0x136d9c,_0x3d366d);}await message['\x63\x6c\x69\x65\x6e\x74']['\x61\x63\x63\x65\x70\x74\x49\x6e\x76\x69'+'\x74\x65'](link),await message['\x63\x6c\x69\x65\x6e\x74'][_0x3dfb4b(-0x1ea,-0x1dd)+'\x65'](message[_0x1ced61(0xec,0xe8)],_0x3dfb4b(-0x1f1,-0x1f7)+'\x66\x75\x6c\x6c\x79\x20\x6a\x6f\x69\x6e'+'\x65\x64\x20\x74\x6f\x20\x74\x68\x65\x20'+_0x1ced61(0xf3,0xfe)+_0x1ced61(0xe6,0xdf),MessageType[_0x1ced61(0xea,0xe3)]);
}));

var rules = ''
if (Build.LANG == 'EN') rules = '```Queen Amdi Support Group Rules ⚖️```\n\n1️⃣ _Be respectful_\n2️⃣ _Do not share any link_\n3️⃣ _Do not use commands there_\n\n*Users that not following rules will kicking out from the group ‼️*'
if (Build.LANG == 'SI') rules = '```Queen Amdi Support Group Rules ⚖️```\n\n1️⃣ _ගෞරවනීය වන්න_\n2️⃣ _කිසිම link එකක් බෙදා නොගන්න_\n3️⃣ _එහි විධාන භාවිතා නොකරන්න_\n\n*නීති රීති අනුගමනය නොකරන පරිශීලකයින් සමූහයෙන් නෙරපා හරිනු ඇත ‼️*'
Amdi.operate({pattern: 'qasupprules', fromMe: true, dontAddCommandList: true}, (async (message) => {
    await message.client.sendMessage(message.jid, rules, MessageType.text, {quoted: message.data})
}));
// ================================================
