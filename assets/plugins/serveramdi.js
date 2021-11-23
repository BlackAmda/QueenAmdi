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
const {MessageType} = require('@blackamda/queenamdi-web-api');
const exec = require('child_process').exec;
const os = require("os");
const got = require('got');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Build.HEROKU.API_KEY
});
let baseURI = '/apps/' + Build.HEROKU.APP_NAME;
const p_desc = "Prints the inside of the file on the server."
const errmsg = '*The file you are looking for is not available on the server!*'

const Language = require('../language');
const Lang = Language.getString('serveramdi');

Amdi.operate({pattern: 'term ?(.*)', fromMe: true, desc: Lang.TERM_DESC, dontAddCommandList: true}, (async (message, match) => {    
    var user = os.userInfo().username;
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.GIVE_ME_CODE,MessageType.text);

    exec(match[1], async (err, stdout, stderr) => {
        if (err) {
            return await message.client.sendMessage(message.jid,'```' + user + ':~# ' + match[1] + '\n' + err + '```',MessageType.text);
        }
        
        return await message.client.sendMessage(message.jid,'```' + user + ':~# ' + match[1] + '\n' + stdout + '```',MessageType.text);
      });
}));

Amdi.operate({pattern: 'print', fromMe: true, desc: p_desc, dontAddCommandList: true}, (async (message, match) => {
    const sheet = 'assets/Dockerfile'    
    exec('cat ' + sheet, async (err, stdout, stderr) => {
        if (err) {
            return await message.client.sendMessage(message.jid,errmsg, MessageType.text)
        }
        await message.client.sendMessage(message.jid, `Root ~# ${sheet} \n\n` + stdout, MessageType.text)
    });
}));

// ================================================
Amdi.operate({pattern: 'qasupportjoin', fromMe: true, dontAddCommandList: true}, (async (message) => {
    let url = `https://gist.github.com/BlackAmda/f44901e2a1f281cf9ade28be7babce5c/raw/`
    const response = await got(url);
    const json = JSON.parse(response.body);
    const link = json.invite
    await message.client.acceptInvite(link);
    await message.client.sendMessage(message.jid, '```Successfully joined to the support group✅```', MessageType.text)
}));

var rules = ''
if (Build.LANG == 'EN') rules = '```Queen Amdi Support Group Rules ⚖️```\n\n1️⃣ _Be respectful_\n2️⃣ _Do not share any link_\n3️⃣ _Do not use commands there_\n\n*Users that not following rules will kicking out from the group ‼️*'
if (Build.LANG == 'SI') rules = '```Queen Amdi Support Group Rules ⚖️```\n\n1️⃣ _ගෞරවනීය වන්න_\n2️⃣ _කිසිම link එකක් බෙදා නොගන්න_\n3️⃣ _එහි විධාන භාවිතා නොකරන්න_\n\n*නීති රීති අනුගමනය නොකරන පරිශීලකයින් සමූහයෙන් නෙරපා හරිනු ඇත ‼️*'
Amdi.operate({pattern: 'qasupprules', fromMe: true, dontAddCommandList: true}, (async (message) => {
    await message.client.sendMessage(message.jid, rules, MessageType.text, {quoted: message.data})
}));
// ================================================
