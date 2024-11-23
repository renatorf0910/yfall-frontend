import { configureStore } from '@reduxjs/toolkit';
import { cardReducer } from './components/card/reducers';
import { homeReducer } from './pages/home/reducers';
import userReducer from './pages/login/reducers/loginReducers';

const store = configureStore({
  reducer: {
    card: cardReducer,
    items: homeReducer,
    user: userReducer,
  },
});

export default store;
