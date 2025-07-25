import {
    getDefaultFunc as getDefaultFuncFromDal
} from '../Dals/entryFile.js';

let getDefaultFunc = () => {
    return getDefaultFuncFromDal();
};

export {
    getDefaultFunc
};