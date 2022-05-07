import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.scss';
import MainContainer from './pages/main/containers/mainContainer';
import MobileAuth from './pages/main/components/mobileAuth';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './pages/main/sagas';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/mobile-auth" element={<MobileAuth />} />
        {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
