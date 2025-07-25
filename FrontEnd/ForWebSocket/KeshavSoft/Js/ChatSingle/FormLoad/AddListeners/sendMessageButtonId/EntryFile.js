import { StartFunc as StartFuncFuncToRun } from "./ButtonClickFunc.js";

let StartFunc = () => {
    const arrClass = document.querySelector("#sendMessageButtonId");

    arrClass.addEventListener("click", StartFuncFuncToRun);
};

export { StartFunc };