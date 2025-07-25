import { StartFunc as sendMessage } from "./sendMessage.js";

let StartFunc = (event) => {
    try {
        let jVarLocalParse = JSON.parse(event.data);
        console.log("jVarLocalParse : ", jVarLocalParse);
        switch (jVarLocalParse?.Type) {
            case "wAProfile":
                wAProfile({ inData: jVarLocalParse.res });
                break;
            case "returnOnlineClients":
                jVarLocalParse.res.forEach(element => {
                    LocalFuncAddUser({ inName: element.Name });
                });
                break;
            default:
                break;
        };
    } catch (error) {
        // jFLocalShowMessage({ inMessage: event.data });
    };
};

const LocalFuncAddUser = ({ inName, inTimeSpan }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#OpenUsersId");
        const template = document.querySelector("#TemplateForUserId");

        // Clone the new row and insert it into the table
        const clone = template.content.cloneNode(true);
        let td = clone.querySelectorAll("h3");
        td[0].textContent = inName;

        let p = clone.querySelector("p");
        p.textContent = inTimeSpan;

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalShowMessage = ({ inMessage }) => {
    const template = document.querySelector("#RecieveMessageId");
    let jVarLocalChatContentId = document.getElementById('ChatContentId');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    clone.querySelector(".chat-message").innerHTML = inMessage;

    jVarLocalChatContentId.appendChild(clone);
};

let jFLocalToInputUserNameId = (inValue) => {
    let jVarLocalHtmlId = 'UserNameId';
    let jVarLocalUserNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalUserNameId === null === false) {
        jVarLocalUserNameId.innerHTML = inValue;
    };
};

let jFLocalToInputMobileNumberId = (inValue) => {
    let jVarLocalHtmlId = 'MobileNumberId';
    let jVarLocalMobileNumberId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalMobileNumberId === null === false) {
        jVarLocalMobileNumberId.innerHTML = inValue;
    };
};

const wAProfile = ({ inData }) => {
    jFLocalToInputUserNameId(inData.pushname);
    jFLocalToInputMobileNumberId(inData.me.user);
};

const jFLocalButtonClickForYes = () => {
    // console.log("yes");
    sendMessage({ inDataToSend: "Yes", inDataType: false });
};

const jFLocalButtonClickForNo = () => {
    // console.log("noaaaaaaaaa00000000000000000");
    sendMessage({ inDataToSend: "No", inDataType: false });
};

export { StartFunc };