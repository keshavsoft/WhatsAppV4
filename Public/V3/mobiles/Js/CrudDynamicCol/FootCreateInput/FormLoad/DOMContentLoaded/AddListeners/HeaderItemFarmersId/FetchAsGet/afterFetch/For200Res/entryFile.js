let StartFunc = ({ inResponseAsJson }) => {
    const datalist = document.getElementById('FarmersDataListId');
    datalist.innerHTML = "";

    for (const item of inResponseAsJson)
        datalist.appendChild(new Option(item.FARMERNAME, item.FARMERNAME));
};

export { StartFunc };