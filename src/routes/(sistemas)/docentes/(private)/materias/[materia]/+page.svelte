<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";
  import {
    FileDropzone,
    Modal,
    modalStore,
    Table,
  } from "@skeletonlabs/skeleton";
  import type {
    TableSource,
    ModalSettings,
    ModalComponent,
  } from "@skeletonlabs/skeleton";
  import { tableMapperValues } from "@skeletonlabs/skeleton";
  import { triggerToast } from "$lib/utils/toast";
  import ModalFile from "$lib/components/ModalFile.svelte";
  import { onMount } from "svelte";
  import type { Notas } from "../../../../../../app";
  import { ExpandLess, ExpandMore } from "@steeze-ui/material-design-icons";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { invalidateAll } from "$app/navigation";

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

  let estudiante: string = "";
  let campo: string = "";
  let nota: number = 0;
  let toChange: string = "0";

  let files: FileList;
  let uploadForm: HTMLFormElement;
  let myFile: any;
  let downloadFile: string;
  let downloadLink: any;
  let nota1: number;
  let nota2: number;
  let nota3: number;

  let estudianteFind: any = {
    nombre: "",
    cedula: "",
    nota1: 0,
    nota2: 0,
    nota3: 0,
  };
  $: if (estudiante) {
    estudianteFind = data.estudiantes.find(
      (item: any) => item.cedula === estudiante
      );
    }

  onMount(async () => {
    const response = await fetch(
      //@ts-ignore
      `/api/archivos?ciclo=${data.ciclo}&folder=${data.materia.id}`
    );
    const contentType = response.headers.get("content-type");
    if (contentType && !contentType.includes("application/json")) {
      const file = await response.blob();
      downloadFile = URL.createObjectURL(file);
    } else {
      downloadFile = "";
    }
  });

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

  const handleForm = async () => {
    try {
      myFile = await new Promise<FileList>((resolve) => {
        const modal: ModalSettings = {
          type: "component",
          // Pass the component registry key as a string:
          component: "modalFile",
          title: "Agregar archivo",
          body: "Sube tu planificación en formato PDF",
          response: (r: FileList) => {
            resolve(r);
          },
        };
        modalStore.trigger(modal);
      });

      myFile = myFile.item(0);

      myFile = myFile; // Force Svelte
      uploadForm.requestSubmit();

      triggerToast("Planificacion cargada exitosamente")
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
</script>

<main class="flex justify-center items-center bg-transparent">
  <section class="w-full p-5">
    ¨
    {#if sourceData[0].cedula !== null}
    <Table
      source="{tableSource}"
      interactive="{true}"
      on:selected="{handleSelect}"
    />
    {:else}
    <h3 class="text-xl font-bold">La materia no tiene estudiantes registrados</h3>
    {/if}
  </section>
  <section class="w-full sticky">
    {#if sourceData[0].cedula !== null}
    <form
      use:enhance
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
          <option value="1" disabled="{estudianteFind.nota1 != 0}"
            >1er corte</option
          >
          <option value="2" disabled="{estudianteFind.nota2 != 0}"
            >2do corte</option
          >
          <option value="3" disabled="{estudianteFind.nota3 != 0}"
            >3er corte</option
          >
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
      <details
        class="flex w-full my-5 mx-auto flex-col items-center justify-center"
      >
        <summary
          class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded border border-gray-200"
        >
          <span class="expand">
            <Icon src="{ExpandMore}" class="icon " />
          </span>
          <span class="expanded">
            <Icon src="{ExpandLess}" class="icon " />
          </span>
          ¿Hay alguna nota errónea?
        </summary>

        <form
          action="?/peticion"
          method="post"
          class="flex mt-16 flex-wrap justify-around w-[80%] mx-auto h-auto rounded-2xl gap-2"
        >
          <span class="w-[48%]">
            <label for="estudiante_peticion"> Estudiante </label>
            <input
              readonly
              bind:value="{estudiante}"
              type="text"
              id="estudiante_peticion"
              name="id_estudiante"
              class="w-full input"
            />
          </span>
          <span class="w-[48%]">
            <label for="corte_peticion"> Corte </label>
            <select class="select" name="nombre_campo" id="corte_peticion">
              <option value="0" disabled>Seleccione una nota a cambiar</option>
              <option value="1" disabled="{estudianteFind.nota1 == 0}"
                >1er corte</option
              >
              <option value="2" disabled="{estudianteFind.nota2 == 0}"
                >2do corte</option
              >
              <option value="3" disabled="{estudianteFind.nota3 == 0}"
                >3er corte</option
              >
            </select>
          </span>
          <span class="w-full">
            <label for="descripcion_peticion"> Descripción </label>
            <textarea
              rows="3"
              name="descripcion"
              id="descripcion_peticion"
              class="input rounded-2xl p-3"></textarea>
          </span>
          <button type="submit" class="btn variant-filled">Pedir permiso</button
          >
        </form>
      </details>
    </form>
    {/if}
    <div
      class="bg-white flex mt-16 flex-wrap justify-around w-[80%] mx-auto h-auto border rounded-2xl border-dark-100"
    >
      <h3 class="w-full pt-4 pl-8 text-black pb-4 text-2xl">
        Cargar planificación
      </h3>
      <button class="btn variant-filled" on:click="{() => handleForm()}"
        >Cargar</button
        >
    </div>
  </section>
  <form
    action="?/carga"
    method="post"
    use:enhance="{({ data }) => {
      data.set('files', myFile);
      return async ({ update }) => {
        await update();
        await invalidateAll()
      };
    }}"
    class="hidden"
    bind:this="{uploadForm}"
  >
    <FileDropzone name="files" bind:files="{myFile}" />
  </form>
  <Modal components="{modalComponentRegistry}" />
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

  details .expanded {
    display: none;
  }

  details[open] .expanded {
    display: flex;
  }

  details[open] .expand {
    display: none;
  }

  textarea {
    resize: vertical;
  }
</style>
