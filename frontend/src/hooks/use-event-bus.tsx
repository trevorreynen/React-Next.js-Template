import React, { createContext, useContext, useRef, ReactNode } from 'react'

// EventBus Type Definition
type EventBus = {
  emit: (event: string, data?: any) => void
  on: (event: string, handler: (data?: any) => void) => void
  off: (event: string, handler: (data?: any) => void) => void
}

// EventBus Factory
const createEventBus = (): EventBus => {
  const listeners: { [event: string]: Array<(data?: any) => void> } = {}
  return {
    emit: (event, data) => {
      if (listeners[event]) {
        listeners[event].forEach((handler) => handler(data))
      }
    },
    on: (event, handler) => {
      if (!listeners[event]) listeners[event] = []
      listeners[event].push(handler)
    },
    off: (event, handler) => {
      if (!listeners[event]) return
      listeners[event] = listeners[event].filter((h) => h !== handler)
    },
  }
}

// Create Context
const EventBusContext = createContext<EventBus | null>(null)

// Props Type for Provider
interface EventBusProviderProps {
  children: ReactNode
}

// Provider Component
export function EventBusProvider({ children }: EventBusProviderProps) {
  const eventBusRef = useRef(createEventBus())
  return <EventBusContext.Provider value={eventBusRef.current}>{children}</EventBusContext.Provider>
}

// Hook to Use EventBus
export function useEventBus(): EventBus {
  const eventBus = useContext(EventBusContext)
  if (!eventBus) {
    throw new Error('useEventBus must be used within an EventBusProvider')
  }
  return eventBus
}
