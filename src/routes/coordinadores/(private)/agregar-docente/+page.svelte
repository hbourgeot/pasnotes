<script lang="ts">
  import { enhance } from "$app/forms";
  import {
    toastStore,
    type ToastSettings,
    Toast,
  } from "@skeletonlabs/skeleton";
  import type { ActionData } from "./$types";
  import type { SubmitFunction } from "@sveltejs/kit";

  export let form: ActionData;
  let identidad: string = "V";
  let cedula: number;
  let cedulaIdentidad = "";

  $: cedulaIdentidad = `${identidad}-${cedula}`;

  $: if (form?.message) {
    const t: ToastSettings = {
      message: form?.message,
    };

    toastStore.trigger(t);
  }

  const handleSubmit: SubmitFunction = ({ data }) => {
    data.append("cedula", cedulaIdentidad);
    return async ({ update }) => {
      await update();
    };
  };
</script>

<div class="container lg:w-1/2 md:w-2/3 mx-auto px-4 py-8">
  {#if form?.message}
    <Toast position="t" />
  {/if}
  <div class="bg-white p-8 rounded shadow">
    <h2 class="text-2xl font-semibold mb-4">Añadir Docente</h2>
    <form id="docente-form" method="post" use:enhance={handleSubmit}>
      <div class="mb-4">
        <label for="cedula" class="label">Cedula</label>
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
            class="input (text) py-2 px-7"
            required
          />
        </div>
      </div>
      <div class="mb-4">
        <label for="nombre" class="label">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          class="input (text) py-2 px-7"
          required
        />
      </div>
      <div class="mb-4">
        <label for="correo" class="label">Correo</label>
        <input
          type="email"
          id="correo"
          name="correo"
          class="input (text) py-2 px-7"
          required
        />
      </div>
      <div class="mb-4">
        <label for="telefono" class="label">Telefono</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          class="input py-2 px-7"
          required
        />
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded"
        >Registrar docente</button
      >
    </form>
  </div>
</div>
