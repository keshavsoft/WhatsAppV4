const StartFunc = () => {
    let webSocket;
    console.log("webSocket",webSocket)
    return webSocket.send("returnOnlineClients");

};

export { StartFunc };