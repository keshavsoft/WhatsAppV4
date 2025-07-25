import { StartFunc as StartFuncFromMessageAsString } from "./MessageAsString/entryFile.js";
import { StartFunc as StartFuncFromMessageAsJson } from "./MessageAsJson/entryFile.js";

let StartFunc = (event) => {
    try {
        let jVarLocalParse = JSON.parse(event.data);

        StartFuncFromMessageAsJson({ inMessageAsJson: jVarLocalParse });
    } catch (error) {
        StartFuncFromMessageAsString({ inMessageAsString: event.data });
    };
};

export { StartFunc };