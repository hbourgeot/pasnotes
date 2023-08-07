<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";
  import {
    FileDropzone,
    Modal,
    modalStore,
    Table,
    toastStore,
  } from "@skeletonlabs/skeleton";
  import type {
    TableSource,
    ModalSettings,
    ModalComponent,
  } from "@skeletonlabs/skeleton";
  import { tableMapperValues } from "@skeletonlabs/skeleton";
  import { triggerToast } from "$lib/utils/toast";
  import ModalFile from "$lib/components/ModalFile.svelte";
  import type { SubmitFunction } from "@sveltejs/kit";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  export let data: PageData;
  export let form: ActionData;

  $: if (form?.message) {
    triggerToast(form?.message);
  }

  let sourceData = data.estudiantes.map((nota: any) => ({
    nombre: nota.nombre,
    cedula: nota.cedula,
    nota1: nota.nota1,
    nota2: nota.nota2,
    nota3: nota.nota3,
    promedio: nota.promedio,
  }));

  let tableSource: TableSource = {
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

  let estudiante: string = "";
  let campo: string = "";
  let nota: number = 0;
  let toChange: string = "0";

  let estudianteFind: any = {
    nombre: "",
    cedula: "",
    nota1: 0,
    nota2: 0,
    nota3: 0,
  };

  $: if (estudiante)
    estudianteFind = sourceData.find((item: any) => {
      return item.cedula === estudiante;
    });

  onMount(() => {
    if (browser) {
      if (sourceData[0].cedula === null) {
        triggerToast("La materia no tiene estudiantes asignados", 5000);
        setTimeout(() => window.history.back(), 3000);
      }
    }
  });

  $: sourceData = data.estudiantes.map((nota: any) => ({
    nombre: nota.nombre,
    cedula: nota.cedula,
    nota1: nota.nota1,
    nota2: nota.nota2,
    nota3: nota.nota3,
    promedio: nota.promedio,
  }));

  $: tableSource = {
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
    estudiante = e.detail[1];
    switch (toChange) {
      case "1":
        campo = "nota1";
        nota = e.detail[2];
        break;
      case "2":
        campo = "nota2";
        nota = e.detail[3];
        break;
      case "3":
        campo = "nota3";
        nota = e.detail[4];
        break;
    }
  };

  const modalComponentRegistry: Record<string, ModalComponent> = {
    // Custom Modal 1
    modalFile: {
      // Pass a reference to your custom component
      ref: ModalFile,
    },
  };

  const handleSubmit: SubmitFunction = async ({ cancel }) => {
    let response = await new Promise<string>((resolve) => {
      const modal: ModalSettings = {
        type: "prompt",
        // Data
        title: "Espere un momento",
        body: "Ingrese la clave para poder modificar la nota",

        // Populates the input value and attributes
        value: "",
        valueAttr: {
          type: "password",
          minlength: 3,
          maxlength: 10,
          required: true,
        },
        buttonTextSubmit: "Enviar",
        buttonTextCancel: "Cancelar",
        // Returns the updated response value
        response: (r: string) => resolve(r),
      };
      modalStore.trigger(modal);
    });

    if (!response) {
      return cancel();
    }

    if (response != "1234") {
      triggerToast("Clave inválida, intente de nuevo");
      return cancel();
    }

    return async ({ update }) => {
      await update();
    };
  };
</script>

<main class="flex h-screen justify-center items-center bg-transparent">
  {#if sourceData[0].cedula !== null}
  <section class="w-full p-5">
    <Table
      source="{tableSource}"
      interactive="{true}"
      on:selected="{handleSelect}"
      regionCell="capitalize"
    />
  </section>
  <section class="w-full sticky">
    <form
      use:enhance="{handleSubmit}"
      method="post"
      class="flex mt-16 flex-wrap justify-around w-[80%] mx-auto h-auto border rounded-2xl border-dark-100 bg-white"
    >
      <h3 class="w-full pt-4 pl-8 text-black pb-4 text-2xl">
        Asignacion de Notas
      </h3>

      <span class="w-[30%]">
        <label for="estudiante"> Estudiante </label>
        <input
          readonly
          bind:value="{estudiante}"
          type="text"
          id="estudiante"
          name="cedula_estudiante"
          class="w-full input"
        />
      </span>
      <span class="w-[30%]">
        <label for="corte"> Corte </label>
        <select
          class="select"
          name="nombre_campo"
          id="corte"
          bind:value="{toChange}"
        >
          <option value="0" disabled>Seleccione una nota a cambiar</option>
          <option value="1">1er corte</option>
          <option value="2">2do corte</option>
          <option value="3">3er corte</option>
        </select>
      </span>
      <span class="w-[30%]">
        <label for="calificacion"> Nota </label>
        <input
          name="valor"
          type="number"
          bind:value="{nota}"
          id="calificacion"
          class="input"
        />
      </span>

      <div class="w-full p-4 flex justify-center gap-8 mt-8">
        <button
          on:click="{() => {
            estudiante = '';
            nota = 0;
            toChange = '0';
          }}"
          class="bg-pink-600 p-4 w-52 text-white rounded-xl">Cancelar</button
        >
        <button class="bg-[#006FB0] text-white p-4 w-52 rounded-xl"
          >Editar</button
        >
      </div>
    </form>
  </section>
  <Modal components="{modalComponentRegistry}" />
  {/if}
</main>

<style>
  input,
  select {
    width: 100%;
    border: 1px solid gray;
    padding: 14px;
    border-radius: 8px;
  }
  span label {
    margin-bottom: 8px;
  }

  :global(.modal-prompt-input) {
    padding: 10px;
  }
</style>
