const Router=require('express').Router;
const router=Router()

router.get('/',(req,res)=>{

    

    res.setHeader('Content-Type','application/json')
    res.status(200).json({})
})


module.exports=router