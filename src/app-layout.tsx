import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import {
    NavTopBar, NavSideBar, ErrorNotifier, LoadingIndicator, BreadCrumb
} from './components';

import './app-layout.scss';

const { Content } = Layout;

export default function AppLayout(props: AppLayoutProps): JSX.Element {
    return (
      <Layout className='app-main'>
        <NavTopBar />
        <Layout className='app-main-router flex-grow-1'>
          <NavSideBar />
          <Layout className='px-3 pb-3'>
            <BreadCrumb />
            <Content className='bg-white p-2'>
              <Suspense fallback={<LoadingIndicator />}>
                <Outlet  />
              </Suspense>
            </Content>
          </Layout>
          <ErrorNotifier />
        </Layout>
      </Layout>
    );
}

export interface AppLayoutProps {
    message: string;
}
