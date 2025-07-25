let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = jVarLocalFormatterFunc;
    inFindColumn.formatter = symbolFormat;
    inFindColumn.formatter = symbolFormat;

};

let jVarLocalFormatterFunc = (data) => {
    var field = "Rate";
    let LocalTotal = data.map(function (row) {
        if (row[field] === undefined) {
            return 0;
        };
        return +row[field];
    }).reduce(function (sum, i) {
        return sum + i
    }, 0);

    return '₹'+Math.floor(LocalTotal);

};

function symbolFormat(data) {
    var field = this.field
    return '₹ '+data;

 }

export { StartFunc };