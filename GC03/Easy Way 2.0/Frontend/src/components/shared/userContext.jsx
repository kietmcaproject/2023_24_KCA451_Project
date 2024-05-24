import { createContext, useContext, useEffect, useState } from 'react';

// Create a context for user management
const UserContext = createContext();

// Define a UserProvider component to wrap around components that need access to user data
export const UserProvider = ({ children }) => {
  // Define state for the user
  const [user, setUser] = useState(null);
  const [loginStatus, setloginStatus] = useState(false);
  // Define a function to update the user
  
  const updateUser = (newUser) => {
    setUser(newUser)
  }
  const login = () => {
    setloginStatus(true);
  }

  const logout = () =>{
    setloginStatus(false);
    setUser(null);
  }

  // Return the UserContext provider with the user and updateUser function as value
  return (
    <UserContext.Provider value={{ user, updateUser, loginStatus , login , logout }}>
      {children}
    </UserContext.Provider>
  )
}

// Define a custom hook to use the UserContext in components
export const useUser = () => {
  return useContext(UserContext);
}

// Export the UserProvider and useUser hooks

