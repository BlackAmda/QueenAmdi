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
const Build = QueenAmdi.build
const Amdi = QueenAmdi.events
const simpleGit = require('simple-git');
const git = simpleGit();
const {MessageType} = require('@blackamda/queenamdi-web-api');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Build.HEROKU.API_KEY })
const Language = require('../language');
const Lang = Language.getString('updater');


Amdi.operate({pattern: 'update$', fromMe: true, desc: Lang.UPDATER_DESC, dontAddCommandList: true}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    await git.fetch();
    var commits = await git.log([Build.BRANCH + '..origin/' + Build.BRANCH]);
    if (commits.total === 0) {
        await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text
        );    
    } else {
        var degisiklikler = Lang.NEW_UPDATE;
        commits['all'].map(
            (commit) => {
                degisiklikler += '💠 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
            }
        );

        var BUTTHANDLE = '';
        if (/\[(\W*)\]/.test(Build.HANDLERS)) {
            BUTTHANDLE = Build.HANDLERS.match(/\[(\W*)\]/)[1][0];
        } else {
            BUTTHANDLE = '.';
        }

        const buttons = [
            {buttonId: BUTTHANDLE + 'update now', buttonText: {displayText: '⬆️ Update now' }, type: 1},
        ]
        const buttonMessage = {
            contentText: degisiklikler + '```',
            footerText: 'ǫᴜᴇᴇɴ ᴀᴍᴅɪ © ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ',
            buttons: buttons,
            headerType: 1
        }
        await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage); 
    }
}));

var Action = ''
if (Build.LANG == 'SI') Action = '*👸🏻 Queen Amdi Updating...*'
if (Build.LANG == 'EN') Action = '*👸🏻 Queen Amdi Updating...*'
Amdi.operate({pattern: 'update now', fromMe: true, desc: Lang.UPDATE_NOW_DESC, dontAddCommandList: true}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    await git.fetch();
    var commits = await git.log([Build.BRANCH + '..origin/' + Build.BRANCH]);
    if (commits.total === 0) {
        return await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text
        );    
    } else {
        var on_progress = false
        if (on_progress) return await message.client.sendMessage(message.jid,Action,MessageType.text)
        var guncelleme = await message.reply(Lang.UPDATING);
        if (Build.HEROKU.HEROKU) {
            try {
                var app = await heroku.get('/apps/' + Build.HEROKU.APP_NAME)
            } catch {
                await message.client.sendMessage(
                    message.jid,Lang.INVALID_HEROKU, MessageType.text);
                await new Promise(r => setTimeout(r, 1000));
                return await message.client.sendMessage(
                    message.jid,Lang.UPDATING, MessageType.text);
            }

            git.fetch('upstream', Build.BRANCH);
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Build.HEROKU.API_KEY + "@"
            )
            on_progress = true
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', Build.BRANCH);

            await message.client.sendMessage(
                message.jid,Lang.UPDATED, MessageType.text);

            await message.sendMessage(Lang.AFTER_UPDATE);
            
        } else {
            git.pull((async (err, update) => {
                if(update && update.summary.changes) {
                    await message.client.sendMessage(
                        message.jid,Lang.UPDATED_LOCAL, MessageType.text);
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await message.client.sendMessage(
                        message.jid,'*❌ Update failed!*\n*Error:* ```' + err + '```', MessageType.text);
                }
            }));
            await guncelleme.delete();
        }
    }
}));