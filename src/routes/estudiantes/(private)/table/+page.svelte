<script lang="ts">
	import { Table } from "@skeletonlabs/skeleton";
	import type { TableSource } from "@skeletonlabs/skeleton";

	import { tableMapperValues } from "@skeletonlabs/skeleton";
</script>

<main>
	<section class="w-full h-screen">
		<form action="" class="flex mt-16 flex-wrap justify-around  w-[80%] mx-auto h-auto border rounded-2xl border-dark-100">

			<h3 class='w-full pt-4 pl-8 text-black pb-4 text-2xl'>Asignacion de Notas</h3>

			<span class="w-[30%]">
				<label for="estudiante"> Estudiante </label>
				<input type="text" id="estudiante" class="w-full" />
			</span>
			<span class="w-[30%]">
				<label for="estudiante_carrera"> Carrera </label>
				<input type="text" id="estudiante_carrera" />
			</span>
			<span class="w-[30%]">
				<label for="estudiante_carrera"> Carrera </label>
				<input type="text" id="estudiante_carrera" />
			</span>

			<div class='w-full p-4 flex justify-center gap-8 mt-8'>
				<button class='bg-pink-600 p-4 w-52 text-white rounded-xl'>Accion 1</button>
				<button class='bg-[#006FB0] text-white p-4 w-52 rounded-xl'>Buscar</button>
			</div>
		</form>
	</section>
</main>

<style scoped>
	input {
		width: 100%;
		border: 1px solid gray;
		padding: 14px;
		border-radius: 8px;
	}
	span label {
		margin-bottom: 8px;
	}

	
</style>
