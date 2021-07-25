const fetch = require('node-fetch');

const getBase64 = async (url) => {
    const response = await fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' } });
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    const buffer = await response.buffer();
    const videoBase64 = `data:${response.headers.get('content-type')};base64,` + buffer.toString('base64');
    if (buffer)
        return videoBase64;
};

Amdi.addcommand({pattern: 'search ?(.*)', fromMe: true, desc: Lang.SEARCH, dontAddCommandList: true}, async (message, match) => {
    const url = `https://gist.githubusercontent.com/BlackAmda/a2b3e417d2ca059f4a6f64e6800dc41c/raw/`;
        const response = await got(url);
        const json = JSON.parse(response.body);
        if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*💠Queen Amdi supported plugins💠*\n\nYou can install these plugins by *.install _<plugin_link>_*\nExample : .install https://gist.github.com/BlackAmda/a06509cf406c3eb172e5173900d0ef87\n\n' + json.sinhala, MessageType.text);
});


exports.getBase64 = getBase64;
