import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import persistConfig from "./persistConfig";
import rootReducer from "./rootReducer";

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});

export default store;
