<script lang="ts">
  import { ExpandLess, ExpandMore } from "@steeze-ui/material-design-icons";
  import { Icon } from "@steeze-ui/svelte-icon";
</script>

<div
  class="flex items-center p-10 flex-col w-full max-h-auto gap-6"
  style="min-height: calc(100vh + 10rem);"
>
  <h1 class="w-[90%] text-2xl font-bold text-center capitalize">Materias</h1>

  <div class="w-11/12 lg:w-10/12">
    <details open
      class="bg-white rounded-2xl p-4 flex lg:w-2/5 w-3/4 mx-auto flex-col items-center justify-center my-4"
    >
      <summary
        class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded-2xl bg-white"
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
        class="w-full mt-6 h-auto flex flex-wrap gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
      >
        <p class="text-lg w-full text-center">Ver materias de:</p>
        <a href="/control_estudio/materias/1/1" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">1er semestre</a>
        <a href="/control_estudio/materias/1/2" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">2do semestre</a>
        <a href="/control_estudio/materias/1/3" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">3er semestre</a>
        <a href="/control_estudio/materias/1/4" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">4to semestre</a>
        <a href="/control_estudio/materias/1/5" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">5to semestre</a>
        <a href="/control_estudio/materias/1/6" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">6to semestre</a>
      </div>
    </details>
    <details
      class="bg-white rounded-2xl p-4 flex lg:w-2/5 w-3/4 mx-auto flex-col items-center justify-center my-4"
    >
      <summary
        class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded-2xl bg-white"
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
              class="w-full mt-6 h-auto flex flex-wrap gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
      >
        <p class="text-lg w-full text-center">Ver materias de:</p>
        <a href="/control_estudio/materias/2/1" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">1er semestre</a>
        <a href="/control_estudio/materias/2/2" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">2do semestre</a>
        <a href="/control_estudio/materias/2/3" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">3er semestre</a>
        <a href="/control_estudio/materias/2/4" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">4to semestre</a>
        <a href="/control_estudio/materias/2/5" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">5to semestre</a>
        <a href="/control_estudio/materias/2/6" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">6to semestre</a>
        <!--<Table on:selected={redirectTable} interactive={true} source="{tecnologiaAlimentosTable}" class="w-full mb-5 lg:mx-auto" />-->
      </div>
    </details>
    <details
      class="bg-white rounded-2xl p-4 flex lg:w-2/5 w-3/4 mx-auto flex-col items-center justify-center my-4"
    >
      <summary
        class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded-2xl bg-white"
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
              class="w-full mt-6 h-auto flex flex-wrap gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
      >
        <p class="text-lg w-full text-center">Ver materias de:</p>
        <a href="/control_estudio/materias/3/1" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">1er semestre</a>
        <a href="/control_estudio/materias/3/2" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">2do semestre</a>
        <a href="/control_estudio/materias/3/3" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">3er semestre</a>
        <a href="/control_estudio/materias/3/4" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">4to semestre</a>
        <a href="/control_estudio/materias/3/5" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">5to semestre</a>
        <a href="/control_estudio/materias/3/6" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">6to semestre</a>
        <!--<Table on:selected={redirectTable} interactive={true} source="{comunicacionElectronicaTable}" class="w-full mb-5 lg:mx-auto" />-->
      </div>
    </details>
    <details
      class="bg-white rounded-2xl p-4 flex lg:w-2/5 w-3/4 mx-auto flex-col items-center justify-center my-4"
    >
      <summary
        class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded-2xl bg-white"
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
        class="w-full mt-6 h-auto flex flex-wrap gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
      >
        <p class="text-lg w-full text-center">Ver materias de:</p>
        <a href="/control_estudio/materias/4/1" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">1er semestre</a>
        <a href="/control_estudio/materias/4/2" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">2do semestre</a>
        <a href="/control_estudio/materias/4/3" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">3er semestre</a>
        <a href="/control_estudio/materias/4/4" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">4to semestre</a>
        <a href="/control_estudio/materias/4/5" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">5to semestre</a>
        <a href="/control_estudio/materias/4/6" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">6to semestre</a>
        <!--<Table on:selected={redirectTable} interactive={true} source="{disenoGraficoTable}" class="w-full mb-5 lg:mx-auto" />-->
      </div>
    </details>
    <details
      class="bg-white rounded-2xl p-4 flex lg:w-2/5 w-3/4 mx-auto flex-col items-center justify-center my-4"
    >
      <summary
        class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded-2xl bg-white"
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
        class="w-full mt-6 h-auto flex flex-wrap gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
      >
        <p class="text-lg w-full text-center">Ver materias de:</p>
        <a href="/control_estudio/materias/5/1" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">1er semestre</a>
        <a href="/control_estudio/materias/5/2" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">2do semestre</a>
        <a href="/control_estudio/materias/5/3" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">3er semestre</a>
        <a href="/control_estudio/materias/5/4" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">4to semestre</a>
        <a href="/control_estudio/materias/5/5" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">5to semestre</a>
        <a href="/control_estudio/materias/5/6" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">6to semestre</a>
        <!--<Table on:selected={redirectTable} interactive={true} source="{contabilidadCostosTable}" class="w-full mb-5 lg:mx-auto" />-->
      </div>
    </details>
    <details
      class="bg-white rounded-2xl p-4 flex lg:w-2/5 w-3/4 mx-auto flex-col items-center justify-center my-4"
    >
      <summary
        class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded-2xl bg-white"
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
        class="w-full mt-6 h-auto flex flex-wrap gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
      >
        <p class="text-lg w-full text-center">Ver materias de:</p>
        <a href="/control_estudio/materias/6/1" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">1er semestre</a>
        <a href="/control_estudio/materias/6/2" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">2do semestre</a>
        <a href="/control_estudio/materias/6/3" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">3er semestre</a>
        <a href="/control_estudio/materias/6/4" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">4to semestre</a>
        <a href="/control_estudio/materias/6/5" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">5to semestre</a>
        <a href="/control_estudio/materias/6/6" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">6to semestre</a>
        <!--<Table on:selected={redirectTable} interactive={true} source="{administracionBancariaFinancieraTable}" class="w-full mb-5 lg:mx-auto" />-->
      </div>
    </details>
    <details
      class="bg-white rounded-2xl p-4 flex lg:w-2/5 w-3/4 mx-auto flex-col items-center justify-center my-4"
    >
      <summary
        class=" flex w-full h-[40px] items-center gap-4 pl-4 rounded-2xl bg-white"
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
        class="w-full mt-6 h-auto flex flex-wrap gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
      >
        <p class="text-lg w-full text-center">Ver materias de:</p>
        <a href="/control_estudio/materias/7/1" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">1er semestre</a>
        <a href="/control_estudio/materias/7/2" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">2do semestre</a>
        <a href="/control_estudio/materias/7/3" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">3er semestre</a>
        <a href="/control_estudio/materias/7/4" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">4to semestre</a>
        <a href="/control_estudio/materias/7/5" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">5to semestre</a>
        <a href="/control_estudio/materias/7/6" class="btn variant-filled bg-sky-700 m-auto" data-sveltekit-preload-data="hover">6to semestre</a>
        <!--<Table on:selected={redirectTable} interactive={true} source="{administracionEmpresarialTable}" class="w-full mb-5 lg:mx-auto" />-->
      </div>
    </details>
  </div>
</div>

<style class="scss">


  details .expanded {
    display: none;
  }

  details[open] .expanded {
    display: flex;
  }

  details[open] .expand{
    display: none;
  }

  details summary::-webkit-details-marker {
    display: none;
    width: 0;
  }

  details summary ~ * {
    animation: sweep .5s ease-in-out;
  }
</style>
