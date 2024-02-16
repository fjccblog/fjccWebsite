import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider, Modal } from './context/Modal';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <BrowserRouter>
        <App />
        <Modal />
      </BrowserRouter>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
