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
const {MessageType, Mimetype} = require('@blackamda/queenamdi-web-api');
let axios = require('axios');
let translatte = require('translatte');
let LOL = Build.WORKTYPE == 'public' ? false : true


Amdi.operate({on: 'text', fromMe: LOL,  deleteCommand: false}, (async (message, match) => { 
    if (message.message.startsWith('Amdi')) {        
        var unique_ident = message.client.user.jid.split('@')[0]      
        var finm = message.message.replace('Amdi', '').replace(' ', '')   
        var trmsg = ''
            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
            if ('text' in ceviri) {
                trmsg = ceviri.text
            }
        var uren = encodeURI(trmsg)
        await axios.get('http://api.brainshop.ai/get?bid=161530&key=M6z5b9BOiUhVxuQV&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
            var fins = ''                           
                ceviri = await translatte(response.data.cnt, {from: 'auto', to: Build.LANG});
                if ('text' in ceviri) {
                    fins = ceviri.text
                }
            await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
        })
    }
}));

Amdi.operate({on: 'text', fromMe: false, deleteCommand: false}, (async (message, input) => {
    if (Build.AMDI_CHAT == 'true' && ((!message.jid.includes('g.us')) || (message.jid.includes('g.us') && 
        (( message.mention !== false && message.mention.length !== 0 ) || message.reply_message !== false)))) {
        if (message.jid.includes('g.us') && (message.mention !== false && message.mention.length !== 0)) {
            message.mention.map(async (jid) => {
                if (message.client.user.jid.split('@')[0] === jid.split('@')[0]) {
                    var unique_ident = message.client.user.jid.split('@')[0]      
                    
                    var finm = message.message
                    var trmsg = ''

                        ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                        if ('text' in ceviri) {
                            trmsg = ceviri.text
                        }
                    var uren = encodeURI(trmsg)
                    await axios.get('http://api.brainshop.ai/get?bid=161530&key=M6z5b9BOiUhVxuQV&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                        var fins = ''                           
                        if (Build.LANG !== 'EN') {
                            ceviri = await translatte(response.data.cnt, {from: 'auto', to: Build.LANG});
                            if ('text' in ceviri) {
                                fins = ceviri.text
                            }
                        } else { fins = response.data.cnt }
                        await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                    })
                }
            })
        } else if (message.jid.includes('g.us') && message.reply_message !== false) {
            if (message.reply_message.jid.split('@')[0] === message.client.user.jid.split('@')[0]) {
                var unique_ident = message.client.user.jid.split('@')[0]      
                
                var finm = message.message
                var trmsg = ''
       
                    ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                    if ('text' in ceviri) {
                        trmsg = ceviri.text
                    }
          
                var uren = encodeURI(trmsg)
                await axios.get('http://api.brainshop.ai/get?bid=161530&key=M6z5b9BOiUhVxuQV&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                    var fins = ''                           
                    if (Build.LANG !== 'EN') {
                        ceviri = await translatte(response.data.cnt, {from: 'auto', to: Build.LANG});
                        if ('text' in ceviri) {
                            fins = ceviri.text
                        }
                    } else { fins = response.data.cnt }
                    await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                })
            }
        } else {
            var unique_ident = message.client.user.jid.split('@')[0]      
            
            var finm = message.message
        
            var trmsg = ''
                ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                if ('text' in ceviri) {
                    trmsg = ceviri.text
                }
            var uren = encodeURI(trmsg)
            await axios.get('http://api.brainshop.ai/get?bid=161530&key=M6z5b9BOiUhVxuQV&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                var fins = ''                           
                if (Build.LANG !== 'EN') {
                    ceviri = await translatte(response.data.cnt, {from: 'auto', to: Build.LANG});
                    if ('text' in ceviri) {
                        fins = ceviri.text
                    }
                } else { fins = response.data.cnt }
                await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
            })
        }
    }
}));