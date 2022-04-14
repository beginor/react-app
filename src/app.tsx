import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from './app-layout';
import { AppContext, AuthContext, Authorize } from './components';

const About = lazy(() => import('./pages/about'));
const Home = lazy(() => import('./pages/home'));
const Todo = lazy(() => import('./pages/todo'));
const Login = lazy(() => import('./pages/login'));

export default function App(props: AppProps): JSX.Element {
    return (
      <AppContext>
        <AuthContext>
          <Routes>
            <Route path="/" element={<AppLayout message={props.message} /> }>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="todo" element={<Authorize><Todo /></Authorize>} />
              <Route path='login' element={<Login />} />
            </Route>
          </Routes>
        </AuthContext>
      </AppContext>
    );
}

export interface AppProps {
    message: string;
}
