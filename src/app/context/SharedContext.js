"use client"
import { createContext, useState, useContext } from 'react';

const SharedContext = createContext();

export function SharedProvider({ children }) {
  const [currentNav,setCurrentNav]=useState("");

  return (
    <SharedContext.Provider value={{ currentNav,setCurrentNav }}>
      {children}
    </SharedContext.Provider>
  );
}

export function useShared() {
  return useContext(SharedContext);
}