import { useState, useEffect } from 'react';
import axios from 'axios';
import { formatData } from '../helpers';

export const useFetchData = (url: string) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [shouldRefetch, refetch] = useState({});

	useEffect(() => {
		setLoading(true);
		axios
			.get(url)
			.then((response) => {
				setData(formatData(response.data));
			})
			.catch((error) => {
				console.log(error);
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [shouldRefetch, url]);
	return { loading, data, error, refetch };
};
