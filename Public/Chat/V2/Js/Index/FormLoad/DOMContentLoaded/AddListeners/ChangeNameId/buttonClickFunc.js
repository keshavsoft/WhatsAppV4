const StartFunc = () => {
    let webSocket;
    return webSocket.send(JSON.stringify({ Type: "ChangeName", Message: "Keshav" }));

};

export { StartFunc };