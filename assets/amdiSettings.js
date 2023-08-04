/**
░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░░███╗██████╗░██╗
██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░████║██╔══██╗██║
██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔████╔██║██║░░██║██║
╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚██╔╝██║██║░░██║██║
░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚═╝░██║██████╔╝██║
░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═════╝░╚═╝
 __  __       _ _   _       ____             _          
|  \/  |_   _| | |_(_)     |  _ \  _____   _(_) ___ ___ 
| |\/| | | | | | __| |_____| | | |/ _ \ \ / / |/ __/ _ \
| |  | | |_| | | |_| |_____| |_| |  __/\ V /| | (_|  __/
|_|  |_|\__,_|_|\__|_|     |____/ \___| \_/ |_|\___\___|
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.8
* @file  amdiSettings.js - QueenAmdi config var exports

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('amdiSettings.env')) require('dotenv').config({ path: './amdiSettings.env' });
const DATABASE_URL = process.env.DATABASE_URL.includes("postgres") ? process.env.DATABASE_URL : "./queen_amdi.db"

module.exports = {
    VERSION: 'Queen Amdi 4.0.8v - Multi-Device',
    DATABASE_URL: DATABASE_URL,
    DATABASE:
        DATABASE_URL === './queen_amdi.db'
            ? new Sequelize({ dialect: 'sqlite', storage: DATABASE_URL, logging: false })
            : new Sequelize(DATABASE_URL, {
                dialect: 'postgres',
                ssl: true,
                protocol: 'postgres',
                dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false } },
                logging: false
            }),
    LANGUAGE: process.env.LANGUAGE || 'EN',
    HEROKU_APP: process.env.HEROKU_APP_NAME || '',
    isHEROKU: process.env.HEROKU || '',
    TZ: process.env.TZ || 'Asia/Colombo'
}