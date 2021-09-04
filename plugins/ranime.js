/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('anime');
let LOL = Config.WORKTYPE == 'public' ? false : true


Amdi.applyCMD({pattern: 'ranime ?(.*)', fromMe: LOL, desc: Lang.AN,  deleteCommand: false}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/FwPP04q/images.jpg";
    r_text[1] = "https://i.ibb.co/GH2tWJ4/images-1.jpg";
    r_text[2] = "https://i.ibb.co/Mf79pVH/download.jpg";
    r_text[3] = "https://i.ibb.co/b11BDWH/images-2.jpg";
    r_text[4] = "https://i.ibb.co/7v1m94x/images-3.jpg";
    r_text[5] = "https://i.ibb.co/vdKJxNX/images-4.jpg";
    r_text[6] = "https://i.ibb.co/cvKvyzR/images-5.jpg";
    r_text[7] = "https://i.ibb.co/WWRt8vZ/images-6.jpg";
    r_text[8] = "https://i.ibb.co/m8Xg7Gj/images-7.jpg";
    r_text[9] = "https://i.ibb.co/FDYQHzB/images-8.jpg";
    r_text[10] = "https://i.ibb.co/fFTNXcy/images-9.jpg";
    r_text[11] = "https://i.ibb.co/rygwb0Q/images-10.jpg";
    r_text[12] = "https://i.ibb.co/ts8y9rC/images-11.jpg";
    r_text[13] = "https://i.ibb.co/VMHd02c/images-12.jpg";
    r_text[14] = "https://i.ibb.co/D1j3Np6/images-13.jpg";
    r_text[15] = "https://i.ibb.co/qWnhqVf/images-14.jpg";
    r_text[16] = "https://i.ibb.co/J7tr09N/images-15.jpg";
    r_text[17] = "https://i.ibb.co/NVhyQ1V/images-16.jpg";
    r_text[18] = "https://i.ibb.co/PcV78Mv/images-17.jpg";
    r_text[19] = "https://i.ibb.co/hYFY5PZ/images-18.jpg";
    r_text[20] = "https://i.ibb.co/n0vd5yR/images-19.jpg";
    r_text[21] = "https://i.ibb.co/hybc9KX/images-20.jpg";
    r_text[22] = "https://i.ibb.co/6JW0sL7/images-21.jpg";
    r_text[23] = "https://i.ibb.co/8MX592D/images-22.jpg";
    r_text[24] = "https://i.ibb.co/gPtrHPW/images-23.jpg";
    r_text[25] = "https://i.ibb.co/mGtWXyW/images-24.jpg";
    r_text[26] = "https://i.ibb.co/HD4rrbn/images-25.jpg";
    r_text[27] = "https://i.ibb.co/8mG4Xht/images-26.jpg";
    r_text[28] = "https://i.ibb.co/yF8qzgQ/images-27.jpg";
    r_text[29] = "https://i.ibb.co/vvhTtL9/images-28.jpg";
    r_text[30] = "https://i.ibb.co/x8WZS1G/images-29.jpg";
    r_text[31] = "https://i.ibb.co/hsb9c1N/images-30.jpg";
    r_text[32] = "https://i.ibb.co/tQ2r1d1/images-31.jpg";
    r_text[33] = "https://i.ibb.co/5Mr70MY/images-32.jpg";
    r_text[34] = "https://i.ibb.co/340nk6r/images-33.jpg";
    r_text[35] = "https://i.ibb.co/3yWYZ9X/images-34.jpg";
    r_text[36] = "https://i.ibb.co/59G5Gpc/images-35.jpg";
    r_text[37] = "https://i.ibb.co/j48QYXt/images-36.jpg";
    r_text[38] = "https://i.ibb.co/Nx2FHGB/images-37.jpg";
    r_text[39] = "https://i.ibb.co/7tc4Hph/images-38.jpg";
    r_text[40] = "https://i.ibb.co/jkKc78B/images-39.jpg";
    r_text[41] = "https://i.ibb.co/RTqRWn7/images-40.jpg";
    r_text[42] = "https://i.ibb.co/kS6LW3q/images.jpg";
    r_text[43] = "https://i.ibb.co/THdY0MS/images-1.jpg";
    r_text[44] = "https://i.ibb.co/n0P7KVt/images-2.jpg";
    r_text[45] = "https://i.ibb.co/MnZn5Tx/images-3.jpg";
    r_text[46] = "https://i.ibb.co/SVwMXrG/images-4.jpg";
    r_text[47] = "https://i.ibb.co/2jZb1mc/images-5.jpg";
    r_text[48] = "https://i.ibb.co/sPhWTxD/images-7.jpg";
    r_text[49] = "https://i.ibb.co/pjcFyzr/images-6.jpg";
    r_text[50] = "https://i.ibb.co/XFSmcfj/images-9.jpg";
    r_text[51] = "https://i.ibb.co/TM8Qxt9/images-8.jpg";
    r_text[52] = "https://i.ibb.co/f9RQ30f/images-10.jpg";
    r_text[53] = "https://i.ibb.co/9ZRBQHP/images-11.jpg";
    r_text[54] = "https://i.ibb.co/Sm9PmLT/images-12.jpg";
    r_text[55] = "https://i.ibb.co/B2BzjdR/images-13.jpg";
    r_text[56] = "https://i.ibb.co/HB8kDqr/images-14.jpg";
    r_text[57] = "https://i.ibb.co/r6HXkC6/images-15.jpg";
    r_text[58] = "https://i.ibb.co/6BMF531/images-16.jpg";
    r_text[59] = "https://i.ibb.co/47b8YYW/images-17.jpg";
    r_text[60] = "https://i.ibb.co/bzZ66dN/images-18.jpg";
    r_text[61] = "https://i.ibb.co/kmKGSJ1/images-19.jpg";
    r_text[62] = "https://i.ibb.co/nDfrfgd/images-20.jpg";
    r_text[63] = "https://i.ibb.co/bXf8Tj1/images-21.jpg";
    r_text[64] = "https://i.ibb.co/4pQxm7k/images-22.jpg";
    r_text[65] = "https://i.ibb.co/ngLqQdh/images-23.jpg";
    r_text[66] = "https://i.ibb.co/Y3RtBPB/images-24.jpg";
    r_text[67] = "https://i.ibb.co/0y2vDZ8/images-25.jpg";
    r_text[68] = "https://i.ibb.co/0Gzdx1d/images-26.jpg";
    r_text[69] = "https://i.ibb.co/54wVtm8/images-27.jpg";
    r_text[70] = "https://i.ibb.co/bQkJTZm/images-28.jpg";
    r_text[71] = "https://i.ibb.co/hCNMWqG/images-29.jpg";
    r_text[72] = "https://i.ibb.co/qDphPx9/images-30.jpg";
    r_text[73] = "https://i.ibb.co/M8jRW8N/IMG-20210410-WA0308.png";
    r_text[74] = "https://i.ibb.co/k1nmStf/IMG-20210410-WA0309.jpg";
    r_text[75] = "https://i.ibb.co/Ks5pgsB/IMG-20210410-WA0310.jpg";
    r_text[76] = "https://i.ibb.co/0YNzZxQ/IMG-20210410-WA0317.jpg";
    r_text[77] = "https://i.ibb.co/T0KbLFN/IMG-20210410-WA0318.jpg";
    r_text[78] = "https://i.ibb.co/wgQWTKy/IMG-20210410-WA0319.jpg";

    var i = Math.floor(79*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data}, {mimetype: Mimetype.png, caption: Config.CAP,quoted: message.data, thumbnail: thumb })
}));

const thumb = "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"