import ConfigJson from '../../../../../config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "pk" });

    let jVarLocalFetchUrl = ConfigJson.GetEndPoint;
   
    let jVarFetchUrl = `${jVarLocalFetchUrl}/${jVarLocalFilterString}/ITEMS`
   
    let response = await fetch(jVarFetchUrl);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };

