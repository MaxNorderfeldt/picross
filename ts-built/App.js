"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./App.css");
var Grid_1 = __importDefault(require("./Grid"));
var SubmitButton_1 = __importDefault(require("./SubmitButton"));
var RefreshButton_1 = __importDefault(require("./RefreshButton"));
function App() {
    var _a = (0, react_1.useState)([]), selectedCells = _a[0], setSelectedCells = _a[1];
    var _b = (0, react_1.useState)([
        "     21   21  ",
        "   293021903",
        "   21381i23219",
        " 2323",
        "142232",
        "123",
        "421",
        "123",
        "123",
        "12",
        "12",
        "12",
        "12",
    ]), helpNumbers = _b[0], setHelpNumbers = _b[1];
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Grid_1.default, { selectedCells: selectedCells, setSelectedCells: setSelectedCells, helpNumbers: helpNumbers }), (0, jsx_runtime_1.jsx)(SubmitButton_1.default, { selectedCells: selectedCells }), (0, jsx_runtime_1.jsx)(RefreshButton_1.default, {})] }));
}
exports.default = App;
