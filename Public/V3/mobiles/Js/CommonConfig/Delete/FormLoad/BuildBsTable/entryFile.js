import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/entryFile.js";
import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');
    optionsJson.onClickRow = StartFuncOnClickRowFunc;
    StartFuncForColumns({ inColumns: optionsJson.columns });
    $table.bootstrapTable(optionsJson);
};

export { StartFunc };

