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
const { MessageType } = require('@blackamda/queenamdi-web-api');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('movie');
let LOL = Build.WORKTYPE == 'public' ? false : true

//Movie-scraper

Amdi.operate({ pattern: 'movie ?(.*)', fromMe: LOL, desc: Lang.MOVIE_DESC ,  deleteCommand: false}, (async (message, match) => {
	await QueenAmdi.amdi_setup()
	const movie = match[1]
	if (movie === '') return await message.client.sendMessage(message.jid, Lang.MOVIE_NAME, MessageType.text, { quoted: message.data });
		let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
		let msg = '```';
		msg += '🎬 Title      : ' + json.Title + '\n\n';
		msg += '📅 Year       : ' + json.Year + '\n\n';
		msg += '⭐ Rated      : ' + json.Rated + '\n\n';
		msg += '📆 Released   : ' + json.Released + '\n\n';
		msg += '⏳Runtime    : ' + json.Runtime + '\n\n';
		msg += '🌀 Genre      : ' + json.Genre + '\n\n';
		msg += '👨🏻‍💻 Director   : ' + json.Director + '\n\n';
		msg += '✍🏻 Writer     : ' + json.Writer + '\n\n';
		msg += '👨🏻‍🎤 Actors     : ' + json.Actors + '\n\n';
		msg += '📃Plot       : ' + json.Plot + '\n\n';
		msg += '🌐 Language   : ' + json.Language + '\n\n';
		msg += '🌍 Country    : ' + json.Country + '\n\n';
		msg += '🎖️ Awards     : ' + json.Awards + '\n\n';
		msg += '📦 BoxOffice  : ' + json.BoxOffice + '\n\n';
		msg += '🏙️ Production : ' + json.Production + '\n\n';
		msg += '🌟 imdbRating : ' + json.imdbRating + '\n\n';
		msg += '❎ imdbVotes  : ' + json.imdbVotes + '```';
	await message.client.sendMessage(message.jid,'*❖ Queen Amdi Movie Hub ❖*\n🎬📅⭐⏳👨🏻‍💻🌐🎖️🌟❎\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' +  msg, MessageType.text, { quoted: message.data });
}));