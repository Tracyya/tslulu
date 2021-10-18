import React ,{useState} from 'react'
import * as auth from 'auth-provider'
import  {ReactNode} from "react"
import { User } from 'screens/project-list/searchPanel'
import { http } from 'utiles/http'
import { useMount } from 'utiles'
interface AuthForm {
  username:string,
  password:string
}
 const bootstrapUser=async()=>{
   let user=null
   const token=auth.getToken()
   if(token){
     const data=await http('me',{token})
     user=data.user

   }
   return user
 }
const AuthContext=React.createContext<{
  user:User|null,
  register:(form:AuthForm)=>Promise<void>,
  login:(form:AuthForm)=>Promise<void>,
  logout:()=>Promise<void>,
}|undefined>(undefined)
AuthContext.displayName='AuthContext'

export const AuthProvide =({children}:{children:ReactNode})=>{
  const [user,setUser]=useState<User | null>(null)
  //point free  类似于高中数学中的消参
  const login =(form:AuthForm)=>auth.login(form).then(setUser)
  const register =(form:AuthForm)=>auth.register(form).then(setUser)
  const logout =()=>auth.logout().then(()=>setUser(null))

  useMount(()=>{
    bootstrapUser().then(setUser)
  })

   return <AuthContext.Provider children={children} value={{user,login,register,logout}}/>
}
export const useAuth=()=>{
  const context =React.useContext(AuthContext)
  if(!context){
    throw new Error("useAuth必须在AuthProvider 中使用")
  }
  return context
}
