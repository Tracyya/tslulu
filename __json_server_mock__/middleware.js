module.exports=(req,res,next)=>{
    if(res.method==='POST' && req.path==='./login'){
        if(req.body.userName==='jack' && req.body.password==='123456'){
            return res.status(200).json({
                user:{
                    token:'123'
                }
            })
        }else{
            return res.status(400).json({message:'用户名或者密码错误'})
        }
    }
    next()
}