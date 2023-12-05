import React, { createContext, useContext, useState } from "react";

export const globalContext = createContext();

export const useGlobalStore = () => {
  const value = useContext(globalContext);
  return value;
};

export const Provider = ({ children }) => {
  const [colors, setColors] = useState([]);
  const Component = globalContext.Provider;

  const values = {
    colors,
    setColors,
  };

  return <Component value={values}>
    {children}
    </Component>;
};
