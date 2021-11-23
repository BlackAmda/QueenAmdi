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
const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@blackamda/queenamdi-web-api');
const got = require("got");
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('admin');

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

var INVITE = ''
if (Build.LANG == 'EN') INVITE = '✅ Group invite successfully sent.'
if (Build.LANG == 'SI') INVITE = '✅ කණ්ඩායම් invite සාර්ථකව යවා ඇත.'

var INVITEM = ''
if (Build.LANG == 'EN') INVITEM = ' group admins are invited you to join the group.📩\n\nǫᴜᴇᴇɴ ᴀᴍᴅɪ © 🇵‌🇺‌🇧‌🇱‌🇮‌🇨‌ ᴇᴅɪᴛɪᴏɴ'
if (Build.LANG == 'SI') INVITEM = ' ගෲප් ඇඩ්මින්වරුන් ඔබට ගෲප එකට සම්බන්ධ වන ලෙස ආරාධනා කෙරේ.📩\n\nǫᴜᴇᴇɴ ᴀᴍᴅɪ © 🇵‌🇺‌🇧‌🇱‌🇮‌🇨‌ ᴇᴅɪᴛɪᴏɴ'
Amdi.operate({pattern: "add(?: |$)(.*)", fromMe: true, onlyGroup: true, desc: Lang.ADD_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {  
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (match[1].includes('+')) return await message.client.sendMessage(message.jid,Lang.WRONG,MessageType.text);

    if (match[1] == '') return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);

    var nwjson = await message.client.groupMetadata(message.jid) 
    const sub = nwjson.subject

    var ppUrl = await message.client.getProfilePicture(message.jid) 
    const pic = await axios.get(ppUrl, {responseType: 'arraybuffer'})

    if (match !== "") {match[1].split(' ').map(async (user) => {
        const { participants } = await message.client.groupAdd(message.jid, [user + "@c.us",]);
        participants.map(async (participant) => {
            let { invite_code, invite_code_exp, code } = participant[user + "@c.us"];

            if (code == "403") {
                await message.client.sendMessage(user + "@s.whatsapp.net",{
                    inviteCode: invite_code,
                    inviteExpiration: invite_code_exp,
                    groupName: sub,
                    groupJid: message.jid,
                    caption: '"' + sub + '"' + INVITEM,
                    jpegThumbnail: pic,
                },MessageType.groupInviteMessage);
            return await message.sendMessage(INVITE);
            }
            if (code == "200") {
                if (match[1] !== '') {
                    match[1].split(' ').map(async (user) => {
                        await message.client.groupAdd(message.jid, [user + "@s.whatsapp.net"]);
                        if (Build.ADDMSG == 'default') {
                            await message.client.sendMessage(message.jid,'```' + user + '``` ' + Lang.ADDED, MessageType.text);
                        } else {
                            await message.client.sendMessage(message.jid,'```' + user + '``` ' + Build.ADDMSG, MessageType.text);
                        }
                    });
                }
            }
        });
    });
    } else {
        return await message.sendMessage(Lang.GIVE_ME_USER);
    }
}));

Amdi.operate({pattern: "kick ?(.*)", fromMe: true, onlyGroup: true, desc: Lang.BAN_DESC, dontAddCommandList: true, deleteCommand: false}, async (message, match) => {
    let participants = await message.client.groupMetadata(message.jid);
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    if (!message.reply_message && match[1].startsWith("all")) {
      await message.sendMessage(Lang.REMOVE_ALL);
      await new Promise((r) => setTimeout(r, 10 * 1000));
      let users = participants.filter((member) => !member.isAdmin == true);
      for (let user of users) {
        await new Promise((r) => setTimeout(r, 1000));
        await message.groupRemove(message.jid, user.jid);
      }
      return;
    }
    var admin = await checkImAdmin(message, message.reply_message.data.participant);
    if (admin) {
        return await message.client.sendMessage(message.jid,Lang.IS_ADMIN, MessageType.text);
    }

    if (Build.BANMSG == 'default') {
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + '```, ' + Lang.BANNED + '```', MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupRemove(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupRemove(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    } else {
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Build.BANMSG, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupRemove(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Build.BANMSG, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupRemove(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
});
  

Amdi.operate({pattern: 'promote ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.PROMOTE_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (Build.PROMOTEMSG == 'default') {
        if (message.reply_message !== false) {
            var checkAlready = await checkImAdmin(message, message.reply_message.data.participant);
            if (checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Lang.PROMOTED, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupMakeAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkImAdmin(message, user);
                if (checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
                }

                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Lang.PROMOTED, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupMakeAdmin(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
    else {
        if (message.reply_message !== false) {
            var checkAlready = await checkImAdmin(message, message.reply_message.data.participant);
            if (checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Build.PROMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupMakeAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkImAdmin(message, user);
                if (checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
                }

                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Build.PROMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupMakeAdmin(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
}));

Amdi.operate({pattern: 'demote ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.DEMOTE_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN);

    if (Build.DEMOTEMSG == 'default') {
        if (message.reply_message !== false) {
            var checkAlready = await checkImAdmin(message, message.reply_message.data.participant.split('@')[0]);
            if (!checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Lang.DEMOTED, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupDemoteAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkImAdmin(message, user);
                if (!checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
                }
            
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Lang.DEMOTED, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupDemoteAdmin(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
    else {
        if (message.reply_message !== false) {
            var checkAlready = await checkImAdmin(message, message.reply_message.data.participant.split('@')[0]);
            if (!checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Build.DEMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupDemoteAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkImAdmin(message, user);
                if (!checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
                }
            
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Build.DEMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupDemoteAdmin(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
}));


Amdi.operate({pattern: 'mute', fromMe: true, onlyGroup: true, desc: Lang.MUTE_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message) => {    
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (Build.MUTEMSG == 'default') {
        await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
        await message.client.sendMessage(message.jid,Lang.MUTED,MessageType.text);
    } else {
        await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
        await message.client.sendMessage(message.jid,Build.MUTEMSG,MessageType.text);
    }
}));

Amdi.operate({pattern: 'unmute', fromMe: true, onlyGroup: true, desc: Lang.UNMUTE_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message) => {    
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (Build.UNMUTEMSG == 'default') {
        await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
        await message.client.sendMessage(message.jid,Lang.UNMUTED,MessageType.text);
    }
    else {
        await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
        await message.client.sendMessage(message.jid,Build.UNMUTEMSG,MessageType.text);
    }
}));

Amdi.operate({pattern: 'clear', fromMe: true, desc: Lang.END, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    await message.sendMessage('```Chat clearing...```');
    await message.client.modifyChat (message.jid, ChatModification.delete);
    await message.sendMessage('```🚮 Chat cleared```');
}));

Amdi.operate({pattern: 'subject ?(.*)', onlyGroup: true, fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_SUB);
    
    await message.client.groupUpdateSubject(message.jid, match[1]);
    await message.client.sendMessage(message.jid,Lang.SUB,MessageType.text);
    }
));

Amdi.operate({pattern: 'grpdesc ?(.*)', onlyGroup: true, fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_DESC);
    
    await message.client.groupUpdateDescription(message.jid, match[1]);
    await message.client.sendMessage(message.jid,Lang.DESCGRP,MessageType.text);
    }
));

Amdi.operate({pattern: 'revoke', onlyGroup: true, fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    await message.client.revokeInvite (message.jid)
    await message.client.sendMessage(message.jid,Lang.REVOKED,MessageType.text);
    }
));

Amdi.operate({pattern: 'del', fromMe: true,  deleteCommand: false, dontAddCommandList: true}, async (message) => {
    await QueenAmdi.amdi_setup()
    await message.client.deleteMessage(message.jid, {id: message.reply_message.id, remoteJid: message.jid, fromMe: true})

});

Amdi.operate({pattern: 'invite', fromMe: true, onlyGroup: true, desc: Lang.INVITE_DESC, dontAddCommandList: true, deleteCommand: false}, (async (message) => {    
    var im = await checkImAdmin(message);
    await QueenAmdi.amdi_setup()
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN, MessageType.text);
    var invite = await message.client.groupInviteCode(message.jid);
    await message.client.sendMessage(message.jid,Lang.INVITE + ' https://chat.whatsapp.com/' + invite, MessageType.text);
}));

Amdi.operate({pattern: 'search', fromMe: true, desc: Lang.SEARCH, dontAddCommandList: true, deleteCommand: false}, async (message) => {
    await QueenAmdi.amdi_setup()
    if (Build.LANG == 'EN') {
        get_result = await QueenAmdi.fetch.fetchJson('https://gist.githubusercontent.com/BlackAmda/fd932d454eb1cf07877c7fbee1d7a205/raw/')
        get_result = get_result.english
        ini_txt = ""
            for (var x of get_result) {
            ini_txt += `🧰 Plugin : ${x.plugin}\n`
            ini_txt += `📄 Description : ${x.desc}\n`
            ini_txt += `📅 Released date : ${x.date}\n`
            ini_txt += `🌐 Link : ${x.link}\n\n`
            }
        await message.client.sendMessage(message.jid, '*💠Queen Amdi external plugins💠*\n\nYou can install these plugins by *.install _<plugin_link>_*\nExample : .install https://gist.github.com/BlackAmda/a06509cf406c3eb172e5173900d0ef87\n\n' + ini_txt, MessageType.text, {quoted: message.data });
    }
    if (Build.LANG == 'SI') {
        get_result = await QueenAmdi.fetch.fetchJson('https://gist.githubusercontent.com/BlackAmda/fd932d454eb1cf07877c7fbee1d7a205/raw/')
        get_result = get_result.sinhala
        ini_txt = ""
            for (var x of get_result) {
            ini_txt += `🧰 ප්ලගිනය : ${x.plugin}\n`
            ini_txt += `📄 විස්තරය : ${x.desc}\n`
            ini_txt += `📅 නිකුත් කළ දිනය : ${x.date}\n`
            ini_txt += `🌐 Link : ${x.link}\n\n`
            }
        await message.client.sendMessage(message.jid, '*💠Queen Amdi external plugins💠*\n\nඔබට මෙම ප්ලගීන ස්ථාපනය කළ හැක්කේ *.install _<plugin_link>_*\nඋදාහරණය : .install https://gist.github.com/BlackAmda/a06509cf406c3eb172e5173900d0ef87\n\n' + ini_txt, MessageType.text, {quoted: message.data });
    }
});

module.exports = {
    checkImAdmin: checkImAdmin
};