/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const QueenAmdi = require('queenamdi-public-1');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
let LOL = Config.WORKTYPE == 'public' ? false : true
const request = require('request');

const Language = require('../language');
const Lang = Language.getString('ttp');


Amdi.applyCMD({ pattern: 'plainttp ?(.*)', fromMe: LOL, desc: Lang.TTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data}, {quoted: message.data});
    var uri = encodeURI(match[1])
    var apikey = await QueenAmdi.api()
    var ttinullimage = await axios.get('https://api.lolhuman.xyz/api/ttp2?apikey=' + apikey.key +`&text=` + uri, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data})
}));


Amdi.applyCMD({ pattern: 'attp ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data}, {quoted: message.data});
    var uri = encodeURI(match[1]) /*හලෝ මෝඩ වේසිගේ පුතා.. උස්සන්න නේද ආවේ.. හාහා උස්සන් යන්න.. උබේ අම්මා වේසියෙක් බව තහවුරුයි..😂📢*/
    var ttinullimage = await axios.get('https://hardianto-chan.herokuapp.com/api/maker/attp?text=' + uri + '&apikey=hardianto', { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, {quoted: message.data}, { mimetype: Mimetype.webp, quoted: message.data })
}));


Amdi.applyCMD({ pattern: 'ttpwater ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await QueenAmdi.ttp(text, 'https://api.flamingtext.com/logo/Design-Water?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/wttp.png', async() => { 
          ffmpeg('/root/QueenAmdi/wttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data}, {quoted: message.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Water?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/wttp.png', async() => { 
          ffmpeg('/root/QueenAmdi/wttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      }
}));


Amdi.applyCMD({ pattern: 'ttppink ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await QueenAmdi.ttp(text, 'https://api.flamingtext.com/logo/Design-Style?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/http.png', async() => { 
          ffmpeg('/root/QueenAmdi/http.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data}, {quoted: message.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Style?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/http.png', async() => { 
          ffmpeg('/root/QueenAmdi/http.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      }
}));


Amdi.applyCMD({ pattern: 'ttpblack ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await QueenAmdi.ttp(text, 'https://api.flamingtext.com/logo/Design-Blackbird?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/bttp.png', async() => { 
          ffmpeg('/root/QueenAmdi/bttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data}, {quoted: message.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Blackbird?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/bttp.png', async() => { 
          ffmpeg('/root/QueenAmdi/bttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      }
}));


Amdi.applyCMD({ pattern: 'ttpf ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await QueenAmdi.ttp(text, 'https://api.flamingtext.com/logo/Design-Fluffy?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/gttp.png', async() => { 
          ffmpeg('/root/QueenAmdi/gttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data}, {quoted: message.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Fluffy?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/gttp.png', async() => { 
          ffmpeg('/root/QueenAmdi/gttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      }
}));


Amdi.applyCMD({ pattern: 'ttpsm ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await QueenAmdi.ttp(text, 'https://api.flamingtext.com/logo/Design-Smurfs?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/sttp.png', async() => { 
          ffmpeg('/root/QueenAmdi/sttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Smurfs?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/sttp.png', async() => { 
          ffmpeg('/root/QueenAmdi/sttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      }
}));

Amdi.applyCMD({ pattern: 'ttpelec ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await QueenAmdi.ttp(text, 'https://api.flamingtext.com/logo/Design-Electric?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/ettp.png', async() => { 
          ffmpeg('/root/QueenAmdi/ettp.png').videoFilters('chromakey=#FFFFFF:similarity=0.01').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Electric?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/ettp.png', async() => { 
          ffmpeg('/root/QueenAmdi/ettp.png').videoFilters('chromakey=#FFFFFF:similarity=0.01').save('af.png').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      }
}));


Amdi.applyCMD({ pattern: 'ttphigh ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await QueenAmdi.ttp(text, 'https://api.flamingtext.com/logo/Design-Highlight-Animation?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/ahttp.gif', async() => { 
          ffmpeg('/root/QueenAmdi/ahttp.gif').videoFilters('chromakey=black').save('af.gif').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Highlight-Animation?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/ahttp.gif', async() => { 
          ffmpeg('/root/QueenAmdi/ahttp.gif').videoFilters('chromakey=black').save('af.gif').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      }
}));


Amdi.applyCMD({ pattern: 'ttpmem ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await QueenAmdi.ttp(text, 'https://api.flamingtext.com/logo/Design-Memories-Animation?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/pttp.gif', async() => { 
          ffmpeg('/root/QueenAmdi/pttp.gif').videoFilters('chromakey=white').save('af.gif').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data});
        var ttinullimage = await QueenAmdi.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Memories-Animation?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/QueenAmdi/pttp.gif', async() => { 
          ffmpeg('/root/QueenAmdi/pttp.gif').videoFilters('chromakey=white').save('af.gif').on('end', async () => {
            ffmpeg('/root/QueenAmdi/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      }
}));