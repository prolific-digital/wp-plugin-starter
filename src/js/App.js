import '../scss/main.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import AdminApp from './components/AdminApp';

if (module.hot) {
  module.hot.accept();
}

const adminContainer = document.getElementById(
  'wp-react-plugin-starter-container'
);

createRoot(adminContainer).render(<AdminApp />);
