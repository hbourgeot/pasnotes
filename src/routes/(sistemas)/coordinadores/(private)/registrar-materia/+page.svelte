<script lang="ts">
  import { enhance } from "$app/forms";
  import {
    Toast,
    toastStore,
    type ToastSettings,
    InputChip,
    Autocomplete,
    type AutocompleteOption,
    type PopupSettings,
    popup,
    type ModalSettings,
    modalStore,
    type ModalComponent,
    Modal,
  } from "@skeletonlabs/skeleton";

  import {
    TimePicker
  } from "carbon-components-svelte";
  import type { Docente } from "../../../../../app";
  import type { ActionData, PageData } from "./$types";
  import ModalList from "$lib/components/ModalList.svelte";
  import { triggerToast } from "$lib/utils/toast";

  export let data: PageData;
  export let form: ActionData;

  let docentesSelect: Docente[] = data.docentes as unknown as Docente[];
  let materias: string[] = data.materias;
  let listMaterias = data.list;
  let materiasIDs: string[] = [];
  let clicked: boolean = false;
  let prelacion: string = "";
  let horaInicio = "";
  let horaFin = "";

  $: if (materiasIDs.length > 0) {
    prelacion = materiasIDs.join(" - ");
  }

  $: if (form?.message) {
    triggerToast(form.message);
  }



  const carreras = data.carreras ?? [];

  const days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const modalComponentRegistry: Record<string, ModalComponent> = {
    // Custom Modal 1
    modalList: {
      // Pass a reference to your custom component
      ref: ModalList,
      props: { materias: listMaterias },
    },
  };

  const handleAdd = async () => {
    try {
      materiasIDs = await new Promise<string[]>((resolve) => {
        const modal: ModalSettings = {
          type: "component",
          // Pass the component registry key as a string:
          component: "modalList",
          title: "Seleccionar materias",
          body: "Selecciona las materias que deseas inscribir, vuelve a pulsar en ella para descartarla de la inscripcion",
          response: (r: string[]) => {
            resolve(r);
          },
        };
        modalStore.trigger(modal);
      });

      for (const id of materiasIDs) {
        const materiaFind = materias.find((mat) => mat == id.toString());
        if (!materiaFind) {
          materias.push(
            materias.find(
              (materia) => materia == id.toString()
            ) as unknown as string
          );
        } else {
          materias = materias.filter((mat) => mat === id.toString());
        }
      }
      clicked = true;
    } catch (e) {
      console.error(e);
    }
  };

  function checkHora(hora: number) {
    return hora > 12 || (hora > 8 && hora < 12);
  }

  function checkHoraLabel(hora: number, fin: boolean) {
    if (hora > 12) return "No se acepta el formato de 24 horas";

    let label = fin ? "finalizar" : "comenzar";

    if (hora > 8 && hora < 12)
      return `La hora de clase no puede ${label} a esta hora`;
  }
</script>

<div class="container flex flex-col justify-center items-center lg:w-1/2 md:w-2/3 mx-auto px-4 py-8 screen">
  <div class="bg-white p-8 rounded-2xl shadow">
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
          <select
            id="credito"
            name="unidad_credito"
            class="select py-2 px-7"
            value="1"
            required
          >
            <option value="1">1 U.C.</option>
            <option value="2">2 U.C.</option>
            <option value="3">3 U.C.</option>
            <option value="4">4 U.C.</option>
          </select>
        </div>
        <div class="mb-4 w-1/5">
          <label for="hp" class="label">Horas prácticas</label>
          <select class="select py-2 px-7" value="1" id="hp" name="hp" required>
            <option value="1">1h</option>
            <option value="2">2h</option>
            <option value="3">3h</option>
            <option value="4">4h</option>
          </select>
        </div>
        <div class="mb-4 w-1/5">
          <label for="ht" class="label">Horas teóricas</label>
          <select class="select py-2 px-7" value="1" id="ht" name="ht" required>
            <option value="1">1h</option>
            <option value="2">2h</option>
            <option value="3">3h</option>
            <option value="4">4h</option>
          </select>
        </div>
        <div class="mb-4 w-1/5">
          <label for="semestre" class="label">Semestre</label>
          <select
            name="semestre"
            id="semestre"
            class="select py-2 px-7"
            value="1"
            required
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
            required
          >
            {#each docentesSelect as docente}
              <option value="{docente.cedula}">{docente.nombre}</option>
            {/each}
          </select>
        </div>
      </div>
      <div class="flex justify-between items-center gap-x-5">
        <div class="mb-4 w-1/5">
          <label for="dia" class="label">Día de clases</label>
          <select
            name="dia"
            id="dia"
            class="select py-2 px-7"
            value="{0}"
            required
          >
            {#each days as dia, i}
              <option value="{i}">{dia}</option>
            {/each}
          </select>
        </div>
        <div class="mb-4 w-1/5">
          <label for="modalidad" class="label">Modalidad</label>
          <select
            name="modalidad"
            id="modalidad"
            class="select py-2 px-7"
            value="{0}"
            required
          >
              <option value="Presencial">Presencial</option>
              <option value="Digital">Digital</option>
          </select>
        </div>
        <div class="mb-4 w-1/5">
          <TimePicker
            labelText="Hora de inicio"
            bind:value="{horaInicio}"
            pattern="^(0[0-9]|1[0-9]):[0-5][0-9]$"
            invalid="{checkHora(parseInt(horaInicio.split(':')[0]))}"
            invalidText="{checkHoraLabel(
              parseInt(horaInicio.split(':')[0]),
              false
            )}"
            placeholder="hh:mm"
            name="hora_inicio"
            class="input py-2 px-7"
          />
        </div>
        <div class="mb-4 w-1/5">
          <TimePicker
          name="hora_fin"
            labelText="Hora de finalización"
            bind:value="{horaFin}"
            pattern="^(0[0-9]|1[0-9]):[0-5][0-9]$"
            invalid="{checkHora(parseInt(horaFin.split(':')[0]))}"
            invalidText="{checkHoraLabel(
              parseInt(horaFin.split(':')[0]),
              true
            )}"
            placeholder="hh:mm"
            class="input py-2 px-7"
          />
        </div>
      </div>
      <div class="mb-4 flex flex-row-reverse items-center justify-between">
        <button type="button" on:click="{handleAdd}" class="bg-blue-600 text-white px-4 py-2 rounded"
          >Seleccionar prelación de materias</button
        >
        {#if clicked}
        <div>
          <input type="text" class="input (text) py-2 px-7 my-3" readonly bind:value="{prelacion}" name="prelacion" required minlength="1">
          <p class="text-sm text-red-400">Nota: cada que hagas click en ese botón, tendrás que elegir la prelación desde cero</p>
        </div>
        {/if}
      </div>
      <button type="submit" class="bg-blue-600 w-full text-white px-4 py-2 rounded"
        >Registrar materia</button
      >
    </form>
  </div>
</div>
<Modal components={modalComponentRegistry} />


<style>
  :global(.bx--form-requirement) {
    font-size: 12px;
    color: #db0098;
  }

  .screen{
    height: calc(100vh - 80px);
  }
</style>
