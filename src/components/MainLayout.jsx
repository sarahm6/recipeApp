import Nav from './/Nav';
import { Outlet } from "react-router-dom";


function MainLayout() {
  return (
    <div className='container-xxl'>
      <Nav />
      <main>
        <section className='jumbo'>
          <h2>What's cooking today in Yasmeen's Kitchen?</h2>
          <div className='search'>
            <input type='search' placeholder='find a recipe' />
            <button label='FIND'>FIND</button>
          </div>
        </section>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
