import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import setupAxios from "../src/services/setAxios";
import axios from 'axios';
import { myConfig } from './config/rootConfig';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = myConfig.BASE_URL
setupAxios(axios);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

