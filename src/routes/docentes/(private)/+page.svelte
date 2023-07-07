<script lang='ts'>
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import type { TableSource } from "@skeletonlabs/skeleton";
  import type {PageData} from "./$types"
  import type { Materia } from "../../../app";
  import { goto } from "$app/navigation";

  export let data: PageData;
  
    let nombre_profesor = data.docente.nombre;
    
    const sourceData = data.materias.map((materia: Materia) => ({codigo: materia.id, nombre: materia.nombre, hp: materia.hp, ht: materia.ht, dia: materia.dia, inicio: materia.hora_inicio, fin: materia.hora_fin, estudiantes: materia.cantidad_estudiantes?.toString()}));

  const tableSimple: TableSource = {
    head: ["Código", "Nombre", "Horas prácticas", "Horas teóricas", "Día de clase", "Hora de inicio", "Hora de fin", "Estudiantes asignados"],
    body: tableMapperValues(sourceData, ["codigo", "nombre", "hp", "ht", "dia", "inicio", "fin", "estudiantes"]),
  };

  const handleSelection = (e: CustomEvent) => {
    goto(`/docentes/${e.detail[0]}`)
  }

</script>

<main class='w-full h-screen'>
    <section class='flex flex-col gap-5'>
        <h2 class='text-3xl text-left pl-6 pt-12 lg:pt-16 lg:pl-48'>Bienvenid@, {nombre_profesor}!</h2>
        <h2 class="text-xl text-left pl-10 mt-10">Materias asignadas: </h2>

        <Table interactive={true} on:selected={handleSelection} source={tableSimple} class='mx-auto w-[98%] text-center lg:w-[80%]'> </Table>

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