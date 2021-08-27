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

const {MessageType, Presence, MessageOptions} = require('@adiwajshing/baileys');
const Base = require('./Base');
const Message = require('./Message');
const ReplyMessage = require('./ReplyMessage');

class Image extends Base {
    constructor(client, data) {
        super(client);
        if (data) this._patch(data);
    }

    _patch(data) {
        this.id = data.key.id === undefined ? undefined : data.key.id;
        this.jid = data.key.remoteJid;
        this.fromMe = data.key.fromMe;
        this.caption = data.message.imageMessage.caption === null ? data.message.imageMessage.caption : '';
        this.url = data.message.imageMessage.url;
        this.timestamp = typeof(data.messageTimestamp) === 'object' ? data.messageTimestamp.low : data.messageTimestamp;
        this.mimetype = data.message.imageMessage.mimetype;
        this.height = data.message.imageMessage.height;
        this.width = data.message.imageMessage.width;
        this.mediaKey = data.message.imageMessage.mediaKey;
        this.data = data;
        
        if (data.message.imageMessage.hasOwnProperty('contextInfo') && data.message.contextInfo.quotedMessage) { 
            this.reply_message = new ReplyMessage(this.client, data.message.imageMessage.contextInfo); }
        else {
            this.reply_message = false;
        }
        
        return super._patch(data);
    }

    async delete() {
        return await this.client.deleteMessage(this.jid, {id: this.id, remoteJid: this.jid, fromMe: true})
    }

    async reply(text) {
        var message = await this.client.sendMessage(this.jid, text, MessageType.text, {quoted: this.data})
        return new Message(this.client, message)
    }

    async sendMessage(content, type, options) {
        return await this.client.sendMessage(this.jid, content, type, options)
    }

    async sendTyping() {
        return await this.client.updatePresence(this.jid, Presence.composing) ;
    }

    async sendRead() {
        return await this.client.chatRead(this.jid);
    }

    async download(location = this.id) {
        await this.client.downloadAndSaveMediaMessage(this.data, location);
        return this.id + '.' + this.mimetype.split('/')[1];
    }
};

module.exports = Image;