import { NavLink } from "react-router-dom";


function Nav() {
    return (
      <header>
        <section className='wrapper nav-flex'>
          <nav className='navigation'>
            <ul>
              <li>
              <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/">Recipes</NavLink>
              </li>
              <li>
              <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/new-recipe">Create a recipe</NavLink>

              </li>
            </ul>
          </nav>
        </section>
      </header>
    );
  }
  
  export default Nav;