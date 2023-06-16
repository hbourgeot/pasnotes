<script>
    import "../css/app.css";
    import Logo from "$lib/images/logo.jpg";

    import Header from '$lib/components/Header.svelte'
</script>

<Header/>

<main class='w-full h-[90vh]'>
    <slot/>
</main>



<style scoped>
    main {
        background: rgba(243, 244, 246, 1);
    }
</style>