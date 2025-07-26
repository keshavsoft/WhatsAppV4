import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/entryFile.js";

const StartFunc = () => {
    var $table = $('#table');
    optionsJson.onClickRow = StartFuncOnClickRowFunc;
    ForColumns({ inColumns: optionsJson.columns });
    $table.bootstrapTable(optionsJson);
};

export { StartFunc };

