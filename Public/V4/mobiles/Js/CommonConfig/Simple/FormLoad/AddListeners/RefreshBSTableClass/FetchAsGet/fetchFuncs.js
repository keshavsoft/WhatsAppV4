import getUrlJson from './getUrl.json' with {type: 'json'};
import commonConfig from '../../../../../commonConfig.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarTableName = commonConfig.TableName;

    let jVarLocalFetchUrl = getUrlJson.GetEndPoint;

    let jVarFetchUrl = `${jVarTableName}/${jVarLocalFetchUrl}`

    let response = await fetch(jVarFetchUrl);

    return await response;
};

export { StartFunc };

