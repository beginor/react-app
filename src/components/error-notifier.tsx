import { Alert } from 'react-bootstrap';

import { useApp } from './app-context';

import './error-notifier.scss';

export function ErrorNotifier(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { alerts, delAlert } = useApp();

    return (
      <div className='error-notifier'>
        {alerts.map(alt => (
          <Alert key={alt.id} variant={alt.type} dismissible
                 onClose={(): void => delAlert(alt)}>
            {alt.message}
          </Alert>
        ))}
      </div>
    )
}
