import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NewsContextProvider } from './newsContext';

ReactDOM.render(
  <NewsContextProvider>
    <App />
  </NewsContextProvider>,
  document.getElementById('root')
);
