import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { GlobalStyles } from './theme/global-styles';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
