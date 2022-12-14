import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { months } from '../constants';
import { getOrdinalNum } from '../helpers';
import theme from '../styles/theme.style.js';
import { LaunchInfo } from '../types';

export function ListItem(props: LaunchInfo) {
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
		width: 300,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 5,
		borderColor: theme.BORDER_COLOR,
		borderWidth: 1,
		marginTop: 5,
		padding: 15,
		alignItems: 'center',
		fontFamily: 'BrandonGrotesque',
		fontSize: theme.FONT_SIZE_MEDIUM,
	},
	rightSection: {
		alignItems: 'center',
	},
	date: {
		fontSize: theme.FONT_SIZE_EXTRA_SMALL,
		color: theme.SECONDARY_TEXT_COLOR,
	},
});
