<script>
    import Logo from "$lib/images/logo.jpg";
   
    import Menu from '@smui/menu';
    import List, { Item, Separator, Text } from '@smui/list';
    import { Icon } from '@steeze-ui/svelte-icon'
    import { ExpandMore, ExpandLess } from "@steeze-ui/material-design-icons";
    

    import Summary from "$lib/components/Summary.svelte";

    console.log("Desarrollado por Samuel Suarez. Github: @imsamuelsuarez");

    let panel = false;
    let clicked = 0;

</script>

<div
    class="flex flex-center flex-col w-full max-h-auto gap-6 bg-gray-100"
    style="min-height: calc(100vh + 10rem);"
>
    <h1 class="w-[90%]  text-2xl font-bold text-center">
        ¡Bienvenido, estudiante!
    </h1>
    <div
        class="w-[98%] flex flex-col items-center gap-10 bg-white rounded-lg"
        style="min-height: calc(100vh); max-height: auto; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"
    >
        <div
            class="w-full h-auto mt-5 flex flex-wrap gap-5 flex-center [&>button]:w-30 [&>button]:p-4 [&>button]:rounded-xl [&>button]:text-white
            md:[&>button]:w-1/6"
        >
            <button class=""><a href="./estudiantes/notas">Notas</a></button>
            <button>Inscribir</button>
            <button class="">Constancias</button>
            <button class="">Materias</button>
            <button class=''> Descargar </button>
               
        </div>

        <div class='w-11/12 lg:w-10/12'>
            <h2 class='text-center text-[18px] font-bold mb-4'>Informacion general</h2>
           

            <details class=''>
                <summary class=' flex w-full h-[40px] items-center gap-4 pl-4 rounded border border-gray-200'
                >
                    <span class='expand'>
                        <Icon src={ExpandMore} class='icon '/>
                    </span>
                   <span class='expanded'>
                    <Icon src={ExpandLess} class='icon '/>
                   </span>
     
                    Informacion del estudiante
                </summary>
                <div
                class="w-full mt-6 h-auto flex flex-wrap flex-col gap-6  [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:border-b [&>span]:border-gray-200"
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
      
            </details>

              
        </div>
    </div>
</div>

<style class='scss' scoped>

    span h2 {
        font-weight: 600;
        padding-left: 16px;
    }

    button {
        background-color: #db0081;
    }

    details .expanded {
    display: none;
  }

  details[open] .expanded {
    display: flex;
  }

  details[open] .expand {
    display: none;
  }

  details summary::-webkit-details-marker {
  display:none;
  width: 0;
}


</style>
