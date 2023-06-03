<script>
     import Carousel from 'svelte-carousel'
    import Logo from '$lib/images/logo.jpg'

    const colors = [
        {
            color: '#0079FF',
            text: 'Ejemplo 1'
        }, 
        {
            color: '#0079FF',
            text: 'Ejemplo 1'
        }, 
        {
            color: '#0079FF',
            text: 'Ejemplo 1'
        }, 
        {
            color: '#0079FF',
            text: 'Ejemplo 1'
        }, 
    ]
        
    
</script>

<nav class='w-full h-[60px]'>
    <a href="/" class='h-full flex flex-center'>
        <img src="{Logo}" alt="" class='logo'>
    </a>
</nav>
<div class="flex flex-center flex-col w-full h-screen gap-6 bg-gray-100">
    <h1 class='text-2xl font-bold text-left w-[90%] mt-8'>¡Bienvenido, estudiante!</h1>
    <div class='w-[98%] flex flex-col items-center gap-10 bg-white rounded-lg' style="height: calc(100vh - 100px);">

       

            <div class='w-full h-[100px] carousel grid grid-cols-6'>
                        <article class='col-span-2 bg-[#5C8984]'>Notas</article>
                        <article class='col-span-2 bg-[#545B77]'>Inscripciones</article>
                        <article class='col-span-2 bg-[#9DB2BF]'>Ejemploo</article>
                        <article class='col-start-2 col-end-4 bg-[#DD58D6]'>ejemplooo</article>
                        <article class='col-start-4 col-end-6 bg-[#884A39]'>ejemplooo</article>
            </div> 

            <div class='w-full h-auto flex flex-col gap-4'>
                    <span>
                        <h2>Cedula:</h2>
                        <p></p>
                    </span>
                    <span>
                        <h2>Apellido y Nombre:</h2>
                        <p></p>
                    </span>
                    <span>
                        <h2>Especialidad:</h2>
                        <p></p>
                    </span>
                    <span>
                        <h2>Turno:</h2>
                        <p></p>
                    </span>
                    <span>
                        <h2>Lapso Ingreso:</h2>
                        <p></p>
                    </span>
                    <span>
                        <h2>Lapso en Curso:</h2>
                        <p></p>
                    </span>
                    <span>
                        <h2>Ultimo Lapso Cursado:</h2>
                        <p></p>
                    </span>
                    <span>
                        <h2>Tipo Ingreso:</h2>
                        <p></p>
                    </span>
                    <span>
                        <h2>Estado Academico:</h2>
                        <p></p>
                    </span>

            </div>
    </div>
</div>
<style>

div > article {
    width: 110px;
    height: 40px;
    border-radius: 10px;
    display: grid;
    place-content: center;
    color: white;
    font-weight: 300;
}

span h2 {
    font-weight: bold;
    padding-left: 16px;
}

</style>