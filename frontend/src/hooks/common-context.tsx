import React, { createContext, useContext, useState, ReactNode } from 'react'
import { screenPages } from '@/config/enums'

// Define the shape of the Common State
export type CommonState = {
  screen: screenPages
  theme: 'light' | 'dark'
  setScreen: (screen: screenPages) => void
  toggleTheme: () => void
}

// Default values for the Common State
const defaultCommonState: CommonState = {
  screen: screenPages.Main,
  theme: 'light',
  setScreen: () => {}, // No-op placeholder function
  toggleTheme: () => {}, // No-op placeholder function
}

// Create the Common Store Context
export const CommonStoreContext = createContext<CommonState>(defaultCommonState)

// Provider Component
export function CommonStoreProvider({ children }: { children: ReactNode }) {
  const [screen, setScreen] = useState<screenPages>(defaultCommonState.screen)
  const [theme, setTheme] = useState<'light' | 'dark'>(defaultCommonState.theme)

  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  return <CommonStoreContext.Provider value={{ screen, theme, setScreen, toggleTheme }}>{children}</CommonStoreContext.Provider>
}

// Hook to use the Common Store
export function useCommonStore() {
  const context = useContext(CommonStoreContext)
  if (!context) {
    throw new Error('useCommonStore must be used within a CommonStoreProvider')
  }
  return context
}
