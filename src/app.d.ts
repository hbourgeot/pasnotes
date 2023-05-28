// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { client } from "\/server/fetch";
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			client: client,
			user: Usuario,
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

interface Pago{
	id: number;
	pre_inscripcion: string;
	inscripcion: string;
	cuota1: string;
	cuota2: string;
	cuota3: string;
	cuota4: string;
	cuota5: string;
	cedula_estudiante: string;
	montoPreInscripcion: number;
	montoInscripcion: number;
	montoCuota1: number;
	montoCuota2: number;
	montoCuota3: number;
	montoCuota4: number;
	montoCuota5: number;
	id_pago: number
}

interface Usuario {
	user: string,
}

export {Estudiante, Pago, Usuario};
