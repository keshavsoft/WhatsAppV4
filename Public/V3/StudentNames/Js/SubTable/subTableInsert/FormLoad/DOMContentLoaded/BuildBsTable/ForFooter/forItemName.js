const CommonFieldName = "ITEMNAME";

const StartFunc = ({ inColumns }) => {
    let LocalFind = inColumns.find(element => {
        return element.field === CommonFieldName;
    });

    LocalFind.footerFormatter = () => {
        return `   <div class="input-group">
                                            <input type="text" class="form-control" id="TableFooterItemNameInputId"
                                                autocomplete="off" placeholder="Enter ItemName" required
                                                list="FarmersDataListId">
                                            <div class="invalid-feedback">
                                                Please provide correct Name.
                                            </div>
                                        </div>`;
    };
};

export { StartFunc };
