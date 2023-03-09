import Recipe from './Recipe';
// import { useState, useEffect } from 'react';
import useData from '../hooks/useData';

function Recipes() {
    const { data, isLoading, isError } = useData('/recipes');
    console.log(data)

  return (
    <section className='wrapper product'>
      <h2 className='section-name'>our delicious collections</h2>
      {data?.map((recipe) => {
      return <Recipe {...recipe} key ={recipe._id}/>
      })}
      {/* <article className='card featured'>
        <div className='box'>
          <img src='http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/36/78/07/picgLdb1z.jpg' />
        </div>
        <header className='card-content'>
          <span className='card-category chicken'>food category</span>
          <span className='card-header'>recipe name</span>
          <span className='card-desc'>recipe short description goes here.</span>
        </header>
        <footer className='card-content'>
          <div className='view_recipe'>
            <span className='view-recipe'>
              <a href='#'>View Recipe</a>
            </span>
          </div>
        </footer>
      </article>
      <article className='card'>
        <div className='box'>
          <img src='http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/36/78/07/picgLdb1z.jpg' />
        </div>
        <header className='card-content'>
          <span className='card-category chicken'>food category</span>
          <span className='card-header'>recipe name</span>
          <span className='card-desc'>recipe short description goes here.</span>
        </header>
        <footer className='card-content'>
          <div className='view_recipe'>
            <span className='view-recipe'>
              <a href='#'>View Recipe</a>
            </span>
          </div>
        </footer>
      </article>
      <article className='card'>
        <div className='box'>
          <img src='http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/36/78/07/picgLdb1z.jpg' />
        </div>
        <header className='card-content'>
          <span className='card-category chicken'>food category</span>
          <span className='card-header'>recipe name</span>
          <span className='card-desc'>recipe short description goes here.</span>
        </header>
        <footer className='card-content'>
          <div className='view_recipe'>
            <span className='view-recipe'>
              <a href='#'>View Recipe</a>
            </span>
          </div>
        </footer>
      </article>
      <article className='card'>
        <div className='box'>
          <img src='http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/36/78/07/picgLdb1z.jpg' />
        </div>
        <header className='card-content'>
          <span className='card-category chicken'>food category</span>
          <span className='card-header'>recipe name</span>
          <span className='card-desc'>recipe short description goes here.</span>
        </header>
        <footer className='card-content'>
          <div className='view_recipe'>
            <span className='view-recipe'>
              <a href='#'>View Recipe</a>
            </span>
          </div>
        </footer>
      </article>
      <article className='card'>
        <div className='box'>
          <img src='http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/36/78/07/picgLdb1z.jpg' />
        </div>
        <header className='card-content'>
          <span className='card-category chicken'>food category</span>
          <span className='card-header'>recipe name</span>
          <span className='card-desc'>recipe short description goes here.</span>
        </header>
        <footer className='card-content'>
          <div className='view_recipe'>
            <span className='view-recipe'>
              <a href='#'>View Recipe</a>
            </span>
          </div>
        </footer>
      </article> */}
    </section>
  );
}

export default Recipes;
