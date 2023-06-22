// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { client } from "\/server/fetch";
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			client: client,
			estudiante: Estudiante,
			docente: Docente,
			coordinador: Coordinacion
		}
		// interface PageData {}
		// interface Platform {}
	}

	
}
interface Estudiante{
	cedula: string;
	correo: string;
	nombre: string;
	semestre: number | string;
	telefono: string;
	estado: string;
	carrera: number;
}

interface Coordinacion{
	cedula: string;
	nombre: string;
	correo: string;
	telefono: string;
}

interface Docente {
  cedula: string;
  nombre: string;
  correo: string;
  telefono: string;
}

export {Estudiante, Coordinacion, Docente};
