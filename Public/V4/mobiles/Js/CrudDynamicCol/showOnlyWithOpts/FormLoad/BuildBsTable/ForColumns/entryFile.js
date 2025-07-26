const StartFunc = ({ inColumns }) => {
    let LocalColumns = JSON.parse(JSON.stringify(inColumns));

    LocalColumns.push(jFLocalFuncForOptionsColumn());

    return LocalColumns;
};

const jFLocalFuncForOptionsColumn = () => {
    return {
        field: "Opts",
        title: "Opts",
        width: "100px",
        formatter: (value, row, index) => {
            return `<i class="bi bi-arrow-right-circle" data-index="${index}" style="cursor: pointer;"></i>`;
        }
    };
};

export { StartFunc };
