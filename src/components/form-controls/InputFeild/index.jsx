import React from 'react';
import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';



InputFeild.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputFeild(props) {
    const { form, name, label, disabled } = props;
    const {formState} = form;
    const hasError = formState.touchedFields[name] && !!formState.errors[name];
    return (
        <Controller
        control={form.control}
        name={name}
        render = {({ field})=> (
                <TextField
                    variant="outlined"
                    margin="normal"
                    {...field}
                    fullWidth
                    label={label}
                    required
                    disabled={disabled}
                    error={hasError}
                    helperText={formState.errors[name]?.message}
                />
            )}
        />

    );
}

export default InputFeild;