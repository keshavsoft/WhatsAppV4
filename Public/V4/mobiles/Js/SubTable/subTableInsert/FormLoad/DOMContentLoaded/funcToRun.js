import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as RowDataGetFetch } from "./RowDataGetFetch/entryFile.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as ShowOnDom } from "./showOnDom.js";

const StartFunc = async () => {
    StartFuncBuildBsTable();
    RowDataGetFetch();
    StartFuncAddListeners();
    ShowOnDom();
};

export { StartFunc };
