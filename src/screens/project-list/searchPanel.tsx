
import React,{ useState, useEffect } from 'react'
import {Input,Select} from "antd"
 export interface User{
    id:string;
    name:string;
    email:string;
    title:string;
    organization:string;
    token:string;
}
interface SearchPanelProps {
    users:User[],
    param:{
        name:string;
        personId:string;
    }
    setParam:(param:SearchPanelProps['param'])=>void;
}
export const  SearchPanel = ({users,param,setParam}:SearchPanelProps) => {
    
   
    return ( 
        <div>
            <form action="">
                  <Input type="text"  onChange={(e)=>setParam({
                    ...param,
                    name:e.target.value
                  })}/>
            </form>
            <Select value={param.personId} onChange={value=>setParam({
                ...param,
                personId:value
            })}>
                <Select.Option value={""}>负责人</Select.Option>
                 {
                     users.map(user=><option key={user.id} value={user.id} >{user.name}</option>)
                 }
            </Select>
        </div>
     );
}
 
