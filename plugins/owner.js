const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😈💕DEVIL ALPHA💕😈═════╗*\n           \n*DEVIL-ALPHA*\n\n*owner MHMD MUKRIM- https://wa.me/qr/P3UWE4GQZKQUL1*\n* *\n🔰WHATSAPP SUPPORT GROUP :- *https://chat.whatsapp.com/JZ2v7BKXJJdBSTpREta0KW            *\n*╚══════😈😈💕😈😈═════╝*\n\n*▷CREATOR: MHMD MUKRIM*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n😈💕═DEVIL-ALPHA OWNER MHMD MUKRIM═💕😈*\n\n*💘 https://github.com/mhmdmukrim/QueenAmdi*\n*     *\nMY BOT DEVOLOPER*\n\n*⚜https://github.com/mhmdmukrim/mhmdmukrim*    *\n\n⚜WHATSAPP CHAT GROUP LINK 2:- https://chat.whatsapp.com/JZ2v7BKXJJdBSTpREta0KW*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😈💕DEVIL-ALPHA💕😈═════╗*\n           \n*⚜═DEVIL ALPHA═⚜*\n\n*owner MHMD MUKRIM - https://wa.me/qr/P3UWE4GQZKQUL1*\n* *\n🔰WHATSAPP CHAT GROUP: https://chat.whatsapp.com/JZ2v7BKXJJdBSTpREta0KW*            *\n*╚══════😈😈💕😈😈═════╝*\n\n*▷CREATOR: MHMD MUKRIM*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n😈💕═DEVIL-ALPHA OWNER MHMD MUKRIM═💕😈*\n\n*💘 https://github.com/mhmdmukrim/QueenAmdi*\n*     *\n💓MY BOT DEVOLOPER*\n\n*⚜https://github.com/mhmdmukrim/mhmdmukrim*    *\n\n⚜WHATSAPP CHAT GROUP LINK 2:- https://chat.whatsapp.com/JZ2v7BKXJJdBSTpREta0KW*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }
