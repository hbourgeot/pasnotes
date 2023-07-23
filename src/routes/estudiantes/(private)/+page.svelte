<script lang="ts">
  import { Icon } from "@steeze-ui/svelte-icon";
  import {
    ExpandMore,
    ExpandLess,
    VerticalAlignBottom,
  } from "@steeze-ui/material-design-icons";
  import type { PageData } from "./$types";
  import type { Estudiante, Materia } from "../../../app";
  import { onMount, tick } from "svelte";
  import { FileDownload } from "@steeze-ui/tabler-icons";

  export let data: PageData;

  const carreras = [
    "Informática",
    "Tecnología de Alimentos",
    "Comunicación y Electrónica",
    "Diseño Gráfico",
    "Contabilidad y Costos",
    "Administración Bancaria y Financiera",
    "Administración Empresarial",
  ];

  let estudiante: Estudiante = data.estudiante;
  let materias: {
    materia: string;
    id: string | number;
    download: string;
  }[] = data.materias;

  let planificaciones: boolean[] = [];

  const update = async () => {
    for (let i = 0; i < materias.length; i++) {
      const response = await fetch(
        `/api/archivos?ciclo=${data.ciclo}&folder=${materias[i].id}`
      );
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/pdf")) {
        const file = await response.blob();
        materias[i].download = URL.createObjectURL(file);
        planificaciones[i] = true;
        materias = materias;
      } else {
        planificaciones[i] = false;
      }
      planificaciones = planificaciones;
      console.log(planificaciones);
    }
  };

  onMount(() => update());
</script>

<div
  class="flex flex-center flex-col w-full max-h-auto gap-6 bg-gray-100"
  style="min-height: calc(100vh + 10rem);"
>
  <h1 class="w-[90%] text-2xl font-bold text-center capitalize">
    ¡Bienvenid@, {estudiante.nombre}!
  </h1>
  <div
    class="w-[98%] flex flex-col items-center gap-10 bg-white rounded-lg"
    style="min-height: calc(100vh); box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;"
  >
    <div
      class="w-full h-auto mt-5 flex flex-wrap gap-5 flex-center [&>button]:w-30 [&>button]:p-4 [&>button]:rounded-xl [&>button]:text-white
            md:[&>button]:w-[240px]"
    >
      <button class=" bg-[#5C8984]"
        ><a href="/estudiantes/notas" class="w-full h-full block">Notas</a
        ></button
      >
      <button
        ><a href="/estudiantes/inscribir-materias" class="w-full h-full block"
          >Inscribir materias</a
        ></button
      >
      <a
        href="/estudiantes/constancia"
        class="flex flex-row-reverse gap-x-2 w-30 p-4 rounded-xl text-white md:w-[240px] bg-[#e78ae2]"
        ><Icon src={VerticalAlignBottom} theme="round" size="24px" /> Constancia
        de estudio</a
      >
    </div>

    <div class="w-11/12 lg:w-10/12">
      <h2 class="text-center text-[18px] font-bold mb-4">
        Informacion general
      </h2>

      <details class="flex w-2/5 mx-auto flex-col items-center justify-center">
        <summary
          class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded border border-gray-200"
        >
          <span class="expand">
            <Icon src={ExpandMore} class="icon " />
          </span>
          <span class="expanded">
            <Icon src={ExpandLess} class="icon " />
          </span>

          Informacion del estudiante
        </summary>
        <div
          class="w-full mt-6 h-auto flex flex-wrap flex-col gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
        >
          <span>
            <h2>Cedula:</h2>
            <p>{estudiante.cedula}</p>
          </span>
          <span>
            <h2>Nombre completo:</h2>
            <p class="capitalize">{estudiante.nombre}</p>
          </span>
          <span>
            <h2>Especialidad:</h2>
            <p class="capitalize">{carreras[estudiante.carrera - 1]}</p>
          </span>
          <span>
            <h2>Semestre:</h2>
            <p>{estudiante.semestre}</p>
          </span>
          <span>
            <h2>Estado Academico:</h2>
            <p class="capitalize">{estudiante.estado}</p>
          </span>
        </div>
      </details>
      <details
        class="flex w-2/5 mx-auto flex-col my-5 items-center justify-center"
      >
        <summary
          class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded border border-gray-200"
        >
          <span class="expand">
            <Icon src={ExpandMore} class="icon " />
          </span>
          <span class="expanded">
            <Icon src={ExpandLess} class="icon " />
          </span>

          Materias inscritas
        </summary>
        <div
          class="w-full mt-6 h-auto flex flex-wrap flex-col gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
        >
          {#if !materias.length}
            <span>
              <h2>Usted no tiene materias asignadas</h2>
            </span>
          {:else}
            {#each materias as materia, n}
              <span>
                <h2>{materia.materia}</h2>
                {#if planificaciones[n]}
                  <a href={materia.download} download="planificacion.pdf"
                    >Descargar <Icon src={FileDownload} /></a
                  >
                {:else}
                  <p>No hay planificacion</p>
                {/if}
              </span>
            {/each}
          {/if}
        </div>
      </details>
    </div>
  </div>
</div>

<style class="scss">
  span h2 {
    font-weight: 600;
    padding-left: 16px;
  }

  button {
    background-color: rgba(221, 88, 214, 0.7);
  }

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
