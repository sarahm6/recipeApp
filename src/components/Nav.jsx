function Nav() {
    return (
      <header>
        <section className='wrapper nav-flex'>
          <nav className='navigation'>
            <ul>
              <li>
                <a href='#'>RECIPES</a>
              </li>
              <li>
                <a href='#'>CATEGORIES</a>
              </li>
            </ul>
          </nav>
          <nav className='login-area'>
            <button className='login'>
              <a href='#'>LOGIN</a>
            </button>
            <button className='register'>
              <a href='#'>REGISTER</a>
            </button>
          </nav>
        </section>
      </header>
    );
  }
  
  export default Nav;