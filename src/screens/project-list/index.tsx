import React , { useState, useEffect } from 'react'

import * as qs from 'qs'

import List from './list'

import {SearchPanel} from './searchPanel';

import {cleanObject,useDebounce,useMount} from "../../utiles";

const apiUrl = process.env.REACT_APP_API_URL;
const ProjectListScreen = () => {
    const [ users, setUsers ] = useState([])
    const [ param, setParam ] = useState({
        name:"",
        personId:""
    })
    const debouncedParam = useDebounce(param,)
    const [ list, setList ] = useState([])
    useEffect(() => {
       fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
           if(response.ok){
              setList(await response.json()) 
           }
       })
    }, [debouncedParam])
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if(response.ok){
                setUsers(await response.json()) 
            }
        })
     })
      return ( 
            <div>
                <SearchPanel users={users} param={param} setParam={setParam} />
                <List list={list} users={users} />
            </div>
         );
    }
     
    export default ProjectListScreen;