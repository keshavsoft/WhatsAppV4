import getUrlJson from './getUrl.json' with {type: 'json'};
import commonConfig from '../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarTableName = commonConfig.TableName;

    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint;

    let jVarLocalFetchUrl = `${jVarTableName}/${jVarLocalGetEndPoint}`

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

