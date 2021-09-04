/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const speedTest = require('@lh2020/speedtest-net');
const TinyURL = require('tinyurl');

const Language = require('../language');
const Lang = Language.getString('web');
const SLang = Language.getString('webss');

function speedText(speed) {
    let bits = speed * 8;
    const units = ['', 'K', 'M', 'G', 'T'];
    const places = [0, 1, 2, 3, 3];
    let unit = 0;
    while (bits >= 2000 && unit < 4) {
      unit++;
      bits /= 1000;
    }

    return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
}

Amdi.applyCMD({pattern: 'speedtest', fromMe: true, desc: Lang.SPEEDTEST_DESC,  deleteCommand: false}, (async (message, match) => {
    var msg = await message.reply(Lang.SPEEDTESTING);
    var st = await speedTest({acceptLicense: true, acceptGdpr: true});
    
    await message.client.sendMessage(
      message.jid,Lang.SPEEDTEST_RESULT + '\n\n' + 
    '*ISP:* ```' + st.isp + '```\n' +
    '*Ping:* ```' + st.ping.latency + 'ms```\n' +
    '*' + Lang.UPLOAD + ':* ```' + speedText(st.upload.bandwidth) + '```\n' +
    '*' + Lang.DOWNLOAD + ':* ```' + speedText(st.download.bandwidth) + '```\n',MessageType.text
    );
    await msg.delete();
}));


Amdi.applyCMD({pattern: 'ping', fromMe: true, deleteCommand: false, desc: Lang.PING_DESC}, (async (message, match) => {
  var start = new Date().getTime();
  var msg = await message.reply('```Ping!```');
  var end = new Date().getTime();

  await msg.delete();
  await message.client.sendMessage(
    message.jid,'*Pong!*\n```' + (end - start) + 'ms```', MessageType.text);
}));


Amdi.applyCMD({pattern: 'short ?(.*)', fromMe: false, desc: Lang.URL}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

    TinyURL.shorten(`${match[1]}`, async(res, err) => {
      if (err)
        await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

        await message.client.sendMessage(message.jid,`*Original Link:* ${match[1]}\n*Short Link:* \n` + res, MessageType.text)
    });
}));
