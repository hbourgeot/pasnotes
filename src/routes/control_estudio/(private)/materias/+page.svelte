<script lang="ts">
  import type { PageData } from "./$types";
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import type { TableSource } from "@skeletonlabs/skeleton";
  import { ExpandLess, ExpandMore } from "@steeze-ui/material-design-icons";
  import { Icon } from "@steeze-ui/svelte-icon";

  export let data: PageData;

  const headTable = ["Código", "Nombre", "Docente"];

  // Informatica table
  const informatica = data.materias.informatica.map((materia) => ({
    codigo: materia.id,
    nombre: materia.nombre,
    docente: data.docentes.find(
      (docente) => materia.id_docente === docente.cedula
    )?.nombre,
  }));

  const informaticaTable: TableSource = {
    head: headTable,
    body: tableMapperValues(informatica, ["codigo", "nombre", "docente"]),
    foot: [
      "Total de materias:",
      "",
      `<code class='code'>${informatica.length}</code>`,
    ],
  };

  // Tecnología de alimentos table
  const tecnologiaAlimentos = data.materias.tecnologiaAlimentos.map(
    (materia) => ({
      codigo: materia.id,
      nombre: materia.nombre,
      docente: data.docentes.find(
        (docente) => materia.id_docente === docente.cedula
      )?.nombre,
    })
  );

  const tecnologiaAlimentosTable: TableSource = {
    head: headTable,
    body: tableMapperValues(tecnologiaAlimentos, [
      "codigo",
      "nombre",
      "docente",
    ]),
    foot: [
      "Total de materias:",
      "",
      `<code class='code'>${tecnologiaAlimentos.length}</code>`,
    ],
  };

  // Comunicación y Electrónica table
  const comunicacionElectronica = data.materias.comunicacionElectronica.map(
    (materia) => ({
      codigo: materia.id,
      nombre: materia.nombre,
      docente: data.docentes.find(
        (docente) => materia.id_docente === docente.cedula
      )?.nombre,
    })
  );

  const comunicacionElectronicaTable: TableSource = {
    head: headTable,
    body: tableMapperValues(comunicacionElectronica, [
      "codigo",
      "nombre",
      "docente",
    ]),
    foot: [
      "Total de materias:",
      "",
      `<code class='code'>${comunicacionElectronica.length}</code>`,
    ],
  };

  // Diseño gráfico table
  const disenoGrafico = data.materias.disenoGrafico.map((materia) => ({
    codigo: materia.id,
    nombre: materia.nombre,
    docente: data.docentes.find(
      (docente) => materia.id_docente === docente.cedula
    )?.nombre,
  }));

  const disenoGraficoTable: TableSource = {
    head: headTable,
    body: tableMapperValues(disenoGrafico, ["codigo", "nombre", "docente"]),
    foot: [
      "Total de materias:",
      "",
      `<code class='code'>${disenoGrafico.length}</code>`,
    ],
  };

  // Contabilidad y Costos table
  const contabilidadCostos = data.materias.contabilidadCostos.map(
    (materia) => ({
      codigo: materia.id,
      nombre: materia.nombre,
      docente: data.docentes.find(
        (docente) => materia.id_docente === docente.cedula
      )?.nombre,
    })
  );

  const contabilidadCostosTable: TableSource = {
    head: headTable,
    body: tableMapperValues(contabilidadCostos, [
      "codigo",
      "nombre",
      "docente",
    ]),
    foot: [
      "Total de materias:",
      "",
      `<code class='code'>${contabilidadCostos.length}</code>`,
    ],
  };

  // Administración bancaria y financiera table
  const administracionBancariaFinanciera =
    data.materias.administracionBancariaFinanciera.map((materia) => ({
      codigo: materia.id,
      nombre: materia.nombre,
      docente: data.docentes.find(
        (docente) => materia.id_docente === docente.cedula
      )?.nombre,
    }));

  const administracionBancariaFinancieraTable: TableSource = {
    head: headTable,
    body: tableMapperValues(administracionBancariaFinanciera, [
      "codigo",
      "nombre",
      "docente",
    ]),
    foot: [
      "Total de materias:",
      "",
      `<code class='code'>${administracionBancariaFinanciera.length}</code>`,
    ],
  };

  // Administración empresarial table
  const administracionEmpresarial = data.materias.administracionEmpresarial.map(
    (materia) => ({
      codigo: materia.id,
      nombre: materia.nombre,
      docente: data.docentes.find(
        (docente) => materia.id_docente === docente.cedula
      )?.nombre,
    })
  );

  const administracionEmpresarialTable: TableSource = {
    head: headTable,
    body: tableMapperValues(administracionEmpresarial, [
      "codigo",
      "nombre",
      "docente",
    ]),
    foot: [
      "Total de materias:",
      "",
      `<code class='code'>${administracionEmpresarial.length}</code>`,
    ],
  };

  const redirectTable = (e: CustomEvent) => window.location.pathname = "/control_estudio/materias/"+e.detail[0];
</script>

<div
  class="flex items-center p-10 flex-col w-full max-h-auto gap-6 bg-gray-100"
  style="min-height: calc(100vh + 10rem);"
>
  <h1 class="w-[90%] text-2xl font-bold text-center capitalize">Materias</h1>

  <div class="w-11/12 lg:w-10/12">
    <details
      class="flex lg:w-2/5 w-3/4 mx-auto flex-col items-center justify-center my-4"
    >
      <summary
        class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded border border-gray-200"
      >
        <span class="expand">
          <Icon src="{ExpandMore}" class="icon " />
        </span>
        <span class="expanded">
          <Icon src="{ExpandLess}" class="icon " />
        </span>

        Informática
      </summary>
      <div
        class="w-full mt-6 h-auto flex flex-wrap flex-col gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
      >
        <Table on:selected={redirectTable} interactive={true} source="{informaticaTable}" class="w-full mb-5 lg:mx-auto" />
      </div>
    </details>
    <details
      class="flex lg:w-2/5 w-3/4 mx-auto flex-col items-center justify-center my-4"
    >
      <summary
        class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded border border-gray-200"
      >
        <span class="expand">
          <Icon src="{ExpandMore}" class="icon " />
        </span>
        <span class="expanded">
          <Icon src="{ExpandLess}" class="icon " />
        </span>

        Tecnología de Alimentos
      </summary>
      <div
        class="w-full mt-6 h-auto flex flex-wrap flex-col gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
      >
        <Table on:selected={redirectTable} interactive={true} source="{tecnologiaAlimentosTable}" class="w-full mb-5 lg:mx-auto" />
      </div>
    </details>
    <details
      class="flex lg:w-2/5 w-3/4 mx-auto flex-col items-center justify-center my-4"
    >
      <summary
        class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded border border-gray-200"
      >
        <span class="expand">
          <Icon src="{ExpandMore}" class="icon " />
        </span>
        <span class="expanded">
          <Icon src="{ExpandLess}" class="icon " />
        </span>

        Comunicación y Electrónica
      </summary>
      <div
        class="w-full mt-6 h-auto flex flex-wrap flex-col gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
      >
        <Table on:selected={redirectTable} interactive={true} source="{comunicacionElectronicaTable}" class="w-full mb-5 lg:mx-auto" />
      </div>
    </details>
    <details
      class="flex lg:w-2/5 w-3/4 mx-auto flex-col items-center justify-center my-4"
    >
      <summary
        class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded border border-gray-200"
      >
        <span class="expand">
          <Icon src="{ExpandMore}" class="icon " />
        </span>
        <span class="expanded">
          <Icon src="{ExpandLess}" class="icon " />
        </span>

        Diseño Gráfico
      </summary>
      <div
        class="w-full mt-6 h-auto flex flex-wrap flex-col gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
      >
        <Table on:selected={redirectTable} interactive={true} source="{disenoGraficoTable}" class="w-full mb-5 lg:mx-auto" />
      </div>
    </details>
    <details
      class="flex lg:w-2/5 w-3/4 mx-auto flex-col items-center justify-center my-4"
    >
      <summary
        class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded border border-gray-200"
      >
        <span class="expand">
          <Icon src="{ExpandMore}" class="icon " />
        </span>
        <span class="expanded">
          <Icon src="{ExpandLess}" class="icon " />
        </span>

        Contabilidad y Costos
      </summary>
      <div
        class="w-full mt-6 h-auto flex flex-wrap flex-col gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
      >
        <Table on:selected={redirectTable} interactive={true} source="{contabilidadCostosTable}" class="w-full mb-5 lg:mx-auto" />
      </div>
    </details>
    <details
      class="flex lg:w-2/5 w-3/4 mx-auto flex-col items-center justify-center my-4"
    >
      <summary
        class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded border border-gray-200"
      >
        <span class="expand">
          <Icon src="{ExpandMore}" class="icon " />
        </span>
        <span class="expanded">
          <Icon src="{ExpandLess}" class="icon " />
        </span>

        Administración Bancaria y Financiera
      </summary>
      <div
        class="w-full mt-6 h-auto flex flex-wrap flex-col gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
      >
        <Table on:selected={redirectTable} interactive={true} source="{administracionBancariaFinancieraTable}" class="w-full mb-5 lg:mx-auto" />
      </div>
    </details>
    <details
      class="flex lg:w-2/5 w-3/4 mx-auto flex-col items-center justify-center my-4"
    >
      <summary
        class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded border border-gray-200"
      >
        <span class="expand">
          <Icon src="{ExpandMore}" class="icon " />
        </span>
        <span class="expanded">
          <Icon src="{ExpandLess}" class="icon " />
        </span>

        Administración Empresarial
      </summary>
      <div
        class="w-full mt-6 h-auto flex flex-wrap flex-col gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
      >
        <Table on:selected={redirectTable} interactive={true} source="{administracionEmpresarialTable}" class="w-full mb-5 lg:mx-auto" />
      </div>
    </details>
  </div>
</div>

<style class="scss" scoped>

  details .expanded {
    display: none;
  }

  details[open] .expanded {
    display: flex;
  }

  details[open] .expand {
    display: none;
  }

  details summary::-webkit-details-marker {
    display: none;
    width: 0;
  }
</style>
