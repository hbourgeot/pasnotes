<script lang="ts">
  import { page } from "$app/stores";
  import Logo from "$lib/images/logo.jpg";
  import {type ModalComponent, Toast, Modal, type ModalSettings, modalStore } from "@skeletonlabs/skeleton";
  import ModalForm from "$lib/components/ModalFormNotas.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  $: if(data.peticion){
    console.log("hola")
    handleModal()
  }

  let btnInvisible: boolean;
  $: btnInvisible = $page.route.id === "/docentes";

  let cedulaEstudiante = data.peticion?.id_estudiante ?? ""
  let materia = data.peticion?.id_materia ?? ""
  let nombreCampo = data.peticion?.campo ?? ""

  const modalComponentRegistry: Record<string, ModalComponent> = {
    // Custom Modal 1
    modalForm: {
      // Pass a reference to your custom component
      ref: ModalForm,
      props: {cedulaEstudiante, materia, nombreCampo}
    },
  };

  const handleModal = async () => {
    const modal: ModalSettings = {
      type: "component",
      // Pass the component registry key as a string:
      component: "modalForm",
      title: `¡Oye ${data.docente.nombre}!`,
      body: `Tu petición #${data.peticion?.id} ha sido aprobada`,
    };
    modalStore.trigger(modal);
  };
</script>

<Toast position="t" />
<nav
  class="w-full flex justify-between items-center h-[70px]"
  style="border-bottom: 1px solid rgb(229 231 235);
"
>
  <button
    type="button"
    class="bg-pink-600 px-3 py-1 rounded-3xl ml-4 h-[50px] text-light-50 {btnInvisible
      ? 'invisible'
      : ''}"
    on:click={() => (window.location.pathname = "/docentes")}
    >Volver atrás</button
  >
  <a href="/" class="h-full flex flex-center">
    <img src={Logo} alt="" class="logo" />
  </a>
  <form method="post" action={`/docentes/logout?red=docentes`}>
    <button
      type="submit"
      class="bg-pink-600 px-3 py-1 rounded-3xl ml-4 h-[50px] text-light-50"
      >Cerrar sesión</button
    >
  </form>
</nav>
<slot />
<Modal components={modalComponentRegistry}/>
