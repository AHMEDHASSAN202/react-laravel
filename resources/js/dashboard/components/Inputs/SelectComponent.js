import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


const SelectComponent = (props) => {
    const {options, handleChange, value, name=null, label=null, ...rest} = props;
    return (
        <FormControl fullWidth>
            {label != null ? <InputLabel id={label}>{label}</InputLabel> : ''}
            <Select
            {...rest}
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