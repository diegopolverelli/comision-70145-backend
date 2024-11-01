const {CustomRouter} = require("./router.js")

class ProductsRouter extends CustomRouter{
    init(){
        this.get("/", (req, res)=>{

            res.setHeader('Content-Type','application/json');
            return res.status(200).json({payload:"Mis productos..."});
        })
    }
}

module.exports={ProductsRouter}


