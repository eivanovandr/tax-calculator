import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'uikit/dist/css/uikit.min.css'

import Calculator from './components/Calculator';


ReactDOM.render(
  <React.StrictMode>
    <Calculator/>
  </React.StrictMode>,
  document.getElementById('root')
);

