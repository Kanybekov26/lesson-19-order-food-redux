import { createContext, useState } from "react";
import { fetchApi } from "../lib/FetchApi";

export const BasketContext = createContext({
  items: [],
});

export const BasketProvaider = ({ children }) => {
  const [items, setaItems] = useState([]);

  const updateBasketItem = async ({ id, amount }) => {
    try {
      const { data } = await fetchApi(`basketItem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      setaItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };



  const deleteBasketItem = async (id) => {
    try {
      const { data } = await fetchApi(`basketItem/${id}/delete`, {
        method: "DELETE",
       });
      setaItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

 

  // useEffect(() => {
  //   getBasket();
  // }, []);

  // const addToBasket = async (newItem) => {
  //   console.log(newItem.amount);
  //   try {
  //     const response = await fetchApi(`foods/${newItem.id}/addToBasket`, {
  //       method: "POST",
  //       body: { amount: newItem.amount },
  //     });

  //     setaItems(response.data.items);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const state = {
    items,
    // addToBasket,
    updateBasketItem,
  deleteBasketItem 
  };

  return (
    <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
  );
};
