import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from "./Context/Cart.jsx";
import { Provider } from 'react-redux';
import Store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </Provider>
);
