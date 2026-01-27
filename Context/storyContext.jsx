"use client";
import { createContext, useContext, useState } from "react";
const StoryContext = createContext();
export function StoryProvider({ children }) {
  const [activeStory, setActiveStory] = useState(null);
  return (
    <StoryContext.Provider value={{ activeStory, setActiveStory }}>
      {children}
    </StoryContext.Provider>
  );
}
export const useStory = () => useContext(StoryContext);
