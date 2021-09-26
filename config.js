/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './queenamdi.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'Queen Amdi 3.0.2v - Public Stable',
    SESSION: process.env.AMDI_SESSION === undefined ? '' : process.env.AMDI_SESSION,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.ibb.co/0h6pq4j/6fba2dec0129.jpg' : process.env.ALIVE_LOGO,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ANTIBAD: process.env.ANTIBAD === undefined ? 'false' : process.env.ANTIBAD,
    ANTIBUG: process.env.ANTIBUG === undefined ? 'false' : process.env.ANTIBUG,
    ANTILINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK, // Working in progress
    AUTO_BIO: process.env.AUTO_BIO === undefined ? 'false' : process.env.AUTO_BIO,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    BYE_LOGO: process.env.BYE_LOGO === undefined ? 'https://i.ibb.co/3vSHqHb/e5693cca4e3d.jpg' : process.env.BYE_LOGO,
    CAP: process.env.CAP === undefined ? 'ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᴮʸ Qᵘᵉᵉⁿ ᴬᵐᵈᶦ₂₀₂₁' : process.env.CAP,
    CCLEAR_JID: process.env.CCLEAR_JID === undefined ? 'default' : process.env.CCLEAR_JID,
    CHAT_BOT: process.env.CHAT_BOT === undefined ? 'true' : process.env.CHAT_BOT,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.ibb.co/0h6pq4j/6fba2dec0129.jpg' : process.env.GAN_IMAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    IMGBB: process.env.IMGBB === undefined ? 'e7970aa94fc2edd6376b247647a4bc45' : process.env.IMGBB,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    MENU: process.env.MENU === undefined ? 'panel' : process.env.MENU,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    PANEL_EMOJI: process.env.PANEL_EMOJI === undefined ? '📘/📖' : process.env.PANEL_EMOJI,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    RULES: process.env.RULES === undefined ? 'default' : process.env.RULES,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    SONG_TYPE: process.env.SONG_TYPE === undefined ? 'document' : process.env.SONG_TYPE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WELCOME_LOGO: process.env.WELCOME_LOGO === undefined ? 'https://i.ibb.co/d54sGdd/f2097d7ddc39.jpg' : process.env.WELCOME_LOGO,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE,
    YT_INFO: process.env.YT_INFO=== undefined ? 'true' : process.env.YT_INFO,
    BRANCH: 'launch',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './queenamdi.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    OWN: process.env.OWN === undefined ? '94757405652,0' : process.env.OWN,
    OWN2: process.env.OWN2 === undefined ? '94719077818,0' : process.env.OWN2,
    OWN3: process.env.OWN3 === undefined ? '94757672873,0' : process.env.OWN3,
    OWN4: process.env.OWN4 === undefined ? '94774976567,0' : process.env.OWN4,
    OWN5: process.env.OWN5 === undefined ? '94766426385,0' : process.env.OWN5,
    OWN6: process.env.OWN6 === undefined ? '94711870791,0' : process.env.OWN6,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    AMDANIWASA: "393475528094-1415817281",
    SUPPORT1: "94757405652-1631633729",
    SUPPORT2: "94757405652-1631905677",
    NAGRP: "972542559113-1376904403",
    RRBSEW: "94785435462-1625490851",
    RRDSEW: "94776785357-1626432386",
    RRESEW: "94776785357-1626521320",
    SEWSUPPORT: "94785435462-1627812354",
    SEWSUPPORT2: "94785435462-1628835469",
    SEWSUPPORT3: "94785435462-1628835633"
};