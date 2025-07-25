import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let getDefaultFunc = () => {
    let LocalFromLowDb = StartFuncFromReadFromFile();

    return LocalFromLowDb;
};

export {
    getDefaultFunc
};