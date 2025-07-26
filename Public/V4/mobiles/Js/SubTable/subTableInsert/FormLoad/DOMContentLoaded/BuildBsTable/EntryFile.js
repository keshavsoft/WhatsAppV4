import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";
import OptionJson from './options.json' with {type: 'json'};
import { StartFunc as StartFuncFromForFooter } from "./ForFooter/entryFile.js";

const StartFunc = () => {
    var $table = $('#table');
    let LocalOptionJson = OptionJson;
    LocalOptionJson.data = [];

    LocalOptionJson.onPostBody = () => {
        StartFuncOnLoadSuccess();
        $("#TableFooterItemNameInputId").focus();
    }
    LocalOptionJson.onClickRow = StartFuncOnClickRowFunc;
    
    StartFuncFromForFooter({ inColumns: LocalOptionJson.columns });

    $table.bootstrapTable(LocalOptionJson);

};

export { StartFunc };
