import React from 'react';
import ReactDOM from 'react-dom'; // Corregido el import de ReactDOM
import './index.css';
import App from './App';
 
// Importación de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
