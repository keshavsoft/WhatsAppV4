const StartFunc = () => {
    webSocket.send("returnOnlineClients");
};

export { StartFunc };