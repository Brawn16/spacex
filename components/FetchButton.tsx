import React, { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

interface Props {
	onPress: Dispatch<SetStateAction<{}>>;
	title: string;
}

export const FetchButton = ({ onPress, title }: Props) => (
	<TouchableOpacity onPress={onPress} style={styles.container}>
		<Text style={styles.buttonText}>{title}</Text>
		<Image style={styles.image} source={require('../assets/refresh.png')} />
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#0d4c8c',
		paddingVertical: 10,
		paddingHorizontal: 12,
		borderRadius: 20,
		width: 110,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
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
