import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


const SelectComponent = (props) => {
    const {options, handleChange, value, name, label} = props;
    return (
        <FormControl fullWidth>
            <InputLabel id={label}>Direction</InputLabel>
            <Select
            labelId={label}
            name={name}
            value={value}
            onChange={handleChange}
            >
                {options.map(option => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem> )}
            </Select>
        </FormControl>
    );
}

export default SelectComponent;