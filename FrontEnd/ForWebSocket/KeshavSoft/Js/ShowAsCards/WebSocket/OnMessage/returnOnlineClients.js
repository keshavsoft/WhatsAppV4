let StartFunc = ({ inUsersAsArray }) => {
    console.log("inUsersAsArray : ", inUsersAsArray);

    inUsersAsArray.forEach(element => {
        jFInsertCard({ inCardData: element });
    });
};

const jFInsertCard = ({ inCardData }) => {
    if ("content" in document.createElement("template")) {
        const jVarLocalToInsertHtml = document.querySelector("#ToShowContainer");
        jVarLocalToInsertHtml.innerHTML = "";

        const template = document.querySelector("#TemplateForCard");

        const clone = template.content.cloneNode(true);

        let subItemTitle = clone.querySelector(".sub-item-title");
        subItemTitle.textContent = inCardData.Name;


        let jVarLocalTimeSpan = clone.querySelector(".TimeSpanClass");
        jVarLocalTimeSpan.textContent = inCardData.loginDateTime;

        jVarLocalToInsertHtml.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};



export { StartFunc };