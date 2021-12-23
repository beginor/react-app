const authProvider = {
    isAuthenticated: false,
    signin(callback: VoidFunction): void {
        authProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback: VoidFunction): void {
        authProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    }
};

export { authProvider }
