import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import authStore from './app/authStore';
import Loading from "./Components/Loading";
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={authStore}>
    <HelmetProvider>
      <Loading />
      <App />
    </HelmetProvider>
  </Provider>
);

reportWebVitals();
