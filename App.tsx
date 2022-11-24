import React from 'react';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import { Select, ListItem, SortByButton, FetchButton } from './components';
import { api } from './constants';
import { formatFilterByYearOptions, sortAndFilterData } from './helpers';
import { useFetchData } from './hooks/useFetchData';
import { useFonts } from 'expo-font';
import { SortBy } from './types';
import theme from './styles/theme.style.js';

// Things to change and add
// 1. More theming and remove magic numbers and improve styling
// 2. better types - not fully covered yet
// 3. would make components more reusable eg: icons / images passed in from parent
// 4. logo title moves when loading
// 5. better use of loading and actually use error
// 6. add testing coverage (should be higher up list)
// 7. check performance eg re renders

export default function App() {
	const [selected, setSelectedFilter] = React.useState<string>('');
	const [sortBy, setSortBy] = React.useState<SortBy>('asc');
	const { loading, data, error, refetch } = useFetchData(api);

	const [loaded] = useFonts({
		BrandonGrotesque: require('./assets/fonts/BrandonGrotesque-Regular.ttf'),
	});

	if (!loaded) {
		return null;
	}

	const renderListItem = ({ item }) => {
		if (item) {
			return <ListItem {...item} />;
		}
	};

	const handleSortByPress = () => {
		if (sortBy === 'asc') {
			setSortBy('desc');
		} else {
			setSortBy('asc');
		}
	};

	const selectData = formatFilterByYearOptions(data);

	const sortByText = sortBy === 'asc' ? 'Descending' : 'Ascending';

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Image
					style={styles.image}
					source={require('./assets/spacex-logo.png')}
				/>
				<Text style={styles.headerText}>LAUNCHES</Text>
			</View>
			<View style={styles.fetchButtonContainer}>
				<FetchButton title="Reload Data" onPress={refetch} />
			</View>
			<View style={styles.filters}>
				<Select
					options={selectData}
					onSelect={setSelectedFilter}
					placeholder="Filter By Year"
				/>
				<SortByButton
					title={`Sort By ${sortByText}`}
					onPress={handleSortByPress}
				/>
			</View>
			<>
				{loading ? (
					<Text>....Loading</Text>
				) : (
					<FlatList
						style={styles.launchList}
						data={sortAndFilterData(data, selected, sortBy)}
						renderItem={renderListItem}
						keyExtractor={(_, i) => i.toString()}
					/>
				)}
			</>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		paddingHorizontal: 30,
		flex: 1,
		backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
		alignItems: 'center',
		justifyContent: 'center',
		maxHeight: 700,
	},
	image: {
		width: 200,
		height: 30,
		resizeMode: 'contain',
	},
	titleContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
	},
	filters: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	launchList: {},
	fetchButtonContainer: {
		paddingVertical: 20,
		width: '100%',
		flexDirection: 'row-reverse',
	},
	headerText: {
		fontFamily: 'BrandonGrotesque',
		fontSize: 20,
		color: theme.SECONDARY_TEXT_COLOR,
		fontWeight: '100',
	},
});
