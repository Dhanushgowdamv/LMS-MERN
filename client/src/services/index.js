/* eslint-disable no-undef */
import axiosinstance from "@/api/axiosinstance";


export async function RegisterService(formData) {
    const {data} = await axiosinstance.post('/auth/register',{
      ...formData,
      role:'User',
    })
   console.log(axiosinstance);
    return data;
    
  }