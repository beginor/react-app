import { Alert } from 'antd';

import { useApp } from './app-context';

import './error-notifier.css';

export function ErrorNotifier(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { alerts, delAlert } = useApp();

    return (
      <div className='error-notifier my-3'>
        {alerts.map(alt => (
          <Alert key={alt.id} className='mb-3' type={alt.type} closable
            message={alt.message}
            onClose={(): void => delAlert(alt)} />
        ))}
      </div>
    )
}
