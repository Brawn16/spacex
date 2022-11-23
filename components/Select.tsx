import { SelectList } from 'react-native-dropdown-select-list';
import { Image, StyleSheet } from 'react-native';
import React from 'react';

export function Select(props: any) {
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
		backgroundColor: '#0d4c8c',
		borderRadius: 0,
		color: 'white',
		minWidth: 80,
		maxWidth: 140,
		fontFamily: 'BrandonGrotesque',
		fontSize: 12,
	},
	image: {
		width: 10,
		marginTop: 8,
		marginLeft: 5,
	},
});
