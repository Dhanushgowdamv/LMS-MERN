/* eslint-disable no-undef */

import CommonForm from "@/components/common-from";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signUpFormControls } from "@/config";
import { Authcontext } from "@/context/auth.context";
import {  GraduationCap } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
const Authpage = () => {
  const [activeTab,setactiveTab] = useState('sigin');
  const {
    signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData

  } = useContext(Authcontext)
  function handleTabchange(value){
    setactiveTab(value)
  }
   
  return (
   <div className="flex flex-col min-h-screen ">
    <header className="px-4 lg:px-6 h-14 flex items-center border-b-2 ">
      <Link to='/' className=" flex items-center justify-center">
      <GraduationCap className="h-8 w-8 mr-4" />
      <span className=" font-extrabold">LMS LERN</span>
      </Link>
    </header>
    <div className="flex items-center justify-center">
      <Tabs value={activeTab}
            defaultValue="sigin"
            onValueChange={handleTabchange}
            className="w-full max-w-md ">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value='signin'>signin</TabsTrigger>
                <TabsTrigger value='signup'>signup</TabsTrigger>
              </TabsList>
              <TabsContent value='signin'>
              sigin
              </TabsContent>
              <TabsContent value='signup'>
                <CommonForm 
                formControl={signUpFormControls}/>
              </TabsContent>

              
            </Tabs>
    </div>
   </div>
  )
}

export default Authpage;