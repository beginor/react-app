import { createElement } from 'react';
import { render } from 'react-dom';

import './main.css';

import('./app/app').then(m => {
    const elementId = 'app';
    const el = document.getElementById(elementId);
    if (!el) {
        throw new Error(`HTMLElement with id ${elementId} doesn't exist !`);
    }
    render(
        createElement(m.App, { message: 'powered by react hooks' }),
        el
    );
}).catch(ex => {
    console.error(ex);
});
