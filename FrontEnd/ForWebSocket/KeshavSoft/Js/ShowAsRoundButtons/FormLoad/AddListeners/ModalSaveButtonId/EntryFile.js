import { StartFunc as StartFuncFuncToRun } from "./ButtonClickFunc.js";

let StartFunc = () => {
    const arrClass = document.querySelector("#ModalSaveButtonId");

    arrClass.addEventListener("click", StartFuncFuncToRun);
};

export { StartFunc };