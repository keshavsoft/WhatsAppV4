let StartFunc = ({ inResponseAsJson }) => {
    let jVarLocalHtmlDLEId = document.getElementById('HtmlDLEId-FarmerName');

    inResponseAsJson.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        jVarLocalHtmlDLEId.appendChild(option);
    });
};

export { StartFunc };