const StartFunc = () => {
    const jFLocalFuncToRun = () => {
        webSocket.send("WAProfile");
    };

    if (!KSIntervalId) {
        KSIntervalId = setInterval(jFLocalFuncToRun, 1000);
    };
};

StartFunc();