import {
    createContext, useContext, useState, useCallback
} from 'react';

export interface AppContextType {
    alerts: string[];
    addAlert(alert: string): void;
    delAlert(alert: string): void;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const AppCtx = createContext<AppContextType>(null!);

export function AppContext(
    {children}: { children: JSX.Element | JSX.Element[] }
): JSX.Element {

    const [alerts, setAlerts] = useState<string[]>([]);

    function addAlert(alert: string): void {
        setAlerts([...alerts, alert]);
    }

    function delAlert(alert: string): void {
        setAlerts(alerts.filter(alt => alt !== alert));
    }

    const contextVal = {
        alerts,
        addAlert: useCallback((alert: string) => addAlert(alert), []),
        delAlert: useCallback((alert: string) => delAlert(alert), [])
    };

    return (
      <AppCtx.Provider value={contextVal}>
        {children}
      </AppCtx.Provider>
    );
}

export function useApp(): AppContextType {
    return useContext(AppCtx);
}


