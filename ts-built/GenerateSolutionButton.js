"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function GenerateSolutionButton(props) {
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => console.log(props.selectedCells.sort()) }, { children: "Generate solution" })));
}
exports.default = GenerateSolutionButton;
