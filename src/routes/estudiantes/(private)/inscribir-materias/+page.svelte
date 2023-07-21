<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData, SubmitFunction } from "./$types";
  import type { Materia } from "../../../../app";
  import {
    Modal,
    modalStore,
    Table,
    tableMapperValues,
  } from "@skeletonlabs/skeleton";
  import type {
    TableSource,
    ModalSettings,
    ModalComponent,
  } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  import { triggerToast } from "$lib/utils/toast";
  import { goto } from "$app/navigation";
  import ModalList from "$lib/components/ModalList.svelte";

  export let data: PageData;
  export let form: ActionData;

  $: if (form?.message) {
    triggerToast(form?.message);

    if (form?.message == "¡Su horario ha sido inscrito exitosamente!")
      goto("/estudiantes");
  }

  $: if (data?.message) {
    triggerToast(data?.message);
  }

  let materias: Materia[] = [];
  let materiasData: Materia[] = data.materias;
  let unidadesTotales: number | undefined = 0;
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

  const modalComponentRegistry: Record<string, ModalComponent> = {
    // Custom Modal 1
    modalList: {
      // Pass a reference to your custom component
      ref: ModalList,
      props: { materias: data.materias },
    },
  };

  const handleAdd = async () => {
    try{
    const materiasIDs = await new Promise<number[]>((resolve) => {
      const modal: ModalSettings = {
        type: "component",
        // Pass the component registry key as a string:
        component: "modalList",
        title: "Seleccionar materias",
        body: "Selecciona las materias que deseas inscribir, vuelve a pulsar en ella para descartarla de la inscripcion",
        response: (r: number[]) => {
          resolve(r)
        }
      };
      modalStore.trigger(modal);
    });
    
    materias = []
    for(const id of materiasIDs){
      const materiaFind = materias.find(mat => mat.id == id.toString())
      if(!materiaFind){
        materias.push(materiasData.find((materia: Materia) => materia.id == id.toString()) as unknown as Materia)
      } else{
        materias = materias.filter(mat => mat.id === id.toString())
      }
      console.log(id, materias, materiasIDs)
    }

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
  }catch(e){
    console.error(e);
  }
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

<form
  class="mb-4 lg:w-1/2 <md:w-2/3 <sm:w-10/11 mx-auto p-5 flex flex-col items-center gap-5"
  use:enhance="{handleSubmit}"
  method="post"
>
<h3 class="label text-3xl bold mb-4"
  >Realización del horario</h3
>
  {#if data.materias.length != 0}
      <button
        type="button"
        on:click="{handleAdd}"
        class="bg-blue-600 text-white px-4 py-2 rounded">Seleccionar materias</button
      >
  {/if}

  <Table source="{tableSimple}" class="md:mx-auto" />

  {#if materias.length > 0}
    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded"
      >Registrar materias</button
    >
  {/if}
</form>
<Modal components="{modalComponentRegistry}" />
