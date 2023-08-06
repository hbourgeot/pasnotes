<script lang="ts">
  import { ListBox, ListBoxItem, modalStore } from "@skeletonlabs/skeleton";
  import type { Materia } from "../../app";

  // Props
  /** Exposes parent props to this component. */
  export let parent: any;
  export let materias: Materia[];

  let materiasSelect = materias.map((materia) => ({
    value: materia.id,
    label: `${materia.id} - ${materia.nombre}`,
  }));

  let selected: number[] = [];
  // Handle Form Submission
  function onFormSubmit(): void {
    if ($modalStore[0].response) $modalStore[0].response(selected);
    modalStore.close();
  }

  // Base Classes
  const cBase = "card p-4 w-modal shadow-xl space-y-4";
  const cHeader = "text-2xl font-bold";
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
  <div class="modal-example-form {cBase}">
    <header class="{cHeader}">
      {$modalStore[0].title ?? "(title missing)"}
    </header>
    <article>{$modalStore[0].body ?? "(body missing)"}</article>
    <ListBox
      class="border border-surface-500 p-4 rounded-container-token"
      multiple
    >
      {#each materiasSelect as materia}
        <ListBoxItem
          bind:group="{selected}"
          name="{materia.value}"
          value="{materia.value}">{materia.label}</ListBoxItem
        >
      {/each}
    </ListBox>
    <!-- prettier-ignore -->
    <footer class="modal-footer {parent.regionFooter}">
            <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancelar</button>
            <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Seleccionar materias</button>
        </footer>
  </div>
{/if}
