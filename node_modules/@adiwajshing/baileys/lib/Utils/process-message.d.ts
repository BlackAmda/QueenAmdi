import { AxiosRequestConfig } from 'axios';
import type { Logger } from 'pino';
import { proto } from '../../WAProto';
import { AuthenticationCreds, BaileysEventEmitter, SignalKeyStoreWithTransaction } from '../Types';
declare type ProcessMessageContext = {
    shouldProcessHistoryMsg: boolean;
    creds: AuthenticationCreds;
    keyStore: SignalKeyStoreWithTransaction;
    ev: BaileysEventEmitter;
    logger?: Logger;
    options: AxiosRequestConfig<any>;
};
/** Cleans a received message to further processing */
export declare const cleanMessage: (message: proto.IWebMessageInfo, meId: string) => void;
export declare const isRealMessage: (message: proto.IWebMessageInfo, meId: string) => boolean | undefined;
export declare const shouldIncrementChatUnread: (message: proto.IWebMessageInfo) => boolean;
/**
 * Get the ID of the chat from the given key.
 * Typically -- that'll be the remoteJid, but for broadcasts, it'll be the participant
 */
export declare const getChatId: ({ remoteJid, participant, fromMe }: proto.IMessageKey) => string;
declare const processMessage: (message: proto.IWebMessageInfo, { shouldProcessHistoryMsg, ev, creds, keyStore, logger, options }: ProcessMessageContext) => Promise<void>;
export default processMessage;
