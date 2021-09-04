/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const dil = require('axios');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');

const LOG = "Saves the message you reply to your private number."
const REPLY = "*Please Reply To Any Message!*"
const ANIM = "Does not support animated stickers!"
const HEAD = "```===== [LOGGED MESSAGE] =====```\n\n"
const USER = " From User Number \n"
const FROM = " From the group with ID, "
const MSG = "Message: \n\n"
const SUC = "*Message Successfully Saved to LOG! ✅️*"

Amdi.applyCMD({ pattern: 'log', fromMe: true,  deleteCommand: false,  desc: LOG, warn: ANIM, onlyGroup: true, dontAddCommandList: true}, (async (message, match) => { 

    const meta = await message.client.groupMetadata(message.jid)
    const usmeta = message.client.isOnWhatsApp(message.jid)

    if (message.jid.includes('-')) {
        if (!message.reply_message) {
            return await message.client.sendMessage(
                message.jid,
                REPLY,
                MessageType.text
            );
        }
        else if (message.reply_message.text) {
            await message.client.sendMessage(
                message.client.user.jid,
                HEAD + meta.id + FROM + 'wa.me/' + message.reply_message.jid.split('@')[0] + USER + MSG + message.reply_message.text,
                MessageType.text
            );
            await message.client.sendMessage(
                message.jid,
                SUC,
                MessageType.text,
            );
        }  
        else if (message.reply_message.image) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('im.jpg')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('im.jpg'),
                    MessageType.image,
                    { caption: HEAD + meta.id + FROM + 'wa.me/' + message.reply_message.jid.split('@')[0] + USER }
                );
                await message.client.sendMessage(
                    message.jid,
                    SUC,
                    MessageType.text,
                );
            });
        }
        else if (message.reply_message.video) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('vid.mp4')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('vid.mp4'),
                    MessageType.video,
                    { mimetype: Mimetype.mpeg, caption: HEAD + meta.id + FROM + 'wa.me/' + message.reply_message.jid.split('@')[0] + USER }
                );
                await message.client.sendMessage(
                    message.jid,
                    SUC,
                    MessageType.text,
                );
            });
        }
        else if (!message.reply_message.text && !message.reply_message.video && !message.reply_message.sticker && !message.reply_message.image) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('ad.mp3')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('ad.mp3'),
                    MessageType.audio,
                    { mimetype: Mimetype.mp4Audio} 
                );
                await message.client.sendMessage(
                    message.client.user.jid,
                    HEAD + meta.id + FROM + 'wa.me/' + message.reply_message.jid.split('@')[0] + USER,
                    MessageType.text
                );
                await message.client.sendMessage(
                    message.jid,
                    SUC,
                    MessageType.text,
                );
            });
        }
        else {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('log.webp')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('log.webp'),
                    MessageType.sticker
                );
                await message.client.sendMessage(
                    message.client.user.jid,
                    HEAD + meta.id + FROM + 'wa.me/' + message.reply_message.jid.split('@')[0] + USER,
                    MessageType.text
                );
                await message.client.sendMessage(
                    message.jid,
                    SUC,
                    MessageType.text,
                );
            });
        }
    }
    else if (!message.jid.includes('-')) {
        return;
    }
}));
