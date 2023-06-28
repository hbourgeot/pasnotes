<script lang="ts">
  import type { PageData } from "./$types";
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import type { TableSource } from "@skeletonlabs/skeleton";

  export let data: PageData;

  const sourceData = data.materias.map((materia) => ({
    codigo: materia.id,
    nombre: materia.nombre,
    carrera: data.carreras.find((carrera) => materia.id_carrera === carrera.id)
      ?.nombre,
    docente: data.docentes.find(
      (docente) => materia.id_docente === docente.cedula
    )?.nombre
  }));

  const tableSimple: TableSource = {
    // A list of heading labels.
    head: ["Código", "Nombre", "Carrera", "Docente"],
    // The data visibly shown in your table body UI.
    body: tableMapperValues(sourceData, [
      "codigo",
      "nombre",
      "carrera",
      "docente",
    ]),
  };
</script>

<h2 class="text-3xl py-10 text-center">Materias</h2>

<Table source="{tableSimple}" class="lg:w-9/12 lg:mx-auto" />
