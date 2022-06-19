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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./cell.css");
function Cell(props) {
    var _a = (0, react_1.useState)(false), active = _a[0], setActive = _a[1];
    var _b = (0, react_1.useState)(false), blocked = _b[0], setBlocked = _b[1];
    function handleMouseEnter() {
        if (props.mouseDown && !blocked) {
            setActive(!active);
        }
    }
    function handleMouseDown() {
        if (!blocked) {
            setActive(!active);
        }
        props.setMouseDown(true);
    }
    function handleMouseUp() {
        props.setMouseDown(false);
    }
    function handleDoubleClick() {
        setBlocked(!blocked);
        setActive(false);
    }
    return ((0, jsx_runtime_1.jsx)("td", __assign({ className: "cell unselectable", id: active ? "selected" : null, onMouseEnter: handleMouseEnter, onMouseDown: handleMouseDown, onMouseUp: handleMouseUp, onDoubleClick: handleDoubleClick }, { children: blocked ? "x" : null })));
}
exports.default = Cell;
