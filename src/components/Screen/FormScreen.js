import React from 'react';
import Layout from './Layout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../Style/FormScreen.css';

const schema = yup.object().shape({
  name: yup.string().required('Name should be required please'),
  email: yup.string().email().required(),
  gender: yup.string().required(),
  phone: yup.number().positive().integer().min(11).required(),
});
const FormScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    /* console.log(data); */
    alert(JSON.stringify(data));
    window.location.reload();
  };
  const Select = React.forwardRef(({ onChange, onBlur, name }, ref) => (
    <>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value='male'>male</option>
        <option value='female'>female</option>
      </select>
    </>
  ));
  return (
    <Layout sidebar>
      <div className='create'>
        <h1>Create User form </h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <label htmlFor='name'>Your Name</label>
          <input {...register('name')} />
          <p style={{ color: 'red' }}> {errors.name?.message} </p>

          <label htmlFor='email'>Email address</label>
          <input {...register('email')} />

          <p style={{ color: 'red' }}> {errors.email?.message} </p>
          <label htmlFor='phone'>Your phone number</label>
          <input type='number' {...register('phone')} />
          <p style={{ color: 'red' }}> {errors.phone?.message} </p>

          <label htmlFor='gender'>Gender</label>
          <Select label='gender' {...register('gender')} />
          <p style={{ color: 'red' }}> {errors.gender?.message} </p>
          <input className='button' type='submit' id='submit' />
        </form>

        <div></div>
      </div>
    </Layout>
  );
};

export default FormScreen;
