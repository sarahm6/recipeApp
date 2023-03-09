import './App.css';
import Recipes from './components/Recipes';
import RecipeForm from './components/RecipeForm';
import MainLayout from './components/MainLayout';
import { Routes, Route} from "react-router-dom";



function App() {

  return (
    <div className='App'>
      <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Recipes />} />
        <Route path="new-recipe" element={<RecipeForm />} />
      </Route>
  
      </Routes>
    </div>
  );
}



export default App;
