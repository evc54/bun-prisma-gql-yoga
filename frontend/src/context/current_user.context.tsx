import { 
  createContext, 
  useState,
} from 'react';

export interface UserContext {
  currentUser: {
    token: string | null;
  };
}

export const CurrentUserContext = createContext<UserContext>({
  currentUser: {
    token: null,
  },
});

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    token: null,
  });

  const value = {
    currentUser,
    setCurrentUser,
  }

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
}