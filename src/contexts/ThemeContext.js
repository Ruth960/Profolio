import { createContext } from 'react';

const ThemeContext = createContext({
  isDarkMode: true,
  toggleTheme: () => {}
});

export default ThemeContext;