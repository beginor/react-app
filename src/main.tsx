import { StrictMode } from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './main.scss';
import App from './app/app';

render(
    <StrictMode>
      <HashRouter>
        <App message="powered by react hooks" />
      </HashRouter>
    </StrictMode>,
    document.getElementById('app')
);
