import { useState } from 'react';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const getTheme = (theme: string) => {
    switch (theme) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      default:
        return lightTheme;
    }
  };

  const theme = getTheme(currentTheme);

  return { theme, toggleTheme };
};
