import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from './app-layout';

const About = lazy(() => import('./pages/about'));
const Home = lazy(() => import('./pages/home'));
const Topics = lazy(() => import('./pages/topics'));
const Users = lazy(() => import('./pages/users'));
const Todo = lazy(() => import('./pages/todo')); // eslint-disable-line max-len
const Timer = lazy(() => import('./pages/timer').then(m => ({ default: m.Timer}))); // eslint-disable-line max-len

export default function AppRoutes(): JSX.Element {
    return(
      <Routes>
        <Route path="/" element={<AppLayout message="" /> }>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="topics/*" element={<Topics />} />
          <Route path="todo" element={<Todo />} />
          <Route path="timer" element={<Timer />} />
        </Route>
      </Routes>
    );
}
