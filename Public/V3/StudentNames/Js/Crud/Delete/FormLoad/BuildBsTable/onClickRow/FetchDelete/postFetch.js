import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";
import UrlJson from "../../../../config.json" with { type: "json" };

let StartFunc = async ({ inRowPk }) => {
    let LocalroutePath = UrlJson.DeleteUrl;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `${LocalroutePath}/${inRowPk}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

