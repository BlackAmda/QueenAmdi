/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.8
* @file  search.js - QueenAmdi search engine features

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, apkDL_List, blackamda_API, Language, Packages } = require('queen_amdi_core/dist/scripts')
const { axios } = Packages;
const yts = require( 'yt-search' )
const Lang = Language.getString('search');

const searchTITLE = '🔎 *Queen Amdi Search Engine*'

AMDI({ cmd: ["yt", "yts", "ytsearch"], desc: Lang.YTSDESC, type: "primary", react: "🔎" }, (async (amdiWA) => {
    let { footerTXT, input, react, reply } = amdiWA.msgLayout;

    if (!input) return await reply(Lang.needTXT);

    try {
        var ytsLIST = await yts(input);
    } catch {
        return await reply(Lang.NOT_FOUND.format("YouTube"), "☹️", 1);
    }
    var ytgot = '';
    ytsLIST.all.map((video) => {
        ytgot += '▶️ *' + video.title + '* - ' + video.url + '\n\n'
    });
    await reply(`${searchTITLE}\n${Lang.YTS}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n${ytgot}\n\n${footerTXT}`);
    return await react("✔️", amdiWA.msg);
}));


AMDI({ cmd: ["ps", "playstore"], desc: Lang.PSDESC, type: "primary", react: "🔎" }, (async (amdiWA) => {
    let { footerTXT, input, isPlaystore, prefix, react, reply, sendImage, sendListMsg } = amdiWA.msgLayout;

    if (!input) return await reply(Lang.needTXT);

    try {
        if (input && isPlaystore(input)) {
            const psAPI = await blackamda_API("playstore", `package=${input}`, amdiWA.botNumberJid);
            const response = await axios.get(psAPI);
            const json = response.data

            if (json.status.error) return await reply("Error".fetchError({ message: json.status.message }), "❌", 1);

        const text = `
    📚 *Name* : ${json.app_name}
    🧰 *Version* : ${json.version}
    👨🏻‍💻 *Developer* : ${json.developer}
    📲 *Installs* : ${json.installs}
    📁 *Package name* : ${json.package}
`
            await sendImage({url: json.icon}, {caption: `${searchTITLE}\n${Lang.PSTORE}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​${text}\n\n${footerTXT}`, quoted: true});
            return await react("✔️", amdiWA.msg);
        } else if (input) {
            const psAPI = await blackamda_API("search", `platform=playstore&name=${input}`, amdiWA.botNumberJid);
            const response = await axios.get(psAPI);
            const json = response.data
            
            if (json.status.error) return await reply("Error".fetchError({ message: json.status.message }), "❌", 1);
    
            var listInfo = {}
            listInfo.title = searchTITLE
            listInfo.text = `\n${Lang.PSTORE}\n`
            listInfo.buttonTXT = 'Select app'
    
            const sections = apkDL_List(prefix, json.data, true);
    
            await sendListMsg(listInfo, sections)
            return await react("✔️", amdiWA.msg);
        } 
    } catch (e) {
        console.log(e);
        await reply(Lang.NOT_FOUND.format("Playstore"), "☹️");
        return await react("❌", amdiWA.msg);
    }
}));