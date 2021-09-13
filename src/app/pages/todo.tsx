import withLoading from '../controls/with-loading';

function Todo(props: TodoProps): JSX.Element {
    return (
      <ul>
        { props.data?.map(item => (<li key={ item.id }>{ item.title }</li>)) }
      </ul>
    );
}

export default withLoading(Todo, './dist/todo.json');

export interface TodoItem {
    id: number;
    title: string;
}

export interface TodoProps {
    data?: TodoItem[];
}
