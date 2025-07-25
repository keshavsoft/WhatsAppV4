const StartFunc = ({ inColumns }) => {
    let LocalColumns = JSON.parse(JSON.stringify(inColumns));

    LocalColumns.unshift(jFLocalFuncForSerialColumn());

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

export { StartFunc };
