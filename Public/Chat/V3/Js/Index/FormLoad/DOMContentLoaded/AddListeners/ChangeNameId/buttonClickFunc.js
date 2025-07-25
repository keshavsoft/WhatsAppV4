const StartFunc = () => {
    webSocket.send(JSON.stringify({ Type: "ChangeName", Message: "Keshav" }));
};

export { StartFunc };