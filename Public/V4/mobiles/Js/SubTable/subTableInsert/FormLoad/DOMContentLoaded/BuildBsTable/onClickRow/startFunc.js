import { StartFunc as StartFuncAlterModel } from "./AlterModel/entryFile.js";

let StartFunc = ({ inItemSerial }) => {
    StartFuncAlterModel({ inItemSerial });
};

export { StartFunc };