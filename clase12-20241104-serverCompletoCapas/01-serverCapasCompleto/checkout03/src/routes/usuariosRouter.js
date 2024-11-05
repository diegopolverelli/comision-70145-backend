import { Router } from 'express';
import { UsuariosController } from '../controllers/usuariosController.js';
export const router=Router()

router.get('/', UsuariosController.getUsuarios)
router.post('/', UsuariosController.createUser)