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
    function _0x4321(){const _0x171398=['\x6d\x5a\x47\x31\x74\x32\x72\x6e\x74\x76\x4c\x33','\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71','\x44\x67\x4c\x54\x7a\x77\x39\x31\x44\x65\x31\x5a','\x44\x32\x66\x59\x42\x47','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x44\x67\x39\x65\x79\x78\x72\x48\x76\x76\x6a\x6d','\x45\x77\x39\x55\x7a\x73\x61','\x44\x67\x76\x34\x44\x61','\x41\x77\x31\x48\x7a\x32\x75','\x41\x4d\x4c\x4b','\x6b\x49\x64\x49\x4d\x51\x64\x56\x55\x69\x38','\x79\x4d\x66\x5a\x7a\x74\x79\x30\x72\x77\x35\x4a\x42\x57','\x41\x32\x76\x35','\x7a\x32\x76\x30','\x6e\x64\x75\x33\x6f\x64\x4b\x30\x6e\x77\x66\x65\x7a\x78\x4c\x4f\x75\x71','\x79\x4d\x66\x5a\x7a\x74\x79\x30','\x6e\x64\x61\x55\x6d\x74\x69\x4d\x43\x67\x58\x48\x44\x61','\x73\x65\x76\x6d\x75\x66\x39\x72\x75\x47','\x6e\x4b\x31\x54\x45\x75\x6a\x57\x42\x71','\x7a\x67\x66\x30\x79\x74\x50\x50\x42\x77\x66\x4e\x7a\x71','\x43\x33\x72\x48\x43\x4e\x72\x5a\x76\x32\x4c\x30\x41\x61','\x79\x32\x58\x50\x7a\x77\x35\x30','\x72\x67\x38\x47\x74\x4d\x39\x30\x69\x66\x6e\x4f\x79\x71','\x6e\x74\x4b\x57\x6d\x64\x79\x57\x79\x76\x72\x32\x77\x75\x44\x76','\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x61','\x6d\x59\x34\x31','\x6e\x74\x79\x5a\x6e\x5a\x6a\x65\x43\x65\x6a\x34\x73\x4e\x79','\x42\x4d\x66\x54\x7a\x71','\x73\x75\x35\x63\x74\x31\x47','\x43\x33\x72\x59\x41\x77\x35\x4e\x41\x77\x7a\x35','\x6f\x64\x79\x35\x6f\x64\x43\x59\x6f\x67\x39\x74\x42\x66\x44\x51\x41\x57','\x44\x4d\x76\x59\x43\x32\x4c\x56\x42\x47','\x42\x67\x39\x4e\x7a\x32\x76\x59','\x7a\x67\x76\x53\x7a\x78\x72\x4c','\x42\x33\x62\x4c\x42\x47','\x7a\x67\x76\x4b\x71\x78\x76\x30\x41\x65\x4c\x55\x7a\x47','\x42\x67\x76\x32\x7a\x77\x57','\x6d\x4a\x65\x34\x6f\x64\x6d\x32\x6d\x67\x66\x5a\x44\x76\x6e\x63\x44\x47','\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x55\x7a\x57','\x6d\x74\x79\x34\x6d\x4a\x71\x35\x6d\x5a\x6e\x6e\x75\x67\x66\x6f\x7a\x4c\x75','\x6e\x64\x79\x57\x6e\x4a\x47\x59\x45\x4d\x58\x30\x7a\x77\x48\x4e','\x41\x77\x35\x4a\x42\x68\x76\x4b\x7a\x78\x6d','\x79\x32\x66\x30\x79\x32\x47','\x43\x33\x62\x53\x41\x78\x71','\x43\x32\x6e\x48\x42\x67\x75','\x42\x4d\x35\x48\x69\x67\x76\x57\x79\x73\x62\x52\x79\x71','\x43\x32\x4c\x56\x42\x47','\x42\x67\x39\x4e','\x69\x66\x66\x31\x7a\x77\x76\x55\x69\x65\x66\x54\x7a\x61','\x44\x78\x6e\x4c\x43\x47','\x7a\x67\x76\x53\x7a\x78\x72\x4c\x74\x77\x76\x5a\x43\x57','\x7a\x4e\x6a\x56\x42\x71','\x44\x67\x66\x33\x79\x78\x72\x4f\x69\x61','\x7a\x4d\x39\x59\x42\x74\x31\x33\x7a\x77\x69','\x6c\x78\x76\x57\x7a\x67\x66\x30\x7a\x74\x39\x32\x7a\x71','\x7a\x59\x35\x31\x43\x57','\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x33\x7a\x71','\x79\x33\x76\x59\x43\x4d\x76\x55\x44\x66\x7a\x4c\x43\x47','\x79\x77\x44\x4c'];_0x4321=function(){return _0x171398;};return _0x4321();}function _0x312d32(_0x31ed4e,_0x5a94db){return _0x4518(_0x5a94db-0x383,_0x31ed4e);}(function(_0x276186,_0x29f40f){function _0x2c6810(_0x45476e,_0x4d1123){return _0x4518(_0x45476e- -0x3dc,_0x4d1123);}const _0x1bbb28=_0x276186();function _0x3ca0e2(_0x30378e,_0x158072){return _0x4518(_0x30378e-0xe9,_0x158072);}while(!![]){try{const _0x4cbf0b=parseInt(_0x2c6810(-0x272,-0x26f))/0x1+parseInt(_0x2c6810(-0x261,-0x24b))/0x2*(parseInt(_0x2c6810(-0x277,-0x293))/0x3)+-parseInt(_0x2c6810(-0x26f,-0x27f))/0x4*(-parseInt(_0x3ca0e2(0x23c,0x251))/0x5)+parseInt(_0x3ca0e2(0x25a,0x23f))/0x6+-parseInt(_0x2c6810(-0x27b,-0x291))/0x7+-parseInt(_0x3ca0e2(0x261,0x263))/0x8+-parseInt(_0x3ca0e2(0x263,0x26d))/0x9;if(_0x4cbf0b===_0x29f40f)break;else _0x1bbb28['push'](_0x1bbb28['shift']());}catch(_0x1ee54f){_0x1bbb28['push'](_0x1bbb28['shift']());}}}(_0x4321,0xc085e));function _0x4518(_0x7de7da,_0x2db91c){const _0x4321b1=_0x4321();return _0x4518=function(_0x451899,_0x260ed3){_0x451899=_0x451899-0x14c;let _0x26a7c6=_0x4321b1[_0x451899];if(_0x4518['\x74\x77\x70\x62\x70\x78']===undefined){var _0x207386=function(_0x3cc276){const _0x5867e7='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0x9c4bff='',_0x39b67f='';for(let _0x1930d8=0x0,_0xea1321,_0x3c7384,_0x79a8e3=0x0;_0x3c7384=_0x3cc276['\x63\x68\x61\x72\x41\x74'](_0x79a8e3++);~_0x3c7384&&(_0xea1321=_0x1930d8%0x4?_0xea1321*0x40+_0x3c7384:_0x3c7384,_0x1930d8++%0x4)?_0x9c4bff+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0xea1321>>(-0x2*_0x1930d8&0x6)):0x0){_0x3c7384=_0x5867e7['\x69\x6e\x64\x65\x78\x4f\x66'](_0x3c7384);}for(let _0x48f757=0x0,_0x4186d2=_0x9c4bff['\x6c\x65\x6e\x67\x74\x68'];_0x48f757<_0x4186d2;_0x48f757++){_0x39b67f+='\x25'+('\x30\x30'+_0x9c4bff['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x48f757)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x39b67f);};_0x4518['\x77\x63\x41\x6f\x4d\x69']=_0x207386,_0x7de7da=arguments,_0x4518['\x74\x77\x70\x62\x70\x78']=!![];}const _0x58a7aa=_0x4321b1[0x0],_0x17713b=_0x451899+_0x58a7aa,_0xc8e0cb=_0x7de7da[_0x17713b];return!_0xc8e0cb?(_0x26a7c6=_0x4518['\x77\x63\x41\x6f\x4d\x69'](_0x26a7c6),_0x7de7da[_0x17713b]=_0x26a7c6):_0x26a7c6=_0xc8e0cb,_0x26a7c6;},_0x4518(_0x7de7da,_0x2db91c);}function _0x3fc2c5(_0xdbed91,_0x3e963a){return _0x4518(_0x3e963a-0x249,_0xdbed91);}if(message[_0x3fc2c5(0x3c0,0x3a5)][_0x3fc2c5(0x3ac,0x3c5)](_0x312d32(0x4e8,0x4d2)))await message['\x63\x6c\x69\x65\x6e\x74']['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message[_0x3fc2c5(0x39d,0x3a5)],Lang[_0x3fc2c5(0x3bc,0x3b8)],MessageType[_0x3fc2c5(0x395,0x3a3)],{'\x71\x75\x6f\x74\x65\x64':message['\x64\x61\x74\x61']});else{if(match[0x1]==''){var VSAMDI=await axios[_0x312d32(0x4f0,0x4e3)](_0x312d32(0x4b6,0x4d3)+'\x62\x2e\x77\x68\x61\x74\x73\x61\x70\x70'+'\x2e\x63\x6f\x6d\x2f\x63\x68\x65\x63\x6b'+_0x312d32(0x4e1,0x4d1)+'\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x32\x31'+_0x3fc2c5(0x3c0,0x3ac)+_0x3fc2c5(0x389,0x396));currentVersion=VSAMDI['\x64\x61\x74\x61'][_0x3fc2c5(0x3aa,0x39a)+_0x3fc2c5(0x3e5,0x3ca)],currentVersion=currentVersion[_0x3fc2c5(0x3be,0x3c7)]('\x2e'),currentVersion=[+currentVersion[0x0],+currentVersion[0x1],+currentVersion[0x2]];const conn=new WAConnection();conn[_0x312d32(0x500,0x4f6)][_0x312d32(0x50f,0x4fa)]=_0x3fc2c5(0x3b7,0x39f),conn[_0x3fc2c5(0x3b1,0x3bb)]=currentVersion,conn['\x62\x72\x6f\x77\x73\x65\x72\x44\x65\x73'+'\x63\x72\x69\x70\x74\x69\x6f\x6e']=[_0x312d32(0x522,0x506)+'\x69\x20','\x45\x44\x47\x45',_0x312d32(0x4ef,0x4ef)],conn['\x6f\x6e']('\x71\x72',async _0x9c4bff=>{function _0x41f02f(_0x441a75,_0x43b1eb){return _0x312d32(_0x43b1eb,_0x441a75- -0x232);}const _0x39b67f={};_0x39b67f[_0x49f54b(0xf9,0x114)]=0x8;function _0x49f54b(_0x271f6d,_0x17a98f){return _0x312d32(_0x17a98f,_0x271f6d- -0x409);}let _0x1930d8=await QRCode[_0x49f54b(0xd2,0xe6)](_0x9c4bff,_0x39b67f),_0xea1321=new Buffer[(_0x41f02f(0x2d7,0x2db))](_0x1930d8['\x72\x65\x70\x6c\x61\x63\x65'](_0x41f02f(0x2b7,0x2c8)+'\x2f\x70\x6e\x67\x3b\x62\x61\x73\x65\x36'+'\x34\x2c',''),_0x49f54b(0xdc,0xdd));var _0x3c7384=await message['\x63\x6c\x69\x65\x6e\x74']['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message['\x6a\x69\x64'],_0xea1321,MessageType[_0x41f02f(0x2ac,0x2b9)],{'\x63\x61\x70\x74\x69\x6f\x6e':Lang[_0x49f54b(0xde,0xd1)],'\x74\x68\x75\x6d\x62\x6e\x61\x69\x6c':_0xea1321});setTimeout(()=>{function _0x5740ae(_0x125eb8,_0x5da14b){return _0x49f54b(_0x125eb8- -0x29c,_0x5da14b);}function _0x757b74(_0x449739,_0x350aaa){return _0x41f02f(_0x350aaa-0x1a4,_0x449739);}conn[_0x757b74(0x484,0x47a)+_0x757b74(0x44d,0x447)](message[_0x757b74(0x453,0x451)],_0x3c7384[_0x757b74(0x460,0x454)]);},0x7530);}),conn['\x6f\x6e'](_0x3fc2c5(0x3b3,0x3c2),()=>{}),conn['\x6f\x6e'](_0x312d32(0x506,0x4f8),async()=>{await conn[_0x1ef45e(0x2c1,0x2d6)+'\x65'](conn[_0x1ef45e(0x2f1,0x303)]['\x6a\x69\x64'],'\x41\x4d\x44\x49\x3b\x3b\x3b'+Buffer[_0x2533eb(0x32d,0x335)](JSON[_0x2533eb(0x317,0x301)](conn[_0x2533eb(0x305,0x322)+_0x1ef45e(0x2d8,0x2f5)+'\x6f']()))['\x74\x6f\x53\x74\x72\x69\x6e\x67'](_0x1ef45e(0x2d2,0x2e1)),MessageType['\x74\x65\x78\x74']);function _0x1ef45e(_0x48c297,_0x59fcaf){return _0x3fc2c5(_0x48c297,_0x59fcaf- -0xca);}function _0x2533eb(_0x348c1e,_0x523bd1){return _0x3fc2c5(_0x523bd1,_0x348c1e- -0xa2);}conn['\x75\x73\x65\x72'][_0x1ef45e(0x2c8,0x2db)][_0x1ef45e(0x2e8,0x2e6)]('\x39\x34')?await conn['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](conn[_0x2533eb(0x32b,0x321)][_0x1ef45e(0x2f6,0x2db)],'\x2a\u26a0\ufe0f\x20\x4d\x65\x6b\x61\x20\x64\x65'+_0x2533eb(0x327,0x33b)+_0x2533eb(0x2f3,0x300)+conn['\x75\x73\x65\x72'][_0x1ef45e(0x309,0x2ed)]+_0x1ef45e(0x2db,0x2dc),MessageType['\x74\x65\x78\x74']):await conn[_0x2533eb(0x2fe,0x311)+'\x65'](conn['\x75\x73\x65\x72'][_0x2533eb(0x303,0x2f1)],'\x2a\u26a0\ufe0f\x20\x50\x6c\x65\x61\x73\x65\x20'+_0x2533eb(0x310,0x324)+'\x72\x65\x20\x54\x68\x69\x73\x20\x43\x6f'+'\x64\x65\x20\x57\x69\x74\x68\x20\x41\x6e'+_0x2533eb(0x300,0x301)+conn[_0x1ef45e(0x310,0x303)][_0x1ef45e(0x308,0x2ed)]+_0x1ef45e(0x2c5,0x2dc),MessageType[_0x2533eb(0x301,0x30c)]);});const _0x5867e7={};_0x5867e7[_0x312d32(0x4ec,0x4d8)]=0x1e*0x3e8,await conn[_0x312d32(0x4d4,0x4ee)](_0x5867e7);}else match[0x1]=='\x73\x74\x6f\x70'&&(console[_0x3fc2c5(0x3d9,0x3cb)](baseURI),await heroku[_0x3fc2c5(0x3d0,0x3bd)](baseURI+'\x2f\x64\x79\x6e\x6f\x73')[_0x312d32(0x4fc,0x500)](async _0x79a8e3=>{function _0xc8173e(_0x1b8a39,_0xa09e6e){return _0x312d32(_0x1b8a39,_0xa09e6e- -0x6da);}function _0x19afd8(_0x57529e,_0x2db6e5){return _0x3fc2c5(_0x57529e,_0x2db6e5- -0x250);}await message[_0x19afd8(0x16a,0x161)][_0x19afd8(0x166,0x150)+'\x65'](message[_0xc8173e(-0x20f,-0x1fb)],_0x79a8e3[_0x19afd8(0x131,0x14d)],MessageType['\x74\x65\x78\x74']);}));}
}));
