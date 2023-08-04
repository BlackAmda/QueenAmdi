/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.1
* @file  _bot_control.js - QueenAmdi bot control commands

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, amdiDB, _default, _default_list_sections, Language, restore } = require('queen_amdi_core/dist/scripts')
const { addStarRates, checkJID, getStarRates, resetRates } = amdiDB.rateDB
const { getAntiLink, insertAntiLink, resetAntiLinkDB } = amdiDB.antilinkDB
const { inputSettings, getSettingsList, resetSettingsDB } = amdiDB.settingsDB
const { getGrpSettingsList, resetGrpSettingsDB } = amdiDB.grpSetDB
const { getMiscData, getMiscDataList } = amdiDB.miscDB
const { getAllDelJids, getBanJidList, resetBanDB, resetDelAllDB } = amdiDB.ban_jidDB
const { getAllWelcome, getAllBye, resetWelcomeDB, resetByeDB } = amdiDB.greetingsDB
const { rateList, reactList, resetLIST, rateText } = _default_list_sections
const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}` };
const fs = require('fs');
const { writeFile } = require('fs/promises');
const Lang = Language.getString('botCTRL');

AMDI({ cmd: "restart", desc: "Restart the bot", type: "profile", react: "🔃" }, (async (amdiWA) => {
    let { reply, restart_sys } = amdiWA.msgLayout

    await reply('*Restarting...*');
    await restart_sys();
}));


AMDI({ cmd: "stop", desc: "Stop the bot", type: "profile", react: "📴" }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout

    await reply('*Bot is shutting down...*\n\n_(You have to manually turn on the bot!)_');
    process.exit(1);
}));


AMDI({ cmd: "backup", desc: Lang.backupDESC, type: "profile", react: "📤" }, (async (amdiWA) => {
    let { reply, sendDocument } = amdiWA.msgLayout
    
    try {    
        const settingsDB = await getSettingsList();
        const settingsFILE = `SettingsBackup_${amdiWA.msg.messageTimestamp}.amdi`
        const contentset = JSON.stringify(settingsDB)
        let bufferset = Buffer.from(contentset)
        await writeFile(settingsFILE, bufferset);
        await sendDocument(fs.readFileSync('./' + settingsFILE), { mimetype: _default.amdiMIMETYPE, fileName: settingsFILE, quoted: true });

        const grpsettingsDB = await getGrpSettingsList();
        const grpsettingsFILE = `GroupSettingsBackup_${amdiWA.msg.messageTimestamp}.amdi`
        const grpcontentset = JSON.stringify(grpsettingsDB)
        let buffergrpset = Buffer.from(grpcontentset)
        await writeFile(grpsettingsFILE, buffergrpset);
        await sendDocument(fs.readFileSync('./' + grpsettingsFILE), { mimetype: _default.amdiMIMETYPE, fileName: grpsettingsFILE, quoted: true });

        const ratingsDB = await getStarRates();
        const ratingsFILE = `RatesBackup_${amdiWA.msg.messageTimestamp}.amdi`
        const ratingscontent = JSON.stringify(ratingsDB)
        let bufferratings = Buffer.from(ratingscontent)
        await writeFile(ratingsFILE, bufferratings);
        await sendDocument(fs.readFileSync('./' + ratingsFILE), { mimetype: _default.amdiMIMETYPE, fileName: ratingsFILE, quoted: true });

        const delallDB = await getAllDelJids();
        const delallFILE = `DelAllJIDBackup_${amdiWA.msg.messageTimestamp}.amdi`
        const contentdel = JSON.stringify(delallDB)
        let bufferdel = Buffer.from(contentdel)
        await writeFile(delallFILE, bufferdel);
        await sendDocument(fs.readFileSync('./' + delallFILE), { mimetype: _default.amdiMIMETYPE, fileName: delallFILE, quoted: true });

        const banDB = await getBanJidList();
        const banFILE = `BanJIDBackup_${amdiWA.msg.messageTimestamp}.amdi`
        const contentban = JSON.stringify(banDB)
        let bufferban = Buffer.from(contentban)
        await writeFile(banFILE, bufferban);
        await sendDocument(fs.readFileSync('./' + banFILE), { mimetype: _default.amdiMIMETYPE, fileName: banFILE, quoted: true });

        const welcomeDB = await getAllWelcome();
        const welcomeFILE = `WelcomeNoteBackup_${amdiWA.msg.messageTimestamp}.amdi`
        const contentwelcome = JSON.stringify(welcomeDB)
        let bufferwelcome = Buffer.from(contentwelcome)
        await writeFile(welcomeFILE, bufferwelcome);
        await sendDocument(fs.readFileSync('./' + welcomeFILE), { mimetype: _default.amdiMIMETYPE, fileName: welcomeFILE, quoted: true });

        const byeDB = await getAllBye();
        const byeFILE = `ByeNoteBackup_${amdiWA.msg.messageTimestamp}.amdi`
        const contentbye = JSON.stringify(byeDB)
        let bufferbye = Buffer.from(contentbye)
        await writeFile(byeFILE, bufferbye);
        return await sendDocument(fs.readFileSync('./' + byeFILE), { mimetype: _default.amdiMIMETYPE, fileName: byeFILE, quoted: true });
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    }
}));


AMDI({ cmd: "restore", desc: Lang.restoreDESC, type: "profile", react: "📥" }, (async (amdiWA) => {
    await restore();
}));


AMDI({ cmd: "reset", desc: Lang.resetDESC, type: "profile", react: "🚮" }, (async (amdiWA) => {
    let { input, prefix, reply, sendListMsg, resetconnectionDB } = amdiWA.msgLayout

    try {
        switch (input) { 
            default:
                var listInfo = {}
                listInfo.title = Lang.resetDBtitle
                listInfo.text = Lang.resetDBtxt
                listInfo.buttonTXT = 'default'  
                await sendListMsg(listInfo, resetLIST(prefix));
            break;

            case 'connectionDB': 
                await reply(Lang.resetted.format(input), "✔️");
                await reply('Bot disconnected!', "❌")
                await resetconnectionDB();
            break;
            
            case 'BanDB': 
                await resetBanDB();
                await reply(Lang.resetted.format(input), "✔️");
            break;
            
            case 'DellAllDB': 
                await resetDelAllDB();
                await reply(Lang.resetted.format(input), "✔️");
            break;
            
            case 'WelcomeDB': 
                await resetWelcomeDB();
                await reply(Lang.resetted.format(input), "✔️");
            break;
            
            case 'ByeDB': 
                await resetByeDB();
                await reply(Lang.resetted.format(input), "✔️");
            break;
            
            case 'SettingsDB': 
                await resetSettingsDB();
                await inputSettings('WORK_TYPE', 'private');
                await inputSettings('PREFIX', '.');
                await inputSettings('MODERATOR', 'no moderators added')
                await reply(Lang.resetted.format(input), "✔️");
            break;
            
            case 'GroupSettingsDB': 
                await resetGrpSettingsDB();
                await reply(Lang.resetted.format(input), "✔️");
            break;
            
            case 'RatesDB': 
                await resetRates();
                await reply(Lang.resetted.format(input), "✔️");
            break;

            case 'AntiLinkDB': 
                await resetAntiLinkDB();
                await reply(Lang.resetted.format(input), "✔️");
            break;
            
            case 'allDB':
                await resetAntiLinkDB();
                await resetBanDB();
                await resetDelAllDB();
                await resetWelcomeDB();
                await resetGrpSettingsDB();
                await resetByeDB();
                await resetSettingsDB();
                await resetRates();
                await reply(Lang.allDB, "✔️");
                await resetconnectionDB();
            break;
        };
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    }
}));


AMDI({ cmd: "rate", desc: Lang.rateDESC, type: "primary", react: "✨" }, (async (amdiWA) => {
    let { input, prefix, reply, sender, sendButtonMsg, sendListMsg } = amdiWA.msgLayout

    if (!input) {
        const botname = await getMiscData('BOTNAME');
        let BOTNAME = !botname.data ? 'Queen Amdi' : botname.data

        var listInfo = {}
        listInfo.title = Lang.ratesTitle.format(BOTNAME)
        listInfo.buttonTXT = 'Select a rating' 
        listInfo.text = await rateText();
        return await sendListMsg(listInfo, rateList(prefix));
    }

    switch (input) { case 'one': case 'two': case 'three': case 'four': case 'five':
            const isRated = await checkJID(sender, input);
            if (isRated) return await reply(Lang.alreadyRATED.format(input));
            console.log(sender)
            await addStarRates(sender, input);
            await reply(Lang.rated.format(input, input == 'five' ? '🤩' : '🙂'), "✔️");
            //await sendButtonMsg(yesorno(prefix, 'rate', 'thankyou'), Lang.rated.format(input), tagMsg = true);
        break;
    };
}));

AMDI({ cmd: "clear", desc: Lang.clearDESC, type: "profile", react: "🚮" }, (async (amdiWA) => {
    let { lastMessage, reply } = amdiWA.msgLayout;
    
    await amdiWA.web.chatModify({ delete: true, lastMessages: lastMessage}, amdiWA.clientJID);
    return reply("🚮 Chat Cleared!");
}));

AMDI({ cmd: "reacts", desc: Lang.RL_DESC, type: "profile", react: "💟" }, (async (amdiWA) => {
    let { input, prefix, sendListMsg } = amdiWA.msgLayout

    if (!input) {
        const botname = await getMiscData('BOTNAME');
        const miscData = await getMiscDataList();
        let BOTNAME = !botname.data ? 'Queen Amdi' : botname.data

        var listInfo = {}
        listInfo.title = Lang.RL_Title.format(BOTNAME)
        listInfo.buttonTXT = 'default' 
        listInfo.text = Lang.RL_Text;
        return await sendListMsg(listInfo, reactList(prefix, miscData));
    }
}));

AMDI({ cmd: "clean", desc: "Reset process control limits", type: "profile", react: "♻️" }, (async (amdiWA) => {
    let { clearProcess, reply } = amdiWA.msgLayout;
    
    clearProcess();
    return reply("♻️ Reset process controller!");
}));