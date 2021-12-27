import { Alert } from 'react-bootstrap';

import { useApp } from './app-context';


export function ErrorNotifier(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { alerts, delAlert } = useApp();

    return (
      <div className='error-notifier'>
        {alerts.map(alt => (
          <Alert key={alt} dismissible
                 onClose={(): void => delAlert(alt)}>
            {alt}
          </Alert>
        ))}
      </div>
    )
}
