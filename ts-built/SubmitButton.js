"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function SubmitButton(props) {
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => checkResult(props.solution, props.selectedCells) }, { children: "Submit" })));
}
function checkResult(solution, selectedCells) {
    console.log(solution);
    console.log(selectedCells);
    if (solution.length == selectedCells.length) {
        if (solution.sort().toString() === selectedCells.sort().toString()) {
            console.log(true);
        }
        else {
            console.log("second false");
        }
    }
    else {
        console.log("Wrong solution!");
    }
    console.log("test");
}
exports.default = SubmitButton;
