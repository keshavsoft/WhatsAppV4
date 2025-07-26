import { StartFunc as StartFuncFromForItemName } from "./forItemName.js";
import { StartFunc as StartFuncFromforRate } from "./forRate.js";
import { StartFunc as StartFuncFromforSaveButton } from "./forSaveButton.js";

const StartFunc = ({ inColumns }) => {
    StartFuncFromForItemName({ inColumns });
    StartFuncFromforRate({ inColumns });
    StartFuncFromforSaveButton({ inColumns });
};

export { StartFunc };
