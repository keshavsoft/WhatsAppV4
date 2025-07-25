const StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalRequiredElements = jVarLocalForm.querySelectorAll("[required]");
    let jVarLocalReturnTF = true;

    jVarLocalRequiredElements.forEach(LoopItem => {
        if (LoopItem.value.trim().length === 0) {
            LoopItem.classList.add("is-invalid");
            jVarLocalReturnTF = false;
        } else {
            LoopItem.classList.remove("is-invalid");
        }
    });

    return jVarLocalReturnTF;
};

export { StartFunc };
