<script lang="ts">
  import { enhance } from "$app/forms";
  import type {TableSource, ToastSettings} from "@skeletonlabs/skeleton"
  import {
    toastStore,
    Toast,
    tableMapperValues,
    Table,
  } from "@skeletonlabs/skeleton";
  import type { ActionData, PageData } from "./$types";
  import type { SubmitFunction } from "@sveltejs/kit";
  import type { Docente } from "../../../../../app";
  import { triggerToast } from "$lib/utils/toast";
  import { invalidateAll } from "$app/navigation";

  export let form: ActionData;
  export let data: PageData;
  let identidad: string = "V";
  let cedula: number;
  let cedulaIdentidad = "";
  let correo = "";

  $: cedulaIdentidad = `${identidad}-${cedula}`;

  $: if (form?.message) {
    triggerToast(form?.message)
  }

  const handleSubmit: SubmitFunction = ({ data, cancel }) => {
    if(sourceData.find(docente => docente.cedula === cedulaIdentidad)){
      triggerToast(`El docente con la cédula ${cedulaIdentidad} ya ha sido previamente registrado, pruebe con otra`);
      return cancel();
    }

    if(sourceData.find(docente => docente.correo === correo)){
      triggerToast(`El docente con el correo ${correo} ya ha sido previamente registrado, pruebe con otro`);
      return cancel();
    }
    data.append("cedula", cedulaIdentidad);
    return async ({ update }) => {
      await update();
    };
  };

  let docentes =  data.docentes as unknown as Docente[];
  let sourceData = docentes;
  
  let tableSource: TableSource = {
    head: [
      "Cédula",
      "Correo",
      "Nombre y Apellido",
      "Teléfono",
    ],
    body: tableMapperValues(sourceData, [
      "cedula",
      "correo",
      "nombre",
      "telefono",
    ]),
  };
  
  $: docentes = data.docentes as unknown as Docente[];
  $: sourceData = docentes;
  $: tableSource = {
    head: [
      "Cédula",
      "Correo",
      "Nombre y Apellido",
      "Teléfono",
    ],
    body: tableMapperValues(sourceData, [
      "cedula",
      "correo",
      "nombre",
      "telefono",
    ]),
  };
</script>

<div class='h-screen flex flex-col lg:justify-center lg:items-center'>
  <div class="container h-auto lg:w-2/3 md:w-3/4 mx-auto px-4 py-8 flex flex-col lg:flex-row justify-evenly items-center gap-3 rounded-xl bg-white">
    {#if form?.message}
      <Toast position="t" />
    {/if}
    <div class="p-8 w-full max-w-[410px] rounded-xl shadow h-full lg:w-1/2">
      <h2 class="text-2xl font-semibold mb-4 text-center">Añadir Docente</h2>
      <form id="docente-form" method="post" use:enhance={handleSubmit}>
        <div class="mb-4">
          <label for="cedula outline-none" class="label">Cédula</label>
          <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
            <select class="select" bind:value={identidad}>
              <option value="V">V</option>
              <option value="E">E</option>
            </select>
            <input
              type="number"
              bind:value={cedula}
              min="1000000"
              id="cedula"
              class="input (text) py-2 px-7 outline-none"
              required
            />
          </div>
        </div>
        <div class="mb-4">
          <label for="nombre" class="label">Nombre y Apellido</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            class="input (text) py-2 px-7 outline-none"
            required
          />
        </div>
        <div class="mb-4">
          <label for="correo" class="label">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            bind:value="{correo}"
            class="input (text) py-2 px-7 outline-none"
            required
          />
        </div>
        <div class="mb-4">
          <label for="telefono" class="label">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            class="input py-2 px-7 outline-none"
            required
          />
        </div>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md"
          >Registrar Docente</button
        >
      </form>
    </div>
  
    <div class="p-8 rounded-xl shadow h-full w-full">
      <h2 class="text-2xl font-semibold mb-4 text-center">Docentes Registrados</h2>
      <Table source={tableSource} regionHeadCell="text-center" regionCell="text-center"/>
    </div>
  </div>
  
</div>