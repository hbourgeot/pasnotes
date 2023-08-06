<script lang="ts">
  import type { PageData } from "./$types";
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import type { TableSource } from "@skeletonlabs/skeleton";

  export let data: PageData;

  console.log(data.materias);
  const sourceData = data.materias.map((notas: any) => ({
    materia: notas.materia,
    codigo: notas.id,
    nota1: notas.nota1.toString(),
    nota2: notas.nota2.toString(),
    nota3: notas.nota3.toString(),
    promedio: notas.promedio.toString(),
    semestre: notas.semestre.toString(),
    ciclo: notas.ciclo ?? "no registrado"
  }));

  const tableSimple: TableSource = {
    // A list of heading labels.
    head: ["Materia", "Código", "1er corte", "2do corte", "3er corte", "Total", "Semestre", "Ciclo"],
    // The data visibly shown in your table body UI.
    body: tableMapperValues(sourceData, [
      "materia",
      "codigo",
      "nota1",
      "nota2",
      "nota3",
      "promedio",
      "semestre",
      "ciclo"
    ]),
  };
</script>

<main class="h-[calc(100vh-80px)]">
  <h2 class="text-3xl py-10 text-center">
    Histórico de notas <span class="text-sky-600 capitalize">{data.estudiante?.nombre}</span
    >
  </h2>
  
  <Table source={tableSimple} class="lg:w-9/12 lg:mx-auto text-lg" regionCell="!text-lg" />
</main>
