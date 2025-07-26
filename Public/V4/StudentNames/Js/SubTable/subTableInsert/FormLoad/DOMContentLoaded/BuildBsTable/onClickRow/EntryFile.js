import { StartFunc as StartFuncAlterRowButton } from "./startFunc.js";
import { StartFunc as StartFuncDeleteRow } from "./DeleteRow/entryFile.js";

const StartFunc = (row, $element, field) => {
    if (field === "Save") {
        Swal.fire({
            title: "Check",
            text: "Do you really want to Edit this Item?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Edit",
            denyButtonText: `Delete`
        }).then((result) => {
            if (result.isConfirmed) {
                const editModal = new bootstrap.Modal(document.getElementById('EditModal'));
                editModal.show();
                StartFuncAlterRowButton({ inItemSerial: row.pk });
            } else if (result.isDenied) {
                StartFuncDeleteRow({ inItemSerial: row.pk });
            }

        });
    }
};

export { StartFunc };
