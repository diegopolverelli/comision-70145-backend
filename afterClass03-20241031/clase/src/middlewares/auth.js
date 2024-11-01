export const auth=(permisos=[])=>{
    return (req, res, next)=>{
        if(!Array.isArray(permisos)){
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({error:`Error en permisos de la ruta... :(`})
        }

        permisos=permisos.map(p=>p.toLowerCase())
        if(permisos.includes("public")){
            return next()
        }

        // req.user  // voy a ejecutar luego de un passport.authenticate, y ese método deja un req.user
        if(!req.user || !req.user.rol){
            res.setHeader('Content-Type','application/json');
            return res.status(401).json({error:`No hay usuarios autenticados`})
        }

        if(!permisos.includes(req.user.rol.toLowerCase())){
            res.setHeader('Content-Type','application/json');
            return res.status(403).json({error:`No tiene privilegios suficientes para acceder al recurso solicitado`})
        }

        next()
    }
}