import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const About = lazy(() => import('../pages/about'));
const Home = lazy(() => import('../pages/home'));
const Topics = lazy(() => import('../pages/topics'));
const Users = lazy(() => import('../pages/users'));
const Todo = lazy(() => import('../pages/todo')); // eslint-disable-line max-len
const Timer = lazy(() => import('../pages/timer').then(m => ({ default: m.Timer}))); // eslint-disable-line max-len

export default function NavSwitch(): JSX.Element {
    return(
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/todo">
          <Todo url="dist/todo.json" />
        </Route>
        <Route path="/timer">
          <Timer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
}
