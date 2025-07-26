import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../../../../config.json" with { type: "json" };
import CommonConfigJson from "../../../../../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let jVarLocalPostUrl = ConfigJson.PostendPoint;
    let jVarLocalTableName = CommonConfigJson.TableName;

    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "pk" });

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalFetchUrl = `${jVarLocalTableName}/${jVarLocalPostUrl}/${jVarLocalFilterString}/ITEMS`;
    
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc };

