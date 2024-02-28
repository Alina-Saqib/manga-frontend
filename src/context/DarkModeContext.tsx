import  { createContext, useContext, useState, useEffect } from 'react';


const DarkModeContext = createContext({
    darkMode: 'light', 
    toggleDarkMode: () => {},
  });

export const useDarkMode = () => useContext(DarkModeContext);


export const DarkModeProvider = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState('light'); 

  useEffect(() => {
    
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
