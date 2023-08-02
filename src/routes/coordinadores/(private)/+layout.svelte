<script lang="ts">
  import { page } from "$app/stores";
  import Logo from "$lib/images/logo.jpg";
  import { Toast } from "@skeletonlabs/skeleton";

  let btnInvisible: boolean;
  $: btnInvisible = $page.route.id === "/coordinadores";
  const back = () => {
    let currentURL = window.location.pathname;

  // Si la URL termina con una barra '/', la eliminamos para evitar redirecciones innecesarias
  if (currentURL.endsWith('/')) {
    currentURL = currentURL.slice(0, -1);
  }

  // Dividimos la URL en segmentos
  const segments = currentURL.split('/');

  // Verificamos si el último segmento es numérico
  let lastSegment = segments[segments.length - 1];
  if (!isNaN(parseInt(lastSegment))) {
    // Eliminamos el último segmento numérico
    segments.pop();
  }

  // Reunimos los segmentos restantes para formar la URL de la página superior
  var parentURL = segments.join('/');

  // Redireccionamos a la página superior
  window.location.href = parentURL;
  };
</script>

<Toast position="t" />
<nav class="w-full flex justify-between items-center h-[70px] sticky top-0">
  <!--<button
    type="button"
    class="bg-pink-600 px-3 py-1 rounded-3xl ml-4 h-[50px] text-light-50 {btnInvisible
      ? 'invisible'
      : ''}"
    on:click="{back}">Volver atrás</button
  >-->
<ol class="breadcrumb">
	<li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Skeleton</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb"><a class="anchor" href="/elements/breadcrumbs">Elements</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li>Breadcrumbs</li>
</ol>
  <a href="/" class="h-full flex flex-center">
    <img src="{Logo}" alt="" class="logo" />
  </a>
  <form method="post" action="{`/coordinadores/logout?red=coordinadores`}">
    <button
      type="submit"
      class="bg-pink-600 px-3 py-1 rounded-3xl ml-4 h-[50px] text-light-50"
      >Cerrar sesión</button
    >
  </form>
</nav>
<slot />
