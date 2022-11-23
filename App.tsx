import React from 'react';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import { Select, ListItem, SortByButton, FetchButton } from './components';
import { api } from './constants';
import { formatFilterByYearOptions } from './helpers';
import { useFetchData } from './hooks/useFetchData';
import { useFonts } from 'expo-font';
import { LaunchInfo } from './types';

export default function App() {
	const [selected, setSelectedFilter] = React.useState<string>('');
	const [sortBy, setSortBy] = React.useState<'asc' | 'desc'>('asc');
	const { loading, data, error, refetch } = useFetchData(api);

	const [loaded] = useFonts({
		BrandonGrotesque: require('./assets/fonts/BrandonGrotesque-Regular.ttf'),
	});

	if (!loaded) {
		return null;
	}

	const renderListItem = ({ item }) => {
		if (item) {
			return <ListItem name={item.name} id={item.id} mission={item.mission} />;
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

	const sortedAndFilteredData = (data: LaunchInfo[]) => {
		// uses the selected year option to filter data
		const filteredData = data.map((item) => {
			if (
				selected === '' ||
				selected === 'Any' ||
				selected == item.launch_year
			) {
				return item;
			}
		});

		// uses selected sort option to sort data
		return filteredData.sort((a: { id: number }, b: { id: number }) => {
			if (sortBy === 'asc') {
				return a.id - b.id;
			} else {
				return b.id - a.id;
			}
		});
	};

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
						data={sortedAndFilteredData(data)}
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
		backgroundColor: '#fff',
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
		color: '#606060',
		fontWeight: '100',
	},
});
