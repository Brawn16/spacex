import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import theme from '../styles/theme.style.js';

export const SortByButton = ({ onPress, title }) => (
	<TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
		<Text style={styles.buttonText}>{title}</Text>
		<Image style={styles.image} source={require('../assets/sort.png')} />
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: theme.PRIMARY_BUTTON_COLOR,
		paddingVertical: 10,
		paddingHorizontal: 12,
		width: 140,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		maxHeight: 43,
	},
	buttonText: {
		color: theme.PRIMARY_TEXT_COLOR,
		alignSelf: 'center',
		fontSize: theme.FONT_SIZE_SMALL,
		fontFamily: 'BrandonGrotesque',
	},
	image: {
		width: 15,
	},
});
