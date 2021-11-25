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
const {WAConnection, MessageType, Mimetype} = require('@blackamda/queenamdi-web-api');
const TinyURL = require('tinyurl');
const axios = require('axios');
const Heroku = require('heroku-client');
const QRCode = require('qrcode')
const Language = require('../language');
const Lang = Language.getString('web');
const SLang = Language.getString('webss');
let LOL = Build.WORKTYPE == 'public' ? false : true

const heroku = new Heroku({
    token: Build.HEROKU.API_KEY
});


Amdi.operate({pattern: 'speedtest ?(.*)', fromMe: true, desc: Lang.SPEEDTEST_DESC}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    if (match[1] == 'user' || match[1] == 'User') {
        
        // Preliminary Message
        var transition_message = await QueenAmdi.speedtest_begin(Build.LANG)

        // Ping
        var start = new Date().getTime();
        var testing = await message.client.sendMessage(message.jid, transition_message.user_msg, MessageType.text, {quoted: message.data})
        var end = new Date().getTime();

        // Speedtest Modules
        var user_download = await QueenAmdi.speedtest_user()
        var user_upload = await QueenAmdi.speedtest_userup()
        var auth_message = await QueenAmdi.speedtest_message(Build.LANG)
        var act_ping = end - start
        var realping = act_ping.toString()

        // Real Download Speed
        var realspeed_once = Number(user_download.mbps) / 8
        var realspeed = realspeed_once.toString()
        var realspeed_msg = auth_message.download_value.replace('{count}', realspeed)

        // Real Upload Speed
        var realupload_once = Number(user_upload.mbps) / 8
        var realupload = realupload_once.toString()
        var realupload_msg = auth_message.download_value.replace('{count}', realupload)

        // Final Message
        var payload = auth_message.download + realspeed_msg + '\n' + 
            auth_message.upload + realupload_msg + '\n' +
            auth_message.ping + realping + auth_message.ms + '\n' +
            auth_message.extra + '\n\n' +
            auth_message.byte_speed_d + user_download.bps + '\n' +
            auth_message.kb_speed_d + user_download.kbps + '\n' +
            auth_message.mb_speed_d + user_download.mbps + '\n' +
            auth_message.gb_speed_d + user_download.gbps
        
        await message.client.deleteMessage(message.jid, {id: testing.key.id, remoteJid: message.jid, fromMe: true});
        await message.client.sendMessage(message.jid, payload, MessageType.text, {quoted: message.data})

    } else if (match[1] == 'server' || match[1] == 'Server') {
        
        // Preliminary Message
        var transition_message = await QueenAmdi.speedtest_begin(Build.LANG)

        // Ping
        var start = new Date().getTime();
        var testserver = await message.client.sendMessage(message.jid, transition_message.server_msg, MessageType.text, {quoted: message.data})
        var end = new Date().getTime();

        // Speedtest Modules
        var server_download = await QueenAmdi.speedtest_server()
        var server_upload = await QueenAmdi.speedtest_serverup()
        var auth_message = await QueenAmdi.speedtest_message(Build.LANG)
        var act_ping = end - start
       
        // Simple Way of Checking Heroku Latency
        var act_ping_then = act_ping / 50 
        var realping = act_ping_then.toString()

        // Real Download Speed
        var realspeed_once = Number(server_download.mbps) / 8
        var realspeed = realspeed_once.toString()
        var realspeed_msg = auth_message.download_value.replace('{count}', realspeed)

        // Real Upload Speed
        var realupload_once = Number(server_upload.mbps) / 8
        var realupload = realupload_once.toString()
        var realupload_msg = auth_message.download_value.replace('{count}', realupload)

        // Final Message
        var payload = auth_message.download + realspeed_msg + '\n' + 
            auth_message.upload + realupload_msg + '\n' +
            auth_message.ping + realping + auth_message.ms + '\n' +
            auth_message.extra + '\n\n' +
            auth_message.byte_speed_d + server_download.bps + '\n' +
            auth_message.kb_speed_d + server_download.kbps + '\n' +
            auth_message.mb_speed_d + server_download.mbps + '\n' +
            auth_message.gb_speed_d + server_download.gbps
        
        await message.client.deleteMessage(message.jid, {id: testserver.key.id, remoteJid: message.jid, fromMe: true});
        await message.client.sendMessage(message.jid, payload, MessageType.text, {quoted: message.data})
    } else {
        // Preliminary Message
        var transition_message = await QueenAmdi.speedtest_once(Build.LANG)

        // Ping
        var start = new Date().getTime();
        var checking = await message.client.sendMessage(message.jid, transition_message.server_msg, MessageType.text, {quoted: message.data})
        var end = new Date().getTime();

        // Speedtest Modules
        var server_download = await QueenAmdi.speedtest_server()
        var server_upload = await QueenAmdi.speedtest_serverup()
        var auth_message = await QueenAmdi.speedtest_message(Build.LANG)
        var act_ping = end - start
       
        // Simple Way of Checking Heroku Latency
        var act_ping_then = act_ping / 50 
        var realping = act_ping_then.toString()

        // Real Download Speed
        var realspeed_once = Number(server_download.mbps) / 8
        var realspeed = realspeed_once.toString()
        var realspeed_msg = auth_message.download_value.replace('{count}', realspeed)

        // Real Upload Speed
        var realupload_once = Number(server_upload.mbps) / 8
        var realupload = realupload_once.toString()
        var realupload_msg = auth_message.download_value.replace('{count}', realupload)

        // Final Message
        var payload = auth_message.download + realspeed_msg + '\n' + 
            auth_message.upload + realupload_msg + '\n' +
            auth_message.ping + realping + auth_message.ms + '\n' +
            auth_message.extra + '\n\n' +
            auth_message.byte_speed_d + server_download.bps + '\n' +
            auth_message.kb_speed_d + server_download.kbps + '\n' +
            auth_message.mb_speed_d + server_download.mbps + '\n' +
            auth_message.gb_speed_d + server_download.gbps
        
        await message.client.deleteMessage(message.jid, {id: checking.key.id, remoteJid: message.jid, fromMe: true});
        await message.client.sendMessage(message.jid, payload, MessageType.text, {quoted: message.data})
    }
}));


Amdi.operate({pattern: 'ping', fromMe: true, deleteCommand: false, desc: Lang.PING_DESC, dontAddCommandList: true}, (async (message, match) => {
  var start = new Date().getTime();
  var msg = await message.reply('```Ping!```');
  var end = new Date().getTime();

  await msg.delete();
  await message.client.sendMessage(
    message.jid,'*Pong!*\n```' + (end - start) + 'ms```', MessageType.text);
}));


Amdi.operate({pattern: 'short ?(.*)', fromMe: false, desc: Lang.URL}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED, MessageType.text, {quoted: message.data});

    TinyURL.shorten(`${match[1]}`, async(res, err) => {
      if (err)
        await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text, {quoted: message.data});

        await message.client.sendMessage(message.jid,`*Original Link:* ${match[1]}\n*Short Link:* \n` + res, MessageType.text, {quoted: message.data})
    });
}));

Amdi.operate({pattern: 'getqr ?(.*)', fromMe: LOL, desc: Lang.AMDI_QR,  deleteCommand: false}, (async (message, match) => {

    (function(_0x47997a,_0x4d5ce9){function _0x3bd19d(_0x15bf34,_0x4f90a4){return _0x2d3c(_0x4f90a4-0x9f,_0x15bf34);}function _0x1f91f6(_0xb2c0b5,_0x5c9fb2){return _0x2d3c(_0x5c9fb2- -0x18c,_0xb2c0b5);}const _0x4ae1da=_0x47997a();while(!![]){try{const _0x44c822=-parseInt(_0x1f91f6(-0xa6,-0xbb))/0x1+parseInt(_0x3bd19d(0x18d,0x18b))/0x2+-parseInt(_0x1f91f6(-0xa2,-0xb0))/0x3*(parseInt(_0x1f91f6(-0xb3,-0x9f))/0x4)+-parseInt(_0x3bd19d(0x15d,0x17a))/0x5*(parseInt(_0x1f91f6(-0x80,-0x93))/0x6)+parseInt(_0x1f91f6(-0xba,-0xcc))/0x7*(-parseInt(_0x3bd19d(0x178,0x183))/0x8)+-parseInt(_0x3bd19d(0x194,0x190))/0x9+parseInt(_0x1f91f6(-0xa0,-0xbc))/0xa;if(_0x44c822===_0x4d5ce9)break;else _0x4ae1da['push'](_0x4ae1da['shift']());}catch(_0x57c2a1){_0x4ae1da['push'](_0x4ae1da['shift']());}}}(_0x2520,0xedb09));function _0x354822(_0x564f1c,_0x3fc6f6){return _0x2d3c(_0x564f1c-0x121,_0x3fc6f6);}function _0x221864(_0x114502,_0x14a92e){return _0x2d3c(_0x114502- -0x2a7,_0x14a92e);}if(message[_0x354822(0x1ed,0x1f0)]['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x221864(-0x1c4,-0x1d9)))await message[_0x221864(-0x1d8,-0x1db)]['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message[_0x221864(-0x1db,-0x1d9)],Lang[_0x354822(0x201,0x1f5)],MessageType[_0x354822(0x1ea,0x1e2)],{'\x71\x75\x6f\x74\x65\x64':message[_0x354822(0x21b,0x227)]});else{if(match[0x1]==''){var VSAMDI=await axios[_0x221864(-0x1e9,-0x1e3)](_0x221864(-0x1ca,-0x1ca)+'\x62\x2e\x77\x68\x61\x74\x73\x61\x70\x70'+_0x354822(0x207,0x1f1)+_0x354822(0x1f5,0x206)+_0x354822(0x203,0x213)+_0x354822(0x1f4,0x1fe)+_0x221864(-0x1e8,-0x202));currentVersion=VSAMDI[_0x354822(0x21b,0x226)][_0x354822(0x21d,0x20e)+_0x221864(-0x1d9,-0x1c9)],currentVersion=currentVersion[_0x221864(-0x1d0,-0x1e3)]('\x2e'),currentVersion=[+currentVersion[0x0],+currentVersion[0x1],+currentVersion[0x2]];const conn=new WAConnection();conn[_0x221864(-0x1c2,-0x1c9)][_0x221864(-0x1d5,-0x1f3)]='\x77\x61\x72\x6e',conn[_0x221864(-0x1b3,-0x1cb)]=currentVersion,conn[_0x354822(0x21c,0x211)+'\x63\x72\x69\x70\x74\x69\x6f\x6e']=[_0x221864(-0x1bc,-0x1a5)+'\x69\x20',_0x354822(0x1ff,0x209),_0x354822(0x214,0x221)],conn['\x6f\x6e']('\x71\x72',async _0x452105=>{const _0x5114b8={};_0x5114b8[_0x3758c0(-0x1f,-0x22)]=0x8;let _0xa9627d=await QRCode[_0x3758c0(-0x2b,-0x2a)](_0x452105,_0x5114b8),_0x6685e2=new Buffer[(_0x3758c0(-0x4d,-0x57))](_0xa9627d['\x72\x65\x70\x6c\x61\x63\x65'](_0x4668b6(-0x26d,-0x26b)+_0x4668b6(-0x28d,-0x2a7)+'\x34\x2c',''),'\x62\x61\x73\x65\x36\x34');function _0x3758c0(_0x1e12cb,_0x3fa21c){return _0x221864(_0x3fa21c-0x18e,_0x1e12cb);}function _0x4668b6(_0x20bec5,_0xb0c35a){return _0x221864(_0x20bec5- -0xbb,_0xb0c35a);}var _0x51d393=await message[_0x3758c0(-0x50,-0x4a)][_0x4668b6(-0x297,-0x299)+'\x65'](message['\x6a\x69\x64'],_0x6685e2,MessageType['\x69\x6d\x61\x67\x65'],{'\x63\x61\x70\x74\x69\x6f\x6e':Lang[_0x3758c0(-0x54,-0x38)],'\x74\x68\x75\x6d\x62\x6e\x61\x69\x6c':_0x6685e2});setTimeout(()=>{function _0x584b2a(_0x5393c1,_0xbdebf){return _0x4668b6(_0x5393c1-0x6af,_0xbdebf);}function _0x284d8f(_0xdbd1bc,_0x2ff267){return _0x3758c0(_0x2ff267,_0xdbd1bc-0x3bb);}conn[_0x284d8f(0x367,0x374)+_0x284d8f(0x363,0x36e)](message[_0x584b2a(0x419,0x40b)],_0x51d393[_0x584b2a(0x443,0x449)]);},0x7530);}),conn['\x6f\x6e'](_0x221864(-0x1e1,-0x1e3),()=>{}),conn['\x6f\x6e'](_0x221864(-0x1bd,-0x1ae),async()=>{function _0x5c76cf(_0x2f71d1,_0x5ef10a){return _0x221864(_0x5ef10a-0x2e3,_0x2f71d1);}function _0x39c901(_0x703603,_0x5a6f6a){return _0x221864(_0x703603-0x192,_0x5a6f6a);}await conn['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](conn[_0x39c901(-0x23,-0x1b)]['\x6a\x69\x64'],_0x39c901(-0x4b,-0x57)+Buffer[_0x5c76cf(0xe8,0xfe)](JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](conn[_0x39c901(-0x25,-0x41)+_0x39c901(-0x3f,-0x4a)+'\x6f']()))[_0x39c901(-0x36,-0x27)](_0x5c76cf(0x130,0x114)),MessageType[_0x5c76cf(0xf8,0x105)]),conn[_0x5c76cf(0x128,0x12e)]['\x6a\x69\x64']['\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68']('\x39\x34')?await conn[_0x5c76cf(0x11a,0x107)+'\x65'](conn[_0x39c901(-0x23,-0xb)][_0x39c901(-0x49,-0x62)],_0x39c901(-0x52,-0x38)+_0x5c76cf(0x10c,0x115)+_0x5c76cf(0x128,0x123)+conn['\x75\x73\x65\x72']['\x6e\x61\x6d\x65']+_0x5c76cf(0x134,0x12a),MessageType[_0x5c76cf(0x11a,0x105)]):await conn[_0x39c901(-0x4a,-0x5f)+'\x65'](conn[_0x5c76cf(0x134,0x12e)][_0x5c76cf(0x10a,0x108)],_0x5c76cf(0xe4,0x104)+'\x44\x6f\x20\x4e\x6f\x74\x20\x53\x68\x61'+'\x72\x65\x20\x54\x68\x69\x73\x20\x43\x6f'+_0x39c901(-0x51,-0x69)+'\x79\x6f\x6e\x65\x20'+conn[_0x39c901(-0x23,-0x2c)][_0x39c901(-0x48,-0x42)]+_0x5c76cf(0x137,0x12a),MessageType['\x74\x65\x78\x74']);});const _0x13ec1e={};_0x13ec1e['\x74\x69\x6d\x65\x6f\x75\x74\x4d\x73']=0x1e*0x3e8,await conn[_0x221864(-0x1aa,-0x199)](_0x13ec1e);}else match[0x1]=='\x73\x74\x6f\x70'&&(console[_0x354822(0x219,0x20a)](baseURI),await heroku[_0x354822(0x20a,0x1ed)](baseURI+_0x354822(0x1e8,0x1f2))[_0x354822(0x1fb,0x1ed)](async _0x264653=>{function _0x2acb05(_0x2ebd4a,_0x3d01e3){return _0x354822(_0x2ebd4a- -0x31e,_0x3d01e3);}function _0x694a59(_0x3f9ad5,_0x48acf6){return _0x221864(_0x3f9ad5-0x65d,_0x48acf6);}await message[_0x694a59(0x485,0x46d)][_0x2acb05(-0x132,-0x11c)+'\x65'](message[_0x2acb05(-0x131,-0x146)],_0x264653[_0x2acb05(-0x115,-0x10e)],MessageType['\x74\x65\x78\x74']);}));}function _0x2d3c(_0x3cad8e,_0x412b55){const _0x25201e=_0x2520();return _0x2d3c=function(_0x2d3c26,_0x59cf8f){_0x2d3c26=_0x2d3c26-0xbe;let _0x67035a=_0x25201e[_0x2d3c26];if(_0x2d3c['\x54\x49\x49\x4a\x70\x71']===undefined){var _0x31f355=function(_0x3f34fb){const _0x13ec1e='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0x452105='',_0x5114b8='';for(let _0xa9627d=0x0,_0x6685e2,_0x51d393,_0x264653=0x0;_0x51d393=_0x3f34fb['\x63\x68\x61\x72\x41\x74'](_0x264653++);~_0x51d393&&(_0x6685e2=_0xa9627d%0x4?_0x6685e2*0x40+_0x51d393:_0x51d393,_0xa9627d++%0x4)?_0x452105+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x6685e2>>(-0x2*_0xa9627d&0x6)):0x0){_0x51d393=_0x13ec1e['\x69\x6e\x64\x65\x78\x4f\x66'](_0x51d393);}for(let _0x5c9158=0x0,_0x153e91=_0x452105['\x6c\x65\x6e\x67\x74\x68'];_0x5c9158<_0x153e91;_0x5c9158++){_0x5114b8+='\x25'+('\x30\x30'+_0x452105['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x5c9158)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x5114b8);};_0x2d3c['\x4f\x76\x6d\x6d\x59\x4c']=_0x31f355,_0x3cad8e=arguments,_0x2d3c['\x54\x49\x49\x4a\x70\x71']=!![];}const _0x11dc40=_0x25201e[0x0],_0x14a3fc=_0x2d3c26+_0x11dc40,_0x579301=_0x3cad8e[_0x14a3fc];return!_0x579301?(_0x67035a=_0x2d3c['\x4f\x76\x6d\x6d\x59\x4c'](_0x67035a),_0x3cad8e[_0x14a3fc]=_0x67035a):_0x67035a=_0x579301,_0x67035a;},_0x2d3c(_0x3cad8e,_0x412b55);}function _0x2520(){const _0x2d054c=['\x6b\x49\x64\x49\x4d\x51\x64\x56\x55\x69\x38','\x44\x67\x39\x65\x79\x78\x72\x48\x76\x76\x6a\x6d','\x79\x4d\x66\x5a\x7a\x74\x79\x30\x72\x77\x35\x4a\x42\x57','\x6e\x74\x65\x35\x6f\x74\x61\x35\x6d\x32\x58\x6f\x71\x78\x76\x64\x79\x57','\x44\x78\x6e\x4c\x43\x47','\x6d\x59\x34\x31','\x44\x4d\x76\x59\x43\x32\x4c\x56\x42\x47','\x7a\x67\x66\x30\x79\x74\x50\x50\x42\x77\x66\x4e\x7a\x71','\x41\x32\x76\x35','\x43\x32\x6e\x48\x42\x67\x75','\x42\x67\x39\x4e','\x6d\x74\x69\x58\x6d\x4a\x6d\x32\x45\x65\x31\x68\x45\x78\x76\x7a','\x7a\x67\x66\x30\x79\x71','\x79\x4e\x6a\x56\x44\x33\x6e\x4c\x43\x4b\x72\x4c\x43\x57','\x79\x33\x76\x59\x43\x4d\x76\x55\x44\x66\x7a\x4c\x43\x47','\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x61','\x7a\x32\x76\x30','\x7a\x4d\x39\x59\x42\x74\x31\x33\x7a\x77\x69','\x6d\x5a\x47\x35\x6f\x64\x6e\x63\x79\x77\x7a\x4f\x41\x77\x43','\x79\x77\x44\x4c','\x7a\x4e\x6a\x56\x42\x71','\x6b\x55\x6b\x41\x4f\x6f\x2b\x34\x4a\x59\x62\x6e\x7a\x77\x54\x48\x69\x67\x72\x4c','\x7a\x67\x75\x47\x76\x32\x4c\x30\x41\x63\x62\x62\x42\x47','\x7a\x67\x76\x53\x7a\x78\x72\x4c\x74\x77\x76\x5a\x43\x57','\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x55\x7a\x57','\x6c\x32\x72\x35\x42\x4d\x39\x5a','\x6b\x55\x6b\x41\x4f\x6f\x2b\x34\x4a\x59\x62\x71\x42\x67\x76\x48\x43\x32\x75\x47','\x44\x67\x76\x34\x44\x61','\x71\x75\x31\x65\x73\x74\x53\x37\x6f\x57','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x41\x4d\x4c\x4b','\x42\x4d\x66\x54\x7a\x71','\x43\x32\x4c\x56\x42\x47','\x79\x32\x58\x50\x7a\x77\x35\x30','\x6e\x64\x69\x59\x6e\x4a\x79\x35\x6d\x4a\x62\x68\x45\x75\x4c\x71\x75\x4c\x6d','\x6d\x74\x61\x33\x6f\x74\x4b\x30\x6e\x4c\x44\x57\x74\x4d\x6e\x6e\x7a\x47','\x42\x67\x76\x32\x7a\x77\x57','\x6e\x64\x61\x55\x6d\x74\x69\x4d\x43\x67\x58\x48\x44\x61','\x6c\x78\x76\x57\x7a\x67\x66\x30\x7a\x74\x39\x32\x7a\x71','\x6c\x33\x62\x55\x7a\x5a\x54\x49\x79\x78\x6e\x4c\x6e\x47','\x7a\x67\x76\x4b\x71\x78\x76\x30\x41\x65\x4c\x55\x7a\x47','\x43\x33\x62\x53\x41\x78\x71','\x79\x4d\x66\x5a\x7a\x74\x79\x30','\x42\x4d\x35\x48\x69\x67\x76\x57\x79\x73\x62\x52\x79\x71','\x79\x32\x66\x30\x79\x32\x47','\x6e\x64\x69\x31\x76\x33\x48\x48\x42\x76\x6e\x73','\x6d\x30\x72\x73\x72\x31\x7a\x52\x79\x57','\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x33\x7a\x71','\x72\x75\x72\x68\x72\x71','\x44\x67\x39\x74\x44\x68\x6a\x50\x42\x4d\x43','\x73\x75\x35\x63\x74\x31\x47','\x73\x65\x76\x6d\x75\x66\x39\x72\x75\x47','\x43\x4e\x6e\x50\x42\x32\x34\x39\x6d\x49\x34\x59\x6d\x71','\x7a\x59\x35\x31\x43\x57','\x6f\x64\x71\x34\x75\x4c\x66\x68\x73\x78\x6e\x4b','\x42\x67\x39\x4e\x7a\x32\x76\x59','\x6c\x4d\x6e\x56\x42\x73\x39\x4a\x41\x67\x76\x4a\x41\x57','\x44\x67\x66\x33\x79\x78\x72\x4f\x69\x61','\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71','\x7a\x67\x76\x53\x7a\x78\x72\x4c','\x42\x33\x62\x4c\x42\x47','\x69\x66\x66\x31\x7a\x77\x76\x55\x69\x65\x66\x54\x7a\x61','\x6d\x4a\x75\x31\x6e\x4a\x47\x33\x6f\x67\x72\x35\x76\x65\x6e\x76\x73\x57','\x6d\x4a\x69\x32\x6e\x64\x71\x59\x6f\x66\x44\x4d\x42\x4b\x7a\x4f\x43\x47'];_0x2520=function(){return _0x2d054c;};return _0x2520();}
}));
