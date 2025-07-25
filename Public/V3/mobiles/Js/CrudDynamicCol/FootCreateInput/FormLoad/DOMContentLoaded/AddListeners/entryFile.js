import { StartFunc as StartFuncRefreshBSTableClass } from "./RefreshBSTableClass/entryFile.js";
import { StartFunc as StartFuncFromHeaderItemFarmersId } from './HeaderItemFarmersId/EntryFile.js';

let StartFunc = () => {
    StartFuncRefreshBSTableClass();
	StartFuncFromHeaderItemFarmersId();
};

export { StartFunc };