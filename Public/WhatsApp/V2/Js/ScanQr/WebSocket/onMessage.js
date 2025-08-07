const jVarCommonSuccessUrl = "sendMessage.html";

let StartFunc = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;

    try {
        let jVarLocalParse = JSON.parse(event.data);

        switch (jVarLocalParse?.Type) {
            case "wAProfile":
                wAProfile({ inData: jVarLocalParse.res, inWs: jVarLocalCurrentTarget });

                break;
            case "QrCodeGenerated":
                jFLocalHandleQrCode({ inQrReceived: jVarLocalParse.res });

                break;
            default:
                break;
        };
    } catch (error) {
        // jFLocalShowMessage({ inMessage: event.data });
    };
};

const wAProfile = ({ inData, inWs }) => {
    if (inData === undefined) {
        inWs.send("GetQrCode");
    } else {
        clearInterval(KSIntervalId);

        KSIntervalId = null;

        // location.href = "sendMessage.html";
        location.href = jVarCommonSuccessUrl;
    };
};

const jFLocalHandleQrCode = ({ inQrReceived }) => {
    // console.log("inQrReceived : ", inQrReceived);

    if (inQrReceived === undefined === false) {
        KSQrRec = inQrReceived;
        jFCreateQrCode({ inQrCode: inQrReceived });
    };
};

let jFCreateQrCode = ({ inQrCode }) => {
    let canvas = document.getElementById("CanvasId");
    const jVarLocalPresentQrCode = canvas.dataset.QrCode;

    if (inQrCode === jVarLocalPresentQrCode) {
        return;
    };

    canvas.height = 1;
    canvas.width = 1;
    canvas.style.visibility = 'hidden';
    canvas.dataset.QrCode = inQrCode;
    canvas.dataset.CreatedDate = Date.now();
    // Convert the options to an object.
    let opts = {};

    // Finish up the options
    opts.text = inQrCode;
    opts.bcid = "qrcode";
    opts.scaleX = 2;
    opts.scaleY = 2;
    opts.rotate = "N";

    // Draw the bar code to the canvas
    try {
        bwipjs.toCanvas(canvas, opts);
        canvas.style.visibility = 'visible';
    } catch (e) {
        console.log("error : ", e);

        return;
    };
};

export { StartFunc };