import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./reducers/cartreducer";
import { combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

//redux persist

import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
  }
const reducers=combineReducers({
  cartreducer:cartreducer


})
const persistedReducer = persistReducer(persistConfig,reducers)
const store= configureStore({
 reducer:persistedReducer,
    devTools:true,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor= persistStore(store);
export default store
