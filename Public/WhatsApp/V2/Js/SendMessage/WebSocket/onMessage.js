const jVarCommonSuccessUrl = "scanQr.html";

let StartFunc = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;

    try {
        let jVarLocalParse = JSON.parse(event.data);
        console.log("jVarLocalParse : ", jVarLocalParse);
        switch (jVarLocalParse?.Type) {
            case "wAProfile":
                wAProfile({ inData: jVarLocalParse.res, inWs: jVarLocalCurrentTarget });

                break;
            case "ChatACK":
                jFLocalForChatACK({ inData: jVarLocalParse.ChatLog });

                break;

            default:
                break;
        };
    } catch (error) {
        // jFLocalShowMessage({ inMessage: event.data });
    };
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

const wAProfile1 = ({ inData, inWs }) => {
    if (inData === undefined) {
        location.href = jVarCommonSuccessUrl;
    };
};

const wAProfile = ({ inData, inWs }) => {
    if (inData === undefined) {
        location.href = jVarCommonSuccessUrl;
    } else {
        jFLocalToInputUserNameId(inData.pushname);
        jFLocalToInputMobileNumberId(inData.me.user);
    };
};

const jFLocalForChatACK = ({ inData, inWs }) => {
    if (inData === undefined === false) {
        console.log("inData : ", inData);
        // debugger;
        if (inData?.Type === "WASend") {
            jFLocalToInputMessageId(inData.ToMessage);
            jFLocalDisplayShowMessageId();
        };
    }
};

let jFLocalToInputMessageId = (inValue) => {
    let jVarLocalHtmlId = 'MessageSentId';
    let jVarLocalMessageId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalMessageId === null === false) {
        jVarLocalMessageId.innerHTML = inValue;
    };
};

let jFLocalDisplayShowMessageId = () => {
    let jVarLocalHtmlId = 'MessageSentId';
    let jVarLocalMessageId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalMessageId === null === false) {
        jVarLocalMessageId.style.display = '';
    };
};

export { StartFunc };