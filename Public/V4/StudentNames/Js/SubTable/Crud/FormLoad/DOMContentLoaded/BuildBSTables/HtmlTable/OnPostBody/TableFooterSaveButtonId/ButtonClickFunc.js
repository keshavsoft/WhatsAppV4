import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

const StartFunc = (event) => {
    const jVarLocalCurrentTarget = event.currentTarget;

    if (StartFuncCheckFunc()) {
        StartFuncFetchFromFuncs({ inCurrentTarget: jVarLocalCurrentTarget });
    };
};

export { StartFunc }