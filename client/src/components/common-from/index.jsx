/* eslint-disable react/prop-types */


import React from 'react'
import { Button } from '../ui/button'
import FormControls from './formcontrol'

function CommonForm({handleSubmit,buttonText ,formControls = [], formData, setFormData}) {
  return (
    <form onSubmit={handleSubmit}>
    <FormControls  formControls={formControls} formData={formData} setFormData={setFormData}/>
        <Button type='submit'>{buttonText || "submit"}</Button>

    </form>
  )
}

export default CommonForm