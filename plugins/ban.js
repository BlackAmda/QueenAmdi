/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.8
* @file  ban.js - QueenAmdi group/user ban manager

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, amdiDB, ban, Language } = require('queen_amdi_core/dist/scripts')
const { banRows, banUSER, banGROUP } = ban
const { removeBanJids, getBanJidList } = amdiDB.ban_jidDB
const Lang = Language.getString('ban');


AMDI({ cmd: "ban", desc: Lang.bandesc, example: Lang.banEx, type: "profile", react: "⛔" }, (async (amdiWA) => {
    let { botNumberJid, input, allowedNumbs, groupMetadata } = amdiWA.msgLayout;

    if (input.includes('user')) {
        await banUSER(input, botNumberJid, allowedNumbs)
    }

    if (input.includes('group')) {
        await banGROUP(input, botNumberJid, allowedNumbs, groupMetadata)
    }
}));


AMDI({ cmd: "unban", desc: Lang.unbandesc, example: Lang.unbanEx, type: "profile", react: "✔️" }, (async (amdiWA) => {
    let { isGroup, reply, taggedJid } = amdiWA.msgLayout;

    if (isGroup) {
        if (!amdiWA.msg.message.extendedTextMessage) return reply(Lang.unbanEx)
        await removeBanJids(taggedJid)
        return await reply(`✅ *Unbanned*`, "🔓");
    } else if (!isGroup) {
        await removeBanJids(amdiWA.clientJID)
        return await reply(`✅ *Unbanned*`, "🔓");
    } else {
        return reply(Lang.unbanEx)
    }
}));


AMDI({ cmd: "banlist", desc: Lang.banlistDESC, type: "profile", react: "📓" }, (async (amdiWA) => {
    let { prefix, reply, sendListMsg } = amdiWA.msgLayout;

    var listInfo = {}
    listInfo.title = Lang.banListTitle
    listInfo.text = Lang.banListText
    listInfo.buttonTXT = 'default'

    var banList = await getBanJidList();
    const rows = await banRows(prefix, banList)
    if (rows == '') return reply('*No ban users or groups*', "🙂")
    const sections = [{ title: "Ban JIDs list", rows: rows }]
    return await sendListMsg(listInfo, sections);
}));