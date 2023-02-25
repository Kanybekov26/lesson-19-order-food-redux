import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import Basket from './components/basket/Basket';
import Header from './components/header/Header';
import Meals from './components/meals/Meals';
import Summary from './components/summary/Summary';
import { Snackbar } from './components/Ui/Snackbar';
import { store } from './store';
import { uiActions } from './store/ui/uiSlice';


function AppContent() {

  const dispatch = useDispatch()

 const [isbasketVisible,setBasketVisible] = useState(false)

const snackbar = useSelector(state => state.ui.snackbar)
console.log(snackbar,"snack");
 const showBasketHandler = () => {
  setBasketVisible((prevState)=> !prevState)
 }



 
  return (
    <>
    <Header onShowBasket={showBasketHandler}/>
     <Content>
     <Summary/>   
     <Meals/>
    {isbasketVisible && <Basket onClose={showBasketHandler} isbasketVisible={isbasketVisible}/> }
    <Snackbar
        isOpen={snackbar.isOpen}
        onClose={() => dispatch(uiActions.closeSnackBar())}
        message={snackbar.massage}
        severity={snackbar.severity}
      /> 
     </Content>
    </>
     
    
  );
}

const App = () => {
  return(
    <Provider store={store}>
   <AppContent/>

    </Provider>
  )
}


export default App;

const Content = styled.div`
margin-top:101px;
`