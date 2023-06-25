<script>
    let nombre_profesor = 'Docente';
</script>

<main class='w-full h-screen'>
    <section class=''>
        <h2 class='text-3xl text-left pl-6 py-8'>Bienvenido, {nombre_profesor}!</h2>
        <div class='flex container h-auto rounded-md'>
             <section class='w-full mb-8'>
                <h3 class='text-2xl pl-4 py-4'>Acciones</h3>
              <ul class='flex justify-around items-center w-full'>
                <li>Materias</li>
                <li>Estudiantes</li>
                <li><a href="docentes/informacion">Informacion</a></li>
              </ul>
             </section>
        </div>
    </section>
</main>

<style>
    .container {
        width: 90%;
        background-color: rgba(209, 203, 203, 10);
        margin: 0 auto;

    }

    ul > li {
        width: 80px; 
        height: 80px;
        background-color: green;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>