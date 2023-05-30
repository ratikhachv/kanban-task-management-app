import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// css
import './generalCss/reset.css'
import './generalCss/generalCss.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

