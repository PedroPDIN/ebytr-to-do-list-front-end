import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TaskProvider from './store/provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TaskProvider>
    <App />
  </TaskProvider>,
);
