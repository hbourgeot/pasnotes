<script>
  import Logo from "$lib/images/logo.jpg";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { Menu, ArrowDropDown } from "@steeze-ui/material-design-icons";

  import { AppBar } from '@skeletonlabs/skeleton';
  import { TreeView, TreeViewItem } from "@skeletonlabs/skeleton";
</script>

<!--<nav
  class="w-full h-[80px] bg-white relative cursor-default flex justify-center items-center"
  style="border-bottom: 1px solid rgb(229 231 235);
"
>
  <a href="/" class="h-full w-20 flex flex-center">
    <img src={Logo} class="w-12 h-12 md:w-15 md:h-15" alt="" />
  </a>

  <details class="absolute w-full z-10">
    <summary class="">
      <Icon src={Menu} class="ml-4 w-10 h-10 ease" />
    </summary>

    <div style="width: 100%" class="w-full mt-4 h-auto nav bg-gray-900 text-white">
      <ul class="w-full h-full">
        <li>
          <a href="/estudiantes/login">Estudiantes</a>
        </li>
        <li>
          <a href="/docentes/login">Docentes</a>
        </li>
        <li>
          <a href="/control_estudio/login">Control de Estudio</a>
        </li>
        <li>
          <a href="/coordinadores/login">Coordinacion</a>
        </li>
      </ul>
    </div>
  </details>
</nav>-->

<!--<div class="bg-white w-full h-[80px] relative flex justify-between items-center px-4 md:px-0" style="border-bottom: 1px solid rgb(229 231 235);">
  <div class="md:hidden w-full text-center">
    <img src={Logo} class="inline-block w-12 h-12 md:w-15 md:h-15" alt="logo" />
  </div>
  <div class="hidden md:block">
    <img src={Logo} class="w-12 h-12 md:w-15 md:h-15" alt="logo" />
  </div>
  
  <details class="md:hidden absolute w-full z-10">
    <summary>
      <Icon src={Menu} class="ml-4 w-10 h-10 ease" />
    </summary>
    <div style="width: 100%" class="w-full mt-4 h-auto nav bg-gray-900 text-white">
      <ul class="w-full h-full">
        <li>
          <a href="/estudiantes/login">Estudiantes</a>
        </li>
        <li>
          <a href="/docentes/login">Docentes</a>
        </li>
        <li>
          <a href="/control_estudio/login">Control de Estudio</a>
        </li>
        <li>
          <a href="/coordinadores/login">Coordinacion</a>
        </li>
      </ul>
    </div>
  </details>

  <nav class="hidden md:flex space-x-4">
    <a href="/estudiantes/login">Estudiantes</a>
    <a href="/docentes/login">Docentes</a>
    <a href="/control_estudio/login">Control de Estudio</a>
    <a href="/coordinadores/login">Coordinacion</a>
  </nav>
</div>-->

<AppBar gridColumns="grid-cols-2" slotDefault="place-self-start" slotTrail="place-content-end" background="bg-white" padding="py-4" style="border-bottom: 1px solid rgb(229 231 235);">
	<svelte:fragment slot="lead">
    
  </svelte:fragment>
	
  <a href="/" class="xl:hidden w-full mx-3">
    <img src={Logo} class="inline-block w-12 h-12 md:w-15 md:h-15" alt="logo" />
  </a>

	<svelte:fragment slot="trail">
    <div class="block relative mr-4">
      <TreeView>
        <TreeViewItem>
          Iniciar Sesión
  
          <svelte:fragment slot="children">
            <div class="absolute bg-white z-10 mt-4 w-full rounded-sm p-2">
              <TreeViewItem regionSymbol="hidden">
                <span class="w-full text-center">
                  <a href="/estudiantes/login">Estudiantes</a>
                </span>
              </TreeViewItem>
              <TreeViewItem regionSymbol="hidden">
                <span class="w-full text-center">
                  <a href="/docentes/login">Docentes</a>
                </span>  
              </TreeViewItem>
            </div>
          </svelte:fragment>
        </TreeViewItem>
      </TreeView>
    </div> 
  </svelte:fragment>
</AppBar>

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
    padding: 20px;
    text-align: center;
    cursor: pointer;

  }

  .nav ul li:hover {
    background-color: #0b101a;
  }
  ul li:hover {
    font-weight: bold;
  }
</style>
