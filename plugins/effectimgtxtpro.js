/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const os = require('os');
const qatxtpro = require('queenamdi-textlogo-1.0.3'); 
const axios = require('axios');
const request = require('request');
var code = { cd: 'L3Jvb3QvZ2VudDg3ODk1NjUyLw==', pay: '' }    
var bufcode = Buffer.from(code.cd, 'base64')
var utfbuff = bufcode.toString('utf-8')
code.pay = utfbuff
if (os.userInfo().homedir !== code.pay) return;

// LIST
const Language = require('../language');
const Lang = Language.getString('effects');
let LOL = Config.WORKTYPE == 'public' ? false : true

Amdi.applyCMD({pattern: 'demon ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/demon2.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/demon2.jpg'), MessageType.image, { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'rust ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/rust.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/rust.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'transformer ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/transformer.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/transformer.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'fiction ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/fiction.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/fiction.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'berry ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/berry.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/berry.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'thunder ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/thunder.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/thunder.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'magma ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/magma.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/magma.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'stone ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/stone.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/stone.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'glitch ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    qatxtpro.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenAmdi/glitch.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/glitch.jpg'), MessageType.image, { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

Amdi.applyCMD({pattern: '2glitch ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    qatxtpro.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenAmdi/t2gl.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/t2gl.jpg'), MessageType.image, { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));


Amdi.applyCMD({pattern: 'harry ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/harry.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/harry.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'cracked ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/cracked.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/cracked.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'glass ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/glass.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/glass.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'glossy ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/glossy.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/glossy.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'beach ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-3d-realistic-text-effect-on-the-beach-online-1018.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/beach.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/beach.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'watercolour ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/watercolour.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/watercolour.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'devil ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/devil.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/devil.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'underwater ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/underwater.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/underwater.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'bear ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/bear.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/bear.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'graffiti ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/1graffiti.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/1graffiti.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'xmas ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/xmas.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/xmas.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'future ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/future.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/future.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'cloud ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/cloud.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/cloud.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'luxury ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/luxury.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/luxury.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'leaves ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/natural-leaves-text-effect-931.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/leaves.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/leaves.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'gneon ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/green-neon-text-effect-874.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/gneon.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/gneon.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'holo ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/holographic-3d-text-effect-975.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/holo.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/holo.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));


Amdi.applyCMD({pattern: 'sand ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        
    qatxtpro.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html", `${match[1]}` ).then(async (data) => { 
        try {
            var download = async(uri, filename, callback) => {
                await request.head(uri, async(err, res, body) => {
                    await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            await download(`${data}`, '/root/QueenAmdi/sand.jpg', async() => {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenAmdi/sand.jpg'), MessageType.image,  { caption: Config.CAP, quoted: message.data, thumbnail: thumb })
            })
        } catch(err) { 
            console.log(err)
        }
    });
}));




const thumb = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/wgALCAI8AjwBAREA/8QAGgABAAMBAQEAAAAAAAAAAAAAAAMEBQIBBv/aAAgBAQAAAADFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNoe+ZIFufNAAAAAAAAACVr5ss+boKdfvdq5c93N0OKuhnQgAAAAAAAG5h3pVrE28LvYpe6dCbrI3KFvDAAAAAAAANzD36PdnE28LvWpSX8fzVxd3J8gAAAAAAAATX8y97xfrVK1qzF7BeoXafOhSrAAAAAAAAAda2dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS6FqQAAPIKVLwAAAAAAAdbWt6AAAK+DSAAAAAAAd/SXAAAAHz+YAAAAAAB9DpAAAAHnzFQAAAAAALn04AAAAVPlwAAAAAA+h0gAAAAfLVQAAAAAB9bMAAAADCyQAAAAAD37H0AAAAGRhgAAAAAHv2HQAAAAMbFAAAAAAH1FsAAAAHzucAAAAAANjbAAAADn5HgAAAAAASfVyAAAADHxAAAAAAAX/pAAAACr8xyAAAAAABo/QdAAAAp/ORgAAAAAAE2xoyAAAKuTm+AAAAAAAA9m7AADyKMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAevAa+VyAJb+WB1q5AAAAAAAa/Gfdo8L9/EmlqW6/lqPzytt4t+tHeqxXr2CAAAAAAGnHdytTEvS28fWp+2+IbNXq1h7MVPUzPNSClrfPgAAAAABoR6GJt4elBezr9C5J5YoI7uTseZGzW9uRY21hgAAAAABNfq3KVXvV9o2JMuZPRv82K1vOvwQ3es7Q6y4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqxF1x3FNGkR98WKduHh1L5Cljlikg9tV5efJoYgAAAAEvskvEFqJ4875K1lLUlhsc9yeR+8V7MsfnnryuAAAAATc9R+eyRpY/fee4ZfO4E/PvHcUsbnrmTl17xyAAAAAAAAAAAB//EADUQAAICAQMCAwYFAwQDAAAAAAECAwQFABESExUUIVAiMTJAU2MGECMzNTA2QSA0gKAkQmD/2gAIAQEAAQwA/wCnBVgNmwsIbjo4TY7G0gJwZA3NlAOyEglbKH+hQNXmy2o2fWYqw1WiEKcfXK07Vp1lUAmzO1mdpXAByf8AD19U70lMSBFVtVMXLYjErMscZwoZT0bSOzwvHP0pBxZ8K4iZ0mWTSYWUgc5o0e3TlqOFlA21F+6msrUktywhNlU4XkhMNlJGdGjco42anSluORGAFOFB3WO0jPNC8ErRyLsy4YvHzSwjaXESis00rrHqrVlty8Ihrso34i0nUs1pKspjlGx9Tyf8PX/JZ7NqolSOLktGlchuROYmVc6ALqkaxLFMVOynYl2L8yx5Tt4zBiV/N9RfuprPyMBCgYhcO7JkIwD5ZhQuRfbUMEqYdUrAdSLF3opVkVVDfiBBvDJt54DyinOpZXlkZpGLNjonjxJaADqjFXg/MAcs2hNOGRwOp6nk/wCHr/lYdqWIiNYbax0luxcj/UlZc9/vU1iVL4qdVG5KsG4lSGkU1MDwk8n1F+6mvxB8UGsT/JQ6zX8g2laSxhVNdmEnirW+3Xl3sNY3C2GkJwP7M+j7zqkzWMM0ULFZTatKxUzSgztZ4qJ2kK+pVbBrTdQIrk5yUjYwxEM3Jy2wGquVlrxCJkWRJMvMzLwRY0vZDxqKDCqHEsVxU7KdimacAF4I3e5dluODIQF1SuNTZisaOZczJLGyNDGRTyT1IuCRI2reTe1CY3ijGqlyao5aI+Xez7xWj5WrUtuTnKQSmalRQqwxAXLZtyK7RqhrWZasnOJtj3snzNaMtbuy3HBlI29XUgMCRuEzFeOMxpU4palimm5wxCJf+U8Neadtoo2fUODmbzlkVNJg4B8ckja7LU+5rstT7muy1Pua7LU+5rstT7muy1Pua7LU+5rstT7muy1Pua7LU+5rstT7muy1Pua7LU+5rstT7muy1Pua7LU+5rstT7mjhKp9xkGpMCu36c5BnxVqHchOopBB2I2PpyIzsFQFmpYZQA9rzKIqKFRQq/LWqUFofqJ7V7HS1Dy+OP0yONpZFRAWbH49KabnZpfmWAYEMARlMb4cmaEbxel4el0IutIP1Pm2UOpVgCMjTNOwVH7fpOLreJtqGG6fO5Ot4mowA9v0nBw8KhkI8/nsjD0LsqAeXpFNOnUiT5/PptPE/pA0o2UD5/8AEA/ThPpMTcokb5/8QN+wvpOLl6tCI/5+ezcvO9xB8vSMDY2d4CfnpJFijaRjss0hmmeRvf6RDK0MySJ8VeZLEKyofL5zOW9lFZD5+lYu+akvBz+kCGAIO4+ayF1KcO/kZHdpHLud29Lx2TartHLu0UUqTIHjYMvzF7IxVFKjZ5Z5pLEpkkbdvTa9qas/KJyNVs3E+wnUoYp4phvHIrfKE7e/U+RqwfFKGNvMyygrCOkpJJ3J3PqAJB3B20tyynwzyDXcbf1313G39d9dxt/XfXcbf1313G39d9dxt/XfXcbf1313G39d9dxt/XfXcbf1313G39d9dxt/XfXcbf1313G39d9dxt/XfXcbf1313G39d9HIWz77Emnmlk/ckdv+J/v/AKFXGVLMYKWHLOvF2Uf06yRSTqsz8EuY2CCn4iKVnH+uMKZFDnZXxlY1JJ4Z2cek4apKJksFR0srSmE81niOlFFJNIEiUs3ZrfHfZN5YnhkKSKVb8osTblQPxVRh60tWadJk4mb959VqNi0N4k9mbE24kLcA4iiaaVY0G7NibaIzFF2rVpbTlIl3PQk8R0Nv1DiLagkou0GOs2IhJGoKpj7MkzxrHubFCzWXlJH7OrP9vx6AJIAG5TD23XkVVdWak1VgJU21HG8rhI1LMuGtsNyEXVmpNVYCZNtKrOwVQSww1srvsgNaN4sLYSRSrek4WWQ3FjLtwys0vjZo+o/CiBSxL2thz8ZY6vU6z8sgFuYqO1ts+sTCJry8huuWuStbaJHZUwlmWZZI5GLDgZbfTGstOakMVauSgxl2WO2iM7MmXh8Pe5x+zqzI9jCJKrsGxZFShLaYazMRjurKnlrKyvXowQh254WR/GrHzbhlbky23hjcxpiJ3tQTRTsXDDixGrH9vx6wUCtLJMw31avTTzs4kZVpOcjjZYpvafH2xTnaRkLaksWp5DIHl1KWsYIvOCXwMKl5Z21ZvTzTs4kZRDO9jCSvId29Jwv8gusr/IzajHiPw+UTzbU48PgFR/JtYNgt4g6yaMmQmBGvw+DynO3kjiO+rn3Z+M9SKUea0I2luwqo1nnDW0Qe/Dt1qliqdZQ+Ho1qo98KC/RqMfNszN1bzKD5YX+QXWW/kptfh/3z6k/dbVj+349YFwVni/zLG0UrIw2OFHRpzzv5Lhq0dieSSVQwsZix1WWHiiPLLNgnkm+PBENBPHv5upRyrDY0wRgptx6VVsNVsLKo31avUbCOxrt1qN6Sk5IHJPH47n1PCHqXr0l2QFhxTUUjRSLIh2ZsnUsIvi6xZ4MxBE5VYTHDflqzOrVo2Q1soog6FuLqxjJ1K6t4StxeSRpZGdzu1C14SyJCCVv2vF2TIAQuNyIpo6OhYSOZJGdvfQu1qiAtAzS37la0pZICstXJ1aqbR1mDS2ab2Y5BWIRsrUaEQmsxjSwYLZmrjgGyNGfZ7FUmS7kzPEIIU6UVC41KYuByV7+PLGQVC0iZeGWs0dqNjqraepP1I/dJkMfMepLVYyRZiBonSeEhbTQvOWroUj/6NaKXdUUbl2ggYxpEsrStE4BjjMbJVldA2yqDDIJukUIdakzAEKN1VmYKoJZqcyqTsrajhklG6KW10XM3SUBnNOYAkBWENV5q7yICSYJOr0uBLvVlRC2ysIoXmJCDfXQeKnMWCkaSFpaScQNSwSRbcwNnRo3KONmdGjIDDYwRGaUICBozQIeMddXWWONoutCCFZGXbkNtFGCqxGwSrK6BtlUNG6SGNlIc0pgD5KWSN5N+CltPVlRCxCkaHmfLVqskUSlDu0cTytxjUsxpzf8AqofUlaSNOZ4lYoJJtyoHGSFoqJ5AakVRDEwRgfQK0gisxu3uli6E+0gLLLHEaqzRo6auTRpOdq6tqCdpr1csFGg7NZDk+1CQL9n2eTLbETbwwRoY3YUZ9jtqtuYLAT46W/UfbfUfnSn1SKhJ/YLsLfT36MMSaO5x44e6LfwVj37abft6e/aPcUZeXwoi2Vjmf3SyGWVpG99NlExViFDo0blHUqwUw0XLjY2vhrn/ABOhStVDjbVyZEst/wCOhNaczXFZ1BYWhE+8deNGryNxtSA7NU+OT8qQVHaeQbpDNXd3jKSLqsrRyzK3k1Qkdfz1W/bsD/Eu5pQcfg8+3H37Tf7St6FHamiTgr+zLNJM28jljHamjUKr+yHYScwxDAkHcHz5sX58jykszSoVd9wGYIV3PFHZGDIxVmtzsCDJsI5XiblG2xMrmXq8tnksSyrxdgRFK8LbxsVMlmaRSrP7Oo7EsS8UchZZpJiDIxOuoqVDGp9r8luTooUSbh7EsiFZHLiOzLEnFH9l5HkADsW0lqaNQqv5bnfffze1M6FWfcBmUMASArMhJUkflzbp8N/Z0ZZC7OWPJXZd+JI0rMoIUkaimkhJ6bbaksSyrxdyVLsVVSSR/wDE/wD/xAA2EAEAAgECAwQIBgEEAwAAAAABABECITESQVFQYXGBAxAiQHKRobETMkJSweEwgKDR8GBi8f/aAAgBAQANPwD/AGcGXOp3n9zrw/3Dof3/AIMqMa5TIb1Xp25jyZlyJ7P2mZrcdl5w5V/cGm+UCwxN4/p3Y7ZGz6uImJk5ZZbG0OVaTFpGG+TsQ/TX9wlXoXDFy4XVnNdiftr+5yTZO1PZ+3qw54jfnDL2mzaOBfzYOSfKXd3rMS77xr1cRMrU67TKxOukQfpM8RW633mLd8RGxln8xd2ekFH6Eu749bg0+Zr2p7P29WQXkG1m8MryvJqp+Gfdi5B8pdVWsyKrvX1cRKy/iW/ZnCfaYAVi06cp04mVYZrLPs+rCwpp3shycmZahmuvadVWU6axbohsPKYouOPOYt8V2+EHJHyh+rZhtibHqyr83KInOXdu8a9o3jvi7M63DQA0IdLgV7POczkzrcNgNDtgdTrHcEplflP9VHcToas7qJ8U+KfFPinxT4p8U+KfFPinxT4p8U+KfFPinxT4p/7E64a/SHZ7oBP2Gx4w2A935ZGiTlkcvHs3JoCJrl/B707jHc/b/XZmZp3HviUjMtcXu6dlYe1l/wAe/Y+1j2V6R+h/19/uzweyTA9/yxT5f/eyQ9/t7JcR9/1ft2TicL5e/wCGIee/ZL7WP8+/YlsyV7JxbJkfL311z/g7Lzde56x2T3vL8uP8zJtXsz64x5nvPLE5eMezuZyZ1NSdz7r0x1Z15x7S+Jnj7j4zvb/0rgcQVpBT/G75dJpW1P8AgUt6ExxU25dlOKDcsbvyjyJ04ocn1uxk0xCnk7zifvP3OhDfhbmTRMS32iBbbU4uGr5w1/MR2vIJg1k3oec6jZ6qx+8dgnTLLWOzuMeROjlHZ3GOgE6OWsOKx8OyjF9m9JZ7N6bTIs+dEu7uYhf2fVgcVTDShq2YUi7zLOvrK1Tepm8KLfnMzi00pmNcVO/JuOQHhPSAidZke03q0Sn2b0mP7Wra3YaXlrowalY/eYFHjL9kGqJjoZP0Y41QxbKXSYl2mtjMCju6y/ZBqiGORfXsrhZZ9pibeDfqyArxb9WWCEcrPBmhfzmPpLfnHHhucQvgTHHXziWecriy/wC+M9HmGXgb/wATA4Zwv2ln2J7P8y2Vj940zFpj/BMKodrYNBVzLHpXOXf0g0kTKuysdzqTLGjLozL82LN9irmP5cTl6sWxhzNYHsmIXffNeK+cNB5x55TJtZSISgBmTZXJmSrC7zGKXmsQ4kd4Xx43+aH6bKltYvTpOprOnWZFZEddQq5ldmBpXLnNkeZPKOhjiFGPSch/2NmTQQ0yzzWl7gnMuzyjtxZGN+Fxapjti5AvgRaAmOqY5CnlLrSdMW4FvDkNeMxyALI8jWY78OQ141DVVoPFi41liibvP1HpMrVANDnMtkbHzhuRB+cd15HNh+r0i2/LaXWWC3wvLymRZ3ky2esy/LxZBfhcGqrWGriZDkeUC2vlMfzGOQp4+vB4PS92W/8AXlKuiXSY5DXjUGlxyGvGob5LQecfSFIiOjzjd5Lo68uwcchZdiP5jqMc+GssrsrwlHDlkqJWlExyAMSgLjnd+crPhBpW+XlcNnXJ+syzxGvOcJtvV6z8PO/lDLB+84NMRpS9YlXSv1h6R4/lp/MvH+fV+Jl9iOWPDf7uf0noyvS+Bt89pk3PSYuFvJSG4z0ycI9DnPwj7sTJruufpyyVE5VDBxwMfZ1rQg75Xkj5x9HuabpPws/t6vRa11eR/wB6T03suWWdg8nbrMfR5j8p+FlPw/5IOXFX7r/4qfin2ZWX37C6IJ9YbXyhsINeFy7vv9V3fO476GsW0hskd6AuVT3zezSXegEdHvjyAD1b1uQ2ORM8rz8DY9ZtYNfOLftaozcEGvCF1ffDYQa8Lm9x30LfOZFPfEry9V3Xf6sil6xKfCZFPeR3Nx8pd1yJjsdP/Cv/2Q=="