import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Basket from './components/basket/Basket';
import Header from './components/header/Header';
import Meals from './components/meals/Meals';
import Summary from './components/summary/Summary';
import { BasketProvaider } from './store/BasketContext';

function App() {

 const [isbasketVisible,setBasketVisible] = useState(false)

 const showBasketHandler = () => {
  setBasketVisible((prevState)=> !prevState)
 }

  return (
    
      <BasketProvaider>
     <Header onShowBasket={showBasketHandler}/>
     <Content>
     <Summary/>
     <Meals/>
    {isbasketVisible && <Basket onClose={showBasketHandler}/> } 
     </Content>
     </BasketProvaider>
    
  );
}

export default App;

const Content = styled.div`
margin-top:101px;
`