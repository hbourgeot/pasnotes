<script lang="ts">
  import type { ActionData, PageData } from "./$types";
  import { Table } from "@skeletonlabs/skeleton";
  import type { TableSource } from "@skeletonlabs/skeleton";
  import { tableMapperValues } from "@skeletonlabs/skeleton";
  import { triggerToast } from "$lib/utils/toast";
  import { goto } from "$app/navigation";

  export let data: PageData;
  export let form: ActionData;

  $: if (form?.message) {
    triggerToast(form?.message);
  }

  const sourceData = data.estudiantes.map((nota: any) => ({
    nombre: nota.nombre,
    cedula: nota.cedula,
    nota1: nota.nota1,
    nota2: nota.nota2,
    nota3: nota.nota3,
    promedio: nota.promedio,
  }));

  const tableSource: TableSource = {
    head: [
      "Nombre del Estudiante",
      "Cédula del Estudiante",
      "Nota del 1er corte",
      "Nota del 2do corte",
      "Nota del 3er corte",
      "Promedio de notas",
    ],
    body: tableMapperValues(sourceData, [
      "nombre",
      "cedula",
      "nota1",
      "nota2",
      "nota3",
      "promedio",
    ]),
  };

  const handleSelect = (e: CustomEvent) => {
    let estudiante = e.detail[0];
    goto(`/coordinadores/estudiante/${estudiante}`);
  };
</script>
<svelte:head>
  <title>Estudiantes de la materia {data.materia.id} | Coordinadores | IUTEPAS</title>
</svelte:head>
<main class="container mx-auto p-10 h-screen bg-transparent">
  <h2 class="text-4xl text-center">Estudiantes de '{data.materia.nombre}'</h2>
  <section class="w-full p-5">
    {#if sourceData[0].cedula}
    <Table source={tableSource} interactive={true} on:selected={handleSelect} />
    {:else}
    <p class="text-xl">No hay estudiantes registrados</p>
    {/if}
  </section>
</main>
