import { Router } from 'express';
import { auth } from '../middleware/auth.js';
export const router=Router()

router.get('/',(req,res)=>{

    res.status(200).render('home')
})

router.get('/perfil', auth, (req,res)=>{

    res.status(200).render('perfil')
})

router.get('/login',(req,res)=>{

    res.status(200).render('login')
})