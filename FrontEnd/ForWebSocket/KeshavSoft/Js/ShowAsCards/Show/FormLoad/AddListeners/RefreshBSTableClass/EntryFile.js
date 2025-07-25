import { StartFunc as StartFuncFuncToRun } from "./ButtonClickFunc.js";

let StartFunc = () => {
    const arrClass = document.querySelectorAll(".RefreshBSTableClass");

    for (let i of arrClass) {
        i.addEventListener("click", StartFuncFuncToRun);
    };
};

export { StartFunc };