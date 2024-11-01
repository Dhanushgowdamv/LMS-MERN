/* eslint-disable no-undef */
/* eslint-disable react/prop-types */


import React from 'react'
import { Button } from '../ui/button'
import FormControls from './Controllerform'


function CommonForm({handleSubmit,
  buttonText ,
  formControl = [], 
  formData ,
  setFormData}) {
  return (
    <form onSubmit={handleSubmit}>
    <FormControls formControl={formControl} formData={formData} setFormData={setFormData}/>
        <Button type='submit' className="mt-5 w-full">{buttonText || "submit"}</Button>

    </form>
  )
}

export default CommonForm