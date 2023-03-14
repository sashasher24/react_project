import React, { ChangeEventHandler } from 'react';

import './Input.css';

interface InputProps {
	placeholderText: string;
	className: string;
	type: string;
	labelText?: string;
	id?: string;
	onChangeTextArea?: ChangeEventHandler<HTMLTextAreaElement>;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	minLength?: number;
	required?: boolean;
	value?: string;
}
const Input: React.FC<InputProps> = ({
	placeholderText,
	className,
	type,
	labelText,
	id,
	onChangeTextArea,
	onChange,
	minLength,
	required,
	value,
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
					onChange={onChangeTextArea}
					required={required}
					value={value}
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
					value={value ? value : ''}
				/>
			)}
		</div>
	);
};

export default Input;
