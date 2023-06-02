<script>
    import "../app.css";
</script>
<nav class='flex gap-10 justify-center items-center w-full h-20 bg-red-400'>
    <a href=""><button>Profesores</button></a>
    <a href="./estudiantes"><button>Estudiantes</button></a>
    <a href=""><button>Otra cosa</button></a>
</nav>
<slot/>

<style>
    * {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>