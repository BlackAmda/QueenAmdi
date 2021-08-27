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

const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./queenamdi/');
const fs = require('fs');

async function queenamdi () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 40000;
    
    conn.on('🔄 connecting', async () => {
        console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold(' Amdi')}
${chalk.white.italic('Queen Amdi Sting session')}

${chalk.blue.italic('ℹ️  Whatsapp වෙත සම්බන්ධ වෙමින්... කරුණාකර රැඳී සිටින්න.')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('Queen Amdi session: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `AMDI_SESSION="${st}"`);
        }

        console.log(
            chalk.blue.bold('If you are installing locale, you can start the bot with node bot.js.')
        );
        process.exit(0);
    });

    await conn.connect();
}

queenamdi()
