import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); // Add parentheses to create the context

// Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Push and Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
