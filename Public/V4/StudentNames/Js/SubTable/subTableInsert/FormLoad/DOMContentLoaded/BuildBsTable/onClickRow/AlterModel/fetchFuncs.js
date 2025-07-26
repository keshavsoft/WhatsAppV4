import ConfigJson from '../../../../../config.json' with {type: 'json'};
import CommonConfigJson from '../../../../../../Config.json' with {type: 'json'};

let StartFunc = async ({ inItemSerial }) => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "pk" });
    
    let jVarLocalFetchUrl = ConfigJson.SubTableRowData;
    let jVarLocalTableName = CommonConfigJson.TableName;
    
    let jVarFetchUrl = `${jVarLocalTableName}/${jVarLocalFetchUrl}/${jVarLocalFilterString}/ITEMS/${inItemSerial}`
    
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

