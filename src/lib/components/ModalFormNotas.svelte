<script lang="ts">
  // Props
  /** Exposes parent props to this component. */
  export let parent: any;

  // Stores
  import { modalStore } from "@skeletonlabs/skeleton";

  export let materia: string = "materia";
  export let cedulaEstudiante: string = "";
  export let nombreEstudiante: string = "";

  export let notaActual: string | number = "0";

  export let nombreCampo: string = "";

  // Form Data
  const formData = {
    cedula_estudiante: cedulaEstudiante,
    nombre_campo: nombreCampo,
    valor: 0,
  };

  // We've created a custom submit function to pass the response and close the modal.
  function onFormSubmit(): void {
    if ($modalStore[0].response) $modalStore[0].response(formData);
    modalStore.close();
  }

  // Base Classes
  const cBase = "card p-4 w-modal shadow-xl space-y-4";
  const cHeader = "text-2xl font-bold";
  const cForm = "p-4 space-y-4 rounded-container-token";
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
  <div class="modal-example-form {cBase}">
    <header class={cHeader}>{$modalStore[0].title ?? "(title missing)"}</header>
    <article>{$modalStore[0].body ?? "(body missing)"}</article>
    <!-- Enable for debugging: -->
    <form class="modal-form {cForm}">
      <label class="label">
        <span>Cedula Estudiante</span>
        <input
          class="input"
          type="text"
          readonly
          bind:value={formData.cedula_estudiante}
        />
      </label>
      <label class="label">
        <span>Nombre campo</span>
        <input
          class="input"
          type="text"
          bind:value={formData.nombre_campo}
          readonly
        />
      </label>
      <label class="label">
        <span>Valor</span>
        <input
          class="input"
          type="number"
          bind:value={formData.valor}
          min="0"
          max="20"
          placeholder="20"
        />
      </label>
    </form>
    <!-- prettier-ignore -->
    <footer class="modal-footer {parent.regionFooter}">
            <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
            <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
        </footer>
  </div>
{/if}
