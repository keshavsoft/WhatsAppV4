import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";

let StartFunc = ({ inResponseAsJson }) => {
    StartFuncBuildBsTable({ inResponseAsJson });
};

export { StartFunc };