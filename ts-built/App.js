"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
function App() {
    // Build the rows in an array
    var rows = [];
    for (var y = 0; y < 10; y++) {
        // Build the cells in an array
        var cells = [];
        for (var x = 0; x < 10; x++) {
            cells.push((0, jsx_runtime_1.jsx)(Cell, { x: x, y: y }));
        }
        // Put them in the row
        rows.push((0, jsx_runtime_1.jsx)("tr", { children: cells }));
    }
    // Return the table
    return ((0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsx)("tbody", { children: rows }) }));
}
function Cell(props) {
    return ((0, jsx_runtime_1.jsx)("td", { className: "cell", onClick: function () { return console.log(props.y + " " + props.x); } }));
}
exports.default = App;
