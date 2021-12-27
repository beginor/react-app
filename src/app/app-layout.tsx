import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './controls/nav-bar';
import { ErrorNotifier } from './controls';

import './app-layout.scss';

export default function AppLayout(props: AppLayoutProps): JSX.Element {
    return (
      <>
        <Nav />
        <div className='app-main'>
          <Suspense fallback={<div className='loading-indicator'>加载中 ...</div>}>
            <Outlet  />
          </Suspense>
          <ErrorNotifier />
        </div>
      </>
    );
}

export interface AppLayoutProps {
    message: string;
}
