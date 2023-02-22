import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { basketSlice } from "./basket/basketSlice";
import { mealsSlice } from "./meals/mealsSlice";
import { uiSlice } from "./ui/uiSlice";

const roorReduser = combineReducers({
  [mealsSlice.name]:  mealsSlice.reducer,
  [basketSlice.name]: basketSlice.reducer,
  [uiSlice.name]:uiSlice.reducer,
})


export const store = createStore(roorReduser,applyMiddleware(thunk) )