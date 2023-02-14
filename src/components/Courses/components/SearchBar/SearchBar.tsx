import React, { Dispatch, SetStateAction } from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import './SearchBar.css';

interface SearchBarProps {
	filterCourses: (value: string) => void;
	filterValue: string;
	setFilterValue: Dispatch<SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
	return (
		<div className='search_bar'>
			<Input
				type='search'
				placeholderText='Enter Course Name ...'
				className='search_bar_input'
				onChange={(e) => props.setFilterValue(e.target.value)}
				value={props.filterValue}
			/>
			<Button
				buttonText='search'
				class='search_bar_button'
				onClick={() => props.filterCourses(props.filterValue)}
			/>
		</div>
	);
};

export default SearchBar;
