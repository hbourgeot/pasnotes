<script>
  import background from "../lib/images/layered-waves-haikei.svg";
  import Header from "$lib/components/Header.svelte";

  import logo from "../lib/images/pascal-fondo.png";
  import graduados from "$lib/images/graduados.png";

  import first from "$lib/images/landing-2.png";
  import second from "$lib/images/landing3.png";

  import footer from "$lib/images/footer-banner.jpg"
</script>

<main class="w-full h-screen">
  <Header />

  <section class="relative">
    <div class="hero relative w-full h-[90vh] block lg:h-[70vh]">
      <div class=" backdrop absolute w-full h-full bg-gray-900" />

      <div class="w-full absolute">
        <figure class="w-full">
          <img class="w-[250px] mx-auto py-12" src={logo} alt="" />
        </figure>

        <span
          class="text-center text-[30px] flex flex-col gap-8 text-white font-bold"
        >
          <p style="line-height: 40px">INSTITUTO UNIVERSITARIO DE TECNOLOGIA</p>
          <p class="text-[54px]">PASCAL</p>
          <p style="line-height: 40px">PORQUE TU FUTURO ES HOY</p>
        </span>
      </div>
    </div>
  </section>

  <section class="w-full h-auto p-4 bg-blue-600">
    <div
      class="flex flex-col mx-auto h-[11/12] w-11/12 justify-center items-center gap-4 md:flex-row md:h-auto"
    >
      <figure class="">
        <img
          src={graduados}
          class=""
          alt=""
        />
      </figure>
      <div class="max-w-[600px] text-center mt-4 lg:pl-5">
        <h2 class="pb-8 font-bold">¿QUIENES SOMOS?</h2>
        <p class="text-justify text-white text-[20px] leading-10 font-semibold">
          El Instituto Universitario de Tecnología Pascal (IUTPASCAL) es una
          organización de Educación Superior de carácter privado, que te ofrece
          carreras de forma presencial o semipresencial que te permiten estudiar
          a tu propio ritmo.
        </p>
      </div>
    </div>
  </section>

  <section class=" w-full h-auto bg-white">
    <div
      class="w-11/12 mx-auto flex justify-center flex-col p-4 gap-8 text-black font-medium text-[20px] leading-8  lg:flex-row lg:p-8"
      style='border-bottom: 2px solid gray'
    >
      <div class='lg:w-[50%] h-auto'>
        <figure class=" mx-auto ">
          <img src={second} class="" alt="" />
        </figure>
        <div>
          <h2 class="!text-blue-700 text-center py-8">MISION</h2>
          <ul class='flex flex-col gap-6'>
            <li class="text-justify">
              •  Favorecer, a través de los estudios de nivel superior el
              desarrollo y la promoción del hombre, de la comunidad y la región
              donde está establecida la institución.
            </li>
            <li>
              •  Formar Técnicos Superiores caracterizados por un alto de nivel de capacitación práctica, en atención a las necesidades de desarrollo social y económico del país en general y de la región en particular.
            </li>
            <li>
              •  Capacitar a los estudiantes a fin de que afronten con éxito las exigencias específicas de los estudios profesionales de nivel superior.
            </li>
          </ul>
        </div>
      </div>

      <div class='lg:w-[50%] h-auto'>
        <figure class=" mx-auto ">
          <img src={first} alt="" class="" />
        </figure>
        <div>
          <h2 class="!text-blue-700 text-center py-8">VISION</h2>
          <p class="text-justify">
            El Instituto Universitario de Tecnología Pascal (IUTPASCAL) es una
            organización de Educación Superior de carácter privado, sin fines de
            lucro, cuyo objetivo es formar Técnicos Superiores Universitarios en
            áreas prioritarias de las ciencias tecnológicas, el cual ofrece a
            sus estudiantes herramientas para que estos asuman actitudes
            críticas, analíticas, responsables y nacionales capaces de
            participar activamente en el desarrollo que impone la región y
            Venezuela.
          </p>
        </div>
      </div>
    </div>
  </section>

  <footer class='bg-white py-10 w-full h-auto'>
    <figure class='w-full h-auto mx-auto'>
      <img src="{footer}" class='mx-auto' alt="">
    </figure>
  </footer>
</main>

<style>
  .hero {
    background: url("../lib/images/fondo-landing.png") center/cover no-repeat;
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
