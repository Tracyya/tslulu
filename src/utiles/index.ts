import React,{ useEffect, useState } from 'react';

// 一个！是对他的值取反 ！！是对值取反之后在取反
export const isFalsy=(value:unknown)=>value === 0? false:!value
export const cleanObject=(object:object)=>{
const result={...object}
Object.keys(result).forEach(key=>{
    //@ts-ignore
    const value=result[key]
    
    if(isFalsy(value)){
        //@ts-ignore
        delete result[key]
    }
})
return result
}
// callback 也需要一个类型 我们给一个函数 ()=>void   代表是不需要返回值
export const useMount = (callback:()=>void) => {
    useEffect(() => {
        callback()
    }, [])
}

///去抖的闭包函数
export const useDebounce = <V>(value:V, delay?:number)=> {
  //每次在value变化之后设置一个定时器
    const [debouncedValue, setDebouncedValue] = useState(value)
   useEffect(() => {
     const timeout = setTimeout(() => setDebouncedValue(value), delay);
     //每次在上一个useEffect处理完运行   
     return () => {
            clearTimeout(timeout)
        }
    }, [value, delay])
   return debouncedValue
} 
