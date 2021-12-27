import { createContext, useContext, useState } from 'react';

import { authProvider } from '../common/auth-provider';

export interface AuthContextType {
    user: any;
    signin: (user: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

const AuthCtx = createContext<AuthContextType>(null!);

export function useAuth(): AuthContextType {
    return useContext(AuthCtx);
}

export function AuthContext(
    { children }: { children: JSX.Element }
): JSX.Element {
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
        <AuthCtx.Provider value={value}>
          {children}
        </AuthCtx.Provider>
    );
}
