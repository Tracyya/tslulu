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