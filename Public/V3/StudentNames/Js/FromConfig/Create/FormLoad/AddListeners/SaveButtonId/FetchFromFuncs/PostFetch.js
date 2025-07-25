import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";
import UrlJson from "./url.json" with { type: "json" };
import commonConfig from '../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarTableName = commonConfig.TableName;

    let LocalroutePath = UrlJson.PostendPoint;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalFetchUrl = `${jVarTableName}/${LocalroutePath}`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

