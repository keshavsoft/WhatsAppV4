import { StartFunc as StartFuncNav } from "./Nav/entryFile.js";
const StartFunc = (row, $element, field) => {
        
    if (field === "Alter") {
        StartFuncNav({ inRowpk: row.pk });
    };
};

export { StartFunc };