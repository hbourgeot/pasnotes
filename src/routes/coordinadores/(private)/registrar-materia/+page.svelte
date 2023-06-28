<script lang="ts">
  import { enhance } from "$app/forms";
  import { Toast, toastStore, type ToastSettings } from "@skeletonlabs/skeleton";
  import type { Docente } from "../../../../app";
  import type { ActionData, PageData } from "./$types";

  export let data: PageData;
  export let form: ActionData;

  let docentesSelect: Docente[] = data.docentes as unknown as Docente[];

  $: if(form?.message){
    const t: ToastSettings = {
      message: form?.message
    };
    
		toastStore.trigger(t)
  }

  const carreras = [
    {id: 1, nombre:"Informática"},
    {id: 2, nombre:"Tecnología de Alimentos"},
    {id: 3, nombre:"Comunicación y Electrónica"},
    {id: 4, nombre:"Diseño Gráfico"},
    {id: 5, nombre:"Contabilidad y Costos"},
    {id: 6, nombre:"Administración Bancaria y Financiera"},
    {id: 7, nombre:"Administración Empresarial"},
  ];
  const days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const triggetToast = (title: string) => {
    const t: ToastSettings = {
      message: title
    };

		toastStore.trigger(t)
  }
</script>

<div class="container lg:w-1/2 md:w-2/3 mx-auto px-4 py-8">
    <Toast position="t" />
  <div class="bg-white p-8 rounded shadow">
    <h2 class="text-2xl font-semibold mb-4">Registrar materia</h2>
    <form id="docente-form" method="post" use:enhance>
      <div class="mb-4">
        <label for="id" class="label">Código de materia</label>
        <input
          type="text"
          id="id"
          name="id"
          class="input (text) py-2 px-7"
          required
        />
      </div>
      <div class="mb-4">
        <label for="nombre" class="label">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          class="input (text) py-2 px-7"
          required
        />
      </div>
      <div class="flex justify-between items-end">
        <div class="mb-4 w-1/5">
          <label for="credito" class="label">Unidades de crédito</label>
          <input
            type="number"
            min="0"
            max="5"
            id="credito"
            name="unidad_credito"
            class="input py-2 px-7"
            required
          />
        </div>
        <div class="mb-4 w-1/5">
          <label for="hp" class="label">Horas prácticas</label>
          <input
            type="number"
            min="0"
            max="5"
            id="hp"
            name="hp"
            class="input py-2 px-7"
            required
          />
        </div>
        <div class="mb-4 w-1/5">
          <label for="ht" class="label">Horas teóricas</label>
          <input
            type="number"
            min="0"
            max="5"
            id="ht"
            name="ht"
            class="input py-2 px-7"
            required
          />
        </div>
        <div class="mb-4 w-1/5">
          <label for="semestre" class="label">Semestre</label>
          <select
            name="semestre"
            id="semestre"
            class="select py-2 px-7"
            value="1"
          >
            <option value="1">1ro</option>
            <option value="2">2do</option>
            <option value="3">3ro</option>
            <option value="4">4to</option>
            <option value="5">5to</option>
            <option value="6">6to</option>
          </select>
        </div>
      </div>
      <div class="flex justify-between gap-x-5">
        <div class="mb-4 w-1/2">
          <label for="carrera" class="label">Carrera</label>
          <select
            name="id_carrera"
            id="carrera"
            class="select py-2 px-7"
            value="{carreras[0].id}"
          >
            {#each carreras as carrera}
              <option value="{carrera.id}">{carrera.nombre}</option>
            {/each}
          </select>
        </div>
        <div class="mb-4 w-1/2">
          <label for="docente" class="label">Docente</label>
          <select
            name="id_docente"
            id="docente"
            class="select py-2 px-7"
            value="{docentesSelect[0].cedula}"
          >
            {#each docentesSelect as docente}
              <option value="{docente.cedula}">{docente.nombre}</option>
            {/each}
          </select>
        </div>
      </div>
      <div class="flex justify-between gap-x-5">
        <div class="mb-4 w-1/5">
          <label for="dia" class="label">Día de clases</label>
          <select name="dia" id="dia" class="select py-2 px-7" value="{0}">
            {#each days as dia, i}
              <option value="{i}">{dia}</option>
            {/each}
          </select>
        </div>
        <div class="mb-4 w-1/5">
          <label for="hora_inicio" class="label">Hora de inicio</label>
          <input
            type="time"
            id="hora_inicio"
            name="hora_inicio"
            min="12:00"
            max="20:00"
            on:invalid="{() => triggetToast("Por favor seleccione una hora entre las 12:00 P.M. y las 8:00 P.M.")}"
            class="input py-2 px-7"
            required
          />
        </div>
        <div class="mb-4 w-1/5">
          <label for="hora_fin" class="label">Hora de culminación</label>
          <input
            type="time"
            id="hora_fin"
            name="hora_fin"
            min="12:00"
            max="20:00"
            on:invalid="{() => triggetToast("Por favor seleccione una hora entre las 12:00 P.M. y las 8:00 P.M.")}"
            class="input py-2 px-7"
            required
          />
        </div>
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded"
        >Registrar materia</button
      >
    </form>
  </div>
</div>

<style></style>
