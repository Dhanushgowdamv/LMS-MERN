/* eslint-disable react/prop-types */
import axiosinstance from "@/api/axiosinstance";
import { initialSigInFormData, initialSigupFormData } from "@/config";
import { RegisterService } from "@/services";
import { createContext, useState } from "react";

export const Authcontext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSigInFormData);
  const [signUPFormData, setSignUPFormData] = useState(initialSigupFormData);

  async function handleRegisterUser(event) {
    event.preventDefault();
    const data = await RegisterService(signUPFormData);
    console.log(data);
    // Add any other logic you need after registration here
  }

  return (
    <Authcontext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUPFormData,
        setSignUPFormData,
        handleRegisterUser,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}
