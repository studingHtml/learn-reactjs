import React, { useState } from 'react';
import PropTypes from 'prop-types';





import IconButton from '@material-ui/core/IconButton';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormControl from '@material-ui/core/FormControl';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Controller } from 'react-hook-form';
import { FormHelperText } from '@material-ui/core';



PasswordFeild.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordFeild(props) {
    const { form, name, label, disabled } = props;
    const {formState} = form;
    const hasError = formState.touchedFields[name] && !!formState.errors[name];
    const [showPassword,setShowPassword] = useState(false);
    const toggleShowPassword =() => {
        setShowPassword(x => !x);
    }
    return (
        <Controller
        control={form.control}
        name={name}
        render = {({ field})=> (
            
            <FormControl fullWidth variant="outlined" margin="normal" error={hasError}>
            <InputLabel htmlFor={name} >{label}</InputLabel>
            <OutlinedInput
              {...field}
              id={name}
              type={showPassword ? 'text' : 'password'}
              label={label}
              error={hasError}
              

              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }

                

            />
            <FormHelperText error id={name}>
                  {formState.errors[name]?.message}
                </FormHelperText>
          </FormControl>
            )}
        />

    );
}

export default PasswordFeild;