import { Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Nav from './controls/nav';
import NavSwitch from './controls/nav-switch';

export function App(props: AppProps): JSX.Element {
    return (
      <>
        <h1>Hello, React Hooks!</h1>
        <p>{props.message}</p>
        <hr />
        <Router>
          <div>
            <Nav />
            <Suspense fallback={<div>Loading page ...</div>}>
              <NavSwitch />
            </Suspense>
          </div>
        </Router>
      </>
    );
}

export interface AppProps {
    message: string;
}
