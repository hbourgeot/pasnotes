<script>
  import Header from "$lib/components/Header.svelte";
  import logo from "../lib/images/pascal-fondo.png";
  import graduados from "$lib/images/est5.jpg";
  import first from "$lib/images/est4.jpg";
  import second from "$lib/images/est3.jpg";
  import footer from "$lib/images/footer-banner.jpg";
  import Carousel from "svelte-carousel";

  import cyc from "$lib/images/cyc.jpg";
  import cye from "$lib/images/cye.jpeg";
  import admban from "$lib/images/admban.jpg";
  import admemp from "$lib/images/admemp.jpg";
  import tda from "$lib/images/tda.jpeg";
  import informatica from "$lib/images/informatica.jpg";
  import disgraf from "$lib/images/disgraf.jpg";

</script>

<svelte:head>
  <title>Instituto Universitario de Tecnología Pascal</title>
</svelte:head>
<main class="w-full">
  <Header />

  <section>
    <div class="hero relative w-full h-[90vh] block lg:h-[70vh]">
      <div class=" backdrop absolute w-full h-full bg-gray-900"></div>

      <div class="w-full absolute">
        <figure class="w-full">
          <img class="w-[250px] mx-auto py-12" src="{logo}" alt="" />
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
      class="flex flex-col mx-auto max-h-full w-11/12 justify-center items-center gap-4 md:flex-row md:h-auto z-40"
    >
      <figure class="">
        <img src="{graduados}" class="w-2/3 max-h-full" alt="" />
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
      class="w-11/12 mx-auto flex justify-center flex-col p-4 gap-8 text-black font-medium text-[20px] leading-8 lg:flex-row lg:p-8 border-b-pink-500 border-b-2"
    >
      <div class="lg:w-[50%] h-auto">
        <figure class=" w-fit">
          <img src="{second}" class="w-1/2 mx-auto" alt="" />
        </figure>
        <div>
          <h2 class="!text-pink-600 text-center py-8">MISIÓN</h2>
          <ul class="flex flex-col gap-6">
            <li class="text-justify">
              • Favorecer, a través de los estudios de nivel superior el
              desarrollo y la promoción del hombre, de la comunidad y la región
              donde está establecida la institución.
            </li>
            <li>
              • Formar Técnicos Superiores caracterizados por un alto de nivel
              de capacitación práctica, en atención a las necesidades de
              desarrollo social y económico del país en general y de la región
              en particular.
            </li>
            <li>
              • Capacitar a los estudiantes a fin de que afronten con éxito las
              exigencias específicas de los estudios profesionales de nivel
              superior.
            </li>
          </ul>
        </div>
      </div>

      <div class="lg:w-[50%] h-auto">
        <figure class="  ">
          <img src="{first}" alt="" class="w-1/2 mx-auto" />
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

  <section class="w-full h-auto p-4 bg-pink-600">
    <div class="mx-auto max-h-full w-11/12 md:h-auto p-3">
      <h2 class="pb-8 font-bold uppercase text-center">nuestras carreras</h2>
      <Carousel
        autoplay
        autoplayDuration="{5000}"
        autoplayProgressVisible
        pauseOnFocus
      >
        <div
          class="relative h-64 bg-cover bg-center"
          style="background-image: url('{disgraf}');"
        >
          <div
            class="absolute inset-0 bg-sky-600/60 transition duration-300"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
          >
            <h2 class="text-2xl font-semibold">Diseño Gráfico</h2>
            <p class="text-sm mt-2">
              Embárcate en un viaje creativo con el Diseño Gráfico. Descubre
              cómo dar vida a tus ideas a través de la combinación de imágenes y
              texto. Explora los fundamentos del diseño, la composición y la
              comunicación visual mientras creas impactantes piezas gráficas.
            </p>
            <p class="text-sm mt-2">
              Desde la creación de logotipos hasta la maquetación de revistas,
              el Diseño Gráfico abarca una amplia gama de posibilidades para
              expresar tu creatividad. Aprende a utilizar herramientas digitales
              y conceptos estéticos para comunicar mensajes visuales efectivos.
            </p>
            <a href="/diseno_grafico" target="_blank" class="mt-4 btn variant-filled-surface bg-pink-600"
              >Ver Pensum</a
            >
          </div>
        </div>

        <!-- Contabilidad y Costos -->
        <div
          class="relative h-64 bg-cover bg-center"
          style="background-image: url('{cyc}');"
        >
          <div
            class="absolute inset-0 bg-sky-600/60 transition duration-300"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
          >
            <h2 class="text-2xl font-semibold">Contabilidad y Costos</h2>
            <p class="text-sm mt-2">
              Sumérgete en el mundo financiero con la carrera de Contabilidad y
              Costos. Aprende a interpretar los números detrás de las
              operaciones empresariales y a tomar decisiones informadas para
              optimizar los recursos financieros.
            </p>
            <p class="text-sm mt-2">
              Desde el análisis de estados financieros hasta la planificación
              tributaria, esta carrera te proporcionará las habilidades
              necesarias para mantener el equilibrio financiero de las
              organizaciones. Explora cómo la contabilidad puede influir en la
              toma de decisiones estratégicas y en el crecimiento sostenible de
              las empresas.
            </p>
            <a href="/contabilidad_costos" target="_blank" class="mt-4 btn variant-filled-surface bg-pink-600"
              >Ver Pensum</a
            >
          </div>
        </div>

        <!-- Administración Bancaria y Financiera -->
        <div
          class="relative h-64 bg-cover bg-center"
          style="background-image: url('{admban}');"
        >
          <div
            class="absolute inset-0 bg-sky-600/60 transition duration-300"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
          >
            <h2 class="text-2xl font-semibold">
              Administración Bancaria y Financiera
            </h2>
            <p class="text-sm mt-2">
              Descubre el mundo de las finanzas y la banca a través de esta
              emocionante carrera. Aprende cómo funcionan las instituciones
              financieras, explora los mercados y comprende los conceptos clave
              de la gestión de riesgos y las inversiones.
            </p>
            <p class="text-sm mt-2">
              Desde la banca minorista hasta las estrategias de inversión, esta
              carrera te proporcionará una base sólida en el sector financiero.
              Explora cómo las decisiones económicas y políticas influyen en la
              economía global y cómo puedes contribuir al éxito financiero de
              individuos y empresas.
            </p>
            <a href="/admin_bancaria_finan" target="_blank" class="mt-4 btn variant-filled-surface bg-pink-600"
              >Ver Pensum</a
            >
          </div>
        </div>

        <!-- Administración de Empresas -->
        <div
          class="relative h-64 bg-cover bg-center"
          style="background-image: url('{admemp}');"
        >
          <div
            class="absolute inset-0 bg-sky-600/60 transition duration-300"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
          >
            <h2 class="text-2xl font-semibold">Administración de Empresas</h2>
            <p class="text-sm mt-2">
              Desarrolla habilidades de liderazgo y gestión con la carrera de
              Administración de Empresas. Aprende a coordinar equipos, tomar
              decisiones estratégicas y optimizar recursos para alcanzar los
              objetivos corporativos.
            </p>
            <p class="text-sm mt-2">
              Desde la gestión de proyectos hasta la planificación estratégica,
              esta carrera te proporcionará las herramientas necesarias para
              enfrentar los desafíos del mundo empresarial. Explora cómo las
              habilidades de comunicación, la ética empresarial y la innovación
              pueden influir en el éxito a largo plazo de las organizaciones.
            </p>
            <a href="/admin_empresas" target="_blank" class="mt-4 btn variant-filled-surface bg-pink-600"
              >Ver Pensum</a
            >
          </div>
        </div>

        <!-- Informática -->
        <div
          class="relative h-64 bg-cover bg-center"
          style="background-image: url('{informatica}');"
        >
          <div
            class="absolute inset-0 bg-sky-600/60 transition duration-300"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
          >
            <h2 class="text-2xl font-semibold">Informática</h2>
            <p class="text-sm mt-2">
              Adéntrate en el emocionante mundo de la Informática. Aprende a
              programar, desarrollar software y crear soluciones tecnológicas
              innovadoras para abordar los desafíos modernos.
            </p>
            <p class="text-sm mt-2">
              Desde la codificación hasta la arquitectura de sistemas, esta
              carrera te proporcionará habilidades en lenguajes de programación,
              diseño de algoritmos y desarrollo de aplicaciones. Explora cómo la
              tecnología informática está transformando industrias y mejorando
              la vida de las personas en todo el mundo.
            </p>
            <a href="/informatica" target="_blank" class="mt-4 btn variant-filled-surface bg-pink-600"
              >Ver Pensum</a
            >
          </div>
        </div>

        <!-- Tecnología de Alimentos -->
        <div
          class="relative h-64 bg-cover bg-center"
          style="background-image: url('{tda}');"
        >
          <div
            class="absolute inset-0 bg-sky-600/60 transition duration-300"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
          >
            <h2 class="text-2xl font-semibold">Tecnología de Alimentos</h2>
            <p class="text-sm mt-2">
              Explora la ciencia y la creatividad detrás de la Tecnología de
              Alimentos. Aprende cómo crear, procesar y mejorar productos
              alimenticios seguros y deliciosos para el consumo humano.
            </p>
            <p class="text-sm mt-2">
              Desde la investigación de ingredientes hasta la producción y
              distribución, esta carrera te proporcionará conocimientos sobre
              nutrición, seguridad alimentaria y tecnologías de procesamiento.
              Descubre cómo contribuir a la innovación en la industria
              alimentaria y aportar soluciones para una alimentación sostenible.
            </p>
            <a href="/tecnologia_de_alimentos" target="_blank" class="mt-4 btn variant-filled-surface bg-pink-600"
              >Ver Pensum</a
            >
          </div>
        </div>

        <!-- Comunicación y Electrónica -->
        <div
          class="relative h-64 bg-cover bg-center"
          style="background-image: url('{cye}');"
        >
          <div
            class="absolute inset-0 bg-sky-600/60 transition duration-300"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
          >
            <h2 class="text-2xl font-semibold">Comunicación y Electrónica</h2>
            <p class="text-sm mt-2">
              Descubre la fusión entre la tecnología y la comunicación con la
              carrera de Comunicación y Electrónica. Aprende cómo diseñar y
              desarrollar sistemas electrónicos para transmitir información de
              manera efectiva.
            </p>
            <p class="text-sm mt-2">
              Desde las telecomunicaciones hasta la electrónica de consumo, esta
              carrera te proporcionará conocimientos sobre circuitos, señales y
              tecnologías de transmisión. Explora cómo las redes digitales y las
              soluciones de comunicación están conectando a las personas en todo
              el mundo y revolucionando la forma en que nos comunicamos.
            </p>
            <a href="/comunicacion_electronica" target="_blank" class="mt-4 btn variant-filled-surface bg-pink-600"
              >Ver Pensum</a
            >
          </div>
        </div>
      </Carousel>
    </div>
  </section>

  <footer class="bg-white py-10 w-full h-auto">
    <figure class="w-full h-auto mx-auto">
      <img src="{footer}" class="mx-auto" alt="" />
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

  :global(.sc-carousel-button,.sc-carousel-progress__indicator){
    background-color: white !important;
  }
</style>
