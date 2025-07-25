const CommonFieldName = "Amount";

const StartFunc = ({ inColumns }) => {
    let LocalColumns = JSON.parse(JSON.stringify(inColumns));

    LocalColumns.push(jFLocalFuncForOptionsColumn());

    jFLocalAmount({ inColumns: LocalColumns });

    LocalColumns.forEach(element => {
        if (
            element.field !== "Opts" &&
            element.field !== CommonFieldName
        ) {
            element.footerFormatter = (data) => {
                return jFLocalFooterFormatterFunc({
                    inData: data,
                    inColumnInfo: element
                });
            };
        }
    });

    return LocalColumns;
};

const jFLocalFuncForOptionsColumn = () => {
    return {
        field: "Opts",
        title: "Opts",
        width: "100px",
        footerFormatter: (value, row, index) => {
            return `<button class="btn btn-sm btn-success save-btn" id="TableFooterSaveButtonId" data-index="${index}">Save</button>`;
        }
    };
};

const jFLocalFooterFormatterFunc = ({ inData, inColumnInfo }) => {
    return `<input class="form-control" name="${inColumnInfo.field}" type="text">`;
};

const jFLocalAmount = ({ inColumns }) => {
    let LocalFind = inColumns.find(element => element.field === CommonFieldName);

    if (LocalFind) {
        LocalFind.footerFormatter = (data) => {
            const totalAmount = data
                .map(row => +row[CommonFieldName] || 0)
                .reduce((sum, val) => sum + val, 0);

            return `
        <div class="d-flex align-items-center justify-content-between gap-2">
            <input class="form-control" id="TableFooterAmountInputId" name="Amount" type="number" placeholder="Enter Amount" style="max-width: 120px;">
            <span class="fw-semibold text-nowrap">: ₹ ${totalAmount}</span>
        </div>`;
        };
    }
};

export { StartFunc };
