import React from 'react';
import {useEffect, useState} from 'react';


const Meal = () => {

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
    <>
    {meal ? (
        <article>
            <h2>{meal.strMeal}</h2>
        </article>
    ) :(
        <p>Pas de recette</p>
    )}
    </>
  )
}

export default Meal