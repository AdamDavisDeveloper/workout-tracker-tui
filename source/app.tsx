import React from 'react';
import {Text} from 'ink';

type Props = {
	name: string | undefined;
	pass: string | undefined;
};

const myUser = {
	name: "Adam",
	pass: "test",
};

export default function App({name, pass}: Props) {
		if(name == myUser.name && pass == myUser.pass) {
			return (
				<Text>
					Hello, welcome to your personal tracking system, <Text color="blue">{name}</Text>.
				</Text>
			);
		} else {
				return (
					<>
						<Text>You need to create a user profile to continue...</Text>
						<Text>Would you like to create a profile and sign in?</Text>
					</>
				);
		}
}
