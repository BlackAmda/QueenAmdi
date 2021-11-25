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
    (function(_0x12ba75,_0x303039){const _0x3b1e19=_0x12ba75();function _0x2c3f55(_0x56db93,_0x1f9cc9){return _0x4f30(_0x1f9cc9- -0xec,_0x56db93);}function _0x4b34fc(_0xb666f0,_0x52292b){return _0x4f30(_0x52292b-0x2eb,_0xb666f0);}while(!![]){try{const _0x51d03e=parseInt(_0x4b34fc(0x3f4,0x405))/0x1+-parseInt(_0x2c3f55(0x32,0x2a))/0x2*(parseInt(_0x2c3f55(0x22,0x28))/0x3)+parseInt(_0x4b34fc(0x405,0x3f3))/0x4+parseInt(_0x2c3f55(0x3a,0x3d))/0x5+parseInt(_0x4b34fc(0x3ec,0x3f5))/0x6*(parseInt(_0x2c3f55(0x2a,0x40))/0x7)+parseInt(_0x4b34fc(0x3e7,0x3f8))/0x8*(parseInt(_0x4b34fc(0x405,0x41c))/0x9)+-parseInt(_0x2c3f55(0x39,0x2f))/0xa;if(_0x51d03e===_0x303039)break;else _0x3b1e19['push'](_0x3b1e19['shift']());}catch(_0x170fbc){_0x3b1e19['push'](_0x3b1e19['shift']());}}}(_0x35e6,0x25e5d));const pack=match[0x1];if(!pack)return await message[_0x3caea7(0x19a,0x182)][_0x3caea7(0x1a2,0x1a7)+'\x65'](message[_0x3caea7(0x19e,0x1a4)],Lang['\x41\x50\x4b\x5f\x4e\x45\x45\x44'],MessageType[_0x521a62(0x228,0x212)],{'\x71\x75\x6f\x74\x65\x64':message[_0x521a62(0x237,0x239)]});function _0x3caea7(_0x457011,_0x1d84da){return _0x4f30(_0x457011-0x97,_0x1d84da);}if(pack[_0x3caea7(0x1a6,0x1af)]('\x3d')){var split=pack[_0x3caea7(0x1bd,0x1d4)]('\x3d');link=split[0x1],nothing=split[0x0];}var apk=await QueenAmdi[_0x521a62(0x234,0x21d)](link);function _0x521a62(_0x58181,_0x3bde19){return _0x4f30(_0x58181-0x113,_0x3bde19);}var apkinfo=await QueenAmdi[_0x3caea7(0x19b,0x197)](link);const _0x56ffc3={};_0x56ffc3[_0x521a62(0x23d,0x226)+'\x70\x65']=_0x521a62(0x224,0x23c)+'\x72';const app=await axios[_0x3caea7(0x1ae,0x1a2)](apkinfo['\x69\x63'],_0x56ffc3),_0x25f955={};function _0x4f30(_0x14f4b5,_0x4b2fa9){const _0x35e650=_0x35e6();return _0x4f30=function(_0x4f30a7,_0xaa0e62){_0x4f30a7=_0x4f30a7-0x103;let _0x40c470=_0x35e650[_0x4f30a7];if(_0x4f30['\x4f\x6f\x45\x54\x43\x6e']===undefined){var _0x40cf70=function(_0x56ffc3){const _0x25f955='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0x23dd55='',_0x5dc7fb='';for(let _0x3af2bd=0x0,_0x2e0d1e,_0x40a4be,_0x3f9827=0x0;_0x40a4be=_0x56ffc3['\x63\x68\x61\x72\x41\x74'](_0x3f9827++);~_0x40a4be&&(_0x2e0d1e=_0x3af2bd%0x4?_0x2e0d1e*0x40+_0x40a4be:_0x40a4be,_0x3af2bd++%0x4)?_0x23dd55+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x2e0d1e>>(-0x2*_0x3af2bd&0x6)):0x0){_0x40a4be=_0x25f955['\x69\x6e\x64\x65\x78\x4f\x66'](_0x40a4be);}for(let _0x58028b=0x0,_0x553618=_0x23dd55['\x6c\x65\x6e\x67\x74\x68'];_0x58028b<_0x553618;_0x58028b++){_0x5dc7fb+='\x25'+('\x30\x30'+_0x23dd55['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x58028b)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x5dc7fb);};_0x4f30['\x72\x53\x76\x41\x49\x6a']=_0x40cf70,_0x14f4b5=arguments,_0x4f30['\x4f\x6f\x45\x54\x43\x6e']=!![];}const _0x2a4a64=_0x35e650[0x0],_0x6f60c1=_0x4f30a7+_0x2a4a64,_0x173851=_0x14f4b5[_0x6f60c1];return!_0x173851?(_0x40c470=_0x4f30['\x72\x53\x76\x41\x49\x6a'](_0x40c470),_0x14f4b5[_0x6f60c1]=_0x40c470):_0x40c470=_0x173851,_0x40c470;},_0x4f30(_0x14f4b5,_0x4b2fa9);}_0x25f955[_0x521a62(0x248,0x247)]=Mimetype[_0x521a62(0x240,0x258)],_0x25f955[_0x521a62(0x232,0x24a)]=Lang[_0x521a62(0x21f,0x235)]+Lang[_0x3caea7(0x1ba,0x1ca)]+apk[_0x521a62(0x235,0x22a)]+Lang[_0x521a62(0x21c,0x224)]+apk[_0x521a62(0x219,0x20b)]+Lang[_0x3caea7(0x19c,0x1a9)]+apk[_0x3caea7(0x1af,0x1c6)]+Lang[_0x3caea7(0x1a5,0x1bd)]+apkinfo[_0x3caea7(0x1b4,0x1c9)],await message[_0x521a62(0x216,0x215)][_0x3caea7(0x1a2,0x18b)+'\x65'](message[_0x521a62(0x21a,0x22b)],Buffer[_0x3caea7(0x1c9,0x1bb)](app['\x64\x61\x74\x61']),MessageType[_0x3caea7(0x1be,0x1b2)],_0x25f955);function _0x35e6(){const _0x6cd2de=['\x6d\x4a\x66\x71\x43\x4e\x6e\x58\x7a\x4c\x47','\x43\x67\x35\x4e','\x71\x76\x62\x6c\x78\x30\x72\x78','\x79\x77\x44\x4c','\x41\x32\x76\x35','\x6d\x4a\x65\x35\x6f\x64\x4b\x31\x6d\x4c\x6a\x49\x72\x76\x72\x64\x45\x71','\x7a\x4e\x6a\x56\x42\x71','\x71\x76\x62\x6c\x78\x31\x76\x71','\x42\x67\x4c\x55\x41\x57','\x42\x77\x4c\x54\x7a\x78\x72\x35\x43\x67\x75','\x79\x4e\x4c\x30\x7a\x75\x58\x4c\x42\x4d\x44\x30\x41\x61','\x79\x32\x58\x50\x7a\x77\x35\x30','\x79\x78\x62\x52\x78\x32\x4c\x55\x7a\x4d\x38','\x71\x76\x62\x6c\x78\x31\x79','\x79\x78\x76\x30\x41\x61','\x41\x4d\x4c\x4b','\x6e\x64\x71\x58\x6e\x4a\x61\x34\x75\x65\x31\x4e\x42\x32\x39\x55','\x71\x76\x62\x6c\x78\x30\x72\x66\x76\x47','\x6e\x74\x69\x31\x6d\x74\x61\x59\x72\x32\x6e\x4a\x7a\x4c\x66\x6b','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x71\x76\x62\x6c\x78\x30\x71','\x6f\x67\x66\x74\x7a\x4d\x44\x34\x43\x47','\x71\x76\x62\x6c\x78\x31\x6e\x76\x74\x71','\x41\x77\x35\x4a\x42\x68\x76\x4b\x7a\x78\x6d','\x74\x75\x66\x79\x78\x31\x6e\x6a\x77\x4b\x75','\x79\x78\x6a\x59\x79\x78\x4c\x49\x44\x77\x7a\x4d\x7a\x71','\x7a\x67\x76\x53\x7a\x78\x72\x4c\x74\x77\x76\x5a\x43\x57','\x7a\x67\x39\x4a\x44\x77\x31\x4c\x42\x4e\x71','\x6d\x4a\x66\x33\x75\x30\x66\x56\x71\x78\x6d','\x44\x67\x76\x34\x44\x61','\x6d\x5a\x61\x30\x6e\x4d\x72\x79\x72\x66\x7a\x36\x7a\x47','\x7a\x32\x76\x30','\x44\x4d\x76\x59\x43\x57','\x42\x32\x4c\x4b\x6c\x4e\x62\x48\x79\x32\x54\x48\x7a\x57','\x6e\x5a\x6d\x5a\x6d\x74\x44\x48\x79\x4d\x4c\x79\x71\x78\x4f','\x6e\x4a\x69\x34\x6d\x4a\x43\x34\x6d\x68\x50\x30\x42\x65\x76\x70\x7a\x61','\x79\x78\x62\x57\x42\x67\x4c\x4a\x79\x78\x72\x50\x42\x57','\x43\x33\x76\x54\x42\x71','\x7a\x73\x31\x48\x43\x4d\x6e\x4f\x41\x78\x7a\x4c','\x79\x32\x66\x57\x44\x67\x4c\x56\x42\x47','\x6c\x4d\x66\x57\x41\x57','\x79\x78\x62\x52','\x42\x4d\x66\x54\x7a\x71','\x71\x76\x62\x6c\x78\x30\x34','\x7a\x67\x66\x30\x79\x71','\x74\x4b\x66\x6e\x72\x71','\x43\x33\x62\x53\x41\x78\x71','\x41\x77\x31\x48\x7a\x32\x75','\x74\x65\x4c\x6e\x73\x76\x71','\x6e\x74\x65\x33\x6f\x64\x75\x57\x75\x76\x48\x64\x79\x32\x48\x53','\x43\x4d\x76\x5a\x43\x67\x39\x55\x43\x32\x76\x75\x45\x71','\x42\x49\x39\x32\x42\x4d\x71\x55\x79\x77\x35\x4b\x43\x47'];_0x35e6=function(){return _0x6cd2de;};return _0x35e6();}const _0x23dd55={};_0x23dd55[_0x3caea7(0x1c1,0x1bd)+'\x70\x65']='\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65'+'\x72';const profileBuffer=await axios[_0x521a62(0x22a,0x235)](apk[_0x3caea7(0x1cb,0x1b9)],_0x23dd55),load=Buffer['\x66\x72\x6f\x6d'](profileBuffer[_0x3caea7(0x1bb,0x1bc)]),calc=Buffer[_0x521a62(0x249,0x22f)](load),size=calc_file_size(calc);if(Build[_0x3caea7(0x1a7,0x1be)]<size)return await message['\x63\x6c\x69\x65\x6e\x74'][_0x521a62(0x21e,0x20c)+'\x65'](message[_0x3caea7(0x19e,0x195)],Lang[_0x3caea7(0x1bf,0x1ae)]+Build[_0x521a62(0x238,0x23e)]+'\x5f',MessageType['\x74\x65\x78\x74'],{'\x71\x75\x6f\x74\x65\x64':message[_0x3caea7(0x1bb,0x1c3)]});else{var downloading=await message['\x63\x6c\x69\x65\x6e\x74'][_0x521a62(0x21e,0x228)+'\x65'](message[_0x521a62(0x21a,0x227)],Lang[_0x521a62(0x241,0x236)],MessageType[_0x521a62(0x228,0x22a)],{'\x71\x75\x6f\x74\x65\x64':message[_0x521a62(0x237,0x22f)]}),uploading=await message[_0x3caea7(0x19a,0x1ab)]['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message[_0x3caea7(0x19e,0x1ad)],Lang[_0x521a62(0x246,0x255)],MessageType['\x74\x65\x78\x74'],{'\x71\x75\x6f\x74\x65\x64':message[_0x521a62(0x237,0x24f)]});return await message['\x63\x6c\x69\x65\x6e\x74']['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message[_0x521a62(0x21a,0x222)],Buffer['\x66\x72\x6f\x6d'](profileBuffer[_0x521a62(0x237,0x24d)]),MessageType[_0x3caea7(0x1aa,0x1ae)],{'\x66\x69\x6c\x65\x6e\x61\x6d\x65':apk[_0x521a62(0x235,0x24e)]+_0x521a62(0x233,0x220),'\x6d\x69\x6d\x65\x74\x79\x70\x65':_0x3caea7(0x1b3,0x1a5)+_0x3caea7(0x1c2,0x1b9)+_0x3caea7(0x1b0,0x19f)+_0x521a62(0x231,0x227),'\x71\x75\x6f\x74\x65\x64':message[_0x521a62(0x237,0x239)]}),await message[_0x521a62(0x216,0x230)][_0x3caea7(0x1a9,0x1b0)+_0x3caea7(0x1c6,0x1bb)](message[_0x521a62(0x21a,0x206)],{'\x69\x64':downloading['\x6b\x65\x79']['\x69\x64'],'\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64':message[_0x521a62(0x21a,0x22c)],'\x66\x72\x6f\x6d\x4d\x65':!![]}),await message[_0x3caea7(0x19a,0x193)]['\x64\x65\x6c\x65\x74\x65\x4d\x65\x73\x73'+'\x61\x67\x65'](message[_0x521a62(0x21a,0x20c)],{'\x69\x64':uploading[_0x521a62(0x243,0x249)]['\x69\x64'],'\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64':message['\x6a\x69\x64'],'\x66\x72\x6f\x6d\x4d\x65':!![]});}
}));