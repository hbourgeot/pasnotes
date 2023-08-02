<script lang="ts">
  import { page } from "$app/stores";
  import Logo from "$lib/images/logo.jpg";
  import { Toast } from "@skeletonlabs/skeleton";
  let btnInvisible: boolean = false;
  $: btnInvisible = $page.url.pathname === "/estudiantes";

  const back = () => {
    const currentURL = window.location.pathname;
  
    // Eliminamos la última parte de la URL (último segmento)
    const segments = currentURL.split('/');
    console.log(currentURL);
    segments.pop();
    
    // Reunimos los segmentos restantes para formar la URL de la página superior
    const parentURL = segments.join('/');
    
    window.location.href = parentURL;
  }
</script>

<Toast position="t" />
<nav
  class="w-full flex justify-between items-center h-[70px] sticky top-0"
>
  <button
    type="button"
    class="bg-pink-600 px-3 py-1 rounded-3xl ml-4 h-[50px] text-light-50 {btnInvisible
      ? 'invisible'
      : ''}"
    on:click={back}
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

<style>
  nav{
    border-bottom: 1px solid rgb(229 231 235);
    background-color: rgb(255,255,255);
  }
</style>