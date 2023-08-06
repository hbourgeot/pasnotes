<script>
  import background from "../lib/images/layered-waves-haikei.svg";
  import Header from "$lib/components/Header.svelte";

  import logo from '../lib/images/pascal-fondo.png'
</script>

<main class="w-full h-screen">
  <Header />

  <section class='relative'>
      <div class='hero relative w-full h-[80vh] block lg:h-[70vh]'>
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


  <section class='w-full h-[500px] bg-blue-600'>
      <div>
        <h1>hola</h1>
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

</style>
