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

const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('_amdi');
const fs = require("fs")
const amdi = fs.readFileSync('./media/amdibot.mp3')
let LOL = Config.WORKTYPE == 'public' ? false : true  


Amdi.applyCMD({pattern: Config.MENU + '?(.*)', fromMe: LOL,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    var CMD_HELP = '';
    if (match[1] === '') {
        Amdi.commands.map(
            async (command) =>  {
                if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '*🗝️ ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                    if (command.desc !== '') CMD_HELP += '*📋 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

            }
        );
        
        await message.client.sendMessage(message.jid, amdi, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        await message.client.sendMessage(message.jid, '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️⛨ QUEEN AMDI PANEL ⛨⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n\n' + CMD_HELP, MessageType.text, {quoted: message.data});  
    } else {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }
        var CMD_HELP = '';
        Amdi.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }
                
                if (cmatch[2] == match[1]) {
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += '*🗝️ ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                        if (command.desc !== '') CMD_HELP += '*📋 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                        if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            }
        );
        if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
        await message.client.sendMessage(
            message.jid,'⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️⛨ QUEEN AMDI PANEL ⛨⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n\n' + CMD_HELP, MessageType.text,{quoted: message.data}
        );
    }
}));

/*
=== Fetching app code
=== Building worker (Dockerfile)
Sending build context to Docker daemon  2.932MBStep 1/7 : FROM BlackAmda/QueenAmdi:latest
latest: Pulling from BlackAmda/QueenAmdi
21c83c524219: Pulling fs layer
99d18f511752: Pulling fs layer
b5420812b5e8: Pulling fs layer
1f22bc192998: Pulling fs layer
6f02efe26746: Pulling fs layer
dbd655ae9db9: Pulling fs layer
4979d9df075d: Pulling fs layer
53e43ac8e9b5: Pulling fs layer
1f22bc192998: Waiting
6f02efe26746: Waiting
dbd655ae9db9: Waiting
4979d9df075d: Waiting
53e43ac8e9b5: Waiting
21c83c524219: Verifying Checksum
21c83c524219: Download complete
b5420812b5e8: Verifying Checksum
b5420812b5e8: Download complete
6f02efe26746: Verifying Checksum
6f02efe26746: Download complete
1f22bc192998: Verifying Checksum
1f22bc192998: Download complete
99d18f511752: Verifying Checksum
99d18f511752: Download complete
21c83c524219: Pull complete
4979d9df075d: Verifying Checksum
4979d9df075d: Download complete
dbd655ae9db9: Verifying Checksum
dbd655ae9db9: Download complete
99d18f511752: Pull complete
b5420812b5e8: Pull complete
53e43ac8e9b5: Verifying Checksum
53e43ac8e9b5: Download complete
1f22bc192998: Pull complete
6f02efe26746: Pull complete
dbd655ae9db9: Pull complete
4979d9df075d: Pull complete
53e43ac8e9b5: Pull complete
Digest: sha256:9de670079009c30cd7f5a1080154f5cbf67111f7fae0ceaf2c88a652f65c1ff9*/
// clone www.qr.com/amda456

