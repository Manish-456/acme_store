import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import {getDefaultMiddleware} from '@reduxjs/toolkit';

import cartReducer from './cart-slice';
const persistConfig = {
    key : 'cart',
    storage
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
    reducer: {
      cart: persistedCartReducer,
    },
    middleware: getDefaultMiddleware({
      serializableCheck: false, // Allow serializable check for persisted data
    }),
  });

  let persistor = persistStore(store)
  export type RootState = ReturnType<typeof store.getState>
  export  {store, persistor}