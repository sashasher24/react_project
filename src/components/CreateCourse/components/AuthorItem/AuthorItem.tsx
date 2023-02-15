import React from 'react';
import Button from '../../../../common/Button/Button';

import './AuthorItem.css';

interface AuthorItemProps {
	name: string;
	buttonText: string;
	id?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const AuthorItem: React.FC<AuthorItemProps> = (props) => {
	return (
		<div className='author_item'>
			<span className='author_item_name'>{props.name}</span>
			<Button
				buttonText={props.buttonText}
				class='add_author_button'
				onClick={props.onClick}
			/>
		</div>
	);
};

export default AuthorItem;
