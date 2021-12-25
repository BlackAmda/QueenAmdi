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
const _settings = QueenAmdi.settings
const {MessageType} = require('@blackamda/queenamdi-web-api');

const Language = require('../language');
const Lang = Language.getString('_settings');

const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Build.HEROKU.API_KEY
});

let baseURI = '/apps/' + Build.HEROKU.APP_NAME;


// ======== Log Number WorkType ========
Amdi.operate({pattern: 'qaworktype', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG) => { 
    await QueenAmdi.amdi_setup()
    if (Build.WORKTYPE == 'private') {
        var wktype = await _settings.wkbutton()
        await amdiMSG.client.sendMessage(amdiMSG.jid, wktype, MessageType.buttonsMessage, {quoted: amdiMSG.data}); 
    }
    else if (Build.WORKTYPE == 'public'){
        var wktypepvt = await _settings.wkbuttonpvt()
        await amdiMSG.client.sendMessage(amdiMSG.jid, wktypepvt, MessageType.buttonsMessage, {quoted: amdiMSG.data});
    }
}));
Amdi.operate({pattern: 'qasetwtpublic', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG) => { 
    await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.SUCPUB, MessageType.text);
    await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.RESTART, MessageType.text);
    await new Promise(r => setTimeout(r, 1200));
    await heroku.patch(baseURI + '/config-vars', { 
        body: { 
            ['WORK_TYPE']: "public"
        } 
    });
}));
Amdi.operate({pattern: 'qasetwtprivate', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG) => { 
    await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.SUCPVT, MessageType.text);
    await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.RESTART, MessageType.text);
    await new Promise(r => setTimeout(r, 1200));
    await heroku.patch(baseURI + '/config-vars', { 
        body: { 
            ['WORK_TYPE']: "private"
        } 
    });
}));
// ==============================

// ============Heroku settings=====================
Amdi.operate({pattern: 'settings', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG) => {
    var menu = await _settings.menu()
    await amdiMSG.client.sendMessage(amdiMSG.jid, menu, MessageType.listMessage, {quoted: amdiMSG.data});
}));

Amdi.operate({pattern: 'qaherokuset ?(.*)', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG, input) => {
    if (input[1] == 'bad') {
        var badbut = await _settings.badbutton()
        await amdiMSG.client.sendMessage(amdiMSG.jid, badbut, MessageType.buttonsMessage, {quoted: amdiMSG.data}); 
    }
    else if (input[1] == 'bug') {
        var bugbut = await _settings.bugbutton()
        await amdiMSG.client.sendMessage(amdiMSG.jid, bugbut, MessageType.buttonsMessage, {quoted: amdiMSG.data});
    }
    else if (input[1] == 'antilink') {
        var linkbut = await _settings.linkbutton()
        await amdiMSG.client.sendMessage(amdiMSG.jid, linkbut, MessageType.buttonsMessage, {quoted: amdiMSG.data});
    }
    else if (input[1] == 'amdichat') {
        var linkbut = await _settings.amdichat()
        await amdiMSG.client.sendMessage(amdiMSG.jid, linkbut, MessageType.buttonsMessage, {quoted: amdiMSG.data});
    }
    else if (input[1] == 'lang') {
        var langbut = await _settings.langbutton()
        await amdiMSG.client.sendMessage(amdiMSG.jid, langbut, MessageType.buttonsMessage, {quoted: amdiMSG.data});
    }
    else if (input[1] == 'wktype') {
        var langbut = await _settings.wktybutton()
        await amdiMSG.client.sendMessage(amdiMSG.jid, langbut, MessageType.buttonsMessage, {quoted: amdiMSG.data});
    }
    else if (input[1] == 'autostic') {
        var sticBut = await _settings.autoSticker()
        await amdiMSG.client.sendMessage(amdiMSG.jid, '*Auto Sticker is not released yet. Auto Sticker feature Coming soon..*', MessageType.text, {quoted: amdiMSG.data});
        // await amdiMSG.client.sendMessage(amdiMSG.jid, sticBut, MessageType.buttonsMessage, {quoted: amdiMSG.data});
    }
    else if (input[1] == 'dmblock') {
        var blockBut = await _settings.inboxBLOCK()
        await amdiMSG.client.sendMessage(amdiMSG.jid, blockBut, MessageType.buttonsMessage, {quoted: amdiMSG.data});
    }
}));

Amdi.operate({pattern: 'qasetherokubad ?(.*)', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG, input) => {
    if (input[1] == 'false') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '📴 *ANTIBAD disabled.*', MessageType.text);
    } else if (input[1] == 'true') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '🔛 *ANTIBAD enabled.*', MessageType.text);
    }
    await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.RESTART, MessageType.text);
    await new Promise(r => setTimeout(r, 1200));
    await heroku.patch(baseURI + '/config-vars', { 
        body: { 
            ['ANTIBAD']: input[1]
        } 
    });
}))

Amdi.operate({pattern: 'qasetherokubug ?(.*)', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG, input) => {
    if (input[1] == 'false') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '📴 *ANTIBUG disabled.*', MessageType.text);
    } else if (input[1] == 'true') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '🔛 *ANTIBUG enabled.*', MessageType.text);
    }
    await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.RESTART, MessageType.text);
    await new Promise(r => setTimeout(r, 1200));
    await heroku.patch(baseURI + '/config-vars', { 
        body: { 
            ['ANTIBUG']: input[1]
        } 
    });
}))

Amdi.operate({pattern: 'qasetherokulink ?(.*)', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG, input) => {
    if (input[1] == 'false') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '📴 *ANTILINK disabled.*', MessageType.text);
    } else if (input[1] == 'true') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '🔛 *ANTILINK enabled.*', MessageType.text);
    }
    await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.RESTART, MessageType.text);
    await new Promise(r => setTimeout(r, 1200));
    await heroku.patch(baseURI + '/config-vars', { 
        body: { 
            ['ANTILINK']: input[1]
        } 
    });
}))

Amdi.operate({pattern: 'qasetherokulang ?(.*)', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG, input) => {
    if (input[1] == 'SI') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '*Sinhala language setted.*', MessageType.text);
    } else if (input[1] == 'EN') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '*English language setted.*', MessageType.text);
    }
    await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.RESTART, MessageType.text);
    await new Promise(r => setTimeout(r, 1200));
    await heroku.patch(baseURI + '/config-vars', { 
        body: { 
            ['LANGUAGE']: input[1]
        } 
    });
}))

Amdi.operate({pattern: 'qasetherokuwkty ?(.*)', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG, input) => {
    if (input[1] == 'private') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '🛅 *Private mode activated!*', MessageType.text);
    } else if (input[1] == 'public') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '🛄 *Public mode activated!*', MessageType.text);
    }
    await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.RESTART, MessageType.text);
    await new Promise(r => setTimeout(r, 1200));
    await heroku.patch(baseURI + '/config-vars', { 
        body: { 
            ['WORK_TYPE']: input[1]
        } 
    });
}))

Amdi.operate({pattern: 'qasetherokuamdichat ?(.*)', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG, input) => {
    if (input[1] == 'false') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '📴 *AMDI_CHAT disabled.*', MessageType.text);
    } else if (input[1] == 'true') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '🔛 *AMDI_CHAT enabled.*', MessageType.text);
    }
    await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.RESTART, MessageType.text);
    await new Promise(r => setTimeout(r, 1200));
    await heroku.patch(baseURI + '/config-vars', { 
        body: { 
            ['AMDI_CHAT']: input[1]
        } 
    });
}))

Amdi.operate({pattern: 'qasetherokuautostic ?(.*)', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG, input) => {
    if (input[1] == 'false') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '📴 *AUTO STICKER disabled.*', MessageType.text);
    } else if (input[1] == 'true') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '🔛 *AUTO STICKER enabled.*', MessageType.text);
    }
    await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.RESTART, MessageType.text);
    await new Promise(r => setTimeout(r, 1200));
    await heroku.patch(baseURI + '/config-vars', { 
        body: { 
            ['AUTOSTIC']: input[1]
        } 
    });
}))

Amdi.operate({pattern: 'qasetherokudmblock ?(.*)', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (amdiMSG, input) => {
    if (input[1] == 'false') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '📴 *Inbox Blocker disabled.*', MessageType.text);
    } else if (input[1] == 'true') {
        await amdiMSG.client.sendMessage(amdiMSG.jid, '🔛 *Inbox Blocker enabled.*', MessageType.text);
    }
    await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.RESTART, MessageType.text);
    await new Promise(r => setTimeout(r, 1200));
    await heroku.patch(baseURI + '/config-vars', { 
        body: { 
            ['DM_BLOCK']: input[1]
        } 
    });
}))
// =========================================