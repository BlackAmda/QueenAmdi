/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const QueenAmdi = require('queenamdi-public-1');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const Config = require('../config');
const axios = require('axios')

//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//=====================================================================================

//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================

//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================

const Language = require('../language');
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const TKlang = Language.getString('tiktok');

const wiki = require('wikijs').default;
var gis = require('g-i-s');
const { BYE_LOGO } = require('../config');
let LOL = Config.WORKTYPE == 'public' ? false : true
//=====================================================================================

Amdi.applyCMD({ pattern: 'song ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.SONG_DESC}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text, {quoted: message.data});   
    let arama = await yts(match[1]);
    arama = arama.all;
    if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data});
    var downloading = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text, {quoted: message.data});
  
    let title = arama[0].title.replace(' ', '+');
    let stream = ytdl(arama[0].videoId, {
        quality: 'highestaudio',
    });
    
    got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
    ffmpeg(stream)
        .audioBitrate(320)
        .save('./' + title + '.mp3')
        .on('end', async () => {
            const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
            writer.setFrame('TIT2', arama[0].title)
                .setFrame('TPE1', [arama[0].author.name])
                .setFrame('APIC', {
                    type: 3,
                    data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                });
            writer.addTag();
            
            if (Config.SONG_TYPE == 'document') {
                var uploading = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text, {quoted: message.data});
                await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true});
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {quoted: message.data, filename: title + '.mp3', mimetype: 'audio/mpeg'});
                return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
            }
            else if (Config.SONG_TYPE == 'audio') {
                var uploading = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text, {quoted: message.data});
                await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true});
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
                return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
            }
        });
}));
  

Amdi.applyCMD({ pattern: 'video ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.VIDEO_DESC}, (async (message, match) => {
  
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text, {quoted: message.data});    
    if (match[1].includes('shorts')) return await message.client.sendMessage(message.jid,Lang.SHORTS,MessageType.text, {quoted: message.data});

    var VID = '';
    try {
        if (match[1].includes('watch')) {
            var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
        } else {     
                VID = match[1].split('/')[3]
        }
    } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data});
    }
    var downloading = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text, {quoted: message.data});
  
    var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
  
    yt.on('end', async () => {
        var uploading = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text, {quoted: message.data});
        await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true});
        await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4, quoted: message.data, caption: Config.CAP, thumbnail: thumb});
        return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
    });
}));


Amdi.applyCMD({pattern: 'yt ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.YT_DESC}, (async (message, match) => { 

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


Amdi.applyCMD({ pattern: 'ig ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.IG_DESC}, (async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.client.sendMessage(message.jid,Lang.NEED_WORD,MessageType.text, {quoted: message.data});

    var payload = await QueenAmdi.insta(userName)

    const profileBuffer = await axios.get(payload.link, {responseType: 'arraybuffer'})
    var downloading = await message.client.sendMessage(message.jid,Lang.DL_VID,MessageType.text, {quoted: message.data});

    var uploading = await message.client.sendMessage(message.jid,Lang.UP_VID,MessageType.text, {quoted: message.data});
    await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {quoted: message.data, caption: Config.CAP, thumbnail: thumb})  
    return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
}));

/*
Amdi.applyCMD({ pattern: 'fb ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.FBDESC}, (async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.client.sendMessage(message.jid,Lang.NEED_WORD,MessageType.text, {quoted: message.data});

    var payload = await QueenAmdi.fb(userName)

    const profileBuffer = await axios.get(payload.video, {responseType: 'arraybuffer'})
    var downloading = await message.client.sendMessage(message.jid,Lang.DL_VID,MessageType.text, {quoted: message.data});

    var uploading = await message.client.sendMessage(message.jid,Lang.UP_VID,MessageType.text, {quoted: message.data});
    await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {caption: Config.CAP, quoted: message.data, thumbnail: thumb}) 
    return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
}));
*/

Amdi.applyCMD({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: LOL}, (async (message, match) => {

    if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text,{quoted: message.data});
        }

    ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? Config.LANG : match[2]}, {quoted: message.data});
    if ('text' in ceviri) {
        return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? Config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':*\n ```' + ceviri.text + '```');
    } else {
        return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text, {quoted: message.data})
    }
}));


Amdi.applyCMD({pattern: 'spdf ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.SPDF_DESC }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.SPDF_LINK);
    
    var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })
    
    var downloading = await message.client.sendMessage(message.jid,Lang.SPDF_PROC,MessageType.text, {quoted: message.data});
    
    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf}, {quoted: message.data})
    return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
}));


Amdi.applyCMD({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: LOL,  deleteCommand: false, desc: Lang.CURRENCY_DESC}, (async (message, match) => {

    if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
        return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text, {quoted: message.data});
    }
    let opts = {
        amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
        from: match[2].toUpperCase(),
        to: match[3].toUpperCase()
    }
    try {
        result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
        result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
        await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
    }
    catch(err) {
        if (err instanceof ExchangeRatesError) 
            await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text, {quoted: message.data})
        else {
            await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
            console.log(err)
        }
    }
}));

    
Amdi.applyCMD({pattern: 'tts (.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.TTS_DESC}, (async (message, match) => {

    if(match[1] === undefined || match[1] == "")
        return;
    
    let 
        LANG = Config.LANG.toLowerCase(),
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


Amdi.applyCMD({pattern: 'wiki ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.WIKI_DESC}, (async (message, match) => { 

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
    var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text,{quoted: message.data});

    var arama = await wiki({ apiUrl: 'https://' + Config.LANG + '.wikipedia.org/w/api.php' })
        .page(match[1]);

    var info = await arama.rawContent();
    await message.client.sendMessage(message.jid, info, MessageType.text, {quoted: message.data});
    return await message.client.deleteMessage(message.jid, {id: reply.key.id, remoteJid: message.jid, fromMe: true})

}));


Amdi.applyCMD({pattern: 'img ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.IMG_DESC}, (async (message, match) => { 
    
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text,{quoted: message.data});
    gis(match[1], async (error, result) => {
        for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
            var get = got(result[i].url, {https: {rejectUnauthorized: false}});
            var stream = get.buffer();
                
            stream.then(async (image) => {
                await message.client.sendMessage(message.jid,image, MessageType.image);
            });
        }

        var reply = await message.client.sendMessage(message.jid,Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]),MessageType.text, {quoted: message.data});
        return await message.client.deleteMessage(message.jid, {id: reply.key.id, remoteJid: message.jid, fromMe: true})
    });
}));


Amdi.applyCMD({pattern: 'quote ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.QUOTE_DESC}, async (message, match) => {
        
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


Amdi.applyCMD({pattern: 'wame ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.WAME_DESC}, (async (message, match) => {    
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


Amdi.applyCMD({ pattern: 'github ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Glang.GİTHUB_DESC }, async (message, match) => {

    const userName = match[1]
 
    if (userName === '') return await message.client.sendMessage(message.jid, Glang.REPLY, MessageType.text, {quoted: message.data})

    var payload = await QueenAmdi.github(userName)

            const githubscrap = await axios.get(payload.avatar,{responseType: 'arraybuffer'})

            const msg = `*${Glang.USERNAME}* ${payload.nama} \n*${Glang.NAME}* ${payload.f_name} \n*${Glang.FOLLOWERS}* ${payload.followers} \n*${Glang.FOLLOWİNG}* ${payload.following} \n*${Glang.BİO}* ${payload.bio} \n*${Glang.REPO}* ${payload.public_repos} \n*${Glang.GİST}* ${payload.public_gists} \n*${Glang.LOCATİON}* ${payload.location} \n*${Glang.MAİL}* ${payload.email} \n*${Glang.BLOG}* ${payload.blog} \n*${Glang.COMPANY}* ${payload.ty} \n*${Glang.HİRE}* ${payload.hireable === "true" ? Glang.HİRE_TRUE : Glang.HİRE_FALSE} \n*${Glang.JOİN}* ${payload.joined_on} \n*${Glang.UPDATE}* ${payload.last_updated} \n*${Glang.URL}* ${payload.url}`

            await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
              caption: msg,
            })
})


Amdi.applyCMD({ pattern: 'tk ?(.*)', fromMe: LOL,  deleteCommand: false, desc: TKlang.TK_DESC }, async (message, match) => {

    const userName = match[1]
 
    if (userName === '') return await message.client.sendMessage(message.jid, TKlang.REPLY, MessageType.text, {quoted: message.data})

    var payload = await QueenAmdi.tiktok_user(userName)

    const tkscrap = await axios.get(payload.pic,{responseType: 'arraybuffer'})

    const msg = `*${TKlang.USERNAME}* ${payload.unama} \n\n*${TKlang.NAME}* ${payload.nname} \n\n*${TKlang.BIO}*\n${payload.bio_data} \n\n*${TKlang.FOLLOWERS}* ${payload.fol_s} \n\n*${TKlang.FOLLOWING}* ${payload.fol_ing} \n\n*${TKlang.LIKES}* ${payload.l_count} \n\n*${TKlang.VIDEOS}* ${payload.vid_count} \n\n`

    await message.sendMessage(Buffer.from(tkscrap.data), MessageType.image, {caption: msg})
})


Amdi.applyCMD({ pattern: 'apk ?(.*)', fromMe: LOL, desc: Lang.APK_DESC,  deleteCommand: false}, async (message, match) => {

    const pack = match[1]
          
    if (!pack) return await message.client.sendMessage(message.jid,Lang.APK_NEED,MessageType.text, {quoted: message.data})

    if (pack.includes('=')) {
        var split = pack.split('=');
        link = split[1];
        nothing = split[0];
    }
    
    var apk = await QueenAmdi.apk(link)
    var apkinfo = await QueenAmdi.apk_info(link)

    const app = await axios.get(apkinfo.ic, {responseType: 'arraybuffer'})
    await message.client.sendMessage (message.jid, Buffer.from (app.data), MessageType.image, {mimetype: Mimetype.png, caption: Lang.APK_D + Lang.APK_N + apk.name + Lang.APK_DEV + apk.auth + Lang.APK_V + apk.vers + Lang.APK_SUM + apkinfo.summ })

    var downloading = await message.client.sendMessage(message.jid,Lang.APK_DW,MessageType.text, {quoted: message.data});
    const profileBuffer = await axios.get(apk.link, {responseType: 'arraybuffer'})
    var uploading = await message.client.sendMessage(message.jid,Lang.APK_UP,MessageType.text, {quoted: message.data});
    await message.client.sendMessage(message.jid,Buffer.from(profileBuffer.data), MessageType.document, {filename: apk.name + '.apk', mimetype: 'application/vnd.android.package-archive', quoted: message.data})
    await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
})


const thumb = "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"