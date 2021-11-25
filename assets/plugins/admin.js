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
const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@blackamda/queenamdi-web-api');
const got = require("got");
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('admin');

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

var INVITE = ''
if (Build.LANG == 'EN') INVITE = '✅ Group invite successfully sent.'
if (Build.LANG == 'SI') INVITE = '✅ කණ්ඩායම් invite සාර්ථකව යවා ඇත.'

var INVITEM = ''
if (Build.LANG == 'EN') INVITEM = ' group admins are invited you to join the group.📩\n\nǫᴜᴇᴇɴ ᴀᴍᴅɪ © ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ'
if (Build.LANG == 'SI') INVITEM = ' ගෲප් ඇඩ්මින්වරුන් ඔබට ගෲප එකට සම්බන්ධ වන ලෙස ආරාධනා කෙරේ.📩\n\nǫᴜᴇᴇɴ ᴀᴍᴅɪ © ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ'
Amdi.operate({pattern: "add(?: |$)(.*)", fromMe: true, onlyGroup: true, desc: Lang.ADD_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {  
    (function(_0x4adebf,_0x46e6d8){function _0x493353(_0x1b3be0,_0x127fea){return _0x4125(_0x1b3be0- -0x2ed,_0x127fea);}var _0x4bd4d6=_0x4adebf();function _0x35d0da(_0x58b2ab,_0x4d44a9){return _0x4125(_0x4d44a9-0x342,_0x58b2ab);}while(!![]){try{var _0x57405b=parseInt(_0x35d0da(0x4ce,0x4bc))/0x1*(-parseInt(_0x35d0da(0x4c4,0x4b6))/0x2)+parseInt(_0x493353(-0x174,-0x175))/0x3*(-parseInt(_0x35d0da(0x4bf,0x4c0))/0x4)+-parseInt(_0x35d0da(0x4cd,0x4c8))/0x5+-parseInt(_0x35d0da(0x4e0,0x4cf))/0x6+-parseInt(_0x35d0da(0x4cb,0x4c2))/0x7+-parseInt(_0x35d0da(0x4bd,0x4cd))/0x8+parseInt(_0x493353(-0x170,-0x16c))/0x9;if(_0x57405b===_0x46e6d8)break;else _0x4bd4d6['push'](_0x4bd4d6['shift']());}catch(_0x799e1c){_0x4bd4d6['push'](_0x4bd4d6['shift']());}}}(_0x18bf,0xd5362));var im=await checkImAdmin(message);await QueenAmdi[_0x29b5ae(-0x18d,-0x19c)]();if(!im)return await message['\x63\x6c\x69\x65\x6e\x74'][_0x166974(0xb0,0xb8)+'\x65'](message[_0x29b5ae(-0x18b,-0x194)],Lang[_0x29b5ae(-0x197,-0x195)+'\x49\x4e'],MessageType['\x74\x65\x78\x74']);if(match[0x1][_0x166974(0xb8,0xc6)]('\x2b'))return await message[_0x166974(0xc1,0xc4)][_0x166974(0xc6,0xb8)+'\x65'](message[_0x29b5ae(-0x18b,-0x18b)],Lang[_0x29b5ae(-0x19e,-0x18d)],MessageType[_0x166974(0xce,0xcc)]);if(match[0x1]=='')return await message[_0x29b5ae(-0x191,-0x19f)][_0x166974(0xc2,0xb8)+'\x65'](message[_0x29b5ae(-0x18b,-0x191)],Lang[_0x29b5ae(-0x190,-0x1a1)+'\x45\x52'],MessageType[_0x29b5ae(-0x189,-0x195)]);function _0x18bf(){var _0x1e34e8=['\x71\x67\x6d\x55\x44\x78\x6d','\x6e\x64\x61\x5a','\x79\x78\x6a\x59\x79\x78\x4c\x49\x44\x77\x7a\x4d\x7a\x71','\x6e\x74\x69\x33\x6f\x64\x61\x32\x6e\x75\x7a\x41\x73\x65\x66\x74\x72\x61','\x71\x75\x72\x65\x74\x76\x6e\x68','\x79\x32\x58\x50\x7a\x77\x35\x30','\x72\x30\x4c\x77\x72\x76\x39\x6e\x72\x76\x39\x76\x75\x57','\x41\x77\x35\x4a\x42\x68\x76\x4b\x7a\x78\x6d','\x6d\x5a\x43\x58\x6d\x4a\x6d\x31\x6d\x4c\x72\x68\x7a\x4e\x44\x5a\x72\x61','\x79\x77\x31\x4b\x41\x76\x39\x5a\x7a\x78\x72\x31\x43\x61','\x6d\x74\x61\x58\x6f\x74\x47\x35\x6d\x74\x72\x4b\x71\x75\x66\x32\x73\x31\x47','\x41\x4d\x4c\x4b','\x43\x63\x35\x55\x7a\x78\x71','\x44\x67\x76\x34\x44\x61','\x43\x33\x62\x53\x41\x78\x71','\x7a\x67\x76\x4d\x79\x78\x76\x53\x44\x61','\x79\x78\x72\x48','\x79\x67\x62\x47\x69\x61','\x7a\x33\x6a\x56\x44\x78\x62\x62\x7a\x67\x71','\x79\x67\x62\x47','\x7a\x32\x76\x30','\x42\x77\x66\x57','\x6e\x74\x65\x59\x6f\x66\x48\x77\x44\x4d\x4c\x55\x73\x57','\x43\x33\x76\x49\x41\x4d\x76\x4a\x44\x61','\x7a\x75\x31\x4c\x43\x33\x6e\x48\x7a\x32\x75','\x6d\x4a\x61\x57','\x7a\x33\x6a\x56\x44\x78\x62\x6a\x42\x4e\x7a\x50\x44\x61','\x6e\x4a\x65\x34\x73\x4d\x39\x62\x45\x4b\x48\x65','\x6d\x4a\x71\x57\x76\x31\x50\x64\x79\x77\x7a\x63','\x76\x31\x6a\x70\x74\x4b\x43','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x6e\x74\x65\x35\x6f\x64\x71\x32\x6d\x5a\x4c\x51\x73\x30\x4c\x74\x42\x30\x34','\x6d\x74\x69\x5a\x6f\x64\x62\x66\x41\x4d\x4c\x4c\x41\x31\x47','\x7a\x32\x76\x30\x75\x68\x6a\x56\x7a\x4d\x4c\x53\x7a\x71','\x6d\x5a\x61\x58\x6d\x4a\x71\x31\x6e\x33\x44\x33\x75\x68\x6a\x33\x7a\x61','\x71\x68\x6d\x55\x44\x32\x48\x48\x44\x68\x6e\x48\x43\x61','\x73\x75\x31\x46\x74\x4b\x39\x75\x78\x30\x66\x65\x74\x71'];_0x18bf=function(){return _0x1e34e8;};return _0x18bf();}var nwjson=await message[_0x29b5ae(-0x191,-0x1a2)]['\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64'+_0x166974(0x99,0xaa)](message[_0x29b5ae(-0x18b,-0x18c)]);const sub=nwjson[_0x29b5ae(-0x1a4,-0x1b1)];var ppUrl=await message[_0x29b5ae(-0x191,-0x189)][_0x29b5ae(-0x19a,-0x1a3)+'\x50\x69\x63\x74\x75\x72\x65'](message[_0x166974(0xbf,0xca)]),_0x50cd07={};function _0x4125(_0x3bd517,_0x393413){var _0x18bf73=_0x18bf();return _0x4125=function(_0x412517,_0x3e24d8){_0x412517=_0x412517-0x16c;var _0x421f94=_0x18bf73[_0x412517];if(_0x4125['\x41\x79\x4c\x62\x4d\x44']===undefined){var _0x21979e=function(_0x50cd07){var _0x15dbf6='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var _0x1a5aca='',_0x339f2c='';for(var _0x5126e9=0x0,_0x250edd,_0x31f69b,_0x552682=0x0;_0x31f69b=_0x50cd07['\x63\x68\x61\x72\x41\x74'](_0x552682++);~_0x31f69b&&(_0x250edd=_0x5126e9%0x4?_0x250edd*0x40+_0x31f69b:_0x31f69b,_0x5126e9++%0x4)?_0x1a5aca+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x250edd>>(-0x2*_0x5126e9&0x6)):0x0){_0x31f69b=_0x15dbf6['\x69\x6e\x64\x65\x78\x4f\x66'](_0x31f69b);}for(var _0x51f1cf=0x0,_0x1ee3fb=_0x1a5aca['\x6c\x65\x6e\x67\x74\x68'];_0x51f1cf<_0x1ee3fb;_0x51f1cf++){_0x339f2c+='\x25'+('\x30\x30'+_0x1a5aca['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x51f1cf)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x339f2c);};_0x4125['\x63\x63\x4e\x4d\x6c\x47']=_0x21979e,_0x3bd517=arguments,_0x4125['\x41\x79\x4c\x62\x4d\x44']=!![];}var _0x13cdf5=_0x18bf73[0x0],_0x3ee246=_0x412517+_0x13cdf5,_0x18c9e3=_0x3bd517[_0x3ee246];return!_0x18c9e3?(_0x421f94=_0x4125['\x63\x63\x4e\x4d\x6c\x47'](_0x421f94),_0x3bd517[_0x3ee246]=_0x421f94):_0x421f94=_0x18c9e3,_0x421f94;},_0x4125(_0x3bd517,_0x393413);}_0x50cd07['\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x79'+'\x70\x65']=_0x29b5ae(-0x194,-0x199)+'\x72';function _0x29b5ae(_0x3be97e,_0x2775c2){return _0x4125(_0x3be97e- -0x319,_0x2775c2);}const pic=await axios[_0x166974(0xaa,0xae)](ppUrl,_0x50cd07);function _0x166974(_0x1246a4,_0x916b43){return _0x4125(_0x916b43- -0xc4,_0x1246a4);}if(match!=='')match[0x1][_0x29b5ae(-0x1ad,-0x1bf)]('\x20')[_0x29b5ae(-0x1a6,-0x1ac)](async _0x15dbf6=>{const {participants:_0x1a5aca}=await message[_0x3f45c0(0x511,0x4ff)][_0x394f74(0x24a,0x248)](message[_0x394f74(0x266,0x266)],[_0x15dbf6+_0x394f74(0x266,0x25b)]);function _0x394f74(_0x9dc72a,_0x244331){return _0x29b5ae(_0x244331-0x3f1,_0x9dc72a);}function _0x3f45c0(_0x45f06a,_0x98de5f){return _0x29b5ae(_0x98de5f-0x690,_0x45f06a);}_0x1a5aca[_0x394f74(0x251,0x24b)](async _0x339f2c=>{let {invite_code:_0x5126e9,invite_code_exp:_0x250edd,code:_0x31f69b}=_0x339f2c[_0x15dbf6+'\x40\x63\x2e\x75\x73'];function _0x3e4740(_0x5dae28,_0x56c2b3){return _0x3f45c0(_0x56c2b3,_0x5dae28- -0x1e6);}function _0xdafeb9(_0x50d920,_0x37e8f3){return _0x3f45c0(_0x50d920,_0x37e8f3- -0x684);}if(_0x31f69b==_0x3e4740(0x315,0x31a))return await message['\x63\x6c\x69\x65\x6e\x74'][_0x3e4740(0x30d,0x2fa)+'\x65'](_0x15dbf6+(_0xdafeb9(-0x17d,-0x18c)+'\x70\x2e\x6e\x65\x74'),{'\x69\x6e\x76\x69\x74\x65\x43\x6f\x64\x65':_0x5126e9,'\x69\x6e\x76\x69\x74\x65\x45\x78\x70\x69\x72\x61\x74\x69\x6f\x6e':_0x250edd,'\x67\x72\x6f\x75\x70\x4e\x61\x6d\x65':sub,'\x67\x72\x6f\x75\x70\x4a\x69\x64':message[_0xdafeb9(-0x17e,-0x17f)],'\x63\x61\x70\x74\x69\x6f\x6e':'\x22'+sub+'\x22'+INVITEM,'\x6a\x70\x65\x67\x54\x68\x75\x6d\x62\x6e\x61\x69\x6c':pic},MessageType[_0x3e4740(0x309,0x306)+_0xdafeb9(-0x18a,-0x197)]),await message['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](INVITE);_0x31f69b==_0x3e4740(0x308,0x304)&&(match[0x1]!==''&&match[0x1][_0x3e4740(0x2fd,0x306)]('\x20')[_0x3e4740(0x304,0x30a)](async _0x552682=>{function _0x7c1ef3(_0x252b8f,_0x43f390){return _0x3e4740(_0x43f390- -0x397,_0x252b8f);}await message[_0x7c1ef3(-0x85,-0x7e)][_0x7c1ef3(-0x8a,-0x96)](message['\x6a\x69\x64'],[_0x552682+(_0x7c1ef3(-0x95,-0x85)+_0x7c1ef3(-0x72,-0x77))]);function _0x1f6605(_0x416345,_0x568b28){return _0x3e4740(_0x416345-0xea,_0x568b28);}Build['\x41\x44\x44\x4d\x53\x47']==_0x7c1ef3(-0x9b,-0x99)?await message['\x63\x6c\x69\x65\x6e\x74']['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message[_0x1f6605(0x409,0x412)],_0x1f6605(0x3ec,0x3e2)+_0x552682+'\x60\x60\x60\x20'+Lang['\x41\x44\x44\x45\x44'],MessageType[_0x1f6605(0x40b,0x3f9)]):await message[_0x7c1ef3(-0x7e,-0x7e)][_0x1f6605(0x3f7,0x3fe)+'\x65'](message[_0x1f6605(0x409,0x417)],'\x60\x60\x60'+_0x552682+_0x7c1ef3(-0x8a,-0x97)+Build[_0x1f6605(0x402,0x413)],MessageType[_0x7c1ef3(-0x7f,-0x76)]);}));});});else return await message[_0x29b5ae(-0x19d,-0x1a4)+'\x65'](Lang[_0x29b5ae(-0x190,-0x1a1)+'\x45\x52']);
}));

Amdi.operate({pattern: "kick ?(.*)", fromMe: true, onlyGroup: true, desc: Lang.BAN_DESC, dontAddCommandList: true, deleteCommand: false}, async (message, match) => {
    (function(_0x20133d,_0x188b99){function _0x4a80a8(_0x4b3380,_0x3516ec){return _0x26ce(_0x4b3380-0x2f3,_0x3516ec);}var _0x533da5=_0x20133d();function _0x2b27b0(_0x41d517,_0x307cea){return _0x26ce(_0x307cea- -0x3d5,_0x41d517);}while(!![]){try{var _0x191a90=parseInt(_0x2b27b0(-0x2c8,-0x2be))/0x1*(parseInt(_0x2b27b0(-0x2cf,-0x2c2))/0x2)+-parseInt(_0x4a80a8(0x40e,0x40a))/0x3*(-parseInt(_0x4a80a8(0x408,0x3fd))/0x4)+parseInt(_0x4a80a8(0x40d,0x41a))/0x5+parseInt(_0x4a80a8(0x3f3,0x3e4))/0x6+parseInt(_0x4a80a8(0x405,0x401))/0x7+-parseInt(_0x2b27b0(-0x2c6,-0x2b7))/0x8*(-parseInt(_0x4a80a8(0x3fd,0x3f7))/0x9)+-parseInt(_0x4a80a8(0x409,0x40b))/0xa*(parseInt(_0x4a80a8(0x413,0x41e))/0xb);if(_0x191a90===_0x188b99)break;else _0x533da5['push'](_0x533da5['shift']());}catch(_0x104abf){_0x533da5['push'](_0x533da5['shift']());}}}(_0x35a8,0xb1cb4));function _0x35a8(){var _0xff73ea=['\x6d\x4a\x61\x32\x6d\x5a\x6d\x31\x6d\x65\x72\x4e\x43\x32\x7a\x65\x42\x57','\x6d\x78\x72\x69\x73\x4d\x6a\x63\x75\x61','\x79\x77\x31\x4b\x41\x76\x39\x5a\x7a\x78\x72\x31\x43\x61','\x44\x67\x76\x34\x44\x61','\x6d\x4a\x65\x58\x6d\x74\x43\x30\x6d\x68\x6e\x70\x73\x77\x6e\x72\x43\x57','\x6d\x33\x72\x64\x72\x67\x6e\x77\x72\x57','\x73\x76\x6e\x46\x71\x75\x72\x6e\x73\x75\x34','\x7a\x67\x66\x30\x79\x71','\x6d\x74\x69\x32\x6f\x64\x62\x73\x42\x4e\x6a\x41\x42\x65\x57','\x72\x30\x4c\x77\x72\x76\x39\x6e\x72\x76\x39\x76\x75\x57','\x6d\x74\x47\x33\x44\x4e\x62\x48\x43\x30\x66\x55','\x6e\x74\x79\x33\x6d\x74\x69\x34\x6e\x65\x39\x52\x41\x66\x62\x73\x74\x71','\x79\x67\x62\x47\x6c\x63\x61','\x79\x67\x62\x47','\x7a\x67\x76\x4d\x79\x78\x76\x53\x44\x61','\x71\x4b\x66\x6f\x74\x4b\x76\x65','\x43\x33\x62\x53\x41\x78\x71','\x71\x4b\x66\x6f\x74\x76\x6e\x68','\x42\x77\x76\x55\x44\x67\x4c\x56\x42\x47','\x41\x4d\x4c\x4b','\x79\x32\x58\x50\x7a\x77\x35\x30','\x6d\x5a\x75\x5a\x6e\x30\x72\x4d\x76\x32\x35\x5a\x74\x61','\x73\x75\x31\x46\x74\x4b\x39\x75\x78\x30\x66\x65\x74\x71','\x79\x77\x44\x4c','\x7a\x33\x6a\x56\x44\x78\x62\x73\x7a\x77\x31\x56\x44\x47','\x79\x78\x72\x48','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x43\x67\x66\x59\x44\x67\x4c\x4a\x41\x78\x62\x48\x42\x47','\x43\x4d\x76\x57\x42\x68\x4c\x46\x42\x77\x76\x5a\x43\x57','\x6d\x5a\x6d\x31\x6d\x64\x75\x31\x6d\x65\x58\x30\x76\x4d\x39\x66\x42\x47','\x6d\x4a\x61\x35\x6d\x64\x71\x31\x6d\x66\x6e\x55\x75\x30\x48\x69\x77\x71','\x41\x78\x6e\x62\x7a\x67\x31\x50\x42\x47','\x6d\x4a\x47\x34\x6e\x4a\x6d\x34\x6f\x68\x6e\x57\x76\x66\x76\x4c\x42\x57'];_0x35a8=function(){return _0xff73ea;};return _0x35a8();}function _0x1b71c6(_0x181572,_0x52c090){return _0x26ce(_0x52c090- -0x1b3,_0x181572);}let participants=await message[_0xb4cea6(0x215,0x20e)]['\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64'+_0xb4cea6(0x21a,0x225)](message[_0x1b71c6(-0xae,-0xab)]);function _0x26ce(_0x518356,_0x10e4a5){var _0x35a8ef=_0x35a8();return _0x26ce=function(_0x26ce6d,_0x2d1cf5){_0x26ce6d=_0x26ce6d-0x100;var _0x130db2=_0x35a8ef[_0x26ce6d];if(_0x26ce['\x4e\x4e\x6a\x58\x51\x5a']===undefined){var _0x448644=function(_0x2f31e8){var _0x4295cc='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var _0x2629e1='',_0x164dea='';for(var _0x2026b5=0x0,_0x4292ef,_0x51e78d,_0x474f72=0x0;_0x51e78d=_0x2f31e8['\x63\x68\x61\x72\x41\x74'](_0x474f72++);~_0x51e78d&&(_0x4292ef=_0x2026b5%0x4?_0x4292ef*0x40+_0x51e78d:_0x51e78d,_0x2026b5++%0x4)?_0x2629e1+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x4292ef>>(-0x2*_0x2026b5&0x6)):0x0){_0x51e78d=_0x4295cc['\x69\x6e\x64\x65\x78\x4f\x66'](_0x51e78d);}for(var _0x3d83a7=0x0,_0x4ea16e=_0x2629e1['\x6c\x65\x6e\x67\x74\x68'];_0x3d83a7<_0x4ea16e;_0x3d83a7++){_0x164dea+='\x25'+('\x30\x30'+_0x2629e1['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x3d83a7)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x164dea);};_0x26ce['\x44\x44\x76\x70\x44\x53']=_0x448644,_0x518356=arguments,_0x26ce['\x4e\x4e\x6a\x58\x51\x5a']=!![];}var _0x340772=_0x35a8ef[0x0],_0x136778=_0x26ce6d+_0x340772,_0x219c64=_0x518356[_0x136778];return!_0x219c64?(_0x130db2=_0x26ce['\x44\x44\x76\x70\x44\x53'](_0x130db2),_0x518356[_0x136778]=_0x130db2):_0x130db2=_0x219c64,_0x130db2;},_0x26ce(_0x518356,_0x10e4a5);}var im=await checkImAdmin(message);await QueenAmdi[_0xb4cea6(0x224,0x231)]();if(!im)return await message['\x63\x6c\x69\x65\x6e\x74'][_0xb4cea6(0x21b,0x21a)+'\x65'](message[_0xb4cea6(0x214,0x208)],Lang[_0x1b71c6(-0xa4,-0xa8)+'\x49\x4e'],MessageType['\x74\x65\x78\x74']);if(!message[_0x1b71c6(-0xa6,-0xa2)+_0x1b71c6(-0xb0,-0xa7)]&&match[0x1]['\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68']('\x61\x6c\x6c')){await message['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](Lang['\x52\x45\x4d\x4f\x56\x45\x5f\x41\x4c\x4c']),await new Promise(_0x2f31e8=>setTimeout(_0x2f31e8,0xa*0x3e8));let users=participants['\x66\x69\x6c\x74\x65\x72'](_0x4295cc=>!_0x4295cc[_0x1b71c6(-0x9d,-0x9f)]==!![]);for(let user of users){await new Promise(_0x2629e1=>setTimeout(_0x2629e1,0x3e8)),await message[_0xb4cea6(0x219,0x20c)+'\x65'](message[_0x1b71c6(-0xa8,-0xab)],user[_0x1b71c6(-0x9b,-0xab)]);}return;}function _0xb4cea6(_0x4f90a5,_0x15cd07){return _0x26ce(_0x4f90a5-0x10c,_0x15cd07);}var admin=await checkImAdmin(message,message[_0x1b71c6(-0x94,-0xa2)+'\x61\x67\x65'][_0x1b71c6(-0x8a,-0x96)]['\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e'+'\x74']);if(admin)return await message['\x63\x6c\x69\x65\x6e\x74'][_0x1b71c6(-0xb0,-0xa4)+'\x65'](message[_0xb4cea6(0x214,0x216)],Lang[_0xb4cea6(0x228,0x22a)],MessageType[_0x1b71c6(-0x9a,-0x9a)]);if(Build[_0x1b71c6(-0xb1,-0xad)]==_0x1b71c6(-0xa0,-0xb0)){if(message[_0x1b71c6(-0xa9,-0xa2)+_0x1b71c6(-0xa6,-0xa7)]!==![])await message[_0x1b71c6(-0xaf,-0xaa)][_0xb4cea6(0x21b,0x20d)+'\x65'](message['\x6a\x69\x64'],'\x40'+message[_0x1b71c6(-0x92,-0xa2)+'\x61\x67\x65'][_0xb4cea6(0x229,0x21c)][_0x1b71c6(-0x95,-0xa3)+'\x74'][_0x1b71c6(-0xaa,-0xae)]('\x40')[0x0]+'\x60\x60\x60\x2c\x20'+Lang[_0x1b71c6(-0xb3,-0xaf)]+_0xb4cea6(0x20e,0x21e),MessageType['\x74\x65\x78\x74'],{'\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f':{'\x6d\x65\x6e\x74\x69\x6f\x6e\x65\x64\x4a\x69\x64':[message[_0x1b71c6(-0xab,-0xa2)+'\x61\x67\x65'][_0xb4cea6(0x229,0x238)][_0x1b71c6(-0x98,-0xa3)+'\x74']]}}),await message[_0xb4cea6(0x215,0x218)][_0xb4cea6(0x219,0x228)+'\x65'](message[_0x1b71c6(-0xa1,-0xab)],[message[_0xb4cea6(0x21d,0x20c)+_0x1b71c6(-0xa8,-0xa7)][_0xb4cea6(0x229,0x239)][_0x1b71c6(-0xa7,-0xa3)+'\x74']]);else{if(message[_0x1b71c6(-0xb0,-0xa2)+_0x1b71c6(-0xb7,-0xa7)]===![]&&message['\x6d\x65\x6e\x74\x69\x6f\x6e']!==![]){var etiketler='';message['\x6d\x65\x6e\x74\x69\x6f\x6e']['\x6d\x61\x70'](async _0x164dea=>{function _0x169efc(_0x3d9eb9,_0x5ce1cb){return _0x1b71c6(_0x5ce1cb,_0x3d9eb9-0x3f1);}etiketler+='\x40'+_0x164dea[_0x169efc(0x343,0x33b)]('\x40')[0x0]+'\x2c';}),await message['\x63\x6c\x69\x65\x6e\x74']['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message['\x6a\x69\x64'],etiketler+_0x1b71c6(-0xaa,-0xb2)+Lang[_0x1b71c6(-0xa3,-0xaf)]+_0xb4cea6(0x20e,0x204),MessageType['\x74\x65\x78\x74'],{'\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f':{'\x6d\x65\x6e\x74\x69\x6f\x6e\x65\x64\x4a\x69\x64':message[_0xb4cea6(0x213,0x20a)]}}),await message['\x63\x6c\x69\x65\x6e\x74'][_0x1b71c6(-0xa8,-0xa6)+'\x65'](message['\x6a\x69\x64'],message['\x6d\x65\x6e\x74\x69\x6f\x6e']);}else return await message[_0x1b71c6(-0xa4,-0xaa)][_0xb4cea6(0x21b,0x210)+'\x65'](message[_0xb4cea6(0x214,0x213)],Lang[_0xb4cea6(0x22b,0x222)+'\x45\x52'],MessageType[_0x1b71c6(-0x8e,-0x9a)]);}}else{if(message['\x72\x65\x70\x6c\x79\x5f\x6d\x65\x73\x73'+_0x1b71c6(-0xa7,-0xa7)]!==![])await message[_0xb4cea6(0x215,0x20e)][_0xb4cea6(0x21b,0x20d)+'\x65'](message[_0xb4cea6(0x214,0x221)],'\x40'+message[_0x1b71c6(-0xa4,-0xa2)+_0x1b71c6(-0x9d,-0xa7)]['\x64\x61\x74\x61'][_0xb4cea6(0x21c,0x229)+'\x74'][_0xb4cea6(0x211,0x21a)]('\x40')[0x0]+Build[_0xb4cea6(0x212,0x223)],MessageType[_0xb4cea6(0x225,0x22d)],{'\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f':{'\x6d\x65\x6e\x74\x69\x6f\x6e\x65\x64\x4a\x69\x64':[message[_0xb4cea6(0x21d,0x22c)+_0x1b71c6(-0xab,-0xa7)]['\x64\x61\x74\x61']['\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e'+'\x74']]}}),await message[_0x1b71c6(-0xb3,-0xaa)]['\x67\x72\x6f\x75\x70\x52\x65\x6d\x6f\x76'+'\x65'](message['\x6a\x69\x64'],[message[_0xb4cea6(0x21d,0x229)+_0xb4cea6(0x218,0x226)]['\x64\x61\x74\x61'][_0xb4cea6(0x21c,0x226)+'\x74']]);else{if(message[_0x1b71c6(-0x95,-0xa2)+_0xb4cea6(0x218,0x21d)]===![]&&message[_0xb4cea6(0x213,0x206)]!==![]){var etiketler='';message['\x6d\x65\x6e\x74\x69\x6f\x6e']['\x6d\x61\x70'](async _0x2026b5=>{etiketler+='\x40'+_0x2026b5['\x73\x70\x6c\x69\x74']('\x40')[0x0]+'\x2c';}),await message[_0x1b71c6(-0x9d,-0xaa)]['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message[_0xb4cea6(0x214,0x217)],etiketler+Build[_0x1b71c6(-0xb5,-0xad)],MessageType['\x74\x65\x78\x74'],{'\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f':{'\x6d\x65\x6e\x74\x69\x6f\x6e\x65\x64\x4a\x69\x64':message[_0xb4cea6(0x213,0x211)]}}),await message[_0x1b71c6(-0xb0,-0xaa)][_0xb4cea6(0x219,0x223)+'\x65'](message['\x6a\x69\x64'],message[_0xb4cea6(0x213,0x21e)]);}else return await message['\x63\x6c\x69\x65\x6e\x74'][_0x1b71c6(-0xac,-0xa4)+'\x65'](message[_0x1b71c6(-0xaa,-0xab)],Lang[_0x1b71c6(-0xa3,-0x94)+'\x45\x52'],MessageType[_0xb4cea6(0x225,0x21c)]);}}
});
  

Amdi.operate({pattern: 'promote ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.PROMOTE_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (Build.PROMOTEMSG == 'default') {
        if (message.reply_message !== false) {
            var checkAlready = await checkImAdmin(message, message.reply_message.data.participant);
            if (checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Lang.PROMOTED, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupMakeAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkImAdmin(message, user);
                if (checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
                }

                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Lang.PROMOTED, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupMakeAdmin(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
    else {
        if (message.reply_message !== false) {
            var checkAlready = await checkImAdmin(message, message.reply_message.data.participant);
            if (checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Build.PROMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupMakeAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkImAdmin(message, user);
                if (checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
                }

                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Build.PROMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupMakeAdmin(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
}));

Amdi.operate({pattern: 'demote ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.DEMOTE_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN);

    if (Build.DEMOTEMSG == 'default') {
        if (message.reply_message !== false) {
            var checkAlready = await checkImAdmin(message, message.reply_message.data.participant.split('@')[0]);
            if (!checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Lang.DEMOTED, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupDemoteAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkImAdmin(message, user);
                if (!checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
                }
            
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Lang.DEMOTED, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupDemoteAdmin(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
    else {
        if (message.reply_message !== false) {
            var checkAlready = await checkImAdmin(message, message.reply_message.data.participant.split('@')[0]);
            if (!checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Build.DEMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupDemoteAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkImAdmin(message, user);
                if (!checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
                }
            
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Build.DEMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupDemoteAdmin(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
}));


Amdi.operate({pattern: 'mute', fromMe: true, onlyGroup: true, desc: Lang.MUTE_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message) => {    
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (Build.MUTEMSG == 'default') {
        await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
        await message.client.sendMessage(message.jid,Lang.MUTED,MessageType.text);
    } else {
        await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
        await message.client.sendMessage(message.jid,Build.MUTEMSG,MessageType.text);
    }
}));

Amdi.operate({pattern: 'unmute', fromMe: true, onlyGroup: true, desc: Lang.UNMUTE_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message) => {    
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (Build.UNMUTEMSG == 'default') {
        await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
        await message.client.sendMessage(message.jid,Lang.UNMUTED,MessageType.text);
    }
    else {
        await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
        await message.client.sendMessage(message.jid,Build.UNMUTEMSG,MessageType.text);
    }
}));

Amdi.operate({pattern: 'clear', fromMe: true, desc: Lang.END, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    await message.sendMessage('```Chat clearing...```');
    await message.client.modifyChat (message.jid, ChatModification.delete);
    await message.sendMessage('```🚮 Chat cleared```');
}));

Amdi.operate({pattern: 'subject ?(.*)', onlyGroup: true, fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_SUB);
    
    await message.client.groupUpdateSubject(message.jid, match[1]);
    await message.client.sendMessage(message.jid,Lang.SUB,MessageType.text);
    }
));

Amdi.operate({pattern: 'grpdesc ?(.*)', onlyGroup: true, fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_DESC);
    
    await message.client.groupUpdateDescription(message.jid, match[1]);
    await message.client.sendMessage(message.jid,Lang.DESCGRP,MessageType.text);
    }
));

Amdi.operate({pattern: 'revoke', onlyGroup: true, fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    await message.client.revokeInvite (message.jid)
    await message.client.sendMessage(message.jid,Lang.REVOKED,MessageType.text);
    }
));

Amdi.operate({pattern: 'del', fromMe: true,  deleteCommand: false, dontAddCommandList: true}, async (message) => {
    await QueenAmdi.amdi_setup()
    await message.client.deleteMessage(message.jid, {id: message.reply_message.id, remoteJid: message.jid, fromMe: true})

});

Amdi.operate({pattern: 'invite', fromMe: true, onlyGroup: true, desc: Lang.INVITE_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message) => {    
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN, MessageType.text);
    var invite = await message.client.groupInviteCode(message.jid);
    await message.client.sendMessage(message.jid,Lang.INVITE + ' https://chat.whatsapp.com/' + invite, MessageType.text);
}));

Amdi.operate({pattern: 'search', fromMe: true, desc: Lang.SEARCH, dontAddCommandList: true, deleteCommand: false}, async (message) => {
    (function(_0x1c2a78,_0x13d602){function _0x5e58c7(_0x284bac,_0x18d647){return _0x591d(_0x18d647- -0x3be,_0x284bac);}var _0x54a742=_0x1c2a78();function _0x2deb02(_0x44e8ae,_0x101e64){return _0x591d(_0x101e64- -0x35b,_0x44e8ae);}while(!![]){try{var _0x40d71b=-parseInt(_0x5e58c7(-0x1cd,-0x1ae))/0x1*(parseInt(_0x5e58c7(-0x1a9,-0x1bc))/0x2)+-parseInt(_0x5e58c7(-0x197,-0x1a5))/0x3*(-parseInt(_0x5e58c7(-0x1b8,-0x1d0))/0x4)+-parseInt(_0x2deb02(-0x13a,-0x133))/0x5+parseInt(_0x5e58c7(-0x1ca,-0x1b6))/0x6+-parseInt(_0x5e58c7(-0x192,-0x1aa))/0x7*(parseInt(_0x2deb02(-0x14b,-0x157))/0x8)+-parseInt(_0x5e58c7(-0x1a4,-0x1a6))/0x9*(parseInt(_0x2deb02(-0x11f,-0x13a))/0xa)+parseInt(_0x5e58c7(-0x1c8,-0x1cf))/0xb;if(_0x40d71b===_0x13d602)break;else _0x54a742['push'](_0x54a742['shift']());}catch(_0x6c1feb){_0x54a742['push'](_0x54a742['shift']());}}}(_0x5dc8,0x77904));function _0x29877c(_0x4c20b5,_0xe3524b){return _0x591d(_0x4c20b5- -0x121,_0xe3524b);}function _0xf46a74(_0x588a1a,_0x3ad2fe){return _0x591d(_0x588a1a- -0xd4,_0x3ad2fe);}function _0x5dc8(){var _0x30a3df=['\x38\x6a\x2b\x74\x48\x73\x62\x73\x7a\x77\x58\x4c\x79\x78\x6e\x4c\x7a\x61','\x43\x33\x71\x55\x7a\x32\x4c\x30\x41\x68\x76\x49\x44\x71','\x79\x4a\x65\x33\x6d\x4d\x75\x31\x6d\x74\x43\x5a\x6f\x71','\x41\x30\x66\x54\x7a\x67\x65\x56\x79\x74\x61\x32\x6e\x71','\x6d\x4a\x75\x58\x6d\x4a\x61\x34\x6e\x77\x44\x4d\x7a\x77\x7a\x6a\x75\x57','\x6b\x47\x4f\x6b\x34\x6c\x41\x75\x34\x6c\x41\x32\x34\x6c\x41\x4e\x69\x6f\x63\x32\x55\x6f\x63\x33\x4d\x45\x63\x32\x55\x61','\x79\x32\x58\x50\x7a\x77\x35\x30','\x6d\x5a\x47\x33\x6f\x64\x62\x32\x77\x4b\x6a\x31\x72\x33\x71','\x6d\x74\x6d\x58\x6d\x64\x43\x34\x6d\x64\x4c\x76\x71\x4d\x58\x51\x73\x4b\x38','\x74\x65\x66\x6f\x72\x57','\x43\x32\x76\x59\x79\x32\x39\x55\x44\x67\x76\x55\x44\x61','\x42\x63\x62\x57\x42\x68\x76\x4e\x41\x77\x35\x5a\x38\x6a\x2b\x73\x4f\x61','\x71\x77\x31\x4b\x79\x73\x39\x4d\x7a\x64\x4b\x5a\x6d\x47','\x41\x67\x76\x5a\x7a\x73\x62\x57\x42\x68\x76\x4e\x41\x71','\x41\x4d\x4c\x4b','\x6d\x64\x4c\x4a\x7a\x4a\x71\x57\x6e\x4d\x6d\x5a\x7a\x71','\x42\x63\x62\x4f\x44\x68\x72\x57\x43\x5a\x4f\x56\x6c\x57','\x38\x6a\x2b\x4e\x53\x63\x64\x47\x54\x52\x74\x47\x54\x34\x52\x47\x54\x52\x33\x47\x54\x50\x5a\x47\x54\x35\x6c\x47\x54\x52\x68\x47\x54\x52\x4f\x47','\x7a\x67\x66\x30\x7a\x71','\x69\x6f\x63\x32\x54\x6f\x63\x33\x49\x55\x63\x32\x56\x45\x63\x32\x4e\x6f\x63\x33\x4b\x2b\x63\x32\x53\x73\x64\x47\x54\x34\x70\x47\x54\x34\x4f','\x6e\x5a\x47\x33\x6e\x32\x6d\x33\x7a\x4d\x6a\x4c\x7a\x71','\x38\x6a\x2b\x74\x48\x63\x62\x65\x7a\x78\x6e\x4a\x43\x4d\x4c\x57\x44\x61','\x43\x67\x58\x31\x7a\x32\x4c\x55','\x6d\x77\x71\x33\x79\x74\x69\x57\x6e\x73\x39\x59\x79\x71','\x7a\x4d\x76\x30\x79\x32\x47','\x43\x33\x72\x48\x42\x67\x57\x47\x78\x5a\x58\x57\x42\x61','\x38\x6a\x2b\x4e\x53\x63\x62\x71\x42\x68\x76\x4e\x41\x77\x34\x47\x6f\x47','\x6e\x64\x72\x66\x43\x68\x66\x49\x79\x32\x47','\x44\x67\x76\x34\x44\x61','\x6e\x74\x79\x59\x6e\x5a\x6a\x30\x75\x4d\x6e\x69\x76\x4d\x47','\x6d\x64\x62\x4b\x6d\x67\x76\x4d\x6f\x64\x43\x6b\x63\x47','\x7a\x67\x76\x5a\x79\x57','\x7a\x4d\x76\x30\x79\x32\x48\x6b\x43\x32\x39\x55','\x6d\x74\x75\x33\x6e\x5a\x71\x57\x72\x67\x50\x5a\x72\x31\x48\x6a','\x79\x49\x35\x4a\x42\x32\x30\x56\x71\x4d\x58\x48\x79\x57','\x7a\x67\x4b\x47\x7a\x78\x48\x30\x7a\x78\x6a\x55\x79\x71','\x69\x67\x72\x48\x44\x67\x75\x47\x6f\x49\x61','\x78\x59\x4f\x6b\x72\x78\x48\x48\x42\x78\x62\x53\x7a\x71','\x34\x6c\x41\x55\x34\x6c\x45\x70\x34\x6c\x41\x30\x34\x6c\x41\x58\x34\x6c\x41\x36\x69\x6f\x63\x32\x4d\x55\x63\x33\x48\x73\x64\x47\x54\x34\x71','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x38\x6a\x2b\x74\x48\x63\x64\x47\x54\x34\x64\x47\x54\x35\x6c\x47\x54\x34\x70\x47\x54\x34\x52\x47\x54\x51\x33\x47\x54\x52\x56\x47\x54\x52\x4f\x47','\x6d\x74\x47\x5a\x6d\x4a\x62\x65\x77\x4c\x48\x6e\x44\x67\x6d','\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x4e\x41\x71','\x6b\x47\x4f\x6b\x77\x77\x39\x31\x69\x67\x6e\x48\x42\x47','\x34\x6c\x45\x66\x69\x6f\x63\x32\x52\x2b\x63\x33\x4b\x55\x63\x32\x53\x45\x63\x32\x55\x49\x61\x36\x69\x61','\x6e\x31\x44\x5a\x72\x68\x6a\x33\x41\x47','\x7a\x77\x35\x4e\x42\x67\x4c\x5a\x41\x61','\x42\x4e\x6d\x47\x79\x4e\x4b\x47\x6b\x49\x35\x50\x42\x47','\x69\x64\x4f\x47\x6c\x4d\x4c\x55\x43\x33\x72\x48\x42\x61','\x6e\x4a\x43\x31\x6f\x74\x47\x58\x43\x67\x50\x34\x73\x4b\x39\x4f','\x6d\x74\x75\x57\x44\x30\x72\x64\x75\x76\x50\x49','\x44\x77\x44\x50\x42\x4c\x39\x53\x41\x77\x35\x52\x70\x47','\x7a\x64\x71\x31\x6e\x67\x76\x49\x6d\x77\x6e\x4d\x6d\x61','\x6b\x56\x63\x46\x4b\x51\x62\x72\x44\x77\x76\x4c\x42\x49\x62\x62\x42\x71','\x38\x6a\x2b\x74\x48\x73\x64\x47\x54\x52\x68\x47\x54\x35\x6c\x47\x54\x50\x52\x47\x54\x35\x74\x47\x54\x51\x33\x47\x54\x34\x4f\x47\x34\x6c\x41\x41','\x69\x67\x4c\x55\x43\x33\x72\x48\x42\x67\x57\x47\x44\x61','\x7a\x32\x4c\x5a\x44\x63\x35\x4e\x41\x78\x72\x4f\x44\x71','\x7a\x67\x66\x30\x79\x71','\x6e\x64\x62\x36\x72\x4c\x44\x65\x79\x4d\x34','\x38\x6a\x2b\x6d\x4b\x63\x62\x6d\x41\x77\x35\x52\x69\x64\x4f\x47','\x6c\x4d\x6e\x56\x42\x73\x39\x63\x42\x67\x66\x4a\x41\x57'];_0x5dc8=function(){return _0x30a3df;};return _0x5dc8();}function _0x591d(_0x30906d,_0x3847e2){var _0x5dc812=_0x5dc8();return _0x591d=function(_0x591d80,_0x3114b9){_0x591d80=_0x591d80-0x1ec;var _0x2b8800=_0x5dc812[_0x591d80];if(_0x591d['\x76\x6d\x58\x73\x75\x65']===undefined){var _0x31d48e=function(_0x294d8a){var _0x1c11af='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var _0x474911='',_0x173b44='';for(var _0x30f7df=0x0,_0x2f589a,_0x21104e,_0x5731ba=0x0;_0x21104e=_0x294d8a['\x63\x68\x61\x72\x41\x74'](_0x5731ba++);~_0x21104e&&(_0x2f589a=_0x30f7df%0x4?_0x2f589a*0x40+_0x21104e:_0x21104e,_0x30f7df++%0x4)?_0x474911+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x2f589a>>(-0x2*_0x30f7df&0x6)):0x0){_0x21104e=_0x1c11af['\x69\x6e\x64\x65\x78\x4f\x66'](_0x21104e);}for(var _0x8fb115=0x0,_0x5b21f4=_0x474911['\x6c\x65\x6e\x67\x74\x68'];_0x8fb115<_0x5b21f4;_0x8fb115++){_0x173b44+='\x25'+('\x30\x30'+_0x474911['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x8fb115)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x173b44);};_0x591d['\x6e\x4a\x64\x61\x71\x79']=_0x31d48e,_0x30906d=arguments,_0x591d['\x76\x6d\x58\x73\x75\x65']=!![];}var _0x54c3f4=_0x5dc812[0x0],_0x3e3495=_0x591d80+_0x54c3f4,_0x1689ef=_0x30906d[_0x3e3495];return!_0x1689ef?(_0x2b8800=_0x591d['\x6e\x4a\x64\x61\x71\x79'](_0x2b8800),_0x30906d[_0x3e3495]=_0x2b8800):_0x2b8800=_0x1689ef,_0x2b8800;},_0x591d(_0x30906d,_0x3847e2);}await QueenAmdi['\x61\x6d\x64\x69\x5f\x73\x65\x74\x75\x70']();if(Build[_0xf46a74(0x11c,0x123)]=='\x45\x4e'){get_result=await QueenAmdi[_0xf46a74(0x12b,0x141)][_0xf46a74(0x133,0x123)](_0x29877c(0xf0,0xdc)+_0x29877c(0x104,0xff)+_0xf46a74(0x11d,0x104)+_0xf46a74(0x14f,0x152)+_0xf46a74(0x11f,0x138)+_0xf46a74(0x147,0x139)+_0x29877c(0xda,0xd0)+_0xf46a74(0x12a,0x11b)+'\x77\x2f'),get_result=get_result[_0x29877c(0xf4,0x105)],ini_txt='';for(var x of get_result){ini_txt+=_0x29877c(0xe0,0xce)+'\x20'+x[_0x29877c(0xdc,0xdc)]+'\x0a',ini_txt+=_0xf46a74(0x128,0x12a)+'\x69\x6f\x6e\x20\x3a\x20'+x[_0x29877c(0xe5,0xd3)]+'\x0a',ini_txt+=_0x29877c(0x103,0xff)+_0x29877c(0xea,0xd7)+x[_0xf46a74(0x125,0x110)]+'\x0a',ini_txt+=_0x29877c(0x101,0x120)+x['\x6c\x69\x6e\x6b']+'\x0a\x0a';}await message[_0xf46a74(0x119,0x12a)][_0xf46a74(0x13a,0x12b)+'\x65'](message[_0xf46a74(0x121,0x103)],'\x2a\ud83d\udca0\x51\x75\x65\x65\x6e\x20\x41\x6d'+_0x29877c(0xe9,0xcb)+'\x6c\x20\x70\x6c\x75\x67\x69\x6e\x73\ud83d\udca0'+_0xf46a74(0x13e,0x130)+_0xf46a74(0x14a,0x153)+_0xf46a74(0x120,0x11a)+_0x29877c(0xf5,0xf1)+_0xf46a74(0x12c,0x140)+_0xf46a74(0x146,0x12c)+_0xf46a74(0x138,0x14f)+_0xf46a74(0x143,0x148)+_0x29877c(0xd6,0xdb)+_0x29877c(0xfe,0xed)+_0x29877c(0xe8,0xd4)+_0x29877c(0x106,0xfd)+_0x29877c(0xd5,0xef)+_0x29877c(0x105,0x104)+_0xf46a74(0x131,0x148)+ini_txt,MessageType['\x74\x65\x78\x74'],{'\x71\x75\x6f\x74\x65\x64':message[_0x29877c(0xff,0xf4)]});}if(Build[_0xf46a74(0x11c,0x110)]=='\x53\x49'){get_result=await QueenAmdi[_0xf46a74(0x12b,0x114)][_0xf46a74(0x133,0x131)](_0xf46a74(0x13d,0x11f)+_0xf46a74(0x151,0x16a)+'\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74'+_0xf46a74(0x14f,0x154)+_0x29877c(0xd2,0xda)+'\x64\x34\x35\x34\x65\x62\x31\x63\x66\x30'+_0x29877c(0xda,0xe6)+'\x31\x64\x37\x61\x32\x30\x35\x2f\x72\x61'+'\x77\x2f'),get_result=get_result['\x73\x69\x6e\x68\x61\x6c\x61'],ini_txt='';for(var x of get_result){ini_txt+=_0x29877c(0xd7,0xdc)+'\x3a\x20'+x[_0x29877c(0xdc,0xc0)]+'\x0a',ini_txt+=_0xf46a74(0x13b,0x153)+'\x3a\x20'+x[_0xf46a74(0x132,0x132)]+'\x0a',ini_txt+=_0xf46a74(0x149,0x15a)+_0x29877c(0xf2,0xdd)+x[_0x29877c(0xd8,0xd0)]+'\x0a',ini_txt+=_0x29877c(0x101,0xe5)+x['\x6c\x69\x6e\x6b']+'\x0a\x0a';}await message[_0x29877c(0xcc,0xb3)][_0xf46a74(0x13a,0x150)+'\x65'](message['\x6a\x69\x64'],_0xf46a74(0x148,0x143)+_0xf46a74(0x136,0x11e)+_0xf46a74(0x11e,0x12d)+_0x29877c(0xcb,0xdd)+_0x29877c(0xd9,0xec)+_0x29877c(0xec,0xfd)+'\u0dd0\u0d9a\u0dca\u0d9a\u0dda\x20\x2a\x2e\x69\x6e'+_0xf46a74(0x12c,0x121)+_0x29877c(0xf9,0xfb)+'\x5f\x2a\x0a\u0d8b\u0daf\u0dcf\u0dc4\u0dbb\u0dab\u0dba'+'\x20\x3a\x20\x2e\x69\x6e\x73\x74\x61\x6c'+_0x29877c(0xd6,0xdf)+'\x67\x69\x73\x74\x2e\x67\x69\x74\x68\x75'+_0xf46a74(0x135,0x11b)+_0xf46a74(0x153,0x145)+_0x29877c(0xd5,0xe1)+'\x62\x31\x37\x32\x65\x35\x31\x37\x33\x39'+_0x29877c(0xe4,0xee)+ini_txt,MessageType[_0x29877c(0xe2,0xd5)],{'\x71\x75\x6f\x74\x65\x64':message['\x64\x61\x74\x61']});}
});

module.exports = {
    checkImAdmin: checkImAdmin
};