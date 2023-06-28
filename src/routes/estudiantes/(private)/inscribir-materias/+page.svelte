<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";
  import type { Materia } from "../../../../app";
    import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import type { TableSource } from "@skeletonlabs/skeleton";

  export let data: PageData;

  let materias: Materia[] = [];
  let unidadesTotales = 0;
  let materia = data.materias[0].id;

  let tableSimple: TableSource
  
  $: tableSimple = {
    // A list of heading labels.
    head: ["Código", "Nombre", "Horas Prácticas", "Horas Teóricas", "U.C.", "Docente"],
    // The data visibly shown in your table body UI.
    body: tableMapperValues(materias, ["id", "nombre", "hp", "ht", "unidad_credito", "id_docente"]),
  };

  const addMateria = () => {
    materias.push(
      data.materias.find((materi: Materia) => materi.id === materia)
    );
    unidadesTotales =
      materias
        .map((materia: Materia) => parseInt(materia.unidad_credito.toString()))
        ?.reduce((a, b) => a + b) ?? 0;
    
     tableSimple = {
    // A list of heading labels.
    head: ["Código", "Nombre", "Horas Prácticas", "Horas Teóricas", "U.C.", "Docente"],
    // The data visibly shown in your table body UI.
    body: tableMapperValues(materias, ["id", "nombre", "hp", "ht", "unidad_credito", "id_docente"]),
    foot: ["Total de U.C"," ", " ", " ", `<code class="code bold text-lg">${unidadesTotales.toString()}</code>`]
  };
  };
</script>

<form
  class="mb-4 lg:w-1/2 <md:w-2/3 <sm:w-10/11 mx-auto p-5 flex flex-col items-center"
  use:enhance
  method="post"
>
  <label for="cedula" class="label text-3xl bold mb-4"
    >Seleccione una materia a agregar</label
  >
  <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] w-1/2">
    <select name="materia" id="materia" class="select" bind:value="{materia}">
      {#each data.materias as materia}
        <option value="{materia.id}">{materia.id} - {materia.nombre}</option>
      {/each}
    </select>
    <button
      type="button"
      on:click="{addMateria}"
      class="bg-blue-600 text-white px-4 py-2 rounded">Agregar</button
    >
  </div>
</form>

<div class="lg:w-1/2 <md:w-2/3 <sm:w-10/11 mx-auto">
  <Table source="{tableSimple}" class='md:mx-auto' />
</div>
