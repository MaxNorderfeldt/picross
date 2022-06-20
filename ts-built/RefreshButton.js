"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function RefreshButton() {
    return (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => window.location.reload() }, { children: "Refresh Page" }));
}
exports.default = RefreshButton;
