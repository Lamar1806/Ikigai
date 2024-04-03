import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import app from '../firebaseConfig';
import App from './app/app';
import { GlobalStyles } from './app/theme/global-styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
