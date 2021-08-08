import { persistedReducer } from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { persistStore } from "redux-persist";
import { rootSaga } from "./sagas/rootSaga";
/*import { logger } from "redux-logger/src";*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware /*logger*/))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
