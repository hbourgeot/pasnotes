<script lang="ts">
    import type {PageData} from "./$types";
    import type {Estudiante, Notas} from "../../../../../app";
    import {Table, type TableSource, tableMapperValues} from "@skeletonlabs/skeleton";

    export let data: PageData

    let estudiante: Estudiante = data.estudiante;

    $: console.log(data.notas)

    let notas: Notas[] = data.notas

    let promedioSemestre = notas.map((nota) => nota.promedio).reduce((a, b) => a + b) / notas.length;

    const tableSource: TableSource = {
        head: ["Materia", "1er corte", "2do corte", "3er corte", "Promedio"],
        body: tableMapperValues(notas as unknown as any[], ["materia", "nota1", "nota2", "nota3", "promedio"]),
        foot: ["Promedio del semestre", "", "", "", `<code class='code text-lg rounded-full px-2'>${promedioSemestre}</code>`]
    }
</script>
<main class="flex flex-col justify-center items-center gap-8 p-8">
    <h2 class="text-5xl">Notas de <span class="text-sky-700 font-bold capitalize">{estudiante.nombre}</span></h2>
    <Table source={tableSource} class="w-full mb-5 lg:mx-auto" text="text-xl" regionCell="!text-xl"  />
</main>