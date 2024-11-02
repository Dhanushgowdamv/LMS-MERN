/* eslint-disable no-undef */

import CommonForm from "@/components/common-from";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config";
import { Authcontext } from "@/context/auth.context";
import {  GraduationCap } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
const Authpage = () => {
  const [activeTab,setactiveTab] = useState('sigin');
  const {
    signInFormData,
    setSignInFormData,
    signUPFormData,
    setSignUPFormData,
    handleRegisterUser
    

  } = useContext(Authcontext)
  function handleTabchange(value){
    setactiveTab(value)
  }
  function checkIfSignInFormIsValid(){
    return  signInFormData && signInFormData.userEmail !== '' && signInFormData.password !== ''
  }
  function checkIfSignUPFormIsValid(){
    return signUPFormData && signUPFormData.userName !=='' && signUPFormData.userEmail!=='' && signUPFormData.password!==''
  }
  return (
   <div className="flex flex-col min-h-screen ">
    <header className="px-4 lg:px-6 h-14 flex items-center border-b-2 ">
      <Link to='/' className=" flex items-center justify-center">
      <GraduationCap className="h-8 w-8 mr-4" />
      <span className=" font-extrabold">LMS LERN</span>
      </Link>
    </header>
    <div className="flex items-center justify-center h-screen">
  <Tabs value={activeTab}
        defaultValue="sigin"
        onValueChange={handleTabchange}
        className="w-full max-w-md ">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value='signin'>signin</TabsTrigger>
            <TabsTrigger value='signup'>signup</TabsTrigger>
          </TabsList>
          <TabsContent value='signin'>
          <Card className="p-6 space-y-4"> 
            <CardHeader>
              <CardTitle>Signin to your account</CardTitle>
              <CardDescription>
                Enter the email and password to access account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
            <CommonForm 
            formControl={signInFormControls}
            buttonText={'Sign In'}
            formData={signInFormData}
            setFormData={setSignInFormData}
            isbuttonDisabled={!checkIfSignInFormIsValid()}
            />
            </CardContent>
          </Card>
          </TabsContent>
          <TabsContent value='signup'>
          <Card className="p-4 space-y-2">
            <CardHeader>
              <CardTitle>Create a new account</CardTitle>
              <CardDescription>
                Enter your details to start
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
            <CommonForm 
            formControl={signUpFormControls}
            buttonText={'Sign up'}
            formData={signUPFormData}
            setFormData={setSignUPFormData}
            isbuttonDisabled={!checkIfSignUPFormIsValid()}
            handleSubmit={handleRegisterUser}
            />
            
            </CardContent>
          </Card>
          </TabsContent>
  </Tabs>
</div>

   </div>
  )
}

export default Authpage;