let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
    // inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
};

function jFLocalOptsFormater(value, row, index) {
    return [
        `<a href="#" class="link btn" title="Edit">`,
        `<i class="bi bi-pencil-square text-danger"></i>`,
        `</a>`

    ].join('');
};



export { StartFunc };