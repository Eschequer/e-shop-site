import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { shoppingCartReducer } from "./shoppingCartReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  shoppingCart: shoppingCartReducer,
});
