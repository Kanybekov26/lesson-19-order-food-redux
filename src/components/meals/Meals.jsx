import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMeals} from "../../store/meals/mealsSlice";
import MealItem from "./meal-item/MealItem";
// const DUMMY_MILS = [
//   {
//     id: "1",
//     title: "sishi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: '2',
//     title: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.99,
//   },
//   {
//     id: '3',
//     title: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },

//   {
//     id: '4',
//     title: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 19.99,
//   },
// ];

const Meals = () => {
  const dispatch = useDispatch()
 const {meals,isLoading,error} = useSelector((state) => state.meals)
 console.log(error);
 

  useEffect(() => {
    dispatch(getMeals())

  },[dispatch])
  return <>
    <Card>
      {isLoading && <p>loading......</p>}
      {error && <p style={{color: "red"}}>{error}</p>}
    {meals || [].map((meal) => {
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