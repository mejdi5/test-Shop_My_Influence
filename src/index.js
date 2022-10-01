import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { Store, persistor } from "./Redux/Store";
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PersistGate loading={null} persistor={persistor}>
  <Provider store={Store}>
    <App/>
  </Provider>
</PersistGate>
);


