import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";

let StartFunc = ({ inColumns }) => {
    if (inColumns !== undefined) {
        let LocalColumns = inColumns;
        let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
        let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");

        if (LocalColumnOperateFine !== undefined) {
            ColumnOperate({ inFindColumn: LocalColumnOperateFine });
        }

        if (LocalColumnRate !== undefined) {
            ColumnRate({ inFindColumn: LocalColumnRate });
        }
    }
};

export { StartFunc };
