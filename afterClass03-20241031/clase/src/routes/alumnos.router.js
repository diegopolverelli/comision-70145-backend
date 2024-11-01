import { Router } from 'express';
import { procesaErrores } from '../utils.js';
import { AlumnosManager } from '../dao/AlumnosManager.js';
import { CursosManager } from '../dao/CursosManager.js';
import { isValidObjectId } from 'mongoose';
import { AlumnosController } from '../controllers/AlumnosController.js';
import passport from 'passport';
import { auth } from '../middlewares/auth.js';
export const router = Router()

router.get('/', AlumnosController.getAlumnos)

router.get('/:aid', AlumnosController.getAlumnoById)

router.post("/", AlumnosController.createAlumno)

router.post(
    "/:aid/curso/:cid",
    passport.authenticate("current", { session: false }),
    auth(["ADMIN"]),
    AlumnosController.inscribirCurso
)

router.put("/:aid", AlumnosController.cargarCursosAlumno)