/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.0
* @file  info.js - QueenAmdi group/user info

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, info, Language } = require('../assets/scripts')
const Lang = Language.getString('info');

AMDI({ cmd: "jid", desc: Lang.jidDESC, type: "profile", react: "📃" }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout
    return reply(amdiWA.clientJID);
}));


AMDI({ cmd: "info", desc: Lang.infoDESC, type: "primary", react: "ℹ️" }, (async (amdiWA) => {
    let { footerTXT, groupMetadata, isBotGroupAdmin, isGroup, isGroupAdmin, sendImage } = amdiWA.msgLayout

    if (isGroup) {
        if (isBotGroupAdmin && isGroupAdmin) {
            const invite_code = await amdiWA.web.groupInviteCode(amdiWA.clientJID)
            var invite = Lang.GRP_COD + `\n https://chat.whatsapp.com/${invite_code}`;
        } else {
            var invite = Lang.GRP_COD + '\n' + Lang.NOADMIN
        }
        const count = await info.getParticipantCount(groupMetadata);
        const countAdmin = await info.getAdminCount(groupMetadata);
        const ppUrl = await info.getProfilePic(amdiWA);
        try {
            var owner = '+' + groupMetadata.owner.split('@')[0]
        } catch {
            var owner = '_[Unable to fetch group owner]_'
        }
        const msg = Lang.GRP_NAME + `\n ${groupMetadata.subject} \n\n` + 
                    Lang.GRP_JID + `\n ${amdiWA.clientJID} \n\n` + 
                    Lang.GRP_OWN + `\n ${owner} \n\n` +
                    Lang.ADMIN_COUNT + ` ${countAdmin} \n\n` +
                    Lang.MEMBER_COUNT + ` ${count} \n\n` +
                    invite +`\n\n` + 
                    Lang.GRP_DES + `\n ${groupMetadata.desc}\n\n` +
                    footerTXT
        return await sendImage({url: ppUrl}, {quoted: true, caption: msg});
    } else {
        try { 
            var statusDATA = await amdiWA.web.fetchStatus(amdiWA.clientJID)
            var status = statusDATA.status
            var statusAT = '*Date and Time:* ' + statusDATA.setAt
        } catch {
            var status = '_[This user about is private or empty]_'
            var statusAT = ''
        }
        const pp = await info.getProfilePic(amdiWA);
        const nwmsg = Lang.PRO_JID + `\n ${amdiWA.clientJID} \n\n` + Lang.PRO_DES + `\n ${status}\n\n${statusAT}\n\n${footerTXT}`
        return await sendImage({url: pp}, {quoted: true, caption: nwmsg})
    }
}));