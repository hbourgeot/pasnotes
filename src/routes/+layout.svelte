<script>
  import "../app.postcss";
  import "../css/app.css";

  // Your selected Skeleton theme:
  import '@skeletonlabs/skeleton/themes/theme-modern.css';

  // This contains the bulk of Skeletons required styles:
  import "@skeletonlabs/skeleton/styles/skeleton.css";

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import "../app.postcss";
</script>

<main class="w-full">
  <slot />
</main>

<style scoped>
  main {
    background:  #666666; 
    background: url("$lib/images/layered-waves-haikei.svg") center/cover
      no-repeat;
    background-attachment: fixed;
  }
</style>
