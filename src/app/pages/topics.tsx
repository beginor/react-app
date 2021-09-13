import {
    Link, Route, Switch, useParams, useRouteMatch
} from 'react-router-dom';

export default function Topics(): JSX.Element {
    const match = useRouteMatch<TopicRouteParams>();
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Notopic selected, please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    );
}

function Topic(): JSX.Element {
    const { topicId } = useParams<TopicRouteParams>();
    return (<h3>Requested topic ID: {topicId}</h3>);
}

type TopicRouteParams = {
    topicId: string;
};
