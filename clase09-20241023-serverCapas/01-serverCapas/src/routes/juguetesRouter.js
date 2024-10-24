import { Router } from 'express';
import { JuguetesController } from '../controllers/juguetesController.js';
export const router=Router()

router.get('/', JuguetesController.getJuguetes)
router.post('/', JuguetesController.createJuguete)