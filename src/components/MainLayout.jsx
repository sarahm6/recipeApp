import Header from './/Header';
import Nav from './/Nav';

function MainLayout({children}) {
  return (
    <div className='container-xxl'>
      <Header />
      <Nav />
      <main>
        <section className='jumbo'>
          <h2>What's cooking today in Yasmeen's Kitchen?</h2>
          <div className='search'>
            <input type='search' placeholder='find a recipe' />
            <button label='FIND'>FIND</button>
          </div>
        </section>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
