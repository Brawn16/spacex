import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { months } from '../constants';
import { getOrdinalNum } from '../helpers';

interface Props {
	name: string;
	id: number;
	mission: string;
}

export function ListItem(props: Props) {
	const { name, id, mission } = props;

	const date = new Date(id * 1000);

	const year = date.getFullYear();
	const month = months[date.getMonth()];
	const day = date.getDate();

	return (
		<View style={styles.container}>
			<Text>{mission}</Text>
			<View style={styles.rightSection}>
				<Text style={styles.date}>
					{`${getOrdinalNum(day)} ${month} ${year}`}
				</Text>
				<Text>{name}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		minWidth: 250,
		maxWidth: 300,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 5,
		borderColor: 'black',
		borderWidth: 1,
		marginTop: 5,
		padding: 15,
		alignItems: 'center',
		fontFamily: 'BrandonGrotesque',
		fontSize: 15,
	},
	rightSection: {
		alignItems: 'center',
	},
	date: {
		fontSize: 10,
		color: '#606060',
	},
});
