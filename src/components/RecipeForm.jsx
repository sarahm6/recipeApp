import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

function RecipeForm() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    async function createRecipe () {
      const endPoint = process.env.REACT_APP_BASE_URL+"/recipes"
      try {
      await axios.post(endPoint, {...data})
      navigate("/"); 
      } catch (error) {
        console.log(error)
      }
    }
    createRecipe();
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className='mb-3' controlId='name'>
        <Form.Label>Name</Form.Label>
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <Form.Control {...field} required type='text' placeholder='Enter recipe name' />
          )}
        />
      </Form.Group>

      {/* <Form.Group className='mb-3' controlId='formCategory'>
        <Form.Label>Category</Form.Label>
        <Controller
          name='category'
          control={control}
          render={({ field }) => (
            <Form.Control {...field} required type='text' placeholder='Category' />
          )}
        />
      </Form.Group> */}

      <Form.Group className='mb-3' controlId='formContent'>
        <Form.Label>Description</Form.Label>
        <Controller
          name='content'
          control={control}
          render={({ field }) => (
            <Form.Control {...field} required type='text' placeholder='Content' />
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
