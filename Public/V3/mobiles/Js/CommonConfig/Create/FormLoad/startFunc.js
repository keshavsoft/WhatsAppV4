import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
// import { StartFunc as ToDataList } from "./ToDataList/startFunc.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    // ToDataList();
};

export { StartFunc };
