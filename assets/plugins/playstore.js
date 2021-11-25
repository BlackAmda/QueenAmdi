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
const axios = require("axios")
const {MessageType, Mimetype} = require('@blackamda/queenamdi-web-api');
let LOL = Build.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('playstore');

function calc_file_size(bytes) {
    if (bytes >= 1073741824) {	// 1024 * 1024 * 1024
      bytes = ((bytes / 1073741824) * 1024);
  
    } else if (bytes >= 1048576) { // 1024 * 1024
      bytes = (bytes / 1048576);
  
    } else if (bytes >= 1024) {	// 1024 * 1
      bytes = ((bytes / 1024) / 1024);
  
    } else if (bytes > 1) {
      bytes = bytes + ' bytes';
  
    } else if (bytes == 1) {
      bytes = bytes + ' byte';
  
    } else {
      bytes = '0 bytes';
    }
  
    return bytes
  }

Amdi.operate({ pattern: 'apk ?(.*)', fromMe: LOL, desc: Lang.APK_DESC,  deleteCommand: false}, (async (message, match) => {
  (function(_0x2d74b2,_0x4222ab){const _0x174143=_0x2d74b2();function _0x806a96(_0x52bb20,_0x185848){return _0x49ef(_0x185848- -0x2e6,_0x52bb20);}function _0x26fb78(_0x9ded9,_0x572ef3){return _0x49ef(_0x9ded9-0xf0,_0x572ef3);}while(!![]){try{const _0x18706a=-parseInt(_0x806a96(-0x23c,-0x230))/0x1+parseInt(_0x26fb78(0x18f,0x199))/0x2+-parseInt(_0x26fb78(0x1a3,0x1a7))/0x3+parseInt(_0x806a96(-0x24d,-0x240))/0x4*(parseInt(_0x26fb78(0x189,0x185))/0x5)+parseInt(_0x806a96(-0x231,-0x236))/0x6+-parseInt(_0x806a96(-0x259,-0x24a))/0x7*(parseInt(_0x806a96(-0x238,-0x237))/0x8)+parseInt(_0x806a96(-0x234,-0x239))/0x9*(parseInt(_0x26fb78(0x191,0x186))/0xa);if(_0x18706a===_0x4222ab)break;else _0x174143['push'](_0x174143['shift']());}catch(_0xa70447){_0x174143['push'](_0x174143['shift']());}}}(_0x1316,0xd44ad));const pack=match[0x1];if(!pack)return await message[_0x1155fa(-0x2ab,-0x2a0)]['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message[_0x1155fa(-0x2b4,-0x2ba)],Lang['\x41\x50\x4b\x5f\x4e\x45\x45\x44'],MessageType[_0x45dbfb(0x136,0x129)],{'\x71\x75\x6f\x74\x65\x64':message['\x64\x61\x74\x61']});if(pack[_0x1155fa(-0x2cf,-0x2c1)]('\x3d')){var split=pack[_0x45dbfb(0x124,0x11a)]('\x3d');link=split[0x1],nothing=split[0x0];}var apk=await QueenAmdi['\x61\x70\x6b'](link),apkinfo=await QueenAmdi[_0x45dbfb(0x138,0x148)](link);const _0x69183e={};_0x69183e[_0x1155fa(-0x2af,-0x2b0)+'\x70\x65']='\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65'+'\x72';const app=await axios['\x67\x65\x74'](apkinfo['\x69\x63'],_0x69183e),_0x1ce251={};_0x1ce251['\x6d\x69\x6d\x65\x74\x79\x70\x65']=Mimetype[_0x45dbfb(0x11a,0x109)],_0x1ce251[_0x1155fa(-0x2b9,-0x2ac)]=Lang[_0x1155fa(-0x2b2,-0x2b1)]+Lang[_0x45dbfb(0x11c,0x125)]+apk[_0x45dbfb(0x11e,0x110)]+Lang[_0x45dbfb(0x12f,0x13f)]+apk[_0x45dbfb(0x11b,0x128)]+Lang['\x41\x50\x4b\x5f\x56']+apk['\x76\x65\x72\x73']+Lang['\x41\x50\x4b\x5f\x53\x55\x4d']+apkinfo['\x73\x75\x6d\x6d'],await message[_0x45dbfb(0x141,0x13b)][_0x1155fa(-0x2bb,-0x2b8)+'\x65'](message[_0x45dbfb(0x127,0x116)],Buffer[_0x45dbfb(0x122,0x12f)](app[_0x45dbfb(0x123,0x123)]),MessageType[_0x45dbfb(0x13e,0x141)],_0x1ce251);function _0x1155fa(_0x41f169,_0x564efe){return _0x49ef(_0x564efe- -0x355,_0x41f169);}const _0x3b8d91={};function _0x45dbfb(_0x33e9d5,_0x29be2a){return _0x49ef(_0x33e9d5-0x8c,_0x29be2a);}_0x3b8d91[_0x45dbfb(0x131,0x129)+'\x70\x65']=_0x45dbfb(0x11f,0x12b)+'\x72';function _0x49ef(_0x181b5e,_0x23deeb){const _0x131605=_0x1316();return _0x49ef=function(_0x49ef24,_0x2b4903){_0x49ef24=_0x49ef24-0x8e;let _0x117804=_0x131605[_0x49ef24];if(_0x49ef['\x64\x57\x50\x4d\x58\x63']===undefined){var _0x2313b7=function(_0x69183e){const _0x1ce251='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0x3b8d91='',_0x518bb1='';for(let _0x882920=0x0,_0x3c10e4,_0x275892,_0x3776ff=0x0;_0x275892=_0x69183e['\x63\x68\x61\x72\x41\x74'](_0x3776ff++);~_0x275892&&(_0x3c10e4=_0x882920%0x4?_0x3c10e4*0x40+_0x275892:_0x275892,_0x882920++%0x4)?_0x3b8d91+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x3c10e4>>(-0x2*_0x882920&0x6)):0x0){_0x275892=_0x1ce251['\x69\x6e\x64\x65\x78\x4f\x66'](_0x275892);}for(let _0x5b0d5f=0x0,_0x7bf77a=_0x3b8d91['\x6c\x65\x6e\x67\x74\x68'];_0x5b0d5f<_0x7bf77a;_0x5b0d5f++){_0x518bb1+='\x25'+('\x30\x30'+_0x3b8d91['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x5b0d5f)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x518bb1);};_0x49ef['\x5a\x55\x73\x4f\x66\x58']=_0x2313b7,_0x181b5e=arguments,_0x49ef['\x64\x57\x50\x4d\x58\x63']=!![];}const _0x30e3b1=_0x131605[0x0],_0x50b896=_0x49ef24+_0x30e3b1,_0x5532fa=_0x181b5e[_0x50b896];return!_0x5532fa?(_0x117804=_0x49ef['\x5a\x55\x73\x4f\x66\x58'](_0x117804),_0x181b5e[_0x50b896]=_0x117804):_0x117804=_0x5532fa,_0x117804;},_0x49ef(_0x181b5e,_0x23deeb);}const profileBuffer=await axios[_0x45dbfb(0x13a,0x127)](apk[_0x45dbfb(0x133,0x127)],_0x3b8d91),load=Buffer['\x66\x72\x6f\x6d'](profileBuffer[_0x45dbfb(0x123,0x125)]),calc=Buffer[_0x1155fa(-0x2b6,-0x2a1)](load),size=calc_file_size(calc);if(Build[_0x1155fa(-0x2ca,-0x2c0)]<size)return await message[_0x45dbfb(0x141,0x13f)][_0x45dbfb(0x129,0x131)+'\x65'](message[_0x1155fa(-0x2cf,-0x2ba)],Lang[_0x1155fa(-0x2c8,-0x2b5)]+Build[_0x1155fa(-0x290,-0x2a4)]+'\x5f',MessageType[_0x1155fa(-0x2b9,-0x2ab)],{'\x71\x75\x6f\x74\x65\x64':message['\x64\x61\x74\x61']});else{var downloading=await message['\x63\x6c\x69\x65\x6e\x74'][_0x45dbfb(0x129,0x13b)+'\x65'](message['\x6a\x69\x64'],Lang['\x41\x50\x4b\x5f\x44\x57'],MessageType['\x74\x65\x78\x74'],{'\x71\x75\x6f\x74\x65\x64':message[_0x1155fa(-0x2bc,-0x2be)]}),uploading=await message[_0x1155fa(-0x2a2,-0x2a0)]['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message['\x6a\x69\x64'],Lang[_0x45dbfb(0x12a,0x11e)],MessageType[_0x45dbfb(0x136,0x13d)],{'\x71\x75\x6f\x74\x65\x64':message['\x64\x61\x74\x61']});return await message[_0x1155fa(-0x299,-0x2a0)][_0x45dbfb(0x129,0x125)+'\x65'](message['\x6a\x69\x64'],Buffer[_0x1155fa(-0x2c9,-0x2bf)](profileBuffer[_0x1155fa(-0x2b6,-0x2be)]),MessageType['\x64\x6f\x63\x75\x6d\x65\x6e\x74'],{'\x66\x69\x6c\x65\x6e\x61\x6d\x65':apk['\x6e\x61\x6d\x65']+'\x2e\x61\x70\x6b','\x6d\x69\x6d\x65\x74\x79\x70\x65':'\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f'+_0x45dbfb(0x12e,0x11c)+'\x6f\x69\x64\x2e\x70\x61\x63\x6b\x61\x67'+_0x1155fa(-0x2bc,-0x2c4),'\x71\x75\x6f\x74\x65\x64':message[_0x45dbfb(0x123,0x132)]}),await message[_0x45dbfb(0x141,0x13c)][_0x1155fa(-0x2af,-0x2ad)+_0x45dbfb(0x126,0x11f)](message[_0x45dbfb(0x127,0x12a)],{'\x69\x64':downloading[_0x1155fa(-0x2a1,-0x2aa)]['\x69\x64'],'\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64':message[_0x1155fa(-0x2b9,-0x2ba)],'\x66\x72\x6f\x6d\x4d\x65':!![]}),await message[_0x1155fa(-0x28e,-0x2a0)][_0x45dbfb(0x134,0x124)+_0x45dbfb(0x126,0x12f)](message[_0x1155fa(-0x2ae,-0x2ba)],{'\x69\x64':uploading[_0x1155fa(-0x2a2,-0x2aa)]['\x69\x64'],'\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64':message['\x6a\x69\x64'],'\x66\x72\x6f\x6d\x4d\x65':!![]});}function _0x1316(){const _0x51a676=['\x79\x78\x62\x52\x78\x32\x4c\x55\x7a\x4d\x38','\x6e\x74\x69\x59\x6f\x64\x43\x59\x6d\x76\x62\x4f\x79\x31\x66\x4c\x7a\x47','\x7a\x32\x76\x30','\x6d\x74\x43\x32\x45\x77\x72\x68\x43\x4e\x76\x32','\x6f\x74\x71\x35\x6d\x64\x69\x57\x6e\x4b\x4c\x4e\x71\x4b\x44\x6e\x73\x71','\x74\x4b\x66\x6e\x72\x71','\x41\x77\x31\x48\x7a\x32\x75','\x6f\x74\x65\x59\x6f\x64\x47\x59\x44\x77\x6e\x48\x43\x30\x66\x67','\x79\x4e\x4c\x30\x7a\x75\x58\x4c\x42\x4d\x44\x30\x41\x61','\x79\x32\x58\x50\x7a\x77\x35\x30','\x6d\x74\x71\x59\x6f\x74\x61\x30\x6d\x77\x44\x75\x74\x76\x50\x73\x44\x71','\x43\x67\x35\x4e','\x79\x78\x76\x30\x41\x61','\x71\x76\x62\x6c\x78\x30\x34','\x7a\x73\x31\x48\x43\x4d\x6e\x4f\x41\x78\x7a\x4c','\x42\x4d\x66\x54\x7a\x71','\x79\x78\x6a\x59\x79\x78\x4c\x49\x44\x77\x7a\x4d\x7a\x71','\x41\x77\x35\x4a\x42\x68\x76\x4b\x7a\x78\x6d','\x74\x75\x66\x79\x78\x31\x6e\x6a\x77\x4b\x75','\x7a\x4e\x6a\x56\x42\x71','\x7a\x67\x66\x30\x79\x71','\x43\x33\x62\x53\x41\x78\x71','\x6e\x4a\x62\x4f\x76\x65\x31\x30\x44\x32\x30','\x79\x77\x44\x4c','\x41\x4d\x4c\x4b','\x6e\x64\x79\x5a\x6e\x74\x71\x57\x75\x67\x4c\x6c\x71\x33\x76\x56','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x71\x76\x62\x6c\x78\x31\x76\x71','\x6f\x74\x61\x59\x6f\x74\x71\x30\x41\x31\x72\x72\x76\x4b\x35\x53','\x74\x65\x4c\x6e\x73\x76\x71','\x6d\x5a\x62\x51\x44\x32\x72\x4e\x44\x67\x79','\x42\x49\x39\x32\x42\x4d\x71\x55\x79\x77\x35\x4b\x43\x47','\x71\x76\x62\x6c\x78\x30\x72\x66\x76\x47','\x71\x76\x62\x6c\x78\x30\x71','\x43\x4d\x76\x5a\x43\x67\x39\x55\x43\x32\x76\x75\x45\x71','\x6f\x74\x71\x31\x6e\x64\x48\x63\x42\x67\x6e\x52\x79\x4c\x79','\x42\x67\x4c\x55\x41\x57','\x7a\x67\x76\x53\x7a\x78\x72\x4c\x74\x77\x76\x5a\x43\x57','\x79\x32\x66\x57\x44\x67\x4c\x56\x42\x47','\x44\x67\x76\x34\x44\x61','\x41\x32\x76\x35'];_0x1316=function(){return _0x51a676;};return _0x1316();}
}));