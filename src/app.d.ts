// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { client } from "/server/fetch";
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      client: client;
      estudiante: Estudiante;
      docente: Docente;
      coordinador: Coordinacion;
      controlEstudio: ControlEstudio;
    }
    // interface PageData {}
    // interface Platform {}
  }
}
interface Estudiante {
  cedula: string;
  correo: string;
  nombre: string;
  semestre: number | string;
  telefono: string;
  estado: string;
  carrera: number;
}

interface Coordinacion {
  cedula: string;
  nombre: string;
  correo: string;
  telefono: string;
}

interface ControlEstudio {
  cedula: string;
  nombre: string;
  correo: string;
  telefono: string;
  rol: string;
}

interface Docente {
  cedula: string;
  nombre: string;
  correo: string;
  telefono: string;
}

interface Materia {
  id: string;
  nombre: string;
  prelacion: string;
  unidad_credito: number;
  hp: number;
  ht: number;
  semestre: number;
  id_carrera: number;
  id_docente: string;
  dia: string;
  hora_inicio: string;
  hora_fin: string;
  cantidad_estudiantes?: string;
}

interface Config {
  id: string;
  ciclo: string;
  porc1: number;
  porc2: number;
  porc3: number;
  horario_inicio: string;
  horario_fin: string;
  cuota1: string;
  cuota2: string;
  cuota3: string;
  cuota4: string;
  cuota5: string;
}

interface Notas {
  materia: string;
  nota1: number;
  nota2: number;
  nota3: number;
  promedio: number;
  id: string | number;
}

interface Peticiones {
  campo: string;
  descripcion: string;
  estado: string;
  id: number;
  id_docente: string;
  id_estudiante: string;
  id_materia: string;
}

export {
  Estudiante,
  Coordinacion,
  Docente,
  Materia,
  ControlEstudio,
  Config,
  Notas, Peticiones
};
