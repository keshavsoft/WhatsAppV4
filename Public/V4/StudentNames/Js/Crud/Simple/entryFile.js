import { StartFunc as StartFuncShowOnDom } from "./showOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/entryFile.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();

        StartFuncShowOnDom();
    };
};

StartFunc();