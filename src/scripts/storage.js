export const loginUser = () => localStorage.setItem('authenticated', 'true');
export const logoutUser = () => localStorage.removeItem('authenticated');
export const isAuthenticated = () => localStorage.getItem('authenticated') === 'true';