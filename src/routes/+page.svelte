<script>
  import background from "../lib/images/layered-waves-haikei.svg";
  import Header from "$lib/components/Header.svelte";

  import logo from '../lib/images/pascal-fondo.png'
  import graduados from '$lib/images/graduados.png'
</script>

<main class="w-full h-screen">
  <Header />

  <section class='relative'>
      <div class='hero relative w-full h-[90vh] block lg:h-[70vh]'>
        <div class=' backdrop absolute w-full h-full bg-gray-900'></div>

        <div class='w-full absolute'>
          <figure class='w-full'>
            <img class='w-[250px] mx-auto py-12' src="{logo}" alt="">
          </figure>
  

          <span class='text-center text-[30px] flex flex-col gap-8 text-white font-bold'>
            <p style='line-height: 40px'>INSTITUTO UNIVERSITARIO DE TECNOLOGIA</p>
            <p class='text-[54px]'>PASCAL</p>
            <p style='line-height: 40px'>PORQUE TU FUTURO ES HOY</p>
          </span>

  
        </div>
       
      </div>
   
  </section>


  <section class='w-full h-auto p-4 bg-blue-600'>
      <div class='flex flex-col mx-auto h-[11/12] w-11/12 justify-center items-center gap-4 md:flex-row md:h-[300px]'>
          <figure class=''>
            <img src="{graduados}" class='w-[320px] min-w-[310px] max-w-[380px]' alt="">
          </figure>
          <div class='max-w-[380px] text-center mt-4 '>
            <h2 class='pb-8 font-bold'>¿QUIENES SOMOS?</h2>
            <p class='text-justify text-white text-[18px] font-semibold'>
              El Instituto Universitario de Tecnología Pascal (IUTPASCAL) es una organización de Educación Superior de carácter privado, que te  ofrece carreras de forma presencial o semipresencial que te permiten estudiar a tu propio ritmo.
            </p>
          </div>
      </div>
  </section>

  <section class='w-full h-[1000px] bg-white'>

  </section>
</main>

<style>
  .hero { 
    
    background: url('../lib/images/fondo-landing.png') center/cover no-repeat;
    
  }

  /* section {
    backdrop-filter: blur(10px);
  } */

  .backdrop {
    opacity: 50%;
    z-index: 0;
  }


h2 {
  font-size: 30px;
  color: white;
  font-weight: bold;
}
</style>
