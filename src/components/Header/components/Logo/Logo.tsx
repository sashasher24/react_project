import logo from '../../../../assets/images/logo.png';
import React, { ReactElement } from 'react';
import './Logo.css';

const Logo: React.FC = (): ReactElement => {
	return (
		<img
			className='header_logo'
			src={logo}
			alt='logo'
			data-testid='header_logo'
		/>
	);
};

export default Logo;
