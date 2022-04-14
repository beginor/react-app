import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './main.scss';
import App from './app';

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(
    <StrictMode>
      <HashRouter>
        <App message='Hello, World!' />
      </HashRouter>
    </StrictMode>
);
