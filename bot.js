/* Copyright (C) 2020 Black Amda.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

QueenAmdi - Black Amda
*/

const fs = require("fs");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const axios = require('axios');
const config = require('./config');
const Heroku = require('heroku-client');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./queenamdi');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');

const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;


// Sql
const QueenAmdiDB = config.DATABASE.define('QueenAmdi', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

const plugindb = require('./plugins/sql/plugin');

// just a convenience. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function queenAmdi () {
    await config.DATABASE.sync();
    var StrSes_Db = await QueenAmdiDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
    const conn = new WAConnection();
    const Session = new StringSession();
    conn.version = [2,2123,8]
    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        await axios.get('https://gist.githubusercontent.com/BlackAmda/c3877acdcdc041d77907d590d4ac1a2d/raw/').then(async (ann) => {
            const { infoen, infosi} = ann.data.announcements          
            if (infoen !== '' && config.LANG == 'EN') {
                while (getGMTh == 21 && getGMTm == 31) { 
                    return conn.sendMessage(conn.user.jid, '[ ```🔔Queen Amdi Announcements🔔``` ]\n\n' + infoen.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infosi !== '' && config.LANG == 'EN') {
                while (getGMTh == 21 && getGMTm == 31) { 
                    return conn.sendMessage(conn.user.jid, '[ ```🔔Queen Amdi නිවේදන🔔``` ]\n\n' + infosi.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
        })
    }, 50000);

    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    conn.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('✅ පිවිසුම් තොරතුරු update කරන ලදි!')
        );

        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await QueenAmdiDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold('Amdi')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}

${chalk.blue.italic('ℹ️ WhatsApp වෙත සම්බන්ධ වෙමින් පවතී... කරුණාකර රැඳී සිටින්න.')}`);
    });
    

    conn.on('open', async () => {
        console.log(
            chalk.green.bold('✅ පුරනය වීම සාර්ථකයි!')
        );

        console.log(
            chalk.blueBright.italic('⬇️ බාහිර plugins ස්ථාපනය කිරීම...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('⬇️  Plugins ස්ථාපනය කිරීම...')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        console.log(
            chalk.green.bold('✅ Plugins ස්ථාපනය කර ඇත! Bot දැන් ඔබට භාවිතා කළ හැකිය.')
        );
        await new Promise(r => setTimeout(r, 1100));

        if (config.WORKTYPE == 'public') {
            if (config.LANG == 'TR' || config.LANG == 'AZ') {

                if (conn.user.jid === '@s.whatsapp.net') {

                    await conn.sendMessage(conn.user.jid, '```🛡️ Blacklist අනාවරණය විය!``` \n```පරිශීලක:``` \n```හේතුව:``` ', MessageType.text)

                    await new Promise(r => setTimeout(r, 1700));

                    console.log('🛡️ Blacklist Detected 🛡️')

                    await heroku.get(baseURI + '/formation').then(async (formation) => {
                        forID = formation[0].id;
                        await heroku.patch(baseURI + '/formation/' + forID, {
                            body: {
                                quantity: 0
                            }
                        });
                    })
                }
                else {
                    await conn.sendMessage(conn.user.jid, '*Queen ඇම්ඩි public ආකාරයට ක්‍රියාකිරිම ආරම්භ විය.👸*\n\n_කරුණාකර මෙහි command උත්සාහ නොකරන්න. මෙය ඔබගේ ලොග් අංකයයි._\n_ඔබට ඕනෑම චැට් එකක විධාන උත්සාහ කළ හැකිය :)_\n\n_ඔබේ command list එක ලබාගැනීමට_ *.panel* _command එක භාවිතා කරන්න._\n\n_ඔබේ bot public ක්‍රියාත්මක වේ. වෙනස් කිරීමට_ ```.setvar WORK_TYPE=private``` _විධානය භාවිතා කරන්න._\n\n*Queen Amdi සඳහා එකතු කළ හැකි නව අදහස් මෙහි comment කරන්න:*\nhttps://tinyurl.com/Queen-Amdi-Ideas\n\n*Updates:* https://gist.github.com/BlackAmda/890b6b31fcb8d376d6a68afcb7359324\n\n *Queen ඇම්ඩි භාවිතා කිරීම ගැන ස්තූතියි 💌*', MessageType.text);
                }
            }
            else {

                if (conn.user.jid === '@s.whatsapp.net') {

                    await conn.sendMessage(conn.user.jid, '```🛡️ Blacklist Detected!``` \n```User:```  \n```Reason:``` ', MessageType.text)

                    await new Promise(r => setTimeout(r, 1800));

                    console.log('🛡️ Blacklist Detected 🛡️')
                    await heroku.get(baseURI + '/formation').then(async (formation) => {
                        forID = formation[0].id;
                        await heroku.patch(baseURI + '/formation/' + forID, {
                            body: {
                                quantity: 0
                            }
                        });
                    })
                }
                else {
                    await conn.sendMessage(conn.user.jid, '*Queen ඇම්ඩි public ආකාරයට ක්‍රියාකිරිම ආරම්භ විය.👸*\n\n_කරුණාකර මෙහි command උත්සාහ නොකරන්න. මෙය ඔබගේ ලොග් අංකයයි._\n_ඔබට ඕනෑම චැට් එකක විධාන උත්සාහ කළ හැකිය :)_\n\n_ඔබේ command list එක ලබාගැනීමට_ *.panel* _command එක භාවිතා කරන්න._\n\n_ඔබේ bot public ක්‍රියාත්මක වේ. වෙනස් කිරීමට_ ```.setvar WORK_TYPE=private``` _විධානය භාවිතා කරන්න._\n\n*Queen Amdi සඳහා එකතු කළ හැකි නව අදහස් මෙහි comment කරන්න:*\nhttps://tinyurl.com/Queen-Amdi-Ideas\n\n*Updates:* https://gist.github.com/BlackAmda/890b6b31fcb8d376d6a68afcb7359324\n\n *Queen ඇම්ඩි භාවිතා කිරීම ගැන ස්තූතියි 💌*', MessageType.text);
                }

            }
        }
        else if (config.WORKTYPE == 'private') {
            if (config.LANG == 'TR' || config.LANG == 'AZ') {

                if (conn.user.jid === '@s.whatsapp.net') {

                    await conn.sendMessage(conn.user.jid, '```🛡️ Blacklist Detected!``` \n ```පරිශීලක:``` \n```හේතුව:``` ', MessageType.text)

                    await new Promise(r => setTimeout(r, 1800));

                    console.log('🛡️ Blacklist Detected 🛡️')
                    await heroku.get(baseURI + '/formation').then(async (formation) => {
                        forID = formation[0].id;
                        await heroku.patch(baseURI + '/formation/' + forID, {
                            body: {
                                quantity: 0
                            }
                        });
                    })
                }
                else {

                await conn.sendMessage(conn.user.jid, '*Queen ඇම්ඩි private ආකාරයට ක්‍රියාකිරිම ආරම්භ විය.👸*\n\n_කරුණාකර මෙහි command උත්සාහ නොකරන්න. මෙය ඔබගේ ලොග් අංකයයි._\n_ඔබට ඕනෑම චැට් එකක විධාන උත්සාහ කළ හැකිය :)_\n\n_ඔබේ command list එක ලබාගැනීමට_ *.panel* _command එක භාවිතා කරන්න._\n\n_ඔබේ bot private ක්‍රියාත්මක වේ. වෙනස් කිරීමට_ ```.setvar WORK_TYPE=public``` _විධානය භාවිතා කරන්න._\n\n*Queen Amdi සඳහා එකතු කළ හැකි නව අදහස් මෙහි comment කරන්න:*\nhttps://tinyurl.com/Queen-Amdi-Ideas\n\n*Updates:* https://gist.github.com/BlackAmda/890b6b31fcb8d376d6a68afcb7359324\n\n *Queen ඇම්ඩි භාවිතා කිරීම ගැන ස්තූතියි 💌*', MessageType.text);
                }
            }
            else {

                if (conn.user.jid === '@s.whatsapp.net') {

                    await conn.sendMessage(conn.user.jid, '```🛡️ Blacklist Detected!``` \n```User:```  \n```Reason:``` ', MessageType.text)
   
                    await new Promise(r => setTimeout(r, 1800));

                    console.log('🛡️ Blacklist Detected 🛡️')
                    await heroku.get(baseURI + '/formation').then(async (formation) => {
                        forID = formation[0].id;
                        await heroku.patch(baseURI + '/formation/' + forID, {
                            body: {
                                quantity: 0
                            }
                        });
                    })
                }
                else {

                    await conn.sendMessage(conn.user.jid, '*Queen ඇම්ඩි private ආකාරයට ක්‍රියාකිරිම ආරම්භ විය.👸*\n\n_කරුණාකර මෙහි command උත්සාහ නොකරන්න. මෙය ඔබගේ ලොග් අංකයයි._\n_ඔබට ඕනෑම චැට් එකක විධාන උත්සාහ කළ හැකිය :)_\n\n_ඔබේ command list එක ලබාගැනීමට_ *.panel* _command එක භාවිතා කරන්න._\n\n_ඔබේ bot private ක්‍රියාත්මක වේ. වෙනස් කිරීමට_ ```.setvar WORK_TYPE=public``` _විධානය භාවිතා කරන්න._\n\n*Queen Amdi සඳහා එකතු කළ හැකි නව අදහස් මෙහි comment කරන්න:*\nhttps://tinyurl.com/Queen-Amdi-Ideas\n\n*Updates:* https://gist.github.com/BlackAmda/890b6b31fcb8d376d6a68afcb7359324\n\n *Queen ඇම්ඩි භාවිතා කිරීම ගැන ස්තූතියි 💌*', MessageType.text);
                }
            }
        }
        else {
            return console.log('Wrong WORK_TYPE key! Please use “private” or “public”')
        }
    });

    
    
    conn.on('message-new', async msg => {
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (config.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }

        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // see you message
            var blogo = await axios.get(config.BYE_LOGO, {responseType: 'arraybuffer'})
            var gb = await getMessage(msg.key.remoteJid, 'goodbye')
            
            if (gb !== false) {
                await conn.sendMessage(msg.key.remoteJid, Buffer.from (blogo.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message});
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // Welcome message
            var wlogo = await axios.get(config.WELCOME_LOGO, {responseType: 'arraybuffer'})
            var gb = await getMessage(msg.key.remoteJid)
            
            if (gb !== false) {
                await conn.sendMessage(msg.key.remoteJid, Buffer.from (wlogo.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message});
            }
            return;
        }

        // ==================== Blocked Chats ====================
        if (config.BLOCKCHAT !== false) {     
            var abc = config.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT == '393475528094-1415817281') {     
            var sup = config.SUPPORT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT2 == '96176912958-1458298055') {     
            var tsup = config.SUPPORT2.split(',');                            
            if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT3 == '972542559113-1376904403') {     
            var nsup = config.SUPPORT3.split(',');                            
            if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        // ==================== End Blocked Chats ====================

        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
    
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                        
                        var match = text_msg.match(command.pattern);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
                        if (msg.key.fromMe) {
                            var vers = conn.user.phone.wa_version.split('.')[2]
                            try {
                                if (command.deleteCommand && vers < 12) { 
                                    await whats.delete() 
                                 }
                                 else { 
                                     await command.function(whats, match);
                                 }
                             } catch (err) { await command.function(whats, match) } }

                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                                await conn.sendMessage(conn.user.jid, '*-- දෝෂ වාර්තාව [QUEEN_ඇම්ඩි] --*\n\n' + 
                                    '\n*Bot දෝෂයක් සිදුවී ඇත!\n*'+
                                    '\n_මෙම දෝෂ logs ඔබගේ අංකය හෝ ප්‍රති පාර්ශ්වයේ අංකය අඩංගු විය හැකිය. කරුණාකර එය සමග සැලකිලිමත් වන්න!_\n' +
                                    '\n_උදව් සඳහා ඔබට අපගේ whatsapp support කණ්ඩායමට ලිවිය හැකිය._\n' +
                                    '\n_මෙම පණිවිඩය ඔබගේ අංකයට ගොස් තිබිය යුතුය (සුරකින ලද පණිවිඩ)_\n\n' +
                                    '\n_https://chat.whatsapp.com/Hkm79J2sapyLGD0rvRTfkq ඔබට එය මෙම group යොමු කළ හැකිය._\n\n' +
                                    '*සිදු වූ දෝෂය:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false});
                            } else {
                                await conn.sendMessage(conn.user.jid, '*-- බොට් වාර්තාව [QUEEN AMDI] --*\n' + 
                                    '\n*බොට් නිසි ලෙස ක්රියා කරයි.*\n'+
                                    '\n_Message logs ඔබගේ අංකය හෝ ප්‍රති පාර්ශ්වයේ අංකය අඩංගු විය හැකිය. කරුණාකර එය සමග සැලකිලිමත් වන්න!_\n' +
                                    '\n_උදව් සඳහා ඔබට අපගේ whatsapp support කණ්ඩායමට ලිවිය හැකිය._\n' +
                                    '\n_(සුරකින ලද පණිවිඩ)_\n\n' +
                                    '\n_ඔබේ bot සඳහා යම් උදව්වක් අවශ්‍ය නම්, https://chat.whatsapp.com/Hkm79J2sapyLGD0rvRTfkq_\n\n' +
                                    '*Report:* ```' + error + '```\n\n'
                                    , MessageType.text);
                            }
                        }
                    }
                }
            }
        )
    });

    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Refreshing your old version string...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

queenAmdi();
