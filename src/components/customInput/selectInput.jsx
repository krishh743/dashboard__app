import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";

const acceptAlphabetNumber = (value) => {
  return value ? value.replace(/[^A-Za-z0-9 ]+/, "") : "";
}

const SelectInput = ({
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
}) => {

  const [searchValue, setSearchValue] = useState("");

  const inputChangeHandler = (e, value , type) => {
    let updatedValues = { ...values, [name]: value };
    setValues(updatedValues);
    if (type === 'clear') {
      setSearchValue("")
    }
    afterInputChangeCallback &&
      afterInputChangeCallback(updatedValues, name, value);
  };

  useEffect(() => {
    if (values?.[name]?.value) {
      setSearchValue(values?.[name]?.value);
    }
    else{
      setSearchValue("");
    }
  }, [values?.[name]?.value]);

  return (
    <div
      className="custom-select custom-input"
    >
      <Autocomplete
        disabled={!options?.length || disabled}
        options={options}
        getOptionLabel={(option) => option.value}
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="standard"
            autoComplete="new-password"
          />
        )}
        {...props}
        onChange={onChange ? onChange : inputChangeHandler}
        value={values?.[name] || null}
        inputValue={searchValue}
        onInputChange={(e) => {
          if (!e?.target?.value && e?.target?.value!=="") return;
          let value = e?.target?.value;
          value = acceptAlphabetNumber(value);
          setSearchValue(value || "");
        }}
        onBlurCapture={() => {
          setSearchValue(values?.[name]?.value || "");
        }}
        renderOption={(props, option) => (
          <li
            {...props}
            onClick={(e) => {
              props?.onClick && props?.onClick(e)
              if (option?.value === values?.[name]?.value) {
                setSearchValue(option.value);
              }
            }}
            key={props["data-option-index"]}
          >
            {option?.value}
          </li>
        )}
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
};

export default SelectInput;
