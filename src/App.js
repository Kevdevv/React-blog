import './App.css';
import Meal from "./Meal"
import Menu from "./Menu"
import {useEffect, useState} from 'react';

function App() {

  const [meal, setMeal] = useState();
    useEffect(() => {
        (async function () {
            const url = "https://www.themealdb.com/api/json/v1/1/random.php"

            const response = await fetch (url);

            const mealsFromApi = await response.json();

            setMeal(mealsFromApi.meals[0]);

        })()
    }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <Meal meal={meal} />
    </div>
  );
}

export default App;
