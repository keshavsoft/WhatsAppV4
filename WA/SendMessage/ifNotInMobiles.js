import Whatsapp from 'whatsapp-web.js';
const { MessageMedia } = Whatsapp;

import { getClientInfo } from "../../CommonExpose/clientInfo.js";

const StartFunc = async msg => {
    if (msg.body === "ping") {
        msg.reply('pong');
    };

    if (msg.body === "hi") {
        msg.reply('Greetings from KeshavSoft');
    };

    if (msg.body === "Button") {
        const LocalClientInfo = getClientInfo();
        // console.log("msg.from : ", msg.from);

        LocalClientInfo.sendMessage(msg.from, "Send Button").then(PromiseData => {
        });
        // msg.send('send button');
    };

    if (msg.body === "SendMedia") {
        const media = MessageMedia.fromFilePath('./WA/path/to/Keshav.png');
        await msg.reply(media);
    };

    if (msg.body === "SendFromUrl") {
        const LocalMediaUrl = "https://washtex5.keshavsoft.com/assets/image%20(1)-Bo3S5UVn.png";

        const media = await MessageMedia.fromUrl(LocalMediaUrl);
        await msg.reply(media);
    };
};

export { StartFunc };