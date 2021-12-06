import {
    Link, Route, Routes, useParams, Outlet
} from 'react-router-dom';

export default function Topics(): JSX.Element {
    return (
      <Routes>
        <Route path="/" element={<TopicLayout />}>
          <Route path=":topicId" element={<Topic />} />
          <Route index
            element={<h3>Notopic selected, please select a topic.</h3>} />
        </Route>
      </Routes>
    );
}

function TopicLayout(): JSX.Element {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to="components">Components</Link>
          </li>
          <li>
            <Link to="props-v-state">Props v. State</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    );
}

function Topic(): JSX.Element {
    const { topicId } = useParams();
    return (<h3>Requested topic ID: {topicId}</h3>);
}
