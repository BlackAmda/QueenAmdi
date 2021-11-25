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
const fs = require('fs/promises')
const path = require('path')
const { MessageType } = require('@blackamda/queenamdi-web-api')
const NotesDB = require('./sql/notes');
const Language = require('../language')
const Lang = Language.getString('notes')

Amdi.operate({ pattern: 'notes', fromMe: true,  deleteCommand: false,  desc: Lang.NOTES_USAGE }, async (message, match) => {

    const _notes = await NotesDB.getNotes()
    const notes = []
    _notes.map(note => {
        if (!note.note.includes('IMG;;;')) {
            notes.push('📝' + note.note)
        }
    })

    if (notes.length < 1) {
        return await message.client.sendMessage(message.jid,Lang.NO_SAVED, MessageType.text, {quoted: message.data});
    }

    await message.client.sendMessage(message.jid,Lang.SAVED, MessageType.text, {quoted: message.data});

    await message.sendMessage(notes.join('\n\n'))
    _notes.filter(note => note.note.includes('IMG;;;')).forEach(async (note) => {
        const imageName = note.note.replace('IMG;;;', '')
        const image = await fs.readFile(path.resolve('media', imageName))
        await message.sendMessage(image, MessageType.image)
    })
})



Amdi.operate({ pattern: 'save ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.SAVE_USAGE }, async (message, match) => {

    const userNote = match[1]

    if (!userNote && !message.reply_message) {
        await message.client.sendMessage(message.jid,Lang.REPLY, MessageType.text, {quoted: message.data});

        return
    }

    if (userNote) {
        await NotesDB.saveNote(userNote)
        await message.client.sendMessage(message.jid,Lang.SUCCESSFULLY_ADDED, MessageType.text, {quoted: message.data});

        return

    } else if (!userNote && message.reply_message) {
        if (!message.reply_message.video) {

            if (message.reply_message.image) {
                const savedFileName = await message.client.downloadAndSaveMediaMessage({
                    key: {
                        remoteJid: message.reply_message.jid,
                        id: message.reply_message.id
                    },
                    message: message.reply_message.data.quotedMessage
                })

                const randomFileName = savedFileName.split('.')[0] + Math.floor(Math.random() * 50) + path.extname(savedFileName)
                await fs.copyFile(savedFileName, path.resolve('media', randomFileName))
                await NotesDB.saveNote("IMG;;;" + randomFileName)
                await message.client.sendMessage(message.jid,Lang.SUCCESSFULLY_ADDED, MessageType.text, {quoted: message.data});
            }

            await NotesDB.saveNote(message.reply_message.text)
            await message.client.sendMessage(message.jid,Lang.SUCCESSFULLY_ADDED, MessageType.text, {quoted: message.data});

            return
        }
    } else {
        await message.client.sendMessage(message.jid,Lang.UNSUCCESSFUL, MessageType.text, {quoted: message.data});

        return
    }
})

Amdi.operate({ pattern: 'deleteNotes', fromMe: true,  deleteCommand: false,  desc: Lang.DELETE_USAGE }, async (message, match) => {

    await NotesDB.deleteAllNotes()

    const mediaFolder = await fs.readdir(path.resolve('media'))

    mediaFolder.forEach(async (file) => {
        await fs.unlink(path.resolve('media', file))
    })

    return await message.client.sendMessage(message.jid,Lang.SUCCESSFULLY_ADDED, MessageType.text, {quoted: message.data});
})

