import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import { Reducers } from "./reducers";

export const Store = createStore(Reducers, applyMiddleware(logger, promise));

export type AppState = ReturnType<typeof Reducers>;