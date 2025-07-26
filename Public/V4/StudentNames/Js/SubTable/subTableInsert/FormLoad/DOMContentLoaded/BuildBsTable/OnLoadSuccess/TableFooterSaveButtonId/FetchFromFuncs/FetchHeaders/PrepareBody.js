const StartFunc = () => {
    let jVarLocalItemName = jFLocalTableFooterItemNameInputId();
    let jVarLocalRate = jFLocalTableFooterRateInputId();

    if (
        jVarLocalItemName === false ||
        jVarLocalRate === false
    ) {
        return false;
    }

    let LocalObj = {};
    LocalObj.ITEMNAME = jVarLocalItemName;
    LocalObj.RATE = jVarLocalRate;

    return LocalObj;
};

let jFLocalTableFooterItemNameInputId = () => {
    let jVarLocalTableFooterItemNameInputId = 'TableFooterItemNameInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemNameInputId);

    if (jVarLocalHtmlId === null === false) {
        let jVarValue = jVarLocalHtmlId.value.trim();

        if (jVarValue === "") {
            jVarLocalHtmlId.classList.add("is-invalid");
            return false;
        } else {
            jVarLocalHtmlId.classList.remove("is-invalid");
            return jVarValue;
        }
    }
};

let jFLocalTableFooterRateInputId = () => {
    let jVarLocalTableFooterRateInputId = 'TableFooterRateInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        let jVarValue = jVarLocalHtmlId.value.trim();

        if (jVarValue === "") {
            jVarLocalHtmlId.classList.add("is-invalid");
            return false;
        } else {
            jVarLocalHtmlId.classList.remove("is-invalid");
            return jVarValue;
        }
    }
};

export { StartFunc };