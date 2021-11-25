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
const {MessageType,Mimetype} = require('@blackamda/queenamdi-web-api');
const axios = require('axios')
const gplay = require('google-play-scraper');
const yts = require( 'yt-search' )

const Language = require('../language');
const Lang = Language.getString('search');

let LOL = Build.WORKTYPE == 'public' ? false : true


Amdi.operate({pattern: 'getyt ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.YT_DESC}, (async (message, match) => { 
    await QueenAmdi.amdi_setup()
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
    var searching = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text, {quoted: message.data});

    try {
        var arama = await yts(match[1]);
    } catch {
        return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
    }
    var ytgot = '';
    arama.all.map((video) => {
        ytgot += '▶️ *' + video.title + '* - ' + video.url + '\n\n'
    });

    await message.client.sendMessage(message.jid, '*❖ Queen Amdi Search Engine ❖*\n' + Lang.YTS + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ytgot,MessageType.text, {quoted: message.data});
    return await message.client.deleteMessage(message.jid, {id: searching.key.id, remoteJid: message.jid, fromMe: true})
}));

Amdi.operate({pattern: 'getpack ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.APK_DESC}, (async (message, match) => { 
    (function(_0x56ea20,_0x104566){function _0xd436b(_0x3204ed,_0x4fe5b5){return _0x2ef6(_0x4fe5b5- -0x2c,_0x3204ed);}function _0x305775(_0x371ca3,_0x18f7cb){return _0x2ef6(_0x18f7cb- -0x174,_0x371ca3);}var _0x1e8a89=_0x56ea20();while(!![]){try{var _0x394e1e=parseInt(_0x305775(0x78,0x66))/0x1*(-parseInt(_0xd436b(0x1c1,0x1b4))/0x2)+-parseInt(_0x305775(0x5d,0x4e))/0x3+-parseInt(_0xd436b(0x195,0x193))/0x4+-parseInt(_0x305775(0x51,0x56))/0x5*(-parseInt(_0xd436b(0x19e,0x1b0))/0x6)+parseInt(_0xd436b(0x1a9,0x19f))/0x7+parseInt(_0x305775(0x5b,0x53))/0x8*(parseInt(_0xd436b(0x19c,0x1a6))/0x9)+parseInt(_0x305775(0x5c,0x5d))/0xa*(parseInt(_0x305775(0x62,0x63))/0xb);if(_0x394e1e===_0x104566)break;else _0x1e8a89['push'](_0x1e8a89['shift']());}catch(_0x5db31a){_0x1e8a89['push'](_0x1e8a89['shift']());}}}(_0x4fff,0x701c5),await QueenAmdi['\x61\x6d\x64\x69\x5f\x73\x65\x74\x75\x70']());function _0x2ef6(_0x42eb5b,_0x46d277){var _0x4fff76=_0x4fff();return _0x2ef6=function(_0x2ef6df,_0x1d9b98){_0x2ef6df=_0x2ef6df-0x1be;var _0x5904bc=_0x4fff76[_0x2ef6df];if(_0x2ef6['\x6c\x4a\x44\x62\x6d\x6e']===undefined){var _0x113a5c=function(_0x5cbb4e){var _0x261183='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var _0x2c51d1='',_0x21dc3a='';for(var _0x1c7127=0x0,_0x350bbe,_0x4f2b48,_0x3918f1=0x0;_0x4f2b48=_0x5cbb4e['\x63\x68\x61\x72\x41\x74'](_0x3918f1++);~_0x4f2b48&&(_0x350bbe=_0x1c7127%0x4?_0x350bbe*0x40+_0x4f2b48:_0x4f2b48,_0x1c7127++%0x4)?_0x2c51d1+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x350bbe>>(-0x2*_0x1c7127&0x6)):0x0){_0x4f2b48=_0x261183['\x69\x6e\x64\x65\x78\x4f\x66'](_0x4f2b48);}for(var _0x553eb3=0x0,_0x40fe26=_0x2c51d1['\x6c\x65\x6e\x67\x74\x68'];_0x553eb3<_0x40fe26;_0x553eb3++){_0x21dc3a+='\x25'+('\x30\x30'+_0x2c51d1['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x553eb3)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x21dc3a);};_0x2ef6['\x49\x4e\x41\x48\x55\x51']=_0x113a5c,_0x42eb5b=arguments,_0x2ef6['\x6c\x4a\x44\x62\x6d\x6e']=!![];}var _0x32a0fb=_0x4fff76[0x0],_0x391d1e=_0x2ef6df+_0x32a0fb,_0x2e5c73=_0x42eb5b[_0x391d1e];return!_0x2e5c73?(_0x5904bc=_0x2ef6['\x49\x4e\x41\x48\x55\x51'](_0x5904bc),_0x42eb5b[_0x391d1e]=_0x5904bc):_0x5904bc=_0x2e5c73,_0x5904bc;},_0x2ef6(_0x42eb5b,_0x46d277);}if(match[0x1]==='')return await message['\x63\x6c\x69\x65\x6e\x74']['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message[_0x1ded0e(0x342,0x342)],Lang[_0x1ded0e(0x339,0x33b)],MessageType[_0x1d57eb(0x352,0x361)]);var searching=await message['\x63\x6c\x69\x65\x6e\x74'][_0x1ded0e(0x332,0x333)+'\x65'](message['\x6a\x69\x64'],Lang[_0x1ded0e(0x330,0x33e)],MessageType[_0x1ded0e(0x31d,0x323)],{'\x71\x75\x6f\x74\x65\x64':message[_0x1ded0e(0x343,0x332)]});function _0x1d57eb(_0x11e192,_0x1d51b9){return _0x2ef6(_0x11e192-0x194,_0x1d51b9);}var _0x5cbb4e={};_0x5cbb4e[_0x1ded0e(0x340,0x33d)]=match[0x1],_0x5cbb4e[_0x1ded0e(0x35a,0x349)]=0xa;function _0x1ded0e(_0x5c3e3e,_0x18b29e){return _0x2ef6(_0x18b29e-0x165,_0x5c3e3e);}const play=await gplay['\x73\x65\x61\x72\x63\x68'](_0x5cbb4e);ini_txt='';for(var x of play){ini_txt+=_0x1d57eb(0x367,0x354)+'\x20'+x['\x74\x69\x74\x6c\x65']+'\x0a',ini_txt+=_0x1ded0e(0x33f,0x340)+'\x3a\x20'+x[_0x1d57eb(0x375,0x375)]+'\x0a',ini_txt+=_0x1d57eb(0x363,0x36e)+_0x1ded0e(0x316,0x325)+x[_0x1ded0e(0x343,0x344)]+'\x0a',ini_txt+=_0x1ded0e(0x335,0x331)+_0x1ded0e(0x319,0x326)+'\x20'+x['\x75\x72\x6c']+'\x0a',ini_txt+=_0x1ded0e(0x33d,0x329)+_0x1d57eb(0x37a,0x36f)+x[_0x1ded0e(0x32b,0x33a)]+(_0x1ded0e(0x330,0x335)+_0x1d57eb(0x35c,0x34b));}await message['\x63\x6c\x69\x65\x6e\x74']['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message[_0x1ded0e(0x333,0x342)],_0x1d57eb(0x379,0x383)+_0x1d57eb(0x35d,0x36e)+_0x1d57eb(0x377,0x366)+'\x0a'+Lang[_0x1ded0e(0x329,0x328)]+(_0x1d57eb(0x372,0x383)+_0x1ded0e(0x33e,0x32a))+ini_txt,MessageType[_0x1ded0e(0x331,0x323)],{'\x71\x75\x6f\x74\x65\x64':message['\x64\x61\x74\x61']});function _0x4fff(){var _0x51899b=['\x38\x6a\x2b\x74\x47\x73\x61\x51\x75\x67\x66\x4a\x41\x32\x66\x4e\x7a\x71','\x34\x50\x41\x53\x34\x50\x41\x53\x34\x50\x41\x53\x34\x50\x41\x53\x34\x50\x41\x53\x34\x50\x41\x53\x63\x47\x4f','\x7a\x67\x76\x53\x7a\x78\x72\x4c\x74\x77\x76\x5a\x43\x57','\x6d\x4a\x72\x57\x41\x75\x58\x79\x75\x78\x69','\x34\x50\x73\x61\x34\x50\x73\x61\x34\x50\x73\x61\x34\x50\x73\x61\x34\x50\x73\x61\x34\x50\x73\x61\x34\x50\x73\x61\x34\x50\x73\x61\x63\x47\x4f','\x42\x77\x72\x50\x69\x66\x6e\x4c\x79\x78\x6a\x4a\x41\x61','\x6d\x4a\x75\x33\x6f\x74\x4b\x57\x71\x4c\x4c\x53\x73\x68\x62\x4d','\x6e\x64\x69\x30\x6e\x64\x43\x5a\x6e\x30\x72\x5a\x74\x33\x48\x57\x77\x61','\x34\x50\x51\x7a\x37\x37\x49\x70\x69\x63\x50\x71\x42\x67\x66\x35\x43\x33\x72\x56','\x7a\x67\x66\x30\x79\x71','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x38\x6a\x2b\x72\x51\x70\x63\x46\x4a\x37\x56\x49\x47\x69\x33\x57\x4e\x35\x6b\x37\x69\x63\x50\x65\x7a\x78\x7a\x4c\x42\x67\x39\x57','\x63\x47\x52\x49\x4c\x69\x64\x49\x4c\x69\x64\x49\x4c\x69\x64\x49\x4c\x69\x64\x49\x4c\x69\x64\x49\x4c\x69\x64\x49\x4c\x69\x64\x49\x4c\x69\x61','\x6d\x4a\x43\x57\x6d\x5a\x43\x57\x6d\x65\x72\x76\x72\x4c\x4c\x6b\x42\x47','\x6e\x74\x71\x5a\x6e\x5a\x65\x33\x79\x4b\x4c\x33\x74\x78\x72\x4e','\x38\x6a\x2b\x74\x4d\x49\x61\x51\x74\x4d\x66\x54\x7a\x73\x4f\x47\x6f\x47','\x79\x77\x44\x4c','\x79\x78\x62\x57\x73\x77\x71','\x74\x4b\x76\x66\x72\x66\x39\x78\x74\x31\x6a\x65\x75\x57','\x6d\x74\x66\x41\x43\x77\x44\x67\x41\x66\x75','\x44\x67\x76\x59\x42\x71','\x72\x30\x76\x75\x78\x30\x31\x70\x72\x65\x71','\x6f\x74\x44\x7a\x44\x30\x66\x76\x43\x75\x6d','\x38\x6a\x2b\x73\x54\x73\x61\x51\x75\x68\x6a\x50\x79\x32\x75\x51\x69\x61','\x6d\x74\x6a\x63\x75\x68\x44\x56\x7a\x75\x75','\x41\x4d\x4c\x4b','\x63\x55\x6b\x77\x52\x6f\x6b\x77\x52\x6f\x6b\x77\x52\x6f\x6b\x77\x52\x6f\x6b\x77\x52\x6f\x6b\x77\x52\x6f\x6b\x77\x52\x6f\x6b\x77\x52\x6f\x6b\x77\x52\x61','\x7a\x67\x76\x32\x7a\x77\x58\x56\x43\x67\x76\x59','\x6d\x74\x6d\x5a\x6f\x68\x4c\x57\x43\x4d\x39\x32\x43\x47','\x43\x68\x6a\x50\x79\x32\x76\x75\x7a\x78\x48\x30','\x41\x32\x76\x35','\x69\x65\x76\x55\x7a\x32\x4c\x55\x7a\x73\x64\x49\x4e\x7a\x79\x51','\x42\x4e\x76\x54','\x6b\x55\x6b\x44\x4c\x49\x62\x72\x44\x77\x76\x4c\x42\x49\x62\x62','\x69\x67\x35\x48\x42\x77\x75\x51\x69\x64\x4f\x47','\x44\x67\x76\x34\x44\x61','\x6d\x74\x71\x34\x6d\x4a\x4b\x5a\x6d\x4c\x76\x6d\x45\x76\x7a\x66\x41\x61','\x7a\x78\x69\x51\x69\x64\x4f\x47','\x43\x4d\x75\x47\x74\x67\x4c\x55\x41\x59\x4f\x47\x6f\x47','\x6e\x5a\x4b\x35\x6d\x64\x4b\x31\x45\x77\x54\x4b\x74\x77\x54\x75','\x75\x66\x6e\x75\x74\x31\x6a\x66'];_0x4fff=function(){return _0x51899b;};return _0x4fff();}return await message['\x63\x6c\x69\x65\x6e\x74'][_0x1ded0e(0x31f,0x32b)+_0x1d57eb(0x368,0x378)](message[_0x1d57eb(0x371,0x362)],{'\x69\x64':searching[_0x1d57eb(0x376,0x376)]['\x69\x64'],'\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64':message[_0x1ded0e(0x345,0x342)],'\x66\x72\x6f\x6d\x4d\x65':!![]});
}));