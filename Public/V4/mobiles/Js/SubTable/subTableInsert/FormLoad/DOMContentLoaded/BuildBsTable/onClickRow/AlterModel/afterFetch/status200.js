import { StartFunc as StartFuncFor200Res } from "./For200Res/entryFile.js";

let StartFunc = ({ inData }) => {
    StartFuncFor200Res({ inData });
};

export { StartFunc };