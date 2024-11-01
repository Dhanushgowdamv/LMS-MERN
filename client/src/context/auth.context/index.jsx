/* eslint-disable react/prop-types */
import { initialSigInFormData, initialSigupFormData } from "@/config";
import { createContext, useState } from "react";

export const Authcontext = createContext(null);

export default function AuthProvider({ children }) {

const [signInFormData,setSignInFormData] = useState(initialSigInFormData)
const[signUPFormData,setSignUPFormData] = useState( initialSigupFormData)


  return <Authcontext.Provider value={{
    signInFormData,
    setSignInFormData,
    signUPFormData,
    setSignUPFormData

  }}>{children}</Authcontext.Provider>;
}
