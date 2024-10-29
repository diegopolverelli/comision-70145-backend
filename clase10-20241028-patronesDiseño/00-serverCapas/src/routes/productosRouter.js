import { Router } from 'express';
import { ProductosDAO } from '../dao/ProductosDAO.js';
import { getProductos } from '../controllers/ProductosController.js';
export const router=Router()

router.get('/', getProductos)