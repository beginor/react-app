import { useState, useEffect, FunctionComponent, ComponentType } from 'react';

import { loadData } from '../common/load-data';
import { useApp } from './app-context';
import { LoadingIndicator } from './loading-indicator';

export function withLoading<P extends object>(
    Component: ComponentType<P>,
    url: string
): FunctionComponent<P> {
    function LoadingComponent(props: P): JSX.Element {
        const [data, setData] = useState([]);
        const [isFetching, setIsFetching] = useState(false);

        // eslint-disable-next-line @typescript-eslint/unbound-method
        const { addAlert } = useApp();

        useEffect(() => {
            setIsFetching(true);
            void loadData(url)
                .then(data => setData(data as never[]))
                .catch(ex => {
                    addAlert({ type: 'error', message: 'Can not load data!' });
                    console.error(ex);
                })
                .finally(() => setIsFetching(false));
        }, [addAlert]);

        return (
          <>
            {
              isFetching
                ? (<LoadingIndicator message='loading data...' />)
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
