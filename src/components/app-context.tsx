import {
    createContext, useContext, useState, useCallback
} from 'react';

export interface AppContextType {
    alerts: AlertType[];
    addAlert(alert: AlertType): void;
    delAlert(alert: AlertType): void;
}

export interface AlertType {
    id?: string;
    type: 'success' | 'info' | 'warning' | 'error';
    message: string;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const AppCtx = createContext<AppContextType>(null!);

export function AppContext(
    {children}: { children: JSX.Element | JSX.Element[] }
): JSX.Element {

    const [alerts, setAlerts] = useState<AlertType[]>([]);

    function addAlert(alert: AlertType): void {
        alert.id = Date.now().toFixed(1);
        setAlerts(alerts => [...alerts, alert]);
    }

    function delAlert(alert: AlertType): void {
        setAlerts(alerts => alerts.filter(alt => alt.id !== alert.id));
    }

    const contextVal = {
        alerts,
        addAlert: useCallback((alert: AlertType) => addAlert(alert), []),
        delAlert: useCallback((alert: AlertType) => delAlert(alert), [])
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


