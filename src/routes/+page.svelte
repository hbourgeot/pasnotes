<script>
  import background from "../lib/images/layered-waves-haikei.svg";
  import Header from "$lib/components/Header.svelte";

  import logo from "../lib/images/pascal-fondo.png";
  import graduados from "$lib/images/est5.jpg";

  import first from "$lib/images/est4.jpg";
  import second from "$lib/images/est3.jpg";

  import footer from "$lib/images/footer-banner.jpg"
</script>
<svelte:head>
  <title>Instituto Universitario de Tecnología Pascal</title>
</svelte:head>
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

  <section class="w-full h-auto p-4 bg-pink-600">
    <div
      class="flex flex-col mx-auto max-h-full w-11/12 justify-center items-center gap-4 md:flex-row md:h-auto"
    >
      <figure class="">
        <img
          src={graduados}
          class="w-2/3 max-h-full"
          alt=""
        />
      </figure>
      <div class="max-w-[600px] text-center mt-4 lg:pl-5">
        <h2 class="pb-8 font-bold">¿QUIÉNES SOMOS?</h2>
        <p class="text-justify text-white text-[20px] leading-10 font-semibold">
          El Instituto Universitario de Tecnología Pascal (IUTEPAS) es una
          organización de Educación Superior de carácter privado, que te ofrece
          carreras de forma presencial o semipresencial que te permiten estudiar
          a tu propio ritmo.
        </p>
      </div>
    </div>
  </section>

  <section class=" w-full h-auto bg-white">
    <div
      class="w-11/12 mx-auto flex justify-center flex-col p-4 gap-8 text-black font-medium text-[20px] leading-8  lg:flex-row lg:p-8 border-b-pink-500 border-b-2"
    >
      <div class='lg:w-[50%] h-auto'>
        <figure class=" w-fit">
          <img src={second} class="w-1/2 mx-auto" alt="" />
        </figure>
        <div>
          <h2 class="!text-pink-600 text-center py-8">MISIÓN</h2>
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
        <figure class="  ">
          <img src={first} alt="" class="w-1/2 mx-auto" />
        </figure>
        <div>
          <h2 class="!text-pink-600 text-center py-8">VISIÓN</h2>
          <p class="text-justify">
            El Instituto Universitario de Tecnología Pascal (IUTEPAS) es una
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
    background: url("../lib/images/est6.jpg") center/cover no-repeat;
    background-attachment: fixed;
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
