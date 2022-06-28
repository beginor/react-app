import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './main.css';
import App from './app';

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(
    <StrictMode>
      <App message='Hello, World!' />
    </StrictMode>
);
