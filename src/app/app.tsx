import { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';

import Nav from './controls/nav';
import NavSwitch from './controls/nav-routes';

export function App(props: AppProps): JSX.Element {
    return (
      <>
        <h1>Hello, React Hooks!</h1>
        <p>{props.message}</p>
        <hr />
        <HashRouter>
          <div>
            <Nav />
            <Suspense fallback={<div>Loading page ...</div>}>
              <NavSwitch />
            </Suspense>
          </div>
        </HashRouter>
      </>
    );
}

export interface AppProps {
    message: string;
}
