<script lang="ts">
  import Logo from "$lib/images/logo.jpg";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { Menu } from "@steeze-ui/material-design-icons";
  let x: number;
</script>
<svelte:window bind:innerWidth="{x}"/>
<nav
  class="w-full h-[80px] bg-white sticky top-0 z-[55] cursor-default flex {x > 768 ? 'justify-between px-1' : 'justify-center'} items-center"
  style="border-bottom: 1px solid rgb(229 231 235);
"
>
  <a href="/" class="h-full w-20 flex flex-center">
    <img src="{Logo}" class="w-12 h-12 md:w-15 md:h-15" alt="" />
  </a>

  <ul class="h-full {x > 768 ? 'flex justify-between w-3/4 items-center' : 'hidden'}">
    <li>
      <a
        href="/estudiantes/login"
        class="w-full h-20 flex justify-center items-center transition-colors hover:bg-pink-500 hover:text-white"
        >Estudiantes</a
      >
    </li>
    <li>
      <a
        href="/docentes/login"
        class="w-full h-20 flex justify-center items-center transition-colors hover:bg-pink-500 hover:text-white"
        >Docentes</a
      >
    </li>
    <li>
      <a
        href="/control_estudio/login"
        class="w-full h-20 flex justify-center items-center transition-colors hover:bg-pink-500 hover:text-white"
        >Control de Estudio</a
      >
    </li>
    <li>
      <a
        href="/coordinadores/login"
        class="w-full h-20 flex justify-center items-center transition-colors hover:bg-pink-500 hover:text-white"
        >Coordinacion</a
      >
    </li>
  </ul>

  <details class="absolute w-full z-10 {x > 768 ? 'hidden' : ''}">
    <summary class="">
      <Icon src="{Menu}" class="ml-4 w-10 h-10 ease" />
    </summary>

    <div class="w-full mt-4 h-auto nav bg-pink-700 text-white">
      <ul class="w-full h-full">
        <li>
          <a
            href="/estudiantes/login"
            class="w-full h-20 flex justify-center items-center transition-colors hover:bg-pink-500"
            >Estudiantes</a
          >
        </li>
        <li>
          <a
            href="/docentes/login"
            class="w-full h-20 flex justify-center items-center transition-colors hover:bg-pink-500"
            >Docentes</a
          >
        </li>
        <li>
          <a
            href="/control_estudio/login"
            class="w-full h-20 flex justify-center items-center transition-colors hover:bg-pink-500"
            >Control de Estudio</a
          >
        </li>
        <li>
          <a
            href="/coordinadores/login"
            class="w-full h-20 flex justify-center items-center transition-colors hover:bg-pink-500"
            >Coordinacion</a
          >
        </li>
      </ul>
    </div>
  </details>
</nav>

<style>
  summary::marker {
    display: none;
    font-size: 0px;
  }

  details {
    top: -10px;
  }

  ul li {
    width: 100%;
    text-align: center;
    cursor: pointer;
  }

  ul li:hover {
    font-weight: bold;
  }
</style>
