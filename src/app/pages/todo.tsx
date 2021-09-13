import { useEffect, useState } from 'react';

import { loadData } from '../common/load-data';

import withLoading from '../controls/with-loading';

function Todo(props: TodoProps): JSX.Element {
    // const [data, setData] = useState<TodoItem[]>([]);
    // const [isFetching, setIsFetching] = useState(false);

    // const loadData = async function(url: string): Promise<void> {
    //     setIsFetching(true);
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     setData(data);
    //     setIsFetching(false);
    // }

    // useEffect(() => {
    //     // loadData(props.url);
    //     setIsFetching(true);
    //     void loadData<TodoItem[]>(props.url)
    //         .then(data => setData(data))
    //         .finally(() => setIsFetching(false));
    // },[]);

    return (
    //   <>
    //   {
    //     isFetching
    //       ? (<span>Loading todo items ...</span>)
    //       : (<ul>
    //           { data.map(item => (<li key={ item.id }>{ item.title }</li>)) }
    //         </ul>)
    //   }
    //   </>
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
    url?: string;
    data?: TodoItem[];
}
