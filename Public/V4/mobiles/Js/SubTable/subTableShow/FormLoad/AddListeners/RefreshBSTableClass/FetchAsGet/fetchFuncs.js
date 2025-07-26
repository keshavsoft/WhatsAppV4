import getUrlJson from './getUrl.json' with {type: 'json'};
import ConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = getUrlJson.GetEndPoint;
    
    let jVarLocalTableName = ConfigJson.TableName;

    let jVarFetchUrl = `${jVarLocalTableName}/${jVarLocalFetchUrl}`;

    let response = await fetch(jVarFetchUrl);

    return await response;
};

export { StartFunc };

