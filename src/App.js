// src/App.js
import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import { Provider } from 'react-redux';
import store from './store'
import Login from './pages/login/Login';


function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
        {/* <Login /> */}
      </Provider>
    </>
  );
}

export default App;
