import './App.css';
import Recipes from './components/Recipes';
import RecipeForm from './components/RecipeForm';
import MainLayout from './components/MainLayout';



function App() {

  return (
    <div className='App'>
      <MainLayout>
        <RecipeForm />

          <Recipes />
      </MainLayout>

    </div>
  );
}

export default App;
