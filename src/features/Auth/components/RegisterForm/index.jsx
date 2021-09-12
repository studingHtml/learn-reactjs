import React from 'react';
import PropTypes from 'prop-types';
import InputFeild from '../../../../components/form-controls/InputFeild';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordFeild from '../../../../components/form-controls/PasswordFeild';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const schema = yup.object().shape({
        fullName: yup.string()
        .required('Please input something')
        .min(5, 'Fullname is too short'),
        email: yup.string()
        .required('Please input something')
        .min(5, 'Email is too short'),
        password: yup.string()
        .required('Please input something')
        .min(5, 'Password is too short'),
    }
    );
    
    const form = useForm({
        
        defaultValues: {
            email: '',
            password: '',
            fullName: '',
            retypePassword: '',

        },
        resolver: yupResolver(schema),
    });

    

    const handleSubmit= (values) => {
        console.log(values);
    }

    return (
        <>
        <Avatar>
            <LockOutlined></LockOutlined>
        </Avatar>
        <Typography component="h3" variant="h5">
            Create an account 
        </Typography>

        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputFeild name="fullName" label="Full Name" form={form}/>
            <InputFeild name="email" label="Email" form={form}/>
            <PasswordFeild name="password" label="Password" form={form}/>
            <PasswordFeild name="retypePassword" label="Retype Password" form={form}/>

            <Button type="submit" variant="contained" color="primary" fullWidth>
                Create an account
            </Button>

        </form>
        </>


        
    );
}

export default RegisterForm;