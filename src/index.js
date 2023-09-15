import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.scss';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/web-portfolio">
      <Suspense>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
