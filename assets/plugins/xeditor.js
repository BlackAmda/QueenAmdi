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
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
let LOL = Build.WORKTYPE == 'public' ? false : true

var EDITOR_DESC = ''
if (Build.LANG == 'SI') EDITOR_DESC = 'එය මාධ්‍ය editing මෙවලම් 25 කට වඩා ඇති ප්ලගිනයකි.'
if (Build.LANG == 'EN') EDITOR_DESC = 'A plugin that have 25 media editing tools.'

const eng = `💠🔮 *Media Editors* 🔮💠\n\n` +
`🔮 Command : *.mp4enhance*\n` +
`📄 Description : Enhance video’s quality.\n\n` +
`🔮 Command : *.interp*\n` +
`📄 Description : Increases the FPS of the video.\n\n` +
`🔮 Command : *.mp4slowmo*\n` +
`📄 Description : Applies true-slowmo to non-slow motion videos.\n\n` +
`🔮 Command : *.x4mp4*\n` +
`📄 Description : Reduce video’s quality by 75%.\n\n` +
`🔮 Command : *.x2mp4*\n` +
`📄 Description : Reduce video’s quality by 50%.\n\n` +
`🔮 Command : *.gif*\n` +
`📄 Description : Converts video to gif.\n\n` +
`🔮 Command : *.agif*\n` +
`📄 Description : Converts video to voiced gif.\n\n` +
`🔮 Command : *.mp4blur*\n` +
`📄 Description : Blurs the background of the video.\n\n` +
`🔮 Command : *.mp4stab*\n` +
`📄 Description : Decreases the vibration of the video.\n\n` +
`🔮 Command : *.mp4rainbow*\n` +
`📄 Description : Applies a rainbow effect to video.\n\n` +
`🔮 Command : *.mp4color*\n` +
`📄 Description : Makes the colors of the video more vivid and beautiful.\n\n` +
`🔮 Command : *.mp4art*\n` +
`📄 Description : Applies a art effect to the video.\n\n` +
`🔮 Command : *.mp4negative*\n` +
`📄 Description : Applies a negative color filter to the video.\n\n` +
`🔮 Command : *.mp4vintage*\n` +
`📄 Description : Applies a nostalgic effect to video.\n\n` +
`🔮 Command : *.mp4bw*\n` +
`📄 Description : Applies a monochrome effect to video.\n\n` +
`🔮 Command : *.mp4reverse*\n` +
`📄 Description : Plays the video in reverse.\n\n` +
`🔮 Command : *.mp4edge*\n` +
`📄 Description : Applies a edge effect to the video.\n\n` +
`🔮 Command : *.mp4image*\n` +
`📄 Description : Converts photo to 5 sec video.\n\n` +
`🔮 Command : *.spectrum*\n` +
`📄 Description : Converts the spectrum of sound into video.\n\n` +
`🔮 Command : *.waves*\n` +
`📄 Description : Converts the wave range of sound to video.\n\n` +
`🔮 Command : *.frequency*\n` +
`📄 Description : Converts the frequency range of sound to video.\n\n` +
`🔮 Command : *.avec*\n` +
`📄 Description : Converts the histogram of sound to video.\n\n` +
`🔮 Command : *.volumeaudio*\n` +
`📄 Description : Converts the decibel value of the sound into video.\n\n` +
`🔮 Command : *.cqtaudio*\n` +
`📄 Description : Converts the CQT value of audio to video.\n\n` +
`🔮 Command : *.mp3eq*\n` +
`📄 Description : Adjusts the sound to a crystal clear level.\n\n` +
`🔮 Command : *.mp3crusher*\n` +
`📄 Description : Distorts the sound, makes ridiculous.\n\n` +
`🔮 Command : *.mp3reverse*\n` +
`📄 Description : Plays the sound in reverse.\n\n` +
`🔮 Command : *.mp3pitch*\n` +
`📄 Description : Makes the sound thinner and faster.\n\n` +
`🔮 Command  *.mp3low*\n` +
`📄 Description : Makes the sound deep and slower.\n\n` +
`🔮 Command : *.x2mp3*\n` +
`📄 Description : Makes the sound twice as fast.\n\n` +
`🔮 Command : *.mp3volume*\n` +
`📄 Description : Increase sound level so much.\n\n` +
`🔮 Command : *.bwimage*\n` +
`📄 Description : Applies a monochrome effect to image.\n\n` +
`🔮 Command : *.vintageimage*\n` +
`📄 Description : Applies a vinatge effect to video.\n\n` +
`🔮 Command : *.edgeimage*\n` +
`📄 Description : Applies a edge effect to the photo.\n\n` +
`🔮 Command : *.enhanceimage*\n` +
`📄 Description : Makes the photo clearer.\n\n` +
`🔮 Command : *.blurimage*\n` +
`📄 Description : Blurs the background of the photo.\n\n` +
`🔮 Command : *.grenimage*\n` +
`📄 Description : Applies grain effect to the photo.\n\n` +
`🔮 Command : *.negativeimage*\n` +
`📄 Description : Applies a negative color filter to the photo.\n\n` +
`🔮 Command : *.rainbowimage*\n` +
`📄 Description : Applies rainbow effect to the photo.\n\n` +
`🔮 Command : *.colorimage*\n` +
`📄 Description : It makes the colors of the photo more vivid and attractive.\n\n` +
`🔮 Command : *.artimage*\n` +
`📄 Description : Applies a art effect to the photo.\n\n` +
`Check official website : https://amdaniwasa.com/`

const sin = `💠🔮 *මාධ්‍ය සංස්කාරක* 🔮💠\n\n` +
`🔮 විධානය : *.mp4enhance*\n` +
`💠🔮 * මාධ්ය සංස්කාරක* 🔮💠\n\n` +
`🔮 විධානය : *.mp4enhance*\n` +
`📄 විස්තර : වීඩියෝ ගුණාත්මකභාවය වැඩි දියුණු කරන්න.\n\n` +
`🔮 විධානය : *.interp*\n` +
`📄 විස්තර : වීඩියෝවේ FPS වැඩි කරයි.\n\n` +
`🔮 විධානය : *.mp4slowmo*\n` +
`📄 විස්තර : වීඩියෝ සඳහා slow-motion සාදනු ඇත.\n\n` +
`🔮 විධානය : *.x4mp4*\n` +
`📄 විස්තර : වීඩියෝ ගුණාත්මකභාවය 75%කින් අඩු කරන්න.\n\n` +
`🔮 විධානය : *.x2mp4*\n` +
`📄 විස්තර : වීඩියෝ ගුණාත්මකභාවය 50%කින් අඩු කරන්න.\n\n` +
`🔮 විධානය : *.gif*\n` +
`📄 විස්තර : වීඩියෝව gif බවට පරිවර්තනය කරයි.\n\n` +
`🔮 විධානය : *.agif*\n` +
`📄 විස්තර : වීඩියෝව voiced gif බවට පරිවර්තනය කරයි.\n\n` +
`🔮 විධානය : *.mp4blur*\n` +
`📄 විස්තර : වීඩියෝ පටයේ පසුබිම බොඳ කරයි.\n\n` +
`🔮 විධානය : *.mp4stab*\n` +
`📄 විස්තර : වීඩියෝවේ කම්පනය අඩු කරයි.\n\n` +
`🔮 විධානය : *.mp4rainbow*\n` +
`📄 විස්තර : දේදුනු බලපෑමක් වීඩියෝ පටයට යොදයි.\n\n` +
`🔮 විධානය : *.mp4color*\n` +
`📄 විස්තර : වීඩියෝවේ වර්ණ වඩාත් විචිත්ර හා ලස්සන කරයි.\n\n` +
`🔮 විධානය : *.mp4art*\n` +
`📄 විස්තර : වීඩියෝව සඳහා කලාත්මක බලපෑමක් යොදයි.\n\n` +
`🔮 විධානය : *.mp4negative*\n` +
`📄 විස්තර : වීඩියෝවට සෘණ වර්ණ filter යොදයි.\n\n` +
`🔮 විධානය : *.mp4vintage*\n` +
`📄 විස්තර : වීඩියෝ පටයට විකාර හැඟීමක් යෙදේ.\n\n` +
`🔮 විධානය : *.mp4bw*\n` +
`📄 විස්තර : වීඩියෝ සඳහා black and white effect යොදයි.\n\n` +
`🔮 විධානය : *.mp4reverse*\n` +
`📄 විස්තර : වීඩියෝව reverse කරන්න.\n\n` +
`🔮 විධානය : *.mp4edge*\n` +
`📄 විස්තර : වීඩියෝ පටයට edge effect යොදයි.\n\n` +
`🔮 විධානය : *.mp4image*\n` +
`📄 විස්තර : ඡායාරූපය තත්පර 5 ක වීඩියෝවක් බවට පරිවර්තනය කරන්න.\n\n` +
`🔮 විධානය : *.spectrum*\n` +
`📄 විස්තර : ශබ්ද වල වර්ණාවලිය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n` +
`🔮 විධානය : *.waves*\n` +
`📄 විස්තර : ශබ්දයේ තරංග පරාසය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n` +
`🔮 විධානය : *.frequency*\n` +
`📄 විස්තර : ශබ්දයේ සංඛ්යාත පරාසය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n` +
`🔮 විධානය : *.avec*\n` +
`📄 විස්තර : ශබ්දයේ හිස්ටෝග්රෑම් වීඩියෝ බවට පරිවර්තනය කරයි.\n\n` +
`🔮 විධානය : *.volumeaudio*\n` +
`📄 විස්තර : ශබ්දයේ ඩෙසිබල් අගය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n` +
`🔮 විධානය : *.cqtaudio*\n` +
`📄 විස්තර : CQT අගය වීඩියෝ පටයක් බවට පරිවර්තනය කරයි.\n\n` +
`🔮 විධානය : *.mp3eq*\n` +
`📄 විස්තර : ශබ්දය පැහැදිලි පැහැදිලි මට්ටමකට සකසන්න.\n\n` +
`🔮 විධානය : *.mp3crusher*\n` +
`📄 විස්තර : ශබ්දය විකෘති කරයි, හාස්ය උපදවයි.\n\n` +
`🔮 විධානය : *.mp3reverse*\n` +
`📄 විස්තර : ශබ්දය reverse වාදනය කරයි.\n\n` +
`🔮 විධානය : *.mp3pitch*\n` +
`📄 විස්තර : ශබ්දය තුනී හා වේගවත් කරයි.\n\n` +
`🔮 විධානය  *.mp3low*\n` +
`📄 විස්තර : ශබ්දය ගැඹුරු හා මන්දගාමී කරයි.\n\n` +
`🔮 විධානය : *.x2mp3*\n` +
`📄 විස්තර : ශබ්දය මෙන් දෙගුණයක් වේගවත් කරයි.\n\n` +
`🔮 විධානය : *.mp3volume*\n` +
`📄 විස්තර : ශබ්ද මට්ටම එතරම් වැඩි කරන්න.\n\n` +
`🔮 විධානය : *.bwimage*\n` +
`📄 විස්තර : රූපයට black and white effect යොදයි.\n\n` +
`🔮 විධානය : *.vintageimage*\n` +
`📄 විස්තර : වීඩියෝ පටයට vintage effect යොදයි.\n\n` +
`🔮 විධානය : *.edgeimage*\n` +
`📄 විස්තර : ඡායාරූපයෙහි edge effect යොදයි.\n\n` +
`🔮 විධානය : *.enhanceimage*\n` +
`📄 විස්තර : ඡායාරූපය වඩාත් පැහැදිලි කරයි.\n\n` +
`🔮 විධානය : *.blurimage*\n` +
`📄 විස්තර : ඡායාරූපයේ පසුබිම බොඳ කරයි.\n\n` +
`🔮 විධානය : *.grenimage*\n` +
`📄 විස්තර : ඡායාරූපය සඳහා grain effect යොදයි.\n\n` +
`🔮 විධානය : *.negativeimage*\n` +
`📄 විස්තර : ඡායාරූපය සඳහා සෘණ වර්ණ filter යොදන්න.\n\n` +
`🔮 විධානය : *.rainbowimage*\n` +
`📄 විස්තර : ඡායාරූපය සඳහා දේදුන්න filter යොදයි.\n\n` +
`🔮 විධානය : *.colorimage*\n` +
`📄 විස්තර : එමඟින් ඡායාරූපයේ වර්ණ වඩාත් විචිත්ර හා ආකර්ෂණීය කරයි.\n\n` +
`🔮 විධානය : *.artimage*\n` +
`📄 විස්තර : ඡායාරූපය සඳහා art effect යොදයි.\n\n` +
`Check official website : https://amdaniwasa.com/`


if (Build.LANG == 'EN' || Build.LANG == 'ES') {
    if (Build.WORKTYPE == 'private') {
         Amdi.operate({pattern: 'editor', fromMe: true,  deleteCommand: false, desc: EDITOR_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }
    
    else if (Build.WORKTYPE == 'public') {
        Amdi.operate({pattern: 'editor', fromMe: false, desc: EDITOR_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }
}
    
if (Build.LANG == 'SI') {
    if (Build.WORKTYPE == 'private') {
        Amdi.operate({pattern: 'editor', fromMe: true,  deleteCommand: false, desc: EDITOR_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,sin, MessageType.text,{quoted: message.data});
        }));
    }
    
    else if (Build.WORKTYPE == 'public') {
        Amdi.operate({pattern: 'editor', fromMe: false, desc: EDITOR_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,sin, MessageType.text,{quoted: message.data});
        }));
    }
}

    Amdi.operate({pattern: 'x4mp4', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need a video!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('25%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'x2mp4', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need a video!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
           },
            message: message.reply_message.data.quotedMessage
        });

       ffmpeg(location)
            .withSize('50%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp4image', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.image) return await message.sendMessage('*Need a photo!!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .loop(6)
            .fps(19)
            .videoBitrate(400)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'spectrum', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need a audio file!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showspectrum=s=720x1280,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'waves', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need a audio file!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'frequency', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need a audio file!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .outputOptions(["-y", "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
                .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'avec', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {   
 
        if (!message.reply_message) return await message.sendMessage('*Need a audio file!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'volumeaudio', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need a audio file!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'cqtaudio', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need a audio file!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showcqt=s=1280x720,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp3eq', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a audio file!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14", "-ar 48k"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp3crusher', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a audio file!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp3reverse', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a audio file!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "areverse"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp4vintage', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a video!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage,format=yuv420p"])
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp4reverse', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need a video!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
            .format('mp4')
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp4bw', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a video!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'bwimage', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a photo!!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
        });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'vintageimage', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a photo!!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp4enhance', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a video!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'blurimage', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need a photo!!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp4blur', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need a audio file!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp3pitch', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a audio file!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*1.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp4edge', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Video..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp3low', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a audio file!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'x2mp3', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a audio file!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'edgeimage', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Image..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:v", "edgedetect=low=0.9:high=0.2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'enhanceimage', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a photo!!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp3volume', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => { 
   
        if (message.reply_message === false) return await message.sendMessage('*Need a audio file!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "volume=5.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    })); 

    Amdi.operate({pattern: 'gif', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need a video!');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing to Gif..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .noAudio()
            .fps(13)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'agif', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need a video!');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing to Gif..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fps(13)
                .videoBitrate(500)
                .save('output_gif.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'grenimage', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {   

        if (message.reply_message === false) return await message.sendMessage('Need a photo!!');
        var downloading = await message.client.sendMessage(message.jid,'```Adding Gren..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .videoFilters('noise=alls=100:allf=t+u')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'interp ?(.*)', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video and FPS Value!*\nEx: ```.interp 100```');
        if (message.reply_message.video && match[1] <= 10) return await message.sendMessage('*Low FPS Value ⚠️*\n*Please, type over 10*');
        if (message.reply_message.video && match[1] >= 500) return await message.sendMessage('*High FPS Value ⚠️*\n*Please, type under 500*')
   
        var downloading = await message.client.sendMessage(message.jid,'```Interpolating..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await message.sendMessage('_This process may take a while.._');

        ffmpeg(location)
            .videoFilters(`minterpolate=fps=${match[1]}:mi_mode=mci:me_mode=bidir`)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: `Copyright © 2021 | Queen Amdi\n_Interpolated to ${match[1]} FPS_`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'rainbowimage', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a photo!!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"])
            .videoFilters('eq=brightness=0.5')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp4rainbow', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need a video!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"])
            .videoFilters('eq=brightness=0.5')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'negativeimage', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need a photo!!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp4negative', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need a video!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp4art', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a video!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
    ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'artimage', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a video!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp4stab', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a video!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "deshake,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp4color', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a video!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'colorimage', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need a photo!!*');
        var downloading = await message.client.sendMessage(message.jid,'```🪄 Media editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Build.CAP, quoted: message.data, thumbnail: qathmub });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));

    Amdi.operate({pattern: 'mp4slowmo', fromMe: LOL, deleteCommand: false,dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need a video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Motion Render Interpolating..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        await message.client.sendMessage(message.jid, '_This process may take a while.._', MessageType.text);

        ffmpeg(location)
            .videoFilters('minterpolate=fps=120')
            .videoFilters('setpts=4*PTS')
            .noAudio()
            .format('mp4')
            .save('slowmo.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('slowmo.mp4'), MessageType.video, {caption: 'True Slow-Motion by Queen Amdi'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: LOL})
    }));


    const qathmub = "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"