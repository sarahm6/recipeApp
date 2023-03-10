import Recipe from './Recipe';
// import { useState, useEffect } from 'react';
import useData from '../hooks/useData';
import axios from 'axios';
// import useSWR, { useSWRConfig } from 'swr'


function Recipes() {
  // const { mutate } = useSWRConfig()
    const { data } = useData('/recipes');

    const handleDelete = (id) => {
      async function deleteRecipe() {
        const endPoint = process.env.REACT_APP_BASE_URL+"/recipes/"+id;
        try {
          await axios.delete(endPoint);
            // mutate('/recipes')
            window.location.reload();
  
        } catch (error) {
          console.log(error)
        }
      }
      deleteRecipe();
    }

  return (
    <section className='wrapper product'>
      <h2 className='section-name'>our delicious collections</h2>
      {data?.map((recipe) => {
      return <Recipe {...recipe} key ={recipe._id} handleDelete={handleDelete}/>
      })}
      
    </section>
  );
}

export default Recipes;
