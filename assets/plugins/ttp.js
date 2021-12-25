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
const _amdi = QueenAmdi.misc
const { MessageType, Mimetype } = require('@blackamda/queenamdi-web-api');
const fs = require("fs")
const axios = require('axios');
const request = require('request');
const ffmpeg = require('fluent-ffmpeg');
let Work_Mode = Build.WORKTYPE == 'public' ? false : true

var NEED_WORD = ''
if (Build.LANG == 'SI') NEED_WORD = '*ඔබ වචන ඇතුළත් කළ යුතුය!*'
if (Build.LANG == 'EN') NEED_WORD = '*Please enter words!*'

var TTP_DESC = ''
if (Build.LANG == 'SI') TTP_DESC = 'විවිධ TTP ස්ටිකර් සාදන්න.'
if (Build.LANG == 'EN') TTP_DESC = 'Make custom TTP stickers.'

Amdi.operate({pattern: 'ttp ?(.*)', fromMe: Work_Mode, desc: TTP_DESC, dontAddCommandList: false, deleteCommand: true}, (async (amdiMSG, match) => {
  await QueenAmdi.amdi_setup()
    const txt = match[1]
    if (txt === '') return await amdiMSG.client.sendMessage(amdiMSG.jid, NEED_WORD, MessageType.text, {quoted: amdiMSG.data});

    await _amdi.ttpList( amdiMSG, txt )
}));


// ==================TTP LIST===================================
Amdi.operate({ pattern: 'attp ?(.*)', fromMe: Work_Mode, deleteCommand: false , dontAddCommandList: true}, (async (amdiMSG, match) => {
  await QueenAmdi.amdi_setup()
  if (match[1] === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,NEED_WORD, MessageType.text, {quoted: amdiMSG.data});
    var uri = encodeURI(match[1])
    var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
    await amdiMSG.client.sendMessage(amdiMSG.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp, quoted: amdiMSG.data })
}));


Amdi.operate({ pattern: 'qattpwater ?(.*)', fromMe: Work_Mode, deleteCommand: false , dontAddCommandList: true}, (async (amdiMSG, match) => {
  await QueenAmdi.amdi_setup()
  if (match[1] === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,NEED_WORD, MessageType.text,  {quoted: amdiMSG.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Water?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/wttp.png', async() => { 
          ffmpeg('/root/QueenAmdi/wttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await amdiMSG.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker,  {quoted: amdiMSG.data});
            })
          })
        })
}));


Amdi.operate({ pattern: 'qattppink ?(.*)', fromMe: Work_Mode, deleteCommand: false , dontAddCommandList: true}, (async (amdiMSG, match) => {
  await QueenAmdi.amdi_setup()
  if (match[1] === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,NEED_WORD, MessageType.text,  {quoted: amdiMSG.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Style?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/http.png', async() => { 
          ffmpeg('/root/QueenAmdi/http.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await amdiMSG.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker,  {quoted: amdiMSG.data});
            })
          })
        })
}));


Amdi.operate({ pattern: 'qattpblack ?(.*)', fromMe: Work_Mode, deleteCommand: false , dontAddCommandList: true}, (async (amdiMSG, match) => {
  await QueenAmdi.amdi_setup()
  if (match[1] === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,NEED_WORD, MessageType.text,  {quoted: amdiMSG.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Blackbird?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/bttp.png', async() => { 
          ffmpeg('/root/QueenAmdi/bttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await amdiMSG.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker,  {quoted: amdiMSG.data});
            })
          })
        })
}));


Amdi.operate({ pattern: 'qattpf ?(.*)', fromMe: Work_Mode, deleteCommand: false , dontAddCommandList: true}, (async (amdiMSG, match) => {
  await QueenAmdi.amdi_setup()
  if (match[1] === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,NEED_WORD, MessageType.text,  {quoted: amdiMSG.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Fluffy?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/gttp.png', async() => { 
          ffmpeg('/root/QueenAmdi/gttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await amdiMSG.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker,  {quoted: amdiMSG.data});
            })
          })
        })
}));


Amdi.operate({ pattern: 'qattpsm ?(.*)', fromMe: Work_Mode, deleteCommand: false , dontAddCommandList: true}, (async (amdiMSG, match) => {
  await QueenAmdi.amdi_setup()
  if (match[1] === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,NEED_WORD, MessageType.text, {quoted: amdiMSG.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Smurfs?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/sttp.png', async() => { 
          ffmpeg('/root/QueenAmdi/sttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await amdiMSG.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: amdiMSG.data});
            })
          })
        })
}));

Amdi.operate({ pattern: 'qattpelec ?(.*)', fromMe: Work_Mode, deleteCommand: false , dontAddCommandList: true}, (async (amdiMSG, match) => {
  await QueenAmdi.amdi_setup()
  if (match[1] === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,NEED_WORD, MessageType.text, {quoted: amdiMSG.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Electric?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/ettp.png', async() => { 
          ffmpeg('/root/QueenAmdi/ettp.png').videoFilters('chromakey=#FFFFFF:similarity=0.01').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await amdiMSG.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: amdiMSG.data});
            })
          })
        })
}));


Amdi.operate({ pattern: 'qattphigh ?(.*)', fromMe: Work_Mode, deleteCommand: false , dontAddCommandList: true}, (async (amdiMSG, match) => {
  await QueenAmdi.amdi_setup()
  if (match[1] === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,NEED_WORD, MessageType.text, {quoted: amdiMSG.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Highlight-Animation?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/ahttp.gif', async() => { 
          ffmpeg('/root/QueenAmdi/ahttp.gif').videoFilters('chromakey=black').save('af.gif').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
              await amdiMSG.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker, {quoted: amdiMSG.data});
            })
          })
        })
}));


Amdi.operate({ pattern: 'qattpmem ?(.*)', fromMe: Work_Mode, deleteCommand: false , dontAddCommandList: true}, (async (amdiMSG, match) => {
  await QueenAmdi.amdi_setup()
  if (match[1] === '') return await amdiMSG.client.sendMessage(amdiMSG.jid,NEED_WORD, MessageType.text, {quoted: amdiMSG.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Memories-Animation?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/pttp.gif', async() => { 
          ffmpeg('/root/QueenAmdi/pttp.gif').videoFilters('chromakey=white').save('af.gif').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
              await amdiMSG.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker, {quoted: amdiMSG.data});
            })
          })
        })
}));