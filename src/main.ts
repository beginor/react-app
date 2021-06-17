import { createElement } from 'react';
import { render } from 'react-dom';

import './main.css';

import('./app/app').then(m => {
    const elementId = 'app';
    const container = document.getElementById(elementId);
    if (!container) {
        throw new Error(`Element with id ${elementId} doesn't exists !`)
    }
    render(
        createElement(m.App, { message: 'powered by react hooks' }),
        container
    );
}).catch(ex => {
    console.error(ex);
});
