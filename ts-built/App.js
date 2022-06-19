"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
var Grid_1 = __importDefault(require("./Grid"));
function App() {
    return (0, jsx_runtime_1.jsx)(Grid_1.default, {});
}
exports.default = App;
