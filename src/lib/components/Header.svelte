<script>
  import Logo from "$lib/images/logo.jpg";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { Menu } from "@steeze-ui/material-design-icons";
</script>

<nav
  class="w-full h-[80px] bg-white relative cursor-default flex justify-center items-center"
  style="border-bottom: 1px solid rgb(229 231 235);
"
>
  <a href="/" class="h-full w-20 flex flex-center">
    <img src={Logo} class="w-12 h-12 md:w-15 md:h-15" alt="" />
  </a>

  <details class="absolute w-full">
    <summary class="">
      <Icon src={Menu} class="ml-4 w-10 h-10 ease" />
    </summary>

    <div style="width: 100%" class="w-full mt-4 h-auto bg-gray-300 border">
      <ul class="w-full h-full">
        <li>
          <a href="/estudiantes">Estudiantes</a>
        </li>
        <li>
          <a href="/docentes">Docentes</a>
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
    padding: 20px;
    text-align: center;
    cursor: pointer;
    border-bottom: 1px solid rgb(182, 182, 182);
  }

  ul li:hover {
    font-weight: bold;
  }
</style>
