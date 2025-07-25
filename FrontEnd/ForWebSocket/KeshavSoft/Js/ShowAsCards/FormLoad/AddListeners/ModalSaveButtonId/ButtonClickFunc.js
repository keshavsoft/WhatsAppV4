let StartFunc = async () => {
    const jVarLocalUserName = jFLocalModalUserNameInputId();

    jFLocalChangeName(jVarLocalUserName);
};

let jFLocalModalUserNameInputId = () => {
    let jVarLocalModalUserNameInputId = 'ModalUserNameInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalModalUserNameInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

const jFLocalChangeName = (inNameToChange) => {
    let jVarLocalObjectToServer = {};
    jVarLocalObjectToServer.Type = 'ChangeName';
    jVarLocalObjectToServer.Message = inNameToChange;

    webSocket.send(JSON.stringify(jVarLocalObjectToServer));
};

export { StartFunc };