import React from 'react';
import './Button.css';

interface ButtonProps {
	buttonText: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	class?: string;
	type?: 'submit' | 'reset' | 'button';
}
const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button
			className={props.class ? props.class : 'base_button'}
			onClick={props.onClick}
			type={props.type ? props.type : 'button'}
		>
			{props.buttonText}
		</button>
	);
};

export default Button;
