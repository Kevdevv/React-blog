import React from 'react'
import {useEffect, useState} from 'react';

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [mealsByCategory, setMealsByCategory] = useState([]);
  useEffect (() => {
    (async function () {
        const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

        const response = await fetch(url);
        const categoriesFromApi = await response.json();
        setMenu(categoriesFromApi.categories)
    })();
  }, []);
  
  const getMealsByCategory = async (category) => {
    const categoryName = category.strCategory;

    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categoryName;

    const response = await fetch(url);
    const mealsFromApi = await response.json();

    setMealsByCategory(mealsFromApi.meals)
  };
  return (
    <>
    <nav>
        <ul>
            {menu.map((category) => {
                return <li key={category.idCategory} onClick={() => getMealsByCategory(category)}>{category.strCategory}</li>
            })}
        </ul>
    </nav>

    <section>
    {mealsByCategory.map((mealsByCategory) => {
                return <p key={mealsByCategory.idMeal}> {mealsByCategory.strMeal}</p>;
            })}
    </section>
    </>
  );
};

export default Menu