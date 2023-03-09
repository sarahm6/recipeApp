import React from 'react';

function Recipe({
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
        <span className='card-category chicken'>{category}</span>
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
