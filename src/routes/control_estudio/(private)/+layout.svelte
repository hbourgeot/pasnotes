<script lang="ts">
  import { page } from "$app/stores";
  import Logo from "$lib/images/logo.jpg";

  let btnInvisible: boolean = false;
  $: btnInvisible = $page.route.id === "/control_estudio";
</script>

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
    on:click={() => (window.location.pathname = "/control_estudio")}
    >Volver atrás</button
  >
  <a href="/" class="h-full flex flex-center">
    <img src={Logo} alt="" class="logo" />
  </a>
  <form method="post" action={`/control_estudio/logout?red=control_estudio`}>
    <button
      type="submit"
      class="bg-pink-600 px-3 py-1 rounded-3xl ml-4 h-[50px] text-light-50"
      >Cerrar sesión</button
    >
  </form>
</nav>
<slot />
