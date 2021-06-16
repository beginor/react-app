import { useEffect, useState } from 'react';

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
          <p>{ props.message }</p>
          <p>{ `${time.toLocaleDateString()} ${time.toLocaleTimeString()}` }</p>
        </div>
    );
}

export interface AppProps {
    message: string;
}
