import { StartFunc as StartFuncFromFetchAsGet } from "./FetchAsGet/entryFile.js";

let StartFunc = () => {
    StartFuncFromFetchAsGet();
};

export { StartFunc };