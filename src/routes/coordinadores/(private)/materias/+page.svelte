<script lang="ts">
  import { TreeView, TreeViewItem } from "@skeletonlabs/skeleton";
</script>

<div
  class="flex items-center p-10 flex-col w-full max-h-auto gap-6"
>
  <h1 class="w-[90%] text-2xl font-bold text-center capitalize">
    Ver Materias
  </h1>

  <div class="bg-[#56befb]  rounded-2xl p-4 lg:w-2/5 w-3/4 mx-auto">
    <TreeView regionChildren="w-full">
      <TreeViewItem>
        Informática
        <svelte:fragment slot="children">
          <TreeViewItem
            on:click="{() =>
              (window.location.href = '/coordinadores/materias/1/1')}"
            >1er semestre</TreeViewItem
          >
          <TreeViewItem
            on:click="{() =>
              (window.location.href = '/coordinadores/materias/1/2')}"
            >2do semestre</TreeViewItem
          >
          <TreeViewItem
            on:click="{() =>
              (window.location.href = '/coordinadores/materias/1/3')}"
            >3er semestre</TreeViewItem
          >
          <TreeViewItem
            on:click="{() =>
              (window.location.href = '/coordinadores/materias/1/4')}"
            >4to semestre</TreeViewItem
          >
          <TreeViewItem
            on:click="{() =>
              (window.location.href = '/coordinadores/materias/1/5')}"
            >5to semestre</TreeViewItem
          >
          <TreeViewItem
            on:click="{() =>
              (window.location.href = '/coordinadores/materias/1/6')}"
            >6to semestre</TreeViewItem
          >
        </svelte:fragment>
      </TreeViewItem>
      <TreeViewItem
        >Tecnología de Alimentos
        <svelte:fragment slot="children">
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/2/1")}>
            1er semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/2/2")}>
            2do semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/2/3")}>
            3er semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/2/4")}>
            4to semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/2/5")}>
            5to semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/2/6")}>
            6to semestre
          </TreeViewItem>
        </svelte:fragment>
      </TreeViewItem>
      <TreeViewItem
        >Comunicación y Electrónica
        <svelte:fragment slot="children">
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/3/1")}>
            1er semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/3/2")}>
            2do semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/3/3")}>
            3er semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/3/4")}>
            4to semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/3/5")}>
            5to semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/3/6")}>
            6to semestre
          </TreeViewItem>
        </svelte:fragment>
      </TreeViewItem>
      <TreeViewItem>
        Diseño Gráfico
        <svelte:fragment slot="children">
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/4/1")}>
            1er semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/4/2")}>
            2do semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/4/3")}>
            3er semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/4/4")}>
            4to semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/4/5")}>
            5to semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/4/6")}>
            6to semestre
          </TreeViewItem>
        </svelte:fragment>
      </TreeViewItem>
      <TreeViewItem>
        Contabilidad y Costos
        <svelte:fragment slot="children">
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/5/1")}>
            1er semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/5/2")}>
            2do semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/5/3")}>
            3er semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/5/4")}>
            4to semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/5/5")}>
            5to semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/5/6")}>
            6to semestre
          </TreeViewItem>
        </svelte:fragment>
      </TreeViewItem>
      <TreeViewItem>
        Administración Bancaria y Financiera
        <svelte:fragment slot="children">
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/6/1")}>
            1er semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/6/2")}>
            2do semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/6/3")}>
            3er semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/6/4")}>
            4to semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/6/5")}>
            5to semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/6/6")}>
            6to semestre
          </TreeViewItem>
        </svelte:fragment>
      </TreeViewItem>
      <TreeViewItem>
        Administración Empresarial
        <svelte:fragment slot="children">
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/7/1")}>
            1er semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/7/2")}>
            2do semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/7/3")}>
            3er semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/7/4")}>
            4to semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/7/5")}>
            5to semestre
          </TreeViewItem>
          <TreeViewItem on:click={() =>
              (window.location.href = "/coordinadores/materias/7/6")}>
            6to semestre
          </TreeViewItem>
        </svelte:fragment>
      </TreeViewItem>
    </TreeView>
  </div>
</div>
