const CommonFieldName = "RATE";

const StartFunc = ({ inColumns }) => {
    let LocalFind = inColumns.find(element => element.field === CommonFieldName);

    LocalFind.footerFormatter = (data) => {
        const totalRate = data
            .map(row => +row.RATE || 0)
            .reduce((sum, rate) => sum + rate, 0);

        return `
            <div class="input-group">
                <input class="form-control" id="TableFooterRateInputId" type="number" placeholder="Enter Rate">
                <span class="input-group-text">Total: ₹ ${totalRate}</span>
                <div class="invalid-feedback">
                    Please enter valid rate
                </div>
            </div>`;
    };
};

export { StartFunc };
