<script lang="ts">
  import type { PageData } from "./$types";
  import {
    Table,
    tableMapperValues,
    type TableSource,
  } from "@skeletonlabs/skeleton";

  export let data: PageData;

  const headTable = ["Código", "Nombre", "Docente"];

  const materiaData = data.materias.map((materia) => ({
    codigo: materia.id,
    nombre: materia.nombre,
    docente: data.docentes.find(
      (docente) => materia.id_docente === docente.cedula
    )?.nombre,
  }));

  const tableSource: TableSource = {
    head: headTable,
    body: tableMapperValues(materiaData, ["codigo", "nombre", "docente"]),
    foot: [
      "Total de materias:",
      "",
      `<code class='code'>${materiaData.length}</code>`,
    ],
  };

  const redirectTable = (e: CustomEvent) => {
    window.location.pathname = "/coordinadores/materias/" + e.detail[0];
  };
</script>

<div class="flex items-center p-10 flex-col w-full max-h-auto gap-6">
  <h2 class="text-4xl capitalize">
    Materias de la carrera {data.carreras[parseInt(data.carrera) - 1].nombre} ({data.semestre})
  </h2>
  <Table
    on:selected={redirectTable}
    interactive={true}
    source={tableSource}
    class="w-full mb-5 lg:mx-auto"
  />
</div>
