const CommonFieldName = "Amount";

const StartFunc = ({ inColumns }) => {
    let LocalColumns = JSON.parse(JSON.stringify(inColumns));

    // Add Serial and Options columns
    LocalColumns.splice(0, 0, jFLocalFuncForSerialColumn());
    LocalColumns.push(jFLocalFuncForOptionsColumn());

    // Custom logic for Amount field
    jFLocalAmount({ inColumns: LocalColumns });

    // Add input box footer only for regular fields (exclude Serial, Opts, Amount)
    LocalColumns.forEach(element => {
        if (
            element.field !== "Opts" &&
            element.field !== "KS-Serial" &&
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

// Serial Column (No footer formatter needed)
const jFLocalFuncForSerialColumn = () => {
    return {
        field: "KS-Serial",
        title: "#",
        width: "50px",
        formatter: (value, row, index) => index + 1
    };
};

// Options Column (Footer shows Save button)
const jFLocalFuncForOptionsColumn = () => {
    return {
        field: "Opts",
        title: "Opts",
        width: "100px",
        align: "center",
        footerFormatter: () => {
            return `
                <button class="btn btn-sm btn-success" id="TableFooterSaveButtonId">
                    Save
                </button>`;
        }
    };
};

// For general fields, provide input box in footer
const jFLocalFooterFormatterFunc = ({ inData, inColumnInfo }) => {
    return `<input class="form-control" name="${inColumnInfo.field}" type="text">`;
};

// Special footer logic for Amount field
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
