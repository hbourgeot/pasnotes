<script>
  import "../app.postcss";
  import "../css/app.css";
  import Logo from "$lib/images/logo.jpg";

  // Your selected Skeleton theme:
  import '@skeletonlabs/skeleton/themes/theme-modern.css';

  // This contains the bulk of Skeletons required styles:
  import "@skeletonlabs/skeleton/styles/skeleton.css";

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import "../app.postcss";
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";

  const logOut = () => {
    window.location.href = `/logout?red=${$page.url.pathname.replaceAll("/", " ").split(" ")[1]}`;
  };
</script>

<nav
  class="w-full flex justify-between items-center h-[70px]"
  style="border-bottom: 1px solid rgb(229 231 235);
"
>
<form method="post" action={`/logout?red=${$page.url.pathname.replaceAll("/", " ").split(" ")[1]}`}>
  <button type="submit" class="bg-pink-600 px-3 py-1 rounded-3xl ml-4 h-[50px] text-light-50"
  >Cerrar sesión</button
  >
</form>
  <a href="/" class="h-full flex flex-center">
    <img src="{Logo}" alt="" class="logo" />
  </a>
</nav>

<main class="w-full h-screen">
  <slot />
</main>

<style scoped>
  main {
    background: rgba(243, 244, 246, 1);
    background: url("$lib/images/layered-waves-haikei.svg") center/cover
      no-repeat;
  }
</style>
