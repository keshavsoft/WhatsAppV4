import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as StartFuncRowDataFromGet } from "./RowDataFromGet/Entry.js";
// import { StartFunc as ToDataList } from "./ToDataList/startFunc.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    StartFuncRowDataFromGet();
    // ToDataList();
};

export { StartFunc };
