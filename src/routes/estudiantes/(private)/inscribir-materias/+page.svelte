<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";
  import type { Materia } from "../../../../app";
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import type { TableSource } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  import { triggerToast } from "$lib/utils/toast";
  import { goto } from "$app/navigation";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { Delete } from "@steeze-ui/material-design-icons";
  import type { SubmitFunction } from "@sveltejs/kit";

  export let data: PageData;
  export let form: ActionData;

  $: if (form?.message) {
    triggerToast(form?.message);
  }

  $: if (data?.message) {
    triggerToast(data?.message);
  }

  let materias: Materia[] = [];
  let materiasData: Materia[] = data.materias;
  let unidadesTotales = 0;
  let materia = data.materias[0]?.id ?? null;
  let materiaDelete = "";
  let materiaObject: Materia | undefined;
  $: materiaObject = data.materias.findLast(
    (materi: Materia) => materi.id === materia
  );

  let tableSimple: TableSource = {
    // A list of heading labels.
    head: [
      "Código",
      "Nombre",
      "Horas Prácticas",
      "Horas Teóricas",
      "U.C.",
      "Docente",
    ],
    // The data visibly shown in your table body UI.
    body: tableMapperValues(materias, [
      "id",
      "nombre",
      "hp",
      "ht",
      "unidad_credito",
      "id_docente",
    ]),
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
      head: [
        "Código",
        "Nombre",
        "Horas Prácticas",
        "Horas Teóricas",
        "U.C.",
        "Docente",
      ],
      // The data visibly shown in your table body UI.
      body: tableMapperValues(materias, [
        "id",
        "nombre",
        "hp",
        "ht",
        "unidad_credito",
        "id_docente",
      ]),
      foot: [
        "Total de U.C",
        " ",
        " ",
        " ",
        `<code class="code bold text-lg">${unidadesTotales.toString()}</code>`,
      ],
    };

    data.materias = data.materias.filter(
      (materi: Materia) => materi.id !== materia
    );

    materiaDelete = materia;
  };

  const deleteMateria = () => {
    let mate = materias.find((materia) => materia.id == materiaDelete);
    materias = materias.filter((materia) => materia.id != materiaDelete);

    unidadesTotales =
      materias.length !== 0
        ? materias
            .map((materia: Materia) =>
              parseInt(materia.unidad_credito.toString())
            )
            ?.reduce((a, b) => a + b)
        : 0;

    tableSimple = {
      // A list of heading labels.
      head: [
        "Código",
        "Nombre",
        "Horas Prácticas",
        "Horas Teóricas",
        "U.C.",
        "Docente",
      ],
      // The data visibly shown in your table body UI.
      body: tableMapperValues(materias, [
        "id",
        "nombre",
        "hp",
        "ht",
        "unidad_credito",
        "id_docente",
      ]),
      foot: [
        "Total de U.C",
        " ",
        " ",
        " ",
        `<code class="code bold text-lg">${unidadesTotales.toString()}</code>`,
      ],
    };

    data.materias.push(mate);
  };

  onMount(() => {
    if (data.materias.length == 0) {
      if (data.message == "") {
        triggerToast(
          "No hay materias que cumplan tu estado académico, vuelve más tarde."
        );
      }
      goto("/estudiantes");
    }
  });

  const handleSubmit: SubmitFunction = ({ data }) => {
    for (const item of materias) {
      data.append("materias", item.id);
    }

    return async ({ update }) => await update();
  };
</script>

<!--
  
  TODO

  1. Se debe comprobar si el estudiante pasó las materia que prelan a la elegible para inscribir
  2. Comprobar si todavía quedan disponibles unidades de crédito
-->
<form
  class="mb-4 lg:w-1/2 <md:w-2/3 <sm:w-10/11 mx-auto p-5 flex flex-col items-center gap-5"
  use:enhance="{handleSubmit}"
  method="post"
>
  {#if data.materias.length != 0}
    <label for="cedula" class="label text-3xl bold mb-4"
      >Seleccione una materia a agregar</label
    >
    <div
      class="input-group input-group-divider grid-cols-[auto_1fr_auto] w-1/2"
    >
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
  {/if}

  <Table source="{tableSimple}" class="md:mx-auto" />

  {#if materias.length != 0}
    <label for="cedula" class="label text-3xl bold mb-4"
      >Seleccione una materia a eliminar</label
    >
    <div
      class="input-group input-group-divider grid-cols-[auto_1fr_auto] w-1/2"
    >
      <select
        name="materia"
        id="materia"
        class="select"
        bind:value="{materiaDelete}"
      >
        {#each materias as materia}
          <option value="{materia.id}">{materia.id} - {materia.nombre}</option>
        {/each}
      </select>
      <button
        type="button"
        on:click="{deleteMateria}"
        class="bg-blue-600 text-white px-4 py-2 rounded">Eliminar</button
      >
    </div>
  {/if}
  {#if materias.length > 0}
    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded"
      >Registrar materias</button
    >
  {/if}
</form>
