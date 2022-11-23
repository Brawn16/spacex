import React, { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import theme from '../styles/theme.style.js';

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
		backgroundColor: theme.PRIMARY_BUTTON_COLOR,
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
		fontSize: theme.FONT_SIZE_SMALL,
		fontFamily: 'BrandonGrotesque',
	},
	image: {
		width: 15,
	},
});
