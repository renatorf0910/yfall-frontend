import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import routes from './pages/routes';
import store from './store';


moment.locale('en');

function App() {
  return (
    <ConfigProvider locale={{}}>
      <Provider store={store}>
        <Router>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}          </Routes>
        </Router>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
