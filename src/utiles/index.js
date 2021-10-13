import React,{ useEffect, useState } from 'react';

// 一个！是对他的值取反 ！！是对值取反之后在取反
export const isFalsy=(value)=>value === 0? false:!value
export const cleanObject=(object)=>{
const result={...object}
Object.keys(result).forEach(key=>{
    const value=result[key]
    if(isFalsy(value)){
        delete result[key]
    }
})
return result
}

export const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
}

///去抖的闭包函数
export const useDebounce = (value, delay) => {
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