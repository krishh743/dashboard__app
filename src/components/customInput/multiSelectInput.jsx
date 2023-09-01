import { Autocomplete, TextField, createFilterOptions } from "@mui/material";
import { useEffect, useState } from "react";

export default function MuiltiSelectInput({
	name = "",
	options = [],
	values,
	setValues,
	errors,
	label,
	hint,
	placeholder,
	onChange,
	disabled,
	afterInputChangeCallback,
	...props
}) {
	const inputChangeHandler = (e, newValue) => {
		if (newValue.find((option) => option.code === 0)) {
			if (options.length === values?.[name]?.length) {
				setValues({ ...values, [name]: [] });
			} else {
				setValues({ ...values, [name]: options });
			}
		} else {
			setValues({ ...values, [name]: newValue });
		}
	};

	return (
		<div className="custom-multi-select custom-input">
			<Autocomplete
				multiple
				disabled={!options?.length || disabled}
				options={options}
				getOptionLabel={(option) => option.value}
				filterSelectedOptions
				renderInput={(params) => (
					<TextField
						{...params}
						label={label}
						placeholder=""
						variant="standard"
					/>
				)}
				value={values?.[name] || []}
				onChange={onChange ? onChange : inputChangeHandler}
				isOptionEqualToValue={(option, value) =>
					option.code === value.code
				}
				{...props}
			/>
			<span
				className={`field-label ${
					!options?.length || disabled ? "Mui-disabled" : ""
				}`}
			>
				{hint}
			</span>
			{errors?.map((each) => (
				<p className="error">{each}</p>
			))}
		</div>
	);
}
