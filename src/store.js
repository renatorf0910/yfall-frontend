// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { cardReducer } from './components/card/reducers';

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default store;
