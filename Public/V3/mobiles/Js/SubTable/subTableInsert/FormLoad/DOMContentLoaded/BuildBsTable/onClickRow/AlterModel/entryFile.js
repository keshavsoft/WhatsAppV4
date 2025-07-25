import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';
import { StartFunc as afterFetch } from './afterFetch/entryFile.js';

const StartFunc = async ({ inItemSerial }) => {
    
    let localResponse = await StartFuncFetchFuncs({ inItemSerial });

    afterFetch({ inResponse: localResponse });
};

export { StartFunc };
