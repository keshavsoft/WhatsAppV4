import { StartFunc as StartFuncChangeName } from "./ChangeName.js";
import { StartFunc as StartFuncFromPeer } from "./FromPeer.js";
import { StartFunc as StartFuncSendMessage } from "./SendMessage.js";
import { StartFunc as StartFuncSendMessageToAll } from "./SendMessageToAll.js";
import { StartFunc as StartFuncMyIpAddress } from "./MyIpAddress.js";
import { StartFunc as StartFuncMyLocation } from "./MyLocation.js";
import { StartFunc as checkUser } from "./checkUser.js";
import { StartFunc as myChat } from "./myChat.js";
import { StartFunc as wASend } from "./wASend.js";
import { StartFunc as wASendMulti } from "./wASendMulti.js";

let StartFunc = ({ inDataAsJson, inws, inClients, inWss, inChatLog }) => {
    let LocalDataAsJson = inDataAsJson;

    if ("Type" in LocalDataAsJson) {
        if (LocalDataAsJson.Type === "FromPeer") {
            StartFuncFromPeer({ inDataAsJson: LocalDataAsJson, inws: inws, inClients: inClients });
        };

        if (LocalDataAsJson.Type === "ChangeName") {
            StartFuncChangeName({ inDataAsJson: LocalDataAsJson, inws: inws, inClients: inClients, inWss });
        };

        if (LocalDataAsJson.Type === "sendMessage") {
            StartFuncSendMessage({ inDataToClientAsJson: LocalDataAsJson, inws: inws, inClients: inClients });
        };

        if (LocalDataAsJson.Type === "sendMessageToAll") {
            StartFuncSendMessageToAll({ inDataToClientAsJson: LocalDataAsJson, inws, inClients, inWss });
        };

        if (LocalDataAsJson.Type === "myIpAddress") {
            StartFuncMyIpAddress({ inDataAsJson: LocalDataAsJson, inws, inClients });
        };

        if (LocalDataAsJson.Type === "myLocation") {
            StartFuncMyLocation({ inDataAsJson: LocalDataAsJson, inws, inClients });
        };

        if (LocalDataAsJson.Type === "checkUser") {
            checkUser({ inDataToClientAsJson: LocalDataAsJson, inws, inClients, inWss });
        };

        if (LocalDataAsJson.Type === "myChat") {
            myChat({ inDataToClientAsJson: LocalDataAsJson, inws: inws, inClients: inClients, inChatLog });
        };

        if (LocalDataAsJson.Type === "WASend") {
            wASend({
                inws,
                inDataAsJson: LocalDataAsJson
            });
        };

        if (LocalDataAsJson.Type === "WASendMulti") {
            wASendMulti({
                inws,
                inDataAsJson: LocalDataAsJson
            });
        };
    };
};

export { StartFunc };