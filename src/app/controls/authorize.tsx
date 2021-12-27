import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from './auth-context';

export function Authorize(
    { children }: { children: JSX.Element }
): JSX.Element {
    const auth = useAuth();
    const location = useLocation();
    if (!auth.user) {
        return (<Navigate to='/login' state={{ from: location }} />);
    }
    return children;
}
