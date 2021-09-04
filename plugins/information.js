/*
Queen Amdi Bot - A whatsapp user bot.
Copyright (C) 2021 Black Amda
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
A.N.Tech any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

//Basic requirements
const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const got = require("got");
const fs = require('fs');

// Config Checker
const Config = require('../config');

//Language
const Language = require('../language');
const LANG = Language.getString('information');

if (Config.WORKTYPE == 'private') {
  Amdi.applyCMD({pattern: 'covid ?(.*)', fromMe: true, desc: LANG.COVID_DESC,  deleteCommand: false}, async (message, match) => {
    if (match[1] === '') return await message.reply(LANG.NEED_CON);
      const url = `https://coronavirus-19-api.herokuapp.com/countries/${match[1]}`;
            const response = await got(url);
            const jsun = JSON.parse(response.body);
            await message.client.sendMessage(message.jid, fs.readFileSync("/root/QueenAmdi/media/gif/earth.mp4"), MessageType.video, {mimetype: Mimetype.gif, quoted: message.data, caption: LANG.COUNTRY + jsun.country + '\n\n' + LANG.CASES + jsun.cases + '\n' + LANG.TCASES + jsun.todayCases + '\n' + LANG.DEATHS + jsun.deaths + '\n' + LANG.TDEATHS + jsun.todayDeaths + '\n' + LANG.RECO + jsun.recovered + '\n' + LANG.CRIT + jsun.critical + '\n' + LANG.TEST + jsun.totalTests });
  });
}

else if (Config.WORKTYPE == 'public') {
  Amdi.applyCMD({pattern: 'covid ?(.*)', fromMe: false, desc: LANG.COVID_DESC}, async (message, match) => {
    if (match[1] === '') return await message.reply(LANG.NEED_CON);
      const url = `https://coronavirus-19-api.herokuapp.com/countries/${match[1]}`;
            const response = await got(url);
            const jsun = JSON.parse(response.body);
            await message.client.sendMessage(message.jid, fs.readFileSync("/root/QueenAmdi/media/gif/earth.mp4"), MessageType.video, {mimetype: Mimetype.gif, quoted: message.data, caption: LANG.COUNTRY + jsun.country + '\n\n' + LANG.CASES + jsun.cases + '\n' + LANG.TCASES + jsun.todayCases + '\n' + LANG.DEATHS + jsun.deaths + '\n' + LANG.TDEATHS + jsun.todayDeaths + '\n' + LANG.RECO + jsun.recovered + '\n' + LANG.CRIT + jsun.critical + '\n' + LANG.TEST + jsun.totalTests });
  });
}