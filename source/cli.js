#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const meow_1 = __importDefault(require("meow"));
const app_js_1 = __importDefault(require("./app.js"));
const cli = (0, meow_1.default)(`
	Usage
	  $ workout-tracker-tui

	Options
		--name  Your name

	Examples
	  $ workout-tracker-tui --name=Jane
	  Hello, Jane
`, {
    importMeta: import.meta,
    flags: {
        name: {
            type: 'string',
        },
    },
});
(0, ink_1.render)(<app_js_1.default name={cli.flags.name}/>);
