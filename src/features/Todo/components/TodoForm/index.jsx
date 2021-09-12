import React from 'react';
import PropTypes from 'prop-types';
import InputFeild from '../../../../components/form-controls/InputFeild';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object().shape({
        title: yup.string()
        .required('Please input something')
        .min(5, 'Title is too short'),
    });
    
    const form = useForm({
        
        defaultValues: {
            title: '',//can liet ke toan bo feild tai day
        },
        resolver: yupResolver(schema),
    });

    

    const handleSubmit= (values) => {
        console.log('Todo form: ', values);
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} noValidate>
            <InputFeild name="title" label="todo" form={form}/>
        </form>
    );
}

export default TodoForm;