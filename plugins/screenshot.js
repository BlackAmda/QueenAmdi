/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
let LOL = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('webss');

Amdi.applyCMD({pattern: 'ss ?(.*)', fromMe: LOL, desc: Lang.SS_DESC,  deleteCommand: false}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.LİNK);

    var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?&full_page=true&url=${match[1]}&fresh=true&output=image&file_type=png&dark_mode=true&wait_for_event=load&delay=2000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP})

}));

