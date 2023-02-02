import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchApi } from "../../lib/FetchApi";
import MealItem from "./meal-item/MealItem";
const DUMMY_MILS = [
  {
    id: "1",
    title: "sishi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: '2',
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.99,
  },
  {
    id: '3',
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },

  {
    id: '4',
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];

const Meals = () => {
  const [meals,setmeals] = useState([])
  const [error,setError] = useState('')

  const getMeals = async() => {
    try{
 const respons = await fetchApi('foods');
 console.log(respons);
 setmeals(respons.data)
 }catch(error) {
  console.log(error);
  setError("failed to load meals")
 }

  }

  useEffect(() => {
    getMeals();
  },[])
  return <>
    <Card>
    {meals.map((meal) => {
      return <MealItem meal={meal} key={meal.id}/>
    })}
    </Card>
  </>;
};

export default Meals;


const Card = styled.div`
  background: #FFFFFF;
border-radius: 16px;
width:75%;
margin: 40px auto;
padding:40px 40px 36px 40px;
`