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
const tesseract = require("node-tesseract-ocr")
const langs = require('langs');
const {MessageType,Mimetype} = require('@blackamda/queenamdi-web-api');
const translatte = require('translatte');
const axios = require('axios')
const googleTTS = require('google-translate-tts');
const got = require("got");
const gis = require("g-i-s");
const wiki = require('wikijs').default;
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');


const Language = require('../language');
const Lang = Language.getString('miscellaneous');
let LOL = Build.WORKTYPE == 'public' ? false : true



Amdi.operate({pattern: 'insta ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.IGSTALK}, (async (message, match) => {
    function _0x1fd8d1(_0x3b669c,_0x43a568){return _0x20c0(_0x3b669c- -0x2e4,_0x43a568);}(function(_0x4def74,_0x294bf5){function _0x4ef5cf(_0x33501e,_0x44e0c3){return _0x20c0(_0x33501e-0x26e,_0x44e0c3);}function _0x5b5a7b(_0x182bc1,_0x36d38b){return _0x20c0(_0x182bc1-0x1f3,_0x36d38b);}const _0x411729=_0x4def74();while(!![]){try{const _0x37b48b=-parseInt(_0x5b5a7b(0x2a2,0x29f))/0x1+-parseInt(_0x4ef5cf(0x315,0x318))/0x2*(-parseInt(_0x4ef5cf(0x30e,0x311))/0x3)+parseInt(_0x5b5a7b(0x299,0x2a1))/0x4+parseInt(_0x4ef5cf(0x313,0x321))/0x5+parseInt(_0x4ef5cf(0x317,0x311))/0x6+-parseInt(_0x4ef5cf(0x30c,0x307))/0x7*(parseInt(_0x4ef5cf(0x31a,0x30d))/0x8)+-parseInt(_0x4ef5cf(0x31b,0x321))/0x9*(-parseInt(_0x5b5a7b(0x2aa,0x2a0))/0xa);if(_0x37b48b===_0x294bf5)break;else _0x411729['push'](_0x411729['shift']());}catch(_0x2ad407){_0x411729['push'](_0x411729['shift']());}}}(_0x1084,0x3b1b4));const username=match[0x1];function _0x20c0(_0x4effad,_0x38df30){const _0x108410=_0x1084();return _0x20c0=function(_0x20c0e3,_0x784e0c){_0x20c0e3=_0x20c0e3-0x9a;let _0x2c2296=_0x108410[_0x20c0e3];if(_0x20c0['\x49\x68\x65\x74\x52\x7a']===undefined){var _0x2f2a28=function(_0xa6a30){const _0x81cff9='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0xe89ef8='',_0x2a3b77='';for(let _0x12a9d5=0x0,_0x2e86e7,_0x229d4f,_0x944ce5=0x0;_0x229d4f=_0xa6a30['\x63\x68\x61\x72\x41\x74'](_0x944ce5++);~_0x229d4f&&(_0x2e86e7=_0x12a9d5%0x4?_0x2e86e7*0x40+_0x229d4f:_0x229d4f,_0x12a9d5++%0x4)?_0xe89ef8+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x2e86e7>>(-0x2*_0x12a9d5&0x6)):0x0){_0x229d4f=_0x81cff9['\x69\x6e\x64\x65\x78\x4f\x66'](_0x229d4f);}for(let _0x21d4f4=0x0,_0x5f2fbd=_0xe89ef8['\x6c\x65\x6e\x67\x74\x68'];_0x21d4f4<_0x5f2fbd;_0x21d4f4++){_0x2a3b77+='\x25'+('\x30\x30'+_0xe89ef8['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x21d4f4)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x2a3b77);};_0x20c0['\x42\x55\x6c\x50\x64\x79']=_0x2f2a28,_0x4effad=arguments,_0x20c0['\x49\x68\x65\x74\x52\x7a']=!![];}const _0x540efc=_0x108410[0x0],_0x186078=_0x20c0e3+_0x540efc,_0x3a3bf5=_0x4effad[_0x186078];return!_0x3a3bf5?(_0x2c2296=_0x20c0['\x42\x55\x6c\x50\x64\x79'](_0x2c2296),_0x4effad[_0x186078]=_0x2c2296):_0x2c2296=_0x3a3bf5,_0x2c2296;},_0x20c0(_0x4effad,_0x38df30);}if(username==='')return await message[_0x1fd8d1(-0x245,-0x236)][_0x1fd8d1(-0x241,-0x249)+'\x65'](message[_0x1fd8d1(-0x23c,-0x236)],Lang[_0x34f3d8(0x25e,0x26b)+_0x34f3d8(0x284,0x281)],MessageType[_0x34f3d8(0x27f,0x27f)],{'\x71\x75\x6f\x74\x65\x64':message['\x64\x61\x74\x61']});function _0x34f3d8(_0x241c25,_0x386912){return _0x20c0(_0x386912-0x1c9,_0x241c25);}await axios[_0x34f3d8(0x271,0x27e)](_0x34f3d8(0x273,0x26a)+_0x1fd8d1(-0x236,-0x242)+_0x34f3d8(0x272,0x26d)+_0x1fd8d1(-0x23a,-0x234)+username+('\x3f\x61\x70\x69\x6b\x65\x79\x3d\x68\x74'+_0x1fd8d1(-0x230,-0x23f)+'\x61\x6d\x64\x61\x6e\x69\x77\x61\x73\x61'+_0x1fd8d1(-0x247,-0x23d)))['\x74\x68\x65\x6e'](async _0x81cff9=>{const {photo_profile:_0xe89ef8,username:_0x2a3b77,fullname:_0x12a9d5,posts:_0x2e86e7,followers:_0x229d4f,following:_0x944ce5,bio:_0x21d4f4}=_0x81cff9[_0x48b7e6(0x214,0x217)]['\x72\x65\x73\x75\x6c\x74'],_0x5f2fbd={};function _0x1acb4e(_0x5ab21c,_0x1e0369){return _0x1fd8d1(_0x1e0369-0x5f,_0x5ab21c);}function _0x48b7e6(_0x459a4d,_0x25414f){return _0x34f3d8(_0x459a4d,_0x25414f- -0x62);}_0x5f2fbd['\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x79'+'\x70\x65']='\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65'+'\x72';const _0x87bd61=await axios[_0x48b7e6(0x220,0x21c)](_0xe89ef8,_0x5f2fbd),_0x5f2404=Lang[_0x1acb4e(-0x1dd,-0x1d2)]+_0x2a3b77+Lang['\x46\x5f\x4e\x41\x4d\x45']+_0x12a9d5+Lang[_0x1acb4e(-0x1dc,-0x1ea)]+_0x229d4f+Lang['\x46\x4f\x4c\x4c\x4f\x57\x49\x4e\x47']+_0x944ce5+Lang[_0x1acb4e(-0x1eb,-0x1eb)]+_0x2e86e7+Lang[_0x1acb4e(-0x1db,-0x1da)]+_0x21d4f4;await message[_0x1acb4e(-0x1d8,-0x1e6)][_0x1acb4e(-0x1f0,-0x1e2)+'\x65'](message[_0x1acb4e(-0x1ce,-0x1dd)],Buffer[_0x48b7e6(0x213,0x218)](_0x87bd61[_0x1acb4e(-0x1e2,-0x1d5)]),MessageType[_0x48b7e6(0x214,0x219)],{'\x6d\x69\x6d\x65\x74\x79\x70\x65':Mimetype[_0x1acb4e(-0x1df,-0x1e9)],'\x63\x61\x70\x74\x69\x6f\x6e':_0x5f2404,'\x71\x75\x6f\x74\x65\x64':message[_0x48b7e6(0x223,0x217)]});});function _0x1084(){const _0xe750bc=['\x6d\x5a\x47\x31\x6f\x74\x61\x35\x74\x78\x76\x31\x42\x31\x72\x75','\x7a\x67\x66\x30\x79\x71','\x7a\x4e\x6a\x56\x42\x71','\x41\x77\x31\x48\x7a\x32\x75','\x76\x76\x39\x6f\x71\x75\x31\x66','\x44\x68\x62\x5a\x6f\x49\x38\x56\x44\x33\x44\x33\x6c\x47','\x7a\x32\x76\x30','\x44\x67\x76\x34\x44\x61','\x6d\x74\x62\x5a\x77\x65\x50\x49\x44\x75\x53','\x71\x75\x31\x66','\x75\x65\x39\x74\x76\x61','\x72\x4b\x39\x6d\x74\x65\x39\x78','\x41\x4e\x62\x4e','\x6c\x4d\x6e\x56\x42\x71','\x6d\x4a\x71\x58\x6e\x76\x76\x6c\x79\x76\x7a\x4a\x76\x61','\x79\x32\x58\x50\x7a\x77\x35\x30','\x6e\x64\x75\x5a\x72\x78\x6a\x35\x77\x77\x66\x72','\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x48\x43\x61','\x74\x4b\x76\x66\x72\x66\x39\x76\x75\x30\x76\x73\x74\x47','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x6c\x4e\x48\x35\x45\x49\x39\x48\x43\x67\x4b\x56\x43\x57','\x6e\x5a\x6d\x30\x6d\x5a\x6d\x57\x76\x65\x7a\x6f\x72\x4d\x6a\x48','\x6d\x74\x71\x58\x6e\x4a\x69\x57\x6e\x65\x6a\x65\x41\x65\x58\x6d\x43\x57','\x6e\x64\x61\x33\x6d\x4c\x50\x36\x74\x65\x72\x57\x44\x61','\x41\x4d\x4c\x4b','\x6d\x74\x71\x58\x6d\x4a\x71\x57\x74\x4d\x76\x53\x72\x4e\x6a\x6d','\x44\x67\x66\x53\x41\x32\x4c\x4e\x6c\x57','\x71\x4b\x4c\x70','\x6e\x5a\x43\x59\x6d\x66\x44\x6f\x43\x33\x7a\x50\x71\x71','\x6d\x74\x65\x32\x6d\x74\x6d\x32\x6f\x75\x76\x4c\x71\x4d\x39\x64\x71\x47','\x41\x73\x35\x53\x42\x32\x58\x4f\x44\x77\x31\x48\x42\x47'];_0x1084=function(){return _0xe750bc;};return _0x1084();}
}));

Amdi.operate({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: LOL}, (async (message, match) => {

    if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text,{quoted: message.data});
        }

    ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? Build.LANG : match[2]}, {quoted: message.data});
    if ('text' in ceviri) {
        return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? Build.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':*\n ```' + ceviri.text + '```');
    } else {
        return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text, {quoted: message.data})
    }
}));

Amdi.operate({pattern: 'tts (.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.TTS_DESC}, (async (message, match) => {

    if(match[1] === undefined || match[1] == "")
        return;
    
    let 
        LANG = Build.LANG.toLowerCase(),
        ttsMessage = match[1],
        SPEED = 1.0

    if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
        LANG = langMatch[1]
        ttsMessage = ttsMessage.replace(langMatch[0], "")
    } 
    if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
        SPEED = parseFloat(speedMatch[1])
        ttsMessage = ttsMessage.replace(speedMatch[0], "")
    }
    
    var buffer = await googleTTS.synthesize({
        text: ttsMessage,
        voice: LANG
    });
    await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
}));


Amdi.operate({pattern: 'wiki ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.WIKI_DESC}, (async (message, match) => { 

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text,{quoted: message.data});    
    var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text,{quoted: message.data});

    var arama = await wiki({ apiUrl: 'https://' + Build.LANG + '.wikipedia.org/w/api.php' })
        .page(match[1]);

    var info = await arama.rawContent();
    await message.client.sendMessage(message.jid, info, MessageType.text, {quoted: message.data});
    return await message.client.deleteMessage(message.jid, {id: reply.key.id, remoteJid: message.jid, fromMe: true})

}));

Amdi.operate({pattern: 'quote ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.QUOTE_DESC}, async (message, match) => {
        
    if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
    const url = `https://api.quotable.io/random`;
    try {
        const response = await got(url);
        const json = JSON.parse(response.body);
        if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📌 ' + Lang.QUOTE +'* ```' + json.content + '```\n\n' +
        '*✒️ ' + Lang.AUTHOR +'* ```' + json.author+ '```\n', MessageType.text, {quoted: message.data});
    } catch {
        return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDA, MessageType.text, {quoted: message.data});
    }
});


Amdi.operate({pattern: 'wame ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.WAME_DESC}, (async (message, match) => {    
    if (message.reply_message !== false) {
        await message.client.sendMessage(message.jid, Lang.WAME.format(message.reply_message.jid.split('@')[0], message.reply_message.jid.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
        });
    } else if (message.mention !== false) {
        message.mention.map(async user => {
            await message.client.sendMessage(message.jid, Lang.WAME.format(user.split('@')[0], user.replace('@s.whatsapp.net', ' ')), {quoted: message.data}, MessageType.text, {
                contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
            }); 
        });
    } else {
        await message.client.sendMessage(message.jid, Lang.NEED_UWONG, MessageType.text, {quoted: message.data});
    }
}));

Amdi.operate({pattern: 'ss ?(.*)', fromMe: LOL, desc: Lang.SS_DESC,  deleteCommand: false}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    if (match[1] === '') return await message.sendMessage(Lang.LİNK);

    var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?&full_page=true&url=${match[1]}&fresh=true&output=image&file_type=png&dark_mode=true&wait_for_event=load&delay=2000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Build.CAP, thumbnail: qathmub, quoted: message.data})

}));

Amdi.operate({pattern: 'mp4audio', fromMe: LOL,  deleteCommand: false, desc: Lang.MP4TOAUDİO_DESC}, (async (message, match) => {    

    if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text, {quoted: message.data});
    var downloading = await message.client.sendMessage(message.jid,Lang.MP4TOAUDİO,MessageType.text, {quoted: message.data});
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .withNoVideo()
        .save('output.mp3')
        .on('end', async () => {
            await message.client.sendMessage(message.jid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false, quoted: message.data});
        });
    return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
}));


Amdi.operate({pattern: 'imagesticker', fromMe: LOL,  deleteCommand: false, desc: Lang.STİCKER_DESC}, (async (message, match) => {   
 
    if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.STİCKER_NEEDREPLY, MessageType.text, {quoted: message.data});
    var downloading = await message.client.sendMessage(message.jid,Lang.STİCKER,MessageType.text, {quoted: message.data});
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .fromFormat('webp_pipe')
        .save('output.jpg')
        .on('end', async () => {
            await message.client.sendMessage(message.jid, fs.readFileSync('output.jpg'), MessageType.image, {quoted: message.data, mimetype: Mimetype.jpg, caption: Build.CAP, thumbnail: qathmub});
        });
    return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
}));

Amdi.operate({pattern: 'img ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.IMG_DESC}, (async (message, match) => { 
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});

    if (Build.ANTIBAD == 'true') {
        if (match[1] === 'sex') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'Sex') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'mia') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'khalifa') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'porn') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'fuck') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'dick') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'pussy') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'cum') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'ass') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'booty') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'boob') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'boobs') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'tits') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'puka') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'brazzers') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'wal') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'bitch') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'nude') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'nudity') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'pornhub') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'juicy') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'nigga') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'shit') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'blowjob') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'anal') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'hard') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'big tits') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        if (match[1] === 'leak') return await message.client.sendMessage(message.jid,"⚠️ Anti-bad system running...",MessageType.text, {quoted: message.data});
        try {
            if (Build.LANG == 'EN') {
                var downloading = await message.client.sendMessage(message.jid, Lang.IMG.format(5, match[1]), MessageType.text, {quoted: message.data});
            } else if (Build.LANG == 'SI') {
                var downloading = await message.client.sendMessage(message.jid, Lang.IMG.format(match[1], 5), MessageType.text, {quoted: message.data});
            }
            gis(match[1], async (error, result) => {
                for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
                    var get = got(result[i].url, {https: {rejectUnauthorized: false}});
                    var stream = get.buffer();
                        
                    stream.then(async (image) => {
                        await message.client.sendMessage(message.jid,image, MessageType.image, {thumbnail: qathmub});
                    });
                }
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDA, MessageType.text, {quoted: message.data});
        }
    } else {
        try {
            if (Build.LANG == 'EN') {
                var downloading = await message.client.sendMessage(message.jid, Lang.IMG.format(5, match[1]), MessageType.text, {quoted: message.data});
            } else if (Build.LANG == 'SI') {
                var downloading = await message.client.sendMessage(message.jid, Lang.IMG.format(match[1], 5), MessageType.text, {quoted: message.data});
            }
            gis(match[1], async (error, result) => {
                for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
                    var get = got(result[i].url, {https: {rejectUnauthorized: false}});
                    var stream = get.buffer();
                        
                    stream.then(async (image) => {
                        await message.client.sendMessage(message.jid,image, MessageType.image, {thumbnail: qathmub});
                    });
                }
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDA, MessageType.text, {quoted: message.data});
        }
    }
}));

Amdi.operate({pattern: 'ocr', fromMe: LOL,  deleteCommand: false, desc: Lang.OCR_DESC}, (async (message, match) => { 
    if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.NEED_IMG, MessageType.text, {quoted: message.data});

    var downloading = await message.client.sendMessage(message.jid,Lang.SCANNING,MessageType.text, {quoted: message.data});
    var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        var dil;
        if (match[1] !== '') {
            dil = langs.where("1", match[1]);
        } else {
            dil = langs.where("1", Build.LANG.toLowerCase());
        }

        try {
            var result = await tesseract.recognize(location, {
                lang: dil[2]
            });    
        } catch (e) {
            return await message.reply(Lang.ERROR.format(e));
        }

        await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        if ( result === ' ' || result.length == 1 ) {
            return await message.reply(Lang.ERROR.format(' Empty text'));
        }
        return await message.client.sendMessage(message.jid, Lang.OCRTEXT.format(dil[2], result),MessageType.text, {quoted: message.data});
}));

// ===============================
const qathmub = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAQABAAMBIgACEQEDEQH/xAAdAAEAAQQDAQAAAAAAAAAAAAAABgQFBwgBAgMJ/9oACAEBAAAAAN7gAAAAAAAAAAAAAAAAAAAAACNa+eWxOEdLYbduLA685d3fsEPz9NgAEY1s750xj82I74cPb19q76tw/F21c+AARnXO1ZNp9BMZ2m796ucS6Lb4yTCOx2SAAEe15tmU4BoRb7NK6SsyBkqs2WQbNs6AAR/BdHU3353UPrbrDcc7SfJWRrfBdjchAALFgy/XrVDFGesEwyo9pJ67/wAQsUc2TmYADFnygy7s/oVsJe8GU+ZMUZh2Ezpi+PU+epAAAwV8wMzwit6zfHtLdLftLsjc/eJ23L95AAUWpGpnjDfG+yK0euVtzb1379eZvXgALfr7gjWm/Wy35XjkzztkWb+3TxuEyrAAEa16imysT1JxVc8zZRr+uQ7j2r0vrAAFl8KOHa04biPWV7SV9b7Xm2ymaSqpAAWCG4P17hXrcZHCZJs5JpVZrndvbI9UAAsGrOmVp9rjJ7HS+GddxamN23iuzlVgAI189MI0vtXduO3St2P2rukf5u82qwAER0i1wqKnovGXrJjW37CbcUS7zmsAARvXvHNN78+ldO79BYjSZVzRxXyOpAAU3h06ccDlzy446c3jkAGmWstwpKfkABnLfcAKL5TXj6SQrB2tvGfYz7esmxTOPCw22Guv0xmYA6fKvNm3enm1vzo8c6Ru5WCbRmv6+8Eijn6k3gAMI6rUpy44dXVw4emzmxAAHcAAHQAAAAAAAAAAAAAAAAAAAAAAAAAAAP/EABoBAQADAQEBAAAAAAAAAAAAAAACAwUEAQb/2gAIAQIQAAAAAAAAABZucfD5VHR7sWALNujJlHL2dbFgD3tVV0Z/09+LEHvQjzc3VrW48QLoc0Y/SqsuIPerq58be6o1ZfgJdtE8u/atryIglKDoqnqQyPAPfE7aJzoAAAAAAAAAAAAAB//EABoBAQACAwEAAAAAAAAAAAAAAAADBQECBAb/2gAIAQMQAAAA2AAAAACOjv8AGNtqqn9NMCKhvLbhmtPOeb9NMDSnsbCXNj4as9VKDHPtYdM1f5rk9JIDXXr65c+K58+gkBiLTq74LXj8zY7gxiaLXq47fFZsBORTcNJvd7gbGI5YYenINQBsDUAbAAAAAAAAH//EADAQAAEEAgECBQQBBAIDAAAAAAQBAgMFBgcAERMSFBchMAgVFjEiEBgkQTRwMjM2/9oACAEBAAEIAP8AofLp5xsdsZxichyFnVG11zlZZKpCK45wK9zYF9kVTWpY09/v3NyXStpk2ps7x9H1u286ZI1DLrZ+wxXugEftfaH+vVnaHPVjaP656sbRRWrzTe58yFziur8kLJu4V8cJt1dCta+axy3IF6rHrsso7Daco35sy98as+Fs/fKAloVsNJNPe+Abzo93eTlwSlz5BX+Wvz5BJXKyd/PEvvxqub7tROvsrIXu6pxwr1cxWuCkVE4rJgSIy4KktLqspzFzJPDMNEw8qNifz1g5rsFonM+bMf8A5yy4SnXrxW/yXmDVWTOOEsUuzhYIJYH5TIx9vZ+Qth3I9CGRtVXdORVJMjO4n25WezhwUR7eAUkEyNVA8HiO7iLf4iZWo4h+Fsm/H6VEIqxS2uQnL8QPESQgTUfVNeY8jvmymJZqCwjQmFOr+iDK/r0wq5OFjtEus48ko1nf1V6x85ZRjHQPUBrpAgu5Iir0VrURJO319xRvG5qsqYnIjOVcixs8PCKxbd0QMVWsYIMMSTFKvVXXF7K7uDDa2c12F06s+bKe2lDYLLMsBDJGxIOkjY+2wCfuQxcv3g0NSytnKgkmaYyBQXSCijslr1CaxOTyuRrkRLh8Tu2YDaNGmScKkkgMFjkig/j7JiddIwUiykBmc6JqOtjEaxWMnd/7JF1X1/A6NXfNkihJSmfcKuzwXK7Aqrxn7RNBMrJakVoaz2ZW088dLkrwuaipvyu1iDJzPAcTAnklCyyuDFjj8mCMwh7x5XYgQMRDIVkFTF92fYgVhLcfon2plaZml/ZVQsQGIRVGEV1HEPF4GvTlpH/L3nHV7Oy3X8CjYhTwL826h4CtYZWORe4hlWJJAVbaw3FnYtjBWlZvuTGR8dO+0ZRlVvlc59muq2j43Z4qOuyMilQiWJCypyG9JQF8BUaqOVFHXrM+wtvOmq2FtW2elqYW6nrpKbHSp3DS9xiOW0FUKxKhS0gWQdZEDAa/oq4u3wUIDfn+pXr6JZuqYvm2T4yT0x+ks9RPvxV2cKfZz5Za46Bk9lTxkAYRUWGRyRHBnBZQZBkAgl6Gqc/k2RFS5KsSAxoI6qI0spsaYnj5eRywCcHggFggFGFNUNUdJaVI9o5hMNlUuggWBwY6oxFWg6faQ+nzHq1oc6v3Dg2gwhx7fJcwtaBcshpdbjWAGFVRxzhxpB4Hzkyyr/rG7/7c+atMNgUZ6ryR6qi+CrnydySeSwyztrY2Onko64SrrRQwmpx7EdG5rqxFCd0ZdqilwN4PBG5qOWsY2IGBjPms4ZCAZYYso0Ph2Q2hl/kOcg4jrWgOq6oOstCrJxp5GN30qez8OybosjkoLLx+B+PYrcWwC1sENVBOSos4OBxpLA8WkqoqEZo8VNYPjT2ilZI1HtVUVOL/AODulmirKDIoqfxROAf8SH58uMvgMdsTMZs8q3pcAuirce0OYXZOyfZdJj1fXp40yytDVZzX5Ll/njzQgDr22mIlaVUWpAs8RIlKuP56TELf1OHBUSOdBHGvcVIrGIitg8/FSkQFI6FJJEid4ZIJYp/HGlzCzuhMjH9k4Cn+LD1+bIHuZTmKwUfqPDLM/tyyqrcjzetpo3QxZxsUy5alWHTOjXEoJ+WMPRVclOJbmK9wIRkkUroZsJzNMkD8hYTkEBGK58psZo7heQzWkErm1U5byrGeOwgOspInmwU89iSrXHwdE9+Ce48fz5O0l9DZRBm3zmQMiZmm14RFfWhZDmRBTVRolhKpLJJa1ShYrgBWhKRDJI6GpAs6YKpurcuKA0MUekt5IpYJx6nJiLQMQudwMFw1tbCBjclX/kkzukt5myD1BUBYbJp3EQxM8Tam8FKWGLgfsNF8+TypBRnTO2dm8VLUdoYo2coh8891ZShDwvirDVMFiIc9JZJYi4B7YYgNHDzxwzSK900XX9QlSiv8XMJyZlcg8E+MJCtXBJBkMZ09aTEBLjxsLoyRnBWcCtaJ2LdGzK6iCtI5gmuB6+Vh6/Nl6o3HbFV3W2VlyA9E93+9rXusRmRx14HkRI4Fb1YvJYYCpPMcR1lAiuKQ4R6oyOaKVyeOcE+UR6Iusdqz1KQUhwllAcxvh6q2GRi9U514D+uBf8WL586f28Utn8zwZl6ATDzwqir1Z0VE54EVOLGvGxO8ScpYVmmhg4LgdaREnetMBFga50FhRFBOXtwvkgTuM1rtxadIKbJACnWEUBNa5f5OREXgTvbgKdBYenzZbUFXuPWNUE/SOYOLbNyy+lnNJzZ5gmfSvnzf3/a5nnP7Xc8/0z6YM7RfeX6YcshfE+uA0xmg7I0nm1PkRMHZnsPp7yorxdon6Xc4mf42s+lrYMa+2vdZbg16R4AZMZOe/wATUxc5P3DRFx9PELE6CCOJ/wArUe9fBFKWEO9YiVtqdP2t1Rt/a32Pp+/yHHefkWOc/Isb5+RY5z8hx3n5BjvPv+Pc+/Y/z77Qc++4/wA+/Y/xcgx3i5JjTf3DkWOESJCMviYqJJ8aNc9zWM3btyzMuDsKxN0ET3K6Svxw23VyVhdX9vmcOegwqp1Tyo3PKjc8sNzyo3PKjc8qNzyo3PKjc8qNzyo3PKjc8qNzyw3PLD81Lt21wqzDprxzfA5WfHZmLW1NzZMikfNG2eWoo7bIDG11NrXFBsSxWrDYWum9kZs+ofvPVYWLzhWuM/v3RV6dOWensaTKLTAaAPBsTr6vDSM4m1MZFBbhtyDVwVEmwT0P0RAHl2O0kV7i49LgWCZokOssXEscXxPIsN1N9/JyYPJMbxHHysRyfK8wzjD34ZZV0EX9HtSRj2O1vYzW+usHsivilGiOGMAnsKouhsbGhP0JmVHiORmpeGbOwdBp4xdemXFbtizvDsl2nr5lFaMfO9kpBEsap16cttzV891Y5bQ1+wKR9XiQWXYvuW5oMhzbJDz9hF2Gr6jWsgG9Da/L7/JGDZ1iZOE4rheVjbUrXk41f30G5r+uqqYGql2fi5yZwLb5jl5uZ2YhxX9GxEEPiGExylbjWM45jjfiRVReqbd0szYUqZLjhWl9qDSvHl9Hdn89H9nc9H9n89I9pc9JNo89Jdo89Jto89J9oc9KNoc9Kdn89Ktn89LNnc9LNnc9Ldm89Ltm89Ltmcg1Ts8mZkEepNFriJ0GV5k5Vc5XL8fununck53JOdyTnck53JOdyTnck53JOdyTnck53JOdyTnck53JOdyTnck53JOdyTiqqr1X/qb/xABJEAACAQMBBQMHCAgEAwkAAAABAgMABBEFBhIhMVETQZIQFCIwMnHSB0JSYZOUobEjYnKBkaPR0zOVs8EVJHAgJTQ1Q1NjsrT/2gAIAQEACT8A/wCg8zxSqIt142KsMyKOBFa7fj3XMn9a2g1ACFe1djcO4VQfok4NXDtN2OGJOGYkcxj2T0xWq3uLRmlBaZ07WJQVkRwD4Se8VtRq6PJK7GTzuZVjXkAgzXyjbS9T/wB63Px18om0hBccW1K5wAHHR6+UnaGZgXkeWLVrkoCx4Ivp8q+UbabiAf8AzW5+OvlF2l/zW5+OvlF2l/zW5+OvlF2l/wA1ufjrazVr/TNUcWLi8vZZhC8vsSpvk4IatUuzxIAMrYBFateekTynccvca1y/Qfq3Eg/3q5luLh/ON+WZy7tidwMk+v6Rf6q+RgsLkxSk+zhuWfqzUJlSAETryaMjqOZHuq2h/wCZGXiIzhB3cedW2LWS4kZIlAO4GYndAXuFdxx5DiuIoe7FDmPxFD5w/OjiSCRZkPRo2DKacK01hBO/7cihmxT5CIzGmwvWjlSLjH27+v6Rf6i+TlUc8elRI7sZ2ISVShA7NTxelQTQyORIoByOdRQWtsLqUKi4DSHPpnjyGeQqIKso9/FOB8iYTqfIcihxPMMOFegu7wNBXiRGDe88M0xO7p9upzz4IKQcR7XzqHb2wycrxZfeKGCBdf8A6ZPXui5WM5c4Xg4NOhA5leVY/fwFanu6db2kXZG4cMEctgBO8gD5oqO4ktY0jlLkkAlhkylMcE/Kh2gXtCwPDgTvhh1BzSLudmHwOAUt0ocAc0cUwz9Z8gPkQOZHXKnlgHJrBfHGjTbqngzdaAAzdD+Fw/r3KJiPJAz88VunA7xumshm5g9ah7R2YKoHHiaCSIYmSZDxDiTg6+4g4r9JFbXFxaAH6ETlR+FIwUDGPdQ4EUeOOFWMcsIOMleNb8ltvDtYX9qP61ogqwz5E/xT2UZPQcWo8q4E1yUE1zJuz/G5k9fdxW1sTEHllcIi5kUDJPU8BW0tjcX1rK8Ult2u5cB4zg7qvguPrXNACcD0lxgkdSO40MLCpEf1seZqYLEg3248gKB82vNUklk/Y9pqtuwAONxXOKbKE8jSDDjAOOINWAuLfeDY3iAwBzxIq0WCKWFEa2C4ZCO8nkwNLIYd7cjjjXeZ2PcKtl0TS9RKiLUbmPfiQPnHaPyQnHo9au5L2Wzh3xdyqFkmc+kzEDkD5OlDmctQ9kTfjMx9fqNvYh4rcJc3JYQJN5whi7QrkhC+ATWmv5kzA22pWzi4tJOPAxXEJK5PvzW0a3mmQwvIIdXPa8UGVhinOGjaTkMnFaqt/q0VrFLDpsNvJ+mkkAJjMicAY1JL1o0VqpAjneIOSAB7JZqYB5LfLnq8qb1MckmnLUe+pAECZYnkKGV38ZqUwvGu/kd5PWp5Z/Prrf8A053vQhG6u6Og7qJII417O/vp+y1DkRS13CT/AFD69c4SwP8AC9hrWJLdLghJraXEtpODwxNFIGR1/aBrYSTTHLK8s2zl4To17kZR3gUndUdInq8XXjd30jxahcwvD2ysN03TnO/GqICajzZwSibUrs8ZJiPSbJ6t3/uWnw9pKkiAcvR7qbMVwmWH0XHNT5Oea4WnM4+cR3GtOY7jAo8YJBHRuhpWhtYEQ3Mv0F+iP1jUYjghQRxoO5VrjCTh/q+upAW3MAjkaAJdSQAc8RSnI4EVyw//ANz6/d3cAMGUMpBOCCDzBq1k2e1S6lxBNoIEdzJ1kNsMoR1YCtN1O42OsIDa2yXUL3ZlkmGLi6Ebd781rTkttf1FWRLQEt5vDn0U48VLcCw6CiWvbljLcOxyeJyF/wBzRrJ0+6PH/wCKTucVxU8Qw5EGjg4OKt47rsziRIiN4DruNzFaS8F23I9mU9D6TDoKw0SjLSd8kh9pm+vyciMUSYzwYGu5M0gzQwo3vxYn1+N9igGeXtjia1bVr2/l4bxmCIiDkkaj2UFQsBds2Xd964kPRDWkXgnwBbQdhI+4vceXOtEvsnrA4P41oV4q9THirC54EgkRMwB6ZAxUJnuoYXnjTPpCNOa1vQSBirby8Qw+aQeRFai0k0nobqjcPGi7yNgSSklnc9M9OgonePtRuCAw6jPfXI+Q18+Efh5Pr/M+v0+2vtWjEXm9tdSGOKXMihgWHL0ScV8menaRv8De3d6bpcn/ANqPhvGtal1bV3dXjgjfEUIHJCf9lq3iDY4YWsIqAknOBSvJa2ZVZWBIDyvxWLPQD0nq9LQZxFDGNxI16YHCrqWGdDlZInKsDVqINdYYivLciI3WO5hyMlCR5cEdpMQWA6ADlQxKTu7x+aDx4VK7mEiWROfaIPaH1MBxBFMquU3148yP6ivRP10wyw9GiCI4gD5Oh/P1/tN2aeNwtN6KpiJTyRf6msBF5mpg7jmalKxyOA5HfX/iJ9R1J5D1/SBQT9eB5LCWaNG3WcFUQN0DOVBb6hxpZILiF8MrApJG6+/BBFSD/jEEfFuXnMa/PH64+cKRBE4UI+HB7TluOeKrnuPKp4O2lBhVN8El3Ug8sjCDJJFQb6RxxhCyjhvSBWcE+04jHBKaVI7eRBbw5IVkkT0mMnzix8JqCSTUHVFAlzEiMG3SoH6iVKplywYrwQqCcEDu4Y8n1/n6+583nkjEaTbobsy7Bd4DqM8KJEUaKmSeOFGMmpwDyYg1LktTk+kOdPv20N8ZoOqLPxK+6sADkTWiXVxpNzZWktveWJgNzaTxO4mCrKw9GY8WYVeG88ztEtXuiwYybjsUUsODmNCELDgSKnMVxE4eJ1OCrjkaghlSVAS8WUYHkwqBrlWwwRxhVxxDcMbhHUVqEsgRT/iur4H6z7oYrRjiEQaSFnQOVOODEHqOYHIVGqS8UkQnO6yHBHuyKZRxxUmHlDNGp4MyqcE47hX1/n6/knZH+YtHE8y4WpCzuSSaAMsjFQWGQABQAfJVwOW8tPKLiLAKo2O1QHO4QeB+rNSZUk5HIqR3MO4io0J6kA+QnhTnzZlVZh9Bvpj/AHrdO+zbzr/6nQ5p1ErIVG8MgBuB/CpW82c7sjKQJUBGATwqfg87vM8x7XKkEgBeGcHHo8qfed5pAGA3N2ErhAByXjx3RSosawKJN0liZVPPJ5jH8K6H8/X8sRf6i1nzd4iU6ZHkYCRG3kJ5HPAiiC+S8jDkWP8ATySPa3uAPOYxvBwO6ZPnftDjVg00IYr5xZ/pUJHUDiKgvZJTyjS3fOf38Kh7DBG6mQ+PrkZeAPQUTU0TWDPmFpeUTNzUtzCmlaOQj/DcfkeRFDmCP+x0P5+v7hD/AKq1xlhHaRHvBWhx8ooVKYXldt514Nz5Zq7mkZhxDyk5oSRkdDWJE+g3AH3HuNb25kqytwZT0NSPNpfBIbn2pbX6m72i/EUwvLWVAyyQtvxlPpBq5Z8pzwP5+vkiSecRbjSkhBuSK5zgE8hWpaQYuTqZZskfZVrGhJC75Aea4B/CGta0D7e4/s1rOgfbXH9mta0D7a4/s1rOgfa3H9mtd0rgQ5E0s3B+oIirUtILAcdyab+1V5ppOODCSX4K1PSB03pZv7VazoX21xxH2Na3oH29z/ZrX9BuNKlbNzp0txcmJs83jPY5R6lgUEDhvsePhqaDxN/SpYf3Fv6UQSueXLic+uQu3fjkPea1OwhkHtJJcqrD3g1rulD33iVtDpA997HW0mjffoq2n0X7/FW0+iff4q2n0T7/ABVtPon3+Ktp9F+/xVtNov3+KtptG+/xVtLo33+OtpNG+/R1tJo336OtpdG+/RVtNov3+KtqdDHv1CKtp9FlkPJI7+Nj/AUm7nkean3H1ntMcCtRms9LsHaC/urdykt3cj24w44iNORxzNRh2PNn9Jj7ya0Z7nd4ExxAgGtPFvMvNJYwpq3i8Aq3i8Aq3i8Aq3i8Aq3i8Aq3i8Aq3i8Aq3i8Aq2i8Aq3i8Aq3i8Aq3i8Aq3i8Aq3j8AqCPwir6a82Uu5UgmincyGxLnAmhJ4hAfbWm3gOKt9JTyPqxl7TT7m4T9qNCwpi0kuZXY8y8h3mP7yas5Li5YckBOBViLe+eBGuyQN8OeO4T0FSi52i0/zkT26xSxKTAwSQuSmCVNWMxtpwxmiRSwQL5O9gP4nFbZalLtba6eL6C1v7FFtLsFBL2aTRcnxW0uqadqe1MYmsbWws45o7OF3EaSXjP1LcQlX7z67pe2Fhs/c28aDzc22obhhu0PtAkSAkGtbuLnRdA0Ww1HTrxEj/wCfmvyyJEe4KHQjK1tDdz6PqVndNNfLFGZrW9t4BciB19kCRDlavZpJdoPPjNbFV7OAWjEfoyOJzW1uo2u1uv2kNxBFaWccthaPc5MMVw7EOS+MZFa6NGn07V/+A2eAGS91XDMYVLj2cAGtW1bTE0XVodLmg0+1S5cSyAA5V+PovWpx6lpmqWEepaZfIhiM9tJ9ND7Ljy+yykH3Gjm4l0i3WQ9TGN31ZIiuraWByOki7pqMx3em3MlnKp6xHAPuYYYURGl5GEjmI9g1tdaw3TxssUwiaVYnI4MUIGQK1/SLA9vdPqWpGMyW00V1IJCLSPOczY4Z9gVq8N4HtpF3ApKkkcOdLuo8ruo6BjkV3EH+BzWwcVhtZeWQsTq11fvci3iCbmYIMKgetizrd3swoTSrxL97UvErB0ju1AIlCsBWnR39ztH2UrxJJ2UdtcQZELpkNkRg4FaeA1nLCZdT7TLzwwSPJHEUx3Fq2f37HVtNtLSTTjc/4c9pGYluEk3eZViCK2EudXj0JLoQXEGrPZbxunLMSqLWxMepbWaBbC2sdSF88FvKIhiF7mAA77x1pemC8g1O61fUby+tkuzeahcymUzRKcdhjJVcZIFfJ9Nd6XtLq9tq81muqtB2VxDGit6caAlXZd+rK3sbWxso7DT7C1yYbW2j5ICeLE958sTS3U8iQwRqMl5ZDuoo95NEE6bp0Fu5HEGRUAc/vPrLmCz2jjhEU8c2RBexp7AcjirryV62Iu5SObQSwSxn3HfrYDUf5Hx1sFqP8j462B1L+R8dbB6p/J+OtgtU/k/HWwWq/wAr462C1X+EXx1sFq3hi+OtgdX8MXx1sDq/gj+OtgdY8Efx1sBrP2afFWwGs/ZJ8VbAaz9knxVsBrX2K/FWwGtfYr8VbB6srt3ypHGg97MwFSQT61CCbKyhO/BZsRgyF/nzfgtcz62R/EakfxGpH8RqR/EakfxGpH8RqR/EakfxGpH8RqR/EakfxGpH8RqR/EakfxGpH8RqR/EakfxGpH8Ro/8ASf8A/8QAMxEAAgIBAgQDBgMJAAAAAAAAAQIAAxEhMQQSMmEgQXEQE0JRcpEFM7EiIzBDUFJggaH/2gAIAQIBAT8A/odOttX1r+sNaZ1QY9JXQWNgdQA2ncGM/NqfI42xDZleXlHr7OYTgXVkdWAOCDqPIzlQjpH2ln5lmNuY+OogW1E7B1/WG6ofzBEYG5yWUgYII2hyzMe5MVRiONJbaynQz8JLPXbYRuQBCNCDLPzH+o+Nepc/MQlCMCKQoZiOwiVFwXBEcckNiPhQ2cw8NZc7CvUA4nBqlfDpWnw6H1jGP1v9R8YxkZ2zN9EIProYeYoQ7YUHGMecFvKGQGFyQwlVYQM7Hf8A5Pwnh7GZ77BivUL3MT9zYebRW84xBwQciP1v9R8e+kSo4LE4AlrMyqAMAeQmoIM51wW8pRQvGOf7BuQDE5Qqoq8oUAAdow5lKnabVr2Ebqb1PjXVlHcRWzodQu0rRuu06H4ZbWDUGGnNrOb3VjBSrD40zOF901StSAE7QjK5Xeasm2sIKoFO4Ebqb18adafUJZatWErAyNzDcxbOYjg/ssdPKDgwljP7wkEk8uNMnz1JnC2jhLiHOK7ND2PzjMzDAMXpwscbxupvU+NdHU9xH1YnyPs5iJVQ1oyuBL+FYZDCcNf7vFN2w6W+XYyr4vvLI3U3qf4GT7arHq6WP+4/E2uMNj7Rjzbyq16c8hh4m07kfaE5JP8Ain//xAAzEQACAQMCAwYEBAcAAAAAAAABAgMABBEhMQUSQRMgIjJRsTNhcpEUI3GBBhAkUGCC4f/aAAgBAwEBPwD+xzfBl+hvakdsrlz96gAbHLrQG5rGucmgDQQ61xSAq0cgZgSCNCRtXPKox2jfc1b5MEGd+zX278wJhmA3KN7UqPp4TVi6IFDcwz675qcKwCgAADSghpFGdBUUCMACN648EjlghU7AuakkCCrc5t4D6xr7d+XPZSY35TQZlbDjFW8fMQf3/ajMMIhGuN6VC2Mb0IZUJZsAA/vX4mKFFMpwSM1xGR57uWZjo58P6UU5212FQfAh+hfbvnY0yK3mXIpCVZUTxM3tSxag/LFJ4SKlcyMqKNt/nXHbmJES1jOZSQX+QGwp/wA1NNWHSgCGIxrUPwYvoX277Z5Wxvg0oJwrHLVbRoGdwck6a/y5ctyDHNgEjqM1eXS2MICKTcOPCpwQPnUvac7NKSXYkkncmjoQ43FeaV6i0ij+kd87Gj1xWWyOTp1qOZg+poGK5yglCzqNGU+Jf+Vwq1vbm8v4nlH49IPyOdsEtzDVf9ckU/B73iNpZ2vE2WG/SWQCSY4LweADJ6gEnBo/wgox/XoMrDvoAZtsnYADrtnSr20FrfTQiWOQKfNGeZSPkaj+Gn0jvnY4qKHmHM/XYUFTVetFSpwN6t7YwS9r2hO55dhk9avrd72FJIDieHJGN2HpXDOJ30kkVlc32LeSUZM2GWMtoWHNnlPqRTrYcRSe3N/axETgwsEKckeDlWYgFs6UnBOGRWty78UgmlGGQpKBspOMHU64pPIn6Dv4zpQ0AB6CsDOca0QDvTSBMZJ+1Qz41U1f2JmZrm28x1kj9T6r86bOmhHSot6TyJ9I7+cEGu0Nc5rtDTsJDkgD9KCquxNCRhsanjS4IMg1HUaULWEbA/ehgAAdP8U//9k="