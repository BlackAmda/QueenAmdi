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
const Heroku = require('heroku-client');
const {MessageType} = require('@blackamda/queenamdi-web-api');
const got = require('got');
const fs = require('fs');
const Db = require('./sql/plugin');

const Language = require('../language');
const Lang = Language.getString('_plugin');
const NLang = Language.getString('updater');

const heroku = new Heroku({
    token: Build.HEROKU.API_KEY
});
let baseURI = '/apps/' + Build.HEROKU.APP_NAME;

Amdi.operate(
    { pattern: 'install ?(.*)', fromMe: true, dontAddCommandList: true, deleteCommand: true }, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()

    const pluginURL = input[1]
    if (pluginURL === '') return await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.NEED_URL + '.install plugin_link',MessageType.text, {quoted: amdiMSG.data});
    try {
        var url = new URL(pluginURL);
    } catch {
        return await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.INVALID_URL,MessageType.text, {quoted: amdiMSG.data});
    }

    if (pluginURL.includes('BlackAmda') || pluginURL.includes('SinhalayaCreator') || pluginURL.includes('Dinaaofficial')) {
        if (url.host === 'gist.github.com') {
            url.host = 'gist.githubusercontent.com';
            url = url.toString() + '/raw'
        } else {
            url = url.toString()
        }

        var response = await got(url);
        if (response.statusCode == 200) {

            var plugin_name = response.body.match(/operate\({.*pattern: ["'](.*)["'].*}/);
            if (plugin_name.length >= 1) {
                plugin_name = "__" + plugin_name[1];
            } else {
                plugin_name = "__" + Math.random().toString(36).substring(8);
            }

            fs.writeFileSync('./assets/plugins/' + plugin_name + '.js', response.body);
            try {
                require('./' + plugin_name);
            } catch (e) {
                fs.unlinkSync('./' + plugin_name);
                return await amdiMSG.sendMessage(Lang.INVALID_PLUGIN + ' ```' + e + '```');
            }

            await Db.installPlugin(url, plugin_name);
            await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.INSTALLED, MessageType.text);
        }
    } else {
        return await amdiMSG.client.sendMessage(amdiMSG.jid, '❌ Unofficial plugin detected!',MessageType.text, {quoted: amdiMSG.data});
    }
}));


Amdi.operate(
    { pattern: 'plugin', fromMe: true, deleteCommand: false, dontAddCommandList: true }, (async (amdiMSG) => {
    await QueenAmdi.amdi_setup()

    var mesaj = Lang.INSTALLED_FROM_REMOTE;
    var plugins = await Db.PluginDB.findAll();
    if (plugins.length < 1) {
        return await amdiMSG.sendMessage(Lang.NO_PLUGIN);
    } else {
        plugins.map(
            (plugin) => {
                mesaj += plugin.dataValues.name + ': ' + plugin.dataValues.url + '\n\n';
            }
        );
    return await amdiMSG.client.sendMessage(amdiMSG.jid, mesaj, MessageType.text);
    }
}));


Amdi.operate(
    { pattern: 'remove(?: |$)(.*)', fromMe: true, dontAddCommandList: true }, (async (amdiMSG, input) => {
    await QueenAmdi.amdi_setup()

    if (input[1] === '') return await amdiMSG.sendMessage(Lang.NEED_PLUGIN);
    if (!input[1].startsWith('__')) input[1] = '__' + input[1];
    var plugin = await Db.PluginDB.findAll({ where: {name: input[1]} });
    if (plugin.length < 1) {
        return await amdiMSG.sendMessage(amdiMSG.jid, Lang.NOT_FOUND_PLUGIN, MessageType.text);
    } else {
        await plugin[0].destroy();
        delete require.cache[require.resolve('./' + input[1] + '.js')]
        fs.unlinkSync('./assets/plugins/' + input[1] + '.js');
        await amdiMSG.client.sendMessage(amdiMSG.jid, Lang.DELETED, MessageType.text);
        
        await new Promise(r => setTimeout(r, 1000));
    
        await amdiMSG.sendMessage(NLang.AFTER_UPDATE);

        console.log(baseURI);
        await heroku.delete(baseURI + '/dynos').catch(async (error) => {
            await amdiMSG.sendMessage(error.message);

        });
    }
}));