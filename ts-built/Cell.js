"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./cell.css");
function Cell(props) {
    const [selected, setSelected] = (0, react_1.useState)(false);
    const [blocked, setBlocked] = (0, react_1.useState)(false);
    function toggleSelectedCell() {
        if (!selected) {
            selectCell();
        }
        else {
            unselelectCell();
        }
    }
    function selectCell() {
        props.setSelectedCells((selectedCells) => [
            ...selectedCells,
            props.x + "" + props.y,
        ]);
        setSelected(true);
    }
    function unselelectCell() {
        props.setSelectedCells(props.selectedCells.filter((x) => x !== props.x + "" + props.y));
        setSelected(false);
    }
    function handleMouseEnter() {
        if (props.mouseDown && !blocked && !selected) {
            selectCell();
        }
    }
    function handleMouseDown() {
        if (!blocked) {
            toggleSelectedCell();
        }
    }
    function handleDoubleClick() {
        setBlocked(!blocked);
        unselelectCell();
    }
    return ((0, jsx_runtime_1.jsx)("td", Object.assign({ className: "cell unselectable", id: selected ? "selected" : null, onMouseEnter: handleMouseEnter, onMouseDown: handleMouseDown, onDoubleClick: handleDoubleClick }, { children: blocked ? "x" : null })));
}
exports.default = Cell;
