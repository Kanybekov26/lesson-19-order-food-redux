
import styled from 'styled-components'
import React from 'react'
import BasketButton from "../header/BasketButton"

const Header = () => {
  return (
    <Container>
        <Logo>ReactMeals</Logo>
        <BasketButton></BasketButton>
    </Container>
  )
}

export default Header

const Container = styled.header`
    width: 100%;
    height: 101px;
    background-color: #8A2B06;
    display: flex;
    justify-content: space-between;
    padding-left:120px;
    padding-right:120px;
    align-items: center;
    position: fixed;
    z-index: 1;
    top: 0;
    
`

const Logo = styled.p`
    font-weight: 600;
font-size: 38px;
line-height: 57px;

margin: 0;
color: #FFFFFF;
`