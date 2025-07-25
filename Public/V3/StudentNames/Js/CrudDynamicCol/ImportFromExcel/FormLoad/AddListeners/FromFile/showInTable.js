const $table = $('#table');

let StartFunc = ({ inData }) => {
    let jVarLocalData = inData;
    console.log("jVarLocalData:",jVarLocalData);
    

    $table.bootstrapTable("load", jVarLocalData);
};

export { StartFunc };