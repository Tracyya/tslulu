import React , { useState } from 'react'

import * as qs from 'qs'

import List from './list'

import SearchPanel from './searchPanel';

import {} from 'utiles'

const apiUrl = process.env.REACT_APP_API_URL;



const ProjectListScreen = () => {
    const [param,setParam]=useState({
        name:"",
        personId:""
    })
    const [list,setList]=useState([]);
    const [users,setUsers]=useState([])

    return ( 
        <div>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List list={list} users={users} />
        </div>
     );
}
 
export default ProjectListScreen;