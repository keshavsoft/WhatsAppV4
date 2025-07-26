const StartFunc = ({ inColumns }) => {
    let LocalColumns = JSON.parse(JSON.stringify(inColumns));

    LocalColumns.unshift(jFLocalFuncForSerialColumn()); // Add Serial column at the beginning
    LocalColumns.push(jFLocalFuncForOptionsColumn());   // Add Options column at the end

    return LocalColumns;
};

const jFLocalFuncForSerialColumn = () => {
    return {
        field: "KS-Serial",
        title: "#",
        width: "20px",
        formatter: (value, row, index) => index + 1
    };
};

const jFLocalFuncForOptionsColumn = () => {
    return {
        field: "Opts",
        title: "Opts",
        width: "50px",
        formatter: (value, row, index) => {
            return `<i class="bi bi-arrow-right-circle" data-index="${index}" style="cursor: pointer;"></i>`;
        }
    };
};

export { StartFunc };
