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
    const [solution, setSolution] = (0, react_1.useState)([
        "310",
        "311",
        "312",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
    ]);
    const [helpNumbers, setHelpNumbers] = (0, react_1.useState)([
        "     21   21  ",
        "   293021903",
        "   2138123219",
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
    ]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Grid_1.default, { selectedCells: selectedCells, setSelectedCells: setSelectedCells, helpNumbers: helpNumbers }), (0, jsx_runtime_1.jsx)(SubmitButton_1.default, { selectedCells: selectedCells, solution: solution }), (0, jsx_runtime_1.jsx)(RefreshButton_1.default, {}), (0, jsx_runtime_1.jsx)(GenerateSolutionButton_1.default, { selectedCells: selectedCells })] }));
}
exports.default = App;
