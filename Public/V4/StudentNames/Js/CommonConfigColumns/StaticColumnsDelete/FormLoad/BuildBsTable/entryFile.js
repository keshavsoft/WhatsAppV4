import optionsJson from './options.json' with { type: 'json' };
import commonConfig from '../../../Config.json' with { type: 'json' };
import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/entryFile.js";

const StartFunc = () => {
    const $table = $('#table');

    optionsJson.onClickRow = StartFuncOnClickRowFunc;

   
    const finalOptions = {
        ...optionsJson,
        columns: commonConfig.Columns
    };


    ForColumns({ inColumns: finalOptions.columns });
    $table.bootstrapTable(finalOptions);
};

export { StartFunc };
