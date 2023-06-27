<script lang="ts">
  import { Icon } from "@steeze-ui/svelte-icon";
  import { ExpandMore, ExpandLess } from "@steeze-ui/material-design-icons";
  import type { PageData } from "./$types";

  import type { Coordinacion } from "../../../app";

  export let data: PageData;


  let coordinador: Coordinacion = data.coordinador;
  
  let panel = false;
  let clicked = 0;
</script>

<!-- <nav
    class="w-full h-[60px]"
    style="border-bottom: 1px solid rgb(229 231 235);
"
>
    <a href="/" class="h-full flex flex-center">
        <img src={Logo} alt="" class="logo" />
    </a>
</nav> -->
<div
  class="flex flex-center flex-col w-full max-h-auto gap-6 bg-gray-100"
  style="min-height: calc(100vh + 10rem);"
>
  <h1 class="w-[90%] text-2xl font-bold text-center capitalize">
    ¡Bienvenid@, {coordinador.nombre}!
  </h1>
  <div
    class="w-[98%] flex flex-col items-center gap-10 bg-white rounded-lg"
    style="min-height: calc(100vh); max-height: auto; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"
  >
    <div
      class="w-full h-auto mt-5 flex flex-wrap gap-5 flex-center [&>button]:w-30 [&>button]:p-4 [&>button]:rounded-xl [&>button]:text-white
            md:[&>button]:w-[200px]"
    >
      <button class=" bg-[#5C8984]"
        ><a href="/estudiantes/notas" class="w-full h-full block">Notas de Estudiantes</a></button
      >
      <button>Registrar materias</button>
      <button class=" bg-[#9DB2BF]"><a href="/coordinadores/agregar-docente" class="w-full h-full block">Registrar docentes</a></button>
    </div>

    <div class="w-11/12 lg:w-10/12">
      <h2 class="text-center text-[18px] font-bold mb-4">
        Informacion general
      </h2>

      <details open class="flex w-2/5 mx-auto flex-col items-center justify-center">
        <summary
          class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded border border-gray-200"
        >
          <span class="expand">
            <Icon src="{ExpandMore}" class="icon " />
          </span>
          <span class="expanded">
            <Icon src="{ExpandLess}" class="icon " />
          </span>

          Informacion del coordinador
        </summary>
        <div
          class="w-full mt-6 h-auto flex flex-wrap flex-col gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
        >
          <span>
            <h2>Cedula:</h2>
            <p>{coordinador.cedula}</p>
          </span>
          <span>
            <h2>Nombre completo:</h2>
            <p class="capitalize">{coordinador.nombre}</p>
          </span>
          <!-- <span>
            <h2>Lapso Ingreso:</h2>
            <p>202101</p>
          </span>
          <span>
            <h2>Lapso en Curso:</h2>
            <p>2022/2023</p>
          </span>
          <span>
            <h2>Ult. Lapso Cursado:</h2>
            <p>2021/2023</p>
          </span> -->
          <span>
            <h2>Teléfono:</h2>
            <p>{coordinador.telefono}</p>
          </span>
        </div>
      </details>
    </div>
  </div>
</div>

<style class="scss" scoped>
  span h2 {
    font-weight: 600;
    padding-left: 16px;
  }

  button {
    background-color: rgba(88, 119, 221, 0.7);
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
