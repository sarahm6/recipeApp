import React, { useReducer, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm, Controller } from 'react-hook-form';

function RecipeForm() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className='mb-3' controlId='formName'>
        <Form.Label>Name</Form.Label>
        <Controller
          name='firstName'
          control={control}
          render={({ field }) => (
            <Form.Control {...field} required type='text' placeholder='Enter recipe name' />
          )}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formCategory'>
        <Form.Label>Category</Form.Label>
        <Controller
          name='category'
          control={control}
          render={({ field }) => (
            <Form.Control {...field} required type='text' placeholder='Category' />
          )}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formDescription'>
        <Form.Label>Description</Form.Label>
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <Form.Control {...field} required type='text' placeholder='Description' />
          )}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formImageUrl'>
        <Form.Label>Image Url</Form.Label>
        <Controller
          name='imageUrl'
          control={control}
          render={({ field }) => (
            <Form.Control {...field} required type='text' placeholder='Image Url' />
          )}
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default RecipeForm;
