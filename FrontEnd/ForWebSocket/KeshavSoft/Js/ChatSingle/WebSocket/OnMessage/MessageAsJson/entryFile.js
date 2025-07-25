let StartFunc = ({ inMessageAsJson }) => {
    switch (inMessageAsJson?.Type) {
        case "IsStudent":
            jFLocalForIsStudent();
            break;
        default:
            break;
    };
};

let jFLocalForIsStudent = () => {
    const chatMessages = document.querySelector('.chat-messages');

    chatMessages.innerHTML += `<div class="message mb-3 align-self-end">
<div class="bg-light rounded p-2">
    <div class="row">
        <div class="col">Are you a Student?</div>
        <div class="col-1"><button class="btn btn-outline-success" onclick="javascript:webSocket.send('Yes')">Yes</button></div>
    </div>
</div>
<small class="text-muted">2 mins ago</small>
</div>`;
};

export { StartFunc };