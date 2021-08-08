import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { shoppingCartReducer } from "./shoppingCartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { shopReducer } from "./shop-reducer/shopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["shoppingCart", "user"],
};

export const rootReducer = combineReducers({
  user: userReducer,
  shoppingCart: shoppingCartReducer,
  shop: shopReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
