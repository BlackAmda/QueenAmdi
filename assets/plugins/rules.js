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
const {MessageType, Mimetype} = require('@blackamda/queenamdi-web-api');
const sql = require('./sql/rules');
let LOL = Build.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('rules');

Amdi.operate({pattern: 'rules$', fromMe: LOL,  deleteCommand: false, desc: Lang.RULE_DESC}, (async (message, match) => {
    var hg = await sql.getMessage(message.jid);
    if (hg === false) {
        await message.client.sendMessage(message.jid,Lang.NOT_SET_RULES,MessageType.text, {quoted: message.data});
    } else {
        await message.client.sendMessage(message.jid,'```⚖️' + Lang.TITLE + '⚖️```\n\n' + hg.message,MessageType.text, {quoted: message.data});
    }
}));

Amdi.operate({pattern: 'qawelrules$', fromMe: false,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    var hg = await sql.getMessage(message.jid);
    if (hg === false) {
        await message.client.sendMessage(message.jid,Lang.NOT_SET_RULES,MessageType.text, {quoted: message.data});
    } else {
        await message.client.sendMessage(message.jid,'```⚖️' + Lang.TITLE + '⚖️```\n\n' + hg.message,MessageType.text, {quoted: message.data});
    }
}));

Amdi.operate({pattern: 'setrules (.*)', fromMe: true,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    function _0x18a0a4(_0x32a5d3,_0x2800be){return _0x37dd(_0x2800be- -0x14e,_0x32a5d3);}function _0x2b25(){var _0x2f5455=['\x6d\x74\x65\x34\x6f\x67\x7a\x30\x76\x4d\x4c\x41\x44\x57','\x43\x4e\x76\x53\x7a\x78\x6d','\x6e\x76\x62\x67\x77\x66\x66\x72\x76\x71','\x6f\x74\x43\x57\x6d\x74\x43\x33\x6e\x4d\x66\x4a\x72\x30\x48\x62\x72\x57','\x6d\x4a\x4b\x30\x6d\x5a\x61\x57\x7a\x31\x62\x65\x76\x32\x6e\x72','\x79\x77\x44\x4c','\x7a\x67\x76\x53\x7a\x78\x72\x4c','\x6d\x4a\x61\x33\x6e\x4a\x71\x31\x6f\x67\x31\x75\x77\x76\x4c\x78\x43\x61','\x7a\x67\x76\x53\x7a\x78\x72\x4c\x74\x77\x76\x5a\x43\x57','\x43\x32\x76\x30\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x76\x65\x76\x79\x76\x61','\x6d\x78\x6a\x48\x75\x77\x72\x62\x41\x57','\x6e\x74\x6d\x59\x6e\x74\x4b\x57\x6d\x31\x4c\x35\x41\x78\x72\x56\x73\x61','\x41\x4d\x4c\x4b','\x7a\x67\x66\x30\x79\x71','\x79\x32\x58\x50\x7a\x77\x35\x30','\x6d\x4a\x44\x54\x73\x76\x66\x55\x72\x31\x43','\x6e\x5a\x4b\x32\x6e\x5a\x79\x30\x41\x33\x72\x32\x73\x77\x7a\x58','\x6d\x5a\x43\x35\x6e\x5a\x4b\x32\x6d\x64\x66\x63\x75\x30\x4c\x73\x76\x31\x71','\x74\x4b\x76\x66\x72\x66\x39\x73\x76\x75\x58\x66\x78\x57','\x6d\x5a\x43\x35\x6f\x64\x6a\x57\x44\x65\x31\x64\x73\x75\x69','\x76\x65\x76\x65','\x75\x4c\x76\x6d\x72\x76\x6e\x46\x75\x30\x76\x75\x76\x61','\x44\x67\x76\x34\x44\x61','\x75\x4c\x76\x6d\x72\x76\x6e\x46\x72\x65\x76\x6d\x72\x71'];_0x2b25=function(){return _0x2f5455;};return _0x2b25();}(function(_0x535204,_0x534c12){var _0xe34d05=_0x535204();function _0x185c5f(_0x5e3c36,_0x390b55){return _0x37dd(_0x5e3c36- -0x1d3,_0x390b55);}function _0x522d62(_0x5b40f9,_0x52045a){return _0x37dd(_0x52045a- -0x23f,_0x5b40f9);}while(!![]){try{var _0x2a3db8=parseInt(_0x522d62(-0xd4,-0xc8))/0x1*(-parseInt(_0x185c5f(-0x61,-0x69))/0x2)+-parseInt(_0x522d62(-0xcc,-0xc7))/0x3+parseInt(_0x185c5f(-0x56,-0x50))/0x4*(parseInt(_0x522d62(-0xca,-0xd2))/0x5)+parseInt(_0x185c5f(-0x68,-0x75))/0x6*(-parseInt(_0x522d62(-0xb6,-0xbf))/0x7)+parseInt(_0x522d62(-0xd4,-0xd1))/0x8+parseInt(_0x522d62(-0xcd,-0xc3))/0x9*(-parseInt(_0x522d62(-0xd4,-0xd0))/0xa)+parseInt(_0x185c5f(-0x55,-0x5b))/0xb;if(_0x2a3db8===_0x534c12)break;else _0xe34d05['push'](_0xe34d05['shift']());}catch(_0x20fd74){_0xe34d05['push'](_0xe34d05['shift']());}}}(_0x2b25,0xd8e74));function _0x52d638(_0x267f1f,_0x5cebd0){return _0x37dd(_0x5cebd0-0x3be,_0x267f1f);}function _0x37dd(_0x573b90,_0x262b07){var _0x2b25ac=_0x2b25();return _0x37dd=function(_0x37dd80,_0x17d40d){_0x37dd80=_0x37dd80-0x169;var _0x4c57bc=_0x2b25ac[_0x37dd80];if(_0x37dd['\x77\x4c\x51\x78\x7a\x6a']===undefined){var _0x593e24=function(_0x538bfd){var _0x13d462='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var _0xd3ca='',_0x35088c='';for(var _0x12dc45=0x0,_0x503ac2,_0x2d51c2,_0x3e6177=0x0;_0x2d51c2=_0x538bfd['\x63\x68\x61\x72\x41\x74'](_0x3e6177++);~_0x2d51c2&&(_0x503ac2=_0x12dc45%0x4?_0x503ac2*0x40+_0x2d51c2:_0x2d51c2,_0x12dc45++%0x4)?_0xd3ca+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x503ac2>>(-0x2*_0x12dc45&0x6)):0x0){_0x2d51c2=_0x13d462['\x69\x6e\x64\x65\x78\x4f\x66'](_0x2d51c2);}for(var _0x32e37b=0x0,_0xba578=_0xd3ca['\x6c\x65\x6e\x67\x74\x68'];_0x32e37b<_0xba578;_0x32e37b++){_0x35088c+='\x25'+('\x30\x30'+_0xd3ca['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x32e37b)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x35088c);};_0x37dd['\x71\x63\x64\x76\x62\x62']=_0x593e24,_0x573b90=arguments,_0x37dd['\x77\x4c\x51\x78\x7a\x6a']=!![];}var _0x38e5c1=_0x2b25ac[0x0],_0x39e48c=_0x37dd80+_0x38e5c1,_0x42f9b3=_0x573b90[_0x39e48c];return!_0x42f9b3?(_0x4c57bc=_0x37dd['\x71\x63\x64\x76\x62\x62'](_0x4c57bc),_0x573b90[_0x39e48c]=_0x4c57bc):_0x4c57bc=_0x42f9b3,_0x4c57bc;},_0x37dd(_0x573b90,_0x262b07);}if(match[0x1]==='')return await message[_0x52d638(0x539,0x539)]['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message[_0x52d638(0x52a,0x537)],Lang[_0x52d638(0x541,0x53d)+_0x18a0a4(0x2e,0x28)],MessageType[_0x18a0a4(0xf,0x1b)],{'\x71\x75\x6f\x74\x65\x64':message['\x64\x61\x74\x61']});else{if(match[0x1]===_0x18a0a4(0x20,0x23))return await message[_0x18a0a4(0x24,0x2d)][_0x52d638(0x53f,0x533)+'\x65'](message[_0x52d638(0x534,0x537)],Lang[_0x52d638(0x52a,0x528)+_0x52d638(0x53c,0x53f)],MessageType[_0x18a0a4(0x1a,0x1b)],{'\x71\x75\x6f\x74\x65\x64':message[_0x18a0a4(0x24,0x2c)]}),await sql[_0x52d638(0x52d,0x531)+_0x52d638(0x533,0x52e)](message[_0x18a0a4(0x27,0x2b)],_0x18a0a4(0x24,0x1e));return await sql[_0x52d638(0x529,0x532)](message[_0x52d638(0x536,0x537)],'\x72\x75\x6c\x65\x73',match[0x1]['\x72\x65\x70\x6c\x61\x63\x65'](/#/g,'\x0a')),await message[_0x18a0a4(0x39,0x2d)][_0x52d638(0x53b,0x533)+'\x65'](message[_0x52d638(0x541,0x537)],Lang[_0x18a0a4(0x27,0x34)+'\x45\x44'],MessageType[_0x18a0a4(0x1d,0x1b)],{'\x71\x75\x6f\x74\x65\x64':message[_0x52d638(0x538,0x538)]});}
}));