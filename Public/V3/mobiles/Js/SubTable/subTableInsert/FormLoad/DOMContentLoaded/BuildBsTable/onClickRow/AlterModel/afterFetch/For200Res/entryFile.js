let StartFunc = async ({ inData }) => {

    jFLocaljVarModelPk({ inPk: inData.pk })
    jFLocalModalItemNameInput({ inValue: inData.ITEMNAME });
    jFLocalModalRateInput({ inRate: inData.RATE });

};

let jFLocaljVarModelPk = ({ inPk }) => {
    let jVarLocaljVarModelPk = 'ModalPkInput'
    let jVarLocalHtmlId = document.getElementById(jVarLocaljVarModelPk);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value = inPk;
    };
};

let jFLocalModalItemNameInput = ({ inValue }) => {
    let jVarLocalModalItemNameInput = 'ModalItemNameInput'
    let jVarLocalHtmlId = document.getElementById(jVarLocalModalItemNameInput);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value = inValue;
    };
};

let jFLocalModalRateInput = ({ inRate }) => {
    let jVarLocalModalRateInput = 'ModalRateInput'
    let jVarLocalHtmlId = document.getElementById(jVarLocalModalRateInput);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value = inRate;
    };
};
export { StartFunc };
