import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Router = () =>
  <BrowserRouter>
    <App />
  </BrowserRouter>;

ReactDOM.render(<Router />, document.getElementById('root'));
