import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/layout/App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Data from './data/BsportPlus.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter basename={Data.StartUrl}>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);