#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ workout-tracker-tui

	Options
		--name  Your name

	Examples
	  $ workout-tracker-tui --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
			},
			pass: {
				type: 'string',
			},
		},
	},
);

render(<App name={cli.flags.name} pass={cli.flags.pass} />);
