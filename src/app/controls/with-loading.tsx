import { useState, useEffect, FunctionComponent, ComponentType } from 'react';

import { loadData } from '../common/load-data';

export default function withLoading<P extends object>(
    Component: ComponentType<P>,
    url: string
): FunctionComponent<P> {
    function LoadingComponent(props: P): JSX.Element {
        const [data, setData] = useState([]);
        const [isFetching, setIsFetching] = useState(false);

        useEffect(() => {
            setIsFetching(true);
            void loadData(url)
                .then(data => setData(data as never[]))
                .finally(() => setIsFetching(false));
        }, []);

        return (
          <>
            {
              isFetching
                ? (<span>Loading todo items ...</span>)
                : (<Component { ...props } data={ data } />)
            }
          </>
        );
    }
    return LoadingComponent;
}

export interface WithLoadingProps<TData = any> {
    data?: TData;
}
