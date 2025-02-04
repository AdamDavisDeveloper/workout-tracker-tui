"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
function App({ name = 'Stranger' }) {
    return (<ink_1.Text>
			Hello, <ink_1.Text color="green">{name}</ink_1.Text>
		</ink_1.Text>);
}
