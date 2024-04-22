import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState("")


  const storeTokenInLS = (serverToken) => {
    localStorage.setItem('token', serverToken);
    setToken(serverToken);
  };

  const removeTokenFromLS = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const isLoggedIn = !!token;

  const LogoutUser = () => {
    removeTokenFromLS(); // Call removeTokenFromLS function to log out
  };

  //Authentication jwt to get  currently logged user data

  const userAuthentication = async()=>{
     try {
      const response = await fetch("/api/auth/user",{
        method: "GET",
        headers: {
          Authorization: `bearer ${token}`
        }
      });
      if(response.ok){
        const data = await response.json()
        setUser(data)

      }
     } catch (error) {
      console.error("Error fetching user data")
     }
  }

  //to fetch  the service data from the database

  const getServicesData = async()=>{
    try {
      const response = await fetch("/api/data/services",{
        method: "GET",
      })
      if(response.ok){
        const services = await response.json()
        console.log(data.msg)
        setServices(services.msg)
      }
    } catch (error) {
      console.log(`service frontend error :${error}`);
    }
  }

  useEffect(()=>{
    getServicesData()
    userAuthentication()
  },[])



  return (
    <AuthContext.Provider value={{ LogoutUser,isLoggedIn, storeTokenInLS, removeTokenFromLS }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) throw new Error('useAuth used outside of the provider');
  return authContextValue;
};
