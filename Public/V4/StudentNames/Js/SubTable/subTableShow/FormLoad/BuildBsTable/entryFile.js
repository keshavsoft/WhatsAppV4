import commonConfigJson from '../../../Config.json' with {type: 'json'};
import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/entryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    commonConfigJson.onClickRow = StartFuncOnClickRowFunc;

    commonConfigJson.columns.push({
        field: "Opts",
        title: "Options",
        formatter: "jFLocalOptsFormater"
    });

    commonConfigJson.columns.unshift({
        field: "KS-Serial",
        title: "#",
        formatter: "jVarLocalFormatterFunc",
        width: "10px",
    });

    ForColumns({ inColumns: commonConfigJson.columns });

    $table.bootstrapTable(commonConfigJson);
};

export { StartFunc };

