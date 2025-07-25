import ConfigJson from '../../../config.json' with {type: 'json'};
import CommonConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "pk" });
    
    let jVarLocalRowData = ConfigJson.RowData;
    let jVarLocalTableName = CommonConfigJson.TableName;

    let jVarLocalFetchUrl = `${jVarLocalTableName}/${jVarLocalRowData}/${jVarLocalFilterString}`;
    
    let response = await fetch(jVarLocalFetchUrl);
    
    let data = await response.json();

    return await data;
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);

    return value;
};

export { StartFunc };