<script lang="ts">
  import type {PageData} from "./$types";
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import type { TableSource } from "@skeletonlabs/skeleton";

  export let data: PageData;

  const sourceData = [
    { materia: "Introducción a la administración", corte1: 6, corte2: 5, corte3: 7, total: 18 },
  ];

  const tableSimple: TableSource = {
    // A list of heading labels.
    head: ["Materia", "1er corte", "2do corte", "3er corte", "Total"],
    // The data visibly shown in your table body UI.
    body: tableMapperValues(sourceData, ["materia", "corte1", "corte2", "corte3", "total"]),
  };
</script>

<h2 class="text-3xl py-10 text-center ">Notas de <span class="text-sky-600 capitalize">{data.estudiante.nombre}</span></h2>

<Table source="{tableSimple}" />
