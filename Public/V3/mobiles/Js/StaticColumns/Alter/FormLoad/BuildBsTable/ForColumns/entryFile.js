import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as StartFuncColumnAlter } from "./ColumnAlter/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnSerial = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");
    let LocalColumnAlter = LocalColumns.find(element => element.field === "Alter");


    if (LocalColumnSerial === undefined === false) {
        ColumnSerial({ inFindColumn: LocalColumnSerial });
    };
    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };
    if (LocalColumnAlter === undefined === false) {
        StartFuncColumnAlter({ inFindColumn: LocalColumnAlter });
    };
}

export { StartFunc };

