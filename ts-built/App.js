"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./App.css");
const Grid_1 = __importDefault(require("./Grid"));
const SubmitButton_1 = __importDefault(require("./SubmitButton"));
const RefreshButton_1 = __importDefault(require("./RefreshButton"));
const GenerateSolutionButton_1 = __importDefault(require("./GenerateSolutionButton"));
function App() {
    const [selectedCells, setSelectedCells] = (0, react_1.useState)([]);
    const solution = [
        "3.3",
        "3.4",
        "3.5",
        "3.6",
        "3.7",
        "3.8",
        "3.9",
        "3.10",
        "3.11",
        "3.12",
    ];
    const helpNumbers = [
        "     23  02  ",
        "   2410 00031  ",
        "[],[]   01009600119",
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
    ];
    const gridSize = 10;
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Grid_1.default, { selectedCells: selectedCells, setSelectedCells: setSelectedCells, helpNumbers: helpNumbers, gridSize: gridSize }), (0, jsx_runtime_1.jsx)(SubmitButton_1.default, { selectedCells: selectedCells, solution: solution }), (0, jsx_runtime_1.jsx)(RefreshButton_1.default, {}), (0, jsx_runtime_1.jsx)(GenerateSolutionButton_1.default, { selectedCells: selectedCells })] }));
}
exports.default = App;
