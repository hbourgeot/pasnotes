<script>
<<<<<<< HEAD
    import "../css/app.css";
    import Logo from "$lib/images/logo.jpg";

    import Header from '$lib/components/Header.svelte'
</script>

<Header/>

<main class='w-full h-[90vh]'>
    <slot/>
=======
  import "../app.postcss";
  import "../css/app.css";
  import Logo from "$lib/images/logo.jpg";
  
// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/skeleton.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';
						
</script>

<nav
  class="w-full h-[60px]"
  style="border-bottom: 1px solid rgb(229 231 235);
"
>
  <a href="/" class="h-full flex flex-center">
    <img src={Logo} alt class="logo" />
  </a>
</nav>

<main class="w-full h-screen">
  <slot />
>>>>>>> 83b7b9e40ce9e8b2e7304148473732cabcfec8f8
</main>

<style scoped>
  main {
    background: rgba(243, 244, 246, 1);
  }
</style>
