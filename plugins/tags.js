const { AMDI } = require('../assets/scripts')

AMDI({ cmd: "tagwa", desc: "Tag official whatsapp.", type: "primary", react: "💃🏻" }, (async (amdiWA) => {
    let { sendText } = amdiWA.msgLayout;
    return await sendText(`Whatsapp : @0`, {mentionJIDS: ['0@s.whatsapp.net'], quoted: true, reactEmoji: "✅"});
}));