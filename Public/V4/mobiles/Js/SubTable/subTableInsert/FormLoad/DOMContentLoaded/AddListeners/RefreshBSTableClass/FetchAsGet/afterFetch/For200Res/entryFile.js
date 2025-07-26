let StartFunc = ({ inResponseAsJson }) => {
    console.log(inResponseAsJson);
    
    var $table = $('#table');
    $table.bootstrapTable("load", inResponseAsJson);
};

export { StartFunc };