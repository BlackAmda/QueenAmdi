/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');

async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

const ADD = '94757405652,94716292396'

var kickmsg = ''
if (Config.LANG == 'SI') kickmsg = '_*⛔ නරක වචන bot අයිතිකරු විසින් තහනම් කර ඇත.*_\n' + Config.CAP
if (Config.LANG == 'EN') kickmsg = '_*⛔ Bad words are forbidden by the bot owner.*_\n' + Config.CAP

Amdi.applyCMD({on: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => {    
    if (Config.ANTIBAD == 'true') {
        let getword1bad = new RegExp('fuck')
        let getword2bad = new RegExp('f u c k')
        let getword3bad = new RegExp('Fuck')
        let getword4bad = new RegExp('F u c k')
        let getword5bad = new RegExp('Huththa')
        let getword6bad = new RegExp('huththa')
        let getword7bad = new RegExp('Hutta')
        let getword8bad = new RegExp('hutta')
        let getword9bad = new RegExp('huththi')
        let getword10bad = new RegExp('Huththi')
        let getword11bad = new RegExp('hutti')
        let getword12bad = new RegExp('Hutti')
        let getword13bad = new RegExp('Baduwa')
        let getword14bad = new RegExp('baduwa')
        let getword15bad = new RegExp('paka ')
        let getword16bad = new RegExp('Paka ')
        let getword17bad = new RegExp('Pakaya')
        let getword18bad = new RegExp('pakaya')
        let getword19bad = new RegExp('Pakichchi')
        let getword20bad = new RegExp('pakichchi')
        let getword21bad = new RegExp('wesawa')
        let getword22bad = new RegExp('Wesawa')
        let getword23bad = new RegExp('Wesi ')
        let getword24bad = new RegExp('wesi ')
        let getword25bad = new RegExp('Payya')
        let getword26bad = new RegExp('payya')
        let getword27bad = new RegExp('Wesige')
        let getword28bad = new RegExp('wesige')
        let getword29bad = new RegExp('hukanawa')
        let getword30bad = new RegExp('Hukanawa')
        let getword31bad = new RegExp('Hukanna')
        let getword32bad = new RegExp('hukanna')
        let getword33bad = new RegExp('Huka ')
        let getword34bad = new RegExp('huka ')
        let getword35bad = new RegExp('Hikuna')
        let getword36bad = new RegExp('hikuna')
        let getword37bad = new RegExp('Hikila')
        let getword38bad = new RegExp('hikila')
        let getword39bad = new RegExp('kariya')
        let getword40bad = new RegExp('Kariya')
        let getword41bad = new RegExp('Kari ')
        let getword42bad = new RegExp('kari ')
        let getword43bad = new RegExp('Hukana')
        let getword44bad = new RegExp('hukana')
        let getword45bad = new RegExp('හුත්තා')
        let getword46bad = new RegExp('හුත්ති')
        let getword47bad = new RegExp('හුකන්නා')
        let getword48bad = new RegExp('හුකනවා')
        let getword49bad = new RegExp('හිකුනා')
        let getword50bad = new RegExp('හිකිලා')
        let getword51bad = new RegExp('හුත්')
        let getword52bad = new RegExp('හුකා')
        let getword53bad = new RegExp('කැරියා')
        let getword54bad = new RegExp('කැරි')
        let getword55bad = new RegExp('පකයා')
        let getword56bad = new RegExp('පක')
        let getword57bad = new RegExp('පකා')
        let getword58bad = new RegExp('පක්')
        let getword59bad = new RegExp('ෆක්')
        let getword60bad = new RegExp('පින්නයා')
        let getword61bad = new RegExp('pinnaya')
        let getword62bad = new RegExp('Pinnaya')
        let getword63bad = new RegExp('බඩුව')
        let getword64bad = new RegExp('වේසාවා')
        let getword65bad = new RegExp('වේසි')
        let getword66bad = new RegExp('පයිය')
        let getword67bad = new RegExp('පයියා')
        let getword68bad = new RegExp('esawa ')
        let getword69bad = new RegExp(' esi ')
        let getword70bad = new RegExp('uddika ')
        let getword71bad = new RegExp('Uddika ')
        let getword72bad = new RegExp('උද්දික ')
        let getword73bad = new RegExp('ඒසාවා ')
        let getword74bad = new RegExp('ඒසි')
        let getword75bad = new RegExp('Esawa ')
        let getword76bad = new RegExp('Esi ')
        let getword77bad = new RegExp('හුකන්නා')
        let getword78bad = new RegExp('හුත්තිගෙ')
        let getword79bad = new RegExp('Huththige')
        let getword80bad = new RegExp('huththige')
        let getword81bad = new RegExp('වේසිගෙ')
        let getword82bad = new RegExp('ponnaya')
        let getword83bad = new RegExp('ponnay')
        let getword84bad = new RegExp('ponnayage')
        let getword85bad = new RegExp('ponnayek')
        let getword86bad = new RegExp('ponnayekne')
        let getword87bad = new RegExp('ponnayekge')
        let getword88bad = new RegExp('පොන්නයා')
        let getword89bad = new RegExp('පොන්නයෙක්')
        let getword90bad = new RegExp('පොන්නයෙක්නෙ')
        let getword91bad = new RegExp('පොන්නයෙක්ගෙ')
        let getword92bad = new RegExp('vesi ')
        let getword93bad = new RegExp('vesawa')
        let getword94bad = new RegExp('vesiyak')
        let getword95bad = new RegExp('wesiyak')
        let getword96bad = new RegExp('Wesiyak')
        let getword97bad = new RegExp('Vesi ')
        let getword98bad = new RegExp('Vesawa')
        let getword99bad = new RegExp('වේසියක්ගෙ')
        let getword100bad = new RegExp('Huththiyak')
        let getword101bad = new RegExp('huththiyak')
        let getword102bad = new RegExp('payyek')
        let getword103bad = new RegExp('Payyek')
        let getword104bad = new RegExp('pakayek')
        let getword105bad = new RegExp('Pakayek')
        let getword106bad = new RegExp('Huththek')
        let getword107bad = new RegExp('huththek')
        let getword108bad = new RegExp('හුත්තියක්')
        let getword109bad = new RegExp('පයියෙක්')
        let getword110bad = new RegExp('වේසියක්')
        let getword111bad = new RegExp('බඩුවක්')
        let getword112bad = new RegExp('baduwak')
        let getword113bad = new RegExp('Baduwak')
        let getword114bad = new RegExp('pinnayek')
        let getword115bad = new RegExp('Pinnayek')
        let getword116bad = new RegExp('පින්නයෙක්')
        let getword117bad = new RegExp('Huththage')
        let getword118bad = new RegExp('huththage')
        let getword119bad = new RegExp('හුත්තගෙ')
        let getword120bad = new RegExp('Huththata')
        let getword121bad = new RegExp('හුත්තට')
        let getword122bad = new RegExp('huththata')
        let getword123bad = new RegExp('pakata')
        let getword124bad = new RegExp('Pakata')
        let getword125bad = new RegExp('පකට')
        let getword126bad = new RegExp('පකාට')
        let getword127bad = new RegExp('ponnayata')
        let getword128bad = new RegExp('Ponnayata')
        let getword129bad = new RegExp('Huththata')
        let getword130bad = new RegExp('huththata')
        let getword131bad = new RegExp('හුත්තට')
        let getword132bad = new RegExp('පොන්නයට')
        let getword133bad = new RegExp('පයියට')
        let getword134bad = new RegExp('payyata')
        let getword135bad = new RegExp('Payyata')
        let getword136bad = new RegExp('vesita')
        let getword137bad = new RegExp('Vesita')
        let getword138bad = new RegExp('wesita')
        let getword139bad = new RegExp('Wesita')
        let getword140bad = new RegExp('වේසිට')
        let getword141bad = new RegExp('vesiyek')
        let getword142bad = new RegExp('Vesiyek')
        let getword143bad = new RegExp('Wesiyek')
        let getword144bad = new RegExp('vesiyek')
        let getword145bad = new RegExp('වේසියෙක්')
        let getword146bad = new RegExp('හුත්තියෙක්')
        let getword147bad = new RegExp('huththiyek')
        let getword148bad = new RegExp('Huththiyek')
        let getword149bad = new RegExp('huttiyek')
        let getword150bad = new RegExp('Huttiyek')
        let getword151bad = new RegExp('huttek')
        let getword152bad = new RegExp('Huttek')
        let getword153bad = new RegExp('ponni')
        let getword154bad = new RegExp('Ponni')
        let getword155bad = new RegExp('පොන්නි')
        let getword156bad = new RegExp('ponniyak')
        let getword157bad = new RegExp('Ponniyak')
        let getword158bad = new RegExp('Ponniyek')
        let getword159bad = new RegExp('ponniyek')
        let getword160bad = new RegExp('Bacic')
        let getword161bad = new RegExp('becic')
        let getword162bad = new RegExp('becige')
        let getword163bad = new RegExp('Basige')
        let getword164bad = new RegExp('Bacige')
        let getword165bad = new RegExp('besige')
        let getword166bad = new RegExp('hukaam')
        let getword167bad = new RegExp('Hukaam')
        let getword168bad = new RegExp('Hukaham')
        let getword169bad = new RegExp('Hukahan')
        let getword170bad = new RegExp('hukahan')
        let getword171bad = new RegExp('hukaham')
        let getword172bad = new RegExp('hukapu')
        let getword173bad = new RegExp('Hukapu')
        let getword174bad = new RegExp('හුකාම්')
        let getword175bad = new RegExp('හුකහම්')
        let getword176bad = new RegExp('pakeer')
        let getword177bad = new RegExp('fakeer')
        let getword178bad = new RegExp('පකීර්')
        let getword179bad = new RegExp('හුකහන්')
        let getword180bad = new RegExp('ෆකීර්')
        let getword181bad = new RegExp('පිත්තම්')
        let getword182bad = new RegExp('කල්ලතෝනි')
        let getword183bad = new RegExp('මරිමොංගල්')
        let getword184bad = new RegExp('සිපයියා')
        let getword185bad = new RegExp('පිම්පි')
        let getword186bad = new RegExp('වඳ')
        let getword187bad = new RegExp('පීචන්')
        let getword188bad = new RegExp('කැරිය')
        let getword189bad = new RegExp('ලෙස්බියන්')
        let getword190bad = new RegExp('හොරහුත්ති')
        let getword191bad = new RegExp('නාට්ටාමි')
        let getword192bad = new RegExp('බැල්ලි')
        let getword193bad = new RegExp('පක')
        let getword194bad = new RegExp('ඇටදෙක')
        let getword195bad = new RegExp('මන්දමානසික')
        let getword196bad = new RegExp('කණ්ඩම්')
        let getword197bad = new RegExp('කොණ්ඩම්')
        let getword198bad = new RegExp('පීචන්')
        let getword199bad = new RegExp('පකෝ')
        let getword200bad = new RegExp('කනවැන්දුමා')
        let getword201bad = new RegExp('මෑඇටේ')
        let getword202bad = new RegExp('මෑමල')
        let getword203bad = new RegExp('අවජාතක')
        let getword204bad = new RegExp('බලුජානෙ')
        let getword205bad = new RegExp('හුකන්නා')
        let getword206bad = new RegExp('බඩුව')
        let getword207bad = new RegExp('ගොම්බඩුව')
        let getword208bad = new RegExp('පොන්නහුකන්නා')
        let getword209bad = new RegExp('කැරිහුත්ති')
        let getword210bad = new RegExp('පොට්ටහුත්ති')
        let getword211bad = new RegExp('පොට්ටවේසි')
        let getword212bad = new RegExp('ෆක්')
        let getword213bad = new RegExp('වඳහුත්ති')
        let getword214bad = new RegExp('ලෙඩබැල්ලි')
        let getword215bad = new RegExp('වේසබඩුව')
        let getword216bad = new RegExp('පිත්තම්')
        let getword217bad = new RegExp('piththam')
        let getword218bad = new RegExp('Piththam')
        let getword219bad = new RegExp('marimongal')
        let getword220bad = new RegExp('Marimongal')
        let getword221bad = new RegExp('pimpi')
        let getword222bad = new RegExp('Pimpi')
        let getword223bad = new RegExp('pichan')
        let getword224bad = new RegExp('Pichan')
        let getword225bad = new RegExp('kariya')
        let getword226bad = new RegExp('Kariya')
        let getword227bad = new RegExp('හොරහුත්ති')
        let getword228bad = new RegExp('horahuththi')
        let getword229bad = new RegExp('Horahuththi')
        let getword230bad = new RegExp('nattami')
        let getword231bad = new RegExp('Nattami')
        let getword232bad = new RegExp('paka ')
        let getword233bad = new RegExp('Paka ')
        let getword234bad = new RegExp('hukaham')
        let getword235bad = new RegExp('Hukaham')
        let getword236bad = new RegExp('mandamanasika')
        let getword237bad = new RegExp('Mandamanasika')
        let getword238bad = new RegExp('kandam')
        let getword239bad = new RegExp('Kandam')
        let getword240bad = new RegExp('kondam')
        let getword241bad = new RegExp('Kondam')
        let getword242bad = new RegExp('pichan')
        let getword243bad = new RegExp('Pichan')
        let getword244bad = new RegExp('pako ')
        let getword245bad = new RegExp('Pako ')
        let getword246bad = new RegExp('kanawanduma')
        let getword247bad = new RegExp('Kanawanduma')
        let getword248bad = new RegExp('ma ate ')
        let getword249bad = new RegExp('Ma ate ')
        let getword250bad = new RegExp('ma mfdfsgggala ')
        let getword251bad = new RegExp('Ma maggddsdla')
        let getword252bad = new RegExp('awajathaka')
        let getword253bad = new RegExp('Awajathaka')
        let getword254bad = new RegExp('balujane')
        let getword255bad = new RegExp('Balujane')
        let getword256bad = new RegExp('hukanna')
        let getword257bad = new RegExp('Hukanna')
        let getword258bad = new RegExp('gonbaduwa')
        let getword259bad = new RegExp('Gonbaduwa')
        let getword260bad = new RegExp('ponnahukanna')
        let getword261bad = new RegExp('Ponnahukanna')
        let getword262bad = new RegExp('karihuththu')
        let getword263bad = new RegExp('Karihuththi')
        let getword264bad = new RegExp('pottahuththi')
        let getword265bad = new RegExp('Pottahuththi')
        let getword266bad = new RegExp('pottawesi')
        let getword267bad = new RegExp('Pottawesi')
        let getword268bad = new RegExp('kbgigihogkgkgggjvuug')
        let getword269bad = new RegExp('ffhhufffufjjffjjjfjjjifjffhhhfhfh')
        let getword270bad = new RegExp('wadahuththi')
        let getword271bad = new RegExp('Wadahuththi')
        let getword272bad = new RegExp('ledaballi')
        let getword273bad = new RegExp('Ledaballi')
        let getword274bad = new RegExp('wesabaduwa')
        let getword275bad = new RegExp('Wesabaduwa')
        let getword276bad = new RegExp('pinnayek')
        let getword277bad = new RegExp('Pinnayek')
        let getword278bad = new RegExp('හුත්තෝ')
        let getword279bad = new RegExp('huththo')
        let getword280bad = new RegExp('Huththo')
        let getword281bad = new RegExp('hutto')
        let getword282bad = new RegExp('Hutto')
        let getword283bad = new RegExp('පකෝ')
        let getword284bad = new RegExp('pako')
        let getword285bad = new RegExp('Pako ')
        let getword286bad = new RegExp('පයියො')
        let getword287bad = new RegExp('payyo')
        let getword288bad = new RegExp('Payyo')
        let getword289bad = new RegExp('කැරියෝ')
        let getword290bad = new RegExp('kariyo')
        let getword291bad = new RegExp('Kariyo')
        let getword292bad = new RegExp('puthcfsdfghjjo ')
        let getword293bad = new RegExp('පුvghjiiiiiතෝ ')
        let getword294bad = new RegExp('හුකන්නො ')
        let getword295bad = new RegExp('hukanno')
        let getword296bad = new RegExp('Hukanno')
        let getword297bad = new RegExp('keriyo')
        let getword298bad = new RegExp('Keriyo')
        let getword299bad = new RegExp('esawo ')
        let getword300bad = new RegExp('Esawo ')
        let getword301bad = new RegExp('esavo ')
        let getword302bad = new RegExp('Esavo ')
        let getword303bad = new RegExp('https://chat')
        let getword304bad = new RegExp('hutho ')
        let getword305bad = new RegExp('Hutho ')
        let getword306bad = new RegExp('pamka')
        let getword307bad = new RegExp('Pamka')
        let getword308bad = new RegExp('Humkapan')
        let getword309bad = new RegExp('humkapan')
        let getword310bad = new RegExp('humtha')
        let getword311bad = new RegExp('Humtha')
        let getword312bad = new RegExp('Humtho')
        let getword313bad = new RegExp('humtho')
        let getword314bad = new RegExp('Pamko')
        let getword315bad = new RegExp('pamko')
        let getword316bad = new RegExp('kamriya')
        let getword317bad = new RegExp('Kamriya')
        let getword318bad = new RegExp('wemsi')
        let getword319bad = new RegExp('Wemsi')
        let getword320bad = new RegExp('pussy')
        let getword321bad = new RegExp('piss')
        let getword322bad = new RegExp('xnxx')
        let getword323bad = new RegExp('Piss ')
        let getword324bad = new RegExp('Pussy')
        let getword325bad = new RegExp('vulva')
        let getword326bad = new RegExp('Vulva')
        let getword327bad = new RegExp('penis')


        if (getword1bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        } 
        else if (getword2bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (getword3bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        else if (getword4bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        else if (getword5bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (getword6bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (getword7bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (getword8bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (getword9bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
         else if (getword10bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword11bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword12bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword13bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword14bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword15bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword16bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword17bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword18bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword19bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword20bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword21bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword22bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword23bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword24bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword25bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword26bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword27bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword28bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword29bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }     
        else if (getword30bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword31bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword32bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword33bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword34bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword35bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword36bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword37bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword38bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword39bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword40bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword41bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword42bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword43bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword44bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword45bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword46bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword47bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword48bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword49bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword50bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword51bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword52bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword53bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword54bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword55bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword56bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword57bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword58bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword59bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword60bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword61bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword62bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword63bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword64bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword65bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword66bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword67bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword68bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword69bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword70bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword71bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword72bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword73bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword74bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword75bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword76bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword77bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword78bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword79bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword80bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword81bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword82bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword83bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword84bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword85bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword86bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword87bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword88bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword89bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword90bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword91bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword92bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword93bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword94bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword95bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword96bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword97bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword98bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword99bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword100bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword101bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword102bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword103bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword104bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword105bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword106bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword107bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword108bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword109bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword110bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword111bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword112bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword113bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword114bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword115bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword116bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword117bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword118bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword119bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword120bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword121bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword122bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword123bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword124bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword125bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword126bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword127bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword128bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword129bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword130bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword131bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword132bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword133bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword134bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword135bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword136bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword137bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword138bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword139bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword140bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword141bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword142bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword143bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword144bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword145bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword146bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword147bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword148bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword149bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword150bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword151bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword152bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword153bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword154bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword155bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword156bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword157bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword158bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword159bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword160bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword161bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword162bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword163bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword164bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword165bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword166bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword167bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword168bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword169bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword170bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword171bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword172bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword173bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword174bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword175bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword176bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword177bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword178bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword179bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword180bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword181bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword182bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword183bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword184bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword185bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword186bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword187bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword188bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword189bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword190bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword191bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword192bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword193bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword194bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword195bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword196bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword197bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword198bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword199bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword200bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword201bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword202bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword203bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword204bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword205bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword206bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword207bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword208bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword209bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword210bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword211bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword212bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword213bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword214bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword215bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword216bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword217bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword218bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword219bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword220bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword221bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword222bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword223bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword224bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword225bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword226bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword227bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword228bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword229bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword230bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword231bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword232bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword233bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword234bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword235bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword236bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword237bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword238bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword239bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword240bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword241bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword242bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword243bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword244bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword245bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword246bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword247bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword248bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword249bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword250bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword251bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword252bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword253bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword254bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword255bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword256bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword257bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword258bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword259bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword260bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword261bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword262bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword263bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword264bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword265bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword266bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword267bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword268bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword269bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword270bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword271bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword272bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword273bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword274bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword275bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword276bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword277bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword278bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword279bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword280bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword281bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword282bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword283bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword284bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword285bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword286bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword287bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword288bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword289bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword290bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword291bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword292bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword293bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword294bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword295bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword296bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword297bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword298bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword299bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword300bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword301bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword302bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword303bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,SEw, MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'\n    *3*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'\n    *2*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'\n    *1*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'\n    *Bye, Bye!*', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword303bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword304bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword305bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword306bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword307bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword308bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword309bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword310bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword311bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword312bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword313bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword314bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword315bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword316bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword317bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword318bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword319bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword320bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword321bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword322bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword323bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword324bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword325bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword326bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        else if (getword327bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }    
    }
}))