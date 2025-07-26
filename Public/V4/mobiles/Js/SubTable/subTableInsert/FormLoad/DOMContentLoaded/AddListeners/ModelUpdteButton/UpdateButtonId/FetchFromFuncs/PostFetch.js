import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";
import UrlJson from "../../../../../../config.json" with { type: "json" };
import ConfigJson from "../../../../../../../Config.json" with { type: "json" };


let StartFunc = async () => {
    let LocalroutePath = UrlJson.AlterEndPoint;
    let LocalTableName = ConfigJson.TableName;
    
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "pk" });
    
    let jVarModelPk = jFLocalModalPkInput();
    
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    
    let jVarLocalFetchUrl = `${LocalTableName}/${LocalroutePath}/${jVarLocalFilterString}/ITEMS/${jVarModelPk}`;
    
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFLocalModalPkInput = () => {
    let jVarLocalModalPkInput = 'ModalPkInput'
    let jVarLocalHtmlId = document.getElementById(jVarLocalModalPkInput);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };

