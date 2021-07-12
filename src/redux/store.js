import { rootReducer } from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";
/*import { logger } from "redux-logger";*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  /*logger*/
];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
