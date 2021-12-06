import {
    Link, Route, Routes, useParams
} from 'react-router-dom';

export default function Topics(): JSX.Element {
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
        <Routes>
          <Route path=":topicId" element={<Topic />} />
          <Route index
            element={<h3>Notopic selected, please select a topic.</h3>} />
        </Routes>
      </div>
    );
}

function Topic(): JSX.Element {
    const { topicId } = useParams();
    return (<h3>Requested topic ID: {topicId}</h3>);
}
