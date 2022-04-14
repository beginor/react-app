import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './main.scss';
import App from './app';

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(
    <StrictMode>
      <App message='Hello, World!' />
    </StrictMode>
);
