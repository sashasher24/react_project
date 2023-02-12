import React from 'react';
import './UserName.css';

interface UserNameProps {
	name: string;
}
const UserName: React.FC<UserNameProps> = (props) => {
	return <div className='header_user_name'>{props.name}</div>;
};

export default UserName;
