import React , { useState, useEffect } from 'react'

import * as qs from 'qs'

import List from './list'

import {SearchPanel} from './searchPanel';

import { useHttp } from 'utiles/http';

import {cleanObject,useDebounce,useMount} from "../../utiles";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
    const [ users, setUsers ] = useState([])
    const [ param, setParam ] = useState({
        name:"",
        personId:""
    })
    const debouncedParam = useDebounce(param,)
    const [ list, setList ] = useState([])
    const client=useHttp()
    useEffect(() => {
        client('projects',{data:cleanObject(debouncedParam)}).then(setList)
       
    }, [debouncedParam])
    useMount(() => {
       client('users').then(setUsers)
     })
      return ( 
            <div>
                <SearchPanel users={users} param={param} setParam={setParam} />
                <List list={list} users={users} />
            </div>
         );
    }
     
 