import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const CheckboxComponent = (props) => {
    const {checked, handleChange, name, color='primary', label} = props;
    return (
        <FormControlLabel
            control={
            <Checkbox
                color={color}
                checked={Boolean(checked)}
                onChange={handleChange}
                name={name}
            />
            }
            label={label}
        />
    );
}

export default CheckboxComponent;