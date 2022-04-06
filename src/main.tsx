import { StrictMode } from 'react';
import { render } from 'react-dom';

import './main.scss';
import App from './app';

render(
    <StrictMode>
      <App message='Hello, World!' />
    </StrictMode>,
    document.getElementById('app')
);
