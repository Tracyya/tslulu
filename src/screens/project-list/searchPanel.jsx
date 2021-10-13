
import React,{ useState, useEffect } from 'react'
const SearchPanel = (props) => {
    let { users , param , setParam } = props
   
    return ( 
        <div>
            <form action="">
                  <input type="text"  onChange={(e)=>setParam({
                    ...param,
                    name:e.target.value
                  })}/>
            </form>
            <select value={param.personId} onChange={(e)=>setParam({
                ...param,
                personId:e.target.value
            })}>
                <option value={""}>负责人</option>
                 {
                     users.map(user=><option key={user.id} value={user.id} >{user.name}</option>)
                 }
            </select>
        </div>
     );
}
 
export default SearchPanel;