import React, { ChangeEventHandler } from 'react';

import './Input.css';

interface InputProps {
	labelText?: string;
	placeholderText: string;
	className: string;
	type: string;
	id?: string;
	onChange?:
		| ChangeEventHandler<HTMLInputElement>
		| ChangeEventHandler<HTMLTextAreaElement>;
	minLength?: number;
	required?: boolean;
}
const Input: React.FC<InputProps> = ({
	labelText,
	placeholderText,
	className,
	type,
	id,
	onChange,
	minLength,
	required,
}) => {
	return (
		<div className='input'>
			{labelText && (
				<label htmlFor={id} className='input_label'>
					{labelText}
				</label>
			)}
			{type === 'textarea' ? (
				<textarea
					rows={10}
					placeholder={placeholderText}
					className={className}
					id={id ? id : 'input_without_label'}
					onChange={onChange}
					required={required}
				/>
			) : (
				<input
					type={type}
					placeholder={placeholderText}
					className={className}
					id={id ? id : 'input_without_label'}
					minLength={minLength ? minLength : 1}
					onChange={onChange}
					required={required}
				/>
			)}
		</div>
	);
};

export default Input;
