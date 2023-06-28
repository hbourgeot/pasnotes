<script lang='ts'>
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import type { TableSource } from "@skeletonlabs/skeleton";
  import type {PageData} from "./$types"

  export let data: PageData;
  
    let nombre_profesor = data.docente?.nombre;


    let table = {
        cantidad_estudiantes: 24
    }
    const sourceData = data.materias.map(materia => ({materia: materia.nombre, estudiantes: table.cantidad_estudiantes, codigo: materia.id, horasPracticas: materia.hp, horasTeoricas: materia.ht}));

  const tableSimple: TableSource = {
    // A list of heading labels.
    head: ["Materia", "Codigo", "Horas prácticas", "Horas teóricas", "Estudiantes asignados"],
    // The data visibly shown in your table body UI.
    body: tableMapperValues(sourceData, ["materia", "codigo", "horasPracticas", "horasTeoricas", "estudiantes"]),
  };

</script>

<main class='w-full h-screen'>
    <section class='flex flex-col gap-12'>
        <h2 class='text-3xl text-left pl-6 pt-12 lg:pt-16 lg:pl-48'>Bienvenid@, {nombre_profesor}!</h2>
        <div class='flex container h-auto rounded-md'>
             <section class='w-full mb-8'>
                <h3 class='text-2xl pl-4 py-4'>Acciones</h3>
              <ul class='flex justify-around items-center w-full'>
                <li class="!w-[10%]">Materias</li>
                <li class="!w-[10%]">Estudiantes</li>
                <li class="!w-[10%]"><a href="docentes/informacion">Informacion</a></li>
              </ul>
             </section>
        </div>

        <Table source={tableSimple} class='mx-auto w-[98%] lg:w-[60%]'> </Table>

    </section>
</main>

<style scoped>
    .container {
        width: 90%;
        background-color: rgba(209, 203, 203, 10);
        margin: 0 auto;

    }

    ul > li {
        width: 80px; 
        height: 80px;
        background-color: #194bca;
        color: white;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>