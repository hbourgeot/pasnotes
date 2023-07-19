<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";
  import {
    FileDropzone,
    Modal,
    modalStore,
    Table,
  } from "@skeletonlabs/skeleton";
  import type { TableSource, ModalSettings, ModalComponent } from "@skeletonlabs/skeleton";
  import { tableMapperValues } from "@skeletonlabs/skeleton";
  import { triggerToast } from "$lib/utils/toast";
  import ModalFile from "$lib/components/ModalFile.svelte";
  import type { SubmitFunction } from "@sveltejs/kit";

  export let data: PageData;
  export let form: ActionData;

  $: if (form?.message) {
    triggerToast(form?.message);
  }

  const sourceData = data.estudiantes.map((nota: any) => ({
    cedula: nota.cedula,
    nota1: nota.nota1,
    nota2: nota.nota2,
    nota3: nota.nota3,
    promedio: nota.promedio,
  }));

  const tableSource: TableSource = {
    head: [
      "Cédula del Estudiante",
      "Nota del 1er corte",
      "Nota del 2do corte",
      "Nota del 3er corte",
      "Promedio de notas",
    ],
    body: tableMapperValues(sourceData, [
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

  const handleSelect = (e: CustomEvent) => {
    estudiante = e.detail[0];
    switch (toChange) {
      case "1":
        campo = "nota1";
        nota = e.detail[1];
        break;
      case "2":
        campo = "nota2";
        nota = e.detail[2];
        break;
      case "3":
        campo = "nota3";
        nota = e.detail[3];
        break;
      case "4":
        campo = "promedio";
        nota = e.detail[4];
        break;
      case "5":
        nota = e.detail[1];
    }
  };

  let files: FileList;
  let uploadForm: HTMLFormElement;
  let myFile: any;
  $: console.log(myFile);

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

      console.log("resolved response:", myFile);
      myFile = myFile.item(0);

      myFile = myFile; // Force Svelte
      uploadForm.requestSubmit();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleSubmit: SubmitFunction = ({ data }) => {
    data.set("files", myFile);
    console.log("hola");
    return async ({ update }) => {
      await update();
    };
  };
</script>

<main class="flex justify-center items-center bg-transparent">
  <section class="w-full p-5">
    <Table source={tableSource} interactive={true} on:selected={handleSelect} />
  </section>
  <section class="w-full sticky">
    <form
      use:enhance
      method="post"
      class="flex mt-16 flex-wrap justify-around w-[80%] mx-auto h-auto border rounded-2xl border-dark-100"
    >
      <h3 class="w-full pt-4 pl-8 text-black pb-4 text-2xl">
        Asignacion de Notas
      </h3>

      <span class="w-[30%]">
        <label for="estudiante"> Estudiante </label>
        <input
          readonly
          bind:value={estudiante}
          type="text"
          id="estudiante"
          name="cedula_estudiante"
          class="w-full"
        />
      </span>
      <span class="w-[30%]">
        <label for="corte"> Corte </label>
        <select name="nombre_campo" id="corte" bind:value={toChange}>
          <option value="0" disabled>Seleccione una nota a cambiar</option>
          <option value="1">1er corte</option>
          <option value="2">2do corte</option>
          <option value="3">3er corte</option>
          <option value="4">Promedio</option>
        </select>
      </span>
      <span class="w-[30%]">
        <label for="calificacion"> Nota </label>
        <input name="valor" type="number" bind:value={nota} id="calificacion" />
      </span>

      <div class="w-full p-4 flex justify-center gap-8 mt-8">
        <button
          on:click={() => {
            estudiante = "";
            nota = 0;
            toChange = "0";
          }}
          class="bg-pink-600 p-4 w-52 text-white rounded-xl">Cancelar</button
        >
        <button class="bg-[#006FB0] text-white p-4 w-52 rounded-xl"
          >Editar</button
        >
      </div>
    </form>
    <div
      class="flex mt-16 flex-wrap justify-around w-[80%] mx-auto h-auto border rounded-2xl border-dark-100"
    >
      <h3 class="w-full pt-4 pl-8 text-black pb-4 text-2xl">
        Cargar/Descargar planificación
      </h3>
      <button class="btn variant-filled" on:click={() => handleForm()}
        >Cargar</button
      >
      <button class="btn variant-filled">Descargar</button>
    </div>
  </section>
  <form
    action="?/carga"
    method="post"
    use:enhance={handleSubmit}
    class="hidden"
    bind:this={uploadForm}
  >
    <FileDropzone name="files" bind:files={myFile} />
  </form>
  <Modal components={modalComponentRegistry} />
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
</style>
