import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/entryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";


const StartFunc = () => {
    StartFuncBuildBsTable();
    StartFuncAddListeners();
    
};

export { StartFunc };
