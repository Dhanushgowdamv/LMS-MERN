/* eslint-disable react/prop-types */
import { createContext } from "react";

export const Authcontext = createContext(null);

export default function AuthProvider({ children }) {
  return <Authcontext.Provider value={{}}>{children}</Authcontext.Provider>;
}
