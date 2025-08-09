import { getClientInfo } from "../../CommonExpose/clientInfo.js";

const StartFunc = async ({ inFrom, inToMessage }) => {
    const LocalClientInfo = getClientInfo();

    LocalClientInfo.sendMessage(inFrom, inToMessage).then(PromiseData => {
    });
};

export { StartFunc };