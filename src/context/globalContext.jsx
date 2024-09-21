import { createContext } from "react";

export const GlobalContext = createContext();

let colors = ["#A5B68D", "#E5D9F2", "#D2E0FB"];

export function GlobalContextProvider({ children }) {
  return (
    <GlobalContext.Provider value={{ colors }}>
      {children}
    </GlobalContext.Provider>
  );
}
