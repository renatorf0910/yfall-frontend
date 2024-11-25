import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import store from './store';
import moment from 'moment';
import { ConfigProvider } from 'antd';


moment.locale('en');

function App() {
  return (
    <ConfigProvider locale={{}}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
