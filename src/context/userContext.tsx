import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    isAuthenticated: boolean;
}

// Define Context Type
interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    signup: (newUser: Omit<User, 'isAuthenticated'>) => void;
    login: (email: string, password: string) => boolean;
    logout: () => void;
    isAuthenticated: () => boolean;
}

// Create Context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Hook to use the UserContext
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};

// Provider Component
interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    // Signup function to create a new user
    const signup = (newUser: Omit<User, 'isAuthenticated'>) => {
        const registeredUser: User = { ...newUser, isAuthenticated: true };
        setUser(registeredUser);
        localStorage.setItem('user', JSON.stringify(registeredUser));
        console.log('Registered User:', registeredUser);
        navigate('/');
    };

    // Login function to authenticate an existing user
    const login = (email: string, password: string): boolean => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            const parsedUser: User = JSON.parse(savedUser);
            if (parsedUser.email === email && parsedUser.password === password) {
                setUser({ ...parsedUser, isAuthenticated: true });
                navigate('/');
                return true;
            }
        }
        return false; // Login failed
    };

    // Logout function to clear user data
    const logout = () => {
        // setUser(null);
        setUser((prevUser) => ({ ...prevUser!, isAuthenticated: false }));
        localStorage.removeItem('user');
        navigate('/login');
        console.log('User logged out.');
    };

    // Check if the user is authenticated
    const isAuthenticated = () => {
        return user !== null && user.isAuthenticated;
    };

    return (
        <UserContext.Provider value={{ user, setUser, signup, login, logout, isAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
};
