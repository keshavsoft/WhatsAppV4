import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncAddListeners();
};

export { StartFunc };
