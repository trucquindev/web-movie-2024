import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  showAuthModal: boolean;
  setShowAuthModal: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <AuthContext.Provider value={{ showAuthModal, setShowAuthModal }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
