import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

export const SortByButton = ({ onPress, title }) => (
	<TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
		<Text style={styles.buttonText}>{title}</Text>
		<Image style={styles.image} source={require('../assets/sort.png')} />
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: '#0d4c8c',
		paddingVertical: 10,
		paddingHorizontal: 12,
		width: 140,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		maxHeight: 43,
	},
	buttonText: {
		color: '#fff',
		alignSelf: 'center',
		fontSize: 12,
		fontFamily: 'BrandonGrotesque',
	},
	image: {
		width: 15,
	},
});
