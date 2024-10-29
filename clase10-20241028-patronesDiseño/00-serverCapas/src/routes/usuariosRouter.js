import { Router } from 'express';
import { createUsuario, getUsuarioByNombre, getUsuarios } from '../controllers/usuariosController.js';
export const router=Router()

router.get('/', getUsuarios)
router.get('/:nombre', getUsuarioByNombre)
router.post("/", createUsuario)