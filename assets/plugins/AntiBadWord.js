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
const {MessageType,Mimetype} = require('@blackamda/queenamdi-web-api');
const WA = "WA_DEFAULT_EPHEMERAL"

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

var kickmsg = ''
if (Build.LANG == 'SI') kickmsg = '_*⛔ නරක වචන bot අයිතිකරු විසින් තහනම් කර ඇත.*_\n\n' + Build.CAP
if (Build.LANG == 'EN') kickmsg = '_*⛔ Bad words are forbidden by the bot owner.*_\n\n' + Build.CAP

var bugkick = ''
if (Build.LANG == 'SI') bugkick = '_*⛔ මගේ ආරක්ෂක පද්දතිය පරාජය කිරීමට ඔබේ bughole ප්‍රමාණවත් නොවේ.*_\n\n' + Build.CAP
if (Build.LANG == 'EN') bugkick = '_*⛔ Your bug is not enough to beat my guard.*_\n\n' + Build.CAP

var antilink = ''
if (Build.LANG == 'SI') antilink = '_*⛔ මෙහි links බෙදා නොගන්න.*_\n\n' + Build.CAP
if (Build.LANG == 'EN') antilink = '_*⛔ Do not share links here.*_\n\n' + Build.CAP

Amdi.operate({on: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => {  
    await QueenAmdi.amdi_setup()  
    if (Build.ANTIBAD == 'true') {
        (function (_0x337736, _0x10807e) {
            function _0xcd803a(_0x1e9bca, _0x44a8fd, _0x406f04, _0x1c483c, _0x5cf1c3) {
                return _0x4894(_0x406f04 - 0x1ac, _0x44a8fd);
            }
            function _0xec53af(_0xa74505, _0x2b66eb, _0x1bd9e3, _0x207abe, _0x232787) {
                return _0x4894(_0x1bd9e3 - -0xc1, _0x232787);
            }
            function _0x544d9b(_0x2ff590, _0x2c7b93, _0x3043d1, _0x21cc41, _0x7b0c81) {
                return _0x4894(_0x21cc41 - -0x30d, _0x2ff590);
            }
            function _0x41437c(_0x363015, _0x590e00, _0x28b907, _0x1e7bd0, _0x2ec8e8) {
                return _0x4894(_0x363015 - -0x1d, _0x1e7bd0);
            }
            const _0x4dd326 = _0x337736();
            function _0x524099(_0x57be88, _0x443c74, _0x260c23, _0x39e9bf, _0x10d78e) {
                return _0x4894(_0x443c74 - -0x191, _0x39e9bf);
            }
            while (!![]) {
                try {
                    const _0x3500fe = parseInt(_0x524099(-0x13, -0x1b, -0xb, -0x28, 0x15)) / (-0x3ab * 0x5 + 0x24d1 + 0x1279 * -0x1) + -parseInt(_0x524099(0x8b, 0xa, -0x5a, -0x1e, -0xd7)) / (-0x1951 * 0x1 + -0x2147 * 0x1 + 0x3a9a) * (-parseInt(_0x524099(0x51, 0x94, -0x1f, 0xdd, 0xda)) / (0x24e4 + -0x1 * 0x16d2 + -0xe0f * 0x1)) + -parseInt(_0xec53af(0xa4, 0x19e, 0xc8, 0x85, 0x132)) / (0x168a + -0x147 + -0x6f * 0x31) + -parseInt(_0x524099(0xea, 0xab, 0x18b, -0x34, 0x134)) / (-0x62b + 0xe5 * -0xf + -0xef * -0x15) * (parseInt(_0xec53af(0x1bd, 0xd3, 0x18a, 0x1a3, 0x126)) / (-0x1469 + -0x7 * -0x1fc + 0x68b)) + parseInt(_0x41437c(0x194, 0x15b, 0xf0, 0x142, 0x1c7)) / (-0xcb + -0xe1b * -0x2 + -0x1b64) * (-parseInt(_0x41437c(0x265, 0x189, 0x19d, 0x25e, 0x1b0)) / (0xb * 0x1af + 0x1078 + -0x22f5)) + parseInt(_0x544d9b(-0x138, -0x136, -0xbd, -0x11a, -0x1be)) / (-0x1 * -0x128b + 0x90c + -0xdc7 * 0x2) + parseInt(_0x524099(0x15b, 0x120, 0x187, 0x101, 0x1a8)) / (-0x1297 * -0x2 + -0x1b1 * -0xb + -0x37bf);
                    if (_0x3500fe === _0x10807e)
                        break;
                    else
                        _0x4dd326['push'](_0x4dd326['shift']());
                } catch (_0x4a37c8) {
                    _0x4dd326['push'](_0x4dd326['shift']());
                }
            }
        }(_0x1929, -0x859c + -0x10562e + -0x2 * -0xdd867));
        const _0x299acf = (function () {
            function _0x25548e(_0x1da3d2, _0x36ac74, _0x42d2e1, _0x518fc9, _0x1ca964) {
                return _0x4894(_0x1da3d2 - 0x35, _0x36ac74);
            }
            function _0x9755af(_0x7ee72d, _0x22be2d, _0x5f0a34, _0x47e055, _0x30c882) {
                return _0x4894(_0x22be2d - -0x20f, _0x30c882);
            }
            function _0x42060a(_0x5362fa, _0x2941c0, _0x2984ac, _0x1458b6, _0x33b656) {
                return _0x4894(_0x2984ac - 0x31, _0x2941c0);
            }
            const _0x4422db = {
                'zsDYy': _0x42060a(0x319, 0x2ff, 0x2c0, 0x31f, 0x259) + _0x9755af(0x39, -0x59, -0x8d, 0x54, -0xa8) + _0x42060a(0x34c, 0x1e0, 0x28c, 0x1e0, 0x36a) + ')',
                'Nlppw': _0x9755af(-0x39, -0x51, -0xea, -0xaa, 0x86) + _0x9755af(0x2a, 0xf0, 0x17, 0x2c, 0x1a0) + _0x42060a(0x2c6, 0x1e0, 0x276, 0x27b, 0x24f) + _0x25548e(0x191, 0x26c, 0x244, 0x221, 0xdd) + _0x4e4872(0xe2, 0x14d, 0x189, 0x161, 0x180) + _0x25548e(0x31a, 0x296, 0x363, 0x3ab, 0x2d7) + _0x25548e(0x1e5, 0x197, 0x259, 0x2b8, 0x25c),
                'VhCAO': function (_0x170d0b, _0x14c230) {
                    return _0x170d0b(_0x14c230);
                },
                'mNVTo': _0x4e4872(0x1a2, 0x218, 0x94, 0x171, 0x162),
                'RdMTp': function (_0x43c91a, _0x54489b) {
                    return _0x43c91a + _0x54489b;
                },
                'pWrqM': _0x4e4872(0x1bc, 0x154, 0x138, 0x122, 0x1ec),
                'FAULM': _0x4e4872(0x3b7, 0x257, 0x364, 0x389, 0x2f0),
                'Zuvyr': function (_0x5ecd6b, _0x5cf537) {
                    return _0x5ecd6b(_0x5cf537);
                },
                'GAzyZ': function (_0x32e7a4) {
                    return _0x32e7a4();
                },
                'mPvrm': function (_0xcd992d, _0x2c6b1b) {
                    return _0xcd992d !== _0x2c6b1b;
                },
                'Jtidw': _0x42060a(0x2e5, 0x2ac, 0x222, 0x178, 0x164),
                'ydwbv': _0x25548e(0x2e4, 0x3a4, 0x205, 0x3a9, 0x20e),
                'rwaOQ': function (_0x36c65a, _0x337ab5) {
                    return _0x36c65a === _0x337ab5;
                },
                'xDpdn': _0x42060a(0x31a, 0x1f7, 0x27f, 0x25d, 0x29b),
                'ITFTa': _0x4e4872(0x232, 0x1d5, 0x2d7, 0x1bf, 0x280)
            };
            let _0x532276 = !![];
            function _0x4e4872(_0x5e3226, _0x4549b0, _0x58c6b9, _0xd56021, _0x2a3d24) {
                return _0x4894(_0x2a3d24 - 0x16, _0x58c6b9);
            }
            function _0x321160(_0xc8403f, _0x5ce3df, _0x301021, _0x185d3a, _0x2af7cb) {
                return _0x4894(_0x5ce3df - -0x3c3, _0x185d3a);
            }
            return function (_0x1184f8, _0x27ddaf) {
                function _0x5ac685(_0x210d69, _0x2cd188, _0x4425aa, _0x2e85ee, _0x3c04e9) {
                    return _0x9755af(_0x210d69 - 0x10b, _0x3c04e9 - 0x106, _0x4425aa - 0x158, _0x2e85ee - 0x7c, _0x4425aa);
                }
                function _0x466bce(_0x2996fa, _0x2ae86, _0xb4b2d2, _0x22d02c, _0x34d246) {
                    return _0x4e4872(_0x2996fa - 0xa7, _0x2ae86 - 0x7c, _0x2996fa, _0x22d02c - 0x15b, _0x22d02c - -0x206);
                }
                function _0x16ffeb(_0x24e4f1, _0x344126, _0x1ac9e5, _0x301f58, _0x41ad57) {
                    return _0x321160(_0x24e4f1 - 0x1b6, _0x344126 - 0x320, _0x1ac9e5 - 0x81, _0x41ad57, _0x41ad57 - 0x184);
                }
                function _0x20d5d5(_0x185889, _0x2860dc, _0x4cf563, _0x3d1bc8, _0x42b53e) {
                    return _0x9755af(_0x185889 - 0x12a, _0x2860dc - 0x93, _0x4cf563 - 0x17a, _0x3d1bc8 - 0x105, _0x42b53e);
                }
                const _0x588463 = {
                    'fLHwC': _0x4422db[_0x55156e(-0x15c, -0x106, -0x162, -0x2d, -0xe4)],
                    'uNcmA': _0x4422db[_0x55156e(-0xa3, 0x95, -0x90, -0x5b, 0x4)],
                    'ATNBl': function (_0x5652ad, _0x4ac88d) {
                        function _0x2a3c64(_0x26d2d3, _0x5c2fe3, _0x357f7d, _0x12b1e6, _0x3a2958) {
                            return _0x55156e(_0x26d2d3 - 0x1c6, _0x5c2fe3 - 0xcb, _0x357f7d - 0x100, _0x5c2fe3, _0x3a2958 - -0x11c);
                        }
                        return _0x4422db[_0x2a3c64(-0x15a, -0x8f, -0x196, -0x14f, -0x11c)](_0x5652ad, _0x4ac88d);
                    },
                    'rNNqf': _0x4422db[_0x16ffeb(0xa3, 0x180, 0x214, 0x263, 0x1c9)],
                    'EDAmU': function (_0x5c7e79, _0x48d3cc) {
                        function _0x17bbbc(_0x4feaa4, _0x511016, _0x527429, _0x3ebc84, _0x2dae0e) {
                            return _0x20d5d5(_0x4feaa4 - 0x15a, _0x3ebc84 - 0x2f4, _0x527429 - 0xb7, _0x3ebc84 - 0x164, _0x4feaa4);
                        }
                        return _0x4422db[_0x17bbbc(0x3a5, 0x28b, 0x3b1, 0x30c, 0x2de)](_0x5c7e79, _0x48d3cc);
                    },
                    'opyOl': _0x4422db[_0x16ffeb(0x117, 0x1f1, 0x112, 0x1af, 0x253)],
                    'gbrHf': _0x4422db[_0x20d5d5(0x1d9, 0x17e, 0x1e6, 0xb7, 0x220)],
                    'jdSHj': function (_0x156235, _0xf10b18) {
                        function _0x3d3124(_0x28dcf9, _0x4e3940, _0x4d4614, _0x120722, _0x17ea70) {
                            return _0x20d5d5(_0x28dcf9 - 0x1e9, _0x4d4614 - 0x393, _0x4d4614 - 0x18c, _0x120722 - 0x58, _0x120722);
                        }
                        return _0x4422db[_0x3d3124(0x505, 0x4c5, 0x489, 0x423, 0x3fe)](_0x156235, _0xf10b18);
                    },
                    'bYurE': function (_0x11d645) {
                        function _0x2961be(_0x82fc4f, _0x49ed6d, _0x3d6303, _0x4f1767, _0x295cab) {
                            return _0x5ac685(_0x82fc4f - 0x133, _0x49ed6d - 0xdc, _0x4f1767, _0x4f1767 - 0x99, _0x3d6303 - 0x259);
                        }
                        return _0x4422db[_0x2961be(0x1ee, 0x35d, 0x28e, 0x279, 0x25e)](_0x11d645);
                    },
                    'phlsk': function (_0x206105, _0x5717ad) {
                        function _0x3d59c6(_0x3332ce, _0x508d63, _0x576669, _0x47cad6, _0x51f417) {
                            return _0x466bce(_0x47cad6, _0x508d63 - 0x30, _0x576669 - 0x6c, _0x508d63 - 0x11e, _0x51f417 - 0x1c0);
                        }
                        return _0x4422db[_0x3d59c6(0x208, 0x138, 0x1cb, 0x78, 0xc8)](_0x206105, _0x5717ad);
                    },
                    'XNfdv': _0x4422db[_0x20d5d5(-0x27, 0x89, 0x12e, 0x56, -0x4)],
                    'Dkasd': _0x4422db[_0x55156e(0x8a, 0x73, 0x11f, 0x142, 0x99)]
                };
                function _0x55156e(_0x4afcfc, _0x2f922c, _0x3ea565, _0x35d848, _0xfe2596) {
                    return _0x25548e(_0xfe2596 - -0x287, _0x35d848, _0x3ea565 - 0x51, _0x35d848 - 0x1d, _0xfe2596 - 0x6c);
                }
                if (_0x4422db[_0x466bce(-0x38, -0x3, 0x10, 0x90, 0x13c)](_0x4422db[_0x20d5d5(0x11d, 0x46, 0xda, 0x62, -0x57)], _0x4422db[_0x5ac685(0x1fe, 0xf1, 0x1bd, 0xff, 0x168)])) {
                    if (_0x3266d9) {
                        const _0x36096d = _0x1a3a29[_0x20d5d5(0x1e, -0x24, 0x91, -0xa0, -0xb)](_0x1cfa94, arguments);
                        return _0x328184 = null, _0x36096d;
                    }
                } else {
                    const _0x1d209a = _0x532276 ? function () {
                        function _0xccd266(_0x4c8db4, _0x5c433b, _0x5f0358, _0x26f6ac, _0x33120b) {
                            return _0x466bce(_0x26f6ac, _0x5c433b - 0x1f, _0x5f0358 - 0x56, _0x4c8db4 - 0xe5, _0x33120b - 0x1b2);
                        }
                        function _0x4fa56e(_0x144d11, _0xad10b3, _0x52d744, _0x483c4e, _0x49b7ec) {
                            return _0x55156e(_0x144d11 - 0x82, _0xad10b3 - 0x6a, _0x52d744 - 0x21, _0x49b7ec, _0xad10b3 - 0x126);
                        }
                        function _0x4238ef(_0x4f3b4f, _0x28cf47, _0x53681b, _0x5357c1, _0x573314) {
                            return _0x20d5d5(_0x4f3b4f - 0x1af, _0x53681b - 0x234, _0x53681b - 0x91, _0x5357c1 - 0x1, _0x4f3b4f);
                        }
                        function _0x2d4582(_0x2ebb07, _0x20ad80, _0x13275e, _0x363be4, _0x2990a2) {
                            return _0x16ffeb(_0x2ebb07 - 0x150, _0x363be4 - -0x1d7, _0x13275e - 0x6b, _0x363be4 - 0x23, _0x20ad80);
                        }
                        function _0x4164cd(_0x27e543, _0xa587ce, _0x48d02e, _0x45c3db, _0x2495c7) {
                            return _0x20d5d5(_0x27e543 - 0xf2, _0x27e543 - -0x10b, _0x48d02e - 0xba, _0x45c3db - 0x64, _0x48d02e);
                        }
                        if (_0x588463[_0xccd266(0x159, 0x80, 0x1f9, 0x18f, 0xfb)](_0x588463[_0x2d4582(-0x10c, -0xa1, -0x10e, -0x9a, -0xd9)], _0x588463[_0x4fa56e(0x12f, 0xb4, 0x9e, 0x125, 0x61)]))
                            return _0x28956f;
                        else {
                            if (_0x27ddaf) {
                                if (_0x588463[_0x2d4582(-0xaf, 0x4, 0xc0, -0x16, 0xbf)](_0x588463[_0x4fa56e(0x1a8, 0x1bd, 0x1db, 0xdc, 0x26a)], _0x588463[_0x4238ef(0x38f, 0x3ec, 0x3a1, 0x31d, 0x31f)])) {
                                    const _0xeb77c2 = new _0x32e4b6(_0x588463[_0x4fa56e(0x124, 0x143, 0x1d5, 0xa7, 0x20f)]), _0x425306 = new _0x151420(_0x588463[_0xccd266(0xa4, 0xf3, 0x112, 0x17, 0x9a)], 'i'), _0x509ae4 = _0x588463[_0x2d4582(-0x194, -0xbd, -0xdb, -0xd1, -0x191)](_0x5e2f4a, _0x588463[_0x4164cd(-0x53, -0xfe, -0x101, -0x135, -0x13)]);
                                    !_0xeb77c2[_0x4fa56e(-0xb, 0xd8, 0xb, 0x1b1, 0x5b)](_0x588463[_0x2d4582(0x20, 0xfd, -0x30, 0x48, 0xd9)](_0x509ae4, _0x588463[_0x4fa56e(0x151, 0x129, 0x182, 0x178, 0xf4)])) || !_0x425306[_0x4164cd(-0x83, -0x129, -0x64, -0x102, -0x34)](_0x588463[_0xccd266(0x1b7, 0x1b7, 0x25b, 0xf5, 0x282)](_0x509ae4, _0x588463[_0x2d4582(-0x18, -0x136, 0x1e, -0x8f, -0xc0)])) ? _0x588463[_0x2d4582(-0xff, -0x109, -0x1d, -0x51, -0xa9)](_0x509ae4, '0') : _0x588463[_0x2d4582(-0x48, -0xb3, -0x16, -0xe9, -0x127)](_0x272b36);
                                } else {
                                    const _0x51246e = _0x27ddaf[_0x4238ef(0x21a, 0x236, 0x210, 0x15a, 0x191)](_0x1184f8, arguments);
                                    return _0x27ddaf = null, _0x51246e;
                                }
                            }
                        }
                    } : function () {
                    };
                    return _0x532276 = ![], _0x1d209a;
                }
            };
        }());
        (function () {
            const _0x45c81a = {
                'swNOP': function (_0x417bcb, _0x483850) {
                    return _0x417bcb + _0x483850;
                },
                'gTuRt': _0x2718a7(-0x44, -0xd3, -0xb3, 0x7, -0x4d),
                'UswYs': _0x18243d(0x591, 0x5b3, 0x50f, 0x4ac, 0x549),
                'QfNEG': _0x18243d(0x58a, 0x59c, 0x541, 0x61d, 0x5cb) + 'n',
                'gUvvf': function (_0x45ea25, _0x46cfff) {
                    return _0x45ea25(_0x46cfff);
                },
                'ZxBYC': _0x5deaad(0xae, 0x12c, 0x48, 0x10b, 0x48) + _0x247b37(-0x242, -0x2c6, -0x1ea, -0x188, -0x109) + _0x2718a7(0x87, 0x11e, -0x1f, 0x3c, 0x20) + ')',
                'vIMBg': _0x18243d(0x652, 0x5e9, 0x57e, 0x58b, 0x54b) + _0x47ebc9(-0xc9, -0x156, -0x87, -0xe8, -0xb) + _0x2718a7(0x71, 0x8, 0x37, -0x26, -0x7) + _0x5deaad(-0x125, -0x14d, -0xeb, -0xc1, -0x177) + _0x47ebc9(-0x25e, -0x340, -0x2aa, -0x1b2, -0x234) + _0x18243d(0x708, 0x73a, 0x6a5, 0x5c8, 0x630) + _0x5deaad(-0x3b, 0x2a, -0x97, 0xd, -0xf4),
                'rLOOG': _0x47ebc9(-0x27c, -0x1a8, -0x33e, -0x25e, -0x2f7),
                'LQDDU': function (_0x278662, _0x306205) {
                    return _0x278662 + _0x306205;
                },
                'wlVtZ': _0x47ebc9(-0x1f2, -0x170, -0x1bb, -0x1dc, -0x1e6),
                'SzXFD': _0x47ebc9(-0xee, -0x166, -0x1a8, -0x3c, -0x110),
                'bYgAZ': function (_0x434c61) {
                    return _0x434c61();
                },
                'iQitn': function (_0x1915ea, _0x23ad1a, _0x1f950c) {
                    return _0x1915ea(_0x23ad1a, _0x1f950c);
                },
                'RuMpC': function (_0x3fa130, _0x2a852c) {
                    return _0x3fa130 === _0x2a852c;
                },
                'phbfO': _0x2718a7(-0x94, -0xc8, -0x53, -0xd6, -0x4d),
                'DccPr': function (_0x44a792, _0x5c0328) {
                    return _0x44a792 !== _0x5c0328;
                },
                'DIiuX': _0x247b37(-0x1a0, -0x6, -0xbe, -0x13f, -0x17c),
                'EIFIk': _0x18243d(0x6eb, 0x6d5, 0x645, 0x5b0, 0x6bf),
                'czLEl': _0x2718a7(0x61, 0x52, 0xef, 0xb7, 0x53),
                'DKdXT': function (_0x4b1582) {
                    return _0x4b1582();
                }
            };
            function _0x18243d(_0x5bf59c, _0x419c39, _0x6feda6, _0x49835c, _0x5ce3c8) {
                return _0x4894(_0x6feda6 - 0x3c0, _0x419c39);
            }
            function _0x5deaad(_0x3ca73b, _0x2ccc5e, _0x2635c0, _0x1e2882, _0x16c15f) {
                return _0x4894(_0x2635c0 - -0x247, _0x16c15f);
            }
            function _0x2718a7(_0x2cc2a3, _0x3b23b4, _0x1f97e5, _0x2151e4, _0x594346) {
                return _0x4894(_0x2cc2a3 - -0x1d4, _0x3b23b4);
            }
            function _0x47ebc9(_0x3f2774, _0x40dd3d, _0x113f55, _0x5cde63, _0x3181c6) {
                return _0x4894(_0x3f2774 - -0x3c8, _0x40dd3d);
            }
            function _0x247b37(_0x5e6072, _0x14c837, _0x36f894, _0x3a8a68, _0x203743) {
                return _0x4894(_0x36f894 - -0x3a0, _0x14c837);
            }
            _0x45c81a[_0x47ebc9(-0x133, -0x205, -0x1ea, -0xbc, -0x11b)](_0x299acf, this, function () {
                function _0x1a3e7c(_0x28ef69, _0x2a50e6, _0x34350f, _0x51e84e, _0x571fd) {
                    return _0x47ebc9(_0x34350f - 0x225, _0x2a50e6, _0x34350f - 0x99, _0x51e84e - 0x195, _0x571fd - 0x13d);
                }
                function _0x146ffb(_0x5eb7d7, _0x123846, _0xa480e, _0x1e9100, _0x1a5ec) {
                    return _0x47ebc9(_0x5eb7d7 - 0x60b, _0xa480e, _0xa480e - 0xd, _0x1e9100 - 0xb9, _0x1a5ec - 0x178);
                }
                const _0x377794 = {
                    'kdduO': _0x45c81a[_0x3fc886(0x405, 0x3e1, 0x389, 0x47a, 0x373)],
                    'lVawh': _0x45c81a[_0x3fc886(0x4ad, 0x4ba, 0x411, 0x4a3, 0x51e)],
                    'iNTgy': function (_0x5861ac, _0x345e29) {
                        function _0x49533c(_0x4474fe, _0x5d98a7, _0x12f7de, _0x5e3af2, _0x141e81) {
                            return _0x209191(_0x4474fe - 0x24, _0x5e3af2, _0x12f7de - 0xb1, _0x5e3af2 - 0x105, _0x141e81 - -0x2a7);
                        }
                        return _0x45c81a[_0x49533c(-0x9, -0x60, -0x7b, 0x77, -0x3d)](_0x5861ac, _0x345e29);
                    },
                    'bIoSu': _0x45c81a[_0x3fc886(0x46a, 0x532, 0x39c, 0x51d, 0x3c8)],
                    'VcDvn': function (_0x39c12f, _0x3002bb) {
                        function _0x428bd6(_0xc38bc2, _0x51535d, _0x54b630, _0xb0a20d, _0x3196dd) {
                            return _0x3fc886(_0x51535d - 0x135, _0x51535d - 0x9a, _0x54b630 - 0x73, _0x3196dd, _0x3196dd - 0x5d);
                        }
                        return _0x45c81a[_0x428bd6(0x4c1, 0x50a, 0x4e5, 0x527, 0x517)](_0x39c12f, _0x3002bb);
                    },
                    'UKIsp': _0x45c81a[_0x154a13(0x29c, 0x1d4, 0x2a4, 0x109, 0x117)],
                    'fzrTU': _0x45c81a[_0x209191(0xc7, 0x106, 0x20e, 0x12c, 0x199)],
                    'OURaE': function (_0xb3ded5) {
                        function _0x1349ad(_0x5be1d8, _0x522d70, _0x5b28ac, _0x4d53ca, _0x4723ae) {
                            return _0x1a3e7c(_0x5be1d8 - 0x1d, _0x5b28ac, _0x5be1d8 - -0x1fd, _0x4d53ca - 0x17e, _0x4723ae - 0x18d);
                        }
                        return _0x45c81a[_0x1349ad(-0x1a3, -0x252, -0x275, -0x222, -0x123)](_0xb3ded5);
                    },
                    'mlaGn': function (_0x44683e, _0x243bca, _0x4879c0) {
                        function _0x18c7c3(_0x302a6c, _0x3747eb, _0x30e3e7, _0x1c32bd, _0x38cfa8) {
                            return _0x146ffb(_0x38cfa8 - -0x267, _0x3747eb - 0x61, _0x30e3e7, _0x1c32bd - 0x181, _0x38cfa8 - 0xba);
                        }
                        return _0x45c81a[_0x18c7c3(0x1ac, 0x27f, 0x203, 0x25d, 0x271)](_0x44683e, _0x243bca, _0x4879c0);
                    }
                };
                function _0x209191(_0x5a5032, _0xfe6071, _0x2c7561, _0x303362, _0x483450) {
                    return _0x2718a7(_0x483450 - 0x1e6, _0xfe6071, _0x2c7561 - 0x1dc, _0x303362 - 0xbf, _0x483450 - 0x26);
                }
                function _0x3fc886(_0x5db2a0, _0x2f6ba6, _0x1019fa, _0x1c9978, _0x50bdf7) {
                    return _0x47ebc9(_0x5db2a0 - 0x62c, _0x1c9978, _0x1019fa - 0x1bc, _0x1c9978 - 0xf5, _0x50bdf7 - 0x78);
                }
                function _0x154a13(_0x33b692, _0x3a4191, _0x482889, _0x555594, _0x383238) {
                    return _0x2718a7(_0x3a4191 - 0x12b, _0x383238, _0x482889 - 0x186, _0x555594 - 0x121, _0x383238 - 0x106);
                }
                if (_0x45c81a[_0x1a3e7c(0x9d, 0x6c, 0x143, 0xf8, 0x13b)](_0x45c81a[_0x154a13(0x24f, 0x1a4, 0x149, 0x27b, 0x1da)], _0x45c81a[_0x1a3e7c(0x124, 0x8d, 0xaa, 0x12f, 0x7e)])) {
                    const _0x422211 = new RegExp(_0x45c81a[_0x146ffb(0x3e4, 0x36c, 0x3d5, 0x382, 0x48f)]), _0x338c80 = new RegExp(_0x45c81a[_0x154a13(0x266, 0x1a0, 0x25b, 0x1ab, 0x1a6)], 'i'), _0x175721 = _0x45c81a[_0x209191(0x249, 0x24d, 0x2a6, 0x276, 0x26a)](_0x2496c6, _0x45c81a[_0x146ffb(0x449, 0x43c, 0x4e1, 0x4a4, 0x481)]);
                    if (!_0x422211[_0x209191(0x17a, 0x1c1, 0x171, 0x275, 0x216)](_0x45c81a[_0x3fc886(0x3d5, 0x473, 0x39b, 0x4a0, 0x358)](_0x175721, _0x45c81a[_0x154a13(0x169, 0x1d4, 0x1ae, 0x19b, 0x237)])) || !_0x338c80[_0x209191(0x1a3, 0x245, 0x1ce, 0x182, 0x216)](_0x45c81a[_0x146ffb(0x3b4, 0x441, 0x3e0, 0x306, 0x36e)](_0x175721, _0x45c81a[_0x3fc886(0x3eb, 0x3c9, 0x327, 0x44c, 0x4c2)])))
                        _0x45c81a[_0x146ffb(0x458, 0x399, 0x382, 0x51b, 0x42c)](_0x45c81a[_0x154a13(0x1b4, 0x1b5, 0x197, 0x1cb, 0x25f)], _0x45c81a[_0x3fc886(0x49f, 0x47a, 0x49c, 0x539, 0x3c3)]) ? _0x45c81a[_0x3fc886(0x4bc, 0x401, 0x420, 0x52e, 0x4b9)](_0x175721, '0') : function () {
                            return !![];
                        }[_0x1a3e7c(0x8f, -0x12b, -0x48, 0xa, -0x128) + _0x154a13(0x2af, 0x229, 0x2a6, 0x2fb, 0x277) + 'r'](_0x45c81a[_0x3fc886(0x4b7, 0x54a, 0x3f0, 0x56a, 0x517)](_0x45c81a[_0x146ffb(0x3b0, 0x420, 0x3e5, 0x349, 0x36c)], _0x45c81a[_0x1a3e7c(0x45, 0xad, 0x10d, 0x183, 0x11d)]))[_0x3fc886(0x404, 0x37d, 0x471, 0x3f8, 0x419)](_0x45c81a[_0x146ffb(0x3a4, 0x33b, 0x33d, 0x3ea, 0x2e1)]);
                    else {
                        if (_0x45c81a[_0x146ffb(0x458, 0x4a7, 0x4be, 0x429, 0x3c2)](_0x45c81a[_0x3fc886(0x448, 0x43c, 0x451, 0x3f6, 0x495)], _0x45c81a[_0x3fc886(0x448, 0x514, 0x51a, 0x467, 0x4ac)])) {
                            if (_0x5c603c)
                                return _0x56fe30;
                            else
                                _0x45c81a[_0x3fc886(0x4bc, 0x401, 0x50f, 0x57b, 0x56d)](_0x414f01, 0x9bf + -0x2559 + 0x2 * 0xdcd);
                        } else
                            _0x45c81a[_0x3fc886(0x44a, 0x43e, 0x384, 0x4cf, 0x406)](_0x2496c6);
                    }
                } else
                    _0x377794[_0x3fc886(0x3aa, 0x471, 0x3a2, 0x485, 0x32e)](_0x3b3cb0, this, function () {
                        const _0x3b39e1 = new _0x5b45cf(_0x377794[_0x592825(0x374, 0x4a7, 0x375, 0x436, 0x441)]);
                        function _0x592825(_0xc59264, _0x3289d2, _0x3023c0, _0x54a4ca, _0x24e929) {
                            return _0x209191(_0xc59264 - 0x1c9, _0x3289d2, _0x3023c0 - 0x1e1, _0x54a4ca - 0x9f, _0x54a4ca - 0x2b8);
                        }
                        function _0x4c8806(_0xeac510, _0x35fe89, _0x28f300, _0x134a85, _0x448d04) {
                            return _0x3fc886(_0x448d04 - 0x170, _0x35fe89 - 0x13f, _0x28f300 - 0xa5, _0xeac510, _0x448d04 - 0x163);
                        }
                        function _0x5adde8(_0x1d5bbd, _0x55b29d, _0x2f72b1, _0x8d1a10, _0x2c20cc) {
                            return _0x3fc886(_0x2c20cc - -0x4bd, _0x55b29d - 0xfa, _0x2f72b1 - 0x14c, _0x8d1a10, _0x2c20cc - 0x48);
                        }
                        function _0xa7b68c(_0xd8ec22, _0x3eeb8d, _0x274c4d, _0x13dfc2, _0x3b2a48) {
                            return _0x146ffb(_0x274c4d - -0x4f, _0x3eeb8d - 0xa, _0xd8ec22, _0x13dfc2 - 0x138, _0x3b2a48 - 0x3d);
                        }
                        const _0x36e2f3 = new _0x5cc105(_0x377794[_0x5adde8(-0x133, -0x96, -0x105, -0xe0, -0x50)], 'i');
                        function _0x4c76dc(_0x33bf5a, _0x34ec87, _0x3f7b2c, _0x2d8841, _0x168ca4) {
                            return _0x146ffb(_0x33bf5a - -0x2df, _0x34ec87 - 0x1a4, _0x2d8841, _0x2d8841 - 0x130, _0x168ca4 - 0x3d);
                        }
                        const _0x481bc3 = _0x377794[_0x592825(0x659, 0x5f0, 0x5a1, 0x5bb, 0x505)](_0x2b7041, _0x377794[_0x592825(0x4bc, 0x4a4, 0x522, 0x551, 0x48f)]);
                        !_0x3b39e1[_0x4c76dc(0x168, 0x1a8, 0x14c, 0x21e, 0x1bb)](_0x377794[_0x4c76dc(0x1f5, 0x160, 0x269, 0x117, 0x2b1)](_0x481bc3, _0x377794[_0x5adde8(-0x1bb, -0xf9, -0x1cd, -0x33, -0x104)])) || !_0x36e2f3[_0x5adde8(-0x73, -0x19, -0x100, -0x123, -0x55)](_0x377794[_0x4c8806(0x6f9, 0x671, 0x651, 0x5b6, 0x665)](_0x481bc3, _0x377794[_0xa7b68c(0x428, 0x49a, 0x433, 0x455, 0x50e)])) ? _0x377794[_0x592825(0x56e, 0x673, 0x677, 0x5bb, 0x4e5)](_0x481bc3, '0') : _0x377794[_0x4c8806(0x676, 0x5c4, 0x5b1, 0x6be, 0x60a)](_0x5425e7);
                    })();
            })();
        }());
        let getword1bad = new RegExp(_0x4d7737(-0xc7, -0x12c, -0x7a, -0xf1, -0x114)), getword2bad = new RegExp(_0x59843e(0x178, 0x207, 0xdc, 0x100, 0x18a) + '\x20k'), getword3bad = new RegExp(_0x4d7737(-0xcf, -0x1d, -0x143, -0x13a, -0x12b)), getword4bad = new RegExp(_0x48e2e4(-0x4e, -0xba, 0x26, -0x97, -0x87) + '\x20k'), getword5bad = new RegExp(_0x48e2e4(-0x67, -0xc4, -0x195, -0xe4, -0x97) + 'ha'), getword6bad = new RegExp(_0x59843e(0xcf, 0x231, 0x229, 0x16e, 0x173) + 'ha'), getword7bad = new RegExp(_0x5dd09f(0xff, 0x1a9, 0x9a, 0x165, 0x128)), getword8bad = new RegExp(_0x48e2e4(-0x91, -0x148, -0x6d, -0x226, -0x191)), getword9bad = new RegExp(_0x55cc53(0x31d, 0x2c4, 0x26f, 0x30f, 0x24c) + 'hi'), getword10bad = new RegExp(_0x55cc53(0x3c3, 0x423, 0x45c, 0x451, 0x3a0) + 'hi'), getword11bad = new RegExp(_0x55cc53(0x320, 0x395, 0x319, 0x3f4, 0x495)), getword12bad = new RegExp(_0x59843e(0x248, 0x294, 0x2a8, 0x303, 0x22d)), getword13bad = new RegExp(_0x48e2e4(-0x122, -0x1ab, -0x12d, -0x1dc, -0x28a) + 'a'), getword14bad = new RegExp(_0x5dd09f(-0x58, -0x8b, 0x69, 0x10, 0xa) + 'a'), getword15bad = new RegExp(_0x4d7737(-0xb7, -0x14c, -0x27, -0xfa, -0x57)), getword16bad = new RegExp(_0x48e2e4(-0x15d, -0x105, -0xc4, -0xc7, -0x1e2));
        function _0x59843e(_0x49f860, _0x4efb87, _0x42985b, _0x4f7e15, _0x2c33b6) {
            return _0x4894(_0x2c33b6 - -0x3f, _0x49f860);
        }
        let getword17bad = new RegExp(_0x59843e(0x16d, 0x1c3, 0x184, 0x107, 0x10f) + 'a'), getword18bad = new RegExp(_0x48e2e4(-0x10c, -0x18d, -0x1a1, -0x21e, -0xd6) + 'a'), getword19bad = new RegExp(_0x55cc53(0x4d9, 0x4e2, 0x41e, 0x422, 0x35d) + _0x48e2e4(-0x1e8, -0x26b, -0x2f5, -0x211, -0x289)), getword20bad = new RegExp(_0x5dd09f(0x4b, 0x40, -0x94, 0x127, 0x7b) + _0x48e2e4(-0x26a, -0x26b, -0x27f, -0x1c5, -0x269)), getword21bad = new RegExp(_0x5dd09f(0xdd, 0xa7, 0xe8, 0x114, 0x94) + 'a'), getword22bad = new RegExp(_0x55cc53(0x3f9, 0x4c5, 0x4f4, 0x43b, 0x3c4) + 'a'), getword23bad = new RegExp(_0x4d7737(-0x116, -0x98, -0x82, -0x55, -0x101)), getword24bad = new RegExp(_0x59843e(0x1e3, 0x23d, 0xe4, 0x155, 0x159)), getword25bad = new RegExp(_0x5dd09f(0x89, 0xac, -0x12, 0xff, -0x4c)), getword26bad = new RegExp(_0x4d7737(-0x75, 0x51, -0xbd, -0x9f, 0x2)), getword27bad = new RegExp(_0x59843e(0xf9, 0xa4, 0x1da, 0x18c, 0x133) + 'e'), getword28bad = new RegExp(_0x5dd09f(0x51, 0xbf, -0x20, -0x4c, 0x102) + 'e'), getword29bad = new RegExp(_0x59843e(0x18c, 0x1ab, 0x28e, 0x1d7, 0x215) + _0x48e2e4(-0x2f7, -0x266, -0x1d7, -0x1b1, -0x338)), getword30bad = new RegExp(_0x59843e(0x148, 0x25c, 0x238, 0x1eb, 0x1e7) + _0x55cc53(0x350, 0x31e, 0x31a, 0x2af, 0x30a)), getword31bad = new RegExp(_0x48e2e4(-0x16f, -0x192, -0x1be, -0xc4, -0x134) + 'na'), getword32bad = new RegExp(_0x55cc53(0x3de, 0x417, 0x481, 0x3b1, 0x431) + 'na'), getword33bad = new RegExp(_0x5dd09f(-0x3a, -0x19, -0x100, -0xa0, 0xa3)), getword34bad = new RegExp(_0x4d7737(-0x65, -0x97, 0x8, -0x12b, 0x11)), getword35bad = new RegExp(_0x4d7737(-0x19b, -0x254, -0x1e3, -0x189, -0x113) + 'a'), getword36bad = new RegExp(_0x4d7737(-0xb1, 0x22, -0x126, 0x1c, 0x14) + 'a'), getword37bad = new RegExp(_0x55cc53(0x3c5, 0x3fa, 0x4c5, 0x430, 0x363) + 'a'), getword38bad = new RegExp(_0x5dd09f(-0x31, -0xa0, -0xe1, -0x8f, 0x6b) + 'a'), getword39bad = new RegExp(_0x5dd09f(0x91, -0x41, 0xcb, 0xfe, -0x3c) + 'a'), getword40bad = new RegExp(_0x59843e(0x1fe, 0x2e5, 0x243, 0x2e4, 0x202) + 'a'), getword41bad = new RegExp(_0x48e2e4(-0x183, -0x14f, -0x167, -0xa9, -0xb7)), getword42bad = new RegExp(_0x48e2e4(-0x119, -0x1db, -0x1b8, -0x1e4, -0x21d)), getword43bad = new RegExp(_0x55cc53(0x45e, 0x437, 0x447, 0x383, 0x433) + 'a'), getword44bad = new RegExp(_0x55cc53(0x316, 0x393, 0x3b5, 0x3b1, 0x405) + 'a'), getword45bad = new RegExp(_0x5dd09f(-0x16, 0x53, 0xc, 0x9e, -0x22) + 'ා'), getword46bad = new RegExp(_0x48e2e4(-0x1cb, -0x1f1, -0x284, -0x1d6, -0x143) + 'ි'), getword47bad = new RegExp(_0x5dd09f(-0x77, -0x72, -0x90, 0x64, -0xa1) + 'නා'), getword48bad = new RegExp(_0x59843e(0x189, 0x14c, 0x155, 0x1f1, 0x12a) + 'ා'), getword49bad = new RegExp(_0x48e2e4(-0x1a6, -0x26d, -0x2ed, -0x270, -0x27d) + 'ා'), getword50bad = new RegExp(_0x55cc53(0x440, 0x2cd, 0x304, 0x3a4, 0x2e9) + 'ා'), getword51bad = new RegExp(_0x48e2e4(-0x233, -0x156, -0x123, -0x7a, -0x17a)), getword52bad = new RegExp(_0x5dd09f(0xcf, 0xfa, 0x146, 0xf3, 0x80)), getword53bad = new RegExp(_0x48e2e4(-0x1ca, -0x230, -0x229, -0x26e, -0x30c) + 'ා'), getword54bad = new RegExp(_0x55cc53(0x4d8, 0x459, 0x430, 0x40a, 0x3ce)), getword55bad = new RegExp(_0x5dd09f(-0x8a, -0xcf, -0x7f, -0x1b, -0x120)), getword56bad = new RegExp('පක'), getword57bad = new RegExp(_0x59843e(0x23a, 0x208, 0x347, 0x322, 0x263)), getword58bad = new RegExp(_0x48e2e4(-0x216, -0x17a, -0x1f5, -0x1f5, -0x1c1)), getword59bad = new RegExp(_0x5dd09f(-0x4b, -0xff, 0x96, 0x5f, 0x9)), getword60bad = new RegExp(_0x5dd09f(-0x59, -0xbc, -0x116, -0xb6, -0x2f) + 'යා'), getword61bad = new RegExp(_0x59843e(0x9e, 0x1a7, 0xa4, 0xeb, 0x175) + 'ya'), getword62bad = new RegExp(_0x59843e(0x289, 0x26e, 0x1dd, 0x20a, 0x239) + 'ya'), getword63bad = new RegExp(_0x59843e(0x1d5, 0x124, 0x19b, 0x2b7, 0x1fe)), getword64bad = new RegExp(_0x48e2e4(-0x14c, -0xf4, -0x1cc, -0x10, -0x196) + 'ා'), getword65bad = new RegExp(_0x55cc53(0x49e, 0x52b, 0x418, 0x458, 0x4d0)), getword66bad = new RegExp(_0x4d7737(-0x178, -0x1de, -0x20e, -0x1ec, -0x19d)), getword67bad = new RegExp(_0x4d7737(-0xc2, 0x10, -0x58, -0x56, -0xd9)), getword68bad = new RegExp(_0x48e2e4(-0x201, -0x203, -0x172, -0x16d, -0x1ee) + '\x20'), getword69bad = new RegExp(_0x48e2e4(-0x18a, -0x1f4, -0x14d, -0x28f, -0x254)), getword70bad = new RegExp(_0x55cc53(0x303, 0x271, 0x2ba, 0x2e3, 0x28c) + 'a\x20'), getword71bad = new RegExp(_0x5dd09f(0xc0, 0x26, 0x54, 0x183, -0x1e) + 'a\x20'), getword72bad = new RegExp(_0x55cc53(0x2a2, 0x252, 0x34a, 0x2d7, 0x29d) + 'ක\x20'), getword73bad = new RegExp(_0x5dd09f(0xf9, 0x114, 0x1af, 0x6e, 0x1b9) + '\x20'), getword74bad = new RegExp(_0x55cc53(0x401, 0x3a7, 0x346, 0x358, 0x3e5)), getword75bad = new RegExp(_0x55cc53(0x321, 0x32b, 0x340, 0x2ba, 0x2d2) + '\x20'), getword76bad = new RegExp(_0x59843e(0x23a, 0x180, 0x226, 0x1ae, 0x198)), getword77bad = new RegExp(_0x55cc53(0x248, 0x385, 0x1e2, 0x2c3, 0x29e) + 'නා'), getword78bad = new RegExp(_0x55cc53(0x335, 0x376, 0x3eb, 0x324, 0x26d) + _0x5dd09f(-0x99, -0x104, 0x45, -0x2b, -0x17)), getword79bad = new RegExp(_0x55cc53(0x402, 0x3a0, 0x4b4, 0x451, 0x381) + _0x4d7737(-0x95, -0x12b, -0x141, -0x16e, -0xe1)), getword80bad = new RegExp(_0x5dd09f(-0x2b, -0x9, 0xa3, 0x9e, 0x45) + _0x5dd09f(0xac, 0x16d, 0xb3, 0x9f, 0xc4)), getword81bad = new RegExp(_0x59843e(0x18b, 0x173, 0x1db, 0xb9, 0x169) + 'ෙ'), getword82bad = new RegExp(_0x4d7737(-0x127, -0x84, -0x12f, -0xc3, -0x138) + 'ya'), getword83bad = new RegExp(_0x4d7737(-0x127, -0x81, -0x1f0, -0xea, -0x124) + 'y'), getword84bad = new RegExp(_0x5dd09f(0x1a, 0x23, -0x4f, -0x21, -0xb2) + _0x55cc53(0x398, 0x3a5, 0x3d4, 0x3c2, 0x45a)), getword85bad = new RegExp(_0x5dd09f(0x1a, -0x6d, 0xa8, -0x5, 0xd8) + _0x4d7737(-0x1d4, -0x158, -0x1e1, -0x1e6, -0x241)), getword86bad = new RegExp(_0x5dd09f(0x1a, -0xb4, -0x39, 0x5e, 0x10) + _0x59843e(0xbc, 0xbe, 0x75, 0xf4, 0x13d)), getword87bad = new RegExp(_0x59843e(0x1ce, 0x176, 0xe2, 0xd6, 0x1b8) + _0x55cc53(0x4bd, 0x358, 0x480, 0x3f8, 0x390)), getword88bad = new RegExp(_0x5dd09f(-0xc, -0xc5, -0x6e, 0xbb, 0xb7) + 'යා');
        function _0x55cc53(_0x21e345, _0x518061, _0xf104b0, _0x5a7801, _0x42bddb) {
            return _0x4894(_0x5a7801 - 0x15d, _0x42bddb);
        }
        let getword89bad = new RegExp(_0x4d7737(-0x14d, -0xa6, -0x1d5, -0x1c4, -0xcc) + _0x5dd09f(0x104, 0x78, 0xb1, 0x149, 0xec)), getword90bad = new RegExp(_0x48e2e4(-0x263, -0x1e7, -0x134, -0x1c9, -0x2ca) + _0x48e2e4(-0x17f, -0x1ce, -0x14c, -0x24a, -0x22e) + 'ෙ'), getword91bad = new RegExp(_0x4d7737(-0x14d, -0x1e7, -0x1bf, -0x1e9, -0x159) + _0x4d7737(-0xf2, -0x56, -0x128, -0xaa, -0x1b8) + 'ෙ'), getword92bad = new RegExp(_0x48e2e4(-0x194, -0x114, -0x1db, -0x31, -0x84)), getword93bad = new RegExp(_0x5dd09f(0xab, 0x136, 0xf2, 0xbc, -0x7) + 'a'), getword94bad = new RegExp(_0x5dd09f(0x37, 0xc9, 0xf4, 0xd5, -0x5) + 'ak'), getword95bad = new RegExp(_0x59843e(0x1e3, 0x1d6, 0x20a, 0x152, 0x16b) + 'ak'), getword96bad = new RegExp(_0x59843e(0x109, 0x1f6, 0xd7, 0xcf, 0x1b1) + 'ak'), getword97bad = new RegExp(_0x55cc53(0x387, 0x471, 0x3a8, 0x38e, 0x306)), getword98bad = new RegExp(_0x59843e(0x18e, 0x26f, 0x2fb, 0x258, 0x259) + 'a'), getword99bad = new RegExp(_0x55cc53(0x2c9, 0x266, 0x2f9, 0x316, 0x2c8) + _0x5dd09f(0x53, 0xe5, 0x88, -0x27, 0xb6)), getword100bad = new RegExp(_0x55cc53(0x3d0, 0x450, 0x512, 0x451, 0x3a0) + _0x4d7737(-0x173, -0xcd, -0xef, -0x232, -0x98)), getword101bad = new RegExp(_0x4d7737(-0x16c, -0x206, -0x1b1, -0x201, -0xca) + _0x5dd09f(-0x32, -0xbc, 0x58, -0xc, -0x9e)), getword102bad = new RegExp(_0x48e2e4(-0x1a4, -0xe4, -0x19, -0x100, -0x15f) + 'k'), getword103bad = new RegExp(_0x5dd09f(0x56, 0x10c, 0x103, -0x37, 0x73) + 'k'), getword104bad = new RegExp(_0x59843e(0x1be, 0x2ad, 0x112, 0x2c7, 0x1ec) + 'ek'), getword105bad = new RegExp(_0x48e2e4(-0x205, -0x26a, -0x26f, -0x1bc, -0x288) + 'ek'), getword106bad = new RegExp(_0x4d7737(-0x2a, 0x68, 0x1e, -0xf1, 0x99) + _0x5dd09f(-0x4f, 0x87, 0x28, 0x81, -0xad)), getword107bad = new RegExp(_0x59843e(0x1ec, 0xff, 0x17f, 0xec, 0x173) + _0x55cc53(0x2c8, 0x25c, 0x285, 0x2eb, 0x282)), getword108bad = new RegExp(_0x55cc53(0x25e, 0x274, 0x311, 0x324, 0x32d) + _0x48e2e4(-0x1c9, -0xec, -0xbb, -0x88, -0x1ab)), getword109bad = new RegExp(_0x48e2e4(-0xe8, -0xfb, -0x5e, -0x1ba, -0xfc) + 'ක්'), getword110bad = new RegExp(_0x55cc53(0x385, 0x339, 0x3d5, 0x316, 0x2ce) + 'ක්'), getword111bad = new RegExp(_0x55cc53(0x2c4, 0x333, 0x3e1, 0x39d, 0x40d) + '්'), getword112bad = new RegExp(_0x55cc53(0x243, 0x2da, 0x33d, 0x2e2, 0x27d) + 'ak'), getword113bad = new RegExp(_0x48e2e4(-0x1fd, -0x1ab, -0x210, -0x16d, -0x270) + 'ak'), getword114bad = new RegExp(_0x55cc53(0x3f1, 0x38d, 0x250, 0x311, 0x337) + _0x48e2e4(-0x27e, -0x26e, -0x2e6, -0x27d, -0x20e)), getword115bad = new RegExp(_0x59843e(0x298, 0x183, 0x286, 0x1ef, 0x239) + _0x4d7737(-0x1d4, -0x218, -0x25d, -0x25d, -0x1be)), getword116bad = new RegExp(_0x5dd09f(-0x59, 0x41, -0x13, -0xb9, -0x129) + _0x59843e(0x284, 0x2e1, 0x384, 0x28d, 0x2a2)), getword117bad = new RegExp(_0x4d7737(-0x2a, -0xdd, -0x39, 0x92, 0x71) + _0x48e2e4(-0x18e, -0x236, -0x2f5, -0x1dd, -0x15a)), getword118bad = new RegExp(_0x59843e(0x19c, 0x170, 0x1b2, 0xe1, 0x173) + _0x48e2e4(-0x2a0, -0x236, -0x317, -0x29f, -0x190)), getword119bad = new RegExp(_0x59843e(0xf0, 0xdd, 0x18d, 0xe1, 0x188) + 'ගෙ'), getword120bad = new RegExp(_0x5dd09f(0x117, 0x190, 0x188, 0x1b2, 0x17e) + _0x59843e(0x232, 0x10a, 0x29e, 0x1ef, 0x1cf)), getword121bad = new RegExp(_0x55cc53(0x2dc, 0x2e6, 0x312, 0x324, 0x264) + 'ට'), getword122bad = new RegExp(_0x5dd09f(-0x2b, -0x10a, -0x8f, -0x4c, -0xef) + _0x4d7737(-0x110, -0xd9, -0x1a8, -0x1e3, -0x1a0)), getword123bad = new RegExp(_0x4d7737(-0x154, -0x1d2, -0x1e0, -0x1de, -0xf0) + 'a'), getword124bad = new RegExp(_0x55cc53(0x460, 0x410, 0x3c7, 0x413, 0x431) + 'a'), getword125bad = new RegExp(_0x55cc53(0x44a, 0x422, 0x3d4, 0x396, 0x36c)), getword126bad = new RegExp(_0x48e2e4(-0x196, -0x1f0, -0x221, -0x267, -0x168)), getword127bad = new RegExp(_0x59843e(0x146, 0x19d, 0x1ee, 0x224, 0x1b8) + _0x5dd09f(0x5b, -0x78, 0xb5, 0xf9, 0x85)), getword128bad = new RegExp(_0x5dd09f(0xb9, 0xb7, 0x169, 0x43, 0x139) + _0x59843e(0x1eb, 0x208, 0x23f, 0x201, 0x1f9)), getword129bad = new RegExp(_0x48e2e4(-0x60, -0xc4, -0xdf, -0x74, -0xcc) + _0x5dd09f(0x31, 0x10b, 0x25, 0x5c, 0xce)), getword130bad = new RegExp(_0x55cc53(0x372, 0x3ce, 0x2f3, 0x30f, 0x301) + _0x55cc53(0x433, 0x34d, 0x3a7, 0x36b, 0x2a3)), getword131bad = new RegExp(_0x5dd09f(-0x16, -0xf5, 0x5f, -0x30, -0x57) + 'ට'), getword132bad = new RegExp(_0x4d7737(-0x14d, -0x12b, -0x217, -0x7f, -0x145) + 'යට'), getword133bad = new RegExp(_0x5dd09f(0x35, 0x80, 0x96, -0xa6, 0xe)), getword134bad = new RegExp(_0x55cc53(0x3be, 0x389, 0x384, 0x406, 0x404) + 'ta'), getword135bad = new RegExp(_0x5dd09f(0x89, 0x3d, 0x65, 0x5f, -0x17) + 'ta'), getword136bad = new RegExp(_0x4d7737(-0x1d5, -0x26d, -0x271, -0x251, -0x185) + 'a'), getword137bad = new RegExp(_0x4d7737(-0xd2, -0x58, -0x78, -0x1a0, -0x6f) + 'a'), getword138bad = new RegExp(_0x55cc53(0x4ab, 0x455, 0x4e0, 0x425, 0x461) + 'a'), getword139bad = new RegExp(_0x55cc53(0x3b4, 0x356, 0x217, 0x2e8, 0x3bd) + 'a'), getword140bad = new RegExp(_0x4d7737(-0x45, -0x93, -0x9a, -0x70, -0x8d)), getword141bad = new RegExp(_0x5dd09f(0x37, -0x33, -0x68, 0x49, -0x5a) + 'ek');
        function _0x5dd09f(_0xf173f9, _0x21ed57, _0x155b3d, _0x241614, _0x495314) {
            return _0x4894(_0xf173f9 - -0x1dd, _0x21ed57);
        }
        let getword142bad = new RegExp(_0x59843e(0x171, 0x15a, 0xc3, 0x1a9, 0x186) + 'ek'), getword143bad = new RegExp(_0x48e2e4(-0x151, -0x1c8, -0x145, -0x101, -0x23f) + 'ek'), getword144bad = new RegExp(_0x59843e(0x1eb, 0x18e, 0x257, 0x228, 0x1d5) + 'ek'), getword145bad = new RegExp(_0x5dd09f(-0x24, -0x6b, -0x39, -0x80, -0x8b) + _0x55cc53(0x3a3, 0x3dc, 0x32b, 0x31e, 0x3c0)), getword146bad = new RegExp(_0x55cc53(0x263, 0x3bf, 0x295, 0x324, 0x31c) + _0x4d7737(-0x189, -0x1ec, -0x11b, -0x1ec, -0x1d2)), getword147bad = new RegExp(_0x4d7737(-0x16c, -0xaa, -0x125, -0xe1, -0x1ff) + _0x55cc53(0x338, 0x334, 0x3e4, 0x3c5, 0x317)), getword148bad = new RegExp(_0x5dd09f(0x117, 0x14e, 0x82, 0x89, 0x73) + _0x4d7737(-0xb6, -0x6c, -0x17b, -0x5, -0x43)), getword149bad = new RegExp(_0x48e2e4(-0x8a, -0x121, -0x5d, -0x181, -0x179) + _0x4d7737(-0x1d4, -0x114, -0x11a, -0x12c, -0x1ff)), getword150bad = new RegExp(_0x5dd09f(0x8f, 0x6e, 0x34, 0x112, 0xa4) + _0x48e2e4(-0x2fb, -0x26e, -0x234, -0x2ca, -0x2c4)), getword151bad = new RegExp(_0x5dd09f(-0x7d, -0x127, -0xc, -0x8b, 0x40) + 'k'), getword152bad = new RegExp(_0x48e2e4(-0xc4, -0x100, -0x1c9, -0xfc, -0x136) + 'k'), getword153bad = new RegExp(_0x59843e(0x22a, 0x12d, 0x207, 0x288, 0x1f3)), getword154bad = new RegExp(_0x48e2e4(-0x171, -0x1d9, -0x175, -0x283, -0x116)), getword155bad = new RegExp(_0x48e2e4(-0x1b0, -0x1e7, -0x23c, -0x235, -0x17d) + 'ි'), getword156bad = new RegExp(_0x5dd09f(0x55, 0x1e, 0x6d, -0x89, 0xaf) + _0x55cc53(0x34f, 0x370, 0x3bc, 0x339, 0x33e)), getword157bad = new RegExp(_0x59843e(0x165, 0x275, 0xcf, 0x17b, 0x1a0) + _0x4d7737(-0x142, -0x1a8, -0xa1, -0x206, -0x15a)), getword158bad = new RegExp(_0x59843e(0x1ef, 0x1b1, 0x1fe, 0x224, 0x1a0) + _0x48e2e4(-0x18d, -0x26e, -0x245, -0x288, -0x24c)), getword159bad = new RegExp(_0x55cc53(0x334, 0x2ad, 0x2d9, 0x38f, 0x458) + _0x59843e(0xdd, 0x114, 0x57, 0x8b, 0x10b)), getword160bad = new RegExp(_0x48e2e4(-0x1e8, -0x1b8, -0x234, -0x213, -0x28d)), getword161bad = new RegExp(_0x48e2e4(-0x277, -0x22c, -0x1eb, -0x1d2, -0x2b9)), getword162bad = new RegExp(_0x59843e(0x1cf, 0x244, 0xd3, 0x242, 0x195) + 'e'), getword163bad = new RegExp(_0x48e2e4(-0x2d8, -0x211, -0x1cd, -0x1c9, -0x29c) + 'e'), getword164bad = new RegExp(_0x55cc53(0x43b, 0x3ff, 0x43a, 0x419, 0x35e) + 'e'), getword165bad = new RegExp(_0x5dd09f(-0x11, -0x6d, 0x58, -0x23, 0xb4) + 'e'), getword166bad = new RegExp(_0x48e2e4(-0xf6, -0xf1, -0x19b, -0x96, -0xa2) + 'm'), getword167bad = new RegExp(_0x4d7737(-0x7b, -0xf9, -0xc1, 0x12, -0xde) + 'm'), getword168bad = new RegExp(_0x5dd09f(-0xd, 0x18, -0x83, 0x54, 0xe) + 'am'), getword169bad = new RegExp(_0x48e2e4(-0x1f1, -0x1e8, -0x1d3, -0x118, -0x127) + 'an'), getword170bad = new RegExp(_0x48e2e4(-0x3b, -0x118, -0x187, -0x7a, -0xc4) + 'an'), getword171bad = new RegExp(_0x5dd09f(0xc3, 0x14d, -0x10, 0x12c, 0xb5) + 'am'), getword172bad = new RegExp(_0x4d7737(-0x129, -0x1af, -0x67, -0x6e, -0xf9) + 'u'), getword173bad = new RegExp(_0x55cc53(0x3c2, 0x2d3, 0x384, 0x37c, 0x44b) + 'u'), getword174bad = new RegExp(_0x4d7737(-0x131, -0x4f, -0x96, -0xc6, -0x194) + '්'), getword175bad = new RegExp(_0x48e2e4(-0x2b7, -0x25f, -0x298, -0x196, -0x1fa) + '්'), getword176bad = new RegExp(_0x4d7737(-0x60, -0xba, -0x135, -0xc2, 0x3a) + 'r'), getword177bad = new RegExp(_0x55cc53(0x20b, 0x218, 0x379, 0x2ae, 0x2b9) + 'r'), getword178bad = new RegExp(_0x55cc53(0x36d, 0x35d, 0x46c, 0x3ed, 0x3bd)), getword179bad = new RegExp(_0x59843e(0x17d, 0x227, 0x2a2, 0x254, 0x1e2) + '්'), getword180bad = new RegExp(_0x59843e(0x1ad, 0x2df, 0x194, 0x2aa, 0x273)), getword181bad = new RegExp(_0x59843e(0x218, 0x2e3, 0x242, 0x1a2, 0x234) + 'ම්'), getword182bad = new RegExp(_0x4d7737(-0x2f, 0x3e, -0x2c, -0x108, -0x105) + _0x59843e(0x1c8, 0x16f, 0xe6, 0x203, 0x18f)), getword183bad = new RegExp(_0x5dd09f(0xfa, 0x1e, 0x14c, 0x6d, 0x11e) + _0x48e2e4(-0x18d, -0xe7, -0x95, -0x13b, -0x110)), getword184bad = new RegExp(_0x55cc53(0x3a5, 0x23c, 0x276, 0x319, 0x357) + 'යා'), getword185bad = new RegExp(_0x55cc53(0x37c, 0x3fc, 0x39f, 0x376, 0x3b0) + 'ි'), getword186bad = new RegExp('වඳ'), getword187bad = new RegExp(_0x55cc53(0x46f, 0x495, 0x3b1, 0x43a, 0x51a)), getword188bad = new RegExp(_0x59843e(0x97, 0x179, 0x1d9, 0x119, 0x149)), getword189bad = new RegExp(_0x48e2e4(-0x2ad, -0x1e5, -0x129, -0x2c4, -0x1df) + _0x5dd09f(-0x72, 0x5, -0xec, -0x47, 0x34)), getword190bad = new RegExp(_0x48e2e4(-0xf6, -0x1d1, -0x1f9, -0x254, -0x132) + _0x55cc53(0x344, 0x37b, 0x402, 0x41e, 0x4b9)), getword191bad = new RegExp(_0x55cc53(0x462, 0x33a, 0x2f4, 0x387, 0x2e0) + _0x48e2e4(-0x216, -0x1f2, -0x1ae, -0x21e, -0x297));
        setInterval(function () {
            const _0x53c5a3 = {
                'HuJcA': function (_0xdcf4fa) {
                    return _0xdcf4fa();
                }
            };
            function _0xd66f1b(_0x45924a, _0x380734, _0x29c00f, _0x223b2, _0xe7e065) {
                return _0x4d7737(_0x223b2 - -0xb5, _0x380734, _0x29c00f - 0x43, _0x223b2 - 0x3c, _0xe7e065 - 0xd1);
            }
            _0x53c5a3[_0xd66f1b(-0x16b, -0x152, -0x241, -0x1f5, -0x12f)](_0x2496c6);
        }, -0x6da * 0x3 + -0x23d1 * -0x1 + -0x5d * -0x1);
        let getword192bad = new RegExp(_0x48e2e4(-0x186, -0xeb, -0x1c1, -0xef, -0x18e) + 'ි'), getword193bad = new RegExp('පක'), getword194bad = new RegExp(_0x4d7737(-0x26, -0x41, -0x7f, -0x8c, 0x77)), getword195bad = new RegExp(_0x59843e(0xf5, 0x97, 0x1d1, 0x12c, 0x136) + _0x5dd09f(-0x62, -0xf2, 0x69, -0x50, -0xa9)), getword196bad = new RegExp(_0x59843e(0x162, 0x1aa, 0x132, 0x2b5, 0x20b) + '්'), getword197bad = new RegExp(_0x55cc53(0x41f, 0x3db, 0x37d, 0x438, 0x4eb) + 'ම්'), getword198bad = new RegExp(_0x5dd09f(0x100, 0x145, 0xec, 0x19e, 0x16a)), getword199bad = new RegExp(_0x4d7737(-0x15f, -0xfb, -0x13f, -0xaa, -0x1c3)), getword200bad = new RegExp(_0x4d7737(-0xcd, -0xa2, -0x64, -0x56, -0x1af) + _0x48e2e4(-0x1fb, -0x1c0, -0x269, -0x1b5, -0x112)), getword201bad = new RegExp(_0x5dd09f(-0x41, -0xdb, -0x11b, -0xa2, -0x66)), getword202bad = new RegExp(_0x48e2e4(-0x210, -0x159, -0xa1, -0x1ca, -0x1ed)), getword203bad = new RegExp(_0x4d7737(-0xb3, -0x85, -0xc6, -0x5b, 0x16) + 'ක'), getword204bad = new RegExp(_0x5dd09f(-0x7b, -0xcc, -0x46, -0xb5, -0x14a) + 'නෙ'), getword205bad = new RegExp(_0x59843e(0x1b7, 0x88, 0x11c, 0x182, 0x127) + 'නා'), getword206bad = new RegExp(_0x59843e(0x1ba, 0x13e, 0x163, 0x252, 0x1fe)), getword207bad = new RegExp(_0x4d7737(-0x164, -0x16b, -0x109, -0x242, -0x158) + _0x59843e(0x1e1, 0x15f, 0x1ae, 0xcd, 0x1af)), getword208bad = new RegExp(_0x48e2e4(-0x110, -0x1e7, -0x166, -0x2b3, -0x149) + _0x59843e(0x1d4, 0xfc, 0xa7, 0x209, 0x127) + 'නා'), getword209bad = new RegExp(_0x48e2e4(-0x125, -0x1be, -0x194, -0x1cf, -0x153) + _0x48e2e4(-0x14e, -0x101, -0x7e, -0x5a, -0x1a1)), getword210bad = new RegExp(_0x55cc53(0x27a, 0x219, 0x341, 0x2c1, 0x390) + _0x48e2e4(-0x1e7, -0x1f1, -0x146, -0x1a9, -0x240) + 'ි'), getword211bad = new RegExp(_0x48e2e4(-0x19f, -0x254, -0x2c9, -0x1a2, -0x209) + _0x59843e(0x2ec, 0x227, 0x365, 0x21d, 0x2bc)), getword212bad = new RegExp(_0x4d7737(-0x18c, -0xd3, -0x26c, -0x1e1, -0x1ce)), getword213bad = new RegExp(_0x5dd09f(-0x2f, -0x12, 0x73, -0x7a, -0x8) + _0x5dd09f(-0x6d, 0x5f, -0x128, -0x131, -0x1b)), getword214bad = new RegExp(_0x55cc53(0x353, 0x421, 0x371, 0x3b7, 0x3cd) + _0x4d7737(-0x128, -0x12c, -0xaf, -0x91, -0x121)), getword215bad = new RegExp(_0x59843e(0x222, 0x306, 0x357, 0x28d, 0x2c3) + 'ුව'), getword216bad = new RegExp(_0x48e2e4(-0x170, -0x145, -0x21e, -0x1e2, -0x129) + 'ම්'), getword217bad = new RegExp(_0x48e2e4(-0x111, -0xc8, -0x117, -0x12c, -0x96) + _0x55cc53(0x47f, 0x501, 0x352, 0x41d, 0x467)), getword218bad = new RegExp(_0x4d7737(-0xa0, -0xaf, -0x6d, -0x3f, -0x138) + _0x55cc53(0x41d, 0x3a5, 0x41e, 0x41d, 0x3c8)), getword219bad = new RegExp(_0x55cc53(0x27a, 0x2d1, 0x31b, 0x30a, 0x23a) + _0x48e2e4(-0x1aa, -0x21e, -0x300, -0x226, -0x26c)), getword220bad = new RegExp(_0x59843e(0x14b, 0xe4, 0xa1, 0x223, 0x158) + _0x55cc53(0x282, 0x33a, 0x2c6, 0x2f7, 0x21e)), getword221bad = new RegExp(_0x55cc53(0x293, 0x2e3, 0x2ff, 0x337, 0x3e4)), getword222bad = new RegExp(_0x55cc53(0x3ae, 0x41b, 0x2d0, 0x3a3, 0x42d)), getword223bad = new RegExp(_0x4d7737(-0x7f, -0x23, -0xeb, -0x7, 0xd) + 'n'), getword224bad = new RegExp(_0x48e2e4(-0xce, -0xc3, -0x10d, -0x14d, -0xb0) + 'n'), getword225bad = new RegExp(_0x48e2e4(-0x16f, -0x14a, -0x22c, -0x15a, -0x1d7) + 'a'), getword226bad = new RegExp(_0x59843e(0x1c8, 0x17f, 0x28b, 0x2d7, 0x202) + 'a'), getword227bad = new RegExp(_0x4d7737(-0x137, -0xe2, -0x122, -0xc8, -0x129) + _0x48e2e4(-0x89, -0xf7, -0x101, -0x4d, -0x122)), getword228bad = new RegExp(_0x55cc53(0x256, 0x28c, 0x33f, 0x31d, 0x239) + _0x48e2e4(-0x215, -0x241, -0x1d1, -0x244, -0x266) + 'i'), getword229bad = new RegExp(_0x5dd09f(0x73, -0x2c, 0x1d, 0x46, -0x28) + _0x55cc53(0x2af, 0x28c, 0x322, 0x2d4, 0x235) + 'i'), getword230bad = new RegExp(_0x4d7737(-0xa3, -0x17f, -0xf1, -0x13d, 0x4) + 'mi'), getword231bad = new RegExp(_0x48e2e4(-0x186, -0x21b, -0x2a0, -0x215, -0x1ae) + 'mi'), getword232bad = new RegExp(_0x5dd09f(0x8a, 0x83, 0x1a, 0xf9, 0x5a)), getword233bad = new RegExp(_0x59843e(0x1cc, 0x2c8, 0x345, 0x305, 0x274)), getword234bad = new RegExp(_0x5dd09f(0xc3, 0x69, 0x8f, 0x14b, 0x16) + 'am'), getword235bad = new RegExp(_0x48e2e4(-0x127, -0x1e8, -0x17f, -0x286, -0x2a1) + 'am'), getword236bad = new RegExp(_0x48e2e4(-0x177, -0xe3, -0x13b, -0x38, -0x1e) + _0x5dd09f(0x10b, 0x89, 0xfd, 0x1e0, 0x139) + _0x5dd09f(0xb1, 0x193, 0x29, 0x7a, 0x4d)), getword237bad = new RegExp(_0x5dd09f(0x5a, -0x39, 0x84, 0x11c, -0x5b) + _0x4d7737(-0x36, -0x44, -0xfc, -0x3a, -0x92) + _0x59843e(0x2b9, 0x206, 0x2c3, 0x2f2, 0x24f)), getword238bad = new RegExp(_0x55cc53(0x3b7, 0x3c1, 0x359, 0x378, 0x3b1) + 'm'), getword239bad = new RegExp(_0x48e2e4(-0x4b, -0xc1, -0x13, 0x23, -0x12e) + 'm'), getword240bad = new RegExp(_0x4d7737(-0x9d, -0x56, -0x9f, -0xc6, -0xbc) + 'm'), getword241bad = new RegExp(_0x59843e(0x26d, 0x2d1, 0x2a3, 0x2b8, 0x23d) + 'm'), getword242bad = new RegExp(_0x4d7737(-0x7f, -0x2e, -0xee, -0x6f, -0x5b) + 'n'), getword243bad = new RegExp(_0x55cc53(0x4f1, 0x49a, 0x4df, 0x452, 0x4df) + 'n'), getword244bad = new RegExp(_0x5dd09f(0xb6, 0x45, -0x1c, 0x49, 0x30)), getword245bad = new RegExp(_0x48e2e4(-0xd0, -0x11e, -0x1c9, -0x1ae, -0x161)), getword246bad = new RegExp(_0x4d7737(-0x1d9, -0x18e, -0x192, -0x248, -0x24a) + _0x4d7737(-0x10e, -0xb7, -0xea, -0x67, -0x1a1) + 'a'), getword247bad = new RegExp(_0x4d7737(-0x77, -0xd7, -0x126, -0x16, -0x35) + _0x5dd09f(0x33, -0x70, -0x9f, 0x5a, -0x8a) + 'a'), getword248bad = new RegExp(_0x55cc53(0x28d, 0x25e, 0x20a, 0x2dd, 0x24f) + 'e\x20'), getword249bad = new RegExp(_0x59843e(0x272, 0x1cc, 0x1e7, 0x28f, 0x245) + 'e\x20'), getword250bad = new RegExp(_0x55cc53(0x3d4, 0x30f, 0x496, 0x3e7, 0x42b) + _0x59843e(0xd9, 0x1b6, 0x105, 0x20f, 0x15f) + _0x55cc53(0x426, 0x448, 0x4c8, 0x408, 0x346)), getword251bad = new RegExp(_0x4d7737(-0x1b, 0x2f, 0x5d, -0x4e, -0x3a) + _0x59843e(0x234, 0x2e1, 0x29c, 0x316, 0x267) + _0x48e2e4(-0x25e, -0x250, -0x175, -0x2a4, -0x1dc)), getword252bad = new RegExp(_0x59843e(0x242, 0x24e, 0x280, 0x168, 0x237) + _0x4d7737(-0x9b, -0x34, -0x36, -0x152, -0x12b)), getword253bad = new RegExp(_0x48e2e4(-0x64, -0xee, -0xbf, -0x1b2, -0x88) + _0x4d7737(-0x9b, 0x1c, -0xb4, -0x1c, -0x14c)), getword254bad = new RegExp(_0x59843e(0x25f, 0x1ff, 0x1af, 0x2bb, 0x1d8) + _0x4d7737(-0x11d, -0x5b, -0x108, -0x177, -0x169)), getword255bad = new RegExp(_0x55cc53(0x386, 0x2b4, 0x230, 0x2ea, 0x2f5) + _0x48e2e4(-0xf4, -0x1b7, -0x15c, -0x1be, -0x139)), getword256bad = new RegExp(_0x55cc53(0x3c9, 0x430, 0x30e, 0x3b1, 0x41a) + 'na'), getword257bad = new RegExp(_0x48e2e4(-0x1ee, -0x192, -0x15b, -0x19f, -0x115) + 'na'), getword258bad = new RegExp(_0x5dd09f(0x127, 0x1ad, 0x18a, 0x1a4, 0x76) + _0x5dd09f(0x67, -0x5f, 0x14b, -0x8, 0xcd)), getword259bad = new RegExp(_0x5dd09f(-0x3b, 0x87, -0x29, -0x115, -0x26) + _0x55cc53(0x482, 0x38c, 0x407, 0x3a1, 0x399)), getword260bad = new RegExp(_0x48e2e4(-0x222, -0x1c1, -0x124, -0x25f, -0x263) + _0x59843e(0x1a2, 0x299, 0x151, 0x296, 0x215) + 'na'), getword261bad = new RegExp(_0x48e2e4(-0x1db, -0x122, -0xe0, -0x184, -0x183) + _0x5dd09f(0x77, 0x31, -0x31, 0x10c, 0xd9) + 'na'), getword262bad = new RegExp(_0x55cc53(0x3e8, 0x303, 0x2cb, 0x32f, 0x3ff) + _0x5dd09f(-0x66, -0x123, -0xfd, -0xc5, -0x28) + 'u'), getword263bad = new RegExp(_0x5dd09f(-0x53, -0xcd, 0x1c, -0x10e, -0xfc) + _0x4d7737(-0x1a7, -0x1e6, -0x202, -0x287, -0x187) + 'i'), getword264bad = new RegExp(_0x5dd09f(0x80, 0x140, -0x5, 0x3b, 0x155) + _0x59843e(0x14d, 0xa5, 0x245, 0xfc, 0x173) + 'hi'), getword265bad = new RegExp(_0x59843e(0x109, 0x167, 0x19f, 0x119, 0x115) + _0x4d7737(-0x16c, -0x11c, -0x129, -0x143, -0x16b) + 'hi'), getword266bad = new RegExp(_0x5dd09f(0x80, 0x114, 0x10, 0x72, 0xc9) + _0x5dd09f(-0x2a, -0x4e, -0x4, -0x2f, 0x4b)), getword267bad = new RegExp(_0x59843e(0x1cd, 0x4e, 0xa9, 0x10b, 0x115) + _0x55cc53(0x2af, 0x235, 0x267, 0x310, 0x3e0)), getword268bad = new RegExp(_0x48e2e4(-0x296, -0x276, -0x272, -0x2a1, -0x2ce) + _0x59843e(0x2bf, 0x24a, 0x235, 0x22e, 0x1dd) + _0x48e2e4(-0x305, -0x222, -0x1f2, -0x25f, -0x288) + _0x55cc53(0x489, 0x47d, 0x49b, 0x3e8, 0x3ff)), getword269bad = new RegExp(_0x48e2e4(-0x200, -0x255, -0x320, -0x1f4, -0x18f) + _0x4d7737(-0x1ce, -0x204, -0x294, -0x152, -0x152) + _0x5dd09f(0x4a, -0x4, -0xd, 0x82, 0x124) + _0x4d7737(-0x117, -0x7e, -0xec, -0x1d1, -0xbc) + _0x55cc53(0x44a, 0x438, 0x4d7, 0x45d, 0x4cf) + _0x59843e(0x304, 0x270, 0x173, 0x176, 0x224) + _0x4d7737(-0x132, -0xd4, -0xb6, -0x97, -0x18d)), getword270bad = new RegExp(_0x59843e(0x21b, 0x311, 0x21d, 0x2f2, 0x28a) + _0x55cc53(0x247, 0x269, 0x393, 0x2d4, 0x358) + 'i'), getword271bad = new RegExp(_0x59843e(0x11b, 0x8a, 0x159, 0x182, 0x13a) + _0x48e2e4(-0x199, -0x241, -0x322, -0x31e, -0x323) + 'i'), getword272bad = new RegExp(_0x4d7737(-0xbd, 0x15, -0x15a, -0xea, -0x8d) + _0x55cc53(0x2c8, 0x21f, 0x28b, 0x2ec, 0x208)), getword273bad = new RegExp(_0x59843e(0x158, 0x168, 0x2b4, 0x1b0, 0x1e5) + _0x55cc53(0x22c, 0x290, 0x2ff, 0x2ec, 0x36b)), getword274bad = new RegExp(_0x55cc53(0x267, 0x274, 0x334, 0x340, 0x3bd) + _0x55cc53(0x2c4, 0x2db, 0x1e8, 0x2a4, 0x1e7)), getword275bad = new RegExp(_0x55cc53(0x375, 0x4a2, 0x45e, 0x450, 0x501) + _0x55cc53(0x23e, 0x351, 0x363, 0x2a4, 0x232)), getword276bad = new RegExp(_0x5dd09f(-0x29, -0x1a, -0xc6, -0x26, -0xad) + _0x5dd09f(-0x93, -0x16f, 0x3a, -0x145, -0xcf)), getword277bad = new RegExp(_0x5dd09f(0x9b, 0xf0, 0x12d, 0x10c, 0x1e) + _0x4d7737(-0x1d4, -0x182, -0x24e, -0x21d, -0x23c)), getword278bad = new RegExp(_0x48e2e4(-0x280, -0x1f1, -0x214, -0x2cd, -0x268) + 'ෝ'), getword279bad = new RegExp(_0x5dd09f(-0x2b, -0x8d, 0x49, -0x66, 0x92) + 'ho');
        function _0x4d7737(_0x26dd01, _0x37ac35, _0x212417, _0x43dd1d, _0x5ce108) {
            return _0x4894(_0x26dd01 - -0x31e, _0x37ac35);
        }
        let getword280bad = new RegExp(_0x4d7737(-0x2a, -0x36, -0x1a, -0x51, 0x41) + 'ho'), getword281bad = new RegExp(_0x59843e(0x201, 0x75, 0x78, 0x1a2, 0x120)), getword282bad = new RegExp(_0x4d7737(-0x3b, -0x34, 0x9d, 0x52, -0x4)), getword283bad = new RegExp(_0x48e2e4(-0x292, -0x1f9, -0x17d, -0x1c6, -0x2c7)), getword284bad = new RegExp(_0x59843e(0x352, 0x36a, 0x2f4, 0x2f7, 0x2a1)), getword285bad = new RegExp(_0x55cc53(0x3c2, 0x44d, 0x43d, 0x3f7, 0x44f)), getword286bad = new RegExp(_0x55cc53(0x34b, 0x36e, 0x381, 0x2d0, 0x2ca)), getword287bad = new RegExp(_0x59843e(0x200, 0x20e, 0x27d, 0x24f, 0x1cd)), getword288bad = new RegExp(_0x48e2e4(-0x2b5, -0x219, -0x1ce, -0x17a, -0x2ea)), getword289bad = new RegExp(_0x59843e(0xbc, 0x10e, 0x1be, 0x1b5, 0x149) + 'ෝ'), getword290bad = new RegExp(_0x48e2e4(-0x170, -0x14a, -0x151, -0x180, -0xac) + 'o'), getword291bad = new RegExp(_0x48e2e4(-0x11a, -0x177, -0x198, -0x142, -0x141) + 'o'), getword292bad = new RegExp(_0x55cc53(0x351, 0x3fe, 0x349, 0x335, 0x347) + _0x48e2e4(-0xc2, -0xb3, -0xb7, -0x153, -0x62) + _0x59843e(0x2bc, 0x132, 0x23c, 0x2a6, 0x203)), getword293bad = new RegExp(_0x55cc53(0x3cd, 0x371, 0x397, 0x34f, 0x305) + _0x48e2e4(-0x1f8, -0x19e, -0x26e, -0x158, -0x1c4) + _0x55cc53(0x3ae, 0x495, 0x3c4, 0x44b, 0x3fd)), getword294bad = new RegExp(_0x5dd09f(-0x77, -0x13, -0x157, 0x40, 0x63) + _0x4d7737(-0x120, -0x6b, -0x14f, -0x1da, -0xd1));
        function _0x48e2e4(_0x143ff9, _0x48b13a, _0x35b85e, _0x1ccbf2, _0x181f18) {
            return _0x4894(_0x48b13a - -0x3b8, _0x143ff9);
        }
        function _0x4894(_0x489428, _0x2b4590) {
            const _0x2b56ea = _0x1929();
            return _0x4894 = function (_0x37e289, _0x504a86) {
                _0x37e289 = _0x37e289 - (-0x9 * 0xa5 + 0xf8e + -0x1 * 0x883);
                let _0x1d55d8 = _0x2b56ea[_0x37e289];
                return _0x1d55d8;
            }, _0x4894(_0x489428, _0x2b4590);
        }
        function _0x1929() {
            const _0x455554 = [
                'Keriy',
                'යෙක්න',
                'gbrHf',
                'hfh',
                'හුකාම',
                'ඩුව',
                'LvmTz',
                'Wesiy',
                'AMHxG',
                'පුvgh',
                '1084869vHzkJy',
                'pan',
                'hukap',
                'ල්ලි',
                'ponna',
                '්දුමා',
                'ZClbM',
                'කැරිහ',
                'ඒසි',
                'AmFiM',
                'bYgAZ',
                'නො\x20',
                'lGerj',
                'Bacic',
                'ane',
                'Kamri',
                'ZkDpj',
                'test',
                'Jtidw',
                'rLOOG',
                'jjfjj',
                'Wesi\x20',
                'lVawh',
                'mPvrm',
                'NgYgn',
                'payyo',
                'Baduw',
                'hata',
                'Vulva',
                'andum',
                'piss',
                'පයියට',
                'PUKA',
                'vesiy',
                'DccPr',
                'https',
                'baluj',
                'hNcFL',
                'පිම්ප',
                'jiiii',
                'kanda',
                'ihogk',
                'lKvNY',
                'WInFK',
                'Hukap',
                'ahTUA',
                'හුකහන',
                'Cagla',
                'mNVTo',
                'Ledab',
                '6tGkfSj',
                'Hukan',
                'jjffj',
                'pakic',
                'jdSHj',
                'නාට්ට',
                'pakay',
                'යෙක්ග',
                'uWtkb',
                'wesig',
                'esavo',
                'ක්ගෙ',
                'Vesi\x20',
                'ponni',
                'Payye',
                'rNNqf',
                'hkLwW',
                'OURaE',
                'Manda',
                'yata',
                'පකට',
                'hutho',
                'EIFIk',
                '5rbuhdp',
                'බඩුව',
                'පක්',
                'fzrTU',
                'බඩුවක',
                'Kariy',
                'hjjo\x20',
                'MiXvL',
                'duwa',
                'a-zA-',
                'Pimpi',
                'හිකිල',
                'idodK',
                'vIMBg',
                'කණ්ඩම',
                '3180702FsFahf',
                'Vesit',
                'phbfO',
                'PgniY',
                'Fuck',
                'Horah',
                'කනවැන',
                'VhCAO',
                'swNOP',
                'hukan',
                'opyOl',
                'Nlppw',
                'fuck',
                'gUvvf',
                'JFQwo',
                'ලෙඩබැ',
                '\x5c(\x20*\x5c',
                'පයියා',
                'potta',
                'DIiuX',
                'මෑමල',
                'vBuNq',
                'ledab',
                'හුත්',
                'fhhhf',
                'phlsk',
                'yage',
                'Payya',
                'paka\x20',
                'hiyek',
                'Kari\x20',
                'utucg',
                'අවජාත',
                'Hutti',
                'hikun',
                'kariy',
                'fLHwC',
                'hutta',
                'ITFTa',
                'Zuvyr',
                'පිත්ත',
                'tdrLj',
                'count',
                'awaja',
                'XKcOw',
                'Pinna',
                'esawo',
                'tCirS',
                'natta',
                'Konda',
                'wlVtZ',
                'Pitht',
                'umUMQ',
                'rwaOQ',
                'konda',
                '1796936KoDmjT',
                'thaka',
                'Ma\x20at',
                'ZpOMd',
                'Hutho',
                'bIoSu',
                'vesaw',
                'hige',
                'ma\x20mf',
                'jvuug',
                'Pamko',
                'osUHA',
                'ika',
                'funct',
                'පකීර්',
                'VcDvn',
                'pussy',
                'pako\x20',
                'pWrqM',
                'iQitn',
                'Ponna',
                'hutti',
                'Vesaw',
                'Esawo',
                'Pako\x20',
                'yekge',
                'IWcyG',
                'Uddik',
                'RTxDd',
                'picha',
                'hukah',
                'FewOg',
                'පකා',
                'Hukaa',
                'vesi\x20',
                'qZyGl',
                'ggdds',
                'Kanaw',
                'Wemsi',
                'payya',
                'Piss\x20',
                'gala\x20',
                'හුකා',
                'කැරි',
                'WUuVy',
                'Vsbsl',
                'UswYs',
                '17373360FunNsQ',
                'ෆකීර්',
                'Paka\x20',
                'eWFPL',
                'vulva',
                'Pakat',
                'ුත්ති',
                'Hutte',
                'huka\x20',
                'wesaw',
                'xnxx',
                'Bacig',
                'පයියෙ',
                'pakee',
                'LCGpY',
                'ham',
                'ත්ති',
                'EDAmU',
                'LSDfy',
                'වේසාව',
                'Pakic',
                'zXfTR',
                'hukaa',
                'wesit',
                'wadah',
                'Awaja',
                'humth',
                'ියක්',
                'බැල්ල',
                'ariZb',
                'JxTgx',
                'keriy',
                'ංගල්',
                'ructo',
                'Hikil',
                'payye',
                'manda',
                'ඒසාවා',
                'මරිමො',
                'e)\x20{}',
                'වේසිට',
                'input',
                'කොණ්ඩ',
                'Hutta',
                'පීචන්',
                'Wesaw',
                'eyRHr',
                'pako',
                'යෙක්',
                'jzONq',
                'Hutto',
                'eFIaF',
                'zA-Z_',
                'RuMpC',
                'pamka',
                'manas',
                'Dkasd',
                '://ch',
                'ydwbv',
                'puka',
                'Objec',
                'iතෝ\x20',
                'කල්ලත',
                'pitht',
                'iNTgy',
                'XCRwV',
                'Wesab',
                'Hutht',
                'Picha',
                'hgDMQ',
                'Kanda',
                'ඇටදෙක',
                'Humka',
                'FAULM',
                'වේසි',
                'pamko',
                'PJqkx',
                'F\x20u\x20c',
                '*(?:[',
                'jifjf',
                '\x20(tru',
                'වේසබඩ',
                'Ma\x20ma',
                'gonba',
                'fsdfg',
                'GAzyZ',
                'eZZcH',
                'nhoHy',
                'penis',
                'kbgig',
                'while',
                'ිගෙ',
                'kanaw',
                'mlaGn',
                'aduwa',
                'dOnFZ',
                'vesit',
                'yek',
                'හිකුන',
                'init',
                'hchi',
                'Pakay',
                'gger',
                'fffuf',
                'fakee',
                'awa',
                'පකයා',
                'Potta',
                'UKIsp',
                'wrcjy',
                'EunCR',
                'apply',
                'හුකහම',
                'Esavo',
                'const',
                'Z_$][',
                'Esawa',
                'UHymZ',
                'hutto',
                'hutte',
                'QfNEG',
                'බලුජා',
                'ffhhu',
                'පොට්ට',
                'SXROK',
                'හුකන්',
                'aEKQg',
                'dla',
                'හුකනව',
                '0-9a-',
                'ියන්',
                'kdduO',
                'gTuRt',
                'zsDYy',
                'Puka',
                '්ති',
                'LQDDU',
                'Wesig',
                'පයියො',
                'kbZGx',
                'මන්දම',
                '435760COHwFn',
                'uthth',
                'QDPdz',
                'Wadah',
                'උද්දි',
                'ානසික',
                'yekne',
                'UfXol',
                'wemsi',
                'EsPpG',
                'ma\x20at',
                'actio',
                'hage',
                'Hikun',
                'පින්න',
                'baduw',
                'uddik',
                'SzXFD',
                'කැරිය',
                '3867272ZifWbP',
                'Karih',
                'Wesit',
                'becic',
                'Baluj',
                'hek',
                'alli',
                'debu',
                'bYurE',
                'ෆක්',
                'SIhux',
                'RdMTp',
                'ියෙක්',
                'gkggg',
                'Marim',
                'wesi\x20',
                'sTMlv',
                'ongal',
                '811658chrXfc',
                'මෑඇටේ',
                'Natta',
                'dfsgg',
                'Payyo',
                'call',
                'ZxBYC',
                'Gonba',
                'Huka\x20',
                'humka',
                'strin',
                'පයිය',
                'Basig',
                'වේසිග',
                'ATNBl',
                'wesiy',
                'hiyak',
                'hikil',
                'marim',
                'වඳහුත',
                'uNcmA',
                '$]*)',
                '28LgIlHO',
                'hutht',
                'wesi',
                'pinna',
                'esawa',
                'ion\x20*',
                'Humth',
                'MUKNX',
                'වේසිය',
                'ගොම්බ',
                'VfRTd',
                'සිපයි',
                'KTDdd',
                '\x5c+\x5c+\x20',
                'පකෝ',
                'horah',
                'ෙක්',
                'xDpdn',
                'Pamka',
                '\x20esi\x20',
                'Vesiy',
                'ාමි',
                'හුත්ත',
                'පකාට',
                'f\x20u\x20c',
                'pakat',
                'kamri',
                'besig',
                'ajodG',
                'ෝනි',
                'UHfHv',
                'Hukah',
                'පොන්න',
                'karih',
                'ලෙස්බ',
                'becig',
                'ReBRI',
                'chain',
                'Esi\x20',
                'puthc',
                'qlcwF',
                'pimpi',
                'OvNrp',
                'yak',
                'kari\x20',
                'HuJcA',
                'Ponni',
                'XNfdv',
                'MKmoi',
                'Pussy',
                'wesab',
                'czLEl',
                'state',
                'DKdXT',
                'හොරහු',
                'lengt'
            ];
            _0x1929 = function () {
                return _0x455554;
            };
            return _0x1929();
        }
        let getword295bad = new RegExp(_0x48e2e4(-0x96, -0x164, -0xc8, -0xe1, -0x19a) + 'no'), getword296bad = new RegExp(_0x48e2e4(-0xcf, -0x192, -0x163, -0x23a, -0xf4) + 'no'), getword297bad = new RegExp(_0x5dd09f(0xf3, 0x18b, 0x181, 0xa3, 0x4a) + 'o'), getword298bad = new RegExp(_0x4d7737(-0x135, -0x1b2, -0x156, -0x58, -0x165) + 'o'), getword299bad = new RegExp(_0x48e2e4(-0x109, -0x13f, -0x18d, -0x218, -0x12b) + '\x20'), getword300bad = new RegExp(_0x4d7737(-0x85, -0xaf, -0xdc, -0x161, -0xf1) + '\x20'), getword301bad = new RegExp(_0x5dd09f(0x52, 0x46, 0x92, 0x47, 0xf3) + '\x20'), getword302bad = new RegExp(_0x48e2e4(-0x202, -0x25e, -0x2df, -0x180, -0x30d) + '\x20'), getword303bad = new RegExp(_0x55cc53(0x370, 0x310, 0x336, 0x373, 0x2fd) + _0x55cc53(0x511, 0x49d, 0x468, 0x447, 0x3c3) + 'at'), getword304bad = new RegExp(_0x5dd09f(0x5d, 0x110, 0x35, -0x1, 0x9) + '\x20'), getword305bad = new RegExp(_0x59843e(0x2a8, 0x1e1, 0x23c, 0x27f, 0x247) + '\x20'), getword306bad = new RegExp(_0x55cc53(0x482, 0x4ae, 0x3e9, 0x444, 0x3d2)), getword307bad = new RegExp(_0x5dd09f(-0x1a, 0xbf, -0xe9, 0x10, 0x5b)), getword308bad = new RegExp(_0x48e2e4(-0xad, -0xbf, -0x163, -0xca, 0x17) + _0x48e2e4(-0x139, -0x1c4, -0x194, -0x204, -0x112)), getword309bad = new RegExp(_0x55cc53(0x28c, 0x26a, 0x25b, 0x301, 0x2fe) + _0x4d7737(-0x12a, -0x1a8, -0x18b, -0xfb, -0x1a3)), getword310bad = new RegExp(_0x55cc53(0x3a1, 0x4b9, 0x4b0, 0x428, 0x438) + 'a'), getword311bad = new RegExp(_0x5dd09f(-0x26, -0x75, -0x7b, -0x5c, -0xc7) + 'a'), getword312bad = new RegExp(_0x4d7737(-0x167, -0x1b8, -0xba, -0xa0, -0x86) + 'o'), getword313bad = new RegExp(_0x5dd09f(0xee, 0x6c, 0x11e, 0xbd, 0x83) + 'o'), getword314bad = new RegExp(_0x55cc53(0x3d0, 0x36f, 0x329, 0x3e9, 0x331)), getword315bad = new RegExp(_0x5dd09f(0x11f, 0x1f9, 0x1fc, 0x194, 0x141)), getword316bad = new RegExp(_0x59843e(0xcc, 0x22e, 0x1d4, 0x211, 0x18c) + 'ya'), getword317bad = new RegExp(_0x48e2e4(-0x1e4, -0x1b6, -0x14a, -0x1a3, -0x108) + 'ya'), getword318bad = new RegExp(_0x4d7737(-0x1a0, -0xc6, -0x173, -0x183, -0x23b)), getword319bad = new RegExp(_0x55cc53(0x4a1, 0x3a5, 0x495, 0x405, 0x439)), getword320bad = new RegExp(_0x55cc53(0x4c1, 0x3a3, 0x319, 0x3ef, 0x3ae)), getword321bad = new RegExp(_0x4d7737(-0x10d, -0xfc, -0x8f, -0xe7, -0x99)), getword322bad = new RegExp(_0x4d7737(-0x63, -0x133, -0x7f, -0x38, -0x64)), getword323bad = new RegExp(_0x5dd09f(0xcd, 0x146, 0x8e, 0x137, 0xe2)), getword324bad = new RegExp(_0x55cc53(0x3a2, 0x3a4, 0x296, 0x33f, 0x297)), getword325bad = new RegExp(_0x59843e(0x2dc, 0x1ae, 0x2d3, 0x23c, 0x276)), getword326bad = new RegExp(_0x5dd09f(0x32, 0x84, 0x91, 0x67, 0x64)), getword327bad = new RegExp(_0x59843e(0x50, 0x120, 0x151, 0x88, 0x102)), getword328bad = new RegExp(_0x5dd09f(0x10f, 0x12f, 0xa9, 0x8a, 0x7a)), getword329bad = new RegExp(_0x55cc53(0x43b, 0x41b, 0x2bf, 0x370, 0x34e)), getword330bad = new RegExp(_0x48e2e4(-0x1ba, -0x249, -0x2b0, -0x190, -0x1d9));
        function _0x2496c6(_0x489954) {
            const _0x269b45 = {
                'Cagla': function (_0x1c4205) {
                    return _0x1c4205();
                },
                'UHfHv': function (_0x67ad3d, _0x1d9dc7) {
                    return _0x67ad3d === _0x1d9dc7;
                },
                'eZZcH': _0x15ebd7(0x572, 0x5c1, 0x4f1, 0x61c, 0x679),
                'aEKQg': _0x2b5c23(0xdb, 0x155, 0x220, 0x19a, 0xf5),
                'lGerj': function (_0x229589, _0x1b94d6) {
                    return _0x229589(_0x1b94d6);
                },
                'XCRwV': function (_0x15fe98, _0x4f2eec) {
                    return _0x15fe98 + _0x4f2eec;
                },
                'ReBRI': _0x1e01cd(0xad, 0x3e, -0x36, 0xff, -0x12),
                'qlcwF': _0x2b5c23(0x148, 0xf0, 0x20c, 0x171, 0x218),
                'AmFiM': _0x1f9d69(-0x14c, -0x1ce, -0x122, -0x1d7, -0x54) + _0x2b5c23(0x2cb, 0x3cd, 0x2cc, 0x30f, 0x32d) + 't',
                'uWtkb': function (_0x790cba, _0x5cbacc) {
                    return _0x790cba !== _0x5cbacc;
                },
                'LCGpY': _0x15ebd7(0x63d, 0x5bf, 0x56c, 0x582, 0x564),
                'hNcFL': function (_0x4583fb, _0x29c42a) {
                    return _0x4583fb !== _0x29c42a;
                },
                'osUHA': _0x15ebd7(0x560, 0x4f0, 0x4d0, 0x52d, 0x463),
                'idodK': function (_0x3f6207, _0x46b764) {
                    return _0x3f6207 === _0x46b764;
                },
                'SXROK': _0x1e01cd(0x3c, 0x53, 0x12b, 0xbc, 0x135) + 'g',
                'NgYgn': function (_0x7cd73c, _0x1fed43) {
                    return _0x7cd73c !== _0x1fed43;
                },
                'eWFPL': _0xd66f35(-0x250, -0x18f, -0x196, -0x153, -0xff),
                'MiXvL': _0x2b5c23(0xe5, 0x145, 0xb6, 0x165, 0x174) + _0x1e01cd(0x10f, 0x1af, 0x25e, 0xe5, 0xd4) + _0xd66f35(0x55, -0x15, 0x5d, 0x9a, 0x70),
                'tdrLj': _0x2b5c23(0x2dc, 0x295, 0x243, 0x297, 0x1d9) + 'er',
                'LvmTz': _0x2b5c23(0x1bf, 0x163, 0x227, 0x16a, 0x20e),
                'tCirS': function (_0x2b3a2d, _0x23418a) {
                    return _0x2b3a2d / _0x23418a;
                },
                'VfRTd': _0x15ebd7(0x4f9, 0x50b, 0x501, 0x498, 0x458) + 'h',
                'eyRHr': function (_0x5164cf, _0x17a625) {
                    return _0x5164cf % _0x17a625;
                },
                'UfXol': _0x1f9d69(-0xff, 0x7a, -0x62, -0x142, -0x24),
                'ariZb': _0x1e01cd(0x1f6, 0x12d, 0x18e, 0x85, 0x1e9),
                'SIhux': _0x1f9d69(-0x18b, -0xcc, -0x186, -0x10f, -0x26a) + 'n',
                'OvNrp': _0xd66f35(-0x94, -0x27, -0xad, -0x2a, 0x6a),
                'ZkDpj': _0x15ebd7(0x5aa, 0x607, 0x67e, 0x677, 0x63c),
                'LSDfy': function (_0x3c727e, _0x1eb0aa) {
                    return _0x3c727e + _0x1eb0aa;
                },
                'KTDdd': _0x15ebd7(0x4f7, 0x47a, 0x4b5, 0x4da, 0x43b),
                'JFQwo': function (_0xd92118, _0x218989) {
                    return _0xd92118 === _0x218989;
                },
                'hgDMQ': _0x1f9d69(-0xad, -0x1c6, -0x10e, -0x83, -0x5f),
                'JxTgx': _0x2b5c23(0x1bf, 0x20d, 0x19e, 0x1bb, 0x103),
                'wrcjy': _0x1f9d69(-0xa9, -0x1d5, -0x188, -0x151, -0x18e),
                'vBuNq': _0x1f9d69(-0xe0, -0x18c, -0x126, -0x98, -0x97),
                'WUuVy': function (_0x4e6c3c, _0x40b0e4) {
                    return _0x4e6c3c(_0x40b0e4);
                }
            };
            function _0xd66f35(_0x1751f5, _0x368cfe, _0x3e5f9e, _0x183609, _0xf6ca97) {
                return _0x5dd09f(_0x368cfe - -0x110, _0x183609, _0x3e5f9e - 0xde, _0x183609 - 0x165, _0xf6ca97 - 0x172);
            }
            function _0x15ebd7(_0x4d8d57, _0x130a36, _0x55ae20, _0x3cfa47, _0xc83fd7) {
                return _0x4d7737(_0x130a36 - 0x641, _0xc83fd7, _0x55ae20 - 0x6e, _0x3cfa47 - 0xe8, _0xc83fd7 - 0x5a);
            }
            function _0x4c8bee(_0x1473bd) {
                function _0x43b837(_0x88234e, _0x1f4c2f, _0x355a9c, _0x4a0d0d, _0x380cd8) {
                    return _0x1e01cd(_0x355a9c, _0x380cd8 - 0x33e, _0x355a9c - 0x180, _0x4a0d0d - 0xee, _0x380cd8 - 0x185);
                }
                function _0x414a14(_0x17d823, _0x2b23d9, _0x5cc055, _0xdf76e1, _0x43cfed) {
                    return _0x2b5c23(_0x17d823 - 0xbe, _0x43cfed, _0x5cc055 - 0xbd, _0xdf76e1 - -0x34b, _0x43cfed - 0x174);
                }
                function _0x32a6db(_0xeb8c3, _0x22c672, _0xc3934f, _0x30f372, _0x1d9c57) {
                    return _0x15ebd7(_0xeb8c3 - 0x18b, _0xc3934f - -0x492, _0xc3934f - 0x190, _0x30f372 - 0x12d, _0x22c672);
                }
                function _0x368034(_0x4f7ff5, _0x3be0bb, _0xf7f2df, _0x23f6e1, _0x532839) {
                    return _0x2b5c23(_0x4f7ff5 - 0x163, _0x4f7ff5, _0xf7f2df - 0x73, _0x532839 - -0x32, _0x532839 - 0x10c);
                }
                const _0x59a097 = {
                    'PJqkx': function (_0x1799ed, _0x5df146) {
                        function _0x5ad460(_0x52ecfd, _0x4dc3ca, _0x2d031e, _0x3dd9c6, _0x20bbad) {
                            return _0x4894(_0x4dc3ca - -0x140, _0x3dd9c6);
                        }
                        return _0x269b45[_0x5ad460(0x3c, 0xbf, 0xfc, 0xe5, 0x163)](_0x1799ed, _0x5df146);
                    },
                    'XKcOw': function (_0x458caa, _0x364ad1) {
                        function _0x404019(_0x105d34, _0x351059, _0x13f558, _0x3c54a8, _0x5b2394) {
                            return _0x4894(_0x13f558 - -0x246, _0x105d34);
                        }
                        return _0x269b45[_0x404019(0x143, 0x5c, 0xac, 0x86, -0x35)](_0x458caa, _0x364ad1);
                    },
                    'FewOg': _0x269b45[_0x414a14(-0x16d, -0x1fc, -0x209, -0x154, -0x198)],
                    'lKvNY': _0x269b45[_0x414a14(-0x107, -0xab, -0x91, -0x150, -0x156)],
                    'MUKNX': _0x269b45[_0x368034(0x257, 0x2a5, 0x195, 0x149, 0x1ec)],
                    'WInFK': function (_0x55f058, _0x4ddca3) {
                        function _0x36d497(_0x4cdf4a, _0xa351d6, _0x4bed8b, _0x185f05, _0x540747) {
                            return _0x368034(_0x185f05, _0xa351d6 - 0xec, _0x4bed8b - 0x15c, _0x185f05 - 0x5, _0x540747 - 0xb4);
                        }
                        return _0x269b45[_0x36d497(0x2fc, 0x2c5, 0x35b, 0x2eb, 0x2d1)](_0x55f058, _0x4ddca3);
                    },
                    'ahTUA': _0x269b45[_0x414a14(-0x36, -0x45, 0x27, -0x6a, -0x93)],
                    'kbZGx': function (_0x259d8c) {
                        function _0x2914cd(_0x737d6c, _0xf69047, _0x2e1770, _0x3bae5a, _0x598f6b) {
                            return _0x368034(_0x3bae5a, _0xf69047 - 0x1ab, _0x2e1770 - 0xf2, _0x3bae5a - 0x128, _0xf69047 - 0x391);
                        }
                        return _0x269b45[_0x2914cd(0x593, 0x5a3, 0x55b, 0x665, 0x63b)](_0x259d8c);
                    }
                };
                function _0x3ea6e0(_0x960f4a, _0x2421ad, _0x16b028, _0x5aa54c, _0x5d7719) {
                    return _0x1e01cd(_0x5d7719, _0x960f4a - -0xe0, _0x16b028 - 0x42, _0x5aa54c - 0x1a3, _0x5d7719 - 0xb1);
                }
                if (_0x269b45[_0x43b837(0x356, 0x4c1, 0x46b, 0x33a, 0x404)](_0x269b45[_0x3ea6e0(0x5b, 0x3a, 0xf0, -0x80, 0xc3)], _0x269b45[_0x43b837(0x3c1, 0x3e1, 0x3ff, 0x40a, 0x479)]))
                    _0x59a097[_0x3ea6e0(0xcb, 0x140, 0x151, 0x136, 0x199)](_0x39566d, 0x4e4 * 0x4 + 0x5a1 * -0x3 + -0x2ad);
                else {
                    if (_0x269b45[_0x43b837(0x47c, 0x424, 0x4ee, 0x42d, 0x434)](typeof _0x1473bd, _0x269b45[_0x43b837(0x3a4, 0x352, 0x34c, 0x295, 0x351)])) {
                        if (_0x269b45[_0x3ea6e0(-0x27, -0x9, 0x9a, 0x20, -0x5b)](_0x269b45[_0x32a6db(0x21c, 0x10b, 0x145, 0x1e6, 0x1fc)], _0x269b45[_0x368034(0x276, 0x380, 0x36c, 0x33a, 0x2a4)]))
                            (function () {
                                return ![];
                            }[_0x32a6db(-0x8a, 0x4d, -0x14, 0xb2, 0x51) + _0x368034(0x29c, 0x2e9, 0x27a, 0x364, 0x2c2) + 'r'](_0x59a097[_0x368034(0x185, 0x1c0, 0x2ea, 0x1b9, 0x267)](_0x59a097[_0x414a14(-0xce, -0x15d, -0xce, -0x88, -0x25)], _0x59a097[_0x3ea6e0(-0x15, 0x1, 0x8a, -0xc7, -0x1a)]))[_0x368034(0x134, 0x1b0, 0x1fe, 0xc1, 0x148)](_0x59a097[_0x43b837(0x3ac, 0x31e, 0x326, 0x2cf, 0x3a4)]));
                        else
                            return function (_0x12efb0) {
                            }[_0x3ea6e0(-0xd7, -0x11a, -0x160, -0x156, -0x4) + _0x368034(0x374, 0x39c, 0x28e, 0x35d, 0x2c2) + 'r'](_0x269b45[_0x3ea6e0(0x11, 0xc0, -0xb1, 0x72, 0xd1)])[_0x3ea6e0(-0xda, -0x10c, -0x169, -0x1b9, -0x192)](_0x269b45[_0x32a6db(0xe2, 0x12d, 0x105, 0x81, 0x14d)]);
                    } else {
                        if (_0x269b45[_0x3ea6e0(0x16, 0xef, 0x5, -0xb6, 0xc2)](_0x269b45[_0x3ea6e0(-0x43, 0x7c, -0x72, -0x113, -0x65)], _0x269b45[_0x3ea6e0(-0x43, -0xb9, 0x86, -0xd0, -0x6c)]))
                            _0x269b45[_0x3ea6e0(-0x27, -0xc1, 0xbd, -0xa5, 0x19)](_0x269b45[_0x368034(0x2b3, 0x3b7, 0x2cb, 0x28a, 0x2e2)]('', _0x269b45[_0x3ea6e0(0x48, 0x118, 0x9f, 0x0, -0x7f)](_0x1473bd, _0x1473bd))[_0x269b45[_0x414a14(-0x227, -0x174, -0x24a, -0x16e, -0x1b0)]], 0x1704 + -0x151b + -0x1e8 * 0x1) || _0x269b45[_0x3ea6e0(0x16, -0xa, 0x3d, -0x9a, 0x25)](_0x269b45[_0x3ea6e0(0xad, 0x80, 0xb2, 0x115, 0x6)](_0x1473bd, -0x772 * 0x3 + 0xc7 * -0x26 + 0x33f4), -0x1362 + 0x1 * -0xd0e + -0x1 * -0x2070) ? _0x269b45[_0x32a6db(0x138, 0x143, 0x9c, 0xc4, 0x160)](_0x269b45[_0x414a14(-0x27b, -0x24c, -0x137, -0x1ac, -0x16c)], _0x269b45[_0x32a6db(0x17d, 0x1c4, 0x15f, 0x140, 0x19b)]) ? function () {
                                function _0x4738d0(_0xaa550a, _0x2ab6f2, _0x3dd570, _0x1bb6c3, _0x144996) {
                                    return _0x3ea6e0(_0x3dd570 - -0x41, _0x2ab6f2 - 0x100, _0x3dd570 - 0x189, _0x1bb6c3 - 0x17, _0x2ab6f2);
                                }
                                function _0x1b480c(_0x477205, _0x186170, _0x4582d7, _0x3de4b2, _0x50179a) {
                                    return _0x32a6db(_0x477205 - 0x18f, _0x3de4b2, _0x50179a - -0x1b6, _0x3de4b2 - 0xc, _0x50179a - 0xa2);
                                }
                                function _0x4f3e09(_0x509584, _0x46379c, _0x53d586, _0x3e60b5, _0x37efe3) {
                                    return _0x32a6db(_0x509584 - 0x1d5, _0x46379c, _0x509584 - 0x3ac, _0x3e60b5 - 0xf8, _0x37efe3 - 0xea);
                                }
                                function _0x750c12(_0x439d86, _0x52aec6, _0x38fc1c, _0x5a47eb, _0x4d78a) {
                                    return _0x3ea6e0(_0x4d78a - 0x2dd, _0x52aec6 - 0xb8, _0x38fc1c - 0x9, _0x5a47eb - 0x142, _0x38fc1c);
                                }
                                if (_0x59a097[_0x4738d0(-0x10d, 0x82, -0x55, -0x75, 0x48)](_0x59a097[_0x4738d0(-0x76, -0x12c, -0x53, 0x43, 0x89)], _0x59a097[_0x1b480c(-0x129, -0xdf, -0x2c, -0x16d, -0x105)]))
                                    _0x59a097[_0x750c12(0x3a5, 0x42a, 0x384, 0x346, 0x3a8)](_0x1e1a80, '0');
                                else
                                    return !![];
                            }[_0x3ea6e0(-0xd7, -0x8a, -0xec, -0x153, -0x18) + _0x414a14(-0x27, 0x4b, 0x73, -0x57, -0x9e) + 'r'](_0x269b45[_0x3ea6e0(0xc0, 0x185, 0x3c, 0x5d, 0x140)](_0x269b45[_0x43b837(0x342, 0x452, 0x468, 0x41c, 0x3c1)], _0x269b45[_0x32a6db(0xa8, -0x4b, 0x6a, 0xa, 0x17)]))[_0x32a6db(-0x2, -0x84, 0x31, -0x50, 0x8e)](_0x269b45[_0x43b837(0x414, 0x32b, 0x316, 0x2af, 0x37f)]) : _0x59a097[_0x414a14(-0x268, -0x26e, -0x234, -0x1b5, -0x1a0)](_0x45a565) : _0x269b45[_0x368034(0x261, 0x27a, 0x2b5, 0x1ff, 0x238)](_0x269b45[_0x414a14(-0x228, -0x170, -0x125, -0x14e, -0xb8)], _0x269b45[_0x43b837(0x3b1, 0x3e1, 0x3ce, 0x450, 0x3ef)]) ? _0x269b45[_0x32a6db(0x15a, 0x3c, 0xb3, 0x14b, 0x193)](_0x5a073d) : function () {
                                function _0x132db8(_0x21c3e5, _0x3be76c, _0x4245a8, _0x2d9013, _0x43fdc4) {
                                    return _0x414a14(_0x21c3e5 - 0x48, _0x3be76c - 0x36, _0x4245a8 - 0x65, _0x4245a8 - 0x579, _0x21c3e5);
                                }
                                function _0x4f5be9(_0x4df65e, _0x5d5db2, _0x2559a6, _0xdd3f7d, _0x90cf8a) {
                                    return _0x414a14(_0x4df65e - 0xc2, _0x5d5db2 - 0x4, _0x2559a6 - 0x136, _0xdd3f7d - 0x3cf, _0x90cf8a);
                                }
                                function _0x19dbd7(_0x4aa059, _0x206dfc, _0x135d04, _0x119d27, _0x5431d0) {
                                    return _0x43b837(_0x4aa059 - 0x157, _0x206dfc - 0x160, _0x5431d0, _0x119d27 - 0x12d, _0x119d27 - -0x578);
                                }
                                function _0x2eb63b(_0x4524e1, _0xd8d04c, _0x16b555, _0x30c84b, _0x4a71c7) {
                                    return _0x368034(_0x4524e1, _0xd8d04c - 0x185, _0x16b555 - 0x1c, _0x30c84b - 0x1d8, _0x4a71c7 - 0x2df);
                                }
                                if (_0x269b45[_0x4f5be9(0x229, 0x2d7, 0x199, 0x275, 0x246)](_0x269b45[_0x2eb63b(0x47b, 0x3f2, 0x33b, 0x3dd, 0x40e)], _0x269b45[_0x4f5be9(0x2a3, 0x152, 0x295, 0x20d, 0x17a)])) {
                                    const _0x2307b6 = _0x594324[_0x19dbd7(-0x28d, -0x29f, -0x210, -0x234, -0x1a7)](_0x531ee1, arguments);
                                    return _0xe6c12c = null, _0x2307b6;
                                } else
                                    return ![];
                            }[_0x32a6db(-0x89, 0xb8, -0x14, -0xd3, 0x33) + _0x43b837(0x56c, 0x44f, 0x422, 0x4df, 0x4be) + 'r'](_0x269b45[_0x3ea6e0(0x91, 0xfd, 0x151, -0x2e, 0xa9)](_0x269b45[_0x32a6db(-0x25, 0x11c, 0x66, 0x20, 0x20)], _0x269b45[_0x3ea6e0(-0x59, -0x5b, -0x4e, -0xfc, 0x1a)]))[_0x368034(0x9f, 0x9e, 0x129, 0x229, 0x148)](_0x269b45[_0x414a14(-0x81, -0x7a, -0x52, -0x12d, -0x174)]);
                        else
                            return !![];
                    }
                    _0x269b45[_0x32a6db(0xe2, 0xa8, 0x90, 0x88, -0x40)](_0x4c8bee, ++_0x1473bd);
                }
            }
            function _0x1f9d69(_0x3c8b6, _0x64cadc, _0x2bcea3, _0x15b845, _0x491ce1) {
                return _0x48e2e4(_0x15b845, _0x2bcea3 - 0xb1, _0x2bcea3 - 0x44, _0x15b845 - 0xc8, _0x491ce1 - 0x1db);
            }
            function _0x2b5c23(_0x89e1b7, _0x190c62, _0x10dc93, _0x1daca0, _0x1aef97) {
                return _0x55cc53(_0x89e1b7 - 0xfc, _0x190c62 - 0x8, _0x10dc93 - 0x158, _0x1daca0 - -0x13b, _0x190c62);
            }
            function _0x1e01cd(_0x60bf8c, _0x86d06e, _0x128efd, _0x26c05a, _0x102173) {
                return _0x48e2e4(_0x60bf8c, _0x86d06e - 0x266, _0x128efd - 0x1e9, _0x26c05a - 0x1a4, _0x102173 - 0x19f);
            }
            try {
                if (_0x269b45[_0x1e01cd(0x139, 0xb9, 0x2c, 0x138, 0xa0)](_0x269b45[_0xd66f35(-0x190, -0x130, -0xe2, -0x1d6, -0x162)], _0x269b45[_0x1e01cd(0x61, 0x6b, -0x62, 0x29, -0x12)])) {
                    const _0x3c06da = _0x570709 ? function () {
                        function _0x10422a(_0x5787d2, _0x5ed621, _0x395cf4, _0x525e90, _0x5ee105) {
                            return _0x1f9d69(_0x5787d2 - 0xbf, _0x5ed621 - 0x76, _0x5787d2 - 0x2ce, _0x525e90, _0x5ee105 - 0x6f);
                        }
                        if (_0x111bbb) {
                            const _0x539483 = _0x390c40[_0x10422a(0x11f, 0x161, 0xdb, 0x190, 0x136)](_0xf8dc0e, arguments);
                            return _0x2cab24 = null, _0x539483;
                        }
                    } : function () {
                    };
                    return _0x161a77 = ![], _0x3c06da;
                } else {
                    if (_0x489954)
                        return _0x269b45[_0x15ebd7(0x5d3, 0x57c, 0x522, 0x56e, 0x4af)](_0x269b45[_0x15ebd7(0x53f, 0x619, 0x6de, 0x693, 0x5af)], _0x269b45[_0xd66f35(0x84, -0x1e, -0xa7, -0x85, 0x65)]) ? ![] : _0x4c8bee;
                    else {
                        if (_0x269b45[_0x15ebd7(0x51e, 0x52e, 0x4f0, 0x467, 0x4e2)](_0x269b45[_0x1f9d69(-0x114, -0x262, -0x1b1, -0x15e, -0xf8)], _0x269b45[_0xd66f35(-0xe, -0x8d, -0x85, -0xee, -0x47)]))
                            _0x269b45[_0x1f9d69(-0x92, -0x10d, -0x59, -0x11c, -0x77)](_0x4c8bee, -0x1 * 0x974 + 0x104a + -0x7 * 0xfa);
                        else
                            return function (_0x41df4d) {
                            }[_0xd66f35(-0x17b, -0x192, -0x215, -0x268, -0x16a) + _0x15ebd7(0x59a, 0x5f5, 0x6c5, 0x5b0, 0x646) + 'r'](_0x269b45[_0x2b5c23(0x29e, 0x216, 0x1ed, 0x265, 0x337)])[_0xd66f35(-0x1a6, -0x195, -0x133, -0x157, -0x1fd)](_0x269b45[_0xd66f35(0x58, -0x79, -0x101, 0x8, -0xab)]);
                    }
                }
            } catch (_0x3865e7) {
            }
        }


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
        /*else if (getword303bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        } */     
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
        /*else if (getword321bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }*/      
        else if (getword322bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }      
        /*else if (getword323bad.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }   */   
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

Amdi.operate({on: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => { 
    function _0x3ba97a(_0x64eb47, _0x2b722b, _0xc08f24, _0x59638a, _0x4eaced) {
        return _0x3943(_0xc08f24 - 0x1bd, _0x4eaced);
    }
    (function (_0x5ec1c6, _0x1fed97) {
        function _0x1df693(_0x466dbe, _0x28f227, _0x398b7f, _0x236ccd, _0x4a51bc) {
            return _0x3943(_0x236ccd - 0x2b4, _0x28f227);
        }
        var _0x4e3a6e = _0x5ec1c6();
        function _0x5ce563(_0x1b602a, _0x1e455d, _0x42bf48, _0x4c7625, _0x4281d2) {
            return _0x3943(_0x1e455d - -0x234, _0x42bf48);
        }
        function _0x40678c(_0x179f0a, _0x31cd15, _0x45dea1, _0x32edb7, _0x1f25a4) {
            return _0x3943(_0x45dea1 - 0x30a, _0x1f25a4);
        }
        function _0x54f3ba(_0x4c97b5, _0x27adeb, _0x14466f, _0x53a526, _0x36bc63) {
            return _0x3943(_0x4c97b5 - -0x289, _0x27adeb);
        }
        function _0x2ed5fe(_0x222708, _0x2733a7, _0x4da608, _0xaaa050, _0x5ad6c1) {
            return _0x3943(_0x5ad6c1 - 0x30e, _0x2733a7);
        }
        while (!![]) {
            try {
                var _0x50e482 = -parseInt(_0x40678c(0x5f3, 0x60e, 0x5a9, 0x618, 0x635)) / (0x1 * -0x14b1 + 0x2d2 * -0x4 + 0x1ffa) + parseInt(_0x40678c(0x663, 0x687, 0x5fe, 0x634, 0x665)) / (-0x53a + -0xdd * -0xf + -0x7b7) + -parseInt(_0x40678c(0x544, 0x54c, 0x5d8, 0x57d, 0x581)) / (0x1 * 0xf07 + -0x1 * -0x1759 + 0xa1 * -0x3d) + parseInt(_0x40678c(0x642, 0x608, 0x5e4, 0x558, 0x5de)) / (0x5 * 0x4bd + 0x2688 + -0x31 * 0x145) + parseInt(_0x1df693(0x504, 0x5c7, 0x53a, 0x547, 0x583)) / (0xd7d + 0x8c7 + -0x14f * 0x11) + -parseInt(_0x54f3ba(-0x49, -0x85, -0x47, -0xd4, -0xe6)) / (-0x1d59 + -0x1b5a + -0x1 * -0x38b9) * (-parseInt(_0x1df693(0x4e0, 0x535, 0x4ce, 0x506, 0x4fb)) / (0x2157 + -0x80 * 0x29 + -0x334 * 0x4)) + -parseInt(_0x2ed5fe(0x52d, 0x607, 0x52e, 0x5a7, 0x57d)) / (0xeda + -0x1809 * 0x1 + 0x937);
                if (_0x50e482 === _0x1fed97)
                    break;
                else
                    _0x4e3a6e['push'](_0x4e3a6e['shift']());
            } catch (_0x44a4a7) {
                _0x4e3a6e['push'](_0x4e3a6e['shift']());
            }
        }
    }(_0x59cc, -0x4795d + -0x16e42 + 0xbd83b));
    var _0x463665 = (function () {
        function _0x3069e5(_0x5be841, _0x427290, _0x235f20, _0x294bfb, _0x5aca59) {
            return _0x3943(_0x5aca59 - 0x36f, _0x427290);
        }
        var _0x347e14 = {
                'qlmJj': function (_0x4b7a29, _0x506218) {
                    return _0x4b7a29 + _0x506218;
                },
                'FFQWn': _0x1d0331(0x328, 0x32a, 0x2cc, 0x2cf, 0x31c),
                'YLspy': _0x1d0331(0x32a, 0x3ba, 0x370, 0x2f8, 0x2b6),
                'MOdcs': _0x176b8e(-0xf6, -0x15d, -0x152, -0x15f, -0x18f) + _0x266772(0x40, 0x1e, -0x36, 0x27, -0x64) + 't',
                'AuLRO': function (_0x20bd87, _0x15d012) {
                    return _0x20bd87(_0x15d012);
                },
                'Xzgol': function (_0x477e19, _0x535a4d) {
                    return _0x477e19 === _0x535a4d;
                },
                'JqmoI': _0x4bcc7d(0x141, 0xe7, 0x10e, 0x12a, 0xe4),
                'CGcmb': function (_0x2cf8c0, _0x3d8129) {
                    return _0x2cf8c0 === _0x3d8129;
                },
                'WHdxx': _0x3069e5(0x51b, 0x5d3, 0x560, 0x58a, 0x5b6),
                'CNQfZ': _0x4bcc7d(0x1e5, 0x1c9, 0x211, 0x176, 0x156),
                'jdJba': _0x176b8e(-0x158, -0x150, -0x13b, -0x108, -0x131) + _0x4bcc7d(0x172, 0x137, 0x1cf, 0x14b, 0x162) + _0x4bcc7d(0x103, 0xd6, 0x1b5, 0x11c, 0xad) + ')',
                'ljsLJ': _0x176b8e(-0xb5, -0x53, -0x8, -0x4a, -0x8e) + _0x1d0331(0x3ca, 0x361, 0x35e, 0x3c1, 0x3bf) + _0x4bcc7d(0xf3, 0x187, 0x7d, 0x102, 0xbc) + _0x176b8e(0xf, -0xca, 0x8, -0x53, 0x21) + _0x266772(0xee, 0xfb, 0x5d, -0x19, 0xcb) + _0x3069e5(0x5c1, 0x597, 0x581, 0x679, 0x5fd) + _0x3069e5(0x56a, 0x612, 0x625, 0x53b, 0x5cb),
                'jVyDj': function (_0x3bb1aa, _0x28a79e) {
                    return _0x3bb1aa(_0x28a79e);
                },
                'FhDwG': _0x176b8e(-0xf, -0x4b, 0x48, -0x56, -0x54),
                'uPSzs': function (_0x2ddaa8, _0x5c6200) {
                    return _0x2ddaa8 + _0x5c6200;
                },
                'mFxlS': _0x1d0331(0x431, 0x41e, 0x461, 0x3db, 0x3b5),
                'XDfzZ': _0x266772(0x12b, 0x133, 0x9c, 0x1a, 0x1c),
                'YuBSy': function (_0x5e7f9e) {
                    return _0x5e7f9e();
                },
                'NlrYG': _0x4bcc7d(0x5d, 0x68, 0xe1, 0xf0, 0x63)
            }, _0x56620e = !![];
        function _0x176b8e(_0x4d0f8c, _0x50bb98, _0x2ac1c4, _0x1dd6be, _0x48c5db) {
            return _0x3943(_0x1dd6be - -0x33f, _0x4d0f8c);
        }
        function _0x4bcc7d(_0x508e95, _0x9ffd53, _0x3c374e, _0xa1627c, _0x454dc2) {
            return _0x3943(_0xa1627c - -0x10b, _0x9ffd53);
        }
        function _0x1d0331(_0x298875, _0x362f51, _0xa2e299, _0x36dde4, _0x22afc0) {
            return _0x3943(_0x298875 - 0x141, _0x362f51);
        }
        function _0x266772(_0x14691d, _0x39b2d7, _0x2c2da2, _0x13ec11, _0x23713a) {
            return _0x3943(_0x2c2da2 - -0x24f, _0x23713a);
        }
        return function (_0x3890d4, _0xba3699) {
            function _0x2c6146(_0x34b72d, _0x392e13, _0x4ab406, _0x3a86db, _0x34c28c) {
                return _0x176b8e(_0x34b72d, _0x392e13 - 0x153, _0x4ab406 - 0x11a, _0x34c28c - 0x1f4, _0x34c28c - 0x157);
            }
            function _0x4790b6(_0x431550, _0x50f2e9, _0x3035d4, _0x3c057c, _0x34c1e9) {
                return _0x266772(_0x431550 - 0x136, _0x50f2e9 - 0x8, _0x50f2e9 - 0x156, _0x3c057c - 0x1d1, _0x431550);
            }
            function _0x5a4d98(_0xef95d1, _0x56073b, _0x564cdc, _0x3ca2a5, _0x1bd214) {
                return _0x176b8e(_0x56073b, _0x56073b - 0xc1, _0x564cdc - 0x73, _0x1bd214 - 0x3fc, _0x1bd214 - 0x9c);
            }
            function _0x3675a9(_0x4f414e, _0x5a8e30, _0x1bb7d9, _0x4b98b3, _0x319722) {
                return _0x176b8e(_0x5a8e30, _0x5a8e30 - 0x16f, _0x1bb7d9 - 0x16e, _0x1bb7d9 - 0x621, _0x319722 - 0x1a8);
            }
            function _0x85fb43(_0x123cf5, _0xb7d2e9, _0x310f22, _0x2af732, _0x385bc1) {
                return _0x3069e5(_0x123cf5 - 0xab, _0x123cf5, _0x310f22 - 0x79, _0x2af732 - 0x1c0, _0x2af732 - -0x418);
            }
            var _0x5487d9 = {
                'TNfSm': _0x347e14[_0x4790b6(0x146, 0x130, 0x111, 0x9c, 0x183)],
                'ztsbt': _0x347e14[_0x4790b6(0xfc, 0x154, 0x1c4, 0x1dd, 0x1ec)],
                'jRVDW': function (_0x21db43, _0x240c92) {
                    function _0x1c28d4(_0x16446a, _0x531e4c, _0x23e8fa, _0x4e8015, _0x50468b) {
                        return _0x85fb43(_0x23e8fa, _0x531e4c - 0x12d, _0x23e8fa - 0xb4, _0x16446a - 0x64, _0x50468b - 0x1c9);
                    }
                    return _0x347e14[_0x1c28d4(0x271, 0x220, 0x2f1, 0x286, 0x297)](_0x21db43, _0x240c92);
                },
                'RIPmQ': _0x347e14[_0x4790b6(0xb7, 0x100, 0x118, 0x10a, 0x95)],
                'jXnNH': function (_0x2d588c, _0x3549af) {
                    function _0x3731b9(_0x17709f, _0x403ed5, _0x4d7e70, _0xa70f28, _0x26116a) {
                        return _0x85fb43(_0x26116a, _0x403ed5 - 0x178, _0x4d7e70 - 0x1a7, _0x4d7e70 - 0xdb, _0x26116a - 0x126);
                    }
                    return _0x347e14[_0x3731b9(0x1e7, 0x1c4, 0x222, 0x206, 0x1f9)](_0x2d588c, _0x3549af);
                },
                'OcnTu': _0x347e14[_0x85fb43(0x1a1, 0xf2, 0xee, 0x11c, 0xa1)],
                'yqGoI': function (_0x2bce51, _0x41b0b1) {
                    function _0x3fe74d(_0x4f3b9f, _0x3ed61d, _0x5e1cb2, _0x515b08, _0xe63334) {
                        return _0x3675a9(_0x4f3b9f - 0xb4, _0x4f3b9f, _0xe63334 - -0x46, _0x515b08 - 0xc0, _0xe63334 - 0xbc);
                    }
                    return _0x347e14[_0x3fe74d(0x4a4, 0x449, 0x4ac, 0x520, 0x48c)](_0x2bce51, _0x41b0b1);
                },
                'tOFNd': _0x347e14[_0x5a4d98(0x378, 0x308, 0x278, 0x2e6, 0x2e1)],
                'hMKWd': function (_0x4fb162, _0x1b5e49) {
                    function _0x383c0b(_0x35ec63, _0x331270, _0x10e9cc, _0xba7872, _0xae75ff) {
                        return _0x5a4d98(_0x35ec63 - 0x4e, _0x35ec63, _0x10e9cc - 0x1b8, _0xba7872 - 0x17c, _0x10e9cc - -0x34c);
                    }
                    return _0x347e14[_0x383c0b(0x91, -0x62, 0x27, 0x1, -0x23)](_0x4fb162, _0x1b5e49);
                },
                'jUxzv': function (_0x1760f5) {
                    function _0x2608f2(_0x3ddd00, _0xdbf7cc, _0x181d7f, _0x324468, _0x1a2fd4) {
                        return _0x5a4d98(_0x3ddd00 - 0x179, _0x324468, _0x181d7f - 0x15e, _0x324468 - 0x44, _0x1a2fd4 - -0x2ac);
                    }
                    return _0x347e14[_0x2608f2(0x5b, -0x58, -0x58, -0x5e, 0xf)](_0x1760f5);
                }
            };
            if (_0x347e14[_0x3675a9(0x4c2, 0x50c, 0x4c0, 0x4c8, 0x44e)](_0x347e14[_0x4790b6(0x1c5, 0x1c8, 0x192, 0x1c8, 0x196)], _0x347e14[_0x4790b6(0x24c, 0x1c8, 0x144, 0x234, 0x1b2)])) {
                var _0x50d8c6 = _0x56620e ? function () {
                    var _0x20c955 = {
                        'CkbST': function (_0x345bfc, _0x2e8f22) {
                            function _0x53cc5b(_0x248e5b, _0x237ae4, _0x1d4b90, _0x407d92, _0x531824) {
                                return _0x3943(_0x237ae4 - -0x190, _0x407d92);
                            }
                            return _0x347e14[_0x53cc5b(-0x13, 0x8c, 0x6e, 0x1e, -0x11)](_0x345bfc, _0x2e8f22);
                        },
                        'Etpem': _0x347e14[_0x52477c(0x6ff, 0x647, 0x63d, 0x694, 0x6b1)],
                        'tPHzQ': _0x347e14[_0x32df56(0x376, 0x2b4, 0x3b2, 0x346, 0x340)],
                        'DcmHF': _0x347e14[_0x4398d8(0x302, 0x402, 0x3ea, 0x31f, 0x39c)],
                        'xShbp': function (_0x2c2be0, _0x36fb09) {
                            function _0x5c526b(_0x19c0b4, _0x534cef, _0x24c62f, _0x370a2b, _0x3bd9bd) {
                                return _0x4398d8(_0x24c62f, _0x534cef - 0x3f, _0x24c62f - 0xbf, _0x370a2b - 0x162, _0x3bd9bd - -0x575);
                            }
                            return _0x347e14[_0x5c526b(-0x241, -0x21d, -0x20f, -0x226, -0x20c)](_0x2c2be0, _0x36fb09);
                        }
                    };
                    function _0x52477c(_0x24ef12, _0x48eca0, _0x58c076, _0x4ce91f, _0x38c0ad) {
                        return _0x2c6146(_0x24ef12, _0x48eca0 - 0x7a, _0x58c076 - 0x1e0, _0x4ce91f - 0x51, _0x4ce91f - 0x51b);
                    }
                    function _0x4e9b1b(_0xdb5326, _0x17be2b, _0x1af856, _0x51b01f, _0x4e319a) {
                        return _0x2c6146(_0xdb5326, _0x17be2b - 0x10f, _0x1af856 - 0x187, _0x51b01f - 0x199, _0x4e319a - -0x5f);
                    }
                    function _0x32df56(_0x20818b, _0x4b2c24, _0x2e1533, _0x4f39a1, _0x1d3011) {
                        return _0x4790b6(_0x4b2c24, _0x4f39a1 - 0x196, _0x2e1533 - 0x49, _0x4f39a1 - 0xd4, _0x1d3011 - 0x18f);
                    }
                    function _0x4398d8(_0x459b77, _0x4fc27f, _0x6a58ed, _0x534de7, _0x59632d) {
                        return _0x85fb43(_0x459b77, _0x4fc27f - 0x1dc, _0x6a58ed - 0x7b, _0x59632d - 0x24e, _0x59632d - 0xd8);
                    }
                    function _0x56541c(_0x463329, _0x1cd9d8, _0x426a9e, _0x5c5503, _0x430bb9) {
                        return _0x4790b6(_0x1cd9d8, _0x463329 - -0x2db, _0x426a9e - 0xdd, _0x5c5503 - 0x1cd, _0x430bb9 - 0x1d3);
                    }
                    if (_0x347e14[_0x32df56(0x327, 0x2f7, 0x219, 0x291, 0x26c)](_0x347e14[_0x4e9b1b(0xf1, 0x18d, 0xd6, 0x151, 0xf7)], _0x347e14[_0x4e9b1b(0x130, 0x135, 0x69, 0x7f, 0xf7)])) {
                        if (_0xba3699) {
                            if (_0x347e14[_0x56541c(-0x1f6, -0x18b, -0x1ad, -0x1f4, -0x1cb)](_0x347e14[_0x4e9b1b(0x9e, 0xf0, 0x27, 0xe9, 0x6b)], _0x347e14[_0x4e9b1b(0x3b, 0xa7, 0x42, 0xf, 0x30)]))
                                (function () {
                                    return ![];
                                }[_0x32df56(0x393, 0x32c, 0x2af, 0x347, 0x366) + _0x56541c(-0x1be, -0x18e, -0x160, -0x183, -0x220) + 'r'](_0x20c955[_0x4e9b1b(0x3c, 0xf3, 0x2e, 0x94, 0x8c)](_0x20c955[_0x32df56(0x293, 0x26b, 0x27b, 0x2cb, 0x358)], _0x20c955[_0x4e9b1b(0xc7, 0xb4, 0xa7, 0x151, 0xcf)]))[_0x52477c(0x608, 0x6fd, 0x6f4, 0x673, 0x6a5)](_0x20c955[_0x56541c(-0x12e, -0xbb, -0x8d, -0x114, -0xc5)]));
                            else {
                                var _0x2e2fad = _0xba3699[_0x4398d8(0x4aa, 0x3af, 0x45d, 0x3e8, 0x448)](_0x3890d4, arguments);
                                return _0xba3699 = null, _0x2e2fad;
                            }
                        }
                    } else
                        _0x20c955[_0x4e9b1b(0xbd, 0x1f2, 0xdb, 0x1da, 0x156)](_0x12096c, 0x4 * -0x4e8 + -0x1f8 * 0xb + 0x2948);
                } : function () {
                };
                return _0x56620e = ![], _0x50d8c6;
            } else {
                var _0x1a0699 = new _0xa74dec(_0x5487d9[_0x2c6146(0xf8, 0x167, 0x1c8, 0x12d, 0x150)]), _0x205377 = new _0x1773ec(_0x5487d9[_0x5a4d98(0x3c5, 0x36f, 0x31e, 0x3a2, 0x398)], 'i'), _0x2ff7a8 = _0x5487d9[_0x4790b6(0x114, 0x186, 0x1a9, 0x1a8, 0x1f8)](_0x3c894d, _0x5487d9[_0x4790b6(0x12b, 0x168, 0x178, 0x11e, 0x131)]);
                !_0x1a0699[_0x3675a9(0x4dd, 0x50a, 0x51c, 0x55e, 0x4e1)](_0x5487d9[_0x5a4d98(0x293, 0x26d, 0x33d, 0x363, 0x302)](_0x2ff7a8, _0x5487d9[_0x5a4d98(0x33d, 0x30c, 0x25c, 0x296, 0x2d7)])) || !_0x205377[_0x85fb43(0x156, 0x154, 0xf9, 0x191, 0x1e4)](_0x5487d9[_0x5a4d98(0x280, 0x279, 0x259, 0x33a, 0x2ed)](_0x2ff7a8, _0x5487d9[_0x2c6146(0x1b6, 0x1f6, 0x203, 0x210, 0x189)])) ? _0x5487d9[_0x2c6146(0x1b8, 0x12b, 0x152, 0x9a, 0x131)](_0x2ff7a8, '0') : _0x5487d9[_0x5a4d98(0x286, 0x2e6, 0x397, 0x289, 0x300)](_0x1f9c16);
            }
        };
    }());
    (function () {
        function _0x2957fe(_0x2b9614, _0x7d3458, _0x29c062, _0x592231, _0x360779) {
            return _0x3943(_0x360779 - -0x334, _0x7d3458);
        }
        function _0xcd2d97(_0x9cbb53, _0x2d3e0a, _0x1f2a07, _0x565e75, _0x4389bf) {
            return _0x3943(_0x4389bf - 0x15d, _0x565e75);
        }
        function _0x351462(_0x2d307f, _0x1f906d, _0x42f73f, _0x4ddc83, _0x2b7eea) {
            return _0x3943(_0x42f73f - -0x377, _0x2d307f);
        }
        var _0x4210d7 = {
            'qZVCg': function (_0x3330f6, _0x5eafe2) {
                return _0x3330f6(_0x5eafe2);
            },
            'Edgnc': function (_0x26369d) {
                return _0x26369d();
            },
            'UaNAO': function (_0x91ccde, _0xf61b43) {
                return _0x91ccde === _0xf61b43;
            },
            'IKLvp': _0x2957fe(-0x43, -0xcd, -0x57, -0xcf, -0x3c),
            'xjMsF': _0x502e81(0x462, 0x535, 0x458, 0x4f8, 0x4f1),
            'JeqHJ': _0xcd2d97(0x419, 0x31f, 0x416, 0x400, 0x394) + _0x502e81(0x587, 0x582, 0x5b6, 0x592, 0x51c) + _0x351462(-0x114, -0x1c3, -0x150, -0x1db, -0xc6) + ')',
            'pPmNa': _0x502e81(0x58f, 0x659, 0x65c, 0x57d, 0x5bb) + _0x3ccad9(0xd5, 0xad, 0x13c, 0x10e, 0x18d) + _0xcd2d97(0x2e0, 0x341, 0x315, 0x346, 0x36a) + _0xcd2d97(0x3c2, 0x4ad, 0x4e5, 0x414, 0x449) + _0x2957fe(-0xf7, -0x7d, -0x78, -0xe8, -0x88) + _0x351462(-0x9a, -0x153, -0xe9, -0x5a, -0xc4) + _0x2957fe(-0xd2, -0x12c, -0x154, -0x7e, -0xd8),
            'DJypR': _0x2957fe(-0xb8, -0x25, -0xb0, -0x2d, -0x4b),
            'QyeJL': function (_0x2ed903, _0x4c0dbe) {
                return _0x2ed903 + _0x4c0dbe;
            },
            'zRSrl': _0x351462(-0xb8, -0x107, -0x87, -0xd0, -0x100),
            'ehRXg': _0x2957fe(-0xcf, -0x58, 0x1e, -0x43, -0x49),
            'bjzLk': function (_0x3009c4, _0x48c01d) {
                return _0x3009c4 === _0x48c01d;
            },
            'tpwSb': _0x502e81(0x509, 0x477, 0x49d, 0x40c, 0x497),
            'YAOcV': function (_0x7681a4, _0x46ff38) {
                return _0x7681a4(_0x46ff38);
            },
            'vjmdJ': _0xcd2d97(0x3c5, 0x335, 0x2fb, 0x2f6, 0x360),
            'Avmfk': _0x2957fe(-0x6a, -0x72, -0x16c, -0xf6, -0xe6),
            'GHxQu': function (_0x3fcaf9) {
                return _0x3fcaf9();
            },
            'KQMcq': function (_0x196120, _0xc06b8e, _0x5c537e) {
                return _0x196120(_0xc06b8e, _0x5c537e);
            }
        };
        function _0x502e81(_0x3a8a05, _0x16f572, _0x3cb83e, _0x25dd87, _0x3aa9bf) {
            return _0x3943(_0x3aa9bf - 0x2c6, _0x3cb83e);
        }
        function _0x3ccad9(_0x102c86, _0x135bfe, _0x5b3708, _0x3d6729, _0x2b438e) {
            return _0x3943(_0x5b3708 - -0x14d, _0x3d6729);
        }
        _0x4210d7[_0x351462(-0xd1, -0xce, -0xbe, -0x133, -0x39)](_0x463665, this, function () {
            function _0x4a7da3(_0x43cab8, _0xbd15e9, _0x597ac0, _0x381456, _0x342dcd) {
                return _0x502e81(_0x43cab8 - 0x35, _0xbd15e9 - 0x14a, _0x43cab8, _0x381456 - 0x1c8, _0xbd15e9 - -0x66d);
            }
            var _0x2578b6 = {
                'yDPTk': function (_0x101287, _0x3355c2) {
                    function _0x5df938(_0x56ac66, _0x45ac42, _0xcb0155, _0x48bb11, _0x5cb145) {
                        return _0x3943(_0x45ac42 - -0x33f, _0x48bb11);
                    }
                    return _0x4210d7[_0x5df938(-0x161, -0x11e, -0xcf, -0x127, -0x16d)](_0x101287, _0x3355c2);
                },
                'QkyuC': function (_0x4ae6e6) {
                    function _0x301dd6(_0x281252, _0xd047ce, _0x350c4f, _0x46137b, _0x55e431) {
                        return _0x3943(_0x281252 - 0x14, _0x55e431);
                    }
                    return _0x4210d7[_0x301dd6(0x268, 0x2fe, 0x1ed, 0x2ee, 0x2fb)](_0x4ae6e6);
                }
            };
            function _0x4c0837(_0x1cd285, _0x20adc6, _0x4c0456, _0x56983e, _0x41acca) {
                return _0xcd2d97(_0x1cd285 - 0x14c, _0x20adc6 - 0x1a6, _0x4c0456 - 0x14d, _0x4c0456, _0x41acca - -0x1d);
            }
            function _0x27266d(_0x24bec4, _0x2dd001, _0x4eb467, _0x1c7e93, _0x3b31af) {
                return _0xcd2d97(_0x24bec4 - 0x146, _0x2dd001 - 0x131, _0x4eb467 - 0x89, _0x24bec4, _0x4eb467 - 0xc);
            }
            function _0x113ecc(_0xf6ff50, _0x5cec4d, _0x13adff, _0x3ef863, _0x12c1d3) {
                return _0x3ccad9(_0xf6ff50 - 0x138, _0x5cec4d - 0x193, _0x13adff - -0x7b, _0x12c1d3, _0x12c1d3 - 0x7a);
            }
            function _0x3ee4e4(_0x5bd083, _0x36ab1c, _0x5d94c7, _0x1d0724, _0xa2cbe6) {
                return _0xcd2d97(_0x5bd083 - 0x47, _0x36ab1c - 0x145, _0x5d94c7 - 0x1e0, _0xa2cbe6, _0x1d0724 - -0x461);
            }
            if (_0x4210d7[_0x113ecc(0xcd, 0x2e, 0x44, 0x50, 0x7f)](_0x4210d7[_0x3ee4e4(-0xba, -0xa, -0xee, -0x74, -0xd)], _0x4210d7[_0x4c0837(0x3d0, 0x455, 0x471, 0x43c, 0x431)]))
                return !![];
            else {
                var _0x3d71c3 = new RegExp(_0x4210d7[_0x4c0837(0x3b5, 0x3f2, 0x455, 0x459, 0x424)]), _0x590c65 = new RegExp(_0x4210d7[_0x4c0837(0x43a, 0x31b, 0x3f4, 0x3f0, 0x3a3)], 'i'), _0x3e46b5 = _0x4210d7[_0x27266d(0x36a, 0x408, 0x38a, 0x3fa, 0x355)](_0x202aa1, _0x4210d7[_0x113ecc(0x16d, 0x13e, 0xec, 0x103, 0xee)]);
                !_0x3d71c3[_0x27266d(0x31e, 0x357, 0x3a3, 0x3c5, 0x30b)](_0x4210d7[_0x4a7da3(-0x3b, -0xd4, -0x116, -0x43, -0xb7)](_0x3e46b5, _0x4210d7[_0x4c0837(0x3ce, 0x43c, 0x374, 0x35f, 0x3f5)])) || !_0x590c65[_0x113ecc(0x1c, 0x4f, 0x72, 0x3d, 0x111)](_0x4210d7[_0x4c0837(0x49e, 0x42a, 0x397, 0x3e0, 0x413)](_0x3e46b5, _0x4210d7[_0x113ecc(-0x3b, -0x96, -0x6, -0x90, -0x35)])) ? _0x4210d7[_0x4c0837(0x37e, 0x2f3, 0x352, 0x3ab, 0x315)](_0x4210d7[_0x3ee4e4(-0x60, 0x67, 0x57, -0x3, 0x1e)], _0x4210d7[_0x3ee4e4(-0x19, -0xa1, 0x18, -0x3, 0x94)]) ? _0x4210d7[_0x4a7da3(-0x40, -0xc0, -0x9c, -0x9a, -0x44)](_0x3e46b5, '0') : _0x2578b6[_0x4a7da3(-0xc6, -0x124, -0x196, -0x186, -0xc9)](_0x418e0e, '0') : _0x4210d7[_0x3ee4e4(-0x114, -0x195, -0x1af, -0x12f, -0xe2)](_0x4210d7[_0x3ee4e4(-0x6b, -0x2f, -0x49, -0x25, -0x44)], _0x4210d7[_0x3ee4e4(0x1e, -0x1c, -0x4f, -0x82, -0xb2)]) ? _0x2578b6[_0x3ee4e4(-0x162, -0xec, -0x1bf, -0x13e, -0x189)](_0x59823f) : _0x4210d7[_0x4c0837(0x3df, 0x359, 0x428, 0x398, 0x391)](_0x202aa1);
            }
        })();
    }()), await QueenAmdi[_0x459379(0x1e6, 0x1b4, 0x1d5, 0x173, 0x1c2) + _0x459379(0x134, 0x1a2, 0x18e, 0x201, 0x188)]();
    function _0x1f78bb(_0x3d6d3b, _0x453064, _0x5c8cf2, _0x13c8d8, _0x5d5d84) {
        return _0x3943(_0x5c8cf2 - -0x37d, _0x5d5d84);
    }
    function _0x459379(_0x1db182, _0x3ae8d0, _0x1cfe82, _0x37bf49, _0x3c2b82) {
        return _0x3943(_0x3ae8d0 - -0x4c, _0x3c2b82);
    }
    const actmsg = _0x570a06(0xb8, 0x14c, 0x48, 0xce, 0xe8) + _0x459379(0x187, 0x213, 0x238, 0x1a0, 0x1ee) + _0x3ba97a(0x4d3, 0x4cf, 0x4ba, 0x458, 0x4d7) + _0x570a06(0xaa, 0xed, 0x10d, 0xf4, 0xe8) + _0x2873e5(0x3ca, 0x3e4, 0x3a4, 0x3d3, 0x436) + '.', GUARD = _0x1f78bb(-0xac, -0xf0, -0xa5, -0xa5, -0x2a) + _0x570a06(0x188, 0x160, 0x116, 0xed, 0xff) + _0x570a06(0x188, 0x1dd, 0xee, 0x118, 0x216) + _0x570a06(0x188, 0x222, 0x223, 0x1e0, 0x220) + _0x1f78bb(-0x68, -0xda, -0xa5, -0x5f, -0xb5) + _0x1f78bb(-0x128, -0x42, -0xa5, -0x117, -0x3f) + _0x1f78bb(-0x30, -0x48, -0xa5, -0xce, -0xab) + _0x1f78bb(-0x18b, -0x210, -0x1ba, -0x1d2, -0x179) + _0x2873e5(0x40e, 0x477, 0x483, 0x41e, 0x379) + _0x459379(0x1d6, 0x1b1, 0x24d, 0x1c8, 0x110) + _0x1f78bb(-0x1ea, -0x1e8, -0x198, -0x1ff, -0x17d) + _0x570a06(0x1a3, 0x150, 0x1ca, 0x104, 0x23d) + _0x3ba97a(0x431, 0x4bc, 0x4aa, 0x45a, 0x42c) + _0x570a06(0xec, 0x148, 0x11c, 0x154, 0x17f) + _0x570a06(0x9d, 0x13b, 0x1f, 0x7d, 0xdf) + _0x3ba97a(0x37b, 0x3cc, 0x399, 0x400, 0x40a) + _0x459379(0x1be, 0x248, 0x281, 0x1bb, 0x274) + _0x570a06(0xa2, 0x9e, 0x4e, 0x35, 0x132) + _0x570a06(0x14a, 0xb2, 0x1d2, 0x12a, 0xdd) + _0x570a06(0xee, 0x136, 0x135, 0xe8, 0xcf) + _0x3ba97a(0x3e9, 0x401, 0x3ac, 0x350, 0x3fe) + _0x1f78bb(-0x145, -0x213, -0x1a2, -0x194, -0x15e) + _0x459379(0x1a3, 0x21e, 0x2b0, 0x253, 0x279) + _0x3ba97a(0x389, 0x322, 0x3b9, 0x336, 0x3c6) + _0x2873e5(0x451, 0x3b7, 0x4f1, 0x4d7, 0x3b8) + _0x459379(0x21f, 0x29a, 0x30a, 0x2d5, 0x2a1) + _0x570a06(0x173, 0x202, 0xf5, 0x1b1, 0xd8) + _0x1f78bb(-0x15e, -0x172, -0x10f, -0xaa, -0x176) + _0x459379(0x1e5, 0x222, 0x29c, 0x28c, 0x29d) + _0x1f78bb(-0x16, -0x80, -0xae, -0x9b, -0xee) + _0x459379(0x1c7, 0x1aa, 0x1b3, 0x179, 0x19f) + _0x570a06(0x71, -0x1a, -0x2c, 0xf, -0x2a) + _0x3ba97a(0x3e2, 0x464, 0x47d, 0x48b, 0x4fe) + _0x459379(0x26a, 0x1cc, 0x252, 0x233, 0x22d) + _0x1f78bb(-0x134, -0x70, -0xe4, -0x128, -0xad) + _0x1f78bb(-0x19f, -0xd2, -0x16a, -0x190, -0x103) + _0x1f78bb(-0x7d, -0x2c, -0xc6, -0x12d, -0xc1) + _0x2873e5(0x37d, 0x356, 0x320, 0x314, 0x3b6) + _0x570a06(0xbb, 0x40, 0x67, 0x44, 0x65) + _0x459379(0x32f, 0x297, 0x2e9, 0x331, 0x24f) + _0x459379(0x242, 0x20e, 0x1bf, 0x199, 0x282) + _0x459379(0x2bf, 0x226, 0x278, 0x212, 0x2a8) + _0x1f78bb(-0x13f, -0x109, -0x162, -0xc3, -0x122) + _0x570a06(0xaf, 0x148, 0xfb, 0x11e, 0x84) + _0x1f78bb(-0x155, -0x16d, -0x16e, -0x19b, -0x110) + _0x459379(0x1f3, 0x238, 0x26c, 0x2a7, 0x1f4) + _0x2873e5(0x44e, 0x4a8, 0x499, 0x481, 0x428) + _0x1f78bb(-0x28, -0x64, -0x86, -0xd3, -0x8) + _0x2873e5(0x3cd, 0x44f, 0x3b9, 0x394, 0x381) + _0x459379(0x215, 0x214, 0x2af, 0x24b, 0x178) + _0x1f78bb(0xc, -0x98, -0x95, -0x120, -0x12b) + _0x1f78bb(-0x14a, -0x1bd, -0x153, -0xca, -0x19c) + _0x2873e5(0x385, 0x36a, 0x408, 0x39d, 0x406) + _0x570a06(0x186, 0x1b0, 0x151, 0x14e, 0x1e5) + _0x459379(0x152, 0x1d6, 0x195, 0x191, 0x1ad) + _0x2873e5(0x3e6, 0x435, 0x3ea, 0x45a, 0x375) + _0x3ba97a(0x3d2, 0x365, 0x3e2, 0x474, 0x3a5) + _0x2873e5(0x352, 0x39e, 0x335, 0x2c5, 0x39f) + _0x1f78bb(-0xee, -0x116, -0x150, -0x195, -0x141) + _0x570a06(0x135, 0xe6, 0xb1, 0xa5, 0x127) + _0x459379(0x22c, 0x1ba, 0x126, 0x204, 0x258) + _0x570a06(0x82, -0x2, 0x91, 0xee, 0xc4) + _0x2873e5(0x3b2, 0x38d, 0x3ed, 0x322, 0x313) + _0x459379(0x22b, 0x191, 0x1bf, 0x207, 0x15a) + _0x1f78bb(-0x157, -0x18e, -0x109, -0x72, -0x139) + _0x3ba97a(0x3fb, 0x331, 0x3a1, 0x38e, 0x307) + _0x459379(0x1b8, 0x245, 0x1aa, 0x276, 0x2c8) + _0x459379(0x2a6, 0x222, 0x201, 0x280, 0x27d) + _0x459379(0x1a2, 0x222, 0x28a, 0x1b7, 0x1a7) + _0x2873e5(0x441, 0x492, 0x4a9, 0x4ca, 0x427) + _0x570a06(0x84, 0x10d, 0x51, 0x79, 0x10) + _0x3ba97a(0x44e, 0x403, 0x3f5, 0x3c2, 0x3c5) + _0x3ba97a(0x4fd, 0x515, 0x4b4, 0x447, 0x52e) + _0x459379(0x247, 0x234, 0x1e7, 0x20f, 0x1d9) + _0x570a06(0xe9, 0x7a, 0x71, 0x17d, 0x49) + _0x570a06(0x119, 0x16f, 0x96, 0x11a, 0x15a) + _0x459379(0x2b9, 0x261, 0x1e9, 0x276, 0x1e6) + _0x3ba97a(0x496, 0x4e6, 0x46a, 0x3e7, 0x4fa) + _0x2873e5(0x40c, 0x3d4, 0x456, 0x394, 0x41d) + _0x3ba97a(0x4a8, 0x426, 0x46a, 0x446, 0x48b) + _0x1f78bb(-0x5c, -0x9a, -0xd0, -0xdd, -0x127) + _0x570a06(0x15d, 0x1b2, 0x1fb, 0x14e, 0x119) + _0x3ba97a(0x4dc, 0x49e, 0x46a, 0x41c, 0x431) + _0x570a06(0x15d, 0xf9, 0x1c1, 0x1ac, 0x1b3) + _0x3ba97a(0x416, 0x4ee, 0x46a, 0x43b, 0x4d9) + _0x570a06(0x15d, 0x133, 0x1f7, 0x1e4, 0x1cd) + _0x3ba97a(0x402, 0x411, 0x46a, 0x4fa, 0x4d9) + _0x570a06(0x15d, 0x17f, 0x112, 0x122, 0x1ea) + _0x1f78bb(-0x12a, -0xd9, -0xd0, -0x118, -0x6d) + _0x2873e5(0x40c, 0x3a2, 0x3e6, 0x496, 0x3ca) + _0x2873e5(0x40c, 0x4ac, 0x3e8, 0x3c1, 0x38d) + _0x2873e5(0x40c, 0x46c, 0x41a, 0x43b, 0x3bc) + _0x3ba97a(0x42f, 0x4da, 0x46a, 0x4fc, 0x4a4) + _0x570a06(0x15d, 0xe2, 0x1bd, 0x1d6, 0x19f) + _0x570a06(0x15d, 0xcf, 0x1bb, 0xe5, 0x1f3) + _0x1f78bb(-0x7a, -0xd2, -0xd0, -0xc5, -0x46) + _0x570a06(0x15d, 0x179, 0x133, 0x14c, 0xd6) + _0x459379(0x291, 0x261, 0x206, 0x2cd, 0x1eb) + _0x459379(0x25f, 0x261, 0x23d, 0x21e, 0x270) + _0x1f78bb(-0xf5, -0x5a, -0xd0, -0x52, -0x144) + _0x3ba97a(0x428, 0x487, 0x46a, 0x4d8, 0x449) + _0x2873e5(0x40c, 0x424, 0x3a0, 0x37b, 0x3bb) + _0x2873e5(0x40c, 0x464, 0x38b, 0x4a1, 0x396) + _0x2873e5(0x40c, 0x378, 0x3f3, 0x422, 0x3d7) + _0x1f78bb(-0x105, -0x13e, -0xd0, -0xb9, -0xb7) + _0x459379(0x292, 0x261, 0x235, 0x1dc, 0x1ef) + _0x459379(0x2ee, 0x261, 0x2bc, 0x29c, 0x2cc) + _0x1f78bb(-0xdc, -0xcd, -0xd0, -0x160, -0x169) + _0x570a06(0x15d, 0xc6, 0x16b, 0x1e3, 0xc8) + _0x459379(0x1fe, 0x261, 0x213, 0x2df, 0x29a) + _0x570a06(0x15d, 0x1f1, 0x13c, 0xcc, 0x19a) + _0x2873e5(0x40c, 0x459, 0x47c, 0x48e, 0x41e) + _0x459379(0x274, 0x261, 0x204, 0x1d1, 0x299) + _0x3ba97a(0x454, 0x44e, 0x46a, 0x45a, 0x3d7) + _0x459379(0x1ed, 0x261, 0x210, 0x2c6, 0x2dd) + _0x2873e5(0x40c, 0x47f, 0x371, 0x49e, 0x492) + _0x1f78bb(-0x14b, -0xc9, -0xd0, -0x105, -0x16b) + _0x570a06(0x15d, 0x1b9, 0x168, 0x17f, 0x150) + _0x1f78bb(-0x96, -0x143, -0xd0, -0x168, -0x116) + _0x1f78bb(-0x3e, -0x71, -0xd0, -0x11b, -0x64) + _0x570a06(0x15d, 0x19d, 0x136, 0x1b9, 0x17c) + _0x570a06(0x15d, 0x1e5, 0x16a, 0x1da, 0xec) + _0x3ba97a(0x4c1, 0x435, 0x46a, 0x4e2, 0x410) + _0x3ba97a(0x40a, 0x480, 0x46a, 0x3ce, 0x4d4) + _0x1f78bb(-0xf6, -0x5f, -0xd0, -0x6c, -0x16a) + _0x570a06(0x15d, 0x12a, 0x1da, 0x17b, 0xcc) + _0x570a06(0x15d, 0x1d7, 0x1d0, 0x19a, 0x148) + _0x459379(0x29c, 0x261, 0x29a, 0x230, 0x29a) + _0x570a06(0x15d, 0x1be, 0x197, 0x1f4, 0x12c) + _0x570a06(0x15d, 0xfe, 0xc9, 0x124, 0x150) + _0x2873e5(0x40c, 0x3c0, 0x430, 0x440, 0x38e) + _0x2873e5(0x40c, 0x3bc, 0x3a3, 0x474, 0x4a0) + _0x459379(0x22d, 0x261, 0x29a, 0x2c1, 0x27f) + _0x2873e5(0x40c, 0x3c3, 0x376, 0x465, 0x48c) + _0x2873e5(0x40c, 0x436, 0x3f1, 0x44c, 0x448) + _0x3ba97a(0x46e, 0x3d2, 0x46a, 0x454, 0x48c) + _0x1f78bb(-0x126, -0xf3, -0xd0, -0xb4, -0x10a) + _0x570a06(0x15d, 0x12b, 0x14c, 0xea, 0x113) + _0x3ba97a(0x50b, 0x467, 0x46a, 0x45b, 0x4f0) + _0x570a06(0x15d, 0x1f1, 0xbd, 0xf3, 0x190) + _0x1f78bb(-0x59, -0x67, -0xd0, -0x8a, -0x8e) + _0x1f78bb(-0x131, -0x3e, -0xd0, -0x4b, -0x15c) + _0x570a06(0x15d, 0xdc, 0x159, 0xf7, 0x16c) + _0x1f78bb(-0x111, -0x9b, -0xd0, -0x141, -0x8b) + _0x570a06(0x15d, 0x193, 0x1e1, 0xec, 0x1a0) + _0x2873e5(0x40c, 0x448, 0x3e8, 0x37c, 0x3da) + _0x459379(0x24a, 0x261, 0x2f5, 0x2d3, 0x1f0) + _0x2873e5(0x40c, 0x390, 0x49f, 0x46e, 0x41a) + _0x570a06(0x15d, 0xc5, 0x1de, 0x10e, 0x151) + _0x570a06(0x15d, 0xd2, 0x1ad, 0xe0, 0x138) + _0x459379(0x2ea, 0x261, 0x1d4, 0x286, 0x1d8) + _0x1f78bb(-0x8e, -0x52, -0xd0, -0x10e, -0xa4) + _0x3ba97a(0x4ce, 0x4c1, 0x46a, 0x4ad, 0x4ae) + _0x3ba97a(0x491, 0x3ca, 0x46a, 0x4aa, 0x41f) + _0x3ba97a(0x433, 0x466, 0x46a, 0x41f, 0x4de) + _0x570a06(0x15d, 0x1e0, 0x1b9, 0xeb, 0x1a6) + _0x3ba97a(0x48a, 0x487, 0x46a, 0x4c6, 0x407) + _0x3ba97a(0x478, 0x449, 0x46a, 0x44b, 0x4a4) + _0x1f78bb(-0xe9, -0x11f, -0xd0, -0x140, -0x11c) + _0x459379(0x2b9, 0x261, 0x20c, 0x2d5, 0x25e) + _0x570a06(0x15d, 0xe1, 0xd9, 0x117, 0xdf) + _0x1f78bb(-0x8e, -0x33, -0xd0, -0x131, -0x56) + _0x3ba97a(0x45e, 0x411, 0x46a, 0x509, 0x3e4) + _0x1f78bb(-0x149, -0x124, -0xd0, -0xd8, -0xd4) + _0x3ba97a(0x43e, 0x4a9, 0x46a, 0x489, 0x492) + _0x1f78bb(-0x9e, -0x163, -0xd0, -0x92, -0x109) + _0x2873e5(0x40c, 0x3ee, 0x4a4, 0x422, 0x3e0) + _0x570a06(0x15d, 0x176, 0xe4, 0x1e8, 0x1a3) + _0x459379(0x1f9, 0x261, 0x1d0, 0x2f9, 0x26d) + _0x570a06(0x15d, 0x13a, 0xd0, 0x169, 0x1c7) + _0x570a06(0x15d, 0x1d3, 0x1e1, 0x1f5, 0xc6) + _0x1f78bb(-0x7b, -0x3a, -0xd0, -0xce, -0x7d) + _0x570a06(0x15d, 0x147, 0x128, 0xe8, 0x1d5) + _0x1f78bb(-0x102, -0xdd, -0xd0, -0x101, -0xc5) + _0x570a06(0x15d, 0x1f7, 0x13c, 0xfd, 0x187) + _0x570a06(0x15d, 0x1be, 0x1c2, 0x142, 0xe1) + _0x2873e5(0x40c, 0x474, 0x3b2, 0x439, 0x39c) + _0x459379(0x1f9, 0x261, 0x2ec, 0x2ad, 0x237) + _0x2873e5(0x438, 0x3e2, 0x3e5, 0x431, 0x417) + _0x1f78bb(-0xc9, -0x19e, -0x155, -0x1c8, -0x1aa) + _0x570a06(0x13d, 0x1dd, 0x11e, 0x1da, 0xff) + _0x3ba97a(0x3b8, 0x31c, 0x3b5, 0x374, 0x3e1) + _0x3ba97a(0x477, 0x3a1, 0x421, 0x448, 0x44b) + _0x3ba97a(0x3df, 0x460, 0x443, 0x3e6, 0x4df) + _0x1f78bb(-0xac, -0x7c, -0xa5, -0x10a, -0x94) + _0x1f78bb(-0x126, -0x12c, -0xa5, -0xb4, -0xa) + _0x459379(0x2a6, 0x28c, 0x205, 0x263, 0x1f0) + _0x1f78bb(-0x48, -0x8b, -0xa5, -0x12a, -0x8c) + _0x3ba97a(0x518, 0x3fc, 0x495, 0x42b, 0x4d6) + _0x459379(0x30f, 0x28c, 0x22b, 0x25c, 0x2bd) + _0x570a06(0x188, 0x1a6, 0x19e, 0x103, 0x104);
    function _0x2873e5(_0x1d250c, _0x2dc5f4, _0x266892, _0x426cfb, _0xe455d3) {
        return _0x3943(_0x1d250c - 0x15f, _0x426cfb);
    }
    function _0x570a06(_0x27cae2, _0x6e9d61, _0x3fb03e, _0x425d60, _0x5cfe87) {
        return _0x3943(_0x27cae2 - -0x150, _0x5cfe87);
    }
    if (Build[_0x570a06(0x123, 0x1a6, 0xa4, 0x183, 0x8b) + 'UG'] == _0x3ba97a(0x3be, 0x4e5, 0x455, 0x3df, 0x4e6)) {
        let getword1bug = new RegExp(_0x1f78bb(-0x1c9, -0x17d, -0x1af, -0x247, -0x13b) + _0x570a06(0x145, 0x1a8, 0x150, 0x1ce, 0xfa)), getword2bug = new RegExp(_0x570a06(0x146, 0x10c, 0xde, 0x15c, 0xcf) + _0x3ba97a(0x3e3, 0x425, 0x46d, 0x4c9, 0x4f8) + _0x2873e5(0x3cc, 0x42a, 0x453, 0x3e3, 0x428)), getword3bug = new RegExp(_0x570a06(0x100, 0x141, 0xc0, 0x101, 0x18a) + _0x1f78bb(-0xa3, -0x168, -0x107, -0xed, -0x7e) + _0x459379(0x291, 0x25f, 0x2dc, 0x26a, 0x21b)), getword4bug = new RegExp(_0x2873e5(0x33e, 0x327, 0x3b2, 0x33f, 0x357) + _0x3ba97a(0x361, 0x459, 0x3bf, 0x35e, 0x38b) + _0x570a06(0x128, 0x170, 0x14d, 0x1b1, 0x1b8) + 'Y'), getword5bug = new RegExp(_0x570a06(0x12b, 0x129, 0x13c, 0x187, 0x1a6)), getword6bug = new RegExp(_0x2873e5(0x419, 0x3e7, 0x3dc, 0x389, 0x44d) + _0x3ba97a(0x4d4, 0x486, 0x485, 0x434, 0x4fe) + _0x3ba97a(0x4ce, 0x39a, 0x437, 0x43e, 0x436) + _0x2873e5(0x459, 0x43e, 0x442, 0x498, 0x4e5)), getword7bug = new RegExp(_0x459379(0x1a1, 0x1cb, 0x208, 0x251, 0x1c3)), getword8bug = new RegExp(_0x1f78bb(-0x13c, -0xe5, -0x13e, -0xc9, -0xc9)), getword9bug = new RegExp(_0x3ba97a(0x3ea, 0x483, 0x416, 0x498, 0x44e) + 'n'), getword10bug = new RegExp(_0x570a06(0x1a6, 0x14c, 0x1d0, 0x205, 0x23e) + _0x2873e5(0x328, 0x3c9, 0x342, 0x2d1, 0x3a4) + _0x2873e5(0x3c1, 0x327, 0x328, 0x379, 0x3d8));
        if (getword1bug[_0x3ba97a(0x365, 0x3c8, 0x3f7, 0x452, 0x400)](message[_0x570a06(0xed, 0xb8, 0x177, 0x81, 0xc1) + 'ge'])) {
            var DWdmfh = (_0x459379(0x206, 0x22b, 0x25b, 0x1df, 0x21e) + _0x1f78bb(-0x15b, -0x17f, -0xf1, -0x16b, -0x192) + _0x2873e5(0x36f, 0x3c6, 0x2f0, 0x372, 0x3df) + _0x1f78bb(-0xa3, -0x139, -0xbf, -0x9a, -0x12a) + _0x3ba97a(0x424, 0x4f7, 0x48f, 0x519, 0x3fb))[_0x3ba97a(0x443, 0x32d, 0x3a3, 0x365, 0x442)]('|'), rURtEn = -0x2103 + -0x193e + 0x3a41;
            while (!![]) {
                switch (DWdmfh[rURtEn++]) {
                case '0':
                    if (us)
                        return;
                    continue;
                case '1':
                    var us = await checkUsAdmin(message);
                    continue;
                case '2':
                    await message[_0x2873e5(0x3a0, 0x3e2, 0x3c7, 0x41c, 0x3a3) + 't'][_0x570a06(0xf6, 0x12e, 0xee, 0x77, 0xf8) + _0x570a06(0x16d, 0xef, 0x14a, 0x1ec, 0x114) + 'e'](message[_0x3ba97a(0x4ef, 0x4d7, 0x45d, 0x4a2, 0x415)], [message[_0x3ba97a(0x3ed, 0x4f1, 0x465, 0x4ac, 0x3e4)][_0x1f78bb(-0x8b, -0x79, -0x117, -0xc6, -0x193) + _0x2873e5(0x366, 0x380, 0x327, 0x2da, 0x2e1) + 't']]);
                    continue;
                case '3':
                    await message[_0x3ba97a(0x3b7, 0x36d, 0x3fe, 0x3d4, 0x43b) + 't'][_0x570a06(0xb1, 0x100, 0x6e, 0x56, 0x9e) + _0x3ba97a(0x42b, 0x412, 0x3cb, 0x431, 0x336) + 'e'](message[_0x3ba97a(0x3f2, 0x485, 0x45d, 0x457, 0x44c)], GUARD, MessageType[_0x1f78bb(-0x165, -0x1a7, -0x160, -0x10c, -0x189)]);
                    continue;
                case '4':
                    await message[_0x2873e5(0x3a0, 0x3b0, 0x3c8, 0x3ae, 0x397) + 't'][_0x459379(0x173, 0x1b5, 0x1d0, 0x15e, 0x210) + _0x1f78bb(-0x200, -0x172, -0x16f, -0xf0, -0x164) + 'e'](message[_0x570a06(0x150, 0x123, 0x10f, 0xe5, 0x10d)], GUARD, MessageType[_0x3ba97a(0x385, 0x3e2, 0x3da, 0x406, 0x44d)]);
                    continue;
                case '5':
                    await message[_0x2873e5(0x3a0, 0x35a, 0x3ef, 0x30f, 0x32c) + 't'][_0x3ba97a(0x32a, 0x34b, 0x3be, 0x3e6, 0x434) + _0x570a06(0xbe, 0xcc, 0xdd, 0xb3, 0x6c) + 'e'](message[_0x2873e5(0x3ff, 0x378, 0x3fb, 0x42f, 0x45f)], GUARD, MessageType[_0x459379(0x18c, 0x1d1, 0x214, 0x180, 0x249)]);
                    continue;
                case '6':
                    await message[_0x459379(0x263, 0x1f5, 0x22a, 0x1f6, 0x1dd) + 't'][_0x3ba97a(0x40d, 0x367, 0x3be, 0x3cf, 0x348) + _0x3ba97a(0x398, 0x408, 0x3cb, 0x455, 0x33b) + 'e'](message[_0x1f78bb(-0x160, -0xbb, -0xdd, -0xeb, -0x86)], GUARD, MessageType[_0x570a06(0xcd, 0x33, 0xed, 0x7d, 0x6c)]);
                    continue;
                case '7':
                    var im = await checkImAdmin(message);
                    continue;
                case '8':
                    await message[_0x2873e5(0x3a0, 0x3c6, 0x427, 0x418, 0x3bb) + 't'][_0x2873e5(0x360, 0x3cc, 0x3fc, 0x3c1, 0x361) + _0x3ba97a(0x38c, 0x38f, 0x3cb, 0x3e3, 0x355) + 'e'](message[_0x459379(0x1d5, 0x254, 0x1d4, 0x2e7, 0x2c0)], actmsg, MessageType[_0x2873e5(0x37c, 0x406, 0x3d5, 0x306, 0x30b)]);
                    continue;
                case '9':
                    await message[_0x3ba97a(0x49e, 0x412, 0x3fe, 0x3d8, 0x489) + 't'][_0x3ba97a(0x3bf, 0x41d, 0x3be, 0x429, 0x31e) + _0x2873e5(0x36d, 0x3de, 0x3a2, 0x3d0, 0x40a) + 'e'](message[_0x3ba97a(0x403, 0x4b2, 0x45d, 0x47f, 0x423)], bugkick, MessageType[_0x3ba97a(0x355, 0x35b, 0x3da, 0x3b7, 0x443)]);
                    continue;
                case '10':
                    await message[_0x459379(0x165, 0x1f5, 0x243, 0x1f9, 0x221) + 't'][_0x2873e5(0x360, 0x321, 0x367, 0x3da, 0x347) + _0x1f78bb(-0x16b, -0x1c8, -0x16f, -0x120, -0x118) + 'e'](message[_0x570a06(0x150, 0xd4, 0xd0, 0x1e1, 0x1aa)], GUARD, MessageType[_0x459379(0x175, 0x1d1, 0x1f1, 0x260, 0x1da)]);
                    continue;
                case '11':
                    if (!im)
                        return;
                    continue;
                }
                break;
            }
        }
        if (getword2bug[_0x1f78bb(-0x13a, -0x187, -0x143, -0x105, -0x142)](message[_0x1f78bb(-0x163, -0x18e, -0x140, -0xc7, -0x125) + 'ge'])) {
            var qlvRCL = (_0x3ba97a(0x4d6, 0x4d5, 0x49d, 0x4b6, 0x4c4) + _0x3ba97a(0x3c0, 0x4d0, 0x454, 0x459, 0x4b4) + _0x570a06(0x70, 0xa7, 0xab, 0x12, 0xd8) + _0x459379(0x259, 0x279, 0x24f, 0x2fc, 0x2a9) + _0x3ba97a(0x3a6, 0x3b7, 0x42d, 0x471, 0x3b4))[_0x2873e5(0x345, 0x2dc, 0x3a4, 0x3ab, 0x305)]('|'), SypIfX = 0xeb1 + -0x164b + -0x1 * -0x79a;
            while (!![]) {
                switch (qlvRCL[SypIfX++]) {
                case '0':
                    var us = await checkUsAdmin(message);
                    continue;
                case '1':
                    await message[_0x1f78bb(-0xb9, -0x1b2, -0x13c, -0x11a, -0x170) + 't'][_0x570a06(0xb1, 0x7b, 0x3a, 0x67, 0x144) + _0x570a06(0xbe, 0xfb, 0xcf, 0x144, 0x53) + 'e'](message[_0x2873e5(0x3ff, 0x454, 0x3bf, 0x389, 0x399)], GUARD, MessageType[_0x3ba97a(0x402, 0x414, 0x3da, 0x421, 0x412)]);
                    continue;
                case '2':
                    await message[_0x1f78bb(-0x119, -0x19a, -0x13c, -0xf4, -0x118) + 't'][_0x459379(0x1c4, 0x1b5, 0x1a4, 0x233, 0x24b) + _0x1f78bb(-0x173, -0x1f3, -0x16f, -0x1c4, -0x16f) + 'e'](message[_0x1f78bb(-0x41, -0xd0, -0xdd, -0x73, -0x63)], GUARD, MessageType[_0x3ba97a(0x3d9, 0x33d, 0x3da, 0x394, 0x402)]);
                    continue;
                case '3':
                    if (us)
                        return;
                    continue;
                case '4':
                    await message[_0x2873e5(0x3a0, 0x406, 0x32c, 0x3cb, 0x410) + 't'][_0x1f78bb(-0x19c, -0x1db, -0x17c, -0x1e3, -0x210) + _0x570a06(0xbe, 0xa0, 0xac, 0xbc, 0x3e) + 'e'](message[_0x2873e5(0x3ff, 0x483, 0x3e2, 0x38c, 0x42d)], GUARD, MessageType[_0x1f78bb(-0xe2, -0x13a, -0x160, -0xd4, -0x1be)]);
                    continue;
                case '5':
                    var im = await checkImAdmin(message);
                    continue;
                case '6':
                    if (!im)
                        return;
                    continue;
                case '7':
                    await message[_0x459379(0x21e, 0x1f5, 0x206, 0x239, 0x254) + 't'][_0x570a06(0xf6, 0x12b, 0x132, 0x194, 0x9e) + _0x3ba97a(0x4e5, 0x46c, 0x47a, 0x4e7, 0x410) + 'e'](message[_0x570a06(0x150, 0x177, 0x13d, 0x17b, 0x1e7)], [message[_0x459379(0x1fd, 0x25c, 0x1f0, 0x2f3, 0x1ea)][_0x570a06(0x116, 0x7e, 0xd1, 0x16a, 0x144) + _0x570a06(0xb7, 0x12c, 0xa7, 0x60, 0xdc) + 't']]);
                    continue;
                case '8':
                    await message[_0x3ba97a(0x441, 0x3dc, 0x3fe, 0x397, 0x49d) + 't'][_0x2873e5(0x360, 0x363, 0x3c0, 0x3d0, 0x3bf) + _0x1f78bb(-0x1f9, -0x116, -0x16f, -0xe8, -0x162) + 'e'](message[_0x2873e5(0x3ff, 0x3f5, 0x372, 0x477, 0x472)], GUARD, MessageType[_0x1f78bb(-0xd1, -0x142, -0x160, -0x190, -0xfe)]);
                    continue;
                case '9':
                    await message[_0x2873e5(0x3a0, 0x3ec, 0x401, 0x3c0, 0x304) + 't'][_0x459379(0x244, 0x1b5, 0x252, 0x14b, 0x23c) + _0x3ba97a(0x3a3, 0x378, 0x3cb, 0x386, 0x374) + 'e'](message[_0x1f78bb(-0xfa, -0xf7, -0xdd, -0x16f, -0x133)], bugkick, MessageType[_0x459379(0x1c8, 0x1d1, 0x19e, 0x1de, 0x187)]);
                    continue;
                case '10':
                    await message[_0x570a06(0xf1, 0xf0, 0x14b, 0x12f, 0x16b) + 't'][_0x3ba97a(0x44e, 0x348, 0x3be, 0x3b7, 0x387) + _0x3ba97a(0x3df, 0x42b, 0x3cb, 0x3e2, 0x3b0) + 'e'](message[_0x459379(0x207, 0x254, 0x2db, 0x2bc, 0x209)], actmsg, MessageType[_0x1f78bb(-0x134, -0x11d, -0x160, -0x1df, -0x17c)]);
                    continue;
                case '11':
                    await message[_0x459379(0x1e7, 0x1f5, 0x24f, 0x246, 0x1f4) + 't'][_0x1f78bb(-0x125, -0x125, -0x17c, -0x1b8, -0x18c) + _0x459379(0x132, 0x1c2, 0x1a2, 0x1d5, 0x147) + 'e'](message[_0x1f78bb(-0xcb, -0xc8, -0xdd, -0x16e, -0xa5)], GUARD, MessageType[_0x459379(0x18b, 0x1d1, 0x1e0, 0x23d, 0x234)]);
                    continue;
                }
                break;
            }
        }
        if (getword3bug[_0x2873e5(0x399, 0x349, 0x3fb, 0x3cc, 0x33b)](message[_0x3ba97a(0x458, 0x48c, 0x3fa, 0x421, 0x493) + 'ge'])) {
            var YVKmZe = (_0x570a06(0x1ae, 0x188, 0x1b0, 0x20c, 0x12d) + _0x2873e5(0x327, 0x354, 0x314, 0x377, 0x2b4) + _0x2873e5(0x40d, 0x39c, 0x3bb, 0x421, 0x467) + _0x570a06(0x157, 0x1f1, 0x19a, 0x176, 0x1b1) + _0x570a06(0x163, 0x1f6, 0x109, 0x1e6, 0x153))[_0x3ba97a(0x441, 0x3a2, 0x3a3, 0x369, 0x425)]('|'), AyaZTr = -0xcd4 + -0x21ce + 0x2ea2;
            while (!![]) {
                switch (YVKmZe[AyaZTr++]) {
                case '0':
                    await message[_0x2873e5(0x3a0, 0x43e, 0x3d3, 0x301, 0x399) + 't'][_0x459379(0x251, 0x1fa, 0x1f0, 0x272, 0x232) + _0x459379(0x268, 0x271, 0x1f4, 0x210, 0x219) + 'e'](message[_0x2873e5(0x3ff, 0x419, 0x451, 0x415, 0x45d)], [message[_0x2873e5(0x407, 0x3c7, 0x49d, 0x3c0, 0x380)][_0x2873e5(0x3c5, 0x40e, 0x331, 0x443, 0x397) + _0x3ba97a(0x3bb, 0x3b4, 0x3c4, 0x3cf, 0x374) + 't']]);
                    continue;
                case '1':
                    var us = await checkUsAdmin(message);
                    continue;
                case '2':
                    if (!im)
                        return;
                    continue;
                case '3':
                    if (us)
                        return;
                    continue;
                case '4':
                    var im = await checkImAdmin(message);
                    continue;
                case '5':
                    await message[_0x459379(0x184, 0x1f5, 0x1d7, 0x211, 0x197) + 't'][_0x459379(0x16e, 0x1b5, 0x226, 0x162, 0x17d) + _0x2873e5(0x36d, 0x3fc, 0x30b, 0x2e7, 0x31f) + 'e'](message[_0x1f78bb(-0x11e, -0x4d, -0xdd, -0xfb, -0x129)], GUARD, MessageType[_0x459379(0x192, 0x1d1, 0x203, 0x1b4, 0x1ce)]);
                    continue;
                case '6':
                    await message[_0x570a06(0xf1, 0x179, 0x74, 0x190, 0xdf) + 't'][_0x1f78bb(-0x1d5, -0xef, -0x17c, -0x18b, -0x1cf) + _0x459379(0x1f0, 0x1c2, 0x240, 0x131, 0x166) + 'e'](message[_0x3ba97a(0x40e, 0x3e6, 0x45d, 0x48e, 0x4f9)], actmsg, MessageType[_0x459379(0x135, 0x1d1, 0x1ce, 0x229, 0x155)]);
                    continue;
                case '7':
                    await message[_0x2873e5(0x3a0, 0x309, 0x37a, 0x42a, 0x36a) + 't'][_0x1f78bb(-0x1d6, -0x1ad, -0x17c, -0x110, -0x107) + _0x2873e5(0x36d, 0x392, 0x382, 0x2e2, 0x34e) + 'e'](message[_0x1f78bb(-0xd0, -0x10a, -0xdd, -0xa7, -0x111)], GUARD, MessageType[_0x2873e5(0x37c, 0x3c2, 0x2ef, 0x306, 0x379)]);
                    continue;
                case '8':
                    await message[_0x570a06(0xf1, 0xc7, 0xe8, 0x153, 0x166) + 't'][_0x2873e5(0x360, 0x35f, 0x31b, 0x3d1, 0x2ef) + _0x570a06(0xbe, 0x9d, 0x136, 0x110, 0x130) + 'e'](message[_0x459379(0x29a, 0x254, 0x29f, 0x2a3, 0x26f)], GUARD, MessageType[_0x2873e5(0x37c, 0x315, 0x401, 0x3a5, 0x31b)]);
                    continue;
                case '9':
                    await message[_0x459379(0x246, 0x1f5, 0x1ff, 0x16f, 0x1de) + 't'][_0x3ba97a(0x3e3, 0x33c, 0x3be, 0x421, 0x379) + _0x2873e5(0x36d, 0x385, 0x334, 0x324, 0x2f4) + 'e'](message[_0x3ba97a(0x41d, 0x3c6, 0x45d, 0x3d1, 0x486)], GUARD, MessageType[_0x2873e5(0x37c, 0x344, 0x2e3, 0x32a, 0x3e4)]);
                    continue;
                case '10':
                    await message[_0x459379(0x26a, 0x1f5, 0x1a3, 0x253, 0x22a) + 't'][_0x570a06(0xb1, 0xed, 0x70, 0xbe, 0x3b) + _0x1f78bb(-0x207, -0x190, -0x16f, -0x15e, -0xfe) + 'e'](message[_0x459379(0x2c8, 0x254, 0x2a8, 0x1d5, 0x249)], bugkick, MessageType[_0x2873e5(0x37c, 0x3ae, 0x3b2, 0x2e7, 0x328)]);
                    continue;
                case '11':
                    await message[_0x2873e5(0x3a0, 0x306, 0x3b6, 0x39f, 0x3b5) + 't'][_0x3ba97a(0x3ce, 0x33b, 0x3be, 0x3e5, 0x44d) + _0x3ba97a(0x428, 0x32e, 0x3cb, 0x37f, 0x39f) + 'e'](message[_0x1f78bb(-0x159, -0xbf, -0xdd, -0x50, -0x10e)], GUARD, MessageType[_0x2873e5(0x37c, 0x31a, 0x3c5, 0x3b1, 0x419)]);
                    continue;
                }
                break;
            }
        }
        if (getword4bug[_0x3ba97a(0x3d2, 0x427, 0x3f7, 0x389, 0x37b)](message[_0x459379(0x167, 0x1f1, 0x21a, 0x229, 0x24e) + 'ge'])) {
            var VInQTj = (_0x459379(0x238, 0x273, 0x2d6, 0x24c, 0x1fd) + _0x570a06(0xdc, 0x132, 0x9c, 0xde, 0xec) + _0x570a06(0xc4, 0x87, 0xbe, 0x64, 0x153) + _0x459379(0x21e, 0x295, 0x216, 0x23b, 0x257) + _0x570a06(0x168, 0xe3, 0x104, 0x18a, 0x10a))[_0x3ba97a(0x35e, 0x30b, 0x3a3, 0x3b9, 0x3c8)]('|'), gPVdNQ = 0x1a * 0x118 + -0xe57 + -0xe19;
            while (!![]) {
                switch (VInQTj[gPVdNQ++]) {
                case '0':
                    await message[_0x459379(0x174, 0x1f5, 0x252, 0x23e, 0x283) + 't'][_0x459379(0x1dc, 0x1b5, 0x1ef, 0x133, 0x1a0) + _0x1f78bb(-0x1a7, -0x138, -0x16f, -0x133, -0x197) + 'e'](message[_0x570a06(0x150, 0x120, 0x176, 0xdb, 0x13b)], GUARD, MessageType[_0x1f78bb(-0x11a, -0x17a, -0x160, -0x1c1, -0x1d2)]);
                    continue;
                case '1':
                    await message[_0x2873e5(0x3a0, 0x330, 0x303, 0x344, 0x317) + 't'][_0x459379(0x1e8, 0x1fa, 0x188, 0x201, 0x23e) + _0x570a06(0x16d, 0x165, 0x16a, 0x172, 0x208) + 'e'](message[_0x459379(0x1ef, 0x254, 0x1f5, 0x295, 0x25a)], [message[_0x570a06(0x158, 0x11d, 0x11a, 0x156, 0x15d)][_0x570a06(0x116, 0x8f, 0x103, 0xe7, 0x15b) + _0x459379(0x1e7, 0x1bb, 0x18d, 0x22e, 0x15b) + 't']]);
                    continue;
                case '2':
                    await message[_0x570a06(0xf1, 0xc5, 0xaa, 0x53, 0xb8) + 't'][_0x3ba97a(0x44f, 0x455, 0x3be, 0x385, 0x40f) + _0x1f78bb(-0x1e5, -0x153, -0x16f, -0xd8, -0x106) + 'e'](message[_0x1f78bb(-0x15f, -0x171, -0xdd, -0x169, -0x68)], GUARD, MessageType[_0x459379(0x14b, 0x1d1, 0x258, 0x1a5, 0x22a)]);
                    continue;
                case '3':
                    var us = await checkUsAdmin(message);
                    continue;
                case '4':
                    if (!im)
                        return;
                    continue;
                case '5':
                    await message[_0x459379(0x272, 0x1f5, 0x233, 0x1cd, 0x15e) + 't'][_0x2873e5(0x360, 0x3f5, 0x3f2, 0x2d2, 0x30a) + _0x459379(0x1c3, 0x1c2, 0x194, 0x1e9, 0x14f) + 'e'](message[_0x459379(0x22c, 0x254, 0x1f7, 0x243, 0x24b)], bugkick, MessageType[_0x3ba97a(0x35a, 0x35e, 0x3da, 0x34d, 0x422)]);
                    continue;
                case '6':
                    await message[_0x459379(0x214, 0x1f5, 0x285, 0x1cc, 0x217) + 't'][_0x570a06(0xb1, 0xf7, 0xfe, 0x22, 0x1e) + _0x570a06(0xbe, 0xf9, 0x12b, 0x135, 0x31) + 'e'](message[_0x3ba97a(0x4c3, 0x442, 0x45d, 0x47c, 0x43f)], actmsg, MessageType[_0x570a06(0xcd, 0x149, 0xae, 0xc2, 0x142)]);
                    continue;
                case '7':
                    await message[_0x2873e5(0x3a0, 0x328, 0x385, 0x3a7, 0x3f5) + 't'][_0x2873e5(0x360, 0x2c5, 0x2d6, 0x2db, 0x2ca) + _0x3ba97a(0x3f1, 0x407, 0x3cb, 0x3af, 0x385) + 'e'](message[_0x459379(0x1e7, 0x254, 0x1d6, 0x278, 0x226)], GUARD, MessageType[_0x1f78bb(-0x122, -0x17c, -0x160, -0xd3, -0x12c)]);
                    continue;
                case '8':
                    if (us)
                        return;
                    continue;
                case '9':
                    var im = await checkImAdmin(message);
                    continue;
                case '10':
                    await message[_0x459379(0x1d0, 0x1f5, 0x239, 0x156, 0x167) + 't'][_0x2873e5(0x360, 0x2fa, 0x39a, 0x39d, 0x2df) + _0x3ba97a(0x40a, 0x3a5, 0x3cb, 0x456, 0x462) + 'e'](message[_0x3ba97a(0x406, 0x4e0, 0x45d, 0x3f4, 0x4ef)], GUARD, MessageType[_0x3ba97a(0x443, 0x36f, 0x3da, 0x42b, 0x41f)]);
                    continue;
                case '11':
                    await message[_0x3ba97a(0x491, 0x3fa, 0x3fe, 0x43f, 0x3db) + 't'][_0x1f78bb(-0x15e, -0x182, -0x17c, -0x150, -0xf2) + _0x459379(0x152, 0x1c2, 0x15e, 0x12e, 0x13e) + 'e'](message[_0x459379(0x27d, 0x254, 0x21c, 0x207, 0x2da)], GUARD, MessageType[_0x3ba97a(0x408, 0x3f0, 0x3da, 0x3a9, 0x44e)]);
                    continue;
                }
                break;
            }
        }
        if (getword5bug[_0x459379(0x1a2, 0x1ee, 0x1e4, 0x1a3, 0x194)](message[_0x2873e5(0x39c, 0x3b9, 0x414, 0x34d, 0x3b7) + 'ge'])) {
            var hNiABS = (_0x570a06(0xc4, 0x5b, 0x76, 0xea, 0x8f) + _0x570a06(0x162, 0x1f7, 0x122, 0x144, 0x19e) + _0x459379(0x31e, 0x285, 0x271, 0x267, 0x305) + _0x2873e5(0x436, 0x425, 0x4a1, 0x44f, 0x499) + _0x1f78bb(-0x189, -0x14c, -0x132, -0x18a, -0xc5))[_0x570a06(0x96, 0x3, 0x12f, 0xc8, 0x44)]('|'), SgdWaj = 0x1f2f + -0x23 * -0xeb + -0x3f50;
            while (!![]) {
                switch (hNiABS[SgdWaj++]) {
                case '0':
                    await message[_0x459379(0x20c, 0x1f5, 0x290, 0x1a8, 0x289) + 't'][_0x459379(0x211, 0x1b5, 0x1f2, 0x249, 0x140) + _0x1f78bb(-0x1f2, -0x1f6, -0x16f, -0x1c7, -0x146) + 'e'](message[_0x570a06(0x150, 0x122, 0x116, 0x136, 0x1c8)], GUARD, MessageType[_0x2873e5(0x37c, 0x3a3, 0x350, 0x403, 0x34c)]);
                    continue;
                case '1':
                    var us = await checkUsAdmin(message);
                    continue;
                case '2':
                    await message[_0x570a06(0xf1, 0x62, 0xd5, 0xdd, 0x90) + 't'][_0x459379(0x252, 0x1b5, 0x17e, 0x1ee, 0x226) + _0x570a06(0xbe, 0x3c, 0x6c, 0x13f, 0xf0) + 'e'](message[_0x459379(0x288, 0x254, 0x226, 0x220, 0x1e2)], GUARD, MessageType[_0x2873e5(0x37c, 0x307, 0x33d, 0x40c, 0x3af)]);
                    continue;
                case '3':
                    await message[_0x459379(0x210, 0x1f5, 0x185, 0x249, 0x181) + 't'][_0x3ba97a(0x398, 0x3c3, 0x3be, 0x413, 0x398) + _0x1f78bb(-0x16b, -0x1de, -0x16f, -0xf1, -0x193) + 'e'](message[_0x2873e5(0x3ff, 0x36a, 0x35e, 0x3ca, 0x38c)], GUARD, MessageType[_0x570a06(0xcd, 0xc6, 0x167, 0x12f, 0x145)]);
                    continue;
                case '4':
                    await message[_0x570a06(0xf1, 0x171, 0x67, 0x139, 0x18d) + 't'][_0x3ba97a(0x334, 0x39f, 0x3be, 0x3eb, 0x405) + _0x1f78bb(-0xf1, -0x11a, -0x16f, -0x172, -0x134) + 'e'](message[_0x2873e5(0x3ff, 0x42b, 0x3d6, 0x420, 0x468)], bugkick, MessageType[_0x2873e5(0x37c, 0x30e, 0x37c, 0x3a3, 0x2e6)]);
                    continue;
                case '5':
                    await message[_0x3ba97a(0x3f9, 0x41c, 0x3fe, 0x392, 0x478) + 't'][_0x2873e5(0x360, 0x3ae, 0x33b, 0x353, 0x375) + _0x459379(0x201, 0x1c2, 0x252, 0x1dd, 0x193) + 'e'](message[_0x2873e5(0x3ff, 0x39b, 0x410, 0x3a9, 0x487)], GUARD, MessageType[_0x570a06(0xcd, 0x79, 0x57, 0xb7, 0x64)]);
                    continue;
                case '6':
                    var im = await checkImAdmin(message);
                    continue;
                case '7':
                    if (!im)
                        return;
                    continue;
                case '8':
                    await message[_0x3ba97a(0x371, 0x47d, 0x3fe, 0x3f0, 0x3bd) + 't'][_0x3ba97a(0x416, 0x42c, 0x403, 0x47c, 0x375) + _0x1f78bb(-0xf9, -0xb8, -0xc0, -0x11c, -0x133) + 'e'](message[_0x3ba97a(0x3c0, 0x4fc, 0x45d, 0x3bc, 0x44b)], [message[_0x570a06(0x158, 0x137, 0x132, 0x1a9, 0x130)][_0x459379(0x258, 0x21a, 0x1f9, 0x291, 0x2aa) + _0x3ba97a(0x374, 0x3bd, 0x3c4, 0x409, 0x426) + 't']]);
                    continue;
                case '9':
                    await message[_0x570a06(0xf1, 0x16e, 0x86, 0x84, 0x16e) + 't'][_0x1f78bb(-0x141, -0x101, -0x17c, -0x1a5, -0x16e) + _0x3ba97a(0x410, 0x39e, 0x3cb, 0x3aa, 0x34c) + 'e'](message[_0x570a06(0x150, 0x1af, 0xca, 0x1b1, 0x119)], actmsg, MessageType[_0x570a06(0xcd, 0x119, 0x110, 0xa7, 0x117)]);
                    continue;
                case '10':
                    await message[_0x2873e5(0x3a0, 0x389, 0x3d1, 0x33e, 0x3c2) + 't'][_0x459379(0x21c, 0x1b5, 0x1b1, 0x13e, 0x18c) + _0x459379(0x20e, 0x1c2, 0x1ed, 0x1eb, 0x1bc) + 'e'](message[_0x3ba97a(0x48f, 0x469, 0x45d, 0x4e9, 0x4c8)], GUARD, MessageType[_0x459379(0x186, 0x1d1, 0x218, 0x270, 0x24d)]);
                    continue;
                case '11':
                    if (us)
                        return;
                    continue;
                }
                break;
            }
        }
        if (getword6bug[_0x459379(0x268, 0x1ee, 0x28a, 0x261, 0x220)](message[_0x459379(0x16a, 0x1f1, 0x1b4, 0x163, 0x1d5) + 'ge'])) {
            var VeXLCC = (_0x459379(0x21b, 0x18b, 0x1ea, 0x123, 0x1ba) + _0x1f78bb(-0x9b, -0x11c, -0xb2, -0x146, -0x84) + _0x2873e5(0x364, 0x326, 0x3d4, 0x363, 0x307) + _0x459379(0x211, 0x21b, 0x1d7, 0x1b8, 0x20c) + _0x570a06(0x154, 0xd6, 0x16c, 0x179, 0x15a))[_0x1f78bb(-0x218, -0x103, -0x197, -0x126, -0x104)]('|'), ieWIAm = 0x213b + -0x1c0 * -0xf + -0x3b7b;
            while (!![]) {
                switch (VeXLCC[ieWIAm++]) {
                case '0':
                    var im = await checkImAdmin(message);
                    continue;
                case '1':
                    await message[_0x2873e5(0x3a0, 0x3c1, 0x3ee, 0x3fb, 0x348) + 't'][_0x459379(0x1b1, 0x1fa, 0x1ba, 0x1df, 0x232) + _0x3ba97a(0x45a, 0x485, 0x47a, 0x46a, 0x41c) + 'e'](message[_0x1f78bb(-0x9d, -0x12a, -0xdd, -0xa8, -0x5e)], [message[_0x3ba97a(0x4e0, 0x4b0, 0x465, 0x4e3, 0x502)][_0x3ba97a(0x405, 0x4a0, 0x423, 0x3d9, 0x40f) + _0x3ba97a(0x38e, 0x3a9, 0x3c4, 0x3a0, 0x440) + 't']]);
                    continue;
                case '2':
                    await message[_0x3ba97a(0x3ca, 0x498, 0x3fe, 0x3a6, 0x3c0) + 't'][_0x570a06(0xb1, 0xb1, 0x14, 0x45, 0x91) + _0x459379(0x22b, 0x1c2, 0x222, 0x133, 0x21b) + 'e'](message[_0x2873e5(0x3ff, 0x406, 0x450, 0x44e, 0x449)], GUARD, MessageType[_0x1f78bb(-0xcb, -0x129, -0x160, -0x1c8, -0x1ca)]);
                    continue;
                case '3':
                    await message[_0x2873e5(0x3a0, 0x409, 0x317, 0x3d9, 0x35a) + 't'][_0x459379(0x196, 0x1b5, 0x233, 0x15e, 0x200) + _0x570a06(0xbe, 0x12c, 0x58, 0x60, 0x2f) + 'e'](message[_0x1f78bb(-0x12d, -0x123, -0xdd, -0xd1, -0x177)], GUARD, MessageType[_0x1f78bb(-0x175, -0x135, -0x160, -0xeb, -0x156)]);
                    continue;
                case '4':
                    await message[_0x3ba97a(0x3fe, 0x3e2, 0x3fe, 0x436, 0x49f) + 't'][_0x2873e5(0x360, 0x368, 0x336, 0x30c, 0x3b6) + _0x2873e5(0x36d, 0x3f2, 0x34d, 0x374, 0x354) + 'e'](message[_0x3ba97a(0x3e0, 0x420, 0x45d, 0x4db, 0x3c0)], GUARD, MessageType[_0x570a06(0xcd, 0x8e, 0x10e, 0x6b, 0x145)]);
                    continue;
                case '5':
                    await message[_0x459379(0x164, 0x1f5, 0x156, 0x185, 0x253) + 't'][_0x3ba97a(0x36e, 0x335, 0x3be, 0x397, 0x328) + _0x459379(0x252, 0x1c2, 0x129, 0x16a, 0x1bd) + 'e'](message[_0x459379(0x2f3, 0x254, 0x287, 0x280, 0x2f4)], GUARD, MessageType[_0x3ba97a(0x3a6, 0x432, 0x3da, 0x382, 0x35d)]);
                    continue;
                case '6':
                    var us = await checkUsAdmin(message);
                    continue;
                case '7':
                    await message[_0x2873e5(0x3a0, 0x411, 0x355, 0x410, 0x308) + 't'][_0x459379(0x164, 0x1b5, 0x1af, 0x1ac, 0x20f) + _0x570a06(0xbe, 0x53, 0xb7, 0x41, 0xc3) + 'e'](message[_0x1f78bb(-0x112, -0xd6, -0xdd, -0xf5, -0x166)], bugkick, MessageType[_0x3ba97a(0x414, 0x44f, 0x3da, 0x393, 0x3cf)]);
                    continue;
                case '8':
                    if (!im)
                        return;
                    continue;
                case '9':
                    await message[_0x1f78bb(-0x111, -0x178, -0x13c, -0xba, -0xda) + 't'][_0x1f78bb(-0x13a, -0x198, -0x17c, -0x16a, -0x1b9) + _0x1f78bb(-0x1aa, -0x1c6, -0x16f, -0x199, -0xfe) + 'e'](message[_0x570a06(0x150, 0x1a7, 0xc6, 0xe8, 0xb9)], actmsg, MessageType[_0x459379(0x224, 0x1d1, 0x1ca, 0x1bf, 0x1c2)]);
                    continue;
                case '10':
                    if (us)
                        return;
                    continue;
                case '11':
                    await message[_0x459379(0x15c, 0x1f5, 0x1b5, 0x155, 0x195) + 't'][_0x1f78bb(-0x101, -0x202, -0x17c, -0xf8, -0x175) + _0x2873e5(0x36d, 0x377, 0x3a6, 0x38b, 0x37d) + 'e'](message[_0x1f78bb(-0xaa, -0x53, -0xdd, -0x147, -0x175)], GUARD, MessageType[_0x2873e5(0x37c, 0x36e, 0x3dd, 0x3bd, 0x2fa)]);
                    continue;
                }
                break;
            }
        }
        if (getword9bug[_0x459379(0x1e1, 0x1ee, 0x28d, 0x14f, 0x1f1)](message[_0x3ba97a(0x39c, 0x3c7, 0x3fa, 0x37a, 0x431) + 'ge'])) {
            var JJuZsX = (_0x2873e5(0x434, 0x3a0, 0x4a8, 0x3d1, 0x3f0) + _0x459379(0x2d0, 0x23f, 0x2af, 0x27b, 0x219) + _0x459379(0x234, 0x1c4, 0x227, 0x1b0, 0x1c7) + _0x459379(0x1c6, 0x1f6, 0x195, 0x174, 0x1c3) + _0x3ba97a(0x3e9, 0x422, 0x414, 0x3cb, 0x49f))[_0x3ba97a(0x3de, 0x3d9, 0x3a3, 0x3d6, 0x30f)]('|'), mKHBUV = 0x1b88 + -0xbb4 + 0x2 * -0x7ea;
            while (!![]) {
                switch (JJuZsX[mKHBUV++]) {
                case '0':
                    var im = await checkImAdmin(message);
                    continue;
                case '1':
                    if (!im)
                        return;
                    continue;
                case '2':
                    await message[_0x1f78bb(-0x16c, -0x108, -0x13c, -0xcc, -0x1cc) + 't'][_0x459379(0x183, 0x1fa, 0x242, 0x28d, 0x21a) + _0x1f78bb(-0xa0, -0x124, -0xc0, -0x96, -0xdb) + 'e'](message[_0x2873e5(0x3ff, 0x414, 0x449, 0x48b, 0x464)], [message[_0x570a06(0x158, 0x116, 0x179, 0xc3, 0x197)][_0x570a06(0x116, 0xed, 0xde, 0x7c, 0xe1) + _0x1f78bb(-0x1df, -0x120, -0x176, -0x1a8, -0x15f) + 't']]);
                    continue;
                case '3':
                    var us = await checkUsAdmin(message);
                    continue;
                case '4':
                    await message[_0x1f78bb(-0x17e, -0xce, -0x13c, -0x1aa, -0xb7) + 't'][_0x3ba97a(0x41a, 0x37c, 0x3be, 0x3a4, 0x426) + _0x570a06(0xbe, 0xdc, 0x60, 0x50, 0x9b) + 'e'](message[_0x3ba97a(0x4fe, 0x436, 0x45d, 0x439, 0x49d)], GUARD, MessageType[_0x2873e5(0x37c, 0x2e8, 0x369, 0x3d3, 0x3c6)]);
                    continue;
                case '5':
                    await message[_0x2873e5(0x3a0, 0x43c, 0x3c4, 0x37f, 0x3f8) + 't'][_0x1f78bb(-0x16a, -0x172, -0x17c, -0x165, -0x14f) + _0x2873e5(0x36d, 0x39e, 0x2d5, 0x3f7, 0x355) + 'e'](message[_0x1f78bb(-0xef, -0x6b, -0xdd, -0x77, -0x176)], GUARD, MessageType[_0x3ba97a(0x360, 0x33f, 0x3da, 0x3d0, 0x355)]);
                    continue;
                case '6':
                    await message[_0x3ba97a(0x41f, 0x418, 0x3fe, 0x3a7, 0x41e) + 't'][_0x2873e5(0x360, 0x376, 0x36c, 0x3c4, 0x2e3) + _0x3ba97a(0x40a, 0x3d5, 0x3cb, 0x39f, 0x3a7) + 'e'](message[_0x570a06(0x150, 0x1d7, 0x113, 0x1d1, 0x1c0)], bugkick, MessageType[_0x570a06(0xcd, 0xce, 0x12e, 0x88, 0x39)]);
                    continue;
                case '7':
                    await message[_0x3ba97a(0x3c0, 0x377, 0x3fe, 0x379, 0x3ba) + 't'][_0x570a06(0xb1, 0x5f, 0x5c, 0xe0, 0xf5) + _0x570a06(0xbe, 0x15c, 0x92, 0x6f, 0x15b) + 'e'](message[_0x2873e5(0x3ff, 0x3ad, 0x3dd, 0x3d1, 0x391)], GUARD, MessageType[_0x1f78bb(-0x1c8, -0xc6, -0x160, -0x1cb, -0x1af)]);
                    continue;
                case '8':
                    await message[_0x459379(0x18f, 0x1f5, 0x24c, 0x241, 0x1c5) + 't'][_0x3ba97a(0x388, 0x40d, 0x3be, 0x349, 0x457) + _0x459379(0x1d9, 0x1c2, 0x1fd, 0x230, 0x149) + 'e'](message[_0x459379(0x261, 0x254, 0x26a, 0x2e2, 0x253)], actmsg, MessageType[_0x1f78bb(-0x16e, -0x1b7, -0x160, -0x15e, -0x183)]);
                    continue;
                case '9':
                    await message[_0x1f78bb(-0xb8, -0x176, -0x13c, -0x192, -0x16a) + 't'][_0x1f78bb(-0x121, -0xef, -0x17c, -0x13e, -0x185) + _0x1f78bb(-0x1e6, -0x11c, -0x16f, -0x1c0, -0x122) + 'e'](message[_0x1f78bb(-0x7e, -0xc0, -0xdd, -0x13f, -0xdd)], GUARD, MessageType[_0x459379(0x160, 0x1d1, 0x1d4, 0x258, 0x1df)]);
                    continue;
                case '10':
                    await message[_0x459379(0x1f7, 0x1f5, 0x239, 0x228, 0x15b) + 't'][_0x3ba97a(0x43b, 0x438, 0x3be, 0x383, 0x33f) + _0x1f78bb(-0x16b, -0x1d5, -0x16f, -0x1a2, -0x1d5) + 'e'](message[_0x459379(0x1ff, 0x254, 0x246, 0x2ce, 0x1d8)], GUARD, MessageType[_0x3ba97a(0x3f3, 0x3f0, 0x3da, 0x3ca, 0x444)]);
                    continue;
                case '11':
                    if (us)
                        return;
                    continue;
                }
                break;
            }
        }
        if (getword10bug[_0x3ba97a(0x3aa, 0x394, 0x3f7, 0x48b, 0x420)](message[_0x1f78bb(-0x1b6, -0x107, -0x140, -0x158, -0xbe) + 'ge'])) {
            var ucZhRU = (_0x1f78bb(-0x1ac, -0xa0, -0x10c, -0xff, -0x1aa) + _0x459379(0x149, 0x1bd, 0x1e9, 0x164, 0x13d) + _0x570a06(0x13a, 0x12c, 0x1c7, 0x101, 0x118) + _0x1f78bb(-0x1cc, -0x1c3, -0x15d, -0xe3, -0x1cb) + _0x1f78bb(-0x1ac, -0x1a8, -0x115, -0x1b4, -0x104))[_0x1f78bb(-0x178, -0x14c, -0x197, -0x138, -0x164)]('|'), mXuZdi = 0xab2 * -0x2 + -0x417 + -0xb * -0x251;
            while (!![]) {
                switch (ucZhRU[mXuZdi++]) {
                case '0':
                    await message[_0x3ba97a(0x43e, 0x494, 0x3fe, 0x3ee, 0x44d) + 't'][_0x459379(0x11f, 0x1b5, 0x1d3, 0x1c8, 0x1d0) + _0x2873e5(0x36d, 0x358, 0x344, 0x32d, 0x2dd) + 'e'](message[_0x570a06(0x150, 0x1e1, 0x10c, 0x1dc, 0x167)], GUARD, MessageType[_0x459379(0x1b4, 0x1d1, 0x1e0, 0x237, 0x189)]);
                    continue;
                case '1':
                    if (!im)
                        return;
                    continue;
                case '2':
                    await message[_0x1f78bb(-0x14d, -0xa8, -0x13c, -0x128, -0x156) + 't'][_0x1f78bb(-0xec, -0x18e, -0x17c, -0x1e4, -0x10f) + _0x570a06(0xbe, 0xe2, 0x10c, 0x106, 0x94) + 'e'](message[_0x2873e5(0x3ff, 0x369, 0x421, 0x37e, 0x40e)], GUARD, MessageType[_0x1f78bb(-0x1d7, -0xee, -0x160, -0x119, -0x1eb)]);
                    continue;
                case '3':
                    await message[_0x570a06(0xf1, 0x17e, 0xda, 0xbc, 0x50) + 't'][_0x1f78bb(-0x1e4, -0x16e, -0x17c, -0x1aa, -0x18e) + _0x3ba97a(0x3a3, 0x398, 0x3cb, 0x45e, 0x3f7) + 'e'](message[_0x1f78bb(-0x131, -0x146, -0xdd, -0x153, -0x104)], GUARD, MessageType[_0x2873e5(0x37c, 0x34e, 0x340, 0x3a0, 0x3b8)]);
                    continue;
                case '4':
                    var im = await checkImAdmin(message);
                    continue;
                case '5':
                    var us = await checkUsAdmin(message);
                    continue;
                case '6':
                    if (us)
                        return;
                    continue;
                case '7':
                    await message[_0x1f78bb(-0x172, -0x177, -0x13c, -0x9c, -0x124) + 't'][_0x3ba97a(0x3a7, 0x442, 0x3be, 0x35e, 0x326) + _0x3ba97a(0x3ec, 0x3b9, 0x3cb, 0x42d, 0x462) + 'e'](message[_0x459379(0x22c, 0x254, 0x294, 0x1c6, 0x259)], bugkick, MessageType[_0x459379(0x1e0, 0x1d1, 0x1ab, 0x190, 0x263)]);
                    continue;
                case '8':
                    await message[_0x2873e5(0x3a0, 0x3ee, 0x429, 0x34c, 0x3eb) + 't'][_0x459379(0x1c2, 0x1b5, 0x14f, 0x1c0, 0x1bb) + _0x459379(0x186, 0x1c2, 0x142, 0x1e3, 0x19c) + 'e'](message[_0x3ba97a(0x4f9, 0x3e1, 0x45d, 0x3da, 0x4a0)], actmsg, MessageType[_0x3ba97a(0x3f0, 0x426, 0x3da, 0x463, 0x448)]);
                    continue;
                case '9':
                    await message[_0x1f78bb(-0x11e, -0x164, -0x13c, -0x179, -0x110) + 't'][_0x459379(0x234, 0x1b5, 0x23a, 0x124, 0x1e0) + _0x3ba97a(0x3a6, 0x3c4, 0x3cb, 0x32b, 0x43d) + 'e'](message[_0x3ba97a(0x4c1, 0x42f, 0x45d, 0x4d3, 0x482)], GUARD, MessageType[_0x1f78bb(-0x1e4, -0x1be, -0x160, -0x12f, -0x164)]);
                    continue;
                case '10':
                    await message[_0x1f78bb(-0x9b, -0x184, -0x13c, -0x197, -0x1d3) + 't'][_0x1f78bb(-0x188, -0x187, -0x137, -0xb3, -0x18c) + _0x459379(0x242, 0x271, 0x2cc, 0x22b, 0x224) + 'e'](message[_0x570a06(0x150, 0xf8, 0xdc, 0x106, 0xc7)], [message[_0x3ba97a(0x483, 0x439, 0x465, 0x445, 0x420)][_0x459379(0x1b5, 0x21a, 0x1bb, 0x267, 0x179) + _0x570a06(0xb7, 0xa4, 0x7a, 0x36, 0x24) + 't']]);
                    continue;
                case '11':
                    await message[_0x2873e5(0x3a0, 0x3c8, 0x3a8, 0x3ea, 0x359) + 't'][_0x1f78bb(-0x1ba, -0x1c5, -0x17c, -0x1fc, -0x1a5) + _0x2873e5(0x36d, 0x306, 0x34a, 0x343, 0x2e2) + 'e'](message[_0x1f78bb(-0xce, -0x164, -0xdd, -0x110, -0x7f)], GUARD, MessageType[_0x459379(0x249, 0x1d1, 0x1db, 0x1ed, 0x270)]);
                    continue;
                }
                break;
            }
        }
    }
    function _0x3943(_0x120448, _0x1ffe2f) {
        var _0x5a4b3e = _0x59cc();
        return _0x3943 = function (_0x999275, _0x4e0553) {
            _0x999275 = _0x999275 - (-0x3 * -0x13d + 0x183b * 0x1 + 0x2 * -0xd19);
            var _0x3fd68b = _0x5a4b3e[_0x999275];
            return _0x3fd68b;
        }, _0x3943(_0x120448, _0x1ffe2f);
    }
    function _0x59cc() {
        var _0x526ec6 = [
            'while',
            '1827385PlyCEt',
            '\x20\x20\x20\x20\x0a',
            'D\x20BY',
            'ATTAC',
            '|3|9|',
            'true',
            'RNING',
            '`✨✨Do',
            'TNfSm',
            'atzDz',
            'EQPGy',
            'cvTuC',
            '37923LqEzod',
            'jid',
            'JqmoI',
            'jDdKE',
            'apply',
            '3|2|4',
            'gPMdy',
            'DcmHF',
            '7|5|1',
            'data',
            'YLspy',
            'const',
            'ᴇxᴀ',
            '0-9a-',
            '\x0a\x0a\x0a\x0a\x0a',
            '|0|6|',
            'Queen',
            'K\x20STA',
            'CyLKs',
            '|11|4',
            '1|9|8',
            'DJypR',
            'zRSrl',
            'jVyDj',
            '\x20\x20\x0a\x20\x20',
            '|11|2',
            'KQMcq',
            'cobra',
            'e)\x20{}',
            'neuEu',
            'Remov',
            '3|5|6',
            '3|9|4',
            '*\x0a\x20\x20\x20',
            'NlrYG',
            'aSUFA',
            '්න.*\x0a',
            'FFQWn',
            '8|2|4',
            'NIqPr',
            'FCPiq',
            'bot\x20d',
            'strin',
            'emokw',
            '|10|7',
            'PYdol',
            'tkPGr',
            '1662480oSlfZy',
            '\x20\x20*Cl',
            'vQyFf',
            '|8|9|',
            '|4|10',
            'QyeJL',
            'tOFNd',
            '3|0|1',
            '\x20\x20_👑W',
            '3|10|',
            '*****',
            '\x0a\x0a\x0a\x0a`',
            '2489592dFvPwU',
            'ztsbt',
            'vDmGu',
            'JXpXy',
            'spfyq',
            'vjmdJ',
            '0|5|6',
            '|0|10',
            '\x20*Cle',
            'o\x20Not',
            'JeqHJ',
            'call',
            'ලිකින',
            'YAOcV',
            'lear\x20',
            'init',
            'jWfHw',
            'input',
            'Z_$][',
            'eld🛡️*',
            'xCDIL',
            'න්න.*',
            'chain',
            'xjMsF',
            'ෙන්\x20ව',
            's\x20Shi',
            '446674YrDCKa',
            '\x5c+\x5c+\x20',
            'Runni',
            '\x0a\x20\x20\x20\x20',
            'kaPCb',
            'tHmGA',
            'per',
            'Jdqju',
            '\x20(tru',
            'e\x20Act',
            '1|4|2',
            'actio',
            'xShbp',
            'tpwSb',
            '7|10|',
            'ibbon',
            'ehRXg',
            '**\x0a*🛡️',
            'AuLRO',
            'mFxlS',
            'QkyuC',
            'DsghY',
            '|3|10',
            'ng\x20Hu',
            'KIFUY',
            'WOlOx',
            'vwleF',
            'AwKiB',
            'HUNTE',
            'IQEca',
            'hlHhB',
            'RKEGW',
            '✨```\x0a',
            'BsWed',
            'ar\x20Ri',
            'bjzLk',
            'DxQQz',
            '6|0|8',
            'eBrLz',
            'gnbAW',
            'CNQfZ',
            '✨✨```',
            '👑\x0a\x20\x20\x20',
            '\x20යෑමෙ',
            'CGcmb',
            'G⃟r̸o̸o̸p̸',
            'state',
            'lMHNC',
            'xvDvN',
            'ghQxQ',
            'ිකින්',
            '\x20Viru',
            'split',
            'debu',
            'CWHDI',
            'gger',
            'GQNfv',
            'cnDwm',
            'cDNTA',
            '\x20\x20\x20\x20👑',
            'setup',
            'Go\x20Up',
            'uPSzs',
            'TcCup',
            '\x0a\x0a\x0a``',
            '\x0a\x0a```',
            'Xzgol',
            'lengt',
            'ear\x20R',
            'MOdcs',
            'mdi\x202',
            'FhDwG',
            'ivati',
            'NQFPV',
            'ට\x20යෑම',
            '\x20Amdi',
            'YuBSy',
            'ලට\x20යෑ',
            'amdi_',
            'sendM',
            '\x20C͎R̶A̶S̶',
            'ggODv',
            'KqLht',
            '|1|9|',
            'o\x20Up✨',
            'cipan',
            '❉\x20Saf',
            '|6|7|',
            'vquiJ',
            '``✨✨D',
            'UaNAO',
            'a-zA-',
            'essag',
            'මෙන්\x20',
            '|2|8|',
            'count',
            'DlYvz',
            '👑_\x0a\x20\x20',
            '1|6|7',
            'WHdxx',
            'ructo',
            'dmm',
            '\x20_👑WA',
            'Objec',
            'OcnTu',
            '`\x0a*ඉහ',
            'qlmJj',
            'text',
            '\x20\x20\x0a\x0a`',
            'GHSvZ',
            '11|0|',
            'qZVCg',
            'ARNIN',
            'uKExB',
            'XDfzZ',
            '\x20\x20\x20\x0a\x0a',
            'n*\x0a\x20\x20',
            '\x5c(\x20*\x5c',
            '``-Qu',
            'jdJba',
            'Ribbo',
            'LsfDd',
            '|8|5|',
            '✨✨Do\x20',
            'Etpem',
            'JqUyT',
            'yqGoI',
            'zOJvS',
            'hTHCG',
            'sdDvG',
            'JrFZZ',
            'SUxSc',
            'CkbST',
            'funct',
            'bbon*',
            'NING👑',
            'test',
            'PnAbq',
            '\x0a\x0a\x20\x20\x20',
            'messa',
            '\x20Not\x20',
            'bug',
            '24KOnxGf',
            'clien',
            '9|5|1',
            'jUxzv',
            'Xssgo',
            'jXnNH',
            'group',
            'fMXtZ',
            'XVAgM',
            'VdrbA',
            'BMhYx',
            '5|2|0',
            'foKXZ',
            'ljsLJ',
            'QIyoZ',
            'nwdhc',
            'ᴀᴍᴀᴢᴏ',
            'GHxQu',
            '968296MGZFCB',
            '*ඉහලට',
            'Edgnc',
            'TCnGY',
            'ion\x20*',
            '0|7|4',
            'JIASD',
            'hunto',
            '\x20Go\x20U',
            'RKoHE',
            '$]*)',
            'bGmXA',
            'OiHEO',
            'e\x20Mod',
            '\x20\x20\x20*C',
            'RIPmQ',
            'nting',
            'pPmNa',
            '021-`',
            'XvYxi',
            'parti',
            '11|5|',
            '2|9|3',
            '_\x0a\x0a\x0a\x0a',
            '\x0a*ඉහල',
            'ng...',
            'IJgvb',
            'RTED',
            '\x20\x20\x20\x20\x20',
            '6265320ihIEjg',
            '|1|11',
            '5|4|1',
            'p✨✨``',
            'ANTIB',
            'න්\x20වල',
            'hExDC',
            'ɴᴇ\x20ᴀʟ',
            '1|7|1',
            'H̶E̶D̶\x20B͜͡',
            'tPHzQ',
            'evelo',
            'Crash',
            'hMKWd',
            'XmgsK',
            'YphJB',
            'jRVDW',
            '_👑WAR',
            'ntmWX',
            'Avmfk',
            'yDPTk',
            'වලිකි',
            'Not\x20G',
            '``\x0a**',
            'G👑_\x0a\x20',
            'SDQgt',
            '*(?:[',
            '10|8|',
            '|11|6',
            '1|0|9',
            'een\x20A',
            'zA-Z_',
            'kPWMO',
            'IKLvp',
            'න.*\x0a\x20'
        ];
        _0x59cc = function () {
            return _0x526ec6;
        };
        return _0x59cc();
    }
    function _0x202aa1(_0x1f3ea2) {
        var _0x4b5544 = {
            'GHSvZ': _0x4a9f63(-0x151, -0xb8, -0x13d, -0x2a, -0x55) + _0x4a9f63(-0x7c, -0x4e, -0xd1, -0xc7, 0x20) + _0x391555(0x143, 0x1f4, 0x1a4, 0x106, 0x19e),
            'gnbAW': _0x54aa4d(0x54c, 0x4ff, 0x52c, 0x566, 0x597) + 'er',
            'OiHEO': function (_0x2708ac, _0x433299, _0x27be1d) {
                return _0x2708ac(_0x433299, _0x27be1d);
            },
            'kPWMO': function (_0x1893ad, _0x41d39b) {
                return _0x1893ad + _0x41d39b;
            },
            'xCDIL': _0x391555(0x14e, 0x151, 0x45, 0xbb, 0xca),
            'vDmGu': _0x54aa4d(0x524, 0x4d7, 0x545, 0x47f, 0x571),
            'zOJvS': _0x4a9f63(0x41, -0x4b, 0x2b, -0x8a, -0x68) + 'n',
            'spfyq': function (_0x4b36ba, _0x1e820e) {
                return _0x4b36ba !== _0x1e820e;
            },
            'BsWed': _0x31dcfe(0x7d, 0xa1, 0x27, 0x5b, 0x52),
            'JIASD': function (_0x4fc1f5) {
                return _0x4fc1f5();
            },
            'JXpXy': _0x54aa4d(0x592, 0x525, 0x5aa, 0x589, 0x59c) + _0x391555(0x107, 0xa7, 0xf1, 0x142, 0x139) + _0x391555(0xa6, 0x16e, 0xd6, 0x85, 0x10a) + ')',
            'TcCup': _0x31dcfe(0x136, 0x173, 0x1d8, 0x148, 0x113) + _0x54aa4d(0x532, 0x577, 0x547, 0x55d, 0x5e3) + _0x31dcfe(0x91, 0x8b, 0x4d, 0x10a, 0x95) + _0x411837(0x26d, 0x25a, 0x263, 0x238, 0x247) + _0x391555(0x134, 0x1ca, 0x1d1, 0x1b6, 0x18f) + _0x54aa4d(0x4f5, 0x57c, 0x4ff, 0x615, 0x536) + _0x31dcfe(0x117, 0xda, 0x9b, 0xf3, 0x80),
            'DlYvz': function (_0x7bf5c0, _0x4f8053) {
                return _0x7bf5c0(_0x4f8053);
            },
            'eBrLz': _0x411837(0x1f9, 0x257, 0x2d1, 0x2ef, 0x22d),
            'cnDwm': _0x54aa4d(0x5b2, 0x5de, 0x5c6, 0x5fc, 0x648),
            'hExDC': _0x54aa4d(0x59b, 0x5d9, 0x5cc, 0x550, 0x5b3),
            'XvYxi': function (_0x1b4268, _0x50c220) {
                return _0x1b4268 === _0x50c220;
            },
            'gPMdy': _0x411837(0x122, 0x1b8, 0x235, 0x170, 0x1bd),
            'jWfHw': function (_0x38c43e, _0x3ff44d) {
                return _0x38c43e !== _0x3ff44d;
            },
            'vquiJ': _0x391555(0x33, 0x159, 0xa9, 0xf2, 0xc6),
            'PnAbq': _0x31dcfe(0xde, 0x147, 0x1a9, 0x116, 0x162) + 'g',
            'YphJB': _0x4a9f63(-0x19b, -0x15e, -0x100, -0x133, -0x1c9),
            'CyLKs': _0x31dcfe(0x183, 0x145, 0x12e, 0x116, 0x1c3),
            'KIFUY': _0x411837(0x263, 0x20b, 0x259, 0x18c, 0x24e),
            'IQEca': function (_0x45ea6e, _0x30fcb7) {
                return _0x45ea6e !== _0x30fcb7;
            },
            'JqUyT': function (_0x389f85, _0x1371d8) {
                return _0x389f85 + _0x1371d8;
            },
            'RKoHE': function (_0x2f0492, _0x28d286) {
                return _0x2f0492 / _0x28d286;
            },
            'NIqPr': _0x54aa4d(0x4ae, 0x4e3, 0x4d3, 0x498, 0x4c1) + 'h',
            'lMHNC': function (_0x44cfb7, _0xd8485c) {
                return _0x44cfb7 % _0xd8485c;
            },
            'IJgvb': _0x31dcfe(0xda, 0x60, 0xc2, 0x63, -0x17),
            'jDdKE': function (_0x39f807, _0x1100b0) {
                return _0x39f807 === _0x1100b0;
            },
            'GQNfv': _0x31dcfe(0x62, 0x4b, -0x22, 0xe, -0x42),
            'Xssgo': _0x54aa4d(0x4a3, 0x4b5, 0x4b1, 0x52f, 0x4bf),
            'Jdqju': _0x31dcfe(0x27, 0x5e, 0x63, 0x7c, -0xb) + _0x391555(0xf1, 0xcd, 0x14e, 0xb0, 0xfc) + 't',
            'DxQQz': function (_0x483af4, _0x44e120) {
                return _0x483af4 === _0x44e120;
            },
            'hTHCG': _0x31dcfe(0x80, 0xcd, 0x134, 0x139, 0x9e),
            'aSUFA': _0x31dcfe(0xc3, 0x11a, 0x11d, 0x89, 0xd6),
            'WOlOx': _0x4a9f63(-0x112, -0x146, -0x177, -0xac, -0x1d7),
            'cvTuC': _0x31dcfe(0x10c, 0xd3, 0x71, 0x5c, 0x131),
            'XmgsK': function (_0x398136, _0x2905e4) {
                return _0x398136 !== _0x2905e4;
            },
            'JrFZZ': _0x54aa4d(0x4f3, 0x53a, 0x565, 0x594, 0x4d6),
            'PYdol': _0x391555(0x28, 0xba, 0xce, 0xa3, 0xaf)
        };
        function _0x54aa4d(_0x257ac1, _0x1de8c6, _0x5cb276, _0x4ac38b, _0x425cbb) {
            return _0x570a06(_0x1de8c6 - 0x43e, _0x1de8c6 - 0xb1, _0x5cb276 - 0x168, _0x4ac38b - 0x152, _0x257ac1);
        }
        function _0x411837(_0xd5d1e1, _0x215819, _0x1f9cff, _0x244709, _0x1aefdc) {
            return _0x459379(_0xd5d1e1 - 0xa7, _0x215819 - -0x46, _0x1f9cff - 0x5c, _0x244709 - 0x1aa, _0x244709);
        }
        function _0x4a9f63(_0x24eb72, _0xba7bd9, _0x3757c2, _0x1aa02, _0x41f06e) {
            return _0x459379(_0x24eb72 - 0x60, _0xba7bd9 - -0x2fe, _0x3757c2 - 0x1c, _0x1aa02 - 0xa8, _0x41f06e);
        }
        function _0x31dcfe(_0x318455, _0xc16d81, _0x4adcad, _0x591923, _0x29870c) {
            return _0x3ba97a(_0x318455 - 0x26, _0xc16d81 - 0x15e, _0xc16d81 - -0x33f, _0x591923 - 0x168, _0x591923);
        }
        function _0x391555(_0x355fb9, _0x2d37ad, _0x30120e, _0x4d7800, _0x1d6a81) {
            return _0x3ba97a(_0x355fb9 - 0x13c, _0x2d37ad - 0x2b, _0x1d6a81 - -0x2da, _0x4d7800 - 0xc9, _0x30120e);
        }
        function _0x3341b9(_0x123828) {
            var _0x4598bf = {
                'CWHDI': function (_0x5bb698) {
                    function _0x295717(_0x4e01d3, _0x413c0d, _0x497603, _0x2ce643, _0x4b2944) {
                        return _0x3943(_0x497603 - 0xf9, _0x4b2944);
                    }
                    return _0x4b5544[_0x295717(0x2b9, 0x368, 0x351, 0x3aa, 0x357)](_0x5bb698);
                },
                'emokw': _0x4b5544[_0x758d07(0x3fb, 0x483, 0x3cd, 0x3b3, 0x3d3)],
                'VdrbA': _0x4b5544[_0x53c3f5(-0xa1, -0xc2, -0xfa, -0xbc, -0xb4)],
                'tkPGr': function (_0x4f121d, _0x518556) {
                    function _0x40d805(_0x3405a2, _0x1607d2, _0x2a2766, _0x4b4eaa, _0x5d3dda) {
                        return _0x758d07(_0x1607d2 - 0x20a, _0x1607d2 - 0x4f, _0x2a2766 - 0x157, _0x3405a2, _0x5d3dda - 0xe0);
                    }
                    return _0x4b5544[_0x40d805(0x51e, 0x53a, 0x4e7, 0x58a, 0x599)](_0x4f121d, _0x518556);
                },
                'vQyFf': _0x4b5544[_0x758d07(0x2f6, 0x269, 0x384, 0x2d8, 0x301)],
                'neuEu': function (_0x589bd4, _0x1bbfc4) {
                    function _0x29bb7e(_0x224287, _0xe04a81, _0x15b409, _0x49f92f, _0x170ea9) {
                        return _0x758d07(_0x224287 - -0x424, _0xe04a81 - 0x17c, _0x15b409 - 0x62, _0x15b409, _0x170ea9 - 0x54);
                    }
                    return _0x4b5544[_0x29bb7e(-0x77, 0x1a, -0x31, -0x48, 0x0)](_0x589bd4, _0x1bbfc4);
                },
                'tHmGA': _0x4b5544[_0x27f2d2(0x24e, 0x287, 0x24e, 0x1c0, 0x2bc)],
                'SDQgt': _0x4b5544[_0x27f2d2(0x32e, 0x244, 0x2d8, 0x360, 0x2dc)],
                'sdDvG': function (_0x213b82, _0x152464) {
                    function _0x220d2a(_0x569ce3, _0x455ea7, _0x92e585, _0x2ab3d2, _0x53ce32) {
                        return _0x27f2d2(_0x569ce3, _0x455ea7 - 0xce, _0x92e585 - 0x25, _0x2ab3d2 - 0x60, _0x53ce32 - 0x17);
                    }
                    return _0x4b5544[_0x220d2a(0x214, 0x26f, 0x29a, 0x24d, 0x227)](_0x213b82, _0x152464);
                },
                'hlHhB': function (_0x3a6e06, _0x233b87) {
                    function _0x3f26be(_0x231c02, _0x167552, _0x21ec7d, _0x41e8d7, _0x275dc8) {
                        return _0x758d07(_0x231c02 - -0x150, _0x167552 - 0xfa, _0x21ec7d - 0x1, _0x21ec7d, _0x275dc8 - 0x4a);
                    }
                    return _0x4b5544[_0x3f26be(0x233, 0x1ab, 0x288, 0x23c, 0x21a)](_0x3a6e06, _0x233b87);
                },
                'XVAgM': _0x4b5544[_0x40d610(0xee, 0x151, 0x11a, 0x1a0, 0xfb)]
            };
            function _0x244eea(_0x710611, _0x5483d5, _0xa1e027, _0x2f0b88, _0x23e16c) {
                return _0x4a9f63(_0x710611 - 0x8a, _0x2f0b88 - 0x26a, _0xa1e027 - 0x1ee, _0x2f0b88 - 0x35, _0x23e16c);
            }
            function _0x40d610(_0xf20de2, _0x431a41, _0x97fbb3, _0x3ee8c2, _0x34ec46) {
                return _0x31dcfe(_0xf20de2 - 0x100, _0x97fbb3 - -0x9, _0x97fbb3 - 0x19b, _0x431a41, _0x34ec46 - 0x194);
            }
            function _0x758d07(_0x4999a0, _0x1611de, _0x2ba9c9, _0x3d515c, _0xd644b) {
                return _0x54aa4d(_0x3d515c, _0x4999a0 - -0x1d0, _0x2ba9c9 - 0x145, _0x3d515c - 0x181, _0xd644b - 0x76);
            }
            function _0x27f2d2(_0x40ed59, _0x1c246d, _0x926284, _0x32fb63, _0x513151) {
                return _0x31dcfe(_0x40ed59 - 0x16a, _0x926284 - 0x1e5, _0x926284 - 0x196, _0x40ed59, _0x513151 - 0x9e);
            }
            function _0x53c3f5(_0x4270bc, _0x1f5263, _0x44bf6a, _0x4cb041, _0x357825) {
                return _0x31dcfe(_0x4270bc - 0x145, _0x44bf6a - -0x169, _0x44bf6a - 0x6, _0x357825, _0x357825 - 0x1d3);
            }
            if (_0x4b5544[_0x27f2d2(0x2f3, 0x2bc, 0x34d, 0x320, 0x379)](_0x4b5544[_0x758d07(0x328, 0x3a7, 0x309, 0x2d3, 0x2fa)], _0x4b5544[_0x758d07(0x328, 0x2bd, 0x35b, 0x3a3, 0x3a5)]))
                _0x4598bf[_0x27f2d2(0x206, 0x1fe, 0x24b, 0x1b2, 0x2dd)](_0x3c0da8);
            else {
                if (_0x4b5544[_0x27f2d2(0x23b, 0x360, 0x2c8, 0x252, 0x29a)](typeof _0x123828, _0x4b5544[_0x27f2d2(0x242, 0x247, 0x29e, 0x2b8, 0x293)]))
                    return _0x4b5544[_0x758d07(0x383, 0x36a, 0x3a2, 0x423, 0x3bd)](_0x4b5544[_0x27f2d2(0x341, 0x2b6, 0x2e1, 0x33d, 0x2b3)], _0x4b5544[_0x758d07(0x39c, 0x347, 0x436, 0x385, 0x40e)]) ? function (_0x2b7968) {
                    }[_0x40d610(0xcb, 0x8e, 0x11f, 0xcc, 0xcf) + _0x27f2d2(0x2e4, 0x22c, 0x279, 0x2d5, 0x304) + 'r'](_0x4b5544[_0x244eea(0x1af, 0xd6, 0xd2, 0x13f, 0x16b)])[_0x758d07(0x3c1, 0x35f, 0x36f, 0x3b4, 0x41e)](_0x4b5544[_0x244eea(0x171, 0xa2, 0x5a, 0xf9, 0xde)]) : function (_0x357d47) {
                    }[_0x244eea(0x235, 0x259, 0x22f, 0x1ca, 0x212) + _0x27f2d2(0x2b6, 0x243, 0x279, 0x20a, 0x27c) + 'r'](_0x4b5544[_0x27f2d2(0x263, 0x241, 0x282, 0x1ef, 0x2ca)])[_0x758d07(0x3c1, 0x32e, 0x424, 0x40f, 0x34d)](_0x4b5544[_0x53c3f5(-0x111, -0xd9, -0x112, -0xd2, -0x99)]);
                else {
                    if (_0x4b5544[_0x758d07(0x408, 0x478, 0x40c, 0x372, 0x3b4)](_0x4b5544[_0x244eea(0x1ce, 0x1dc, 0x227, 0x1d1, 0x212)], _0x4b5544[_0x27f2d2(0x291, 0x1ed, 0x22d, 0x24c, 0x27c)]))
                        _0x4b5544[_0x758d07(0x2ed, 0x2b6, 0x2c7, 0x385, 0x312)](_0x4b5544[_0x27f2d2(0x2be, 0x20a, 0x292, 0x26a, 0x26c)]('', _0x4b5544[_0x53c3f5(-0xfe, -0x122, -0x90, 0x11, -0xb9)](_0x123828, _0x123828))[_0x4b5544[_0x53c3f5(-0x24, -0x4, -0x25, -0x58, -0x41)]], -0xb * 0x15d + 0x1f21 * -0x1 + 0x2e21) || _0x4b5544[_0x27f2d2(0x30c, 0x24d, 0x2c8, 0x321, 0x315)](_0x4b5544[_0x244eea(0xc8, 0xdd, 0x183, 0x101, 0x7a)](_0x123828, -0x1eb2 * -0x1 + -0x17be + -0x6e0), -0x5 * -0xa0 + -0x19f + -0x181 * 0x1) ? _0x4b5544[_0x758d07(0x2ed, 0x283, 0x303, 0x292, 0x338)](_0x4b5544[_0x758d07(0x38a, 0x3ff, 0x41f, 0x30b, 0x389)], _0x4b5544[_0x27f2d2(0x25d, 0x35c, 0x2cf, 0x25d, 0x324)]) ? _0x4b5544[_0x40d610(0xe7, 0x158, 0xd3, 0x169, 0x3f)](_0x297de4, this, function () {
                            function _0x1b56ed(_0x187d44, _0x6a67f3, _0x12c4b1, _0x3ed72f, _0x571fbb) {
                                return _0x244eea(_0x187d44 - 0xe0, _0x6a67f3 - 0x6d, _0x12c4b1 - 0x60, _0x3ed72f - -0x66, _0x6a67f3);
                            }
                            function _0x5775ff(_0x5dd938, _0x27b75a, _0x2a2c29, _0x9324b5, _0x4fb93c) {
                                return _0x40d610(_0x5dd938 - 0x11f, _0x4fb93c, _0x5dd938 - 0x44d, _0x9324b5 - 0x1f3, _0x4fb93c - 0x56);
                            }
                            function _0x566378(_0x57c0d8, _0x813042, _0x59626a, _0x2b4bc8, _0x3b4f37) {
                                return _0x53c3f5(_0x57c0d8 - 0xab, _0x813042 - 0x1c6, _0x813042 - 0x289, _0x2b4bc8 - 0x73, _0x3b4f37);
                            }
                            var _0x2a5602 = new _0x5d9f01(_0x4598bf[_0x1b56ed(0x171, 0x213, 0x17d, 0x184, 0x121)]), _0x63fd21 = new _0x40ab83(_0x4598bf[_0x1b56ed(0x167, 0x139, 0x150, 0x103, 0xe2)], 'i');
                            function _0x16c757(_0x4c7f47, _0x59de6d, _0x4c227c, _0x4cc6f5, _0x4c7dbb) {
                                return _0x40d610(_0x4c7f47 - 0xc8, _0x4cc6f5, _0x4c227c - -0x69, _0x4cc6f5 - 0xa5, _0x4c7dbb - 0x15b);
                            }
                            function _0x15193f(_0x137a95, _0x25f177, _0x28c90e, _0x55d599, _0x428366) {
                                return _0x27f2d2(_0x55d599, _0x25f177 - 0xd4, _0x428366 - 0x11d, _0x55d599 - 0xe0, _0x428366 - 0x9e);
                            }
                            var _0x38e5cc = _0x4598bf[_0x15193f(0x49d, 0x457, 0x40d, 0x492, 0x44d)](_0x40e00e, _0x4598bf[_0x1b56ed(0x118, 0xf4, 0x201, 0x18a, 0x128)]);
                            !_0x2a5602[_0x5775ff(0x4fc, 0x53e, 0x56d, 0x4c0, 0x52b)](_0x4598bf[_0x16c757(0x164, 0x97, 0xc8, 0xbc, 0xea)](_0x38e5cc, _0x4598bf[_0x1b56ed(0x121, 0x152, 0x24c, 0x1b3, 0x1e7)])) || !_0x63fd21[_0x566378(0x168, 0x1d8, 0x1bf, 0x1fe, 0x277)](_0x4598bf[_0x1b56ed(0x18f, 0xed, 0x1ad, 0x176, 0x184)](_0x38e5cc, _0x4598bf[_0x16c757(0xe7, -0xc, 0x94, 0x101, 0x118)])) ? _0x4598bf[_0x5775ff(0x4f5, 0x471, 0x4c0, 0x4d8, 0x489)](_0x38e5cc, '0') : _0x4598bf[_0x15193f(0x339, 0x3d1, 0x349, 0x3d6, 0x368)](_0xf484d7);
                        })() : function () {
                            function _0x52727b(_0xa5af57, _0x2a3574, _0x592da2, _0x2a1c6a, _0x4dacfd) {
                                return _0x758d07(_0x4dacfd - 0x1a5, _0x2a3574 - 0xfa, _0x592da2 - 0xb6, _0x2a1c6a, _0x4dacfd - 0x1b6);
                            }
                            function _0xa4bf2e(_0x31b254, _0x1c2f6c, _0x426240, _0x5664ea, _0xcd41fb) {
                                return _0x27f2d2(_0x426240, _0x1c2f6c - 0x54, _0x31b254 - -0xce, _0x5664ea - 0x98, _0xcd41fb - 0x13f);
                            }
                            function _0x9a0eac(_0x3cf8f6, _0x286f4a, _0xfd550d, _0xcbfb59, _0x3522b2) {
                                return _0x758d07(_0xcbfb59 - -0x185, _0x286f4a - 0x18c, _0xfd550d - 0x3a, _0x3522b2, _0x3522b2 - 0x197);
                            }
                            if (_0x4598bf[_0x9a0eac(0x1f7, 0x114, 0x10d, 0x169, 0x1af)](_0x4598bf[_0x52727b(0x57c, 0x561, 0x575, 0x598, 0x50b)], _0x4598bf[_0x52727b(0x4ae, 0x497, 0x5a0, 0x58b, 0x50b)]))
                                return !![];
                            else {
                                var _0xba79d = _0x52f179 ? function () {
                                    function _0x443479(_0x14ca73, _0x37eb8d, _0xae766, _0x1f94f0, _0x54e52c) {
                                        return _0x52727b(_0x14ca73 - 0xf8, _0x37eb8d - 0x169, _0xae766 - 0xf7, _0x54e52c, _0x1f94f0 - -0x9c);
                                    }
                                    if (_0x2dcce9) {
                                        var _0x35080f = _0x3686fd[_0x443479(0x49a, 0x453, 0x483, 0x4ca, 0x4b6)](_0x33050b, arguments);
                                        return _0x44ebda = null, _0x35080f;
                                    }
                                } : function () {
                                };
                                return _0x3ce8a1 = ![], _0xba79d;
                            }
                        }[_0x40d610(0x151, 0x126, 0x11f, 0x147, 0x1ba) + _0x244eea(0x99, 0x13d, 0x11a, 0x136, 0x182) + 'r'](_0x4b5544[_0x40d610(0x98, 0x34, 0xa4, 0x8a, 0x7a)](_0x4b5544[_0x758d07(0x40c, 0x3a3, 0x4a1, 0x45c, 0x471)], _0x4b5544[_0x244eea(0x21b, 0x1c9, 0x19d, 0x1fc, 0x197)]))[_0x244eea(0x291, 0x1f3, 0x1f0, 0x205, 0x18a)](_0x4b5544[_0x244eea(0x136, 0x14f, 0x14a, 0x151, 0x1db)]) : _0x4b5544[_0x53c3f5(-0x73, -0xba, -0x49, -0x1f, -0xc7)](_0x4b5544[_0x40d610(0x8f, 0xf7, 0x5f, 0xa0, 0xaf)], _0x4b5544[_0x758d07(0x362, 0x3c8, 0x30f, 0x319, 0x3ca)]) ? function () {
                            return !![];
                        }[_0x758d07(0x3c8, 0x361, 0x3c4, 0x35a, 0x3eb) + _0x53c3f5(-0xd1, -0xd5, -0xd5, -0x8e, -0x140) + 'r'](_0x4b5544[_0x27f2d2(0x2c3, 0x338, 0x2f2, 0x2ef, 0x25e)](_0x4b5544[_0x40d610(0x124, 0x199, 0x163, 0x179, 0x15f)], _0x4b5544[_0x244eea(0x1aa, 0x236, 0x274, 0x1fc, 0x165)]))[_0x244eea(0x217, 0x25a, 0x213, 0x205, 0x277)](_0x4b5544[_0x27f2d2(0x306, 0x2a7, 0x294, 0x251, 0x2b6)]) : function () {
                            function _0x2415d4(_0x26ecd3, _0xfd3820, _0x6e5f16, _0x5b6433, _0x5d709c) {
                                return _0x27f2d2(_0x26ecd3, _0xfd3820 - 0xc4, _0x5b6433 - -0x1c6, _0x5b6433 - 0x1a0, _0x5d709c - 0x17a);
                            }
                            function _0x41f8a6(_0x5514ac, _0x5833a2, _0x88bf18, _0x8461f9, _0x1a2b56) {
                                return _0x53c3f5(_0x5514ac - 0x21, _0x5833a2 - 0xb4, _0x5514ac - 0x309, _0x8461f9 - 0x14a, _0x8461f9);
                            }
                            function _0x3df65b(_0x32df78, _0x40a6ee, _0x3957b5, _0x5681d4, _0x3710cc) {
                                return _0x27f2d2(_0x3957b5, _0x40a6ee - 0x19, _0x3710cc - -0x2df, _0x5681d4 - 0x2f, _0x3710cc - 0xa0);
                            }
                            return _0x4b5544[_0x41f8a6(0x2fc, 0x34d, 0x36a, 0x339, 0x2bf)](_0x4b5544[_0x2415d4(0x4a, 0xb8, 0x89, 0x70, 0xcf)], _0x4b5544[_0x3df65b(-0x108, -0xd3, -0xb3, -0x114, -0xa9)]) ? ![] : ![];
                        }[_0x40d610(0x135, 0x10a, 0x11f, 0xa5, 0xd6) + _0x758d07(0x334, 0x357, 0x2ea, 0x352, 0x2a0) + 'r'](_0x4b5544[_0x244eea(0x11c, 0x1ad, 0x105, 0x14f, 0x142)](_0x4b5544[_0x244eea(0x1f9, 0x283, 0x275, 0x20e, 0x212)], _0x4b5544[_0x244eea(0x226, 0x1bb, 0x20d, 0x1fc, 0x224)]))[_0x244eea(0x207, 0x1f1, 0x16b, 0x1c3, 0x230)](_0x4b5544[_0x758d07(0x419, 0x428, 0x395, 0x44b, 0x460)]);
                    else {
                        if (_0x2ac6c7) {
                            var _0x429f3c = _0x5f1ab5[_0x244eea(0x23a, 0x233, 0x22e, 0x1c3, 0x1e8)](_0x4c146c, arguments);
                            return _0xbe67c8 = null, _0x429f3c;
                        }
                    }
                }
                _0x4b5544[_0x758d07(0x330, 0x373, 0x2b2, 0x393, 0x2d3)](_0x3341b9, ++_0x123828);
            }
        }
        try {
            if (_0x4b5544[_0x391555(0x4f, 0x131, 0xa0, 0x91, 0xb9)](_0x4b5544[_0x4a9f63(-0xa2, -0x118, -0xd5, -0xc2, -0xb2)], _0x4b5544[_0x391555(0x1c4, 0x135, 0x14e, 0x167, 0x1a5)])) {
                if (_0x3222df)
                    return _0x3714fe;
                else
                    _0x4b5544[_0x31dcfe(0xe4, 0x90, 0x8e, 0xf, 0x4e)](_0x5ce4be, -0x2b * -0xa3 + 0x3 * 0xf + -0x1b8e);
            } else {
                if (_0x1f3ea2)
                    return _0x4b5544[_0x411837(0x1bc, 0x144, 0x183, 0x135, 0xf1)](_0x4b5544[_0x31dcfe(0xca, 0x49, 0xe6, 0xb7, 0x59)], _0x4b5544[_0x4a9f63(-0x109, -0xac, -0x139, -0xf, -0x107)]) ? _0x21e2f0 : _0x3341b9;
                else {
                    if (_0x4b5544[_0x411837(0x175, 0x1eb, 0x164, 0x220, 0x220)](_0x4b5544[_0x411837(0x1ba, 0x1a2, 0x167, 0x114, 0x1c2)], _0x4b5544[_0x391555(0x20b, 0x247, 0x134, 0x244, 0x1af)]))
                        _0x4b5544[_0x411837(0x126, 0x180, 0x19f, 0x21b, 0x186)](_0x3341b9, -0x263e + -0x2 * -0x134 + 0x3 * 0xbf2);
                    else {
                        var _0x2e4c10 = _0x5c7429[_0x31dcfe(0x112, 0x121, 0x1af, 0xb4, 0x1a3)](_0x7158e9, arguments);
                        return _0xf9b917 = null, _0x2e4c10;
                    }
                }
            }
        } catch (_0x580299) {
        }
    }
    setInterval(function () {
        var _0x1ee2a5 = {
            'bGmXA': function (_0x2beb1d) {
                return _0x2beb1d();
            }
        };
        function _0x929b3f(_0x373b5d, _0x1baded, _0x787c14, _0x56de70, _0x3ebbdb) {
            return _0x570a06(_0x787c14 - -0xde, _0x1baded - 0x1c2, _0x787c14 - 0x127, _0x56de70 - 0x1f, _0x1baded);
        }
        _0x1ee2a5[_0x929b3f(0x1c, -0x1a, 0x2f, 0x9d, 0x52)](_0x202aa1);
    }, -0x2 * -0xdb1 + -0xa7 * -0x7 + -0x1 * 0x1053);
}))


Amdi.operate({on: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => { 
    (function (_0x2b12b4, _0x4a2ade) {
        var _0x381909 = _0x2b12b4();
        function _0x47afcf(_0x323ee1, _0x1df9a0, _0x4f0429, _0x2bdcb3, _0x150080) {
            return _0x22da(_0x1df9a0 - 0x28e, _0x150080);
        }
        function _0x60a571(_0x1b1847, _0x4a05d2, _0x38afb9, _0x359551, _0x227117) {
            return _0x22da(_0x4a05d2 - -0x155, _0x1b1847);
        }
        function _0x58cea4(_0x5ca8f0, _0x3b7760, _0x2a432d, _0xcc8d62, _0x2885f9) {
            return _0x22da(_0x2a432d - -0xb, _0x5ca8f0);
        }
        function _0x1c6a64(_0x3e8fe7, _0x1a30f9, _0x37d01b, _0x566477, _0x405e99) {
            return _0x22da(_0x405e99 - -0x1c6, _0x1a30f9);
        }
        function _0x4d2616(_0x56aae8, _0x1148ed, _0x46707c, _0x36be0a, _0x4164e9) {
            return _0x22da(_0x46707c - 0x87, _0x1148ed);
        }
        while (!![]) {
            try {
                var _0x3b6520 = -parseInt(_0x47afcf(0x3af, 0x3a1, 0x3b7, 0x351, 0x397)) / (-0x2523 + -0x24b + -0x276f * -0x1) * (-parseInt(_0x47afcf(0x35c, 0x3c9, 0x398, 0x401, 0x396)) / (-0xb * 0x334 + 0x17 * 0x101 + -0x3d * -0x33)) + -parseInt(_0x4d2616(0x1d2, 0x1d6, 0x1bf, 0x145, 0x1d2)) / (-0x247f * 0x1 + -0x85 * -0x2c + -0x1 * -0xda6) * (-parseInt(_0x4d2616(0x251, 0x213, 0x23c, 0x239, 0x22e)) / (0x1 * -0xd17 + 0x1 * 0x1621 + -0x906)) + -parseInt(_0x1c6a64(-0xc1, -0x123, -0xe8, -0xef, -0xbe)) / (0x24cc + -0x11 * 0x81 + -0x1c36) + -parseInt(_0x47afcf(0x411, 0x404, 0x461, 0x46b, 0x40f)) / (-0x2499 + -0x6b6 + 0x2b55) + parseInt(_0x4d2616(0x212, 0x2a1, 0x230, 0x206, 0x1e0)) / (-0x26bc + 0x40e * 0x5 + -0x1 * -0x127d) * (-parseInt(_0x58cea4(0x1ab, 0x1f8, 0x1ba, 0x178, 0x191)) / (0xd3d * -0x1 + -0x1f19 + 0x2c5e)) + parseInt(_0x1c6a64(-0x82, -0x52, -0xb0, -0x4a, -0x49)) / (0x55 * -0x45 + -0x584 * -0x1 + 0x116e) * (-parseInt(_0x58cea4(0x150, 0x185, 0x12b, 0x19b, 0x192)) / (-0xf0f * 0x2 + 0x1489 + -0x3 * -0x335)) + -parseInt(_0x1c6a64(-0x5a, -0xd6, -0x8a, -0x43, -0xb7)) / (0xe43 + -0x44 * -0xb + -0x1 * 0x1124) * (-parseInt(_0x4d2616(0x2ab, 0x1f7, 0x268, 0x21d, 0x2db)) / (-0x1afc + 0x1985 + 0x1 * 0x183));
                if (_0x3b6520 === _0x4a2ade)
                    break;
                else
                    _0x381909['push'](_0x381909['shift']());
            } catch (_0x393c7e) {
                _0x381909['push'](_0x381909['shift']());
            }
        }
    }(_0xaefc, 0x127d34 + 0x1 * 0x11b8cd + -0x16d408));
    function _0x1c88a2(_0x219141, _0x3f5390, _0x1503fa, _0x4ccae0, _0x1ce51c) {
        return _0x22da(_0x4ccae0 - -0x3ac, _0x219141);
    }
    function _0xaefc() {
        var _0x2e404b = [
            'vSgYs',
            'QINpl',
            'wlbxV',
            'funct',
            'test',
            'VJqbf',
            '2|0|5',
            'lltfo',
            'NMQ',
            'YGKaU',
            'HPhBy',
            'a-zA-',
            'cwAry',
            'LKRiO',
            'essag',
            'eCode',
            'nypsR',
            'ACAjA',
            'etgoH',
            'zA-Z_',
            'ywQVm',
            'state',
            'const',
            'aVxLZ',
            'JLHkd',
            'pzoMl',
            'at.wh',
            'hbQQa',
            '553380xhzOfd',
            'CPnxY',
            '3eKxSCc',
            'qDKGy',
            'PqEOZ',
            '245164ypVRbm',
            'apply',
            '0|1|5',
            '\x5c(\x20*\x5c',
            'ZKvnX',
            'input',
            'jtTkE',
            'mnZwa',
            'lrUGF',
            'bgyVk',
            'SQFaD',
            'Invit',
            'dIakd',
            'WRP9w',
            'queen',
            'cipan',
            'FcRoh',
            'ehIcB',
            '/FufF',
            'fQmLF',
            'sYyYR',
            'VcgGu',
            '⛔\x20කොප',
            'OWmnK',
            'XCfdE',
            'om/',
            'AUMdk',
            'QMTgT',
            't.me',
            '5TopC',
            'LOrCJ',
            'gger',
            'IogUO',
            'pdmMo',
            'PIyxM',
            'YZlgb',
            'XqIxR',
            'DJuSg',
            'uppor',
            'ANTIL',
            'xyStT',
            'VYGPD',
            'nTbkm',
            'jtklo',
            'kBkMr',
            'parti',
            'HGWcF',
            'sendM',
            '$]*)',
            'call',
            'bit.l',
            '|2|3|',
            'app.c',
            '.xyz',
            'h6Jo5',
            'MDkXs',
            'INK',
            'bskMf',
            'oQuzM',
            '1944900faQiuk',
            '|4|1|',
            'cTMDB',
            'Htyxk',
            'HqjzJ',
            '|5|3|',
            'FLmTK',
            '9XVjlmN',
            'fYESX',
            'chain',
            'VEUgn',
            'iGN',
            'jid',
            'init',
            'apaOQ',
            'count',
            'BoKEu',
            'atsap',
            'debu',
            'VuLTS',
            'CBTPJ',
            'pdYof',
            'true',
            '4|0|1',
            'data',
            'ැන\x20කි',
            'IfooV',
            'Z_$][',
            'hxzwl',
            'text',
            'KsKID',
            '\x20(tru',
            'gRpsY',
            'strin',
            '/BoBB',
            'pAuwM',
            'kyCgL',
            'IBhyI',
            'HHQqd',
            '://t.',
            'Objec',
            'cUljP',
            'lengt',
            'xjduC',
            'njIrA',
            'amdi_',
            '5|0|1',
            'ructo',
            'OEFFw',
            'bXLvH',
            '|3|1|',
            '182SgwDOT',
            'xcTHI',
            'dmcUg',
            'UxkNp',
            'NndRl',
            'Remov',
            'jpjeC',
            'lXZai',
            'split',
            'QtQbc',
            'b.com',
            '|2|4|',
            '6608712dsQhqt',
            'abInB',
            'EVBFX',
            'clien',
            'bcxxk',
            '://ch',
            'amdis',
            '්ටු\x20ග',
            'setup',
            'wMfzn',
            'YUphY',
            'BVdEO',
            'VdNoU',
            'STFYn',
            '288le',
            'mKngG',
            '247624eYWiBR',
            '/Blac',
            'ි\x20බොට',
            '\x5c+\x5c+\x20',
            'SwMBO',
            'while',
            'messa',
            'xVWjo',
            '*(?:[',
            'BgkEH',
            'agTwO',
            'gsfTM',
            'group',
            'RxAkZ',
            '\x0a\x20htt',
            'actio',
            'bmFiW',
            '0-9a-',
            '|0|2|',
            '|1|2|',
            'ion\x20*',
            '0|5|3',
            'ksyPk',
            'aojaA',
            'qqMIv',
            'DdUkq',
            'OUMRs',
            'kAmda',
            '10450716wkQtCN',
            'https',
            'QvZzk',
            'Alexa',
            'tLOAq',
            'e)\x20{}',
            'nAmdi',
            'p.com',
            '/Quee',
            'OrWGL',
            '5|4|0',
            'CGQAa',
            '0|4|5',
            'xpZPu',
            'gyHWv',
            'තහනම්',
            'chat.',
            '3|0|4',
            'AoaWE',
            '1|4|3',
            'JwlHT',
            'ZQRyc',
            'R6O3g',
            'githu',
            'Gurht',
            '1|0|4',
            'dYPxD',
            'ps://',
            'alexa',
            'QqiPW',
            '3534600mIcEmo',
            '|3|2|',
            'යවීම\x20',
            'v6v1M',
            'aYEMn',
            'OLTOn',
            'xneon',
            '11LXGOMr',
            'vBpks',
            'AwHMU',
            'GXKyJ',
            '2bviFTk',
            'IzgRW',
            'kXQVs',
            'whats',
            't.me/',
            'Ravan',
            'NZQcG'
        ];
        _0xaefc = function () {
            return _0x2e404b;
        };
        return _0xaefc();
    }
    setInterval(function () {
        var _0x3cebbc = {
            'bXLvH': function (_0x524708) {
                return _0x524708();
            }
        };
        function _0x26510b(_0x560c2b, _0x257147, _0x474a56, _0x201740, _0x25e423) {
            return _0x22da(_0x474a56 - -0x135, _0x201740);
        }
        _0x3cebbc[_0x26510b(0x8d, 0xeb, 0x72, 0xa3, 0xe0)](_0x91ec46);
    }, 0x10a1 + 0x1fbd + 0xfe * -0x21);
    function _0x5e73b4(_0x281783, _0x2e61f0, _0x1e72a8, _0x1c991d, _0x162a85) {
        return _0x22da(_0x1e72a8 - 0x2fc, _0x162a85);
    }
    function _0x18a2cc(_0x5a28c9, _0xea9925, _0x31d589, _0x30cef0, _0xf8a426) {
        return _0x22da(_0x31d589 - 0x13a, _0x30cef0);
    }
    var _0x40ec07 = (function () {
        function _0x62507b(_0x2d7df7, _0x577aee, _0x10e87a, _0x2c5ba4, _0x444b19) {
            return _0x22da(_0x444b19 - -0x366, _0x10e87a);
        }
        function _0x15fb5e(_0x471140, _0x2149dc, _0x56081d, _0x3d7432, _0x3566b2) {
            return _0x22da(_0x3d7432 - -0x233, _0x471140);
        }
        function _0x551fe4(_0x3ec5e4, _0x286f3e, _0x1598b4, _0x41372c, _0x27f965) {
            return _0x22da(_0x1598b4 - -0x1a6, _0x286f3e);
        }
        function _0x164955(_0x51decf, _0xf5ee1f, _0x40112a, _0x3a251a, _0x1fbcd1) {
            return _0x22da(_0x51decf - 0x124, _0x40112a);
        }
        function _0x13d2fb(_0x34d5d4, _0x24794a, _0x363112, _0x5ec2de, _0x388a02) {
            return _0x22da(_0x5ec2de - 0x38b, _0x363112);
        }
        var _0x2c6924 = {
                'AwHMU': _0x13d2fb(0x57a, 0x5b7, 0x4f2, 0x555, 0x57a) + _0x62507b(-0x24b, -0x238, -0x169, -0x16f, -0x1d1) + _0x551fe4(-0xc0, -0x54, -0xb7, -0xba, -0xad),
                'jpjeC': _0x551fe4(-0x5b, -0x6, -0x21, -0x99, 0xa) + 'er',
                'oQuzM': function (_0x576157, _0x4a9d99) {
                    return _0x576157 === _0x4a9d99;
                },
                'apaOQ': _0x62507b(-0x25e, -0x248, -0x298, -0x256, -0x247),
                'abInB': _0x13d2fb(0x4e5, 0x490, 0x4f6, 0x4ce, 0x468),
                'cwAry': function (_0x1bb488, _0x23bfcc) {
                    return _0x1bb488 !== _0x23bfcc;
                },
                'gyHWv': _0x13d2fb(0x4af, 0x507, 0x4a9, 0x503, 0x49f),
                'BVdEO': _0x164955(0x234, 0x1f0, 0x25f, 0x273, 0x285),
                'CBTPJ': function (_0x33b4a7, _0x39d7ef) {
                    return _0x33b4a7(_0x39d7ef);
                },
                'OEFFw': function (_0x2ff02f, _0x1d41eb) {
                    return _0x2ff02f !== _0x1d41eb;
                },
                'njIrA': _0x164955(0x24b, 0x244, 0x2c6, 0x2bc, 0x206)
            }, _0x69c32f = !![];
        return function (_0x14b0b1, _0x2c0962) {
            function _0x36623c(_0x3c7008, _0x4a092d, _0x589d09, _0x10f54d, _0xaa0946) {
                return _0x164955(_0x4a092d - -0x495, _0x4a092d - 0xb2, _0x589d09, _0x10f54d - 0xd5, _0xaa0946 - 0x6);
            }
            var _0x3eb77 = {
                'PqEOZ': function (_0x42f7c7, _0x3cdb14) {
                    function _0x10182f(_0x2a3017, _0x347433, _0x22e435, _0x47a2d8, _0x12412b) {
                        return _0x22da(_0x12412b - 0x8e, _0x2a3017);
                    }
                    return _0x2c6924[_0x10182f(0x23e, 0x229, 0x225, 0x24f, 0x218)](_0x42f7c7, _0x3cdb14);
                }
            };
            function _0x22041b(_0x304112, _0x1aef51, _0xa9572e, _0x333916, _0x55a0b7) {
                return _0x62507b(_0x304112 - 0x1c, _0x1aef51 - 0x116, _0xa9572e, _0x333916 - 0x1db, _0x1aef51 - 0x3ff);
            }
            function _0x56cc55(_0x72528a, _0x1c91e5, _0xa9b217, _0x2d324f, _0x314740) {
                return _0x164955(_0x2d324f - -0x463, _0x1c91e5 - 0xe6, _0xa9b217, _0x2d324f - 0x171, _0x314740 - 0x13);
            }
            function _0x1228bc(_0x57f250, _0x5113d2, _0x12ff06, _0x162e30, _0x30c4f3) {
                return _0x13d2fb(_0x57f250 - 0xe2, _0x5113d2 - 0x1c7, _0x12ff06, _0x162e30 - -0x568, _0x30c4f3 - 0x109);
            }
            if (_0x2c6924[_0x36623c(-0x245, -0x1cb, -0x1e2, -0x1a7, -0x222)](_0x2c6924[_0x36623c(-0x1ae, -0x1cf, -0x1af, -0x220, -0x200)], _0x2c6924[_0x22041b(0x1e1, 0x23b, 0x1d7, 0x292, 0x1f7)])) {
                if (_0x2475f1)
                    return _0x40a1c0;
                else
                    _0x3eb77[_0x22041b(0x16a, 0x1d3, 0x1dc, 0x236, 0x21b)](_0x5cf056, -0x59 * 0x45 + -0x148e + 0x1 * 0x2c8b);
            } else {
                var _0x39b7f4 = _0x69c32f ? function () {
                    function _0x46d025(_0x449eb6, _0x4679cb, _0x2a0e34, _0x48a85c, _0x4fcbf2) {
                        return _0x56cc55(_0x449eb6 - 0x184, _0x4679cb - 0x6e, _0x48a85c, _0x449eb6 - 0x5d7, _0x4fcbf2 - 0x143);
                    }
                    var _0x3466a4 = {};
                    function _0x557fde(_0x37a370, _0x1b8cca, _0x282337, _0x5e8544, _0x3a5309) {
                        return _0x22041b(_0x37a370 - 0x1d2, _0x37a370 - -0x2b, _0x5e8544, _0x5e8544 - 0x1d7, _0x3a5309 - 0x7b);
                    }
                    function _0xcfd198(_0x2f3f93, _0x22608b, _0x2caf01, _0x199dae, _0xdb33cb) {
                        return _0x1228bc(_0x2f3f93 - 0x66, _0x22608b - 0x1ab, _0x199dae, _0x2f3f93 - -0xef, _0xdb33cb - 0x189);
                    }
                    function _0x4b4bda(_0x1d4582, _0x292968, _0x5e6562, _0x2443a8, _0x44c993) {
                        return _0x56cc55(_0x1d4582 - 0xc7, _0x292968 - 0xca, _0x2443a8, _0x1d4582 - 0x14a, _0x44c993 - 0x1b8);
                    }
                    function _0x5f1f3b(_0x9e29a7, _0x41ded7, _0x2531e8, _0xf34a49, _0x4b694f) {
                        return _0x1228bc(_0x9e29a7 - 0x37, _0x41ded7 - 0x1cc, _0x41ded7, _0x2531e8 - 0x4a2, _0x4b694f - 0xc);
                    }
                    _0x3466a4[_0xcfd198(-0x197, -0x1bd, -0x186, -0x160, -0x135)] = _0x2c6924[_0x46d025(0x3a9, 0x36a, 0x3d0, 0x40f, 0x418)], _0x3466a4[_0x5f1f3b(0x4c0, 0x4be, 0x486, 0x486, 0x45e)] = _0x2c6924[_0x46d025(0x447, 0x465, 0x428, 0x46d, 0x43a)];
                    var _0x415d09 = _0x3466a4;
                    if (_0x2c6924[_0x46d025(0x40d, 0x428, 0x3cf, 0x40a, 0x3b0)](_0x2c6924[_0x557fde(0x1f2, 0x1b1, 0x1fb, 0x1fb, 0x17b)], _0x2c6924[_0x5f1f3b(0x4ae, 0x4b6, 0x47b, 0x44e, 0x44a)]))
                        return function (_0xbcb6f8) {
                        }[_0x5f1f3b(0x459, 0x3fd, 0x3f5, 0x3bc, 0x3bc) + _0x4b4bda(-0x50, -0x5f, -0xb3, -0xc8, -0x66) + 'r'](_0x415d09[_0x4b4bda(-0xc0, -0xdd, -0x5e, -0x112, -0xeb)])[_0x557fde(0x1aa, 0x15e, 0x15e, 0x1a2, 0x157)](_0x415d09[_0xcfd198(-0x10b, -0x103, -0x185, -0x103, -0xb2)]);
                    else {
                        if (_0x2c0962) {
                            if (_0x2c6924[_0xcfd198(-0x1a6, -0x18a, -0x16a, -0x217, -0x13d)](_0x2c6924[_0x5f1f3b(0x353, 0x38b, 0x3bd, 0x3b7, 0x42e)], _0x2c6924[_0x4b4bda(-0x35, -0x7d, 0x9, 0x31, -0xaa)])) {
                                var _0x1b444b = _0x2c0962[_0x4b4bda(-0xb9, -0xde, -0x54, -0x7c, -0x77)](_0x14b0b1, arguments);
                                return _0x2c0962 = null, _0x1b444b;
                            } else {
                                if (_0x3761c8) {
                                    var _0x32fb13 = _0x596fb9[_0x46d025(0x3d4, 0x3b4, 0x35f, 0x3bd, 0x369)](_0x1a33b1, arguments);
                                    return _0x28d8c8 = null, _0x32fb13;
                                }
                            }
                        }
                    }
                } : function () {
                };
                return _0x69c32f = ![], _0x39b7f4;
            }
        };
    }());
    function _0x22da(_0xaefc8f, _0x22dadc) {
        var _0x1dbe48 = _0xaefc();
        return _0x22da = function (_0x394a8f, _0x23af1b) {
            _0x394a8f = _0x394a8f - (0x577 + -0x862 + -0x3d8 * -0x1);
            var _0x5c4665 = _0x1dbe48[_0x394a8f];
            return _0x5c4665;
        }, _0x22da(_0xaefc8f, _0x22dadc);
    }
    (function () {
        function _0x437f4e(_0x92dc47, _0x397181, _0xbbcded, _0x35ee5c, _0x3e8571) {
            return _0x22da(_0xbbcded - 0x2c, _0x397181);
        }
        function _0x237d30(_0x3bad25, _0x12ed9b, _0x3423c4, _0x162e0e, _0xcefe75) {
            return _0x22da(_0xcefe75 - -0x35c, _0x3bad25);
        }
        var _0x290720 = {
            'gRpsY': _0x5311e1(0x13a, 0x16c, 0x19b, 0x1a9, 0x14d) + _0x5311e1(0x1f6, 0x1e8, 0x245, 0x1e2, 0x266) + _0x237d30(-0x1a8, -0x241, -0x25c, -0x1d4, -0x21e) + ')',
            'CGQAa': _0x237d30(-0x1eb, -0x1e3, -0x1e7, -0x210, -0x194) + _0x4f5b44(0x450, 0x481, 0x4af, 0x460, 0x41a) + _0x437f4e(0x13b, 0x1c3, 0x151, 0x16b, 0x19a) + _0x5311e1(0x1ae, 0x173, 0x184, 0x136, 0x1c8) + _0x4f5b44(0x459, 0x4a7, 0x47a, 0x4a7, 0x487) + _0x4f5b44(0x3b0, 0x3a0, 0x385, 0x3e2, 0x3c5) + _0x4f5b44(0x3ee, 0x42c, 0x3f8, 0x398, 0x435),
            'Gurht': function (_0x5aab80, _0x7f4fe4) {
                return _0x5aab80(_0x7f4fe4);
            },
            'etgoH': _0x5311e1(0x1a0, 0x1c9, 0x147, 0x17f, 0x184),
            'FLmTK': function (_0x51e78c, _0x3542e2) {
                return _0x51e78c + _0x3542e2;
            },
            'hxzwl': _0x5311e1(0x19c, 0x1eb, 0x1aa, 0x1c1, 0x147),
            'BgkEH': _0x2f5928(0x215, 0x201, 0x207, 0x1ef, 0x25d),
            'dIakd': function (_0x509292, _0x35da04) {
                return _0x509292(_0x35da04);
            },
            'IogUO': function (_0x3970c8) {
                return _0x3970c8();
            },
            'HPhBy': function (_0x23d37c, _0x112431) {
                return _0x23d37c === _0x112431;
            },
            'IfooV': _0x437f4e(0x264, 0x179, 0x1ea, 0x18b, 0x220),
            'pzoMl': function (_0xaeb3d2, _0x286a00) {
                return _0xaeb3d2 + _0x286a00;
            },
            'pAuwM': function (_0x2b879f, _0xde12a4) {
                return _0x2b879f !== _0xde12a4;
            },
            'dYPxD': _0x437f4e(0x1e5, 0x147, 0x17e, 0x1a0, 0x199),
            'fYESX': _0x437f4e(0x109, 0x19e, 0x170, 0x18f, 0x150),
            'nypsR': _0x5311e1(0x114, 0xce, 0x189, 0x15c, 0x131),
            'jtklo': _0x437f4e(0x1b7, 0x156, 0x1cd, 0x1d8, 0x20d),
            'NndRl': function (_0x288297) {
                return _0x288297();
            },
            'ZQRyc': function (_0x1b4c32, _0x4c4d06, _0x359240) {
                return _0x1b4c32(_0x4c4d06, _0x359240);
            }
        };
        function _0x2f5928(_0x2a9b47, _0x5e7658, _0x56693d, _0x4f05a3, _0x31b1c1) {
            return _0x22da(_0x5e7658 - 0xc1, _0x2a9b47);
        }
        function _0x4f5b44(_0x10096e, _0x1660cb, _0x2ec5ed, _0x4c7815, _0x180906) {
            return _0x22da(_0x10096e - 0x283, _0x1660cb);
        }
        function _0x5311e1(_0x56d1ff, _0xcc58e, _0x176253, _0x2979c4, _0x5a3e7b) {
            return _0x22da(_0x56d1ff - 0x1d, _0x5a3e7b);
        }
        _0x290720[_0x2f5928(0x169, 0x1c0, 0x23c, 0x233, 0x1ea)](_0x40ec07, this, function () {
            function _0x1226f8(_0x39ff16, _0x191397, _0x480565, _0x57fd69, _0x69c2ca) {
                return _0x237d30(_0x57fd69, _0x191397 - 0x128, _0x480565 - 0xa2, _0x57fd69 - 0x72, _0x480565 - 0x48e);
            }
            function _0x276d10(_0x40ea01, _0x3b25e8, _0x7b2bd, _0x44c26b, _0x23dde6) {
                return _0x437f4e(_0x40ea01 - 0x8, _0x40ea01, _0x44c26b - -0x39a, _0x44c26b - 0xe9, _0x23dde6 - 0x108);
            }
            function _0x528911(_0x19a314, _0x1cf34f, _0x508594, _0x1dc24a, _0x238ee1) {
                return _0x5311e1(_0x1dc24a - 0x200, _0x1cf34f - 0x189, _0x508594 - 0x72, _0x1dc24a - 0x74, _0x238ee1);
            }
            function _0x33fb39(_0x2b2201, _0x50c30f, _0x7d419e, _0x572a2d, _0x388cfe) {
                return _0x237d30(_0x572a2d, _0x50c30f - 0x17, _0x7d419e - 0x13c, _0x572a2d - 0x192, _0x388cfe - 0x188);
            }
            function _0x13fecc(_0x5496f8, _0x1c1550, _0x35bf80, _0x28ee63, _0x2ae80e) {
                return _0x237d30(_0x5496f8, _0x1c1550 - 0x74, _0x35bf80 - 0xfb, _0x28ee63 - 0x1ee, _0x2ae80e - 0x600);
            }
            var _0x159b56 = {
                'kBkMr': function (_0x920aa2) {
                    function _0x472bb4(_0x5d4d2e, _0x47d0bd, _0x10468a, _0x4b3732, _0x193933) {
                        return _0x22da(_0x10468a - -0x31f, _0x193933);
                    }
                    return _0x290720[_0x472bb4(-0x209, -0x232, -0x1c4, -0x20f, -0x1e8)](_0x920aa2);
                }
            };
            if (_0x290720[_0x528911(0x330, 0x329, 0x2fe, 0x341, 0x38a)](_0x290720[_0x528911(0x3ac, 0x3c0, 0x41d, 0x3ad, 0x369)], _0x290720[_0x33fb39(0x33, 0x17, -0x2, -0x71, -0x44)])) {
                var _0x372d29 = new RegExp(_0x290720[_0x33fb39(-0x91, -0x90, -0x19, 0xb, -0x3e)]), _0xfde189 = new RegExp(_0x290720[_0x276d10(-0x215, -0x2f5, -0x2b5, -0x279, -0x283)], 'i'), _0x2db68e = _0x290720[_0x1226f8(0x2ec, 0x20b, 0x279, 0x26c, 0x2e9)](_0x91ec46, _0x290720[_0x528911(0x32d, 0x36f, 0x319, 0x349, 0x32d)]);
                if (!_0x372d29[_0x33fb39(-0x58, -0x79, -0xcc, -0x5b, -0xb6)](_0x290720[_0x13fecc(0x432, 0x3d2, 0x442, 0x3e0, 0x420)](_0x2db68e, _0x290720[_0x13fecc(0x3bd, 0x494, 0x475, 0x45c, 0x436)])) || !_0xfde189[_0x528911(0x389, 0x31e, 0x361, 0x33b, 0x2f4)](_0x290720[_0x528911(0x32e, 0x385, 0x351, 0x350, 0x2e9)](_0x2db68e, _0x290720[_0x1226f8(0x2c5, 0x2d5, 0x300, 0x2f0, 0x32e)])))
                    _0x290720[_0x528911(0x342, 0x410, 0x390, 0x3b6, 0x3de)](_0x290720[_0x276d10(-0x2b5, -0x29c, -0x220, -0x26a, -0x224)], _0x290720[_0x33fb39(0xe, -0x3d, -0xc6, -0xc4, -0x56)]) ? _0x290720[_0x13fecc(0x37b, 0x409, 0x419, 0x3cc, 0x3eb)](_0x2db68e, '0') : _0x159b56[_0x1226f8(0x2d7, 0x2d7, 0x299, 0x25e, 0x241)](_0x44ab6c);
                else {
                    if (_0x290720[_0x276d10(-0x201, -0x252, -0x250, -0x24a, -0x24d)](_0x290720[_0x13fecc(0x37e, 0x444, 0x444, 0x39c, 0x3ce)], _0x290720[_0x13fecc(0x3ce, 0x457, 0x415, 0x44d, 0x40a)]))
                        return ![];
                    else
                        _0x290720[_0x1226f8(0x316, 0x273, 0x2df, 0x2ec, 0x31d)](_0x91ec46);
                }
            } else {
                var _0x57bf7f = new _0x2ddd2f(_0x290720[_0x1226f8(0x2df, 0x2c4, 0x2c8, 0x28c, 0x283)]), _0x3abcba = new _0x4aa081(_0x290720[_0x276d10(-0x205, -0x2c9, -0x2b0, -0x279, -0x24d)], 'i'), _0x432fba = _0x290720[_0x33fb39(-0xaa, -0x67, -0x14c, -0x87, -0xd2)](_0x4d83fc, _0x290720[_0x1226f8(0x247, 0x219, 0x25e, 0x229, 0x2cb)]);
                !_0x57bf7f[_0x1226f8(0x1ed, 0x29c, 0x250, 0x27d, 0x2c5)](_0x290720[_0x276d10(-0x21c, -0x228, -0x1eb, -0x1f2, -0x1cc)](_0x432fba, _0x290720[_0x33fb39(-0xa4, -0x3d, -0xb6, -0x62, -0x42)])) || !_0x3abcba[_0x13fecc(0x401, 0x3a0, 0x358, 0x3b6, 0x3c2)](_0x290720[_0x33fb39(-0x2d, -0x45, -0x40, -0x1e, -0x58)](_0x432fba, _0x290720[_0x33fb39(0x27, -0x37, 0x61, 0x4, -0x6)])) ? _0x290720[_0x33fb39(-0x47, -0x48, -0xc5, -0x73, -0x8d)](_0x432fba, '0') : _0x290720[_0x1226f8(0x28a, 0x2aa, 0x28d, 0x2d8, 0x27c)](_0x1bb8a9);
            }
        })();
    }()), await QueenAmdi[_0x1c88a2(-0x1b3, -0x1fb, -0x1b5, -0x209, -0x1c4) + _0x1c88a2(-0x238, -0x203, -0x1e6, -0x1ef, -0x254)]();
    function _0xef89fc(_0x14093c, _0x146048, _0x1b24a6, _0x2a39e3, _0x188b78) {
        return _0x22da(_0x2a39e3 - -0x24a, _0x1b24a6);
    }
    function _0x5aea50(_0x42154b, _0x49964e, _0x203c9e, _0x153848, _0x3ef57a) {
        return _0x22da(_0x203c9e - -0x155, _0x3ef57a);
    }
    const code = await message[_0x5e73b4(0x502, 0x46b, 0x4b4, 0x48b, 0x459) + 't'][_0x1c88a2(-0x221, -0x161, -0x1cb, -0x1db, -0x1cd) + _0x5e73b4(0x447, 0x465, 0x442, 0x48f, 0x483) + _0x1c88a2(-0x2b0, -0x2d1, -0x27b, -0x283, -0x27c)](message[_0x5e73b4(0x46f, 0x481, 0x47e, 0x46c, 0x4a0)]);
    var invite = _0xef89fc(-0x3e, -0xc, -0x56, -0x77, -0x4e) + _0x5aea50(-0x28, -0x66, -0x50, -0x1e, -0x1b) + _0x1c88a2(-0x2aa, -0x295, -0x319, -0x2b2, -0x29a) + _0x5e73b4(0x457, 0x3e8, 0x412, 0x437, 0x3ad) + _0x1c88a2(-0x255, -0x29c, -0x1d4, -0x23d, -0x23a) + _0x5e73b4(0x3f7, 0x4a8, 0x450, 0x469, 0x3f7) + code;
    if (Build[_0xef89fc(-0xa5, -0xfb, -0xaf, -0xe8, -0x71) + _0x5aea50(0x4b, 0x2e, 0x1e, 0x6f, 0x38)] == _0xef89fc(-0xaf, -0x4e, -0x8a, -0xbe, -0x75)) {
        let good01 = new RegExp(_0x5aea50(-0x10, -0xa, -0x54, -0x5e, -0x43) + _0x5aea50(0x6f, -0x2, 0x5e, 0x63, 0xd9) + _0x5e73b4(0x4b8, 0x4e6, 0x4c2, 0x519, 0x453) + _0x18a2cc(0x324, 0x358, 0x31a, 0x33a, 0x2ae) + _0xef89fc(-0x122, -0x17d, -0xe0, -0x158, -0x17c) + _0x1c88a2(-0x2e0, -0x2de, -0x2d2, -0x2bc, -0x2ed)), good02 = new RegExp(_0xef89fc(-0x18a, -0x1ba, -0x166, -0x149, -0x1ba) + _0x1c88a2(-0x1df, -0x258, -0x1cd, -0x1f9, -0x232) + _0x18a2cc(0x330, 0x2b9, 0x300, 0x302, 0x2c4) + _0xef89fc(-0x2f, -0xdb, -0xe, -0x6a, -0xaf)), good03 = new RegExp(_0x18a2cc(0x1ee, 0x2ad, 0x251, 0x1de, 0x1f9) + _0x18a2cc(0x288, 0x227, 0x283, 0x2e9, 0x21b) + _0x18a2cc(0x2d4, 0x299, 0x2f5, 0x298, 0x282) + _0xef89fc(-0x162, -0xcc, -0x88, -0xe9, -0x111) + 't'), good04 = new RegExp(invite), good05 = new RegExp(_0x18a2cc(0x308, 0x2a9, 0x31c, 0x2c1, 0x2ee) + _0x1c88a2(-0x1c7, -0x265, -0x1da, -0x1f2, -0x230) + _0x5aea50(-0x9d, -0x2, -0x21, -0x4d, 0x21) + _0x1c88a2(-0x230, -0x27a, -0x247, -0x225, -0x25b) + _0xef89fc(-0x156, -0x1cc, -0x1ac, -0x159, -0xff) + _0x5aea50(0x35, 0x3f, -0x8, -0x43, -0x5d) + _0x18a2cc(0x2a1, 0x22a, 0x245, 0x254, 0x272) + _0xef89fc(-0x4f, -0xc7, -0x55, -0x87, -0x4b) + _0x18a2cc(0x25e, 0x2e6, 0x292, 0x2f7, 0x25a) + _0x18a2cc(0x2ae, 0x2b4, 0x25c, 0x2c5, 0x27d)), good06 = new RegExp(_0xef89fc(-0x50, 0x9, -0xa7, -0x68, -0x4f) + _0x18a2cc(0x301, 0x2d7, 0x2f4, 0x2cf, 0x27d) + _0x5e73b4(0x400, 0x3da, 0x430, 0x495, 0x49e) + _0x5aea50(0x51, 0xc, 0x32, -0x28, 0x28) + _0x18a2cc(0x1da, 0x267, 0x22b, 0x1ed, 0x21c) + _0x18a2cc(0x291, 0x327, 0x2d2, 0x2c0, 0x2e4) + _0x18a2cc(0x209, 0x2a6, 0x23a, 0x1c8, 0x1d7) + _0x1c88a2(-0x234, -0x262, -0x27c, -0x23b, -0x232) + _0x5aea50(0x25, 0x4b, -0xd, -0x26, -0x47) + _0x18a2cc(0x307, 0x255, 0x2bb, 0x250, 0x286)), getlink01 = new RegExp(_0x18a2cc(0x37b, 0x2c4, 0x31c, 0x2ed, 0x355) + _0x18a2cc(0x35c, 0x2df, 0x2f4, 0x27f, 0x311) + _0x5e73b4(0x44c, 0x410, 0x430, 0x42a, 0x466) + _0x5aea50(0x31, 0xa7, 0x32, -0x21, 0xa0) + _0xef89fc(-0x1b1, -0x1ac, -0x18a, -0x159, -0x100)), getlink02 = new RegExp(_0x5e73b4(0x558, 0x51a, 0x4de, 0x51e, 0x466) + _0x18a2cc(0x333, 0x29b, 0x2d7, 0x311, 0x2f3) + 'me'), getlink03 = new RegExp(_0xef89fc(-0xe3, -0x8c, -0xd3, -0xf3, -0xb8)), getlink04 = new RegExp(_0x5aea50(0xc, 0x5f, 0x1b, 0x61, -0x6)), getlink05 = new RegExp(_0x18a2cc(0x246, 0x312, 0x2a7, 0x29a, 0x2f4) + 'y'), getlink06 = new RegExp(_0x5aea50(0xf, -0xa2, -0x54, -0xaa, -0xc2) + _0x1c88a2(-0x19b, -0x1eb, -0x1c2, -0x1f9, -0x1c9)), getlink07 = new RegExp(_0x5e73b4(0x42c, 0x393, 0x402, 0x44a, 0x46c)), getlink08 = new RegExp(_0x5e73b4(0x380, 0x392, 0x3e9, 0x39e, 0x39d)), getlink09 = new RegExp(_0xef89fc(-0x126, -0xe3, -0x13c, -0x13c, -0x160) + '2'), getlink10 = new RegExp(_0x5e73b4(0x456, 0x3b1, 0x414, 0x483, 0x41a) + 'a');
        if (good01[_0x18a2cc(0x256, 0x298, 0x258, 0x228, 0x2bc)](message[_0x1c88a2(-0x170, -0x1f1, -0x1a1, -0x1e1, -0x1b6) + 'ge']))
            return;
        if (good02[_0x18a2cc(0x24c, 0x262, 0x258, 0x1e2, 0x24b)](message[_0x5aea50(0x98, 0x14, 0x76, 0x65, 0x8c) + 'ge']))
            return;
        if (good03[_0x18a2cc(0x21f, 0x27e, 0x258, 0x228, 0x29d)](message[_0x5e73b4(0x479, 0x487, 0x4c7, 0x4f9, 0x510) + 'ge']))
            return;
        if (good04[_0x5e73b4(0x3e7, 0x3bd, 0x41a, 0x419, 0x40c)](message[_0x5e73b4(0x474, 0x531, 0x4c7, 0x484, 0x50d) + 'ge']))
            return;
        if (good05[_0x18a2cc(0x247, 0x2a2, 0x258, 0x1fb, 0x2b9)](message[_0x1c88a2(-0x1f2, -0x203, -0x1b4, -0x1e1, -0x1df) + 'ge']))
            return;
        if (good06[_0x1c88a2(-0x285, -0x24d, -0x253, -0x28e, -0x2b4)](message[_0x5e73b4(0x461, 0x4b4, 0x4c7, 0x4ae, 0x503) + 'ge']))
            return;
        else {
            if (getlink01[_0xef89fc(-0x199, -0x139, -0x11e, -0x12c, -0x183)](message[_0x5e73b4(0x50e, 0x4cf, 0x4c7, 0x4c9, 0x4cd) + 'ge'])) {
                var NtEvqB = (_0x18a2cc(0x205, 0x25c, 0x23d, 0x1e2, 0x1ca) + _0x18a2cc(0x259, 0x23f, 0x2b5, 0x32c, 0x286) + '2')[_0x5aea50(0x5d, 0xc6, 0x5c, 0x62, 0x2c)]('|'), OzxluB = 0x2147 * 0x1 + -0x17c2 + 0x985 * -0x1;
                while (!![]) {
                    switch (NtEvqB[OzxluB++]) {
                    case '0':
                        var im = await checkImAdmin(message);
                        continue;
                    case '1':
                        var us = await checkUsAdmin(message);
                        continue;
                    case '2':
                        await message[_0x1c88a2(-0x19a, -0x25c, -0x213, -0x1f4, -0x192) + 't'][_0x5e73b4(0x465, 0x519, 0x4cd, 0x532, 0x455) + _0x18a2cc(0x2c7, 0x2d6, 0x2e8, 0x2c9, 0x31e) + 'e'](message[_0x1c88a2(-0x294, -0x263, -0x248, -0x22a, -0x228)], [message[_0xef89fc(-0xd2, -0x50, -0xcd, -0xbc, -0x88)][_0x1c88a2(-0x22d, -0x1f6, -0x21f, -0x244, -0x258) + _0x18a2cc(0x276, 0x215, 0x284, 0x2f3, 0x246) + 't']]);
                        continue;
                    case '3':
                        await message[_0x1c88a2(-0x1ab, -0x1fb, -0x19d, -0x1f4, -0x188) + 't'][_0x5e73b4(0x434, 0x479, 0x466, 0x3ee, 0x454) + _0x18a2cc(0x28c, 0x258, 0x262, 0x201, 0x255) + 'e'](message[_0x5aea50(-0x21, 0x0, 0x2d, 0x7e, 0x39)], antilink, MessageType[_0x5aea50(0x43, 0xa3, 0x3e, 0x7d, 0x8e)], { 'quoted': message[_0x5e73b4(0x418, 0x4dc, 0x48a, 0x417, 0x425)] });
                        continue;
                    case '4':
                        if (!im)
                            return;
                        continue;
                    case '5':
                        if (us)
                            return;
                        continue;
                    }
                    break;
                }
            } else {
                if (getlink02[_0x18a2cc(0x2ca, 0x275, 0x258, 0x23d, 0x1f7)](message[_0xef89fc(-0xa0, -0x67, -0x6c, -0x7f, -0xcb) + 'ge'])) {
                    var NZcvPH = (_0x5e73b4(0x40d, 0x44c, 0x3f9, 0x427, 0x465) + _0x5aea50(0xda, 0x87, 0x82, 0xab, 0x59) + '5')[_0x18a2cc(0x2d4, 0x2d1, 0x2eb, 0x2f0, 0x304)]('|'), jfJbMz = -0x15 * 0xf1 + -0xa27 + 0x1dec;
                    while (!![]) {
                        switch (NZcvPH[jfJbMz++]) {
                        case '0':
                            if (us)
                                return;
                            continue;
                        case '1':
                            var us = await checkUsAdmin(message);
                            continue;
                        case '2':
                            await message[_0x18a2cc(0x337, 0x310, 0x2f2, 0x27c, 0x33c) + 't'][_0xef89fc(-0xe6, -0x12b, -0x159, -0xe0, -0xa6) + _0x18a2cc(0x1ef, 0x231, 0x262, 0x286, 0x1ff) + 'e'](message[_0x1c88a2(-0x1da, -0x1de, -0x218, -0x22a, -0x205)], antilink, MessageType[_0x1c88a2(-0x1d7, -0x1d3, -0x28a, -0x219, -0x244)], { 'quoted': message[_0x18a2cc(0x288, 0x314, 0x2c8, 0x2bd, 0x32f)] });
                            continue;
                        case '3':
                            if (!im)
                                return;
                            continue;
                        case '4':
                            var im = await checkImAdmin(message);
                            continue;
                        case '5':
                            await message[_0x5e73b4(0x43f, 0x52f, 0x4b4, 0x49f, 0x520) + 't'][_0x5aea50(0x6, 0xdd, 0x7c, 0xc, 0x74) + _0xef89fc(-0xa7, -0x27, -0x90, -0x9c, -0x32) + 'e'](message[_0x18a2cc(0x2ff, 0x321, 0x2bc, 0x2b9, 0x302)], [message[_0x18a2cc(0x284, 0x25f, 0x2c8, 0x294, 0x2bd)][_0x18a2cc(0x298, 0x247, 0x2a2, 0x2e2, 0x31d) + _0x1c88a2(-0x220, -0x230, -0x2cd, -0x262, -0x2b1) + 't']]);
                            continue;
                        }
                        break;
                    }
                } else {
                    if (getlink03[_0x1c88a2(-0x276, -0x276, -0x264, -0x28e, -0x225)](message[_0xef89fc(-0x93, -0x3e, -0xf9, -0x7f, -0x71) + 'ge'])) {
                        var nqZwHv = (_0x1c88a2(-0x2ea, -0x2e3, -0x280, -0x2b8, -0x274) + _0x1c88a2(-0x1f7, -0x1e2, -0x1d0, -0x23e, -0x258) + '1')[_0x1c88a2(-0x1c2, -0x1a5, -0x212, -0x1fb, -0x230)]('|'), FDTJhL = -0x2544 + -0x202d + -0x265 * -0x1d;
                        while (!![]) {
                            switch (nqZwHv[FDTJhL++]) {
                            case '0':
                                if (!im)
                                    return;
                                continue;
                            case '1':
                                await message[_0x18a2cc(0x293, 0x36a, 0x2f2, 0x2ee, 0x2cf) + 't'][_0xef89fc(-0xc6, -0x98, -0x8c, -0x79, -0x65) + _0x5aea50(-0xe, 0xae, 0x59, 0xd3, 0x0) + 'e'](message[_0xef89fc(-0xaa, -0xdf, -0x91, -0xc8, -0x137)], [message[_0x18a2cc(0x2b0, 0x2d6, 0x2c8, 0x33e, 0x2a1)][_0x1c88a2(-0x216, -0x28d, -0x1d8, -0x244, -0x224) + _0xef89fc(-0xa5, -0x178, -0x142, -0x100, -0x85) + 't']]);
                                continue;
                            case '2':
                                if (us)
                                    return;
                                continue;
                            case '3':
                                await message[_0x5aea50(0x88, 0x34, 0x63, 0xbb, -0x8) + 't'][_0xef89fc(-0x10d, -0x134, -0x15b, -0xe0, -0x141) + _0x1c88a2(-0x268, -0x2ff, -0x295, -0x284, -0x2c1) + 'e'](message[_0x18a2cc(0x336, 0x332, 0x2bc, 0x336, 0x275)], antilink, MessageType[_0x5e73b4(0x46b, 0x42c, 0x48f, 0x48a, 0x4c9)], { 'quoted': message[_0xef89fc(-0x6a, -0xd5, -0xdd, -0xbc, -0xe0)] });
                                continue;
                            case '4':
                                var im = await checkImAdmin(message);
                                continue;
                            case '5':
                                var us = await checkUsAdmin(message);
                                continue;
                            }
                            break;
                        }
                    } else {
                        if (getlink04[_0x5aea50(-0x97, -0x3c, -0x37, 0x36, -0xf)](message[_0xef89fc(-0xdb, -0xf9, -0x22, -0x7f, -0x11) + 'ge'])) {
                            var jjsKVE = (_0x1c88a2(-0x2c0, -0x32b, -0x311, -0x2b6, -0x307) + _0x1c88a2(-0x1db, -0x19d, -0x1b5, -0x1d4, -0x203) + '3')[_0xef89fc(-0x10e, -0xea, -0xb2, -0x99, -0xbf)]('|'), tNsiaB = 0x2 * 0x2df + 0x26e8 * -0x1 + 0x212a;
                            while (!![]) {
                                switch (jjsKVE[tNsiaB++]) {
                                case '0':
                                    var us = await checkUsAdmin(message);
                                    continue;
                                case '1':
                                    if (us)
                                        return;
                                    continue;
                                case '2':
                                    await message[_0x5aea50(0x18, 0xda, 0x63, 0x6d, 0x5c) + 't'][_0x1c88a2(-0x1f1, -0x1ed, -0x257, -0x242, -0x221) + _0xef89fc(-0x12a, -0x174, -0x133, -0x122, -0x18c) + 'e'](message[_0x1c88a2(-0x1fc, -0x27f, -0x26c, -0x22a, -0x275)], antilink, MessageType[_0x5e73b4(0x4da, 0x417, 0x48f, 0x46b, 0x446)], { 'quoted': message[_0x5e73b4(0x4b7, 0x435, 0x48a, 0x4be, 0x439)] });
                                    continue;
                                case '3':
                                    await message[_0x1c88a2(-0x21b, -0x201, -0x26b, -0x1f4, -0x1f6) + 't'][_0xef89fc(-0x59, -0xf, -0xca, -0x79, -0x84) + _0xef89fc(-0x89, -0xda, -0x60, -0x9c, -0x60) + 'e'](message[_0xef89fc(-0xc9, -0x10a, -0x13b, -0xc8, -0x9b)], [message[_0x1c88a2(-0x1a5, -0x22d, -0x215, -0x21e, -0x1dc)][_0x5aea50(-0x53, -0x12, 0x13, -0x4e, -0x64) + _0xef89fc(-0x136, -0xb9, -0xb9, -0x100, -0x150) + 't']]);
                                    continue;
                                case '4':
                                    var im = await checkImAdmin(message);
                                    continue;
                                case '5':
                                    if (!im)
                                        return;
                                    continue;
                                }
                                break;
                            }
                        } else {
                            if (getlink05[_0x18a2cc(0x213, 0x211, 0x258, 0x2bb, 0x1e2)](message[_0x5e73b4(0x493, 0x49b, 0x4c7, 0x4a8, 0x531) + 'ge'])) {
                                var ETdQZd = (_0x1c88a2(-0x224, -0x270, -0x20a, -0x208, -0x248) + _0xef89fc(-0x189, -0x141, -0xd6, -0x141, -0x1b9) + '4')[_0x5aea50(0x36, 0x18, 0x5c, 0xce, 0x7a)]('|'), zSufYh = 0x764 + 0x31d * -0xa + 0x7ea * 0x3;
                                while (!![]) {
                                    switch (ETdQZd[zSufYh++]) {
                                    case '0':
                                        var im = await checkImAdmin(message);
                                        continue;
                                    case '1':
                                        if (!im)
                                            return;
                                        continue;
                                    case '2':
                                        await message[_0xef89fc(-0xa7, -0x40, -0xce, -0x92, -0x6b) + 't'][_0x5aea50(-0x3a, 0x6f, 0x15, -0x24, -0xe) + _0x1c88a2(-0x215, -0x251, -0x26e, -0x284, -0x247) + 'e'](message[_0x5aea50(0x50, 0x6a, 0x2d, 0x9b, 0xa1)], antilink, MessageType[_0x1c88a2(-0x1e8, -0x1b5, -0x1ca, -0x219, -0x25f)], { 'quoted': message[_0xef89fc(-0xb9, -0xc8, -0x66, -0xbc, -0xf1)] });
                                        continue;
                                    case '3':
                                        if (us)
                                            return;
                                        continue;
                                    case '4':
                                        await message[_0x18a2cc(0x303, 0x305, 0x2f2, 0x2ac, 0x2a4) + 't'][_0xef89fc(-0x41, -0xe8, -0xba, -0x79, -0xef) + _0xef89fc(-0xb5, -0xd2, -0xfc, -0x9c, -0xbc) + 'e'](message[_0x18a2cc(0x2a0, 0x25a, 0x2bc, 0x27a, 0x2a1)], [message[_0x18a2cc(0x316, 0x2ae, 0x2c8, 0x2cd, 0x2e4)][_0xef89fc(-0x155, -0x69, -0xd5, -0xe2, -0x7a) + _0x18a2cc(0x232, 0x272, 0x284, 0x20f, 0x20c) + 't']]);
                                        continue;
                                    case '5':
                                        var us = await checkUsAdmin(message);
                                        continue;
                                    }
                                    break;
                                }
                            } else {
                                if (getlink06[_0x18a2cc(0x225, 0x2b4, 0x258, 0x28f, 0x27d)](message[_0x18a2cc(0x2a6, 0x331, 0x305, 0x2f2, 0x31e) + 'ge'])) {
                                    var QpcgHN = (_0x5e73b4(0x524, 0x45b, 0x4d6, 0x543, 0x469) + _0x18a2cc(0x2a0, 0x260, 0x2b1, 0x2dd, 0x270) + '2')[_0x18a2cc(0x291, 0x2b4, 0x2eb, 0x2a3, 0x365)]('|'), rzSBes = 0x1801 + -0x839 + -0x328 * 0x5;
                                    while (!![]) {
                                        switch (QpcgHN[rzSBes++]) {
                                        case '0':
                                            var us = await checkUsAdmin(message);
                                            continue;
                                        case '1':
                                            await message[_0xef89fc(-0x5c, -0x10a, -0x57, -0x92, -0x93) + 't'][_0x5e73b4(0x49f, 0x3f2, 0x466, 0x3fa, 0x4be) + _0x1c88a2(-0x29c, -0x22d, -0x2d8, -0x284, -0x21b) + 'e'](message[_0x18a2cc(0x27f, 0x2ab, 0x2bc, 0x2ea, 0x2d2)], antilink, MessageType[_0x5e73b4(0x4bc, 0x4b4, 0x48f, 0x419, 0x49f)], { 'quoted': message[_0x5aea50(0x46, 0x5a, 0x39, 0x16, 0x5e)] });
                                            continue;
                                        case '2':
                                            await message[_0x5aea50(0x9a, 0x83, 0x63, 0xa9, -0xe) + 't'][_0x1c88a2(-0x21d, -0x18f, -0x19d, -0x1db, -0x1eb) + _0x5e73b4(0x50f, 0x517, 0x4aa, 0x480, 0x442) + 'e'](message[_0xef89fc(-0xce, -0x76, -0xfa, -0xc8, -0xda)], [message[_0x18a2cc(0x261, 0x2c9, 0x2c8, 0x32a, 0x270)][_0x5e73b4(0x405, 0x417, 0x464, 0x43f, 0x3ea) + _0x1c88a2(-0x1f6, -0x236, -0x2a7, -0x262, -0x2dc) + 't']]);
                                            continue;
                                        case '3':
                                            if (!im)
                                                return;
                                            continue;
                                        case '4':
                                            if (us)
                                                return;
                                            continue;
                                        case '5':
                                            var im = await checkImAdmin(message);
                                            continue;
                                        }
                                        break;
                                    }
                                } else {
                                    if (getlink07[_0x18a2cc(0x28f, 0x27f, 0x258, 0x229, 0x224)](message[_0x1c88a2(-0x197, -0x16a, -0x24f, -0x1e1, -0x1ff) + 'ge'])) {
                                        var jiqtOC = (_0x1c88a2(-0x28e, -0x220, -0x2e8, -0x28c, -0x2d7) + _0xef89fc(-0x54, -0x29, -0xf5, -0xa2, -0x4a) + '4')[_0x18a2cc(0x278, 0x2e5, 0x2eb, 0x342, 0x2a0)]('|'), lJkKBF = -0x1cd1 + -0x2 * 0x7c7 + 0x2c5f;
                                        while (!![]) {
                                            switch (jiqtOC[lJkKBF++]) {
                                            case '0':
                                                var im = await checkImAdmin(message);
                                                continue;
                                            case '1':
                                                await message[_0x18a2cc(0x2c5, 0x2c8, 0x2f2, 0x28a, 0x2d2) + 't'][_0x5e73b4(0x3f0, 0x468, 0x466, 0x499, 0x3f2) + _0xef89fc(-0xc3, -0x167, -0xe4, -0x122, -0x196) + 'e'](message[_0x18a2cc(0x31d, 0x2fa, 0x2bc, 0x297, 0x31b)], _0x1c88a2(-0x2ce, -0x267, -0x1f1, -0x25b, -0x233) + _0x1c88a2(-0x19f, -0x204, -0x1f3, -0x1e5, -0x227) + _0x18a2cc(0x363, 0x33d, 0x2f6, 0x2e6, 0x33e) + _0x1c88a2(-0x1e1, -0x1db, -0x1aa, -0x21d, -0x24f) + _0x18a2cc(0x230, 0x2a4, 0x244, 0x2c0, 0x2af) + _0x18a2cc(0x225, 0x214, 0x233, 0x210, 0x214) + '.', MessageType[_0x5aea50(0xb8, -0xb, 0x3e, -0x2a, 0x54)], { 'quoted': message[_0x5aea50(0x6f, 0x5, 0x39, 0x61, 0xa2)] });
                                                continue;
                                            case '2':
                                                var us = await checkUsAdmin(message);
                                                continue;
                                            case '3':
                                                if (us)
                                                    return;
                                                continue;
                                            case '4':
                                                await message[_0x1c88a2(-0x1d5, -0x22b, -0x19b, -0x1f4, -0x23f) + 't'][_0x18a2cc(0x2ca, 0x2a0, 0x30b, 0x2e9, 0x300) + _0x5e73b4(0x445, 0x48e, 0x4aa, 0x457, 0x4b7) + 'e'](message[_0x5aea50(0x61, 0x6, 0x2d, 0x58, -0x26)], [message[_0x1c88a2(-0x1a4, -0x23b, -0x20e, -0x21e, -0x1f9)][_0x18a2cc(0x2de, 0x227, 0x2a2, 0x228, 0x274) + _0x5e73b4(0x4a8, 0x3f6, 0x446, 0x455, 0x494) + 't']]);
                                                continue;
                                            case '5':
                                                if (!im)
                                                    return;
                                                continue;
                                            }
                                            break;
                                        }
                                    } else {
                                        if (getlink08[_0x5aea50(-0x5e, -0x41, -0x37, -0x64, -0x9d)](message[_0x5aea50(0x3f, 0xe6, 0x76, 0x9f, 0xe) + 'ge'])) {
                                            var dHjAqr = (_0x18a2cc(0x26e, 0x299, 0x277, 0x2cb, 0x27d) + _0xef89fc(-0x45, -0xb6, -0x9d, -0x96, -0x102) + '3')[_0x18a2cc(0x31c, 0x2b7, 0x2eb, 0x365, 0x355)]('|'), UbzGAz = 0x1693 + 0x18a2 + -0x2f35;
                                            while (!![]) {
                                                switch (dHjAqr[UbzGAz++]) {
                                                case '0':
                                                    var us = await checkUsAdmin(message);
                                                    continue;
                                                case '1':
                                                    var im = await checkImAdmin(message);
                                                    continue;
                                                case '2':
                                                    if (us)
                                                        return;
                                                    continue;
                                                case '3':
                                                    await message[_0x5aea50(-0x18, 0x55, 0x63, -0x17, 0xa9) + 't'][_0x18a2cc(0x2d0, 0x2bd, 0x30b, 0x360, 0x360) + _0x5e73b4(0x499, 0x498, 0x4aa, 0x43f, 0x44c) + 'e'](message[_0x18a2cc(0x311, 0x25d, 0x2bc, 0x283, 0x2df)], [message[_0x18a2cc(0x2f8, 0x33b, 0x2c8, 0x2b6, 0x2d2)][_0xef89fc(-0x95, -0x70, -0xfd, -0xe2, -0x14a) + _0x1c88a2(-0x21f, -0x29e, -0x241, -0x262, -0x213) + 't']]);
                                                    continue;
                                                case '4':
                                                    await message[_0x18a2cc(0x355, 0x35c, 0x2f2, 0x27d, 0x2b8) + 't'][_0x18a2cc(0x29b, 0x31a, 0x2a4, 0x2ed, 0x273) + _0x18a2cc(0x1fc, 0x24b, 0x262, 0x293, 0x1e9) + 'e'](message[_0x5aea50(0x7, 0x14, 0x2d, 0x41, -0x12)], _0x18a2cc(0x306, 0x232, 0x28b, 0x245, 0x21d) + _0x1c88a2(-0x249, -0x19d, -0x1f7, -0x1e5, -0x216) + _0x5e73b4(0x45c, 0x45b, 0x4b8, 0x460, 0x450) + _0x18a2cc(0x27b, 0x27f, 0x2c9, 0x2bf, 0x2cb) + _0x5aea50(-0x33, -0xc6, -0x4b, -0x48, -0x6c) + _0x5aea50(-0xa2, -0x32, -0x5c, -0x76, -0x58) + '.', MessageType[_0x5e73b4(0x498, 0x446, 0x48f, 0x4fb, 0x438)], { 'quoted': message[_0xef89fc(-0x10c, -0xf4, -0x7a, -0xbc, -0x124)] });
                                                    continue;
                                                case '5':
                                                    if (!im)
                                                        return;
                                                    continue;
                                                }
                                                break;
                                            }
                                        } else {
                                            if (getlink09[_0x18a2cc(0x220, 0x293, 0x258, 0x200, 0x2b5)](message[_0x5aea50(0x9a, 0xb7, 0x76, 0x9c, 0x94) + 'ge'])) {
                                                var BtiDCB = (_0x5e73b4(0x4ee, 0x4e0, 0x489, 0x420, 0x4ac) + _0x5aea50(-0xd, -0x25, -0x4c, -0x40, -0x4f) + '5')[_0x1c88a2(-0x1fd, -0x1f9, -0x256, -0x1fb, -0x257)]('|'), PhfCAd = -0x89d * -0x1 + 0xc9 + -0x966;
                                                while (!![]) {
                                                    switch (BtiDCB[PhfCAd++]) {
                                                    case '0':
                                                        var im = await checkImAdmin(message);
                                                        continue;
                                                    case '1':
                                                        if (!im)
                                                            return;
                                                        continue;
                                                    case '2':
                                                        await message[_0x1c88a2(-0x189, -0x233, -0x19f, -0x1f4, -0x18c) + 't'][_0xef89fc(-0xcb, -0xf6, -0xfe, -0xe0, -0x114) + _0x5aea50(-0x44, -0x40, -0x2d, 0x35, -0x6b) + 'e'](message[_0xef89fc(-0x6c, -0x133, -0x103, -0xc8, -0x96)], _0x18a2cc(0x2a1, 0x233, 0x28b, 0x2ab, 0x27a) + _0x18a2cc(0x29e, 0x367, 0x301, 0x30a, 0x334) + _0x1c88a2(-0x196, -0x201, -0x248, -0x1f0, -0x194) + _0x18a2cc(0x2c4, 0x2ce, 0x2c9, 0x295, 0x27f) + _0xef89fc(-0x13e, -0x12b, -0x105, -0x140, -0x134) + _0xef89fc(-0x16a, -0x1cb, -0x12a, -0x151, -0x17d) + '.', MessageType[_0x18a2cc(0x32a, 0x334, 0x2cd, 0x2fa, 0x334)], { 'quoted': message[_0x1c88a2(-0x213, -0x1bf, -0x240, -0x21e, -0x1fe)] });
                                                        continue;
                                                    case '3':
                                                        if (us)
                                                            return;
                                                        continue;
                                                    case '4':
                                                        var us = await checkUsAdmin(message);
                                                        continue;
                                                    case '5':
                                                        await message[_0x1c88a2(-0x1dc, -0x198, -0x25a, -0x1f4, -0x267) + 't'][_0x5e73b4(0x4bb, 0x4cc, 0x4cd, 0x4dc, 0x50b) + _0x18a2cc(0x2a7, 0x290, 0x2e8, 0x2df, 0x314) + 'e'](message[_0x18a2cc(0x262, 0x2e3, 0x2bc, 0x2a7, 0x28b)], [message[_0xef89fc(-0xbf, -0x124, -0xeb, -0xbc, -0xd0)][_0x1c88a2(-0x1f7, -0x296, -0x234, -0x244, -0x24d) + _0x18a2cc(0x2f7, 0x234, 0x284, 0x2aa, 0x224) + 't']]);
                                                        continue;
                                                    }
                                                    break;
                                                }
                                            } else {
                                                if (getlink10[_0x1c88a2(-0x28c, -0x2ed, -0x280, -0x28e, -0x230)](message[_0x5e73b4(0x4c4, 0x4aa, 0x4c7, 0x4e7, 0x4fa) + 'ge'])) {
                                                    var IVlatJ = (_0x5e73b4(0x465, 0x441, 0x3f7, 0x473, 0x426) + _0x5aea50(0x73, 0xf1, 0x83, 0x98, 0xc4) + '5')[_0xef89fc(-0xbb, -0x104, -0x68, -0x99, -0x63)]('|'), rdhIQG = 0x437 + 0x2 * 0x7a2 + -0x137b;
                                                    while (!![]) {
                                                        switch (IVlatJ[rdhIQG++]) {
                                                        case '0':
                                                            var im = await checkImAdmin(message);
                                                            continue;
                                                        case '1':
                                                            if (us)
                                                                return;
                                                            continue;
                                                        case '2':
                                                            await message[_0xef89fc(-0x27, -0xb4, -0x65, -0x92, -0x2f) + 't'][_0xef89fc(-0x14a, -0xbf, -0x14e, -0xe0, -0xbd) + _0xef89fc(-0x16d, -0xbe, -0x105, -0x122, -0xef) + 'e'](message[_0x5e73b4(0x446, 0x432, 0x47e, 0x486, 0x46c)], _0x18a2cc(0x23a, 0x28e, 0x28b, 0x301, 0x2bb) + _0x1c88a2(-0x185, -0x236, -0x1ce, -0x1e5, -0x1bc) + _0x18a2cc(0x347, 0x2f6, 0x2f6, 0x315, 0x297) + _0x5e73b4(0x4a5, 0x4c8, 0x48b, 0x475, 0x47d) + _0x5e73b4(0x39b, 0x429, 0x406, 0x466, 0x444) + _0x5aea50(-0x4d, -0xbb, -0x5c, -0xc8, -0x48) + '.', MessageType[_0x1c88a2(-0x1cd, -0x1d9, -0x20c, -0x219, -0x1ee)], { 'quoted': message[_0x5e73b4(0x4c3, 0x4df, 0x48a, 0x4f1, 0x4fb)] });
                                                            continue;
                                                        case '3':
                                                            var us = await checkUsAdmin(message);
                                                            continue;
                                                        case '4':
                                                            if (!im)
                                                                return;
                                                            continue;
                                                        case '5':
                                                            await message[_0x1c88a2(-0x24b, -0x18e, -0x181, -0x1f4, -0x1d6) + 't'][_0x5e73b4(0x49e, 0x51e, 0x4cd, 0x466, 0x45c) + _0x5e73b4(0x4ee, 0x501, 0x4aa, 0x485, 0x485) + 'e'](message[_0xef89fc(-0xfb, -0xfa, -0x64, -0xc8, -0xcc)], [message[_0x18a2cc(0x2ef, 0x292, 0x2c8, 0x306, 0x2c4)][_0x1c88a2(-0x2a7, -0x1f6, -0x285, -0x244, -0x1fb) + _0x5aea50(-0x2f, -0x1a, -0xb, 0x6d, -0x49) + 't']]);
                                                            continue;
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function _0x91ec46(_0x5bbb4c) {
        function _0x2da25d(_0x5f32f3, _0x53a1d4, _0xe1106d, _0x24267c, _0x5247d0) {
            return _0x1c88a2(_0x24267c, _0x53a1d4 - 0x10c, _0xe1106d - 0x1c8, _0x5f32f3 - 0x600, _0x5247d0 - 0x2c);
        }
        function _0x237333(_0x482b44, _0x45deab, _0x365e4c, _0x390463, _0x55feb4) {
            return _0x1c88a2(_0x482b44, _0x45deab - 0x1e2, _0x365e4c - 0x9b, _0x55feb4 - 0x632, _0x55feb4 - 0x46);
        }
        function _0x4e8895(_0x240efd, _0xc31ea4, _0x5025a9, _0x2f0b53, _0x4a420d) {
            return _0x1c88a2(_0x5025a9, _0xc31ea4 - 0x1cc, _0x5025a9 - 0x12e, _0x4a420d - 0x34, _0x4a420d - 0x1e5);
        }
        function _0xb96669(_0xa32cb3, _0x5adb2a, _0x29f185, _0x98f537, _0x99fe08) {
            return _0x1c88a2(_0x99fe08, _0x5adb2a - 0x1, _0x29f185 - 0x73, _0xa32cb3 - 0x255, _0x99fe08 - 0xc9);
        }
        var _0x4081fb = {
            'ksyPk': _0x2da25d(0x371, 0x34f, 0x3c7, 0x3ce, 0x39f) + _0x2da25d(0x42d, 0x3e1, 0x43b, 0x3f6, 0x3ff) + _0xb96669(-0x19, 0x43, -0xc, -0x5, -0x92) + ')',
            'nTbkm': _0x237333(0x49b, 0x43b, 0x3ec, 0x486, 0x44e) + _0x4e8895(-0x1ee, -0x14a, -0x21b, -0x13a, -0x1ab) + _0x237333(0x3ef, 0x3d3, 0x361, 0x372, 0x3ab) + _0x2da25d(0x3e5, 0x380, 0x410, 0x3d1, 0x457) + _0xb96669(0x7f, 0x1e, 0x93, 0x45, 0x41) + _0x2da25d(0x381, 0x38b, 0x329, 0x3bc, 0x3e7) + _0x2da25d(0x3bf, 0x35e, 0x38a, 0x419, 0x3f6),
            'OLTOn': function (_0x9da12b, _0x733420) {
                return _0x9da12b(_0x733420);
            },
            'XCfdE': _0xb96669(0x2c, -0x17, 0x6c, -0x4d, 0x28),
            'VYGPD': function (_0x67641f, _0x12a6f2) {
                return _0x67641f + _0x12a6f2;
            },
            'YUphY': _0x4e8895(-0x249, -0x1f7, -0x200, -0x195, -0x1f9),
            'SwMBO': function (_0xa85415, _0x33ebcf) {
                return _0xa85415 + _0x33ebcf;
            },
            'aYEMn': _0x4e8895(-0x294, -0x1cf, -0x23c, -0x1c0, -0x238),
            'IzgRW': function (_0x5694d0, _0x3c3eee) {
                return _0x5694d0(_0x3c3eee);
            },
            'OrWGL': function (_0x31cde9) {
                return _0x31cde9();
            },
            'lXZai': function (_0x442f7e, _0x47d4a4, _0x15d8db) {
                return _0x442f7e(_0x47d4a4, _0x15d8db);
            },
            'xcTHI': function (_0x1dda3d, _0x7f6fb3) {
                return _0x1dda3d !== _0x7f6fb3;
            },
            'Htyxk': _0x4e8895(-0x204, -0x23f, -0x203, -0x1cf, -0x1e4),
            'dmcUg': _0xb96669(0x45, -0x2e, -0x1d, -0xf, 0xa4),
            'VuLTS': _0x237333(0x367, 0x44f, 0x3f4, 0x3ef, 0x3dc),
            'bskMf': _0x2da25d(0x3a3, 0x33e, 0x3f2, 0x372, 0x374),
            'BoKEu': function (_0x4f3665, _0x12b937) {
                return _0x4f3665 === _0x12b937;
            },
            'pdYof': _0x2da25d(0x393, 0x357, 0x345, 0x3fd, 0x3b2),
            'STFYn': function (_0x5322ea, _0x31b7e1) {
                return _0x5322ea === _0x31b7e1;
            },
            'mKngG': _0x2da25d(0x3eb, 0x41d, 0x38d, 0x3fe, 0x417) + 'g',
            'QqiPW': _0xb96669(-0x7, -0x54, -0x80, -0x6c, -0x7e),
            'EVBFX': _0x4d4b25(0xf5, 0x4b, 0x8e, 0xb2, 0x43),
            'XqIxR': _0x4e8895(-0x1b9, -0x14e, -0x15c, -0x1a2, -0x1ae) + _0x4d4b25(0x3e, 0x59, 0xeb, 0x75, 0x12) + _0x4d4b25(-0xa8, -0x33, 0x17, -0x31, 0x2d),
            'IBhyI': _0xb96669(0x2e, 0x48, -0x1d, -0x1d, 0x98) + 'er',
            'aVxLZ': function (_0x129cbc, _0x30d6a5) {
                return _0x129cbc === _0x30d6a5;
            },
            'QvZzk': _0x4d4b25(-0x16, 0x6c, 0x53, 0x25, 0x71),
            'tLOAq': _0x4e8895(-0x24f, -0x258, -0x1f1, -0x22e, -0x21a),
            'AUMdk': function (_0x3b38ef, _0x5f1c8b) {
                return _0x3b38ef !== _0x5f1c8b;
            },
            'qqMIv': function (_0x8be6b1, _0x1966d3) {
                return _0x8be6b1 + _0x1966d3;
            },
            'bmFiW': function (_0x109968, _0x13f54c) {
                return _0x109968 / _0x13f54c;
            },
            'UxkNp': _0x237333(0x42f, 0x480, 0x472, 0x407, 0x426) + 'h',
            'lltfo': function (_0x200150, _0x31d555) {
                return _0x200150 % _0x31d555;
            },
            'PIyxM': _0x4d4b25(0xee, 0x35, 0x39, 0x7f, 0xc1),
            'mnZwa': _0x4d4b25(0xc3, 0x8d, 0xcf, 0x68, 0x14),
            'LOrCJ': _0x4e8895(-0x224, -0x1f8, -0x1a6, -0x273, -0x21e),
            'ywQVm': _0xb96669(0x7d, 0x32, 0xd0, 0x9f, 0x39) + 'n',
            'MDkXs': _0x237333(0x412, 0x418, 0x3df, 0x453, 0x438),
            'QINpl': _0x4e8895(-0x1c2, -0x20d, -0x13e, -0x1f8, -0x1a9),
            'AoaWE': _0x4d4b25(0x5a, 0x6d, 0x11, 0xf, -0x64) + _0x4d4b25(0x2c, 0xd2, 0x40, 0x7e, 0x8b) + 't',
            'jtTkE': function (_0x5c5da2, _0x12c346) {
                return _0x5c5da2 === _0x12c346;
            },
            'GXKyJ': _0x4e8895(-0x216, -0x1c3, -0x25f, -0x23e, -0x215),
            'DdUkq': _0x2da25d(0x3ce, 0x3bf, 0x417, 0x3a4, 0x395),
            'gsfTM': function (_0x2b82a0, _0x4a8e4f) {
                return _0x2b82a0 === _0x4a8e4f;
            },
            'FcRoh': _0x2da25d(0x3a0, 0x411, 0x35f, 0x37d, 0x383),
            'DJuSg': _0x4e8895(-0x1f0, -0x223, -0x2ae, -0x278, -0x24d),
            'JLHkd': function (_0x178538, _0x3e8559) {
                return _0x178538 === _0x3e8559;
            },
            'vSgYs': _0x4e8895(-0x239, -0x20e, -0x2c4, -0x221, -0x25c),
            'bcxxk': function (_0x39c7d3, _0x194daa) {
                return _0x39c7d3(_0x194daa);
            }
        };
        function _0x48953e(_0x345b3a) {
            var _0x31e7c7 = {
                'CPnxY': function (_0x25e265, _0x2ec99d) {
                    function _0x8c1059(_0x26485d, _0x523b37, _0x4448ca, _0x47e453, _0x20e3cb) {
                        return _0x22da(_0x4448ca - -0x1da, _0x26485d);
                    }
                    return _0x4081fb[_0x8c1059(-0x21, -0x17, -0x30, -0x65, -0x94)](_0x25e265, _0x2ec99d);
                },
                'kyCgL': _0x4081fb[_0x1e1742(0x35a, 0x35a, 0x352, 0x38f, 0x38b)],
                'YGKaU': _0x4081fb[_0x34d4e7(0x1da, 0x228, 0x209, 0x208, 0x25f)]
            };
            function _0x1e1742(_0x2b79bb, _0x2785ec, _0x4ae9d3, _0x4201ab, _0x3c03f5) {
                return _0x4e8895(_0x2b79bb - 0x38, _0x2785ec - 0xc2, _0x4201ab, _0x4201ab - 0x2d, _0x3c03f5 - 0x57a);
            }
            function _0x34d4e7(_0x4baa72, _0x1db3f0, _0x3c4246, _0x2fced8, _0x4a9990) {
                return _0xb96669(_0x2fced8 - 0x1eb, _0x1db3f0 - 0x10e, _0x3c4246 - 0x1bb, _0x2fced8 - 0x111, _0x4baa72);
            }
            function _0x3d0a4f(_0x1a9357, _0x1c8cc3, _0xa87cd2, _0x16e490, _0x8e189e) {
                return _0xb96669(_0x16e490 - 0x41e, _0x1c8cc3 - 0xa1, _0xa87cd2 - 0xc4, _0x16e490 - 0x189, _0x1c8cc3);
            }
            function _0x475f30(_0x495da8, _0x4c32c8, _0x542216, _0x56f648, _0x2e4fc3) {
                return _0xb96669(_0x2e4fc3 - 0x36, _0x4c32c8 - 0x19f, _0x542216 - 0x51, _0x56f648 - 0x41, _0x542216);
            }
            function _0x32d27d(_0x364666, _0x25d24e, _0x47c030, _0x2a3558, _0x2e92af) {
                return _0x4d4b25(_0x364666 - 0x9e, _0x25d24e - 0x7a, _0x47c030 - 0x1bd, _0x25d24e - -0x3, _0x2a3558);
            }
            if (_0x4081fb[_0x1e1742(0x314, 0x3e0, 0x3d1, 0x3f1, 0x388)](_0x4081fb[_0x32d27d(0xd2, 0x68, 0x8d, 0x20, 0x1d)], _0x4081fb[_0x32d27d(-0x7, 0x68, 0x51, 0xf, 0xc2)])) {
                if (_0x4081fb[_0x34d4e7(0x206, 0x2b1, 0x2cc, 0x256, 0x1e6)](typeof _0x345b3a, _0x4081fb[_0x475f30(0xf7, 0x50, 0x8b, 0x4a, 0xa3)])) {
                    if (_0x4081fb[_0x475f30(0x31, 0xc7, 0x101, 0x53, 0xa1)](_0x4081fb[_0x475f30(0x22, -0x59, 0x33, -0x5c, -0x1a)], _0x4081fb[_0x3d0a4f(0x468, 0x427, 0x4a5, 0x47e, 0x496)])) {
                        var _0x339265 = _0x5b6e3c[_0x475f30(-0x23, -0x2f, 0x36, -0x42, 0x1b)](_0x41ce8e, arguments);
                        return _0x3b55ce = null, _0x339265;
                    } else
                        return function (_0x397095) {
                        }[_0x34d4e7(0x15d, 0x1df, 0x17d, 0x1c4, 0x1ad) + _0x32d27d(0x2d, 0x82, 0xdb, 0xc5, 0x2f) + 'r'](_0x4081fb[_0x1e1742(0x35f, 0x353, 0x31e, 0x3a4, 0x361)])[_0x1e1742(0x3a8, 0x33c, 0x2c3, 0x2ef, 0x33e)](_0x4081fb[_0x32d27d(0x5, 0x78, 0xb2, 0x9e, 0x32)]);
                } else {
                    if (_0x4081fb[_0x34d4e7(0x203, 0x225, 0x183, 0x1c5, 0x1cd)](_0x4081fb[_0x32d27d(0x5c, 0xc0, 0xdd, 0x65, 0x9f)], _0x4081fb[_0x34d4e7(0x1c0, 0x194, 0x1b6, 0x182, 0x1f7)]))
                        return;
                    else {
                        if (_0x4081fb[_0x3d0a4f(0x3fb, 0x44e, 0x3a5, 0x41c, 0x467)](_0x4081fb[_0x34d4e7(0x1fd, 0x203, 0x21a, 0x271, 0x256)]('', _0x4081fb[_0x3d0a4f(0x46b, 0x430, 0x4d3, 0x49c, 0x4d7)](_0x345b3a, _0x345b3a))[_0x4081fb[_0x475f30(0xe1, 0x32, 0x3a, 0x17, 0x8b)]], -0x469 * -0x1 + -0x2 * 0x1333 + 0x21fe) || _0x4081fb[_0x1e1742(0x386, 0x2de, 0x375, 0x352, 0x333)](_0x4081fb[_0x34d4e7(0x1bc, 0x148, 0x1eb, 0x1b5, 0x16d)](_0x345b3a, -0x1128 + 0xbad + -0x58f * -0x1), -0x31d * -0x2 + 0xcaf * -0x1 + -0x57 * -0x13))
                            _0x4081fb[_0x3d0a4f(0x45c, 0x424, 0x446, 0x3f8, 0x3d7)](_0x4081fb[_0x32d27d(0x10, 0x3a, 0x9f, 0x7f, 0x45)], _0x4081fb[_0x475f30(-0x12, 0xb5, 0x6c, -0x36, 0x3c)]) ? function () {
                                var _0x1103ff = {
                                    'JwlHT': _0x4081fb[_0x3b2eaa(-0x1b9, -0x1ce, -0x1e0, -0x186, -0x185)],
                                    'qDKGy': _0x4081fb[_0x3b2eaa(-0x22f, -0x245, -0x1bd, -0x203, -0x1df)],
                                    'NZQcG': function (_0x5ae7c7, _0x5925a7) {
                                        function _0x9186ba(_0x1d81ce, _0x37055f, _0x26a0db, _0x4045db, _0xeaa068) {
                                            return _0x3b2eaa(_0x26a0db - 0x489, _0x37055f - 0x8b, _0x26a0db - 0x58, _0x37055f, _0xeaa068 - 0xff);
                                        }
                                        return _0x4081fb[_0x9186ba(0x230, 0x265, 0x202, 0x220, 0x1a3)](_0x5ae7c7, _0x5925a7);
                                    },
                                    'pdmMo': _0x4081fb[_0x3b2eaa(-0x241, -0x25e, -0x2ba, -0x257, -0x21d)],
                                    'OUMRs': function (_0x58c5e0, _0x5f5e02) {
                                        function _0xd0566f(_0x4b0bb1, _0x2c4db6, _0x25c710, _0x3497d5, _0x157c99) {
                                            return _0x7dcc0(_0x25c710 - -0x29b, _0x2c4db6 - 0x96, _0x25c710 - 0x1a1, _0x3497d5 - 0x9c, _0x4b0bb1);
                                        }
                                        return _0x4081fb[_0xd0566f(0x180, 0x128, 0x106, 0xad, 0xfd)](_0x58c5e0, _0x5f5e02);
                                    },
                                    'aojaA': _0x4081fb[_0x17c875(0x274, 0x2fd, 0x28d, 0x2bf, 0x2da)],
                                    'kXQVs': function (_0x12a447, _0x547fdc) {
                                        function _0x5ba4f4(_0x38b978, _0x5e4f53, _0x20de27, _0x15787d, _0x146dbc) {
                                            return _0x17c875(_0x38b978 - 0x56, _0x5e4f53, _0x20de27 - 0xb0, _0x15787d - 0x92, _0x146dbc - 0x8e);
                                        }
                                        return _0x4081fb[_0x5ba4f4(0x365, 0x2f6, 0x395, 0x3bb, 0x372)](_0x12a447, _0x547fdc);
                                    },
                                    'xVWjo': _0x4081fb[_0x3b2eaa(-0x288, -0x2d4, -0x222, -0x250, -0x2e8)],
                                    'HGWcF': function (_0x4958a8, _0x3cda38) {
                                        function _0x35c2a5(_0x100fac, _0x276825, _0x440599, _0x778c45, _0x59f050) {
                                            return _0x3fdde5(_0x100fac, _0x276825 - 0x6b, _0x440599 - 0x17c, _0x778c45 - 0x28, _0x59f050 - 0x14a);
                                        }
                                        return _0x4081fb[_0x35c2a5(-0x51, -0x46, -0x44, -0x3c, 0x3e)](_0x4958a8, _0x3cda38);
                                    },
                                    'fQmLF': function (_0x1bf102) {
                                        function _0x97c9fe(_0x2ae952, _0xfb01aa, _0x224aa5, _0x6d2caf, _0x41e2e0) {
                                            return _0x7dcc0(_0x2ae952 - -0x5f2, _0xfb01aa - 0x1af, _0x224aa5 - 0x11a, _0x6d2caf - 0x62, _0x41e2e0);
                                        }
                                        return _0x4081fb[_0x97c9fe(-0x2c2, -0x26b, -0x2be, -0x32c, -0x283)](_0x1bf102);
                                    },
                                    'VEUgn': function (_0x22061e, _0x509e4, _0x202511) {
                                        function _0x58ed14(_0x4e85c9, _0x3d208b, _0x432816, _0x8fff1d, _0x1343df) {
                                            return _0x17c875(_0x4e85c9 - 0x1e4, _0x1343df, _0x432816 - 0x30, _0x8fff1d - 0x1cf, _0x4e85c9 - -0xde);
                                        }
                                        return _0x4081fb[_0x58ed14(0x1ed, 0x19a, 0x252, 0x20a, 0x219)](_0x22061e, _0x509e4, _0x202511);
                                    }
                                };
                                function _0x5d1e7e(_0x18abf1, _0x53989c, _0x3773e5, _0x504189, _0x20bf43) {
                                    return _0x475f30(_0x18abf1 - 0x15a, _0x53989c - 0x121, _0x53989c, _0x504189 - 0x140, _0x3773e5 - 0x476);
                                }
                                function _0x3b2eaa(_0x29b5cf, _0x453388, _0x375dcb, _0x395638, _0x5716fe) {
                                    return _0x3d0a4f(_0x29b5cf - 0xab, _0x395638, _0x375dcb - 0x62, _0x29b5cf - -0x65b, _0x5716fe - 0x71);
                                }
                                function _0x17c875(_0x124502, _0x70d8a2, _0x28651b, _0x4cad96, _0x539923) {
                                    return _0x3d0a4f(_0x124502 - 0x110, _0x70d8a2, _0x28651b - 0xc1, _0x539923 - -0x1ac, _0x539923 - 0x44);
                                }
                                function _0x3fdde5(_0x39d6ca, _0x23816b, _0x3d20f1, _0x2520ff, _0x40f52d) {
                                    return _0x34d4e7(_0x39d6ca, _0x23816b - 0x1b9, _0x3d20f1 - 0x140, _0x2520ff - -0x20c, _0x40f52d - 0xb);
                                }
                                function _0x7dcc0(_0x51f54a, _0x19678c, _0x29c718, _0x45337d, _0x1618b7) {
                                    return _0x34d4e7(_0x1618b7, _0x19678c - 0x60, _0x29c718 - 0x87, _0x51f54a - 0x1a9, _0x1618b7 - 0x9);
                                }
                                if (_0x4081fb[_0x17c875(0x262, 0x2bc, 0x340, 0x335, 0x2c5)](_0x4081fb[_0x7dcc0(0x3b6, 0x3eb, 0x399, 0x34f, 0x363)], _0x4081fb[_0x7dcc0(0x3e8, 0x3e8, 0x3a5, 0x38c, 0x3b4)]))
                                    return !![];
                                else
                                    _0x1103ff[_0x7dcc0(0x3bd, 0x362, 0x3c8, 0x36d, 0x377)](_0x2ae222, this, function () {
                                        function _0x4b0871(_0xd62117, _0x335896, _0x57b7b3, _0x1925f3, _0x22bea8) {
                                            return _0x3b2eaa(_0x22bea8 - 0x334, _0x335896 - 0xb2, _0x57b7b3 - 0x1e, _0x335896, _0x22bea8 - 0x127);
                                        }
                                        function _0x2a2ea3(_0x341916, _0xe06898, _0x33f51f, _0xbdfa8e, _0x5babd0) {
                                            return _0x7dcc0(_0x341916 - -0x4e6, _0xe06898 - 0xd6, _0x33f51f - 0xcd, _0xbdfa8e - 0x189, _0xe06898);
                                        }
                                        var _0x581707 = new _0x4c3a53(_0x1103ff[_0x4b0871(0xf2, 0x10c, 0x40, 0x94, 0x9e)]);
                                        function _0x135a1a(_0x53b604, _0xe93935, _0x4d05d6, _0xc09eec, _0x236024) {
                                            return _0x3b2eaa(_0x4d05d6 - 0x3c7, _0xe93935 - 0xe6, _0x4d05d6 - 0x1a5, _0x53b604, _0x236024 - 0x18f);
                                        }
                                        var _0x441b52 = new _0x5c3c42(_0x1103ff[_0x2a2ea3(-0x170, -0x12f, -0x1ad, -0x1b4, -0x198)], 'i');
                                        function _0x11f471(_0x13c2aa, _0x53c305, _0x45652f, _0x10ba93, _0x295d85) {
                                            return _0x5d1e7e(_0x13c2aa - 0x2a, _0x13c2aa, _0x53c305 - 0x50, _0x10ba93 - 0xeb, _0x295d85 - 0xb0);
                                        }
                                        function _0x3175e7(_0x29ecd6, _0xd61b9c, _0x16b9c4, _0x618ba5, _0x352c96) {
                                            return _0x5d1e7e(_0x29ecd6 - 0x1d7, _0x618ba5, _0x352c96 - -0x504, _0x618ba5 - 0x154, _0x352c96 - 0x156);
                                        }
                                        var _0x38bdc0 = _0x1103ff[_0x4b0871(0xbb, 0xf6, 0x65, 0x6e, 0xb9)](_0x568569, _0x1103ff[_0x4b0871(0x95, 0xa3, 0x173, 0xf2, 0xfc)]);
                                        !_0x581707[_0x2a2ea3(-0x18b, -0x1a3, -0x18e, -0x1ce, -0x195)](_0x1103ff[_0x3175e7(0x26, 0x18, -0x1b, 0x86, 0x30)](_0x38bdc0, _0x1103ff[_0x135a1a(0x215, 0x1e3, 0x20f, 0x1ac, 0x282)])) || !_0x441b52[_0x4b0871(0xf8, 0x80, 0x11b, 0xa9, 0xbe)](_0x1103ff[_0x4b0871(0x74, 0xcb, 0x99, 0x6e, 0xb5)](_0x38bdc0, _0x1103ff[_0x135a1a(0x244, 0x25f, 0x1ff, 0x1e6, 0x210)])) ? _0x1103ff[_0x4b0871(0xc0, 0x143, 0xd4, 0x12e, 0x109)](_0x38bdc0, '0') : _0x1103ff[_0x3175e7(-0x37, -0xdc, -0xb4, -0x2, -0x61)](_0x1227ed);
                                    })();
                            }[_0x1e1742(0x331, 0x3aa, 0x2d1, 0x2b6, 0x332) + _0x3d0a4f(0x49a, 0x4b2, 0x4a6, 0x46c, 0x44e) + 'r'](_0x4081fb[_0x32d27d(0x72, 0xba, 0xa9, 0x5f, 0x88)](_0x4081fb[_0x475f30(-0x4, -0x31, -0x37, 0x28, 0x21)], _0x4081fb[_0x3d0a4f(0x417, 0x47c, 0x430, 0x420, 0x3c9)]))[_0x34d4e7(0x1a5, 0x274, 0x225, 0x200, 0x215)](_0x4081fb[_0x1e1742(0x2f1, 0x37c, 0x3ab, 0x382, 0x330)]) : _0x4081fb[_0x32d27d(-0x56, -0xf, 0x19, 0x2f, 0x6c)](_0x5389f2, '0');
                        else {
                            if (_0x4081fb[_0x32d27d(0x7a, 0x32, -0x2e, 0x6c, 0xd)](_0x4081fb[_0x32d27d(0x7d, 0x4f, 0x6d, 0x8f, 0x22)], _0x4081fb[_0x32d27d(0x11, -0x8, 0xd, 0x1, 0x41)]))
                                (function () {
                                    function _0x55f99a(_0xfc707d, _0x2bd425, _0x1c4372, _0x3d5d83, _0x26dba2) {
                                        return _0x475f30(_0xfc707d - 0xf1, _0x2bd425 - 0x1e6, _0x3d5d83, _0x3d5d83 - 0x4, _0x2bd425 - -0x23e);
                                    }
                                    function _0x1dd10f(_0x469f46, _0x5b26b3, _0x40985b, _0x34e748, _0x190c97) {
                                        return _0x32d27d(_0x469f46 - 0x8a, _0x40985b - 0x292, _0x40985b - 0x147, _0x5b26b3, _0x190c97 - 0x87);
                                    }
                                    function _0x112a39(_0x319fcf, _0x511c31, _0x27f2a3, _0xcaa1d6, _0x9977d9) {
                                        return _0x34d4e7(_0x9977d9, _0x511c31 - 0xae, _0x27f2a3 - 0x8f, _0x27f2a3 - 0x2cc, _0x9977d9 - 0x189);
                                    }
                                    if (_0x31e7c7[_0x1dd10f(0x314, 0x2cf, 0x2a6, 0x238, 0x2e5)](_0x31e7c7[_0x1dd10f(0x319, 0x312, 0x309, 0x34b, 0x298)], _0x31e7c7[_0x55f99a(-0x226, -0x23c, -0x260, -0x1ff, -0x24b)]))
                                        return ![];
                                    else
                                        return;
                                }[_0x475f30(-0x1e, 0x8a, 0x59, -0x3, 0xf) + _0x32d27d(0x8, 0x82, 0xab, 0xc3, 0x1e) + 'r'](_0x4081fb[_0x1e1742(0x3c6, 0x424, 0x408, 0x424, 0x3df)](_0x4081fb[_0x475f30(0x2b, 0x6c, 0x29, 0x6e, 0x21)], _0x4081fb[_0x34d4e7(0x1db, 0x259, 0x1cc, 0x1ed, 0x19f)]))[_0x3d0a4f(0x433, 0x408, 0x459, 0x403, 0x45f)](_0x4081fb[_0x32d27d(0x44, -0x27, -0x78, 0x4a, -0x31)]));
                            else
                                return !![];
                        }
                    }
                }
                _0x4081fb[_0x34d4e7(0x17a, 0x16a, 0x202, 0x1a8, 0x20c)](_0x48953e, ++_0x345b3a);
            } else
                return _0x3f9d68;
        }
        function _0x4d4b25(_0x58695d, _0x4b0cf9, _0xc7df2d, _0xc81f03, _0x6e525b) {
            return _0x5aea50(_0x58695d - 0x115, _0x4b0cf9 - 0x9e, _0xc81f03 - 0x35, _0xc81f03 - 0x11, _0x6e525b);
        }
        try {
            if (_0x4081fb[_0x2da25d(0x395, 0x3e4, 0x3db, 0x353, 0x3b1)](_0x4081fb[_0x237333(0x3a9, 0x402, 0x400, 0x3cf, 0x398)], _0x4081fb[_0xb96669(0x87, 0xa9, 0xb7, 0x56, 0xae)]))
                _0x4081fb[_0x4e8895(-0x2bc, -0x274, -0x2bc, -0x217, -0x285)](_0x5ea2e7);
            else {
                if (_0x5bbb4c) {
                    if (_0x4081fb[_0x4d4b25(0x98, 0xa5, 0x11f, 0xb0, 0x111)](_0x4081fb[_0x4d4b25(-0x2c, 0xa, -0x1, 0x2b, -0x1e)], _0x4081fb[_0xb96669(0x9, -0xb, 0xe, 0x23, -0x51)]))
                        _0x4081fb[_0x2da25d(0x368, 0x31d, 0x374, 0x345, 0x393)](_0x5985cd, -0xb2a * 0x1 + -0x3 * -0x4c7 + -0x1 * 0x32b);
                    else
                        return _0x48953e;
                } else
                    _0x4081fb[_0x237333(0x402, 0x37e, 0x3d9, 0x41d, 0x3b8)](_0x4081fb[_0xb96669(-0x3d, 0xc, -0x79, -0x5b, -0x72)], _0x4081fb[_0xb96669(-0x3d, 0x1f, -0xab, -0x28, -0x58)]) ? _0x4081fb[_0x2da25d(0x40d, 0x465, 0x44f, 0x408, 0x441)](_0x48953e, 0x2b3 + 0x5 * 0x416 + -0x1721) : function () {
                        return ![];
                    }[_0x237333(0x3c0, 0x3ea, 0x3d8, 0x406, 0x3b6) + _0x4d4b25(0xf9, 0x91, 0xb0, 0x85, 0xcf) + 'r'](_0x4081fb[_0x4e8895(-0x1f8, -0x1f1, -0x19d, -0x1c8, -0x19b)](_0x4081fb[_0x2da25d(0x396, 0x3b4, 0x355, 0x3ed, 0x378)], _0x4081fb[_0xb96669(0x2, -0x18, 0x2f, 0x53, -0x16)]))[_0x4e8895(-0x2a5, -0x25f, -0x284, -0x1e1, -0x23c)](_0x4081fb[_0x237333(0x32f, 0x368, 0x367, 0x3d0, 0x382)]);
            }
        } catch (_0x1bdeeb) {
        }
    }
}))