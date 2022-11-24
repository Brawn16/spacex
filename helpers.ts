import { LaunchInfo, SortBy } from "./types";

export const formatData = (data) => {
    const newData = data.map((item) => {
        return { mission: item.mission_name,name: item.rocket.rocket_name, launch_year: item.launch_year, id: item.launch_date_unix};
    });

    return newData;
};

export const formatFilterByYearOptions = (data: LaunchInfo[])=>{   
  return [...new Set(['Any', ...data.map((item) => item.launch_year)])];
} 

export const getOrdinalNum = (number:number) => {
    let selector:number;
  
    if (number <= 0) {
      selector = 4;
    } else if ((number > 3 && number < 21) || number % 10 > 3) {
      selector = 0;
    } else {
      selector = number % 10;
    }
  
    return number + ['th', 'st', 'nd', 'rd', ''][selector];
  };
    

  export const sortAndFilterData = (
		data: LaunchInfo[],
		selected: String,
		sortBy: SortBy
	) => {
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