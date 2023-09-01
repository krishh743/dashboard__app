/*eslint-disable eqeqeq*/
import { TextField } from "@mui/material";
import React, { useState } from "react";
import "./customInput.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const TextFieldInput = ({
	values,
	setValues,
	errors,
	name,
	label,
	startAdornment = null,
	endAdornment = null,
	hintText,
	variant = "standard",
	autoComplete = "off",
	afterInputChangeCallback,
	onChange,
	formatter,
	maxLength,
	disabled,
	...props
}) => {

	const [showAdornment, setShowAdornment] = useState(null);

	const inputChangeHandler = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		if (formatter === "name") {
			// value = onlyNumbersAccept(value);
		}
		if (maxLength && value?.length > maxLength) return;
		let updatedValues = { ...values, [name]: value };
		setValues(updatedValues);
		afterInputChangeCallback &&
			afterInputChangeCallback(updatedValues, name, value);
	};

	const onFocusHandler = () => {
		setShowAdornment(true);
	};

	const onBlurHandler = () => {
		setShowAdornment(false);
	};

	return (
		<div className="custom-input">
			<TextField
				name={name}
				label={label}
				variant={variant}
				disabled={disabled}
				InputProps={{
					style: { color: errors ? "#E64C66" : "#1C1B1B" },
					startAdornment:
						formatter == "currency" ? (
							values[name] || showAdornment ? (
								<CurrencyRupeeIcon
									className="adornment"
									fontSize="17px"
								/>
							) : null
						) : (
							startAdornment
						),
					endAdornment: endAdornment,
				}}
				value={props.value || values?.[name] || ""}
				{...props}
				onChange={onChange ? onChange : inputChangeHandler}
				autoComplete="new-password"
				onFocus={onFocusHandler}
				onBlur={onBlurHandler}
			/>
			{hintText && !errors && (
				<span
					className={`field-label ${
						disabled ? "Mui-disabled" : ""
					}`}
				>
					{hintText}
				</span>
			)}
			{errors && (
				<div className="error-messages">
					{errors?.map((error) => (
						<p className="error-message error">{error}</p>
					))}
				</div>
			)}
		</div>
	);
};

export default TextFieldInput;
