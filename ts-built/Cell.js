"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./cell.css");
function Cell(props) {
    var _a = (0, react_1.useState)(false), selected = _a[0], setSelected = _a[1];
    var _b = (0, react_1.useState)(false), blocked = _b[0], setBlocked = _b[1];
    function toggleSelectedCell() {
        if (!selected) {
            props.setSelectedCells(function (selectedCells) { return __spreadArray(__spreadArray([], selectedCells, true), [
                props.x + "" + props.y,
            ], false); });
        }
        else {
            props.setSelectedCells(props.selectedCells.filter(function (x) { return x !== props.x + "" + props.y; }));
        }
        setSelected(!selected);
    }
    function handleMouseEnter() {
        if (props.mouseDown && !blocked) {
            toggleSelectedCell();
        }
    }
    function handleMouseDown() {
        if (!blocked) {
            toggleSelectedCell();
        }
        props.setMouseDown(true);
    }
    function handleMouseUp() {
        props.setMouseDown(false);
    }
    function handleDoubleClick() {
        setBlocked(!blocked);
        setSelected(false);
    }
    return ((0, jsx_runtime_1.jsx)("td", __assign({ className: "cell unselectable", id: selected ? "selected" : null, onMouseEnter: handleMouseEnter, onMouseDown: handleMouseDown, onMouseUp: handleMouseUp, onDoubleClick: handleDoubleClick }, { children: blocked ? "x" : null })));
}
exports.default = Cell;
