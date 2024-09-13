import {cookies} from 'next/headers';   

export function getCookieServer(){
  const token =  cookies().get("sesion")?.value
  return token; 
}   