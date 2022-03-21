import React, { createContext, useState } from 'react'
const themes = {
  dark: {
    backgroundColor: 'hsl(207, 26%, 17%)',
    backgroundColor1: 'hsl(209, 23%, 22%)',
    border: 'hsl(209, 23%, 22%)',
    color: 'hsl(0, 0%, 100%)',
  },
  light: {
    backgroundColor: 'hsl(0, 0%, 98%)',
    color: 'hsl(200, 15%, 8%)',
  },
}
export const ThemeContext = createContext()
export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
  const theme = isDark ? themes.dark : themes.light
  const toggleTheme = () => {
    setIsDark(!isDark)
  }
  return (
    <ThemeContext.Provider
      value={[
        {
          theme,
          isDark,
        },
        toggleTheme,
      ]}
    >
      {children}
    </ThemeContext.Provider>
  )
}
