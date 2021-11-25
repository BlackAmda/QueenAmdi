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
    (function(_0x53d045,_0x16f2d8){var _0x3d6027=_0x53d045();function _0x125fe8(_0x43c59a,_0x53c3d4){return _0xdf4c(_0x43c59a- -0xe5,_0x53c3d4);}function _0x285b8b(_0x564d1d,_0x5deb15){return _0xdf4c(_0x5deb15-0xcc,_0x564d1d);}while(!![]){try{var _0x16661c=-parseInt(_0x285b8b(0x2ca,0x2c7))/0x1*(parseInt(_0x285b8b(0x2bf,0x2ca))/0x2)+parseInt(_0x285b8b(0x2c3,0x2ba))/0x3+-parseInt(_0x125fe8(0x112,0x110))/0x4*(parseInt(_0x285b8b(0x2cf,0x2ce))/0x5)+parseInt(_0x125fe8(0x115,0x11c))/0x6+parseInt(_0x125fe8(0x11c,0x11f))/0x7*(-parseInt(_0x285b8b(0x2c3,0x2c9))/0x8)+-parseInt(_0x285b8b(0x2c2,0x2c1))/0x9*(-parseInt(_0x285b8b(0x2d9,0x2d2))/0xa)+-parseInt(_0x285b8b(0x2ba,0x2c0))/0xb*(-parseInt(_0x285b8b(0x2c2,0x2c4))/0xc);if(_0x16661c===_0x16f2d8)break;else _0x3d6027['push'](_0x3d6027['shift']());}catch(_0x1bf180){_0x3d6027['push'](_0x3d6027['shift']());}}}(_0x5f53,0x8beb4));function _0x5f53(){var _0x18c25b=['\x76\x65\x76\x79\x76\x61','\x7a\x67\x76\x53\x7a\x78\x72\x4c\x74\x77\x76\x5a\x43\x57','\x6f\x64\x65\x58\x6d\x65\x6e\x62\x71\x4e\x50\x59\x73\x57','\x79\x32\x58\x50\x7a\x77\x35\x30','\x6d\x74\x43\x5a\x6f\x64\x47\x32\x6d\x32\x76\x49\x43\x75\x39\x5a\x41\x57','\x7a\x67\x76\x53\x7a\x78\x72\x4c','\x79\x77\x44\x4c','\x75\x4c\x76\x6d\x72\x76\x6e\x46\x75\x30\x76\x75\x76\x61','\x76\x65\x76\x65','\x44\x67\x76\x34\x44\x61','\x6d\x4a\x47\x30\x6f\x74\x65\x58\x45\x4e\x50\x4e\x41\x77\x54\x4b','\x6d\x4a\x71\x5a\x41\x4c\x72\x73\x76\x30\x44\x58','\x43\x4e\x76\x53\x7a\x78\x6d','\x6e\x5a\x43\x58\x6d\x4b\x7a\x71\x43\x68\x50\x30\x44\x57','\x6e\x74\x75\x59\x74\x66\x62\x58\x44\x32\x48\x4e','\x7a\x67\x66\x30\x79\x71','\x6d\x5a\x69\x31\x6e\x5a\x4b\x59\x6f\x65\x58\x7a\x74\x76\x6e\x30\x72\x61','\x6d\x77\x6e\x6f\x75\x30\x50\x4c\x79\x71','\x74\x4b\x76\x66\x72\x66\x39\x73\x76\x75\x58\x66\x78\x57','\x6d\x4a\x61\x57\x43\x76\x62\x52\x74\x76\x62\x34','\x6d\x4a\x69\x5a\x6e\x4a\x47\x57\x6d\x4d\x35\x78\x75\x4d\x76\x6b\x42\x61','\x75\x4c\x76\x6d\x72\x76\x6e\x46\x72\x65\x76\x6d\x72\x71','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x6e\x4a\x4b\x59\x6d\x5a\x44\x4a\x76\x31\x44\x79\x71\x32\x38','\x6d\x74\x61\x5a\x6d\x67\x48\x78\x72\x32\x54\x67\x44\x47','\x41\x4d\x4c\x4b'];_0x5f53=function(){return _0x18c25b;};return _0x5f53();}function _0x8cd35(_0x5c799e,_0x371a22){return _0xdf4c(_0x371a22-0x2e4,_0x5c799e);}function _0xdf4c(_0x4f6a5b,_0x5f6400){var _0x5f5374=_0x5f53();return _0xdf4c=function(_0xdf4cb6,_0x59835b){_0xdf4cb6=_0xdf4cb6-0x1ed;var _0x369feb=_0x5f5374[_0xdf4cb6];if(_0xdf4c['\x49\x62\x46\x57\x66\x52']===undefined){var _0x46dd28=function(_0x32230b){var _0x12aa58='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var _0x47cc82='',_0x1f2ae5='';for(var _0x46466a=0x0,_0x256711,_0x30996c,_0x327259=0x0;_0x30996c=_0x32230b['\x63\x68\x61\x72\x41\x74'](_0x327259++);~_0x30996c&&(_0x256711=_0x46466a%0x4?_0x256711*0x40+_0x30996c:_0x30996c,_0x46466a++%0x4)?_0x47cc82+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x256711>>(-0x2*_0x46466a&0x6)):0x0){_0x30996c=_0x12aa58['\x69\x6e\x64\x65\x78\x4f\x66'](_0x30996c);}for(var _0x2bf70b=0x0,_0x586045=_0x47cc82['\x6c\x65\x6e\x67\x74\x68'];_0x2bf70b<_0x586045;_0x2bf70b++){_0x1f2ae5+='\x25'+('\x30\x30'+_0x47cc82['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x2bf70b)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x1f2ae5);};_0xdf4c['\x4e\x59\x6e\x48\x79\x72']=_0x46dd28,_0x4f6a5b=arguments,_0xdf4c['\x49\x62\x46\x57\x66\x52']=!![];}var _0x573114=_0x5f5374[0x0],_0x5a3225=_0xdf4cb6+_0x573114,_0x19d32b=_0x4f6a5b[_0x5a3225];return!_0x19d32b?(_0x369feb=_0xdf4c['\x4e\x59\x6e\x48\x79\x72'](_0x369feb),_0x4f6a5b[_0x5a3225]=_0x369feb):_0x369feb=_0x19d32b,_0x369feb;},_0xdf4c(_0x4f6a5b,_0x5f6400);}function _0x4d344c(_0x819d1f,_0x16d54f){return _0xdf4c(_0x16d54f- -0x201,_0x819d1f);}if(match[0x1]==='')return await message['\x63\x6c\x69\x65\x6e\x74'][_0x4d344c(-0x4,-0x1)+'\x65'](message['\x6a\x69\x64'],Lang[_0x8cd35(0x4d8,0x4e0)+_0x8cd35(0x4e5,0x4e8)],MessageType[_0x8cd35(0x4e4,0x4d7)],{'\x71\x75\x6f\x74\x65\x64':message[_0x4d344c(-0x8,-0x8)]});else{if(match[0x1]===_0x8cd35(0x4dd,0x4d3))return await message[_0x4d344c(-0x1b,-0x14)][_0x8cd35(0x4e5,0x4e4)+'\x65'](message[_0x8cd35(0x4ea,0x4e7)],Lang[_0x8cd35(0x4e8,0x4e3)+_0x4d344c(-0xe,-0xf)],MessageType[_0x4d344c(-0x2,-0xe)],{'\x71\x75\x6f\x74\x65\x64':message['\x64\x61\x74\x61']}),await sql[_0x4d344c(-0x9,0x4)+_0x4d344c(-0x16,-0x11)](message[_0x4d344c(0x9,0x2)],_0x4d344c(-0xf,-0xb));return await sql['\x73\x65\x74\x4d\x65\x73\x73\x61\x67\x65'](message[_0x4d344c(-0x3,0x2)],_0x4d344c(-0xc,-0xb),match[0x1]['\x72\x65\x70\x6c\x61\x63\x65'](/#/g,'\x0a')),await message[_0x4d344c(-0x9,-0x14)][_0x8cd35(0x4ed,0x4e4)+'\x65'](message['\x6a\x69\x64'],Lang[_0x4d344c(-0x13,-0x10)+'\x45\x44'],MessageType[_0x4d344c(-0x1a,-0xe)],{'\x71\x75\x6f\x74\x65\x64':message[_0x4d344c(-0x5,-0x8)]});}
}));