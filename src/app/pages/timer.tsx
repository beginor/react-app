import { useState, useEffect } from 'react';

export default function Timer(): JSX.Element {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const handle = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return (): void => {
            clearInterval(handle);
        };
    }, [])

    return (
      <p>{`${time.toLocaleDateString()} ${time.toLocaleTimeString()}`}</p>
    );
}
