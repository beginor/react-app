import { useEffect, useState, lazy, Suspense } from 'react';
import {
    HashRouter as Router, Switch, Route, Link
} from 'react-router-dom';

const Topics = lazy(() => import('./Topics'));

export function App(props: AppProps): JSX.Element {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])

    return (
    <div>
      <h1>Hello, React Hooks!</h1>
      <p>{props.message}</p>
      <p>{`${time.toLocaleDateString()} ${time.toLocaleTimeString()}`}</p>
      <hr />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>
          </nav>
          <Suspense fallback={<div>Loading ...</div>}>
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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </Suspense>

        </div>
      </Router>
    </div>
    );
}

function Home(): JSX.Element {
    return <h2>Home</h2>;
}

function About(): JSX.Element {
    return <h2>About</h2>;
}

function Users(): JSX.Element {
    return <h2>Users</h2>;
}

export interface AppProps {
    message: string;
}
