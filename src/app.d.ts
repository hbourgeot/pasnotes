// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { client } from "\/server/fetch";
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			client: client,
			user: Estudiante,
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

export {Estudiante, Pago};
