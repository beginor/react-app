import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from './app-layout';
import { AppContext, AuthContext, Authorize } from './components';

const About = lazy(() => import('./pages/about'));
const Home = lazy(() => import('./pages/home'));
const Todo = lazy(() => import('./pages/todo'));
const Login = lazy(() => import('./pages/login'));

export default function App(): JSX.Element {
    return (
      <AppContext>
        <AuthContext>
          <Routes>
            <Route path="/" element={<AppLayout /> }>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="todo" element={<Authorize><Todo /></Authorize>} />
              <Route path='login' element={<Login />} />
              <Route path='*'  />
            </Route>
          </Routes>
        </AuthContext>
      </AppContext>
    );
}

