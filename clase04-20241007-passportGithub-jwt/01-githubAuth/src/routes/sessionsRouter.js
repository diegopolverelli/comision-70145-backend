import { Router } from 'express';
import passport from 'passport';
export const router=Router()

router.get("/error", (req, res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(401).json({error:`Error al autenticar`})
})


router.get('/github',
    passport.authenticate("github", {}),    
)

// paso 3
router.get("/callbackGithub",
    passport.authenticate("github",{failureRedirect:"/api/sessions/error"}),
    (req, res)=>{

        // req.user   generado por el middleware passport si todo sale OK en el authencicate...!!!
        req.session.usuario=req.user

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:"Login exitoso", usuarioLogueado: req.user});
    }
)

router.post("/login", passport.authenticate("login", {failureRedirect:"/api/session/error"}), (req, res)=>{

    req.session.usuario=req.user

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Login OK", usuarioLogueado: req.user});
})

router.get("/logout", (req, res)=>{
    req.session.destroy(error=>{
        if(error){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Error al hacer logout`})
        }

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:"Logout Exitoso...!!!"});
    })
})