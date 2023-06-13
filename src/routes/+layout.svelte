<script>
    import "../css/app.css";
    import Logo from "$lib/images/logo.jpg";
</script>

<nav
    class="w-full h-[60px]"
    style="border-bottom: 1px solid rgb(229 231 235);
"
>
    <a href="/" class="h-full flex flex-center">
        <img src={Logo} alt="" class="logo" />
    </a>
</nav>

<main class='w-full h-screen'>
    <slot/>
</main>



<style scoped>
    main {
        background: rgba(243, 244, 246, 1);
    }
</style>