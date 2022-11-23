import { SelectList } from 'react-native-dropdown-select-list';
import { Image, StyleSheet } from 'react-native';
import React from 'react';
import theme from '../styles/theme.style.js';

interface Props {
	options: any[];
	onSelect: (val: string) => void;
	placeholder: string;
}

export function Select(props: Props) {
	const { options, onSelect, placeholder } = props;

	return (
		<SelectList
			defaultOption={options[0]}
			boxStyles={styles.select}
			placeholder={placeholder}
			inputStyles={styles.select}
			search={false}
			arrowicon={
				<Image style={styles.image} source={require('../assets/select.png')} />
			}
			setSelected={(val) => onSelect(val)}
			data={options}
			save="value"
		/>
	);
}

const styles = StyleSheet.create({
	select: {
		backgroundColor: theme.PRIMARY_BUTTON_COLOR,
		borderRadius: 0,
		color: theme.PRIMARY_TEXT_COLOR,
		minWidth: 80,
		maxWidth: 140,
		fontFamily: 'BrandonGrotesque',
		fontSize: theme.FONT_SIZE_SMALL,
	},
	image: {
		width: 10,
		marginTop: 8,
		marginLeft: 5,
	},
});
