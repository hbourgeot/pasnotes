<script>
  import background from "../lib/images/layered-waves-haikei.svg";
  import Header from "$lib/components/Header.svelte";

  import logo from "../lib/images/pascal-fondo.png";
  import graduados from "$lib/images/graduados.png";

  import first from "$lib/images/landing-2.png";
  import second from "$lib/images/landing3.png";

  import footer from "$lib/images/footer-banner.jpg"

  import Saos from 'saos';
</script>

<main class="w-full h-screen">
  <Header />

  <section class="relative">
    <div class="hero relative w-full h-[90vh] block lg:h-[90vh]">
      <div class=" backdrop absolute w-full h-full bg-gray-900" />

      <div class="w-full absolute flex justify-center py-12">
        <Saos animation={"slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}>
          <figure class="w-full">
            <img class="w-[250px] mx-auto py-12" src={logo} alt="" />
          </figure>
  
          <div
            class="text-center text-[30px] flex flex-col gap-8 text-white font-bold"
          >
            <p style="line-height: 40px">INSTITUTO UNIVERSITARIO DE TECNOLOGIA</p>
            <p class="text-[54px]">PASCAL</p>
            <p style="line-height: 40px">PORQUE TU FUTURO ES HOY</p>
          </div>
        </Saos>
      </div>
    </div>
  </section>

  <section class="w-full h-[90vh] flex items-center justify-center bg-blue-600">
    <div
      class="flex flex-col mx-auto h-full w-11/12 justify-center items-center gap-4 md:flex-row md:h-auto"
    >
      <Saos animation={"from-left 600ms linear both "}>
        <figure class="">
          <img
            src={graduados}
            class=""
            alt=""
          />
        </figure>
      </Saos>
      <Saos animation={"from-right 600ms linear both"}>
        <div class="max-w-[600px] text-center mt-4 lg:pl-5">
          <h2 class="pb-8 font-bold">¿QUIENES SOMOS?</h2>
          <p class="text-justify text-white text-[20px] leading-10 font-semibold">
            El Instituto Universitario de Tecnología Pascal (IUTPASCAL) es una
            organización de Educación Superior de carácter privado, que te ofrece
            carreras de forma presencial o semipresencial que te permiten estudiar
            a tu propio ritmo.
          </p>
        </div>
      </Saos>
    </div>
  </section>

  <section class=" w-full h-auto bg-white">
    <div
      class="w-11/12 mx-auto flex justify-center flex-col p-4 gap-8 text-black font-medium text-[20px] leading-8  lg:flex-row lg:p-8"
      style='border-bottom: 2px solid gray'
    >
        <div class='lg:w-[50%] h-auto'>
          <Saos animation={"from-left 600ms linear both"}>
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
          </Saos>
        </div>

      
        <div class='lg:w-[50%] h-auto'>
          <Saos animation={"from-right 600ms linear both"}>
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
          </Saos>         
        </div>
    </div>
  </section>

  <footer class='bg-white w-full h-full flex items-center justify-center'>
    <Saos animation={"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}>
      <figure class='w-full h-full mx-auto'>
        <img src="{footer}" class='mx-auto' alt="footerImg">
      </figure>
    </Saos>
  </footer>
</main>

<style>
  .hero {
    background: url("../lib/images/fondo-landing.png") center/cover no-repeat;
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

  @keyframes -global-slide-in-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes -global-from-left {
		0% {
			transform: rotateX(50deg) translateX(-100vw);
			opacity: 1;
		}
		100% {
			transform: rotateX(0deg) translateX(0);
			opacity: 1;
		}
	}

	@keyframes -global-from-right {
		0% {
			transform: rotateX(-50deg) translateX(100vw);
			opacity: 1;
		}
		100% {
			transform: rotateX(0deg) translateX(0);
			opacity: 1;
		}
	}

  @keyframes -global-scale-in-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
