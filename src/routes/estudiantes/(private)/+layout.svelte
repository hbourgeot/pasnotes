<script lang="ts">
  import { page } from "$app/stores";
  import Logo from "$lib/images/logo.jpg";
  import { Toast } from "@skeletonlabs/skeleton";
  let btnInvisible: boolean = false;
  $: btnInvisible = $page.url.pathname === "/estudiantes";
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
    on:click={() => (window.location.pathname = "/estudiantes")}
    >Volver atrás</button
  >
  <a href="/" class="h-full flex flex-center">
    <img src={Logo} alt="" class="logo" />
  </a>
  <form method="post" action={`/estudiantes/logout?red=estudiantes`}>
    <button
      type="submit"
      class="bg-pink-600 px-3 py-1 rounded-3xl mr-4 h-[50px] text-white"
      >Cerrar sesión</button
    >
  </form>
</nav>
<slot />
