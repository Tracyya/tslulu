import qs from 'qs'
import { useAuth } from 'context/auth_context';
import * as auth from 'auth-provider'
import { config } from 'process';
const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit{
    token?:string,
    data?:object
}
export const http=async(endpoint:string,{data,token,headers,...customConfig}:Config={})=>{
  const config={
      method:'GET',
      headers:{
          Authorization:token?`Bearer ${token}`: '',
          'content-Type':data? 'application/json':'',
      },
    ...customConfig
  }
  if(config.method.toUpperCase()==='GET'){
      endpoint+=`?${qs.stringify(data)}`
  }else{
      config.body=JSON.stringify(data || {} )
  }
  
    return window.fetch(`${apiUrl}/${endpoint}`,config)
    .then(async response=>{
        if(response.status===401){
        await auth.logout()
        window.location.reload()
        return Promise.reject({message:'请重新登录'})
        }
        const data=await response.json()
        if(response.ok){
            return data
        }else{
            return Promise.reject(data)
        }
    
    })  
}
export const useHttp=()=>{
    const {user}=useAuth()
    return (...[endpoint,config]:Parameters<typeof http>)=>http(endpoint,{...config,token:user?.token})
  
}