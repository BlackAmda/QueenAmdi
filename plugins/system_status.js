/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.3
* @file  system_status.js - QueenAmdi system status

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, amdiDB, customizeButtons, _default, Language, Package, runtime } = require('queen_amdi_core/dist/scripts')
const { aliveTXT0, alivePicURL0 } = _default
const { getSettings } = amdiDB.settingsDB
const { customAlive } = customizeButtons
const Lang = Language.getString('system_status');


AMDI({ cmd: ["alive", "hi", "online"], desc: Lang.AliveDesc, type: "primary", react: "💃🏻" }, (async (amdiWA) => {
    let { prefix, sendButtonsMsg } = amdiWA.msgLayout;

    var ALIVE_MSG = await getSettings("ALIVE_MSG");
    if (ALIVE_MSG.input === 'default' || ALIVE_MSG.input == undefined) {
        const buttons = [
            {type: "url", displayText: "💃🏻 Official Website", url: 'https://amdaniwasa.com/'},
            {type: "url", displayText: "🎞️ AN Tech YouTube Channel", url: 'https://www.youtube.com/channel/UCZx8U1EU95-Wn9mH4dn15vQ'},
            {type: "click", displayText: Lang.sysStats, buttonCMD: `${prefix}system`},
            {type: "click", displayText: Lang.vercheck, buttonCMD: `${prefix}qaversion`}
        ]
        return await sendButtonsMsg(buttons, {text: aliveTXT0, image: {url: alivePicURL0}, tagMsg: true});
    } else {
        const customMap = ALIVE_MSG.input
        await customAlive(amdiWA.web, customMap, amdiWA.msgLayout, getSettings);
    }
}));


AMDI({ cmd: "ping", desc: Lang.PingDesc, type: "primary", react: "📍" }, (async (amdiWA) => {
    let { reply, sendText } = amdiWA.msgLayout
    var start = new Date().getTime();
    var checkSTS = await sendText('_Pinging to amdiModule_', {});
    var end = new Date().getTime();
    await reply(`📍 *Ping: ` + (end - start) + 'ms*');
    return await amdiWA.web.sendMessage(amdiWA.clientJID, { delete: checkSTS.key })
}));


AMDI({ cmd: "system", desc: "Bot Status", cmdHideInMenu: true }, (async (amdiWA) => {
    let { reply, sendText } = amdiWA.msgLayout;

    let uptime = await runtime(process.uptime());
    var start = new Date().getTime();
    var checkSTS = await sendText('_Checking status..._', {});
    var end = new Date().getTime();
    const usage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
    await reply('```⚕️Queen Amdi MD - Status⚕️```\n\n' + Lang.upTime + uptime + `\n` + Lang.ping + (end - start) +'\n'+ Lang.memUsage + usage, "💻");
    return await amdiWA.web.sendMessage(amdiWA.clientJID, { delete: checkSTS.key });
}));


AMDI({ cmd: ["qaversion", "version"], desc: "Version check", cmdHideInMenu: true }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout;
    const version = Package.version
    return await reply(`*🧬 Queen Amdi Version 🧬*\n\n` + '```Installed version``` : ' + version +'\n' + '\n```Official Site``` : https://amdaniwasa.com');
}));