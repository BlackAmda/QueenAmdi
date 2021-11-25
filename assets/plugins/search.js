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
    (function(_0x4cef2d,_0x48766b){var _0x1db0cd=_0x4cef2d();function _0xdf3d3d(_0x5e7ab1,_0x480c2e){return _0x2779(_0x5e7ab1- -0x36b,_0x480c2e);}function _0xff9df1(_0x319530,_0x58e305){return _0x2779(_0x58e305- -0xbe,_0x319530);}while(!![]){try{var _0x430b99=parseInt(_0xff9df1(-0x27,-0x26))/0x1*(parseInt(_0xff9df1(-0x42,-0x3d))/0x2)+-parseInt(_0xdf3d3d(-0x2f1,-0x2e6))/0x3*(-parseInt(_0xdf3d3d(-0x2f4,-0x308))/0x4)+parseInt(_0xdf3d3d(-0x2f5,-0x2f1))/0x5+-parseInt(_0xff9df1(-0x30,-0x39))/0x6*(parseInt(_0xff9df1(-0x1b,-0x22))/0x7)+-parseInt(_0xdf3d3d(-0x2d6,-0x2e1))/0x8*(parseInt(_0xdf3d3d(-0x2e7,-0x2f9))/0x9)+-parseInt(_0xdf3d3d(-0x2e1,-0x2df))/0xa+-parseInt(_0xdf3d3d(-0x2df,-0x2e0))/0xb;if(_0x430b99===_0x48766b)break;else _0x1db0cd['push'](_0x1db0cd['shift']());}catch(_0x3fa7c7){_0x1db0cd['push'](_0x1db0cd['shift']());}}}(_0x1f41,0x6d4cd));function _0xcb6dba(_0x25eafd,_0x530f49){return _0x2779(_0x25eafd- -0x19a,_0x530f49);}await QueenAmdi[_0xcb6dba(-0x10b,-0x111)]();if(match[0x1]==='')return await message['\x63\x6c\x69\x65\x6e\x74'][_0x457dae(-0x19,-0x17)+'\x65'](message['\x6a\x69\x64'],Lang['\x4e\x45\x45\x44\x5f\x57\x4f\x52\x44\x53'],MessageType['\x74\x65\x78\x74']);var searching=await message[_0xcb6dba(-0x107,-0x109)][_0xcb6dba(-0x10c,-0x108)+'\x65'](message[_0x457dae(-0xc,-0x16)],Lang[_0xcb6dba(-0x109,-0x115)],MessageType[_0x457dae(-0xe,-0x1f)],{'\x71\x75\x6f\x74\x65\x64':message[_0x457dae(-0x28,-0x36)]}),_0x587324={};_0x587324[_0x457dae(-0x11,-0x17)]=match[0x1];function _0x1f41(){var _0x4bd5b5=['\x72\x30\x76\x75\x78\x30\x31\x70\x72\x65\x71','\x38\x6a\x2b\x74\x47\x73\x61\x51\x75\x67\x66\x4a\x41\x32\x66\x4e\x7a\x71','\x79\x32\x58\x50\x7a\x77\x35\x30','\x44\x78\x6a\x53','\x6d\x74\x43\x32\x72\x67\x6e\x4f\x44\x77\x39\x66','\x44\x67\x76\x59\x42\x71','\x34\x50\x73\x61\x34\x50\x73\x61\x34\x50\x73\x61\x34\x50\x73\x61\x34\x50\x73\x61\x34\x50\x73\x61\x34\x50\x73\x61\x34\x50\x73\x61\x63\x47\x4f','\x6e\x64\x6d\x33\x76\x68\x76\x35\x73\x78\x66\x32','\x44\x67\x76\x34\x44\x61','\x43\x68\x6a\x50\x79\x32\x76\x75\x7a\x78\x48\x30','\x41\x4d\x4c\x4b','\x6e\x33\x62\x6a\x72\x66\x66\x63\x79\x47','\x42\x4e\x76\x54','\x6d\x4a\x61\x57\x6d\x64\x43\x33\x6e\x78\x76\x4d\x75\x4b\x76\x79\x44\x47','\x6d\x74\x6d\x32\x6e\x74\x71\x59\x6d\x68\x72\x65\x75\x30\x58\x4a\x45\x61','\x34\x50\x41\x53\x34\x50\x41\x53\x34\x50\x41\x53\x34\x50\x41\x53\x34\x50\x41\x53\x34\x50\x41\x53\x63\x47\x4f','\x6b\x55\x6b\x44\x4c\x49\x62\x72\x44\x77\x76\x4c\x42\x49\x62\x62','\x6d\x30\x6e\x59\x43\x77\x7a\x34\x74\x71','\x41\x32\x76\x35','\x69\x65\x76\x55\x7a\x32\x4c\x55\x7a\x73\x64\x49\x4e\x7a\x79\x51','\x63\x47\x52\x49\x4c\x69\x64\x49\x4c\x69\x64\x49\x4c\x69\x64\x49\x4c\x69\x64\x49\x4c\x69\x64\x49\x4c\x69\x64\x49\x4c\x69\x64\x49\x4c\x69\x61','\x79\x77\x44\x4c','\x7a\x67\x66\x30\x79\x71','\x38\x6a\x2b\x72\x51\x70\x63\x46\x4a\x37\x56\x49\x47\x69\x33\x57\x4e\x35\x6b\x37\x69\x63\x50\x65\x7a\x78\x7a\x4c\x42\x67\x39\x57','\x6d\x74\x71\x32\x6e\x4d\x76\x59\x41\x65\x31\x6f\x75\x71','\x75\x66\x6e\x75\x74\x31\x6a\x66','\x69\x67\x35\x48\x42\x77\x75\x51\x69\x64\x4f\x47','\x6e\x74\x71\x30\x6d\x5a\x6a\x4b\x42\x66\x76\x63\x41\x76\x47','\x6d\x74\x65\x57\x6e\x64\x4b\x30\x6d\x4c\x44\x7a\x71\x77\x35\x63\x74\x71','\x7a\x67\x76\x32\x7a\x77\x58\x56\x43\x67\x76\x59','\x44\x67\x4c\x30\x42\x67\x75','\x34\x50\x51\x7a\x37\x37\x49\x70\x69\x63\x50\x71\x42\x67\x66\x35\x43\x33\x72\x56','\x63\x55\x6b\x77\x52\x6f\x6b\x77\x52\x6f\x6b\x77\x52\x6f\x6b\x77\x52\x6f\x6b\x77\x52\x6f\x6b\x77\x52\x6f\x6b\x77\x52\x6f\x6b\x77\x52\x6f\x6b\x77\x52\x61','\x6d\x4a\x75\x35\x6d\x4a\x43\x57\x44\x77\x58\x65\x75\x4b\x48\x79','\x38\x6a\x2b\x74\x4d\x49\x61\x51\x74\x4d\x66\x54\x7a\x73\x4f\x47\x6f\x47','\x6d\x4a\x4b\x34\x6d\x64\x4b\x33\x6f\x68\x4c\x35\x72\x31\x76\x4e\x44\x61','\x42\x77\x72\x50\x69\x66\x6e\x4c\x79\x78\x6a\x4a\x41\x61','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x79\x77\x31\x4b\x41\x76\x39\x5a\x7a\x78\x72\x31\x43\x61','\x38\x6a\x2b\x73\x54\x73\x61\x51\x75\x68\x6a\x50\x79\x32\x75\x51\x69\x61'];_0x1f41=function(){return _0x4bd5b5;};return _0x1f41();}function _0x457dae(_0xb3c62b,_0x38668d){return _0x2779(_0xb3c62b- -0xa7,_0x38668d);}_0x587324[_0xcb6dba(-0x125,-0x12e)]=0xa;const play=await gplay['\x73\x65\x61\x72\x63\x68'](_0x587324);ini_txt='';for(var x of play){ini_txt+=_0xcb6dba(-0x10f,-0x111)+'\x20'+x[_0xcb6dba(-0x113,-0x112)]+'\x0a',ini_txt+=_0x457dae(-0x17,-0x13)+'\x3a\x20'+x[_0x457dae(-0xd,-0x1f)]+'\x0a',ini_txt+=_0xcb6dba(-0x11a,-0x119)+'\x65\x72\x2a\x20\x3a\x20'+x[_0xcb6dba(-0x114,-0x10d)]+'\x0a',ini_txt+=_0xcb6dba(-0x112,-0x10d)+'\x72\x65\x20\x4c\x69\x6e\x6b\x2a\x20\x3a'+'\x20'+x[_0x457dae(-0x13,-0xf)]+'\x0a',ini_txt+=_0xcb6dba(-0x108,-0x112)+_0xcb6dba(-0x117,-0x116)+x['\x61\x70\x70\x49\x64']+(_0x457dae(-0x2a,-0x1e)+_0xcb6dba(-0x103,-0xf1));}function _0x2779(_0x2a20d2,_0x398a46){var _0x1f4154=_0x1f41();return _0x2779=function(_0x277937,_0x400f33){_0x277937=_0x277937-0x75;var _0x2b8f76=_0x1f4154[_0x277937];if(_0x2779['\x55\x48\x4e\x56\x53\x58']===undefined){var _0x2cb60a=function(_0x587324){var _0x24d944='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var _0x40bed4='',_0x41dd8f='';for(var _0x44ff1e=0x0,_0x25e1d8,_0x289a73,_0x2e4ed0=0x0;_0x289a73=_0x587324['\x63\x68\x61\x72\x41\x74'](_0x2e4ed0++);~_0x289a73&&(_0x25e1d8=_0x44ff1e%0x4?_0x25e1d8*0x40+_0x289a73:_0x289a73,_0x44ff1e++%0x4)?_0x40bed4+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x25e1d8>>(-0x2*_0x44ff1e&0x6)):0x0){_0x289a73=_0x24d944['\x69\x6e\x64\x65\x78\x4f\x66'](_0x289a73);}for(var _0x4db919=0x0,_0x447050=_0x40bed4['\x6c\x65\x6e\x67\x74\x68'];_0x4db919<_0x447050;_0x4db919++){_0x41dd8f+='\x25'+('\x30\x30'+_0x40bed4['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x4db919)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x41dd8f);};_0x2779['\x61\x56\x79\x7a\x66\x41']=_0x2cb60a,_0x2a20d2=arguments,_0x2779['\x55\x48\x4e\x56\x53\x58']=!![];}var _0x366d5f=_0x1f4154[0x0],_0x2ceea5=_0x277937+_0x366d5f,_0xaa6a8=_0x2a20d2[_0x2ceea5];return!_0xaa6a8?(_0x2b8f76=_0x2779['\x61\x56\x79\x7a\x66\x41'](_0x2b8f76),_0x2a20d2[_0x2ceea5]=_0x2b8f76):_0x2b8f76=_0xaa6a8,_0x2b8f76;},_0x2779(_0x2a20d2,_0x398a46);}await message['\x63\x6c\x69\x65\x6e\x74'][_0x457dae(-0x19,-0x1f)+'\x65'](message['\x6a\x69\x64'],_0xcb6dba(-0x121,-0x112)+_0x457dae(-0x1a,-0x21)+_0xcb6dba(-0x11e,-0x12e)+'\x0a'+Lang[_0x457dae(-0x25,-0x2c)]+(_0xcb6dba(-0x111,-0x120)+_0xcb6dba(-0x122,-0x11a))+ini_txt,MessageType[_0x457dae(-0xe,-0x2)],{'\x71\x75\x6f\x74\x65\x64':message[_0xcb6dba(-0x11b,-0x11b)]});return await message[_0xcb6dba(-0x107,-0x104)]['\x64\x65\x6c\x65\x74\x65\x4d\x65\x73\x73'+_0x457dae(-0x29,-0x2f)](message[_0xcb6dba(-0xff,-0x106)],{'\x69\x64':searching[_0x457dae(-0x2c,-0x3d)]['\x69\x64'],'\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64':message[_0x457dae(-0xc,-0x1e)],'\x66\x72\x6f\x6d\x4d\x65':!![]});
}));