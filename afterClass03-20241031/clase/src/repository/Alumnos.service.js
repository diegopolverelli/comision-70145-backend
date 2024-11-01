import { AlumnosManager } from "../dao/AlumnosManager.js"

class AlumnosService{
    constructor(dao){
        this.alumnosDAO=dao
    }

    async getAlumnos(){
        return await this.alumnosDAO.getAlumnos()
    }

    async createAlumno(alumno){
        console.log("pasó x capa servicio...!!!")
        return await this.alumnosDAO.createAlumno(alumno)
    }
}

export const alumnosService=new AlumnosService(AlumnosManager)