/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import axiosinstance from "@/api/axiosinstance";
import { initialSigInFormData, initialSigupFormData } from "@/config";
import { loginService, RegisterService, checkAuthService } from "@/services";
import { createContext, useEffect, useState } from "react";

export const Authcontext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSigInFormData);
  const [signUPFormData, setSignUPFormData] = useState(initialSigupFormData);
  const [auth, setAuth] = useState({
    authenticate: false,
    user: null,
  });

  // Register user
  async function handleRegisterUser(event) {
    event.preventDefault();
    const data = await RegisterService(signUPFormData);
    console.log(data, "teytdu");
  }

  // Login user
  async function handleLoginUser(event) {
    event.preventDefault();
    const data = await loginService(signInFormData);
    console.log(data);

    if (data.success) {
      sessionStorage.setItem("accessToken", JSON.stringify(data.data.accessToken));
      // Set the auth state and user data
      setAuth({
        authenticate: true,
        user: data.data.user,
      });
    } else {
      // Reset auth state if login fails
      setAuth({
        authenticate: false,
        user: null,
      });
    }
  }

  // Check the authenticated user
  async function checkAuthUser() {
    const data = await checkAuthService(); // Assuming checkAuthServiceAPI is the correct service function
    if (data.success) {
      setAuth({
        authenticate: true,
        user: data.data.user,
      });
    } else {
      setAuth({
        authenticate: false,
        user: null,
      });
    }
  }

  useEffect(() => {
    checkAuthService(); // Call the function to check the auth state on mount
  }, []);

  console.log(auth, "df");

  return (
    <Authcontext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUPFormData,
        setSignUPFormData,
        handleRegisterUser,
        handleLoginUser,
        auth, // Provide the auth state to other components
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}
