/* eslint-disable no-undef */
import axiosinstance from "@/api/axiosinstance";



export async function RegisterService(formData) {
  const {data} = await axiosinstance.post('/auth/register',{
    ...formData,
    role:'user',
  })
 console.log(axiosinstance);
  return data;
  
}
export async function loginService(formData) {
  const {data} = await axiosinstance.post("/auth/login", formData);
  console.log(axiosinstance);
  return data;
  
}

export async function checkAuthService(formData) {
  const {data} = await axiosinstance.get('/auth/check-auth');
    
 console.log(axiosinstance);
  return data;
  
}