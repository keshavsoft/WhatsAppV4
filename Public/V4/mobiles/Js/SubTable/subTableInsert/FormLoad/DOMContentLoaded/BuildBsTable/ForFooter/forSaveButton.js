const CommonFieldName = "Save";

const StartFunc = ({ inColumns }) => {
    let LocalFind = inColumns.find(element => element.field === CommonFieldName);

    LocalFind.footerFormatter = () => {
        return `
            <button class="btn bg-success text-white d-flex align-items-center gap-1" type="button" id="TableFooterSaveButtonId" title="Save">
                <i class="bi bi-save"></i> Save
            </button>
        `;
    };

    LocalFind.formatter = (value, row, index) => {
        return `
            <a href="#" class="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" style="width:32px; height:32px;" title="Save this row" data-id="${row.id}">
                <i class="bi bi-save"></i>
            </a>
        `;
    };
};

export { StartFunc };
