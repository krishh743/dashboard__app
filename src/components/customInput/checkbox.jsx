import React from "react";
import "./customInput.css";

export default function CheckboxInput({
	disabled,
	values,
	setValues,
	checked,
	className = "",
	name = "",
	afterInputChangeCallback,
	...props
}) {
	const checkChangeHandler = (e) => {
		let name = e.target.name;
		let checked = e.target.checked;
		let updatedValues = { ...values, [name]: checked };
		if (setValues) setValues(updatedValues);
		afterInputChangeCallback &&
			afterInputChangeCallback(updatedValues, name, checked);
	};

	return (
		<div className="custom-checkbox custom-input">
			<input
				disabled={disabled}
				type="checkbox"
				checked={checked || values?.[name] || false}
				onChange={checkChangeHandler}
				name={name}
				className={className}
				{...props}
			/>
		</div>
	);
}
