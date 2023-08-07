<script lang="ts">
  import { TreeView, TreeViewItem } from "@skeletonlabs/skeleton";
  import { ExpandLess, ExpandMore } from "@steeze-ui/material-design-icons";
  import { Icon } from "@steeze-ui/svelte-icon";
  import type { PageData } from "./$types";

  export let data: PageData;

  let carreras = data.carreras;
  let cantidadMaterias = data.cantidadMaterias;
</script>

<div class="flex items-center p-10 flex-col w-full max-h-auto gap-6">
  <h1 class="w-[90%] text-2xl font-bold text-center capitalize">Materias del ciclo actual</h1>

  <div class="bg-[#56befb] rounded-2xl p-4 lg:w-2/5 w-3/4 mx-auto">
    <TreeView regionChildren="w-full">
      {#each carreras as carrera}
        <TreeViewItem class="capitalize">
          {carrera.nombre}
          <svelte:fragment slot="children">
            {#if cantidadMaterias[carrera.id]?.primero > 0}
              <TreeViewItem
                on:click="{() =>
                  (window.location.href = `/coordinadores/materias/${carrera.id}/1`)}"
                >1er semestre</TreeViewItem
              >
            {/if}
            {#if cantidadMaterias[carrera.id]?.segundo > 0}
              <TreeViewItem
                on:click="{() =>
                  (window.location.href = `/coordinadores/materias/${carrera.id}/2`)}"
                >2do semestre</TreeViewItem
              >
            {/if}
            {#if cantidadMaterias[carrera.id]?.tercero > 0}
              <TreeViewItem
                on:click="{() =>
                  (window.location.href = `/coordinadores/materias/${carrera.id}/3`)}"
                >3er semestre</TreeViewItem
              >
            {/if}
            {#if cantidadMaterias[carrera.id]?.cuarto > 0}
              <TreeViewItem
                on:click="{() =>
                  (window.location.href = `/coordinadores/materias/${carrera.id}/4`)}"
                >4to semestre</TreeViewItem
              >
            {/if}
            {#if cantidadMaterias[carrera.id]?.quinto > 0}
              <TreeViewItem
                on:click="{() =>
                  (window.location.href = `/coordinadores/materias/${carrera.id}/5`)}"
                >5to semestre</TreeViewItem
              >
            {/if}
            {#if cantidadMaterias[carrera.id]?.sexto > 0}
              <TreeViewItem
                on:click="{() =>
                  (window.location.href = `/coordinadores/materias/${carrera.id}/6`)}"
                >6to semestre</TreeViewItem
              >
            {/if}
          </svelte:fragment>
        </TreeViewItem>
      {/each}
    </TreeView>
  </div>
</div>
