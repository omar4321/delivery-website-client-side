import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post('https://serene-escarpment-13316.herokuapp.com/addpizza', data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert('added successfully');
          reset();
        }
      });
    console.log(data);
  };
  return (
    <>
      <h1>Add Pizza for sell</h1>

      <div className="add-service">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input {...register('name')} placeholder="enter name" />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register('description')} placeholder="description" />
          <input type="number" {...register('price')} placeholder="price" />
          <input {...register('img')} placeholder="img-url" />

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Admin;
