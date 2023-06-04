<script>
    import Logo from "$lib/images/logo.jpg";

    import { ExpandMore, ExpandLess } from "@steeze-ui/material-design-icons";

    import Summary from "$lib/components/Summary.svelte";

    console.log("Desarrollado por Samuel Suarez. Github: @imsamuelsuarez");

    let panel = false;
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
<div
    class="flex flex-center flex-col w-full min-h-screen max-h-auto gap-6 bg-gray-100"
>
    <h1 class="w-[90%] mt-8 text-2xl font-bold text-center">
        ¡Bienvenido, estudiante!
    </h1>
    <div
        class="w-[98%] flex flex-col items-center gap-10 bg-white rounded-lg"
        style="min-height: calc(100vh - 100px); max-height: auto; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"
    >
        <div
            class="w-full h-auto mt-5 flex flex-wrap gap-5 flex-center [&>button]:w-30 [&>button]:p-4 [&>button]:rounded-xl [&>button]:text-white"
        >
            <button class=" bg-[#5C8984]"><a href="/">Notas</a></button>
            <button style="background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%);">Inscribir</button>
            <button class=" bg-[#9DB2BF]">Constancias</button>
            <button class=" bg-[#DD58D6]">Materias</button>
            <button class=" bg-[#884A39]">Descargar</button>
        </div>

        <div class='w-11/12 lg:w-10/12'>
            <h2 class='text-center text-[18px] font-bold'>Informacion general</h2>
           
                <div
                    class="w-full mt-6 h-auto flex flex-wrap flex-col gap-6 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
                >
                    <span>
                        <h2>Cedula:</h2>
                        <p>30.573.239</p>
                    </span>
                    <span>
                        <h2>Apellido y Nombre:</h2>
                        <p>SUAREZ RIVERO SAMUEL ALFONZO</p>
                    </span>
                    <span>
                        <h2>Especialidad:</h2>
                        <p>ING. EN SISTEMAS</p>
                    </span>
                    <span>
                        <h2>Turno:</h2>
                        <p>Nocturno</p>
                    </span>
                    <span>
                        <h2>Lapso Ingreso:</h2>
                        <p>202101</p>
                    </span>
                    <span>
                        <h2>Lapso en Curso:</h2>
                        <p>2022/2023</p>
                    </span>
                    <span>
                        <h2>Ult. Lapso Cursado:</h2>
                        <p>2021/2023</p>
                    </span>
                    <span>
                        <h2>Tipo Ingreso:</h2>
                        <p>Regular</p>
                    </span>
                    <span>
                        <h2>Estado Academico:</h2>
                        <p>Regular</p>
                    </span>
                </div>
          
        </div>
    </div>
</div>

<style>

    span h2 {
        font-weight: 600;
        padding-left: 16px;
    }
</style>
