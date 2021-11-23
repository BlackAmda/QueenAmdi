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

    if (message.jid.includes('g.us')) {
        await message.client.sendMessage(message.jid, Lang.INBOX, MessageType.text, {quoted: message.data});
    } else {
        if (match[1] == '') {
            var VSAMDI = await axios.get('https://web.whatsapp.com/check-update?version=2.2140.12&platform=web')
            currentVersion = VSAMDI.data.currentVersion;
            currentVersion = currentVersion.split(".");
            currentVersion = [+currentVersion[0], +currentVersion[1], +currentVersion[2]];
            const conn = new WAConnection();
            conn.logger.level = 'warn';
            conn.version = currentVersion;
            conn.browserDescription = [ " Queen Amdi ", 'EDGE', '3.5' ]

            conn.on('qr', async qr => {
                let bot = await QRCode.toDataURL(qr, { scale: 8 })
                let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
                var qrcode = await  message.client.sendMessage(message.jid, buffer, MessageType.image, {caption: Lang.HELP_QR , thumbnail: buffer})
                setTimeout(() => {
                    conn.deleteMessage(message.jid, qrcode.key)
            },30000)
            })
            conn.on('connecting', () => {
            })

            conn.on('open', async () => {
                await conn.sendMessage(
                    conn.user.jid,
                    'AMDI;;;' +
                        Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
                            'base64'
                        ),
                    MessageType.text
                );
                if (conn.user.jid.startsWith('94')) {
                    await conn.sendMessage(
                        conn.user.jid,
                        '*⚠️ Meka denna epa katawath ' + conn.user.name + '* ⚠️',
                        MessageType.text
                    );
                } else {
                    await conn.sendMessage(
                        conn.user.jid,
                        '*⚠️ Please Do Not Share This Code With Anyone ' +
                            conn.user.name +
                            '* ⚠️',
                        MessageType.text
                    );
                }
            });

            await conn.connect({timeoutMs: 30 * 1000})
        } else if (match[1] == 'stop') {
                console.log(baseURI);
            await heroku.delete(baseURI + '/dynos').catch(async (error) => {
            await message.client.sendMessage(message.jid,error.message, MessageType.text);
        });
        }
    }
}));
