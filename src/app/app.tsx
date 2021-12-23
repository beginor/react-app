import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from './app-layout';
import { AuthProvider, RequireAuth } from './controls/auth-context';

const About = lazy(() => import('./pages/about'));
const Home = lazy(() => import('./pages/home'));
const Topics = lazy(() => import('./pages/topics'));
const Users = lazy(() => import('./pages/users'));
const Todo = lazy(() => import('./pages/todo')); // eslint-disable-line max-len
const Timer = lazy(() => import('./pages/timer').then(m => ({ default: m.Timer}))); // eslint-disable-line max-len
const Login = lazy(() => import('./pages/login'));

export default function App(props: AppProps): JSX.Element {
    return (
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AppLayout message={props.message} /> }>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<RequireAuth><Users /></RequireAuth>} />
            <Route path="topics/*" element={<Topics />} />
            <Route path="todo" element={<Todo />} />
            <Route path="timer" element={<Timer />} />
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </AuthProvider>
    );
}

export interface AppProps {
    message: string;
}
