import { persistedReducer } from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";
/*import { logger } from "redux-logger";*/

import { persistStore } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  /*logger*/
];

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
