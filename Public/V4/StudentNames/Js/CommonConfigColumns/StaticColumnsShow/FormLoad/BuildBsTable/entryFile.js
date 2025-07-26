import optionsJson from './options.json' with { type: 'json' };
import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";

const StartFunc = () => {
    const $table = $('#table');

    const finalOptions = {
        ...optionsJson
    };

    ForColumns({ inColumns: finalOptions.columns });

    $table.bootstrapTable(finalOptions);
};

export { StartFunc };