let StartFunc = async (e) => {
    e.preventDefault();
    let jVarLocalChatMessagesContainerId = document.getElementById('chatMessagesContainerId');

    const message = jFLocalmessageInputId();
    const UserName = 'Keshav';

    if (message.trim() === '') {
        return;
    };

    jVarLocalChatMessagesContainerId.innerHTML += `<div class="message mb-3 align-self-start">
            <div class="bg-primary text-white rounded p-2">
                <strong>${UserName}:</strong> ${message}
            </div>
            <small class="text-muted timeClass">3 mins ago</small>
        </div>`;

    jFLocalToInputmessageInputId("");
    webSocket.send(message);
};

let jFLocalmessageInputId = () => {
    let jVarLocalmessageInputId = 'messageInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalmessageInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalToInputmessageInputId = (inValue) => {
    let jVarLocalHtmlId = 'messageInputId';
    let jVarLocalmessageInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalmessageInputId === null === false) {
        jVarLocalmessageInputId.value = inValue;
    };
};

export { StartFunc };