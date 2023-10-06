<script lang="ts">
  import { enhance } from "$app/forms";
  import type { TableSource, ToastSettings } from "@skeletonlabs/skeleton";
  import {
    toastStore,
    Toast,
    tableMapperValues,
    Table,
    Paginator,
  } from "@skeletonlabs/skeleton";
  import type { ActionData, PageData } from "./$types";
  import type { SubmitFunction } from "@sveltejs/kit";
  import type { ControlEstudio, Docente } from "../../../../../app";
  import { triggerToast } from "$lib/utils/toast";

  export let form: ActionData;
  export let data: PageData;
  let identidad: string = "V";
  let cedula: number;
  let cedulaIdentidad = "";
  let correo = "";

  $: cedulaIdentidad = `${identidad}-${cedula}`;

  $: if (form?.message) {
    const t: ToastSettings = {
      message: form?.message,
    };

    toastStore.trigger(t);
  }

  const handleSubmit: SubmitFunction = ({ data, cancel }) => {
    data.append("cedula", cedulaIdentidad);
    return async ({ update }) => {
      await update();
    };
  };

  let sourceData = data.controlEstudio as unknown as ControlEstudio[];
  let paginationSettings = {
    limit: 5,
    size: sourceData.length,
    amounts: [3, 5, 10, 20],
    offset: 0,
  };
  
  $: sourceData = data.controlEstudio?.slice(
    paginationSettings.offset * paginationSettings.limit,
    paginationSettings.offset * paginationSettings.limit +
      paginationSettings.limit
  ) as unknown as ControlEstudio[];

  let disabled = true;
  let cde: ControlEstudio;
  $: disabled = cde ? false : true;

  const handleClick = (e: CustomEvent) => {
    cedula = e.detail[0].split(/^(V-|E-)/g)[2];
    identidad = e.detail[0].split(/^(V-|E-)/g)[1].replace("-", "");
    cde = {
      cedula: "",
      correo: e.detail[1],
      nombre: e.detail[2],
      telefono: e.detail[3],
    };
  };

  let tableSource: TableSource = {
    head: ["Cédula", "Correo", "Nombre", "Teléfono"],
    body: tableMapperValues(sourceData, [
      "cedula",
      "correo",
      "nombre",
      "telefono",
    ]),
  };

  $: tableSource = {
    head: ["Cédula", "Correo", "Nombre", "Teléfono"],
    body: tableMapperValues(sourceData, [
      "cedula",
      "correo",
      "nombre",
      "telefono",
    ]),
  };
</script>

<svelte:head>
  <title>Editar personal | Super usuario | IUTEPAS</title>
</svelte:head>
<div
  class="container lg:w-2/3 md:w-3/4 mx-auto px-4 py-8 flex flex-col-reverse lg:flex-row justify-evenly items-center gap-3 rounded-xl bg-white full"
>
  {#if form?.message}
    <Toast position="t" />
  {/if}
  <div class="p-8 rounded-xl shadow w-full lg:w-1/2">
    <h2 class="text-2xl font-semibold mb-4 text-center">
      Editar Personal de Control de Estudio
    </h2>
    <form id="docente-form" method="post" use:enhance="{handleSubmit}">
      <div class="mb-4">
        <label for="cedula" class="label">Cédula</label>
        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
          <select class="select" bind:value="{identidad}" disabled>
            <option value="V">V</option>
            <option value="E">E</option>
          </select>
          <input
            type="number"
            bind:value="{cedula}"
            min="1000000"
            id="cedula"
            class="input (text) py-2 px-7"
            disabled
            required
          />
        </div>
      </div>
      <div class="mb-4">
        <label for="nombre" class="label">Nombre</label>
        <input
          type="text"
          id="nombre"
          value="{cde?.nombre ?? ''}"
          name="nombre"
          class="input (text) py-2 px-7"
          disabled="{disabled}"
          required
        />
      </div>
      <div class="mb-4">
        <label for="correo" class="label">Correo</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value="{cde?.correo ?? ''}"
          class="input (text) py-2 px-7"
          disabled="{disabled}"
          required
        />
      </div>
      <div class="mb-4">
        <label for="telefono" class="label">Teléfono (Sólo números)</label>
        <input
          type="tel"
          pattern="[0-9]"
          id="telefono"
          name="telefono"
          class="input py-2 px-7"
          disabled="{disabled}"
          value="{cde?.telefono ?? ''}"
          required
        />
      </div>
      <div class="flex flex-wrap gap-3">
        <button
          type="reset"
          on:click="{() => (disabled = true)}"
          class="bg-pink-600 rounded-2xl mr-2 text-white px-4 py-2"
          >Resetear campos</button
        >
        <button
          type="submit"
          class="bg-blue-600 rounded-2xl text-white px-4 py-2"
          >Editar personal</button
        >
      </div>
    </form>
  </div>

  <div class="p-8 rounded-xl shadow w-full">
    <h2 class="text-2xl font-semibold mb-4 text-center">Personal registrado</h2>
    <Table
      source="{tableSource}"
      interactive="{true}"
      on:selected="{handleClick}"
    />
    <Paginator
      bind:settings="{paginationSettings}"
      showFirstLastButtons="{true}"
      amountText="registros"
      class="mt-3 mb-3"
      separatorText="de"
    />
  </div>
</div>
<style>
  .full{
    height: calc(100vh - 80px);
  }
</style>