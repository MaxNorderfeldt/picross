"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Cell_1 = __importDefault(require("./Cell"));
const HelpNumber_1 = __importDefault(require("./HelpNumber"));
function Grid(props) {
    const [mouseDown, setMouseDown] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    }, []);
    function onMouseDown() {
        setMouseDown(true);
    }
    function onMouseUp() {
        setMouseDown(false);
    }
    // Build the rows in an array
    let rows = [];
    for (let y = 0; y < 13; y++) {
        // Build the cells in an array
        let cells = [];
        for (let x = 0; x < 13; x++)
            if (x > 2 && y > 2) {
                cells.push((0, jsx_runtime_1.jsx)(Cell_1.default, { x: x, y: y, setSelectedCells: props.setSelectedCells, selectedCells: props.selectedCells, mouseDown: mouseDown }, x + "" + y));
            }
            else {
                let helpnumber = props.helpNumbers[y].charAt(x);
                if (helpnumber !== " ") {
                    helpnumber = Number(helpnumber) + 1;
                }
                cells.push((0, jsx_runtime_1.jsx)(HelpNumber_1.default, { helpNumber: helpnumber, x: x }, x + "" + y));
            }
        // Put them in the row
        rows.push((0, jsx_runtime_1.jsx)("tr", { children: cells }, y));
    }
    // Return the table
    return ((0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsx)("tbody", { children: rows }) }));
}
exports.default = Grid;
