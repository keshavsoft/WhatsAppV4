let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
};

function jFLocalOptsFormater(value, row, index) {
    return [
      `<a class="like btn" href="#" title="Delete">`,
        '<i class="bi bi-trash3-fill text-danger"></i>',
        '</a>',
    ].join('');
};



export { StartFunc };