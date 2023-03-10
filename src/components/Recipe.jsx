import React from 'react';
import Button from 'react-bootstrap/Button';

  

function Recipe({
  _id: id ,
  handleDelete,
  name = 'Samosas',
  content = 'Quick and spicy',
  category = 'snack',
  imageURL = 'http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/36/78/07/picgLdb1z.jpg',
  ingredients = "Lentils"
}) {

  

  return (
    <article className='card'>
      <div className='box'>
        <img src={imageURL} />
      </div>
      <header className='card-content'>
        <span className='card-category chicken margin-right-5'>{category}</span>
        <Button className='del-btn' size="sm" variant="outline-danger" onClick={() => handleDelete(id)}>Delete</Button>
        <span className='card-header'>{name}</span>
        <span className='card-desc'>{content}</span>
      </header>
      <footer className='card-content'>
        <div className='view_recipe'>
        <span className='card-header'>Ingredients</span>
          {ingredients}
        </div>
      </footer>
    </article>
  );
}

export default Recipe;
