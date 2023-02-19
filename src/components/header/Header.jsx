import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import BasketButton from "../header/BasketButton";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../../store/basket/basketReducer";

const Header = ({ onShowBasket }) => {
  const dispatch = useDispatch()
  const  items = useSelector((state) => state.basket.items)
  const [animationClass, setAnimatioClass] = useState("");

useEffect(() => {
dispatch(getBasket());
},[dispatch])

  const calculateTotalAmount = () => {
    console.log(items)
    const sum = items.reduce((s, item) => {
    
      return s + item.amount;
    }, 0);
    return sum;
  };

  useEffect(() => {
    setAnimatioClass("bump");

    const id = setTimeout(() => {
      setAnimatioClass("");
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [items]);
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton
        className={animationClass}
        onClick={onShowBasket}
        count={calculateTotalAmount()}
      ></BasketButton>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-between;
  padding-left: 120px;
  padding-right: 120px;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;

  margin: 0;
  color: #ffffff;
`;
