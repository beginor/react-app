import { createContext, useContext, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { authProvider } from '../common/auth-provider';

export interface AuthContextType {
    user: any;
    signin: (user: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export function useAuth(): AuthContextType {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
    const [user, setUser] = useState<string>('');

    function signin (newUser: string, callback: VoidFunction): void {
        authProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    }

    function signout(callback: VoidFunction): void {
        authProvider.signout(() => {
            setUser('');
            callback();
        });
    }

    const value = { user, signin, signout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export interface AuthProviderProps {
    children: JSX.Element;
}

export function RequireAuth({ children }: AuthProviderProps): JSX.Element {
    const auth = useAuth();
    const location = useLocation();
    if (!auth.user) {
        return (<Navigate to='/login' state={{ from: location }} />);
    }
    return children;
}
