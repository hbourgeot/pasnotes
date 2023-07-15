<script lang="ts">
  import { page } from "$app/stores";
  import Logo from "$lib/images/logo.jpg";
  import {Toast} from "@skeletonlabs/skeleton";
  let btnInvisible: boolean;
  $: btnInvisible = $page.route.id === "/docentes";
</script>

<Toast position="t" />
<nav
  class="w-full flex justify-between items-center h-[70px]"
  style="border-bottom: 1px solid rgb(229 231 235);
"
>
  <button
    type="button"
    class="bg-pink-600 px-3 py-1 rounded-3xl ml-4 h-[50px] text-light-50 {btnInvisible
      ? 'invisible'
      : ''}"
    on:click="{() => (window.location.pathname = '/docentes')}"
    >Volver atrás</button
  >
  <a href="/" class="h-full flex flex-center">
    <img src="{Logo}" alt="" class="logo" />
  </a>
  <form
    method="post"
    action="{`/docentes/logout?red=docentes`}"
  >
    <button
      type="submit"
      class="bg-pink-600 px-3 py-1 rounded-3xl ml-4 h-[50px] text-light-50"
      >Cerrar sesión</button
    >
  </form>
</nav>
<slot />
